/** 
 * this function calculates total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @return {number} Total price.
 */

export const totalPrice = (products) => {
    let total = 0;
    products.forEach(product => total  += product.price);
    return total;
}

/**
 * This function obtains current DateTime
 * @returns {string} Date Time
 */

export const dateTime = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date;
        
    return dateTime;
}