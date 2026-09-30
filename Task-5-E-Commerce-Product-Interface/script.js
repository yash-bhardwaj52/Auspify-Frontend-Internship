const products = [
    { id:1,name:"Premium Wireless Headphones",category:"Electronics",price:2499,oldPrice:3499,rating:4.8,reviews:124,discount:29,image:"🎧" },
    { id:2,name:"Smart Watch Series 5",category:"Electronics",price:3299,oldPrice:4299,rating:4.6,reviews:98,discount:23,image:"⌚" },
    { id:3,name:"Minimal Leather Backpack",category:"Fashion",price:1899,oldPrice:2499,rating:4.7,reviews:76,discount:24,image:"🎒" },
    { id:4,name:"Classic Running Shoes",category:"Footwear",price:2799,oldPrice:3999,rating:4.5,reviews:156,discount:30,image:"👟" },
    { id:5,name:"Modern Sunglasses",category:"Fashion",price:999,oldPrice:1499,rating:4.4,reviews:64,discount:33,image:"🕶️" },
    { id:6,name:"Portable Bluetooth Speaker",category:"Electronics",price:1599,oldPrice:2199,rating:4.6,reviews:87,discount:27,image:"🔊" },
    { id:7,name:"Cotton Casual T-Shirt",category:"Fashion",price:699,oldPrice:999,rating:4.3,reviews:112,discount:30,image:"👕" },
    { id:8,name:"Classic Analog Watch",category:"Accessories",price:2199,oldPrice:2999,rating:4.7,reviews:91,discount:27,image:"⌚" },
    { id:9,name:"Mechanical Gaming Keyboard",category:"Electronics",price:1799,oldPrice:2499,rating:4.7,reviews:83,discount:28,image:"⌨️" },
    { id:10,name:"Premium Travel Duffel Bag",category:"Fashion",price:1499,oldPrice:1999,rating:4.5,reviews:71,discount:25,image:"👜" },
    { id:11,name:"Classic Denim Jacket",category:"Fashion",price:2299,oldPrice:3299,rating:4.6,reviews:94,discount:30,image:"🧥" },
    { id:12,name:"Wireless Gaming Mouse",category:"Electronics",price:1299,oldPrice:1799,rating:4.6,reviews:108,discount:28,image:"🖱️" },
    { id:13,name:"Men's Casual Sneakers",category:"Footwear",price:2399,oldPrice:3299,rating:4.5,reviews:88,discount:27,image:"👞" },
    { id:14,name:"Premium Leather Wallet",category:"Accessories",price:899,oldPrice:1299,rating:4.7,reviews:116,discount:31,image:"👛" },
    { id:15,name:"Smart LED Desk Lamp",category:"Electronics",price:1199,oldPrice:1699,rating:4.4,reviews:67,discount:29,image:"💡" },
    { id:16,name:"Classic Cotton Hoodie",category:"Fashion",price:1599,oldPrice:2199,rating:4.6,reviews:102,discount:27,image:"👕" }
];

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");
const navSearch = document.getElementById("navSearch");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const resetBtn = document.getElementById("resetBtn");
const noResults = document.getElementById("noResults");
const seeMoreBtn = document.getElementById("seeMoreBtn");
let showAllProducts = false;
const cartBtn = document.getElementById("cartBtn");
const wishlistBtn = document.getElementById("wishlistBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

let wishlist = JSON.parse(localStorage.getItem("dinobuyWishlist")) || [];
let cart = JSON.parse(localStorage.getItem("dinobuyCart")) || [];

function saveCart() {
    localStorage.setItem("dinobuyCart", JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderProducts(productList) {
    productGrid.innerHTML = "";

    if (productList.length === 0) {
        noResults.style.display = "block";
        productCount.textContent = "0 Products";
        seeMoreBtn.style.display = "none";
        return;
    }

    noResults.style.display = "none";

    const visibleProducts = showAllProducts || searchInput.value.trim() || categoryFilter.value !== "all"
        ? productList
        : productList.slice(0, 8);

    visibleProducts.forEach(product => {
        const productCard = document.createElement("article");
        productCard.className = "product-card";

        const isWishlisted = wishlist.includes(product.id);

        productCard.innerHTML = `
            <div class="product-image">
                <span class="discount">-${product.discount}%</span>

                <button class="wishlist-btn ${isWishlisted ? "liked" : ""}" data-wishlist="${product.id}" aria-label="Wishlist">
                    ${isWishlisted ? "♥" : "♡"}
                </button>

                <span class="product-emoji">${product.image}</span>
            </div>

            <div class="product-info">
                <span class="product-category">${product.category}</span>

                <h3 class="product-name">${product.name}</h3>

                <div class="product-rating">
                    ★★★★★
                    <span>${product.rating} (${product.reviews})</span>
                </div>

                <div class="product-bottom">
                    <div class="price-box">
                        <strong class="new-price">₹${product.price.toLocaleString("en-IN")}</strong>
                        <del class="old-price">₹${product.oldPrice.toLocaleString("en-IN")}</del>
                    </div>

                    <button class="add-cart-btn" data-id="${product.id}">
                        🛒 Add
                    </button>
                </div>
            </div>
        `;

        productCard.addEventListener("click", event => {
    if (
        event.target.closest(".wishlist-btn") ||
        event.target.closest(".add-cart-btn")
    ) {
        return;
    }

    window.location.href = `product.html?id=${product.id}`;
});

productGrid.appendChild(productCard);
    });

    productCount.textContent = `${productList.length} Products`;

    if (productList.length > 8 && !searchInput.value.trim() && categoryFilter.value === "all") {
        seeMoreBtn.style.display = "inline-flex";
        seeMoreBtn.textContent = showAllProducts
            ? "Show Less ↑"
            : "See More Products →";
    } else {
        seeMoreBtn.style.display = "none";
    }
}

function updateProducts() {

    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value.toLowerCase();
    const selectedSort = sortFilter.value;

    let filteredProducts = products.filter(product => {

        const name = product.name.toLowerCase();
        const category = product.category.toLowerCase();

        const matchesSearch =
            name.includes(searchTerm) ||
            category.includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    switch (selectedSort) {

        case "price-low":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "price-high":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "rating":
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;

        case "discount":
            filteredProducts.sort((a, b) => b.discount - a.discount);
            break;
    }

    renderProducts(filteredProducts);
}

function addToCart(productId, button) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();

    button.textContent = "✓ Added";
    button.style.background = "#16a34a";

    setTimeout(() => {
        button.textContent = "🛒 Add";
        button.style.background = "";
    }, 1000);
}

searchInput.addEventListener("input", () => {

    navSearch.value = searchInput.value;

    updateProducts();
});

navSearch.addEventListener("input", () => {

    searchInput.value = navSearch.value;

    document
        .getElementById("products")
        .scrollIntoView({ behavior:"smooth" });

    updateProducts();
});

categoryFilter.addEventListener("change", updateProducts);

sortFilter.addEventListener("change", updateProducts);

resetBtn.addEventListener("click", () => {

    searchInput.value = "";
    navSearch.value = "";

    categoryFilter.value = "all";
    sortFilter.value = "default";

    renderProducts(products);
});

productGrid.addEventListener("click", event => {

    const wishlistButton =
        event.target.closest(".wishlist-btn");

    if (wishlistButton) {

        const id =
            Number(wishlistButton.dataset.wishlist);

        if (wishlist.includes(id)) {

            wishlist =
                wishlist.filter(item => item !== id);

        } else {

            wishlist.push(id);
        }

        localStorage.setItem(
            "dinobuyWishlist",
            JSON.stringify(wishlist)
        );

        updateProducts();

        return;
    }

    const cartButton =
        event.target.closest(".add-cart-btn");

    if (!cartButton) return;

    const productId =
        Number(cartButton.dataset.id);

    addToCart(productId, cartButton);
});

cartBtn.addEventListener("click", () => {

    window.location.href = "cart.html";
});


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");
});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");
    });
});

updateCartCount();

renderProducts(products);
seeMoreBtn.addEventListener("click", () => {
    showAllProducts = !showAllProducts;
    updateProducts();

    if (!showAllProducts) {
        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });
    }
});