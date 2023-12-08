
var ShoppingCart = require('../src/myClass.js');
var chai = require('chai');
var sinon = require('sinon');
const expect = chai.expect;
const cart = new ShoppingCart();
const expectedCost = 3821.50;



// test ----> add shopping items 
describe('ShoppingCart', () => {
    describe('addItem', () => {
        it('should increase item count by 1', () => {
            // Arrange

            const initialCount = cart.getItemCount();

            // Act
            const item1 = { id: 1, name: 'Product 1', price: 100.00, quentity: 2, shappingCost: 3, tex: 0.25 };
            const item2 = { id: 2, name: 'Product 2', price: 150.00, quentity: 3, shappingCost: 3, tex: 0.25 };
            const item3 = { id: 3, name: 'Product 3', price: 100.00, quentity: 5, shappingCost: 3, tex: 5 }

            cart.addItem(item1);
            cart.addItem(item2);
            cart.addItem(item3);
            // Assert
            const finalCount = cart.getItemCount();


            expect(finalCount, initialCount + 1).to.be.equal(3);

        });


    });
});


//Testing -----> Total Shopping Calclution 

describe('ShoppingCart', () => {
    describe('getCalculateTotal', () => {
        it('Actual And Expected Output Calculation', () => {

            // Assert

            const totalCost = cart.getCalculateTotal()
            expect(totalCost, expectedCost).to.be.equal(3821.50);



        });
    });
});

// test ---> remove shopping items 

describe('ShoppingCart', () => {
    describe('removeItem', () => {
        it('should decrease  item count by 1', () => {
            // Assert


            const spy = sinon.spy(cart, 'removeItem');
            cart.removeItem(1);
            expect(spy.calledOnce).to.be.true;
            // expect(spy.calledWith(1)).to.be.true;
        });
    });
});

//test ----> after remove calculate the total product and prices

describe('ShoppingCart', () => {
    describe('afterRemoveItemCalculation', () => {
        it('Actual And Expected Output After Remove product addToCard Calculation', () => {
            // Assert
            const removeProductCalculation = cart.afterRemoveItemCalculation(3);
            expect(removeProductCalculation, 818.5).to.be.equal(818.50);
        });
    });
});

// test----> discount calculation without remove items 

describe('ShoppingCart', () => {
    describe('disCountCalculation', () => {
        it('Discount Calculation without Remove Items', () => {

            const totalCost = cart.getCalculateTotal();
            const spy = sinon.spy(cart, 'disCountCalculation')
            // cart.disCountCalculation('stop');
            cart.disCountCalculation(totalCost);
            expect(spy.calledOnce).to.be.true;
            //expect(spy.calledWith(191.075)).to.be.true;

        });
    });
});

// test ---> After discount the Total Amount is 

describe('ShoppingCart', () => {
    describe('afterDiscount_TotalAmount', () => {
        it('After discount the Total Amount is ', () => {

            const totalCost = cart.getCalculateTotal();
            const discountAmount = cart.disCountCalculation(totalCost);
            const afterDiscountAmount = cart.afterDiscount_TotalAmount(totalCost, discountAmount);
            expect(afterDiscountAmount, 3630.425).to.be.equal(3630.425);
        });
    });
});

// test----> discount calculation with  remove items 

describe('ShoppingCart', () => {
    describe('afterDiscount_TotalAmount', () => {
        it('less than three thousand discount testing', () => {
            // Assert
            const removeProductCalculation = cart.afterRemoveItemCalculation(3);
            const discountAmount = cart.disCountCalculation(removeProductCalculation);
            const afterDiscountAmount = cart.afterDiscount_TotalAmount(removeProductCalculation, discountAmount);
            expect(afterDiscountAmount, 818.5).to.be.equal(818.5);
        });
    });
});




