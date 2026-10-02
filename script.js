/* =========================================================
   ALMEA'S COLLECTION
   COMPLETE WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS
    ----------------------------------------------------- */

    const loader =
        document.getElementById("loader");

    const navbar =
        document.querySelector(".navbar");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const navLinks =
        document.getElementById("navLinks");

    const searchBtn =
        document.getElementById("searchBtn");

    const searchPanel =
        document.getElementById("searchPanel");

    const searchInput =
        document.getElementById("searchInput");

    const closeSearch =
        document.getElementById("closeSearch");

    const productGrid =
        document.getElementById("productGrid");

    const cartBtn =
        document.getElementById("cartBtn");

    const cartSidebar =
        document.getElementById("cartSidebar");

    const closeCart =
        document.getElementById("closeCart");

    const wishlistBtn =
        document.getElementById("wishlistBtn");

    const wishlistSidebar =
        document.getElementById("wishlistSidebar");

    const closeWishlist =
        document.getElementById("closeWishlist");

    const overlay =
        document.getElementById("overlay");

    const cartItems =
        document.getElementById("cartItems");

    const cartEmpty =
        document.getElementById("cartEmpty");

    const cartSummary =
        document.getElementById("cartSummary");

    const cartSubtotal =
        document.getElementById("cartSubtotal");

    const cartDiscount =
        document.getElementById("cartDiscount");

    const deliveryCost =
        document.getElementById("deliveryCost");

    const cartTotal =
        document.getElementById("cartTotal");

    const cartCount =
        document.getElementById("cartCount");

    const wishlistCount =
        document.getElementById("wishlistCount");

    const continueShopping =
        document.getElementById("continueShopping");

    const checkoutBtn =
        document.getElementById("checkoutBtn");

    const checkoutModal =
        document.getElementById("checkoutModal");

    const closeCheckout =
        document.getElementById("closeCheckout");

    const checkoutForm =
        document.getElementById("checkoutForm");

    const successModal =
        document.getElementById("successModal");

    const closeSuccess =
        document.getElementById("closeSuccess");

    const successContinue =
        document.getElementById("successContinue");

    const orderNumber =
        document.getElementById("orderNumber");

    const checkoutItems =
        document.getElementById("checkoutItems");

    const checkoutDiscount =
        document.getElementById("checkoutDiscount");

    const checkoutTotal =
        document.getElementById("checkoutTotal");

    const toast =
        document.getElementById("toast");

    const toastTitle =
        document.getElementById("toastTitle");

    const toastMessage =
        document.getElementById("toastMessage");

    const newsletterForm =
        document.getElementById("newsletterForm");

    const productImageModal =
        document.getElementById("productImageModal");

    const closeProductImage =
        document.getElementById("closeProductImage");

    const productViewerImage =
        document.getElementById("productViewerImage");

    const viewerCategory =
        document.getElementById("viewerCategory");

    const viewerName =
        document.getElementById("viewerName");

    const viewerDescription =
        document.getElementById("viewerDescription");

    const viewerPrice =
        document.getElementById("viewerPrice");


    /* =====================================================
       CONSTANTS
    ===================================================== */

    const DISCOUNT_RATE = 0.05;

    const DELIVERY_CHARGE = 200;


    /* =====================================================
       PRODUCT DATABASE
    ===================================================== */

    /*
       You can replace these images later with
       your own product images.

       Each product has 3 images.

       The slider automatically changes images.
    */

    const products = [

        /* =================================================
           JEWELLERY - 10
        ================================================= */

        {
            id: 1,
            name: "Sliver Ring",
            category: "Jewellery",
            price:160,
            oldPrice: 180,
            description: "",
            badge: "BEST SELLER",
            images: [
                "",
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 2,
            name: "Golden Hoop Earrings",
            category: "Jewellery",
            price: 1200,
            oldPrice: 1500,
            description: "Classic golden hoops with a modern elegant finish.",
            badge: "NEW",
            images: [
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 3,
            name: "Rose Gold Bracelet",
            category: "Jewellery",
            price: 1450,
            oldPrice: 1750,
            description: "Delicate rose gold bracelet for everyday elegance.",
            badge: "",
            images: [
                "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 4,
            name: "Minimal Gold Ring",
            category: "Jewellery",
            price: 950,
            oldPrice: 1200,
            description: "Minimal ring designed for a simple sophisticated look.",
            badge: "POPULAR",
            images: [
                "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 5,
            name: "Crystal Pendant",
            category: "Jewellery",
            price: 1600,
            oldPrice: 1900,
            description: "Sparkling pendant that adds elegance to any outfit.",
            badge: "NEW",
            images: [
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 6,
            name: "Pearl Stud Earrings",
            category: "Jewellery",
            price: 850,
            oldPrice: 1000,
            description: "Classic pearl studs suitable for every occasion.",
            badge: "",
            images: [
                "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 7,
            name: "Layered Necklace",
            category: "Jewellery",
            price: 2100,
            oldPrice: 2500,
            description: "Beautiful layered necklace with a trendy finish.",
            badge: "TRENDING",
            images: [
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 8,
            name: "Elegant Charm Bracelet",
            category: "Jewellery",
            price: 1350,
            oldPrice: 1650,
            description: "Charming bracelet with delicate decorative details.",
            badge: "",
            images: [
                "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 9,
            name: "Statement Earrings",
            category: "Jewellery",
            price: 1550,
            oldPrice: 1850,
            description: "Statement earrings designed for special occasions.",
            badge: "SALE",
            images: [
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 10,
            name: "Luxury Jewellery Set",
            category: "Jewellery",
            price: 3200,
            oldPrice: 3800,
            description: "Complete jewellery set for an elegant appearance.",
            badge: "PREMIUM",
            images: [
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80"
            ]
        },


        /* =================================================
           COSMETICS - 10
        ================================================= */

        {
            id: 11,
            name: "Beauty Essentials Set",
            category: "Cosmetics",
            price: 2500,
            oldPrice: 2900,
            description: "A beautiful collection of everyday beauty essentials.",
            badge: "BEST SELLER",
            images: [
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 12,
            name: "Makeup Brush Set",
            category: "Cosmetics",
            price: 1600,
            oldPrice: 1900,
            description: "Soft professional-style brushes for easy application.",
            badge: "NEW",
            images: [
                "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 13,
            name: "Lipstick Collection",
            category: "Cosmetics",
            price: 1400,
            oldPrice: 1650,
            description: "Beautiful shades for creating your favourite look.",
            badge: "POPULAR",
            images: [
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 14,
            name: "Blush Palette",
            category: "Cosmetics",
            price: 1250,
            oldPrice: 1500,
            description: "Soft blush shades for a natural glowing finish.",
            badge: "",
            images: [
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 15,
            name: "Compact Makeup Kit",
            category: "Cosmetics",
            price: 2200,
            oldPrice: 2600,
            description: "Compact beauty kit perfect for everyday use.",
            badge: "SALE",
            images: [
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 16,
            name: "Beauty Sponge Set",
            category: "Cosmetics",
            price: 750,
            oldPrice: 950,
            description: "Soft beauty sponges for smooth makeup application.",
            badge: "",
            images: [
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 17,
            name: "Face Powder",
            category: "Cosmetics",
            price: 1100,
            oldPrice: 1350,
            description: "Lightweight powder for a smooth natural finish.",
            badge: "NEW",
            images: [
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 18,
            name: "Eyeliner Collection",
            category: "Cosmetics",
            price: 900,
            oldPrice: 1100,
            description: "Create precise and beautiful eye looks with ease.",
            badge: "",
            images: [
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 19,
            name: "Glossy Lip Set",
            category: "Cosmetics",
            price: 1150,
            oldPrice: 1400,
            description: "Glossy lip shades for a beautiful finish.",
            badge: "TRENDING",
            images: [
                "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80"
            ]
        },

        {
            id: 20,
            name: "Complete Makeup Box",
            category: "Cosmetics",
            price: 3900,
            oldPrice: 4500,
            description: "Complete makeup box containing beauty essentials.",
            badge: "PREMIUM",
            images: [
                "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
            ]
        },


        /* =================================================
           KEYCHAINS - 10
        ================================================= */

        {
            id: 21,
            name: "Cute Teddy Keychain",
            category: "Keychains",
            price: 450,
            oldPrice: 550,
            description: "Cute little teddy keychain for your bag or keys.",
            badge: "CUTE",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 22,
            name: "Heart Keychain",
            category: "Keychains",
            price: 400,
            oldPrice: 500,
            description: "Adorable heart keychain made for everyday use.",
            badge: "NEW",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 23,
            name: "Cute Bear Charm",
            category: "Keychains",
            price: 500,
            oldPrice: 600,
            description: "Charming bear accessory for bags and backpacks.",
            badge: "",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 24,
            name: "Flower Keychain",
            category: "Keychains",
            price: 425,
            oldPrice: 525,
            description: "Beautiful floral keychain with a cute finish.",
            badge: "",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 25,
            name: "Butterfly Keychain",
            category: "Keychains",
            price: 475,
            oldPrice: 575,
            description: "Pretty butterfly charm for your favourite bag.",
            badge: "POPULAR",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 26,
            name: "Mini Character Keychain",
            category: "Keychains",
            price: 550,
            oldPrice: 650,
            description: "Fun mini character keychain for everyday carrying.",
            badge: "",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 27,
            name: "Pastel Keychain",
            category: "Keychains",
            price: 425,
            oldPrice: 500,
            description: "Soft pastel keychain with a lovely aesthetic.",
            badge: "TRENDING",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 28,
            name: "Ribbon Keychain",
            category: "Keychains",
            price: 450,
            oldPrice: 550,
            description: "Cute ribbon design perfect for bags and keys.",
            badge: "",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 29,
            name: "Star Keychain",
            category: "Keychains",
            price: 400,
            oldPrice: 500,
            description: "Small star charm with a stylish cute design.",
            badge: "SALE",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },

        {
            id: 30,
            name: "Premium Charm Keychain",
            category: "Keychains",
            price: 700,
            oldPrice: 850,
            description: "Premium decorative keychain with elegant details.",
            badge: "PREMIUM",
            images: [
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg",
                "image/IMG_20260929_185853_493.jpg"
            ]
        },


        /* =================================================
           HAIR ACCESSORIES - 10
        ================================================= */

        {
            id: 31,
            name: "Pearl Hair Clip",
            category: "Hair Accessories",
            price: 550,
            oldPrice: 700,
            description: "Elegant pearl clip for beautiful hairstyles.",
            badge: "NEW",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 32,
            name: "Butterfly Hair Clip",
            category: "Hair Accessories",
            price: 450,
            oldPrice: 550,
            description: "Cute butterfly clip for everyday styling.",
            badge: "CUTE",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 33,
            name: "Satin Scrunchie",
            category: "Hair Accessories",
            price: 350,
            oldPrice: 450,
            description: "Soft satin scrunchie that is gentle on your hair.",
            badge: "",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 34,
            name: "Flower Hair Band",
            category: "Hair Accessories",
            price: 500,
            oldPrice: 650,
            description: "Beautiful floral hair band for special occasions.",
            badge: "POPULAR",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 35,
            name: "Elegant Hair Bow",
            category: "Hair Accessories",
            price: 600,
            oldPrice: 750,
            description: "Elegant bow accessory for a stylish hairstyle.",
            badge: "TRENDING",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 36,
            name: "Minimal Hair Pin Set",
            category: "Hair Accessories",
            price: 400,
            oldPrice: 500,
            description: "Minimal hair pins for simple everyday styling.",
            badge: "",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 37,
            name: "Pearl Hair Band",
            category: "Hair Accessories",
            price: 700,
            oldPrice: 850,
            description: "Pearl hair band with an elegant finish.",
            badge: "PREMIUM",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 38,
            name: "Colorful Hair Clips",
            category: "Hair Accessories",
            price: 450,
            oldPrice: 550,
            description: "Colourful clips for fun and stylish hairstyles.",
            badge: "",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 39,
            name: "Velvet Scrunchie",
            category: "Hair Accessories",
            price: 375,
            oldPrice: 475,
            description: "Soft velvet scrunchie with a luxurious appearance.",
            badge: "NEW",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        },

        {
            id: 40,
            name: "Luxury Hair Accessory Set",
            category: "Hair Accessories",
            price: 1200,
            oldPrice: 1450,
            description: "Beautiful collection of hair accessories in one set.",
            badge: "BEST SELLER",
            images: [
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg",
                "image/hair-accessories.jpg"
            ]
        }

    ];


    /* =====================================================
       STATE
    ===================================================== */

    let cart =
        JSON.parse(
            localStorage.getItem("almeaCart")
        ) || [];

    let wishlist =
        JSON.parse(
            localStorage.getItem("almeaWishlist")
        ) || [];

    let activeFilter = "All";

    let searchTerm = "";

    let toastTimer = null;


    /* =====================================================
       FORMAT PRICE
    ===================================================== */

    function formatPrice(amount) {

        return "Rs. " +
            Number(amount).toLocaleString("en-PK");
    }


    /* =====================================================
       SAVE DATA
    ===================================================== */

    function saveCart() {

        localStorage.setItem(
            "almeaCart",
            JSON.stringify(cart)
        );
    }


    function saveWishlist() {

        localStorage.setItem(
            "almeaWishlist",
            JSON.stringify(wishlist)
        );
    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(
        title,
        message
    ) {

        if (!toast) return;

        toastTitle.textContent =
            title;

        toastMessage.textContent =
            message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer =
            setTimeout(() => {

                toast.classList.remove("show");

            }, 3000);
    }


    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                loader.classList.add("hide");

            }, 900);

        }
    );


    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 50
            ) {

                navbar.classList.add(
                    "scrolled"
                );

            } else {

                navbar.classList.remove(
                    "scrolled"
                );

            }

            updateActiveNav();

        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    mobileMenu.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

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


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    document.querySelectorAll(
        ".nav-links a"
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

                const icon =
                    mobileMenu.querySelector("i");

                icon.className =
                    "fa-solid fa-bars";

            }
        );

    });


    /* =====================================================
       ACTIVE NAV
    ===================================================== */

    function updateActiveNav() {

        const sections =
            document.querySelectorAll(
                "section[id]"
            );

        let current =
            "home";

        sections.forEach(section => {

            const top =
                section.offsetTop - 180;

            if (
                window.scrollY >= top
            ) {

                current =
                    section.id;

            }

        });

        document.querySelectorAll(
            ".nav-links a"
        ).forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    searchBtn.addEventListener(
        "click",
        () => {

            searchPanel.classList.add(
                "open"
            );

            setTimeout(() => {

                searchInput.focus();

            }, 300);

        }
    );


    closeSearch.addEventListener(
        "click",
        () => {

            closeSearchPanel();

        }
    );


    function closeSearchPanel() {

        searchPanel.classList.remove(
            "open"
        );

        searchInput.value = "";

        searchTerm = "";

        renderProducts(
            activeFilter
        );

    }


    searchInput.addEventListener(
        "input",
        () => {

            searchTerm =
                searchInput.value
                    .trim()
                    .toLowerCase();

            renderProducts(
                activeFilter
            );

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeSearchPanel();

                closeAllSidebars();

                closeAllModals();

            }

        }
    );


    /* =====================================================
       CREATE PRODUCT CARD
    ===================================================== */

    function createProductCard(
        product,
        index
    ) {

        const card =
            document.createElement("article");

        card.className =
            "product-card";

        card.dataset.id =
            product.id;

        card.style.animationDelay =
            `${index * 0.05}s`;


        const isWishlisted =
            wishlist.includes(
                product.id
            );


        const badgeHTML =
            product.badge
                ?
                `<span class="product-badge">
                    ${product.badge}
                </span>`
                :
                "";


        const slides =
            product.images
                .map(
                    (image, imageIndex) => `
                        <img
                            class="product-slide ${
                                imageIndex === 0
                                    ? "active"
                                    : ""
                            }"
                            src="${image}"
                            alt="${product.name}"
                            loading="lazy"
                        >
                    `
                )
                .join("");


        const dots =
            product.images
                .map(
                    (_, imageIndex) => `
                        <button
                            class="slider-dot ${
                                imageIndex === 0
                                    ? "active"
                                    : ""
                            }"
                            data-slide="${imageIndex}">
                        </button>
                    `
                )
                .join("");


        card.innerHTML = `

            <div class="product-image">

                <div class="product-slider">
                    ${slides}
                </div>

                ${badgeHTML}

                <div class="product-actions">

                    <button
                        class="product-action wishlist-action ${
                            isWishlisted
                                ? "wishlisted"
                                : ""
                        }"
                        data-id="${product.id}"
                        title="Wishlist">

                        <i class="${
                            isWishlisted
                                ? "fa-solid"
                                : "fa-regular"
                        } fa-heart"></i>

                    </button>

                    <button
                        class="product-action quick-view-action"
                        data-id="${product.id}"
                        title="View Product">

                        <i class="fa-solid fa-eye"></i>

                    </button>

                </div>

                <div class="slider-dots">
                    ${dots}
                </div>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <div>

                        <span class="product-price">
                            ${formatPrice(product.price)}
                        </span>

                        <span class="product-price-old">
                            ${formatPrice(product.oldPrice)}
                        </span>

                    </div>

                    <button
                        class="add-cart-btn"
                        data-id="${product.id}"
                        title="Add to Cart">

                        <i class="fa-solid fa-plus"></i>

                    </button>

                </div>

                <button
                    class="view-product-btn"
                    data-id="${product.id}">

                    View Product

                    <i class="fa-solid fa-arrow-right"></i>

                </button>

            </div>
        `;


        setupProductSlider(card);

        return card;
    }


    /* =====================================================
       RENDER PRODUCTS
    ===================================================== */

    function renderProducts(
        category = "All"
    ) {

        if (!productGrid) return;

        activeFilter =
            category;


        let filteredProducts =
            products.filter(
                product => {

                    const matchesCategory =
                        category === "All" ||
                        product.category === category;

                    const searchText =
                        (
                            product.name +
                            " " +
                            product.category +
                            " " +
                            product.description
                        ).toLowerCase();

                    const matchesSearch =
                        !searchTerm ||
                        searchText.includes(
                            searchTerm
                        );

                    return (
                        matchesCategory &&
                        matchesSearch
                    );

                }
            );


        productGrid.innerHTML = "";


        if (
            filteredProducts.length === 0
        ) {

            productGrid.innerHTML = `

                <div class="no-products">

                    <i class="fa-solid fa-box-open"></i>

                    <h3>
                        No products found
                    </h3>

                    <p>
                        Try another search or category.
                    </p>

                </div>

            `;

            return;
        }


        filteredProducts.forEach(
            (product, index) => {

                const card =
                    createProductCard(
                        product,
                        index
                    );

                productGrid.appendChild(
                    card
                );

            }
        );

    }


    /* =====================================================
       FILTER BUTTONS
    ===================================================== */

    document.querySelectorAll(
        ".filter-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelectorAll(
                    ".filter-btn"
                ).forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                const category =
                    button.dataset.filter;

                renderProducts(
                    category
                );

            }
        );

    });


    /* =====================================================
       CATEGORY BUTTONS
    ===================================================== */

    document.querySelectorAll(
        ".category-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.filter;

                activateFilter(
                    category
                );

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


    /* =====================================================
       FOOTER FILTER
    ===================================================== */

    document.querySelectorAll(
        "[data-footer-filter]"
    ).forEach(link => {

        link.addEventListener(
            "click",
            () => {

                const category =
                    link.dataset.footerFilter;

                activateFilter(
                    category
                );

            }
        );

    });


    function activateFilter(
        category
    ) {

        document.querySelectorAll(
            ".filter-btn"
        ).forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.filter === category
            );

        });


        renderProducts(
            category
        );

    }


    /* =====================================================
       PRODUCT SLIDER
    ===================================================== */

    function setupProductSlider(
        card
    ) {

        const slides =
            card.querySelectorAll(
                ".product-slide"
            );

        const dots =
            card.querySelectorAll(
                ".slider-dot"
            );

        if (
            slides.length <= 1
        ) return;


        let currentSlide = 0;


        function showSlide(
            index
        ) {

            slides.forEach(
                (slide, i) => {

                    slide.classList.toggle(
                        "active",
                        i === index
                    );

                }
            );


            dots.forEach(
                (dot, i) => {

                    dot.classList.toggle(
                        "active",
                        i === index
                    );

                }
            );

            currentSlide =
                index;

        }


        let interval =
            setInterval(
                () => {

                    currentSlide =
                        (
                            currentSlide + 1
                        ) % slides.length;

                    showSlide(
                        currentSlide
                    );

                },
                3000
            );


        dots.forEach(
            (dot, index) => {

                dot.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        showSlide(
                            index
                        );

                        clearInterval(
                            interval
                        );

                        interval =
                            setInterval(
                                () => {

                                    currentSlide =
                                        (
                                            currentSlide + 1
                                        ) %
                                        slides.length;

                                    showSlide(
                                        currentSlide
                                    );

                                },
                                3000
                            );

                    }
                );

            }
        );


        card.addEventListener(
            "mouseenter",
            () => {

                clearInterval(
                    interval
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                interval =
                    setInterval(
                        () => {

                            currentSlide =
                                (
                                    currentSlide + 1
                                ) %
                                slides.length;

                            showSlide(
                                currentSlide
                            );

                        },
                        3000
                    );

            }
        );

    }


    /* =====================================================
       PRODUCT GRID EVENT DELEGATION
    ===================================================== */

    productGrid.addEventListener(
        "click",
        event => {

            const cartButton =
                event.target.closest(
                    ".add-cart-btn"
                );

            const wishlistButton =
                event.target.closest(
                    ".wishlist-action"
                );

            const viewButton =
                event.target.closest(
                    ".view-product-btn, .quick-view-action"
                );


            if (cartButton) {

                const id =
                    Number(
                        cartButton.dataset.id
                    );

                addToCart(id);

            }


            if (wishlistButton) {

                const id =
                    Number(
                        wishlistButton.dataset.id
                    );

                toggleWishlist(id);

            }


            if (viewButton) {

                const id =
                    Number(
                        viewButton.dataset.id
                    );

                openProductViewer(id);

            }

        }
    );


    /* =====================================================
       ADD TO CART
    ===================================================== */

    function addToCart(
        productId
    ) {

        const product =
            products.find(
                item =>
                    item.id === productId
            );

        if (!product) return;


        const existing =
            cart.find(
                item =>
                    item.id === productId
            );


        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({

                id: product.id,

                quantity: 1

            });

        }


        saveCart();

        updateCartUI();

        showToast(
            "Added to Cart",
            `${product.name} added to your shopping bag.`
        );

    }


    /* =====================================================
       REMOVE FROM CART
    ===================================================== */

    function removeFromCart(
        productId
    ) {

        cart =
            cart.filter(
                item =>
                    item.id !== productId
            );

        saveCart();

        updateCartUI();

    }


    /* =====================================================
       CHANGE QUANTITY
    ===================================================== */

    function changeQuantity(
        productId,
        change
    ) {

        const item =
            cart.find(
                item =>
                    item.id === productId
            );

        if (!item) return;


        item.quantity += change;


        if (
            item.quantity <= 0
        ) {

            removeFromCart(
                productId
            );

            return;

        }


        saveCart();

        updateCartUI();

    }


    /* =====================================================
       CALCULATE CART
    ===================================================== */

    function getCartTotals() {

        let subtotal = 0;

        let itemCount = 0;


        cart.forEach(
            item => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                if (!product) return;


                subtotal +=
                    product.price *
                    item.quantity;

                itemCount +=
                    item.quantity;

            }
        );


        const discount =
            subtotal *
            DISCOUNT_RATE;


        const delivery =
            itemCount > 0
                ? DELIVERY_CHARGE
                : 0;


        const total =
            subtotal -
            discount +
            delivery;


        return {

            subtotal,

            discount,

            delivery,

            total,

            itemCount

        };

    }


    /* =====================================================
       UPDATE CART UI
    ===================================================== */

    function updateCartUI() {

        const totals =
            getCartTotals();


        cartCount.textContent =
            totals.itemCount;


        cartSubtotal.textContent =
            formatPrice(
                totals.subtotal
            );


        cartDiscount.textContent =
            "- " +
            formatPrice(
                totals.discount
            );


        deliveryCost.textContent =
            formatPrice(
                totals.delivery
            );


        cartTotal.textContent =
            formatPrice(
                totals.total
            );


        cartItems.innerHTML = "";


        if (
            cart.length === 0
        ) {

            cartEmpty.classList.add(
                "show"
            );

            cartSummary.style.display =
                "none";

            return;

        }


        cartEmpty.classList.remove(
            "show"
        );

        cartSummary.style.display =
            "block";


        cart.forEach(
            item => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                if (!product) return;


                const div =
                    document.createElement("div");

                div.className =
                    "cart-item";


                div.innerHTML = `

                    <div class="cart-item-image">

                        <img
                            src="${product.images[0]}"
                            alt="${product.name}"
                        >

                    </div>


                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <span>
                            ${formatPrice(product.price)}
                        </span>

                        <div class="quantity-controls">

                            <button
                                data-action="minus"
                                data-id="${product.id}">
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                data-action="plus"
                                data-id="${product.id}">
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-cart"
                        data-id="${product.id}">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                `;


                cartItems.appendChild(
                    div
                );

            }
        );

    }


    /* =====================================================
       CART EVENTS
    ===================================================== */

    cartItems.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );

            if (!button) return;


            const id =
                Number(
                    button.dataset.id
                );


            if (
                button.classList.contains(
                    "remove-cart"
                )
            ) {

                removeFromCart(id);

                return;

            }


            const action =
                button.dataset.action;


            if (
                action === "plus"
            ) {

                changeQuantity(
                    id,
                    1
                );

            }


            if (
                action === "minus"
            ) {

                changeQuantity(
                    id,
                    -1
                );

            }

        }
    );


    /* =====================================================
       CART OPEN
    ===================================================== */

    cartBtn.addEventListener(
        "click",
        () => {

            closeWishlistSidebar();

            cartSidebar.classList.add(
                "open"
            );

            overlay.classList.add(
                "active"
            );

            document.body.classList.add(
                "no-scroll"
            );

        }
    );


    closeCart.addEventListener(
        "click",
        closeCartSidebar
    );


    function closeCartSidebar() {

        cartSidebar.classList.remove(
            "open"
        );

        overlay.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    /* =====================================================
       WISHLIST
    ===================================================== */

    function toggleWishlist(
        productId
    ) {

        const product =
            products.find(
                item =>
                    item.id === productId
            );

        if (!product) return;


        const index =
            wishlist.indexOf(
                productId
            );


        if (index === -1) {

            wishlist.push(
                productId
            );

            showToast(
                "Wishlist",
                `${product.name} added to your wishlist.`
            );

        } else {

            wishlist.splice(
                index,
                1
            );

            showToast(
                "Wishlist",
                `${product.name} removed from your wishlist.`
            );

        }


        saveWishlist();

        updateWishlistUI();

        renderProducts(
            activeFilter
        );

    }


    /* =====================================================
       UPDATE WISHLIST
    ===================================================== */

    function updateWishlistUI() {

        wishlistCount.textContent =
            wishlist.length;


        const container =
            document.getElementById(
                "wishlistItems"
            );


        container.innerHTML = "";


        if (
            wishlist.length === 0
        ) {

            container.innerHTML = `

                <div class="wishlist-empty">

                    <i class="fa-regular fa-heart"></i>

                    <p>
                        Your wishlist is empty.
                    </p>

                </div>

            `;

            return;

        }


        wishlist.forEach(
            productId => {

                const product =
                    products.find(
                        item =>
                            item.id === productId
                    );

                if (!product) return;


                const div =
                    document.createElement("div");

                div.className =
                    "wishlist-item";


                div.innerHTML = `

                    <img
                        src="${product.images[0]}"
                        alt="${product.name}"
                    >

                    <div class="wishlist-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <span>
                            ${formatPrice(product.price)}
                        </span>

                    </div>

                    <button
                        data-wishlist-cart="${product.id}">

                        Add

                    </button>

                `;


                container.appendChild(
                    div
                );

            }
        );

    }


    /* =====================================================
       WISHLIST EVENTS
    ===================================================== */

    document
        .getElementById("wishlistItems")
        .addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "[data-wishlist-cart]"
                    );

                if (!button) return;


                const id =
                    Number(
                        button.dataset.wishlistCart
                    );

                addToCart(id);

            }
        );


    /* =====================================================
       WISHLIST OPEN
    ===================================================== */

    wishlistBtn.addEventListener(
        "click",
        () => {

            closeCartSidebar();

            updateWishlistUI();

            wishlistSidebar.classList.add(
                "open"
            );

            overlay.classList.add(
                "active"
            );

            document.body.classList.add(
                "no-scroll"
            );

        }
    );


    closeWishlist.addEventListener(
        "click",
        closeWishlistSidebar
    );


    function closeWishlistSidebar() {

        wishlistSidebar.classList.remove(
            "open"
        );

        overlay.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    /* =====================================================
       OVERLAY
    ===================================================== */

    overlay.addEventListener(
        "click",
        () => {

            closeCartSidebar();

            closeWishlistSidebar();

        }
    );


    /* =====================================================
       CONTINUE SHOPPING
    ===================================================== */

    continueShopping.addEventListener(
        "click",
        () => {

            closeCartSidebar();

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


    /* =====================================================
       PRODUCT IMAGE VIEWER
    ===================================================== */

    function openProductViewer(
        productId
    ) {

        const product =
            products.find(
                item =>
                    item.id === productId
            );

        if (!product) return;


        productViewerImage.src =
            product.images[0];

        productViewerImage.alt =
            product.name;

        viewerCategory.textContent =
            product.category;

        viewerName.textContent =
            product.name;

        viewerDescription.textContent =
            product.description;

        viewerPrice.textContent =
            formatPrice(
                product.price
            );


        productImageModal.classList.add(
            "open"
        );

        document.body.classList.add(
            "no-scroll"
        );

    }


    closeProductImage.addEventListener(
        "click",
        closeProductViewer
    );


    function closeProductViewer() {

        productImageModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    productImageModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                productImageModal
            ) {

                closeProductViewer();

            }

        }
    );


    /* =====================================================
       CHECKOUT
    ===================================================== */

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (
                cart.length === 0
            ) {

                showToast(
                    "Cart Empty",
                    "Please add a product before checkout."
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


    function updateCheckoutSummary() {

        const totals =
            getCartTotals();


        checkoutItems.textContent =
            totals.itemCount;


        checkoutDiscount.textContent =
            "- " +
            formatPrice(
                totals.discount
            );


        checkoutTotal.textContent =
            formatPrice(
                totals.total
            );

    }


    closeCheckout.addEventListener(
        "click",
        () => {

            checkoutModal.classList.remove(
                "open"
            );

            document.body.classList.remove(
                "no-scroll"
            );

        }
    );


    /* =====================================================
       CHECKOUT FORM
    ===================================================== */

    checkoutForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            if (
                cart.length === 0
            ) {

                showToast(
                    "Cart Empty",
                    "Your cart is empty."
                );

                return;

            }


            const customerName =
                document
                    .getElementById(
                        "customerName"
                    )
                    .value
                    .trim();


            const customerPhone =
                document
                    .getElementById(
                        "customerPhone"
                    )
                    .value
                    .trim();


            const customerCity =
                document
                    .getElementById(
                        "customerCity"
                    )
                    .value
                    .trim();


            const customerAddress =
                document
                    .getElementById(
                        "customerAddress"
                    )
                    .value
                    .trim();


            const paymentMethod =
                document
                    .getElementById(
                        "paymentMethod"
                    )
                    .value;


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


            const orderId =
                generateOrderNumber();


            orderNumber.textContent =
                orderId;


            const orderData = {

                orderNumber:
                    orderId,

                customer: {

                    name:
                        customerName,

                    phone:
                        customerPhone,

                    email:
                        document
                            .getElementById(
                                "customerEmail"
                            )
                            .value
                            .trim(),

                    city:
                        customerCity,

                    address:
                        customerAddress,

                    area:
                        document
                            .getElementById(
                                "customerArea"
                            )
                            .value
                            .trim(),

                    payment:
                        paymentMethod

                },

                items:
                    cart.map(item => {

                        const product =
                            products.find(
                                product =>
                                    product.id === item.id
                            );

                        return {

                            id:
                                product.id,

                            name:
                                product.name,

                            price:
                                product.price,

                            quantity:
                                item.quantity

                        };

                    }),

                totals:
                    getCartTotals(),

                date:
                    new Date().toISOString()

            };


            /*
               Save latest order locally.

               Later you can replace this with:

               fetch("YOUR_BACKEND_URL/api/orders", {
                   method: "POST",
                   ...
               })

               when your backend is ready.
            */

            localStorage.setItem(
                "almeaLastOrder",
                JSON.stringify(orderData)
            );


            cart = [];

            saveCart();

            updateCartUI();


            checkoutModal.classList.remove(
                "open"
            );


            closeCartSidebar();


            checkoutForm.reset();


            successModal.classList.add(
                "open"
            );

            document.body.classList.add(
                "no-scroll"
            );

        }
    );


    /* =====================================================
       ORDER NUMBER
    ===================================================== */

    function generateOrderNumber() {

        const random =
            Math.floor(
                100000 +
                Math.random() * 900000
            );

        return "AC" + random;

    }


    /* =====================================================
       SUCCESS MODAL
    ===================================================== */

    closeSuccess.addEventListener(
        "click",
        closeSuccessModal
    );


    successContinue.addEventListener(
        "click",
        closeSuccessModal
    );


    function closeSuccessModal() {

        successModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    successModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                successModal
            ) {

                closeSuccessModal();

            }

        }
    );


    /* =====================================================
       NEWSLETTER
    ===================================================== */

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "newsletterEmail"
                    )
                    .value
                    .trim();


            if (!email) {

                return;

            }


            const emailList =
                JSON.parse(
                    localStorage.getItem(
                        "almeaSubscribers"
                    )
                ) || [];


            if (
                emailList.includes(email)
            ) {

                showToast(
                    "Already Subscribed",
                    "This email is already subscribed."
                );

            } else {

                emailList.push(
                    email
                );

                localStorage.setItem(
                    "almeaSubscribers",
                    JSON.stringify(
                        emailList
                    )
                );


                showToast(
                    "Subscribed",
                    "Thank you for subscribing!"
                );

            }


            newsletterForm.reset();

        }
    );


    /* =====================================================
       CLOSE ALL SIDE BARS
    ===================================================== */

    function closeAllSidebars() {

        closeCartSidebar();

        closeWishlistSidebar();

    }


    /* =====================================================
       CLOSE ALL MODALS
    ===================================================== */

    function closeAllModals() {

        checkoutModal.classList.remove(
            "open"
        );

        successModal.classList.remove(
            "open"
        );

        productImageModal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    /* =====================================================
       MODAL BACKGROUND CLOSE
    ===================================================== */

    checkoutModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                checkoutModal
            ) {

                checkoutModal.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "no-scroll"
                );

            }

        }
    );


    /* =====================================================
       SOCIAL LINKS
    ===================================================== */

    document.querySelectorAll(
        ".social-links a"
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                if (
                    link.getAttribute("href") === "#"
                ) {

                    event.preventDefault();

                    showToast(
                        "Coming Soon",
                        "Our social media link will be available soon."
                    );

                }

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    function setupScrollReveal() {

        const elements =
            document.querySelectorAll(
                ".category-card, .why-card, .testimonial-card, .about-image, .about-content, .newsletter-content"
            );


        elements.forEach(
            element => {

                element.classList.add(
                    "reveal"
                );

            }
        );


        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    targetId.length <= 1
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    renderProducts("All");

    updateCartUI();

    updateWishlistUI();

    setupScrollReveal();

});
