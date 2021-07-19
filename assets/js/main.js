const templateCart = document.querySelector("#cart").content.querySelector(".cart");
const templateProducts = document.querySelector("#products").content.querySelector(".page-products-main");
const templateHome = document.querySelector("#home");
const rootDiv = document.getElementById('spa');

const routes = {
    '/' : templateHome.outerHTML,
    '/products' : templateProducts.outerHTML,
    '/cart' : templateCart.outerHTML
}

// rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
}