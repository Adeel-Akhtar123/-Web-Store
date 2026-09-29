/* =========================================================
   ALMEAS COLLECTION
   COMPLETE MAIN JAVASCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [

    {
        id: 1,
        name: "Couples Ring",
        category: "Jewellery",
        price: 100,
        rating: 5,
        reviews: 42,
        image: "image/IMG_20260929_130154_573.jpg"
    },

    {
        id: 2,
        name: "Elegant Golden Earrings",
        category: "Jewellery",
        price: 200,
        rating: 5,
        reviews: 35,
        image: "image/IMG_20260929_130041_321.jpg"
    },

    {
        id: 3,
        name: "Children's Catcher Set",
        category: "Jewellery",
        price: 300,
        rating: 4,
        reviews: 27,
        image: "image/IMG_20260929_130054_317.jpg"
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
        name: "Cute Cherry Keychains",
        category: "Keychains",
        price: 750,
        rating: 5,
        reviews: 63,
        image: "image/IMG-20260808-WA0045.jpg"
    },

    {
        id: 10,
        name: "Popcorn Keychain",
        category: "Keychains",
        price: 450,
        rating: 5,
        reviews: 44,
        image: "image/IMG-20260808-WA0043.jpg"
    },

    {
        id: 11,
        name: "Flag Keychain",
        category: "Keychains",
        price: 350,
        rating: 4,
        reviews: 22,
        image: "image/IMG-20260808-WA0047.jpg"
    },

    {
        id: 12,
        name: "Cute Heart Keychain",
        category: "Keychains",
        price: 400,
        rating: 5,
        reviews: 38,
        image:
            "image/IMG_20260929_185853_493.jpg"
    }

];


/* =========================================================
   STORE SETTINGS
   ========================================================= */

const DISCOUNT_PERCENT = 5;

const DELIVERY_CHARGE = 200;


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function loadArray(key) {

    try {

        const data =
            JSON.parse(
                localStorage.getItem(key)
            );

        return Array.isArray(data)
            ? data
            : [];

    } catch (error) {

        console.error(
            "Local storage error:",
            error
        );

        return [];
    }
}


let cart =
    loadArray("almeasCart");


let wishlist =
    loadArray("almeasWishlist");


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

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

const wishlistSidebar =
    document.getElementById("wishlistSidebar");

const checkoutModal =
    document.getElementById("checkoutModal");

const successModal =
    document.getElementById("successModal");

const searchPanel =
    document.getElementById("searchPanel");

const searchInput =
    document.getElementById("searchInput");


/* =========================================================
   SAFE ELEMENT CHECK
   ========================================================= */

function elementExists(element) {

    return element !== null &&
           element !== undefined;

}


/* =========================================================
   MONEY FORMAT
   ========================================================= */

function formatPrice(price) {

    return "Rs. " +
        Number(price).toLocaleString("en-PK");

}


/* =========================================================
   DISCOUNT
   ========================================================= */

function discountedPrice(price) {

    return Math.round(
        Number(price) *
        (1 - DISCOUNT_PERCENT / 100)
    );

}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "almeasCart",
        JSON.stringify(cart)
    );

}


/* =========================================================
   SAVE WISHLIST
   ========================================================= */

function saveWishlist() {

    localStorage.setItem(
        "almeasWishlist",
        JSON.stringify(wishlist)
    );

}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function imageFallback(image) {

    if (!image) return;

    image.addEventListener(
        "error",
        function () {

            this.onerror = null;

            this.src =
                "https://placehold.co/700x700/f3e9e4/8c7068?text=Almeas+Collection";

        }
    );

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(
    filter = "All",
    customProducts = null
) {

    if (!elementExists(productGrid)) {
        return;
    }


    let filteredProducts;


    if (customProducts !== null) {

        filteredProducts =
            customProducts;

    } else {

        filteredProducts =
            filter === "All"
                ? products
                : products.filter(
                    product =>
                        product.category === filter
                );

    }


    productGrid.innerHTML = "";


    if (filteredProducts.length === 0) {

        productGrid.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:60px 20px;
                "
            >

                <div
                    style="
                        font-size:45px;
                        margin-bottom:15px;
                    "
                >
                    🔍
                </div>

                <h3>
                    No products found
                </h3>

                <p
                    style="
                        color:#999;
                        margin-top:5px;
                    "
                >
                    Try another search.
                </p>

            </div>

        `;

        return;
    }


    filteredProducts.forEach(
        (product, index) => {

            const salePrice =
                discountedPrice(
                    product.price
                );


            const isLiked =
                wishlist.includes(
                    product.id
                );


            const stars =
                "★".repeat(
                    product.rating
                ) +
                "☆".repeat(
                    5 - product.rating
                );


            const card =
                document.createElement("article");


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
                        class="wishlist-product ${
                            isLiked ? "active" : ""
                        }"
                        data-wishlist="${product.id}"
                        aria-label="Wishlist"
                    >
                        ${
                            isLiked
                                ? "♥"
                                : "♡"
                        }
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
                                ${formatPrice(
                                    product.price
                                )}
                            </span>

                            <span class="new-price">
                                ${formatPrice(
                                    salePrice
                                )}
                            </span>

                        </div>


                        <button
                            class="add-cart"
                            data-cart="${product.id}"
                            aria-label="Add to cart"
                        >
                            +
                        </button>

                    </div>

                </div>

            `;


            productGrid.appendChild(
                card
            );


            imageFallback(
                card.querySelector("img")
            );

        }
    );

}


/* =========================================================
   FILTER
   ========================================================= */

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


    const productsSection =
        document.getElementById(
            "products"
        );


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   ADD TO CART
   ========================================================= */

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
            item =>
                item.id === productId
        );


    if (product) {

        showToast(
            "Added to Cart",
            `${product.name} added to your bag.`
        );

    }

}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart();

    updateCartUI();

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(
            productId
        );

        return;

    }


    saveCart();

    updateCartUI();

}


/* =========================================================
   UPDATE CART
   ========================================================= */

function updateCartUI() {

    if (!elementExists(cartItems)) {
        return;
    }


    cartItems.innerHTML = "";


    let discountedSubtotal = 0;

    let totalQuantity = 0;


    cart.forEach(
        item => {

            const product =
                products.find(
                    p =>
                        p.id === item.id
                );


            if (!product) return;


            const price =
                discountedPrice(
                    product.price
                );


            discountedSubtotal +=
                price *
                item.quantity;


            totalQuantity +=
                item.quantity;


            const cartItem =
                document.createElement(
                    "div"
                );


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
                    aria-label="Remove item"
                >
                    🗑
                </button>

            `;


            cartItems.appendChild(
                cartItem
            );


            imageFallback(
                cartItem.querySelector(
                    "img"
                )
            );

        }
    );


    const originalSubtotal =
        Math.round(
            discountedSubtotal /
            (1 - DISCOUNT_PERCENT / 100)
        );


    const discount =
        originalSubtotal -
        discountedSubtotal;


    const finalTotal =
        discountedSubtotal +
        (cart.length
            ? DELIVERY_CHARGE
            : 0);


    if (elementExists(cartCount)) {

        cartCount.textContent =
            totalQuantity;

    }


    const subtotalElement =
        document.getElementById(
            "cartSubtotal"
        );


    const discountElement =
        document.getElementById(
            "cartDiscount"
        );


    const deliveryElement =
        document.getElementById(
            "deliveryCost"
        );


    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(
                originalSubtotal
            );

    }


    if (discountElement) {

        discountElement.textContent =
            "- " +
            formatPrice(
                discount
            );

    }


    if (deliveryElement) {

        deliveryElement.textContent =
            formatPrice(
                cart.length
                    ? DELIVERY_CHARGE
                    : 0
            );

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(
                cart.length
                    ? finalTotal
                    : 0
            );

    }


    if (cartEmpty) {

        cartEmpty.style.display =
            cart.length
                ? "none"
                : "flex";

    }


    if (cartSummary) {

        cartSummary.style.display =
            cart.length
                ? "block"
                : "none";

    }

}


/* =========================================================
   WISHLIST
   ========================================================= */

function toggleWishlist(productId) {

    const index =
        wishlist.indexOf(
            productId
        );


    if (index >= 0) {

        wishlist.splice(
            index,
            1
        );


        showToast(
            "Removed",
            "Product removed from wishlist."
        );

    } else {

        wishlist.push(
            productId
        );


        showToast(
            "Wishlist",
            "Product saved to your wishlist."
        );

    }


    saveWishlist();

    updateWishlistUI();


    const activeFilter =
        document.querySelector(
            ".filter-btn.active"
        )?.dataset.filter ||
        "All";


    renderProducts(
        activeFilter
    );

}


/* =========================================================
   WISHLIST UI
   ========================================================= */

function updateWishlistUI() {

    if (elementExists(wishlistCount)) {

        wishlistCount.textContent =
            wishlist.length;

    }


    const container =
        document.getElementById(
            "wishlistItems"
        );


    if (!container) return;


    container.innerHTML = "";


    if (wishlist.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <span>♡</span>

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


    wishlist.forEach(
        productId => {

            const product =
                products.find(
                    p =>
                        p.id === productId
                );


            if (!product) return;


            const item =
                document.createElement(
                    "div"
                );


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
                        ${formatPrice(
                            discountedPrice(
                                product.price
                            )
                        )}
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


            container.appendChild(
                item
            );


            imageFallback(
                item.querySelector(
                    "img"
                )
            );

        }
    );

}


/* =========================================================
   OPEN / CLOSE CART
   ========================================================= */

function openCart() {

    if (!cartSidebar) return;


    cartSidebar.classList.add(
        "open"
    );


    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }


    document.body.classList.add(
        "no-scroll"
    );

}


function closeSidePanels() {

    if (cartSidebar) {

        cartSidebar.classList.remove(
            "open"
        );

    }


    if (wishlistSidebar) {

        wishlistSidebar.classList.remove(
            "open"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   WISHLIST PANEL
   ========================================================= */

function openWishlist() {

    if (!wishlistSidebar) return;


    wishlistSidebar.classList.add(
        "open"
    );


    overlay.classList.add(
        "show"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

function openSearch() {

    if (!searchPanel) return;


    searchPanel.classList.add(
        "open"
    );


    setTimeout(
        () => {

            if (searchInput) {

                searchInput.focus();

            }

        },
        200
    );

}


function closeSearch() {

    if (!searchPanel) return;


    searchPanel.classList.remove(
        "open"
    );


    if (searchInput) {

        searchInput.value = "";

    }


    renderProducts(
        "All"
    );

}


/* =========================================================
   SEARCH PRODUCTS
   ========================================================= */

function searchProducts() {

    if (!searchInput) return;


    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    if (!query) {

        renderProducts(
            "All"
        );

        return;

    }


    const results =
        products.filter(
            product =>

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)
        );


    renderProducts(
        "All",
        results
    );

}


/* =========================================================
   CHECKOUT SUMMARY
   ========================================================= */

function updateCheckoutSummary() {

    let originalSubtotal = 0;

    let quantity = 0;


    cart.forEach(
        item => {

            const product =
                products.find(
                    p =>
                        p.id === item.id
                );


            if (!product) return;


            originalSubtotal +=
                product.price *
                item.quantity;


            quantity +=
                item.quantity;

        }
    );


    const discount =
        Math.round(
            originalSubtotal *
            DISCOUNT_PERCENT /
            100
        );


    const total =
        originalSubtotal -
        discount +
        DELIVERY_CHARGE;


    const itemsElement =
        document.getElementById(
            "checkoutItems"
        );


    const discountElement =
        document.getElementById(
            "checkoutDiscount"
        );


    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );


    if (itemsElement) {

        itemsElement.textContent =
            quantity;

    }


    if (discountElement) {

        discountElement.textContent =
            "- " +
            formatPrice(
                discount
            );

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(
                total
            );

    }

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Cart Empty",
            "Please add a product first."
        );

        return;

    }


    updateCheckoutSummary();


    if (checkoutModal) {

        checkoutModal.classList.add(
            "open"
        );

    }


    document.body.classList.add(
        "no-scroll"
    );

}


function closeCheckout() {

    if (checkoutModal) {

        checkoutModal.classList.remove(
            "open"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   PLACE ORDER
   ========================================================= */

function placeOrder(event) {

    event.preventDefault();


    const form =
        event.currentTarget;


    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }


    if (cart.length === 0) {

        showToast(
            "Cart Empty",
            "Please add products first."
        );

        return;

    }


    const customerName =
        document
            .getElementById(
                "customerName"
            )
            ?.value.trim();


    const customerPhone =
        document
            .getElementById(
                "customerPhone"
            )
            ?.value.trim();


    const customerCity =
        document
            .getElementById(
                "customerCity"
            )
            ?.value.trim();


    const customerAddress =
        document
            .getElementById(
                "customerAddress"
            )
            ?.value.trim();


    const paymentMethod =
        document
            .getElementById(
                "paymentMethod"
            )
            ?.value;


    if (
        !customerName ||
        !customerPhone ||
        !customerCity ||
        !customerAddress ||
        !paymentMethod
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


    const orderNumberElement =
        document.getElementById(
            "orderNumber"
        );


    if (orderNumberElement) {

        orderNumberElement.textContent =
            orderNumber;

    }


    /*
        IMPORTANT:

        This version creates the order
        in the browser only.

        To save orders permanently
        into MySQL / Aiven, connect
        this section to your backend API.
    */


    console.log(
        "Order:",
        {
            orderNumber,
            customerName,
            customerPhone,
            customerCity,
            customerAddress,
            paymentMethod,
            items: cart
        }
    );


    cart = [];


    saveCart();

    updateCartUI();


    closeCheckout();


    if (successModal) {

        successModal.classList.add(
            "open"
        );

    }


    document.body.classList.add(
        "no-scroll"
    );


    form.reset();

}


/* =========================================================
   SUCCESS MODAL
   ========================================================= */

function closeSuccessModal() {

    if (successModal) {

        successModal.classList.remove(
            "open"
        );

    }


    document.body.classList.remove(
        "no-scroll"
    );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout;


function showToast(
    title,
    message
) {

    const toastTitle =
        document.getElementById(
            "toastTitle"
        );


    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    if (!toast) return;


    if (toastTitle) {

        toastTitle.textContent =
            title;

    }


    if (toastMessage) {

        toastMessage.textContent =
            message;

    }


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


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


/* =========================================================
   NEWSLETTER
   ========================================================= */

function subscribeNewsletter(
    event
) {

    event.preventDefault();


    const emailInput =
        document.getElementById(
            "newsletterEmail"
        );


    if (!emailInput) return;


    const email =
        emailInput.value.trim();


    if (!email) {

        return;

    }


    showToast(
        "Subscribed!",
        "Thank you for joining Almeas Collection."
    );


    event.currentTarget.reset();

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );


    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (
        !mobileMenu ||
        !navLinks
    ) {

        return;

    }


    mobileMenu.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "open"
            );


            const isOpen =
                navLinks.classList.contains(
                    "open"
                );


            mobileMenu.textContent =
                isOpen
                    ? "×"
                    : "☰";

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "open"
                        );


                        mobileMenu.textContent =
                            "☰";

                    }
                );

            }
        );

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function setupEvents() {

    /* Product filters */

    document.addEventListener(
        "click",
        function (event) {

            const filterButton =
                event.target.closest(
                    ".filter-btn"
                );


            const categoryButton =
                event.target.closest(
                    ".category-btn"
                );


            if (filterButton) {

                setFilter(
                    filterButton.dataset.filter
                );

                return;

            }


            if (categoryButton) {

                setFilter(
                    categoryButton.dataset.filter
                );

                return;

            }

        }
    );


    /* Product buttons */

    if (productGrid) {

        productGrid.addEventListener(
            "click",
            function (event) {

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
                        Number(
                            cartButton.dataset.cart
                        )
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

    }


    /* Cart buttons */

    if (cartItems) {

        cartItems.addEventListener(
            "click",
            function (event) {

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
                        Number(
                            plus.dataset.plus
                        ),
                        1
                    );

                }


                if (minus) {

                    changeQuantity(
                        Number(
                            minus.dataset.minus
                        ),
                        -1
                    );

                }


                if (remove) {

                    removeFromCart(
                        Number(
                            remove.dataset.remove
                        )
                    );

                }

            }
        );

    }


    /* Wishlist buttons */

    const wishlistItems =
        document.getElementById(
            "wishlistItems"
        );


    if (wishlistItems) {

        wishlistItems.addEventListener(
            "click",
            function (event) {

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

    }


    /* Cart */

    const cartButton =
        document.getElementById(
            "cartBtn"
        );


    if (cartButton) {

        cartButton.addEventListener(
            "click",
            openCart
        );

    }


    const closeCart =
        document.getElementById(
            "closeCart"
        );


    if (closeCart) {

        closeCart.addEventListener(
            "click",
            closeSidePanels
        );

    }


    const continueShopping =
        document.getElementById(
            "continueShopping"
        );


    if (continueShopping) {

        continueShopping.addEventListener(
            "click",
            closeSidePanels
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidePanels
        );

    }


    /* Wishlist */

    const wishlistButton =
        document.getElementById(
            "wishlistBtn"
        );


    if (wishlistButton) {

        wishlistButton.addEventListener(
            "click",
            openWishlist
        );

    }


    const closeWishlist =
        document.getElementById(
            "closeWishlist"
        );


    if (closeWishlist) {

        closeWishlist.addEventListener(
            "click",
            closeSidePanels
        );

    }


    /* Search */

    const searchButton =
        document.getElementById(
            "searchBtn"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            openSearch
        );

    }


    const closeSearchButton =
        document.getElementById(
            "closeSearch"
        );


    if (closeSearchButton) {

        closeSearchButton.addEventListener(
            "click",
            closeSearch
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            searchProducts
        );

    }


    /* Checkout */

    const checkoutButton =
        document.getElementById(
            "checkoutBtn"
        );


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            openCheckout
        );

    }


    const closeCheckoutButton =
        document.getElementById(
            "closeCheckout"
        );


    if (closeCheckoutButton) {

        closeCheckoutButton.addEventListener(
            "click",
            closeCheckout
        );

    }


    const checkoutForm =
        document.getElementById(
            "checkoutForm"
        );


    if (checkoutForm) {

        checkoutForm.addEventListener(
            "submit",
            placeOrder
        );

    }


    /* Success */

    const closeSuccess =
        document.getElementById(
            "closeSuccess"
        );


    if (closeSuccess) {

        closeSuccess.addEventListener(
            "click",
            closeSuccessModal
        );

    }


    const successContinue =
        document.getElementById(
            "successContinue"
        );


    if (successContinue) {

        successContinue.addEventListener(
            "click",
            function () {

                closeSuccessModal();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* Newsletter */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            subscribeNewsletter
        );

    }


    /* Escape key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Escape"
            ) {

                return;

            }


            closeSearch();

            closeSidePanels();

            closeCheckout();

            closeSuccessModal();

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function setupActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    window.addEventListener(
        "scroll",
        function () {

            let current = "";


            sections.forEach(
                section => {

                    const sectionTop =
                        section.offsetTop -
                        150;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        current =
                            section.id;

                    }

                }
            );


            document
                .querySelectorAll(
                    ".nav-links a"
                )
                .forEach(
                    link => {

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

                    }
                );

        }
    );

}


/* =========================================================
   LOADER
   ========================================================= */

function setupLoader() {

    const loader =
        document.getElementById(
            "loader"
        );


    if (!loader) return;


    window.addEventListener(
        "load",
        function () {

            setTimeout(
                function () {

                    loader.classList.add(
                        "hide"
                    );

                },
                700
            );

        }
    );

}


/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

function initializeStore() {

    renderProducts(
        "All"
    );

    updateCartUI();

    updateWishlistUI();

    setupMobileMenu();

    setupEvents();

    setupActiveNavigation();

    setupLoader();

}


/* =========================================================
   START
   ========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeStore
    );

} else {

    initializeStore();

}
