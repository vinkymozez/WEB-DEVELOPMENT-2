// script.js
document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const cancelButton = document.getElementById('cancelButton');
    const productSection = document.getElementById('productSection');
    const orderSection = document.getElementById('orderSection');
    const feedbackSection = document.getElementById('feedbackSection');
    const thankYouSection = document.getElementById('thankYouSection');
    const productList = document.getElementById('productList');
    const productSelect = document.getElementById('productSelect');
    const orderButton = document.getElementById('orderButton');
    const orderSummary = document.getElementById('orderSummary');
    const quantityInput = document.getElementById('quantity');

    const products = [
        { name: 'Whole Milk', price: 2.50 },
        { name: 'Skim Milk', price: 2.00 },
        { name: 'Almond Milk', price: 3.00 },
        { name: 'Soy Milk', price: 2.80 },
    ];

    function populateProducts() {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            productList.appendChild(listItem);

            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            productSelect.appendChild(option);
        });
    }

    function placeOrder() {
        const selectedProduct = productSelect.value;
        const quantity = parseInt(quantityInput.value);
        const product = products.find(p => p.name === selectedProduct);
        const totalCost = (product.price * quantity).toFixed(2);

        orderSummary.innerHTML = `
            <h3>Order Summary</h3>
            <p>Product: ${selectedProduct}</p>
            <p>Quantity: ${quantity}</p>
            <p>Total Cost: $${totalCost}</p>
        `;
    }

    function handleFeedbackSubmit(event) {
        event.preventDefault();  // Prevent the form from submitting normally
        document.getElementById('mainContent').style.display = 'none';
        thankYouSection.style.display = 'block';
    }

    function resetFeedbackForm() {
        feedbackForm.reset();
    }

    orderButton.addEventListener('click', placeOrder);
    feedbackForm.addEventListener('submit', handleFeedbackSubmit);
    cancelButton.addEventListener('click', resetFeedbackForm);

    populateProducts();
});
