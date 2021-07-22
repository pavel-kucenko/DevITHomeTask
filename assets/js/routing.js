const templateCart = document.querySelector("#cart").content.querySelector(".cart");
const templateProducts = document.querySelector("#products").content.querySelector(".page-products-main");
const templateProduct = document.querySelector("#product").content.querySelector(".product-content");
const templateHome = document.querySelector("#home");
const nav = document.querySelector('.header-nav');
const rootDiv = document.getElementById('spa');

const routes = {
    '/' : templateHome.outerHTML,
    '/products' : templateProducts.outerHTML,
    '/cart' : templateCart.outerHTML,
    '/products/:id' : templateProduct.outerHTML
}

const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.innerHTML = routes[pathname];
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
}

document.addEventListener('click', (event) => {
    
    let link = event.target.closest('a')
    if (link === null)
    return;

    if (event.target.classList.contains('link-home')) {
        changeContent(event, '/');
        changeClassForNav();
    }

    if (event.target.classList.contains('link-cart')) {
        changeContent(event, '/cart');
        changeClassForNav();
    }

    if (event.target.classList.contains('link-products')) {
        changeContent(event, '/products');
        changeClassForNav();
    }

    if (event.target.classList.contains('link-product')) {
        changeContent(event, '/products/:id');
        changeClassForNav('add');
    }
})

function changeContent(link, pathname) {
    link.preventDefault();
    link.stopPropagation();
    onNavigate(pathname);
    window.scrollTo({top: 0, behavior : 'smooth'});
}

function changeClassForNav(bool) {
    if(bool === 'add') {
        nav.classList.add('nav-bg-product');
    } else {
        nav.classList.remove('nav-bg-product');
    }
}
