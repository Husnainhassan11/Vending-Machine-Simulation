// JavaScript Vending Machine Simulation
const productCodes = [101, 102, 103, 104, 105];
const products = ["Coke", "Pepsi", "Fanta", "Sprite", "Water"];
const prices = [50, 60, 55, 40, 20];
const currency = [100, 50, 10, 1];
let balance = 0;

console.log("Welcome to the Vending Machine!");
console.log("Product Codes:");
for (let i = 0; i < 5; i++) {
    console.log(`${productCodes[i]} - ${products[i]} (${prices[i]} rupees)`);
}

let amount = 0;
const prompt = require('prompt-sync')(); // npm install prompt-sync

while (true) {
    amount = parseInt(prompt("Enter amount (in rupees): "));
    if (amount < 0) {
        console.log("Invalid amount. Please enter a positive value.");
        continue;
    }

    balance += amount;
    console.log(`Balance: ${balance} rupees`);

    let productCode = 0;
    while (true) {
        productCode = parseInt(prompt("Enter product code (or 0 to terminate): "));
        if (productCode === 0) {
            break;
        }
        
        if (!productCodes.includes(productCode)) {
            console.log("Invalid product code. Please enter a valid code.");
            continue;
        }
        
        const index = productCodes.indexOf(productCode);
        if (balance < prices[index]) {
            console.log("Insufficient balance. Please add more money or select another product.");
            break;
        }
        
        balance -= prices[index];
        console.log(`Purchased: ${products[index]}`);
        console.log(`Balance: ${balance} rupees`);
    }

    if (productCode === 0) {
        break;
    }
}

console.log("Thank you for using the Vending Machine!");
console.log("Withdrawal:");
for (let i = 0; i < 4; i++) {
    const count = Math.floor(balance / currency[i]);
    if (count > 0) {
        console.log(`${count} x ${currency[i]} rupees`);
    }
    balance %= currency[i];
}
