Overview
This project simulates a simple vending machine using JavaScript. The vending machine allows users to deposit money, select a product by entering a product code, and then dispenses the product if sufficient funds are available. If the balance is insufficient, it prompts the user to add more money or choose a different product. The program also returns the remaining balance as change.

Features
Product Selection: Users can choose from a list of products by entering the corresponding product code.
Balance Management: The machine tracks the user's balance, adding money as it's entered and deducting the cost of selected products.
Change Dispensing: After the user exits, the machine returns any remaining balance in the form of different currency denominations.
Input Validation: The code ensures that the user enters valid amounts of money and valid product codes.

Usage
Start the Program: Run the JavaScript file using Node.js.
Enter Money: Users are prompted to enter money in rupees.
Select Product: Users can choose a product by entering the product code from the displayed list.
Get Product and Balance: If enough money is available, the product is dispensed, and the balance is updated.
Exit and Get Change: Enter 0 to terminate the session and receive any remaining balance as change.

Requirements
Node.js installed on your system.
prompt-sync package for synchronous input in the Node.js environment.
