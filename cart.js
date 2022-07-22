///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(sum, price) {
    price = cart[1]
    const updatedSummedPrice = sum + price;
    return updatedSummedPrice;
}, 0);

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    tax = .06
    finalTotal = (cartTotal * tax) + cartTotal - couponValue
    return `The final total is $${finalTotal}.`
}

console.log(calcFinalPrice(30, 5))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The 4 properties I would have for my customers model would be name, 
    email, phone number, and if they would like to receive email/text
    messages with promotions. I chose these specific properties because
    this is a common marketing strategy used for websites. As far as data
    types, name, email and phone number would be strings and the promotion
    feature would be a boolean.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

class Customer {
    constructor(name, email, phoneNumber, allowPromotion) {
        this.name = name
        this.email = email
        this.phoneNumber = phoneNumber
        this.allowPromotion = allowPromotion
    }
}

let newCustomer = new Customer("Brennan Hogue", "hogue.brennan@gmail.com", "8016999704", true)

console.log(newCustomer)