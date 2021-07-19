function goTo(links, url, content) {
    for (let i = 0; i < links.length; i++) {
        
        links[i].addEventListener('click', (e) => {
            e.preventDefault();
            history.pushState({}, '', url)
            $("#spa").load(content)
            
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            document.querySelector('.header-nav').classList.add('nav-bg-product')
        })
    }
}

const linksCart = document.querySelectorAll(".link-cart");
const linksHome = document.querySelectorAll(".link-home");

setInterval(() => {
    let linksProducts = document.querySelectorAll(".link-products");
    let linksProduct = document.querySelectorAll(".link-product");
    goTo(linksProducts, '/products', './../pages/products-test.html')
    goTo(linksProduct, '/products/:id', './../pages/product-test.html')
}, 1000)

goTo(linksCart, '/cart', './../pages/cart.html')
goTo(linksHome, '/', './../pages/test-home.html')