/* =========================================
   ALMEAS COLLECTION
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   PRODUCTS
========================================= */

const products = [

    {
        id: 1,
        name: "Couples Ring",
        category: "Jewellery",
        price: 100,
        rating: 5,
        reviews: 42,
        image:
            "image/IMG_20260929_130154_573.jpg"
    },

    {
        id: 2,
        name: "Elegant Golden Earrings",
        category: "Jewellery",
        price: 200,
        rating: 5,
        reviews: 35,
        image:
            "image/IMG_20260929_130041_321.jpg"
    },

    {
        id: 3,
        name: "Childern's Catcher Set",
        category: "Jewellery",
        price: 300,
        rating: 4,
        reviews: 27,
        image:
            "image/IMG_20260929_130054_317.jpg"
    },

    {
        id: 4,
        name: "Crystal Ring",
        category: "Jewellery",
        price: 1900,
        rating: 5,
        reviews: 31,
        image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Beauty Makeup Set",
        category: "Cosmetics",
        price: 3200,
        rating: 5,
        reviews: 48,
        image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Luxury Lipstick",
        category: "Cosmetics",
        price: 1400,
        rating: 4,
        reviews: 26,
        image:
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Premium Perfume",
        category: "Cosmetics",
        price: 4500,
        rating: 5,
        reviews: 55,
        image:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Beauty Brush Set",
        category: "Cosmetics",
        price: 1800,
        rating: 5,
        reviews: 19,
        image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 9,
        name: "Cute Heart Keychain",
        category: "Keychains",
        price: 750,
        rating: 5,
        reviews: 63,
        image:
            "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 10,
        name: "Cute Teddy Keychain",
        category: "Keychains",
        price: 850,
        rating: 5,
        reviews: 44,
        image:
            "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 11,
        name: "Butterfly Keychain",
        category: "Keychains",
        price: 650,
        rating: 4,
        reviews: 22,
        image:
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 12,
        name: "Pearl Keychain",
        category: "Keychains",
        price: 900,
        rating: 5,
        reviews: 38,
        image:
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=700&q=80"
    }

];


/* =========================================
   SETTINGS
========================================= */

const DISCOUNT_PERCENT = 5;

const DELIVERY_CHARGE = 200;


/* =========================================
   STATE
========================================= */

let cart = JSON.parse(
    localStorage.getItem("almeasCart")
) || [];

let wishlist = JSON.parse(
    localStorage.getItem("almeasWishlist")
) || [];


/* =========================================
   DOM ELEMENTS
========================================= */

const productGrid =
    document.getElementById("productGrid");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartSummary =
    document.getElementById("cartSummary");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");

const overlay =
    document.getElementById("overlay");

const toast =
    document.getElementById("toast");


/* =========================================
   FORMAT MONEY
========================================= */

function formatPrice(price) {

    return "Rs. " +
        Number(price).toLocaleString("en-PK");

}


/* =========================================
   CALCULATE DISCOUNT
========================================= */

function discountedPrice(price) {

    return Math.round(
        price -
        (price * DISCOUNT_PERCENT / 100)
    );

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts(filter = "All") {

    productGrid.innerHTML = "";

    const filteredProducts =
        filter === "All"
            ? products
            : products.filter(
                product =>
                    product.category === filter
            );


    filteredProducts.forEach(
        (product, index) => {

            const discountPrice =
                discountedPrice(product.price);

            const isLiked =
                wishlist.includes(product.id);


            const stars =
                "★".repeat(product.rating) +
                "☆".repeat(5 - product.rating);


            const card =
                document.createElement("div");

            card.className =
                "product-card";

            card.style.animationDelay =
                `${index * 0.05}s`;


            card.innerHTML = `

                <div class="product-image">

                    <span class="sale-label">
                        5% OFF
                    </span>

                    <button
                        class="wishlist-product
                        ${isLiked ? "active" : ""}"
                        data-wishlist="${product.id}"
                        aria-label="Add to wishlist"
                    >
                        <i class="${
                            isLiked
                            ? "fa-solid"
                            : "fa-regular"
                        } fa-heart"></i>
                    </button>

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <div class="product-rating">

                        <span class="stars">
                            ${stars}
                        </span>

                        <span class="rating-count">
                            (${product.reviews})
                        </span>

                    </div>


                    <div class="price-row">

                        <div class="price">

                            <span class="old-price">
                                ${formatPrice(product.price)}
                            </span>

                            <span class="new-price">
                                ${formatPrice(discountPrice)}
                            </span>

                        </div>


                        <button
                            class="add-cart"
                            data-cart="${product.id}"
                            aria-label="Add to cart"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>

                    </div>

                </div>

            `;


            productGrid.appendChild(card);

        }
    );

}


/* =========================================
   FILTER PRODUCTS
========================================= */

function setFilter(filter) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === filter
            );

        });


    renderProducts(filter);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   FILTER BUTTON EVENTS
========================================= */

document.addEventListener(
    "click",
    function(event) {

        const filterButton =
            event.target.closest(".filter-btn");

        if (filterButton) {

            setFilter(
                filterButton.dataset.filter
            );

        }


        const categoryButton =
            event.target.closest(".category-btn");

        if (categoryButton) {

            setFilter(
                categoryButton.dataset.filter
            );

        }


        const footerFilter =
            event.target.closest(
                "[data-footer-filter]"
            );

        if (footerFilter) {

            setFilter(
                footerFilter.dataset.footerFilter
            );

        }

    }
);


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    const existing =
        cart.find(
            item =>
                item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveCart();

    updateCartUI();

    const product =
        products.find(
            p => p.id === productId
        );


    showToast(
        "Added to Cart",
        `${product.name} added to your bag.`
    );

}


/* =========================================
   REMOVE CART ITEM
========================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );

    saveCart();

    updateCartUI();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(productId, amount) {

    const item =
        cart.find(
            item =>
                item.id === productId
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(productId);

    } else {

        saveCart();

        updateCartUI();

    }

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "almeasCart",
        JSON.stringify(cart)
    );

}


/* =========================================
   UPDATE CART
========================================= */

function updateCartUI() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartEmpty.style.display = "flex";

        cartSummary.style.display = "none";

    } else {

        cartEmpty.style.display = "none";

        cartSummary.style.display = "block";

    }


    let subtotal = 0;

    let totalQuantity = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        if (!product) return;


        const price =
            discountedPrice(product.price);


        subtotal +=
            price * item.quantity;

        totalQuantity +=
            item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="cart-item-info">

                <small>
                    ${product.category}
                </small>

                <h4>
                    ${product.name}
                </h4>

                <div class="cart-item-price">
                    ${formatPrice(price)}
                </div>


                <div class="quantity-control">

                    <button
                        data-minus="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-plus="${product.id}"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                data-remove="${product.id}"
            >
                <i class="fa-solid fa-trash"></i>
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    const discount =
        Math.round(
            subtotal *
            DISCOUNT_PERCENT /
            (100 - DISCOUNT_PERCENT)
        );


    const originalSubtotal =
        subtotal + discount;


    const finalDiscount =
        originalSubtotal *
        DISCOUNT_PERCENT /
        100;


    const finalTotal =
        subtotal + DELIVERY_CHARGE;


    document.getElementById(
        "cartCount"
    ).textContent =
        totalQuantity;


    document.getElementById(
        "cartSubtotal"
    ).textContent =
        formatPrice(originalSubtotal);


    document.getElementById(
        "cartDiscount"
    ).textContent =
        "- " + formatPrice(
            Math.round(finalDiscount)
        );


    document.getElementById(
        "deliveryCost"
    ).textContent =
        cart.length
            ? formatPrice(DELIVERY_CHARGE)
            : formatPrice(0);


    document.getElementById(
        "cartTotal"
    ).textContent =
        formatPrice(
            cart.length
                ? Math.round(
                    originalSubtotal -
                    finalDiscount +
                    DELIVERY_CHARGE
                )
                : 0
        );

}


/* =========================================
   CART EVENTS
========================================= */

cartItems.addEventListener(
    "click",
    function(event) {

        const plus =
            event.target.closest(
                "[data-plus]"
            );

        const minus =
            event.target.closest(
                "[data-minus]"
            );

        const remove =
            event.target.closest(
                "[data-remove]"
            );


        if (plus) {

            changeQuantity(
                Number(plus.dataset.plus),
                1
            );

        }


        if (minus) {

            changeQuantity(
                Number(minus.dataset.minus),
                -1
            );

        }


        if (remove) {

            removeFromCart(
                Number(remove.dataset.remove)
            );

        }

    }
);


/* =========================================
   PRODUCT GRID EVENTS
========================================= */

productGrid.addEventListener(
    "click",
    function(event) {

        const cartButton =
            event.target.closest(
                "[data-cart]"
            );

        const wishlistButton =
            event.target.closest(
                "[data-wishlist]"
            );


        if (cartButton) {

            addToCart(
                Number(cartButton.dataset.cart)
            );

        }


        if (wishlistButton) {

            toggleWishlist(
                Number(
                    wishlistButton.dataset.wishlist
                )
            );

        }

    }
);


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(productId) {

    const index =
        wishlist.indexOf(productId);


    if (index > -1) {

        wishlist.splice(index, 1);

        showToast(
            "Removed",
            "Product removed from wishlist."
        );

    } else {

        wishlist.push(productId);

        showToast(
            "Wishlist",
            "Product saved to your wishlist."
        );

    }


    saveWishlist();

    updateWishlistUI();

    const currentFilter =
        document.querySelector(
            ".filter-btn.active"
        )?.dataset.filter || "All";

    renderProducts(currentFilter);

}


/* =========================================
   SAVE WISHLIST
========================================= */

function saveWishlist() {

    localStorage.setItem(
        "almeasWishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================================
   WISHLIST UI
========================================= */

function updateWishlistUI() {

    wishlistCount.textContent =
        wishlist.length;


    const container =
        document.getElementById(
            "wishlistItems"
        );


    container.innerHTML = "";


    if (wishlist.length === 0) {

        container.innerHTML = `

            <div class="cart-empty">

                <i class="fa-regular fa-heart"></i>

                <h3>
                    No favorites yet
                </h3>

                <p>
                    Save products you love here.
                </p>

            </div>

        `;

        return;

    }


    wishlist.forEach(productId => {

        const product =
            products.find(
                p => p.id === productId
            );

        if (!product) return;


        const price =
            discountedPrice(product.price);


        const item =
            document.createElement("div");

        item.className =
            "wishlist-item";


        item.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="wishlist-item-info">

                <h4>
                    ${product.name}
                </h4>

                <span>
                    ${formatPrice(price)}
                </span>

                <div class="wishlist-item-actions">

                    <button
                        data-wishlist-cart="${product.id}"
                    >
                        Add to Cart
                    </button>

                    <button
                        data-wishlist-remove="${product.id}"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;


        container.appendChild(item);

    });

}


/* =========================================
   WISHLIST EVENTS
========================================= */

document
    .getElementById("wishlistItems")
    .addEventListener(
        "click",
        function(event) {

            const addButton =
                event.target.closest(
                    "[data-wishlist-cart]"
                );

            const removeButton =
                event.target.closest(
                    "[data-wishlist-remove]"
                );


            if (addButton) {

                addToCart(
                    Number(
                        addButton.dataset.wishlistCart
                    )
                );

            }


            if (removeButton) {

                toggleWishlist(
                    Number(
                        removeButton.dataset.wishlistRemove
                    )
                );

            }

        }
    );


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    cartSidebar.classList.add("open");

    overlay.classList.add("show");

    document.body.classList.add("no-scroll");

}


/* =========================================
   CLOSE SIDE PANELS
========================================= */

function closeSidePanels() {

    cartSidebar.classList.remove("open");

    document
        .getElementById("wishlistSidebar")
        .classList.remove("open");

    overlay.classList.remove("show");

    document.body.classList.remove("no-scroll");

}


/* =========================================
   CART BUTTON
========================================= */

document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );


/* =========================================
   CLOSE CART
========================================= */

document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeSidePanels
    );


/* =========================================
   CONTINUE SHOPPING
========================================= */

document
    .getElementById("continueShopping")
    .addEventListener(
        "click",
        closeSidePanels
    );


/* =========================================
   OVERLAY
========================================= */

overlay.addEventListener(
    "click",
    closeSidePanels
);


/* =========================================
   WISHLIST BUTTON
========================================= */

document
    .getElementById("wishlistBtn")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("wishlistSidebar")
                .classList.add("open");

            overlay.classList.add("show");

            document.body.classList.add(
                "no-scroll"
            );

        }
    );


/* =========================================
   CLOSE WISHLIST
========================================= */

document
    .getElementById("closeWishlist")
    .addEventListener(
        "click",
        closeSidePanels
    );


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const navLinks =
    document.getElementById(
        "navLinks"
    );


mobileMenu.addEventListener(
    "click",
    function() {

        navLinks.classList.toggle("open");

        const icon =
            mobileMenu.querySelector("i");

        if (
            navLinks.classList.contains("open")
        ) {

            icon.className =
                "fa-solid fa-xmark";

        } else {

            icon.className =
                "fa-solid fa-bars";

        }

    }
);


/* =========================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================= */

navLinks
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function() {

                navLinks.classList.remove(
                    "open"
                );

                mobileMenu
                    .querySelector("i")
                    .className =
                    "fa-solid fa-bars";

            }
        );

    });


/* =========================================
   SEARCH
========================================= */

const searchPanel =
    document.getElementById(
        "searchPanel"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        function() {

            searchPanel.classList.add(
                "open"
            );

            setTimeout(
                () =>
                    searchInput.focus(),
                300
            );

        }
    );


document
    .getElementById("closeSearch")
    .addEventListener(
        "click",
        function() {

            searchPanel.classList.remove(
                "open"
            );

            searchInput.value = "";

            renderProducts("All");

        }
    );


/* =========================================
   SEARCH PRODUCTS
========================================= */

searchInput.addEventListener(
    "input",
    function() {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        if (!query) {

            renderProducts("All");

            return;

        }


        const results =
            products.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)

            );


        productGrid.innerHTML = "";


        if (results.length === 0) {

            productGrid.innerHTML = `

                <div style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:60px 20px;
                ">

                    <i
                        class="fa-solid fa-magnifying-glass"
                        style="
                            font-size:40px;
                            color:#d8ccc3;
                            margin-bottom:15px;
                        "
                    ></i>

                    <h3>
                        No products found
                    </h3>

                    <p style="
                        color:#999;
                        font-size:12px;
                        margin-top:5px;
                    ">
                        Try another search.
                    </p>

                </div>

            `;

            return;

        }


        results.forEach(product => {

            const original =
                product.price;

            const sale =
                discountedPrice(
                    product.price
                );


            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-image">

                    <span class="sale-label">
                        5% OFF
                    </span>

                    <button
                        class="wishlist-product"
                        data-wishlist="${product.id}"
                    >
                        <i class="fa-regular fa-heart"></i>
                    </button>

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <div class="product-rating">

                        <span class="stars">
                            ${"★".repeat(product.rating)}
                        </span>

                        <span class="rating-count">
                            (${product.reviews})
                        </span>

                    </div>


                    <div class="price-row">

                        <div class="price">

                            <span class="old-price">
                                ${formatPrice(original)}
                            </span>

                            <span class="new-price">
                                ${formatPrice(sale)}
                            </span>

                        </div>

                        <button
                            class="add-cart"
                            data-cart="${product.id}"
                        >
                            <i class="fa-solid fa-plus"></i>
                        </button>

                    </div>

                </div>

            `;


            productGrid.appendChild(card);

        });

    }
);


/* =========================================
   CHECKOUT
========================================= */

const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );


document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        function() {

            if (cart.length === 0) {

                showToast(
                    "Cart Empty",
                    "Please add a product first."
                );

                return;

            }


            updateCheckoutSummary();

            checkoutModal.classList.add(
                "open"
            );

            document.body.classList.add(
                "no-scroll"
            );

        }
    );


/* =========================================
   CHECKOUT SUMMARY
========================================= */

function updateCheckoutSummary() {

    let subtotal = 0;

    let quantity = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        if (!product) return;


        subtotal +=
            product.price *
            item.quantity;

        quantity +=
            item.quantity;

    });


    const discount =
        Math.round(
            subtotal *
            DISCOUNT_PERCENT /
            100
        );


    const total =
        subtotal -
        discount +
        DELIVERY_CHARGE;


    document.getElementById(
        "checkoutItems"
    ).textContent =
        quantity;


    document.getElementById(
        "checkoutDiscount"
    ).textContent =
        "- " + formatPrice(discount);


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        formatPrice(total);

}


/* =========================================
   CLOSE CHECKOUT
========================================= */

document
    .getElementById("closeCheckout")
    .addEventListener(
        "click",
        function() {

            checkoutModal.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }
    );


/* =========================================
   PLACE ORDER
========================================= */

document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (cart.length === 0) {

                return;

            }


            const name =
                document.getElementById(
                    "customerName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "customerPhone"
                ).value.trim();


            const city =
                document.getElementById(
                    "customerCity"
                ).value.trim();


            const address =
                document.getElementById(
                    "customerAddress"
                ).value.trim();


            const payment =
                document.getElementById(
                    "paymentMethod"
                ).value;


            if (
                !name ||
                !phone ||
                !city ||
                !address ||
                !payment
            ) {

                showToast(
                    "Missing Information",
                    "Please complete all required fields."
                );

                return;

            }


            const orderNumber =
                "AC" +
                Date.now()
                    .toString()
                    .slice(-6);


            document.getElementById(
                "orderNumber"
            ).textContent =
                orderNumber;


            /*
                In a real website,
                this is where you would
                send the order to your
                backend/database.
            */


            cart = [];

            saveCart();

            updateCartUI();


            checkoutModal.classList.remove(
                "open"
            );


            document
                .getElementById(
                    "successModal"
                )
                .classList.add("open");


            document.body.classList.add(
                "no-scroll"
            );


            document
                .getElementById(
                    "checkoutForm"
                )
                .reset();

        }
    );


/* =========================================
   CLOSE SUCCESS
========================================= */

function closeSuccessModal() {

    document
        .getElementById(
            "successModal"
        )
        .classList.remove("open");

    document.body.classList.remove(
        "no-scroll"
    );

}


document
    .getElementById("closeSuccess")
    .addEventListener(
        "click",
        closeSuccessModal
    );


document
    .getElementById("successContinue")
    .addEventListener(
        "click",
        function() {

            closeSuccessModal();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================
   NEWSLETTER
========================================= */

document
    .getElementById("newsletterForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "newsletterEmail"
                ).value.trim();


            if (!email) return;


            showToast(
                "Subscribed!",
                "Thank you for joining Almeas Collection."
            );


            this.reset();

        }
    );


/* =========================================
   TOAST
========================================= */

let toastTimeout;


function showToast(title, message) {

    document.getElementById(
        "toastTitle"
    ).textContent = title;


    document.getElementById(
        "toastMessage"
    ).textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================
   CLOSE MODALS WITH ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Escape") {
            return;
        }


        searchPanel.classList.remove(
            "open"
        );


        closeSidePanels();


        checkoutModal.classList.remove(
            "open"
        );


        document
            .getElementById(
                "successModal"
            )
            .classList.remove("open");


        document.body.classList.remove(
            "no-scroll"
        );

    }
);


/* =========================================
   HEADER ACTIVE LINK
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function() {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        document
            .querySelectorAll(
                ".nav-links a"
            )
            .forEach(link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    `#${current}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

    }
);


/* =========================================
   LOADER
========================================= */

window.addEventListener(
    "load",
    function() {

        setTimeout(
            function() {

                document
                    .getElementById(
                        "loader"
                    )
                    .classList.add(
                        "hide"
                    );

            },
            700
        );

    }
);


/* =========================================
   INITIALIZE
========================================= */

renderProducts("All");

updateCartUI();

updateWishlistUI();
