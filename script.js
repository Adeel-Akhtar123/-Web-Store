
/* ==========================================
   PRODUCT DATABASE
========================================== */

const products = [

    {
        id: 1,
        name: "Fresh Apples",
        category: "market",
        type: "Market",
        emoji: "🍎",
        price: 600,
        description: "Fresh and juicy premium apples."
    },

    {
        id: 2,
        name: "Premium Rice",
        category: "market",
        type: "Market",
        emoji: "🍚",
        price: 850,
        description: "High-quality premium rice."
    },

    {
        id: 3,
        name: "Organic Milk",
        category: "market",
        type: "Market",
        emoji: "🥛",
        price: 350,
        description: "Fresh and healthy organic milk."
    },

    {
        id: 4,
        name: "Fresh Vegetables",
        category: "market",
        type: "Market",
        emoji: "🥦",
        price: 500,
        description: "Fresh vegetables delivered daily."
    },

    {
        id: 5,
        name: "Honey",
        category: "food",
        type: "Market",
        emoji: "🍯",
        price: 1200,
        description: "Pure natural honey."
    },

    {
        id: 6,
        name: "Cooking Oil",
        category: "market",
        type: "Market",
        emoji: "🫒",
        price: 900,
        description: "Premium quality cooking oil."
    },

    {
        id: 7,
        name: "Handwoven Basket",
        category: "handmade",
        type: "Handmade",
        emoji: "🧺",
        price: 1500,
        description: "Beautiful natural handwoven basket."
    },

    {
        id: 8,
        name: "Handmade Candle",
        category: "handmade",
        type: "Handmade",
        emoji: "🕯️",
        price: 950,
        description: "Beautiful scented handmade candle."
    },

    {
        id: 9,
        name: "Knitted Wool Scarf",
        category: "handmade",
        type: "Handmade",
        emoji: "🧶",
        price: 2200,
        description: "Warm and comfortable handmade scarf."
    },

    {
        id: 10,
        name: "Ceramic Mug",
        category: "home",
        type: "Handmade",
        emoji: "☕",
        price: 1100,
        description: "Handcrafted ceramic coffee mug."
    },

    {
        id: 11,
        name: "Wooden Decor",
        category: "home",
        type: "Handmade",
        emoji: "🪵",
        price: 1800,
        description: "Beautiful handmade wooden decoration."
    },

    {
        id: 12,
        name: "Organic Dates",
        category: "food",
        type: "Market",
        emoji: "🌴",
        price: 1300,
        description: "Premium quality organic dates."
    }

];


/* ==========================================
   CART
========================================== */

let cart = [];

let currentCategory = "all";


/* ==========================================
   DOM
========================================== */

const productGrid = document.getElementById("productGrid");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const subtotalElement = document.getElementById("subtotal");

const discountElement = document.getElementById("discount");

const totalElement = document.getElementById("total");


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list = products) {

    productGrid.innerHTML = "";

    if (list.length === 0) {

        productGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                color:#7c8796;
            ">
                <i class="fa-solid fa-box-open"
                   style="font-size:50px;margin-bottom:15px;">
                </i>

                <h3>No products found</h3>

                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    list.forEach(product => {

        const isMarket = product.type === "Market";

        const discountedPrice = isMarket
            ? product.price * 0.80
            : product.price;


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                ${
                    isMarket
                    ?
                    `<span class="discount-tag">
                        20% OFF
                    </span>`
                    :
                    ""
                }

                <button
                    class="wishlist"
                    onclick="toggleWishlist(this)"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

                <span>
                    ${product.emoji}
                </span>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.type}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="price-area">

                    <span class="current-price">
                        Rs. ${formatPrice(discountedPrice)}
                    </span>

                    ${
                        isMarket
                        ?
                        `
                        <span class="old-price">
                            Rs. ${formatPrice(product.price)}
                        </span>
                        `
                        :
                        ""
                    }

                </div>


                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >

                    <i class="fa-solid fa-cart-plus"></i>

                    Add to Cart

                </button>

            </div>
        `;


        productGrid.appendChild(card);

    });

}


/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return Math.round(price).toLocaleString("en-PK");

}


/* ==========================================
   ADD TO CART
========================================== */

function addToCart(productId) {

    const product = products.find(
        p => p.id === productId
    );

    if (!product) return;


    const existing = cart.find(
        item => item.id === productId
    );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    updateCart();

    showSuccess(
        `${product.name} added to cart`
    );

}


/* ==========================================
   ADD PRODUCT BY NAME
========================================== */

function addProductByName(name) {

    const product = products.find(
        p => p.name === name
    );

    if (product) {

        addToCart(product.id);

    }

}


/* ==========================================
   UPDATE CART
========================================== */

function updateCart() {

    renderCart();

    calculateTotals();

    cartCount.textContent = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

}


/* ==========================================
   RENDER CART
========================================== */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Your cart is empty</h3>

                <p>
                    Add some products to get started.
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(item => {

        const marketProduct =
            item.type === "Market";


        const price =
            marketProduct
            ? item.price * 0.8
            : item.price;


        const div =
            document.createElement("div");


        div.className = "cart-item";


        div.innerHTML = `

            <div class="cart-item-image">
                ${item.emoji}
            </div>


            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    Rs. ${formatPrice(price)}
                </p>


                <div class="quantity">

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            -1
                        )"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(
                            ${item.id},
                            1
                        )"
                    >
                        +
                    </button>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(
                            ${item.id}
                        )"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>
        `;


        cartItems.appendChild(div);

    });

}


/* ==========================================
   CHANGE QUANTITY
========================================== */

function changeQuantity(id, change) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== id
        );

    }


    updateCart();

}


/* ==========================================
   REMOVE
========================================== */

function removeFromCart(id) {

    cart = cart.filter(
        product => product.id !== id
    );

    updateCart();

}


/* ==========================================
   CALCULATE TOTALS
========================================== */

function calculateTotals() {

    let subtotal = 0;

    let discount = 0;


    cart.forEach(item => {

        subtotal +=
            item.price * item.quantity;


        if (item.type === "Market") {

            discount +=
                item.price *
                0.20 *
                item.quantity;

        }

    });


    const delivery =
        cart.length > 0 ? 200 : 0;


    const total =
        subtotal -
        discount +
        delivery;


    subtotalElement.textContent =
        `Rs. ${formatPrice(subtotal)}`;


    discountElement.textContent =
        `- Rs. ${formatPrice(discount)}`;


    totalElement.textContent =
        `Rs. ${formatPrice(total)}`;

}


/* ==========================================
   CATEGORY FILTER
========================================== */

function filterProducts(category) {

    currentCategory = category;


    document
        .querySelectorAll(".category-card")
        .forEach(button => {

            button.classList.remove("active");

        });


    event.currentTarget.classList.add("active");


    applyFilters();

}


/* ==========================================
   SEARCH
========================================== */

function searchProducts() {

    applyFilters();

}


function applyFilters() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    let filtered = products.filter(product => {

        const matchesCategory =
            currentCategory === "all" ||
            product.category === currentCategory;


        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search);


        return matchesCategory && matchesSearch;

    });


    displayProducts(filtered);

}


/* ==========================================
   SORT
========================================== */

function sortProducts() {

    const sort =
        document.getElementById("sortProducts").value;


    let filtered =
        products.filter(product => {

            const matchesCategory =
                currentCategory === "all" ||
                product.category === currentCategory;


            const search =
                document
                    .getElementById("searchInput")
                    .value
                    .toLowerCase();


            return matchesCategory &&
                product.name
                    .toLowerCase()
                    .includes(search);

        });


    if (sort === "low") {

        filtered.sort(
            (a,b) => getSellingPrice(a) -
                     getSellingPrice(b)
        );

    }


    if (sort === "high") {

        filtered.sort(
            (a,b) => getSellingPrice(b) -
                     getSellingPrice(a)
        );

    }


    displayProducts(filtered);

}


/* ==========================================
   SELLING PRICE
========================================== */

function getSellingPrice(product) {

    if (product.type === "Market") {

        return product.price * 0.8;

    }

    return product.price;

}


/* ==========================================
   CART OPEN / CLOSE
========================================== */

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("open");


    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("open");


    document
        .getElementById("cartOverlay")
        .classList.remove("show");

}


/* ==========================================
   CHECKOUT
========================================== */

function openCheckout() {

    if (cart.length === 0) {

        showSuccess("Your cart is empty");

        return;

    }


    document
        .getElementById("checkoutModal")
        .classList.add("show");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("show");

}


/* ==========================================
   PLACE ORDER
========================================== */

function placeOrder(event) {

    event.preventDefault();


    closeCheckout();

    closeCart();


    showSuccess(
        "Order placed successfully!"
    );


    cart = [];

    updateCart();


    event.target.reset();

}


/* ==========================================
   SUCCESS NOTIFICATION
========================================== */

function showSuccess(message) {

    const notification =
        document.getElementById("successMessage");


    notification.querySelector("strong")
        .textContent = message;


    notification.classList.add("show");


    setTimeout(() => {

        notification.classList.remove("show");

    }, 3000);

}


/* ==========================================
   WISHLIST
========================================== */

function toggleWishlist(button) {

    const icon =
        button.querySelector("i");


    icon.classList.toggle(
        "fa-regular"
    );


    icon.classList.toggle(
        "fa-solid"
    );


    button.style.color =
        icon.classList.contains("fa-solid")
        ? "#ff5a5f"
        : "";


}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}


/* ==========================================
   SEARCH BUTTON
========================================== */

function focusSearch() {

    document
        .getElementById("searchInput")
        .focus();


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================
   INITIAL LOAD
========================================== */

displayProducts();

updateCart();


/* ==========================================
   CLOSE CHECKOUT ON OUTSIDE CLICK
========================================== */

document
    .getElementById("checkoutModal")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeCheckout();

            }

        }
    );                  
