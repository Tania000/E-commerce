// Define Products
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Speaker",
    price: "€99.99",
    description:
      "Enjoy powerful sound on the go with this compact Bluetooth speaker. Waterproof and durable, perfect for outdoor use with 12-hour battery life.",
    image: "Images/Products/10.png",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    price: "€1500",
    description:
      "Boost your gaming experience with this gaming laptop. Equipped with a 15.6 display, NVIDIA graphics card, 16GB RAM, and 512GB SSD for fast loading times.",
    image: "Images/Products/11.png",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "€249.99",
    description:
      "Waterproof smartwatch with fitness tracking, GPS, notification alerts, Bluetooth Over-Ear Headphones, Up to 24 Hours Battery Life.",
    image: "Images/New-Arrivals/n7.png",
  },
  {
    id: 4,
    name: "Home Security Camera",
    price: "€129.99",
    description:
      "Keep an eye on your home with this easy-to-install wireless security camera. Features 1080p HD resolution, night vision, and motion detection.",
    image: "Images/Products/12.png",
  },
  {
    id: 5,
    name: "Noise-Canceling Headphones",
    price: "€199.99",
    description:
      "Immerse yourself in high-quality sound with these noise-canceling wireless headphones. Featuring up to 40 H of battery life and fast charging capability.",
    image: "Images/New-Arrivals/n6.png",
  },
  {
    id: 6,
    name: "4K Ultra HD TV (55-inch)",
    price: "€799.99",
    description:
      "Watch your favorite shows and movies in crystal-clear 4K resolution with this 55 Smart TV. Supports HDR10+ and comes with built-in streaming apps.",
    image: "Images/New-Arrivals/n8.png",
  },
  {
    id: 7,
    name: "Earbuds",
    price: "€279.99",
    description:
      "Bose Ultra Open Ear Earbuds with OpenAudio Technology, Open Ear Wireless Earbuds, Up to 48 Hours Battery Life.",
    image: "Images/Products/13.png",
  },
  {
    id: 8,
    name: "Smartphone",
    price: "€999.99",
    description:
      "Stylish checkered shirt, perfect for semi-formal and casual occasions.",
    image: "Images/Products/15.png",
  },
  {
    id: 9,
    name: "Smartwatch (Fitness Edition",
    price: "€249.99",
    description:
      "Stay connected and track your health with this waterproof smartwatch. Features include heart-rate monitoring, GPS tracking.",
    image: "Images/Products/16.png",
  },
];

// Function to generate product elements
function generateProductElements() {
  const productContainer = document.querySelector("section ul");

  // Clear the product container to avoid duplicates
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.innerHTML = `
   <div class="pro-card">
                    <div class="image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="des">
                        <h4 class ="product-name">${product.name}</h4>
                        <p>${product.description}</p>
                        <div class="group-cart">
                            <p class="product-price">${product.price}</p>
                            <a href="#" class="product-buy"><i class="fa-solid fa-cart-plus"></i></a>
                        </div>
                    </div>
                </div>
    `;
    productContainer.appendChild(productElement);
  });
}

// Call the function to generate product elements when the DOM is fully loaded(meaning: wait until the page is ready before doing something)
document.addEventListener("DOMContentLoaded", generateProductElements);

//TODO===============================================
//!Milestone(2): Sorting Products

//* Sorting The Products
document.addEventListener("DOMContentLoaded", function () {
  const sortDropdown = document.getElementById("sort");
  const productList = document.querySelector("section ul");

  sortDropdown.addEventListener("change", function () {
    const sortOrder = sortDropdown.value; // Get "asc" or "desc" from the dropdown

    // Turn product items(li) into an array
    const products = Array.from(productList.children);

    // Sorting the products by price
    const sortedProducts = products.sort(function (a, b) {
      const priceA = parseFloat(
        a.querySelector(".product-price").textContent.replace("€", "")
      );
      const priceB = parseFloat(
        b.querySelector(".product-price").textContent.replace("€", "")
      );

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Clear the product list
    productList.innerHTML = "";

    // Add the sorted products back to the page
    sortedProducts.forEach((product) => productList.appendChild(product));
  });
});

//TODO===============================================
//!Milestone(3): Add items to the cart

document.addEventListener("DOMContentLoaded", function () {
  const modalCart = document.getElementById("modalCart");
  const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
  const cartDisplay = document.querySelector(".modal-cart-content p");
  const cartLink = document.getElementById("cartLink");
  const cartItemCount = document.getElementById("cartItemCount");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Retrieves the cart data stored in the browser's local storage and converts it into a usable format (an array of objects).If no data exists in localStorage, it initializes an empty array ([])
  let totalPrice = 0;

  //TODO Open And Close The Modal Cart ===============================

  cartLink.onclick = function () {
    modalCart.style.display = "block";
    setTimeout(function () {
      modalCart.classList.add("show");
    }, 10);
    updateCartDisplay();
  };

  closeBtn.onclick = function () {
    modalCart.classList.remove("show");
    setTimeout(function () {
      modalCart.style.display = "none";
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target == modalCart) {
      modalCart.classList.remove("show");
      setTimeout(function () {
        modalCart.style.display = "none";
      }, 300);
    }
  };

  //TODO Add To Cart Function =================================
  // Function to reattach "Add to Cart" listeners
  function addToCart() {
    const addToCartButtons = document.querySelectorAll(".product-buy");
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        const product = event.target.closest(".pro-card");
        const productImg = product.querySelector(".image img").src;
        const productName = product.querySelector(".product-name").textContent;
        const productPrice = parseFloat(
          product.querySelector(".product-price").textContent.replace("€", "")
        );

        const existingItem = cartItems.find(
          (item) => item.name === productName
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cartItems.push({
            image: productImg,
            name: productName,
            price: productPrice,
            quantity: 1,
          });
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCartDisplay();
        updateCartCount();
        displayConfirmation(productName);
      });
    });
  }

  //TODO  Update Cart Display Function ==================================
  function updateCartDisplay() {
    totalPrice = 0;

    if (cartItems.length === 0) {
      cartDisplay.innerHTML = "Your cart is empty.";
      document.querySelector(".total-price").textContent = "€0";
    } else {
      cartDisplay.innerHTML = `
        <ul>
          ${cartItems
            .map(
              (item, index) => `
            <li>
            <div class="item-content">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-detail">
                    <h4 class="item-name">${item.name}</h4>
                    <span class="item-price">€${item.price}</span>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
                </div>
                <span class="delete-item" data-index="${index}"><i class="fa-solid fa-trash"></i></span>
            </div>
            </li>`
            )
            .join("")}
        </ul>
      `;

      //Calculating the Total Price
      cartItems.forEach((item) => (totalPrice += item.price * item.quantity));

      //Updating the Total Price Display
      document.querySelector(
        ".total-price"
      ).textContent = `€${totalPrice.toFixed(2)}`;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  //TODO Update Cart Count Function =========================

  function updateCartCount() {
    const totalItems = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    cartItemCount.textContent = totalItems;
  }

  //TODO Increase The Quantity Input ================
  cartDisplay.addEventListener("change", function (event) {
    if (event.target.classList.contains("quantity-input")) {
      const index = event.target.getAttribute("data-index");
      cartItems[index].quantity = parseInt(event.target.value) || 1;
      updateCartDisplay();
      updateCartCount();
    }
  });

  //TODO Delete Items From The Cart ===============
  cartDisplay.addEventListener("click", function (event) {
    // Check if the click is on or inside a delete button
    const deleteButton = event.target.closest(".delete-item");
    if (deleteButton) {
      const index = deleteButton.getAttribute("data-index"); // Get the data-index
      cartItems.splice(index, 1); // Remove the item from cart
      updateCartDisplay();
      updateCartCount();
    }
  });

  //TODO Message display Confirmation Function ================

  function displayConfirmation(productName) {
    const confirmation = document.createElement("div");
    confirmation.className = "confirmation-message";
    confirmation.textContent = `${productName} has been added to the cart.`;
    document.body.appendChild(confirmation);

    setTimeout(function () {
      confirmation.remove();
    }, 3000);
  }
    //TODO===============================================
    //!Bonus Milestone: Add a search bar

    const searchBar = document.getElementById("searchInput"); // Search input
    const productContainer = document.querySelector("section ul");

    // Search functionality
    searchBar.addEventListener("input", (event) => {
      const searchQuery = event.target.value.toLowerCase();

      // Filter products based on the search query
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );

      // Clear the product list and display only the filtered products
      productContainer.innerHTML = "";
      filteredProducts.forEach((product) => {
        const productElement = document.createElement("li");
        productElement.innerHTML = `
      <div class="pro-card">
                      <div class="image">
                          <img src="${product.image}" alt="${product.name}">
                      </div>
                      <div class="des">
                          <h4 class ="product-name">${product.name}</h4>
                          <p>${product.description}</p>
                          <div class="group-cart">
                              <p class="product-price">${product.price}</p>
                              <a href="#" class="product-buy"><i class="fa-solid fa-cart-plus"></i></a>
                          </div>
                      </div>
                  </div>
      `;
        productContainer.appendChild(productElement);
      });

      addToCart();
    });

    addToCart();
    updateCartDisplay();
    updateCartCount();
  
});
