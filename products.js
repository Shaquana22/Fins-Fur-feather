// Array to hold available pet products
const products = [
    { name: "Birds", price: 300, qty: 1 },
    { name: "Dog Food", price: 50, qty: 1 },
    { name: "Fish Food", price: 20, qty: 1 },
    { name: "Cat Food", price: 40, qty: 1 },
    { name: "Dog Clothes", price: 30, qty: 1 },
    { name: "Cat Clothes", price: 25, qty: 1 },
    { name: "Dog Collar", price: 15, qty: 1 },
    { name: "Fish", price: 100, qty: 1 },
    { name: "Bird Cage", price: 135, qty: 1 },
    { name: "Chew Toys", price: 15, qty: 1 }
];

// Array to hold selected products
let cart = [];

// Function to add product to cart
function addToCart(productIndex) {
    const product = products[productIndex];
    cart.push(product);
    alert(`${product.name} added to cart.`);
    // Store cart in localStorage for persistence
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Store cart data in localStorage before redirecting to the invoice page
    localStorage.setItem('cart', JSON.stringify(cart));

    let subtotal = 0;
    let invoice = "Invoice:\n\n";

    // Calculate subtotal and generate invoice
    cart.forEach(product => {
        subtotal += product.price * product.qty;
        invoice += `${product.name} - $${product.price} x ${product.qty}\n`;
    });

    // Calculate taxes and total
    const taxRate = 0.15;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    invoice += `\nSubtotal: $${subtotal.toFixed(2)}`;
    invoice += `\nTax (15%): $${tax.toFixed(2)}`;
    invoice += `\nTotal: $${total.toFixed(2)}`;

    // Store invoice data in localStorage to display on invoice page
    localStorage.setItem('invoice', invoice);

    // Redirect to invoice page
    window.location.href = "invoice.html";
}

// Function to cancel the order
function cancelOrder() {
    cart = [];
    localStorage.removeItem('cart'); // Clear cart from localStorage
    alert("Order has been canceled.");
}

// Function to exit the page
function exitPage() {
    window.location.href = "index.html";
}
