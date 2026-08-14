
// =========================================================
// PRODUCT IMAGE SLIDER
// =========================================================

document.querySelectorAll(".product-image-slider").forEach(slider => {

    const images = slider.querySelectorAll(".slider-img");

    if (images.length <= 1) return;

    let current = 0;

    setInterval(() => {

        images[current].classList.remove("active");

        current = (current + 1) % images.length;

        images[current].classList.add("active");

    }, 4500);

});


// =========================================================
// MOBILE MENU
// =========================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// =========================================================
// CART ELEMENTS
// =========================================================

const cartIcon = document.querySelector(".cart-icon");
const cartPanel = document.querySelector(".cart-panel");
const closeCart = document.querySelector("#close-cart");

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");

const checkoutBtn = document.getElementById("checkout-btn");


// =========================================================
// DELIVERY / CHECKOUT ELEMENTS
// =========================================================

const deliverySection = document.getElementById("delivery");
const checkoutForm = document.getElementById("checkout-form");

const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");


// =========================================================
// CART DATA
// =========================================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =========================================================
// SAVE CART
// =========================================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


// =========================================================
// OPEN CART
// =========================================================

if (cartIcon && cartPanel) {

    cartIcon.addEventListener("click", () => {

        cartPanel.classList.add("active");

    });

}


// =========================================================
// CLOSE CART
// =========================================================

if (closeCart && cartPanel) {

    closeCart.addEventListener("click", () => {

        cartPanel.classList.remove("active");

    });

}


// =========================================================
// UPDATE CART
// =========================================================

function updateCart() {

    if (!cartItems || !totalPrice || !cartCount) {
        return;
    }


    // Clear existing cart
    cartItems.innerHTML = "";


    // Total price
    let total = 0;


    // Total quantity
    let totalQuantity = 0;


    // =====================================================
    // EMPTY CART
    // =====================================================

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        totalPrice.innerText = "Rs. 0";

        cartCount.innerText = "0";

        saveCart();

        return;
    }


    // =====================================================
    // DISPLAY CART ITEMS
    // =====================================================

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.qty;

        total += itemTotal;

        totalQuantity += item.qty;


        cartItems.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-details">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        Rs. ${item.price}
                    </p>

                    <div class="quantity-controls">

                        <button
                            type="button"
                            onclick="changeQty(${index}, -1)"
                        >
                            -
                        </button>

                        <span>
                            ${item.qty}
                        </span>

                        <button
                            type="button"
                            onclick="changeQty(${index}, 1)"
                        >
                            +
                        </button>

                    </div>

                    <p>
                        Subtotal:
                        <strong>
                            Rs. ${itemTotal}
                        </strong>
                    </p>

                    <button
                        type="button"
                        onclick="removeItem(${index})"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;

    });


    // =====================================================
    // UPDATE TOTAL
    // =====================================================

    totalPrice.innerText = "Rs. " + total;


    // =====================================================
    // UPDATE CART COUNT
    // =====================================================

    cartCount.innerText = totalQuantity;


    // Save cart
    saveCart();

}


// =========================================================
// ADD PRODUCTS TO CART
// =========================================================

const addButtons = document.querySelectorAll(".add-cart");


addButtons.forEach(button => {

    button.addEventListener("click", () => {


        // Find product card
        const card = button.closest(".product-card");


        if (!card) {
            return;
        }


        // Product name
        const nameElement = card.querySelector("h3");

        const name = nameElement
            ? nameElement.innerText.trim()
            : "Product";


        // Product price
        const priceElement = card.querySelector(".price");

        const price = priceElement
            ? Number(
                priceElement.innerText.replace(/[^\d]/g, "")
              )
            : 0;


        // Product image
        const imageElement = card.querySelector("img");

        const image = imageElement
            ? imageElement.src
            : "";


        // Check if product already exists
        const existingProduct = cart.find(
            item => item.name === name
        );


        // =====================================================
        // PRODUCT ALREADY IN CART
        // =====================================================

        if (existingProduct) {

            existingProduct.qty++;

        }


        // =====================================================
        // NEW PRODUCT
        // =====================================================

        else {

            cart.push({

                name: name,

                price: price,

                image: image,

                qty: 1

            });

        }


        // Update cart
        updateCart();


        // Open cart automatically
        if (cartPanel) {

            cartPanel.classList.add("active");

        }

    });

});


// =========================================================
// REMOVE ITEM
// =========================================================

function removeItem(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    cart.splice(index, 1);


    updateCart();

}


// =========================================================
// CHANGE QUANTITY
// =========================================================

function changeQty(index, value) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    cart[index].qty += value;


    // Remove item when quantity reaches zero
    if (cart[index].qty <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


// =========================================================
// CHECKOUT BUTTON
// CART → DELIVERY FORM
// =========================================================

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {


        // =====================================================
        // CHECK EMPTY CART
        // =====================================================

        if (cart.length === 0) {

            alert(
                "Your cart is empty. Please add a product first."
            );

            return;

        }


        // =====================================================
        // CLOSE CART
        // =====================================================

        if (cartPanel) {

            cartPanel.classList.remove("active");

        }


        // =====================================================
        // SCROLL TO DELIVERY FORM
        // =====================================================

        if (deliverySection) {

            deliverySection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

}


// =========================================================
// PLACE ORDER
// =========================================================

if (checkoutForm) {

    checkoutForm.addEventListener("submit", (event) => {

        event.preventDefault();


        // =====================================================
        // CHECK CART
        // =====================================================

        if (cart.length === 0) {

            alert(
                "Your cart is empty. Please add a product first."
            );

            return;

        }


        // =====================================================
        // GET FORM DATA
        // =====================================================

        const formData = new FormData(checkoutForm);


        const customerName =
            formData.get("name") || "";

        const phone =
            formData.get("phone") || "";

        const email =
            formData.get("email") || "";

        const address =
            formData.get("address") || "";

        const city =
            formData.get("city") || "";

        const postalCode =
            formData.get("postal") || "";


        // =====================================================
        // CALCULATE ORDER TOTAL
        // =====================================================

        let orderTotal = 0;

        cart.forEach(item => {

            orderTotal += item.price * item.qty;

        });


        // =====================================================
        // CREATE ORDER OBJECT
        // =====================================================

        const order = {

            customer: {

                name: customerName,

                phone: phone,

                email: email,

                address: address,

                city: city,

                postalCode: postalCode

            },

            products: cart.map(item => ({

                name: item.name,

                price: item.price,

                quantity: item.qty,

                image: item.image

            })),

            total: orderTotal,

            paymentMethod: "Cash On Delivery",

            orderDate: new Date().toISOString()

        };


        // =====================================================
        // SAVE LAST ORDER
        // =====================================================

        localStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );


        // =====================================================
        // SHOW SUCCESS POPUP
        // =====================================================

        if (popup) {

            popup.classList.add("active");

        }


        // =====================================================
        // CLEAR CART
        // =====================================================

        cart = [];

        updateCart();


        // =====================================================
        // RESET FORM
        // =====================================================

        checkoutForm.reset();

    });

}


// =========================================================
// CLOSE SUCCESS POPUP
// =========================================================

if (closePopup && popup) {

    closePopup.addEventListener("click", () => {

        popup.classList.remove("active");

    });

}


// =========================================================
// CLICK OUTSIDE POPUP
// =========================================================

if (popup) {

    popup.addEventListener("click", (event) => {

        if (event.target === popup) {

            popup.classList.remove("active");

        }

    });

}


// =========================================================
// SCROLL ANIMATION
// =========================================================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.1
    }

);


document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


// =========================================================
// SMOOTH SCROLL
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const target = document.querySelector(targetId);


        // Ignore invalid/empty targets
        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });


        // Close mobile menu
        if (navLinks) {

            navLinks.classList.remove("active");

        }

    });

});


// =========================================================
// INITIAL CART LOAD
// =========================================================

updateCart();