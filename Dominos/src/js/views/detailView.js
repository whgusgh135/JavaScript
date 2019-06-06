import { elements } from "./base";


export const renderDetail = detail => {
    const markup = `
        <img class="detail__img" src="styles/img/NZ_P${detail.id}_en_menu_3179.png" alt="${detail.title}">

        <form class="detail__form">
            <div class="detail__form-box">  
                <div class="detail__title">
                    ${detail.title}
                </div>
                <div class="detail__price">
                    $${detail.price}
                </div>
                <div class="detail__description">
                    Huge pie cut into 8 extra-large slices topped with tender steak, mushrooms, red onion and capsicum on a creamy cheese sauce base
                </div>
            </div>
            
            <div class="detail__form-box">
                <div class="detail__title">
                    Current Sauce
                </div>
                <select class="detail__choice">
                    <option value="creamy">${detail.sauce[0]}</option>
                    <option value="barbeque">${detail.sauce[1]}</option>
                    <option value="pizza">${detail.sauce[2]}</option>
                    <option value="no">${detail.sauce[3]}</option>                            
                </select>
            </div>

            <div class="detail__form-box">
                <div class="detail__title">
                    QTY
                </div>
                <input class="detail__qty" type="number" value="${detail.qty}">
                <button class="detail__btn" type="submit">
                    Add to Order
                </button>
            </div>
            
        </form>
    `;
    elements.detail.insertAdjacentHTML('beforeend', markup);
};

export const clearDetail = () => {
    elements.detail.innerHTML = '';
};

