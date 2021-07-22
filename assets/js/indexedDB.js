const productsData = [
    {
        id : 1,
        name : 'cream'
    },
    {
        id : 2,
        name : 'nail'
    }
]
    

const productsJson = JSON.stringify(productsData)

let db;

let openRequest = indexedDB.open('newDB', 1);

openRequest.onupgradeneeded = () => {
    db = openRequest.result;
    console.log('test');
    
    if (!db.objectStoreNames.contains('productsStore')) {
        db.createObjectStore('productsStore', {autoIncrement: true});
    }
}

openRequest.onsuccess = (event) => {
    console.log('успешно открыли бд');
    db = event.target.result;

    addJson();

    getJson();
}

openRequest.onerror = (event) => {
    console.log('ошибка при открытие бд ' + event.target.errorCode);
    db = event.target.result;
}

function addJson() {
    let transaction = db.transaction('productsStore', 'readwrite');
    let productsStore = transaction.objectStore('productsStore');

    let request = productsStore.add(productsJson, "productsKey")

    request.onsuccess = () => {
        console.log('обьект добавлен');
    }

    request.onerror = () => {
        console.log('обьект ошибка');
    }
}

function getJson() {
    let transaction = db.transaction('productsStore', 'readonly');
    let productsStore = transaction.objectStore('productsStore');
    
    let request = productsStore.get("productsKey")
    
    request.onsuccess = () => {
        console.log('обьект извлечен');
        let data = JSON.parse(request.result);

        data.forEach(element => {
            console.log(element.name);
        });
    }

    request.onerror = () => {
        console.log('обьект не найден');
    }
}
