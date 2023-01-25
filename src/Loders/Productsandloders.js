import { getStetCart } from "../utilities/fakedb";

export const productsandloders = async () => {
    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get stor cart
    const savedCart = getStetCart();
    const previousCart = []
    //console.log(products);

    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);

        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return { products: products, previousCart: previousCart };


}