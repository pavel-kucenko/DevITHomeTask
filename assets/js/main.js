const linkProducts = document.querySelectorAll(".link-products");

for (let i = 0; i < linkProducts.length; i++) {
    linkProducts[i].addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState({}, 'products', '/pages/test.html')
        $("#head").remove();
        $("#spa").load("./pages/test.html")
    })
}


const linkHome = document.querySelectorAll(".link-home");

console.log(linkHome);

for (let i = 0; i < linkHome.length; i++) {
    linkHome[i].addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState({}, 'home', '/')
        $("html").load("./index.html")
    })
}

