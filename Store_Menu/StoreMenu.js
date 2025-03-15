const menuItems = [
    { name: "Chairs", price: 5.99, image: "https://via.placeholder.com/100" },
    { name: "Table", price: 8.99, image: "https://via.placeholder.com/100" },
    { name: "Rug", price: 5.49, image: "https://via.placeholder.com/100" },
    { name: "Cat", price: 3.49, image: "https://via.placeholder.com/100" },
    { name: "Window", price: 10.49, image: "https://via.placeholder.com/100" }
];


let balance = 20.00; 
let cart = []; 

//update balance display
function updateBalance() {
    document.getElementById("balance").textContent = balance.toFixed(2);
}

// render menu
function displayMenu() {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; // Clear menu before adding new 

    menuItems.forEach(item => {
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
    });
}

// Function to handle purchasing an item
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


function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear previous cart items

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;

        // remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => removeFromCart(index, item.price);

        li.appendChild(removeBtn);
        cartContainer.appendChild(li);
    });
}


function removeFromCart(index, price) {
    balance += price;
    cart.splice(index, 1); 
    updateBalance();
    updateCart();
}


document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Purchase successful!");
        cart = []; 
        updateCart();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    displayMenu();
    updateBalance();
});
