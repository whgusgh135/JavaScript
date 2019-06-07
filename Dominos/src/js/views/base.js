// DOM elements
export const elements = {
    menuBox: document.querySelectorAll('.menu__box'),
    detail: document.querySelector('.detail'),
    cart: document.querySelector('.cart__order-detail')
};

// Pizza Dummy Data - Replace with API later
export const data = [
    {
        id: "325",
        title: "The Big Philly Cheese Steak",
        price: 18.90,
        desc: "Huge pie cut into 8 extra-large slices topped with tender steak, mushrooms, red onion and capsicum on a creamy cheese sauce base",
        sauce: ["Creamy Liquid Cheese", "Barbeque Sauce", "Pizza Sauce", "No Sauce"],
        qty: 1
    },
    {
        id: "321",
        title: "The Big Three Meats",
        price: 18.90,
        desc: "Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped with pepperoni, ground beef & Italian sausage",
        sauce: ["Creamy Liquid Cheese", "Barbeque Sauce", "Pizza Sauce", "No Sauce"],
        qty: 1
    },
    {
        id: "322",
        title: "The Big Ham & Pineapple",
        price: 18.00,
        desc: "Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped with ham & pineapple",
        sauce: ["Creamy Liquid Cheese", "Barbeque Sauce", "Pizza Sauce", "No Sauce"],
        qty: 1
    },
    {
        id: "316",
        title: "The Big Pepperoni",
        price: 18.00,
        desc: "Huge pie cut into 8 extra-large slices. Authentic soft and foldable New York style dough topped with tasty pepperoni & mozzarella",
        sauce: ["Creamy Liquid Cheese", "Barbeque Sauce", "Pizza Sauce", "No Sauce"],
        qty: 1
    }
];