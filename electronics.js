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
    price: "€34.99",
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

/////////////////////////////////////////////////////////////////
//Sorting The Products
document.addEventListener("DOMContentLoaded", () => {
  const sortDropdown = document.getElementById("sort");
  const productList = document.querySelector(".pro-list");
  const products = Array.from(productList.children);

  sortDropdown.addEventListener("change", () => {
    const sortOrder = sortDropdown.value;
    console.log("Original order:", products);
    const sortedProducts = products.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".price").textContent.replace("€", ""));
      const priceB = parseFloat(b.querySelector(".price").textContent.replace("€", ""));

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
    console.log("Sorted order:", sortedProducts);

    // Clear the product list
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }

    // Append the sorted products
    sortedProducts.forEach((product) => {
      productList.appendChild(product);
    });
  });
});

/////////////////////////////////////////////////////////////
//Milestone 3
document.addEventListener("DOMContentLoaded", function () {
  /////// (1) Get the element we need
  const modalCart = document.getElementById("modalCart");
  const closeBtn = document.getElementsByClassName("modal-cart-close")[0];
  const cartDisplay = document.querySelector(".modal-cart-content p");
  const cartLink = document.getElementById("cartLink");
  const cartItems = [];

  ///////// (2)Click on the cart icon in the navbar to open the modal
  cartLink.onclick = function () {
    modalCart.style.display = "block";
    setTimeout(function () {
      modalCart.classList.add("show");
    }, 10);
    updateCartDisplay();
  };
  ///////// (3)Close the cart model by x
  closeBtn.onclick = function () {
    modalCart.classList.remove("show");
    setTimeout(function () {
      modalCart.style.display = "none";
    }, 300);
  };
  ///////// (3)Close the cart model when click outside
  window.onclick = function (event) {
    if (event.target == modalCart) {
      modalCart.classList.remove("show");
      setTimeout(function () {
        modalCart.style.display = "none";
      }, 300);
    }
  };
  ////////////////////////(4) Add to cart icon
  const addToCartButtons = document.querySelectorAll(".product-buy");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const product = event.target.closest(".pro-card");
      const productName = product.querySelector(".product-name").textContent;
      const productPrice = product.querySelector(".product-price").textContent;

      cartItems.push({
        name: productName,
        price: productPrice,
      });

      displayConfirmation(productName);
      updateCartDisplay();
    });
  });
  ///////////////(5) Updating the cart's display
  function updateCartDisplay() {
    if (cartItems.length === 0) {
      cartDisplay.textContent = "Your cart is empty.";
    } else {
      cartDisplay.innerHTML = `
        <ul> 
        ${cartItems
          .map((item) => `<li>${item.name} - ${item.price}</li>`)
          .join("")} 
        </ul>
        `;
    }
  }
  ////////////////(6) Message displayConfirmation
  function displayConfirmation(productName) {
    const confirmation = document.createElement("div");
    confirmation.className = "confirmation-message";
    confirmation.textContent = `${productName} has been added to the cart.`;
    document.body.appendChild(confirmation);

    setTimeout(function () {
      confirmation.remove();
    }, 3000);
  }
});