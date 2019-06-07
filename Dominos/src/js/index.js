import { elements } from './views/base';

import Detail from './models/Detail';
import Cart from './models/Cart';
import * as detailView from './views/detailView';
import * as cartView from './views/cartView';

/**
 * GLOBAL CONTROLLER
 */


// Global State
const state = {
    cart: []
};

 
// Detail Controller
const detailController = () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');

    // Prepare UI for changes
    detailView.clearDetail();
    
    // New Detail object and add to state
    state.detail = new Detail(id);
    state.detail.getDetail();

    // Render result on UI
    detailView.renderDetail(state.detail);
    // Render button event listener
    document.querySelector('.detail__btn').addEventListener('click', cartController);
};

window.addEventListener('hashchange', detailController);
window.addEventListener('load', detailController);


// Cart Controller
const cartController = () => {
    // Get an item from state
    let item = state.detail;

    // Clear order detail statement
    // if(state.cart.length === 0) {
    //     cartView.clearCart();
    // }

    cartView.clearCart();

    // New cart item and get quantity & sauce and set an unique id
    item = new Cart(item);
    item.getQuantity();
    item.getSauce();

    // Check if the cart is empty first
    if(state.cart.length > 0) {
        // Find if the same item already exists in the cart
        let existingItemIndex = state.cart.find((obj, index) => {
            // if the item exists, replace it with the new item
            if(obj.title === item.item.title) {
                state.cart[index] = item.item;
                return true;
            }
        });

        // if the item doesn't exist, add it to cart
        if(!existingItemIndex) {
            state.cart.push(item.item);
        };
    } else {
        // Add new item to the empty cart state
        state.cart.push(item.item);
    }
    
    // Render result on UI
    for(let i = 0; i < state.cart.length; i++) {
        cartView.renderCart(state.cart[i]);

        // Add delete button event listener
        document.querySelectorAll('.cart__order-detail--del-btn')[i].addEventListener('click', function() {
            deleteCartItem(state.cart[i].id)
        });
        // Add edit button event listener
        document.querySelectorAll('.cart__order-detail--edit-btn')[i].addEventListener('click', function() {
            editCartItem(state.cart[i].id)
        });
    }

}

// Deleting cart item
const deleteCartItem = id => {
    // Find the item in the cart that matches the id
    const index = state.cart.findIndex(obj => obj.id === id);
    // Remove the item from cart state
    state.cart.splice(index, 1);
    // Rerender cart UI
    cartView.clearCart();
    for(let i = 0; i < state.cart.length; i++) {
        cartView.renderCart(state.cart[i]);
    }
}

// Editing cart item
const editCartItem = id => {
    // Prepare UI for changes
    detailView.clearDetail();
    
    // New Detail object and add to state
    state.detail = new Detail(id);
    state.detail.getDetail();

    // Render result on UI
    detailView.renderDetail(state.detail);
}