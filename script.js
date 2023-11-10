const items = document.querySelectorAll('.item');
const totalElement = document.querySelector('.total-price');

items.forEach((item) => {
    const quantityElement = item.querySelector('.item-quantity');
    const increaseButton = item.querySelector('.increase-quantity');
    const decreaseButton = item.querySelector('.decrease-quantity');
    const removeButton = item.querySelector('.remove-item');
    const likeButton = item.querySelector('.like-item');

    let quantity = parseInt(quantityElement.textContent);
    const price = parseInt(item.querySelector('.item-price').textContent.slice(8));

    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });

    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });

    removeButton.addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('active');
    });
});

function updateTotal() {
    let total = 0;
    items.forEach((item) => {
        const quantity = parseInt(item.querySelector('.item-quantity').textContent);
        const price = parseInt(item.querySelector('.item-price').textContent.slice(8));
        total += quantity * price;
    });
    totalElement.textContent = `Total: $${total}`;
}

updateTotal(); // Initial update of the total price
