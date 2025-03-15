const menuItems = [
    { name: "Chairs", price: 5.99, image: "https://via.placeholder.com/100", category: "furniture" },
    { name: "Table", price: 8.99, image: "https://via.placeholder.com/100", category: "furniture" },
    { name: "Rug", price: 5.49, image: "https://via.placeholder.com/100", category: "rugs" },
    { name: "Cat", price: 3.49, image: "https://via.placeholder.com/100", category: "pets" },
    { name: "Dog", price: 3.49, image: "https://via.placeholder.com/100", category: "pets" },
    { name: "Window", price: 10.49, image: "https://via.placeholder.com/100", category: "home_improvement" },
    { name: "Plant", price: 2.49, image: "https://via.placeholder.com/100", category: "home_improvement" },
    { name: "Sofa", price: 12.99, image: "https://via.placeholder.com/100", category: "furniture" },
    { name: "Bookshelf", price: 9.99, image: "https://via.placeholder.com/100", category: "furniture" },
    { name: "Dog Bowl", price: 2.49, image: "https://via.placeholder.com/100", category: "pets" },
    { name: "Blanket", price: 5.99, image: "https://via.placeholder.com/100", category: "rugs" }
];

let balance = 0.00;
let cart = [];
let currentItemIndex = 0;

// Update balance display
function updateBalance() {
    document.getElementById("balance").textContent = balance.toFixed(2);
}

// items per category
function displayMenu(filteredCategory = "all") {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "";

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

// item purchase
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

// Update cart 
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

// Checkout 
document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Purchase successful!");
        cart = [];
        updateCart();
    }
});

// side bar drop down
document.getElementById("category-filter").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    displayMenu(selectedCategory);
});

// Featured item change every 3 sec
function changeFeaturedImage() {
    currentItemIndex = (currentItemIndex + 1) % menuItems.length;
    const featuredImage = document.getElementById("featuredImage");

    setTimeout(() => {
        featuredImage.src = menuItems[currentItemIndex].image;
        featuredImage.style.opacity = 1;
    }, 500);
}

setInterval(changeFeaturedImage, 3000);

// ** TASKBAR CONNECTION ** (Add money when tasks are completed, DO THIS AFTER TASK IS FINISHED)
function completeTask(taskReward) {
    balance += taskReward; 
    updateBalance(); 
}

// connect to task checkboxes
document.addEventListener("DOMContentLoaded", () => {
    displayMenu();  
    updateBalance();

    document.querySelectorAll(".task-checkbox").forEach((checkbox) => { 
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                completeTask(5.00); 
            }
        });
    });
});

// Sidebar 
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");

    menuToggle.addEventListener("click", function(event) {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-200px"; // Hide
        } else {
            sidebar.style.left = "0px"; // Show
        }
        event.stopPropagation(); 
    });

    function closeSidebar(event) {
        if (sidebar.style.left === "0px" && !sidebar.contains(event.target) && event.target !== menuToggle) {
            sidebar.style.left = "-200px"; // Hide sidebar
        }
    }

    document.addEventListener("click", closeSidebar);
    document.addEventListener("touchstart", closeSidebar);
});
