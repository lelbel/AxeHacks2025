const menuItems = [
    { name: "Chairs", price: 5.99, image: "photos/chair.png", category: "furniture" },
    { name: "Table", price: 8.99, image: "https://via.placeholder.com/100", category: "furniture" },
    { name: "Rug", price: 5.49, image: "https://via.placeholder.com/100", category: "rugs" },
    { name: "Cat", price: 3.49, image: "https://via.placeholder.com/100", category: "pets" },
    { name: "Window", price: 10.49, image: "https://via.placeholder.com/100", category: "home_improvement" }
];

let balance = 20.00;
let cart = [];
let currentItemIndex = 0;

// Update balance display
function updateBalance() {
    document.getElementById("balance").textContent = balance.toFixed(2);
}

// Render menu based on selected category
function displayMenu(filteredCategory = "all") {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; // Clear menu before adding new items

    menuItems.forEach(item => {
        if (filteredCategory === "all" || item.category === filteredCategory) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");

            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: €${item.price.toFixed(2)}</p>
            `;

            itemDiv.addEventListener("click", () => {
                purchaseItem(item);
            });

            menuContainer.appendChild(itemDiv);
        }
    });
}

// Handle purchasing an item
function purchaseItem(item) {
    if (balance >= item.price) {
        balance -= item.price;
        cart.push(item);
        updateBalance();
        updateCart();
    } else {
        alert("Not enough balance to purchase this item!");
    }
}

// Update shopping cart
function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => removeFromCart(index, item.price);

        li.appendChild(removeBtn);
        cartContainer.appendChild(li);
    });
}

// Remove item from cart
function removeFromCart(index, price) {
    balance += price;
    cart.splice(index, 1);
    updateBalance();
    updateCart();
}

// Checkout functionality
document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Purchase successful!");
        cart = [];
        updateCart();
    }
});

// Dropdown s
document.getElementById("category-filter").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    displayMenu(selectedCategory);
});

// Change the featured image every 3 seconds
function changeFeaturedImage() {
    currentItemIndex = (currentItemIndex + 1) % menuItems.length;
    const featuredImage = document.getElementById("featuredImage");
    featuredImage.style.opacity = 0;

    setTimeout(() => {
        featuredImage.src = menuItems[currentItemIndex].image;
        featuredImage.style.opacity = 1;
    }, 500);
}

setInterval(changeFeaturedImage, 3000);

// Initialize store
document.addEventListener("DOMContentLoaded", () => {
    displayMenu();  
    updateBalance();
});
