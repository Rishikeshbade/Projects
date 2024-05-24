
const loadApi = () => {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => getProducts(products))
}



const getProducts = (products) => {

    const displayProductUI = products.map((product) => displayProduct(product))

    const container = document.getElementById('products')

    container.innerHTML = displayProductUI.join('')
}

const displayProduct = (product) => {

    return (
        `
        <div class="Product">
        <img src="${product.image}" alt="">
        <h2>${product.title}</h2>
        <h2>${product.category}</h2>
        <h2>${product.price}</h2>
        </div>

        `
    )

}
loadApi()