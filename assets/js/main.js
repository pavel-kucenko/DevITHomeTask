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

        if(content === './pages/product-test.html') {
        }
    }
}


setInterval(() => {
    const linksProducts = document.querySelectorAll(".link-products");
    const linksProduct = document.querySelectorAll(".link-product");
    const linksCart = document.querySelectorAll(".link-cart");
    const linksHome = document.querySelectorAll(".link-home");
    goTo(linksProducts, '/products', './pages/products-test.html')
    goTo(linksProduct, '/:id', './pages/product-test.html')
    goTo(linksCart, '/cart', './pages/cart.html')
    goTo(linksHome, '/home', './pages/test-home.html')
}, 1000)
