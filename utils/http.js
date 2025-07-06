import axios from 'axios';

const BACKEND_URL ='https://expo-ecommercea-default-rtdb.firebaseio.com';


function addToCart(productId) {
    axios.post(`${BACKEND_URL}/cartItems.json`, {
        productId,
    })
}

function getCartItems({userId}) {
    axios.get(`${BACKEND_URL}/cartItems.json?auth=${userId}`)
    .then((response) => {
        const data = response.data;
        const transformedCartItems = [];
        
    })

}

export { addToCart, getCartItems };
