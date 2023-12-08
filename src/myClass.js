
class ShoppingCart {
    constructor() {
        this.items = [];


    }

    addItem(item) {

        if (typeof item === 'object') {
            this.items.push(item);
        }
        else {
            throw new Error('Please Provide the Object Value');
        }

    }

    removeItem(itemId) {
        if (typeof itemId === 'number') {
            return this.items.filter((v) => v.id !== itemId);
        }
        else {
            throw new Error('Please Provide the Number Value');
        }


    }
    getCalculateTotal() {


        return this?.items?.reduce((total, product) => {
            const itemPrice = product.price * product.quentity;
            const taxAmount = product.tex ? product.tex * itemPrice : 0;

            return total + itemPrice + product.shappingCost + taxAmount;
        }, 0);
    }

    afterRemoveItemCalculation(itemId) {

        if (typeof itemId === 'number') {
            return this?.items?.filter((v) => v.id !== itemId).reduce((total, product) => {
                const itemPrice = product.price * product.quentity;
                const taxAmount = product.tex ? product.tex * itemPrice : 0;

                return total + itemPrice + product.shappingCost + taxAmount;
            }, 0);
        }
        else {
            throw new Error('Please Provide the Number Value');
        }

    }
    discountPercentages(percentages, amount) {

        return (percentages * amount) / 100
    }


    disCountCalculation(value) {
        if (typeof value === 'string') {
            if (value === 'stop') { return 0 };
        }
        else if (typeof value === 'number') {
            const discountAmount = (value < 3000) ? this.discountPercentages(value, 0) : (value >= 3000 && value <= 10000) ? this.discountPercentages(5, value) : (value > 10000 && value <= 20000) ? this.discountPercentages(10, value) : this.discountPercentages(15, value);
            return discountAmount
        }
        else {
            throw new Error('Something went wrong---> discount polcy issues')
        }
    }

    afterDiscount_TotalAmount(amount, discount) {

        if (typeof amount === 'number' && typeof discount === 'number') {
            return amount - discount
        }
        else {
            throw new Error('Something went wrong---> After discount Total Amount issues')
        }


    }



    getItemCount() {
        return this.items.length;
    }


}

module.exports = ShoppingCart;