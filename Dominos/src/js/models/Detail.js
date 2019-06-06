import { data } from '../views/base';

// Detail Class
export default class Detail {
    constructor(id) {
        this.id = id;
    }

    getDetail() {
        try {
            // Replace with ajax request for api
            const res = data.find(obj => obj.id === this.id);
            this.title = res.title;
            this.price = res.price.toFixed(2);
            this.desc = res.desc;
            this.sauce = res.sauce;
            this.qty = res.qty;
            this.toppings = res.toppings;

        } catch(error) {
            alert(error);
        }
    }
}