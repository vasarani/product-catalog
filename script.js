const products = [
    { name: "Smartphone", category: "Electronics", price: "₹15,000" },
    { name: "Laptop", category: "Electronics", price: "₹50,000" },
    { name: "T-Shirt", category: "Clothing", price: "₹500" },
    { name: "Sofa", category: "Home", price: "₹10,000" },
    { name: "Headphones", category: "Electronics", price: "₹2,000" },
    { name: "Jacket", category: "Clothing", price: "₹1,200" },
    { name: "Dining Table", category: "Home", price: "₹15,000" }
];

function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<h2>${product.name}</h2>
                                <p>Category: ${product.category}</p>
                                <p>Price: ${product.price}</p>`;
        productList.appendChild(productDiv);
    });
}

function searchProducts() {
    let searchInput = document.getElementById("searchBar").value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

function filterProducts() {
    let category = document.getElementById("categoryFilter").value;
    if (category === "all") {
        displayProducts(products);
    } else {
        let filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Initial display of products
displayProducts();


