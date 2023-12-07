import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ShoppingCart from './ShoppingCart';

const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://example.com/product1.jpg' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://example.com/product2.jpg' },
];

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems((prevItems) => prevItems.map((item) => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1 };
                }
                return item;
            }));
        } else {
            setCartItems((prevItems) => [...prevItems, {...product, quantity: 1 }]);
        }
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return ( <
        div className = "App" >
        <
        h1 > React Components and Props Lab < /h1> <
        div className = "products" > {
            products.map((product) => ( <
                ProductCard key = { product.id } {...product }
                onAddToCart = {
                    () => addToCart(product) }
                />
            ))
        } <
        /div> <
        ShoppingCart items = { cartItems }
        onRemoveItem = { removeItem }
        /> <
        /div>
    );
}

export default App;