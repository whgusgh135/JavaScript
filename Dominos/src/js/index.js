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


// Cart Controller
const cartController = () => {
    // Get an item from state
    let item = state.detail;

    // Add the item to cart state
    item = new Cart(item);
    state.cart.push(item);

    // Render result on UI
    if(state.cart.length === 1) {
        cartView.clearCart();
    }
    cartView.renderCart(state.cart[state.cart.length - 1]);

}