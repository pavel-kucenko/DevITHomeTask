const app = document.querySelector("#app");





const historyResolver = (title, location) => {
    this.event.preventDefault();

    history.pushState({}, title, location)

    switch(location) {
        case '/test.html':
            console.log(app);
            $("#app").load("./test.html"); 
            break
    }
}