// Retrieve cart data (this would be passed from the previous page, typically via localStorage)
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Function to generate the invoice details
function generateInvoice() {
    let subtotal = 0;
    let invoiceDetails = '';

    cart.forEach((product, index) => {
        const productTotal = product.price * product.qty;
        subtotal += productTotal;
        invoiceDetails += `${product.name} - $${product.price} x ${product.qty} = $${productTotal.toFixed(2)}<br>`;
    });

    const taxRate = 0.15;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    invoiceDetails += `<br><strong>Subtotal:</strong> $${subtotal.toFixed(2)}<br>`;
    invoiceDetails += `<strong>Tax (15%):</strong> $${tax.toFixed(2)}<br>`;
    invoiceDetails += `<strong>Total:</strong> $${total.toFixed(2)}`;

    document.getElementById('invoice-details').innerHTML = invoiceDetails;
}

// Function to confirm the order
function confirmOrder() {
    alert('Thank you for your purchase! Your order has been confirmed.');
    localStorage.removeItem('cart'); // Clear the cart after confirmation
    window.location.href = "index.html"; // Redirect to homepage
}

// Function to cancel the order
function cancelOrder() {
    localStorage.removeItem('cart'); // Clear the cart
    alert('Your order has been canceled.');
    window.location.href = "index.html"; // Redirect to homepage
}

// Generate the invoice when the page loads
generateInvoice();
