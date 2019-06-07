import { elements } from "./base";

export const renderCart = cart => {
    const markup =  `
            <div class="cart__order-detail--box">
                <div class="cart__order-detail--name">
                    <span class="cart__order-detail--qty">${cart.qty}</span> X ${cart.title}
                </div>
                <div class="cart__order-detail--price">$${cart.price}</div>
                <button class="cart__order-detail--del-btn">Remove</button>
                <button class="cart__order-detail--edit-btn">Edit</button>
            </div>
        `;
    
    elements.cart.insertAdjacentHTML('beforeend', markup);
};

export const clearCart = () => {
    elements.cart.innerHTML = '';
};