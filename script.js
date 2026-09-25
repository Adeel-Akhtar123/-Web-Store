/* =========================================
   PRODUCT DATA
========================================= */

const products = [

    {
        id: 1,
        name: "Luxury Matte Lipstick",
        category: "cosmetics",
        price: 1800,
        description: "Long-lasting matte lipstick with rich color.",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85",
        discount: 5,
        bogo: true
    },

    {
        id: 2,
        name: "Rose Glow Blush",
        category: "cosmetics",
        price: 2200,
        description: "Natural rose shade for a beautiful glow.",
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=85",
        discount: 5,
        bogo: true
    },

    {
        id: 3,
        name: "Premium Face Serum",
        category: "cosmetics",
        price: 3200,
        description: "Hydrating serum for fresh and glowing skin.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85",
        discount: 5,
        bogo: false
    },

    {
        id: 4,
        name: "Elegant Perfume",
        category: "cosmetics",
        price: 4500,
        description: "A sophisticated fragrance for every occasion.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85",
        discount: 5,
        bogo: true
    },

    {
        id: 5,
        name: "Golden Necklace",
        category: "jewellery",
        price: 5500,
        description: "Elegant necklace with a timeless design.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: true
    },

    {
        id: 6,
        name: "Pearl Earrings",
        category: "jewellery",
        price: 2800,
        description: "Classic pearl earrings for an elegant look.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: true
    },

    {
        id: 7,
        name: "Crystal Bracelet",
        category: "jewellery",
        price: 3500,
        description: "Beautiful crystal bracelet with premium finish.",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: false
    },

    {
        id: 8,
        name: "Silver Ring",
        category: "jewellery",
        price: 2500,
        description: "Minimal silver ring for everyday styling.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: true
    },

    {
        id: 9,
        name: "Cute Heart Keychain",
        category: "keychains",
        price: 650,
        description: "Cute heart-shaped accessory for your keys.",
        image: "https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: true
    },

    {
        id: 10,
        name: "Crystal Keychain",
        category: "keychains",
        price: 900,
        description: "Sparkling crystal keychain with premium details.",
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: true
    },

    {
        id: 11,
        name: "Luxury Charm Keychain",
        category: "keychains",
        price: 1100,
        description: "Stylish charm keychain for bags and keys.",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: false
    },

    {
        id: 12,
        name: "Butterfly Keychain",
        category: "keychains",
        price: 750,
        description: "Beautiful butterfly design with elegant details.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=85",
        discount: 0,
        bogo: true
    }

];


/* =========================================
   STATE
========================================= */

let cart = [];

let currentCategory = "all";

let searchTerm = "";

let wishlist = [];


/* =========================================
   ELEMENTS
========================================= */

const productGrid =
    document.getElementById("productGrid");

const noProducts =
    document.getElementById("noProducts");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartBottom =
    document.getElementById("cartBottom");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartDiscount =
    document.getElementById("cartDiscount");

const cartTotal =
    document.getElementById("cartTotal");

const cartCount =
    document.querySelector(".cart-count");

const wishlistCount =
    document.querySelector(".wishlist-count");

const toast =
    document.getElementById("toast");


/* =========================================
   FORMAT PRICE
========================================= */

function formatPrice(price) {

    return "Rs. " +
        price.toLocaleString("en-PK");

}


/* =========================================
   CALCULATE DISCOUNT
========================================= */

function getDiscountedPrice(product) {

    if (product.discount > 0) {

        return product.price -
            (product.price * product.discount / 100);

    }

    return product.price;

}


/* =========================================
   CATEGORY NAME
========================================= */

function categoryName(category) {

    const names = {

        cosmetics: "Cosmetics",

        jewellery: "Jewellery",

        keychains: "Keychains"

    };

    return names[category] || category;

}


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts() {

    let filteredProducts = [...products];


    /* CATEGORY FILTER */

    if (currentCategory !== "all") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.category === currentCategory
            );

    }


    /* SEARCH */

    if (searchTerm.trim() !== "") {

        filteredProducts =
            filteredProducts.filter(product => {

                const search =
                    searchTerm.toLowerCase();

                return (

                    product.name
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(search)

                    ||

                    product.description
                        .toLowerCase()
                        .includes(search)

                );

            });

    }


    /* SORT */

    const sortValue =
        document.getElementById("sortProducts").value;


    if (sortValue === "low") {

        filteredProducts.sort(
            (a, b) =>
                getDiscountedPrice(a) -
                getDiscountedPrice(b)
        );

    }


    if (sortValue === "high") {

        filteredProducts.sort(
            (a, b) =>
                getDiscountedPrice(b) -
                getDiscountedPrice(a)
        );

    }


    if (sortValue === "name") {

        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    productGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    filteredProducts.forEach(
        (product, index) => {

            const card =
                createProductCard(
                    product,
                    index
                );

            productGrid.appendChild(card);

        }
    );

}


/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(product, index) {

    const card =
        document.createElement("article");

    card.className = "product-card";

    card.style.animationDelay =
        `${index * 0.05}s`;


    let badge = "";

    if (product.discount > 0) {

        badge =
            `<span class="product-badge discount">
                ${product.discount}% OFF
            </span>`;

    }

    else if (product.bogo) {

        badge =
            `<span class="product-badge bogo">
                BUY 1 GET 1
            </span>`;

    }


    const finalPrice =
        getDiscountedPrice(product);


    let priceHTML = "";

    if (product.discount > 0) {

        priceHTML = `

            <div class="product-price">

                <strong class="current-price">
                    ${formatPrice(finalPrice)}
                </strong>

                <span class="old-price">
                    ${formatPrice(product.price)}
                </span>

            </div>

        `;

    }

    else {

        priceHTML = `

            <div class="product-price">

                <strong class="current-price">
                    ${formatPrice(product.price)}
                </strong>

            </div>

        `;

    }


    const liked =
        wishlist.includes(product.id)
            ? "liked"
            : "";


    card.innerHTML = `

        <div class="product-image">

            ${badge}

            <button
                class="wishlist-product ${liked}"
                onclick="toggleWishlist(${product.id}, this)"
            >
                ${wishlist.includes(product.id) ? "♥" : "♡"}
            </button>

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

        </div>


        <div class="product-info">

            <span class="product-category">
                ${categoryName(product.category)}
            </span>

            <h3 class="product-name">
                ${product.name}
            </h3>

            <p class="product-description">
                ${product.description}
            </p>


            <div class="product-price-row">

                ${priceHTML}

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                    aria-label="Add to cart"
                >
                    🛒
                </button>

            </div>

        </div>

    `;

    return card;

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    }

    else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    updateCart();

    showToast(
        `${product.name} added to cart`
    );

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    updateCart();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(productId, change) {

    const item =
        cart.find(
            item => item.id === productId
        );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    updateCart();

}


/* =========================================
   CART CALCULATION
========================================= */

function calculateCart() {

    let subtotal = 0;

    let discount = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        if (!product) return;


        const originalTotal =
            product.price * item.quantity;


        const finalTotal =
            getDiscountedPrice(product) *
            item.quantity;


        subtotal += originalTotal;

        discount +=
            originalTotal - finalTotal;


        /*
            BUY 1 GET 1 FREE

            For demo purposes the second
            eligible unit is free.
        */

        if (product.bogo && item.quantity >= 2) {

            const freeItems =
                Math.floor(item.quantity / 2);

            discount +=
                getDiscountedPrice(product) *
                freeItems;

        }

    });


    return {

        subtotal,

        discount,

        afterDiscount:
            subtotal - discount

    };

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    cartItems.innerHTML = "";


    let totalQuantity = 0;


    cart.forEach(item => {

        totalQuantity += item.quantity;


        const product =
            products.find(
                p => p.id === item.id
            );

        if (!product) return;


        const finalPrice =
            getDiscountedPrice(product);


        const itemElement =
            document.createElement("div");

        itemElement.className =
            "cart-item";


        itemElement.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <div class="cart-item-price">

                    ${formatPrice(finalPrice)}

                    ${product.bogo
                        ? "<small> • BOGO</small>"
                        : ""
                    }

                </div>


                <div class="quantity-control">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(${product.id})"
            >
                ✕
            </button>

        `;


        cartItems.appendChild(itemElement);

    });


    cartCount.textContent =
        totalQuantity;


    const totals =
        calculateCart();


    cartSubtotal.textContent =
        formatPrice(totals.subtotal);


    cartDiscount.textContent =
        "- " +
        formatPrice(totals.discount);


    let delivery = 250;


    if (totals.afterDiscount >= 5000) {

        delivery = 0;

    }


    document.getElementById(
        "deliveryFee"
    ).textContent =
        delivery === 0
            ? "FREE"
            : formatPrice(delivery);


    cartTotal.textContent =
        formatPrice(
            totals.afterDiscount +
            delivery
        );


    if (cart.length === 0) {

        emptyCart.style.display = "flex";

        cartBottom.style.display = "none";

    }

    else {

        emptyCart.style.display = "none";

        cartBottom.style.display = "block";

    }

}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(productId, button) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(
                id => id !== productId
            );

        button.classList.remove("liked");

        button.textContent = "♡";

    }

    else {

        wishlist.push(productId);

        button.classList.add("liked");

        button.textContent = "♥";

    }


    wishlistCount.textContent =
        wishlist.length;

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    toast.querySelector("p")
        .textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

}


/* =========================================
   CART OPEN/CLOSE
========================================= */

function openCart() {

    cartSidebar.classList.add("show");

    cartOverlay.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeCart() {

    cartSidebar.classList.remove("show");

    cartOverlay.classList.remove("show");

    document.body.style.overflow = "";

}


document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


cartOverlay.addEventListener(
    "click",
    closeCart
);


document
    .getElementById("startShopping")
    .addEventListener(
        "click",
        closeCart
    );


/* =========================================
   CATEGORY FILTER
========================================= */

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                button.classList.add("active");


                currentCategory =
                    button.dataset.filter;


                displayProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================
   SORT
========================================= */

document
    .getElementById("sortProducts")
    .addEventListener(
        "change",
        displayProducts
    );


/* =========================================
   SEARCH
========================================= */

const searchToggle =
    document.getElementById("searchToggle");

const searchContainer =
    document.getElementById("searchContainer");

const searchInput =
    document.getElementById("searchInput");


searchToggle.addEventListener(
    "click",
    () => {

        searchContainer
            .classList.toggle("show");

        if (
            searchContainer.classList.contains(
                "show"
            )
        ) {

            searchInput.focus();

        }

    }
);


document
    .getElementById("closeSearch")
    .addEventListener(
        "click",
        () => {

            searchContainer
                .classList.remove("show");

            searchInput.value = "";

            searchTerm = "";

            displayProducts();

        }
    );


searchInput.addEventListener(
    "input",
    e => {

        searchTerm =
            e.target.value;

        displayProducts();

    }
);


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener(
    "click",
    () => {

        mobileMenu
            .classList.toggle("show");

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu
                    .classList.remove("show");

            }
        );

    });


/* =========================================
   CATEGORY CARDS
========================================= */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                currentCategory =
                    card.dataset.category;


                document
                    .querySelectorAll(".filter-btn")
                    .forEach(button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.filter ===
                            currentCategory
                        );

                    });


                displayProducts();


                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


/* =========================================
   CHECKOUT
========================================= */

const checkoutModal =
    document.getElementById("checkoutModal");


document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty"
                );

                return;

            }


            closeCart();

            checkoutModal
                .classList.add("show");

        }
    );


document
    .getElementById("closeCheckout")
    .addEventListener(
        "click",
        () => {

            checkoutModal
                .classList.remove("show");

        }
    );


/* =========================================
   PLACE ORDER
========================================= */

document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        function(e) {

            e.preventDefault();


            const orderNumber =
                "LC" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                );


            document
                .getElementById(
                    "orderNumber"
                )
                .textContent =
                    "Order #" +
                    orderNumber;


            checkoutModal
                .classList.remove("show");


            document
                .getElementById(
                    "successModal"
                )
                .classList.add("show");


            cart = [];

            updateCart();

            this.reset();

        }
    );


/* =========================================
   CONTINUE SHOPPING
========================================= */

document
    .getElementById("continueShopping")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById(
                    "successModal"
                )
                .classList.remove("show");

            window.location.href =
                "#products";

        }
    );


/* =========================================
   NEWSLETTER
========================================= */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        e => {

            e.preventDefault();

            showToast(
                "Thanks! You are subscribed."
            );

            e.target.reset();

        }
    );


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    e => {

        if (e.key === "Escape") {

            closeCart();

            checkoutModal
                .classList.remove("show");

            document
                .getElementById(
                    "successModal"
                )
                .classList.remove("show");

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

displayProducts();

updateCart();
