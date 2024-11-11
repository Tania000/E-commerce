// Define Products
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: "€19.99",
    description:
      "A timeless white T-shirt made from 100% cotton. Perfect for casual wear.",
    image: "Images/Products/1.png",
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    price: "€49.99",
    description:
      "High-quality denim jeans with a slim fit design. Ideal for pairing with any top.",
    image: "Images/Products/2.jpg",
  },
  {
    id: 3,
    name: "Gray Hoodie",
    price: "€39.99",
    description:
      "Soft and cozy hoodie with front pockets. Available in various sizes.",
    image: "Images/Products/3.png",
  },
  {
    id: 4,
    name: "Sports Tracksuit",
    price: "€59.99",
    description:
      "A comfortable sports tracksuit made with moisture-wicking fabric. Ideal for workouts.",
    image: "Images/New-Arrivals/n4.png",
  },
  {
    id: 5,
    name: "Red Cocktail Dress",
    price: "€80",
    description:
      "An elegant red dress, perfect for evening events. Made from premium silk fabric.",
    image: "Images/Products/5.png",
  },
  {
    id: 6,
    name: "Black Leather Jacket",
    price: "€79.99",
    description:
      "A classic black leather jacket with a slim-fit design. Great for a bold, stylish look.",
    image: "Images/Products/6.png",
  },
  {
    id: 7,
    name: "Summer Floral Dress",
    price: "€29.99",
    description:
      "Light floral dress, perfect for warm weather. Made from breathable fabric.",
    image: "Images/Products/7.png",
  },
  {
    id: 8,
    name: "Men's Checkered Shirt",
    price: "€34.99",
    description:
      "Stylish checkered shirt, perfect for semi-formal and casual occasions.",
    image: "Images/Products/8.png",
  },
  {
    id: 9,
    name: "Women's Trench Coat",
    price: "€19.99",
    description:
      "A sophisticated trench coat with waist belt. Perfect for colder days.",
    image: "Images/Products/9.png",
  },
];

// Function to generate product elements

function generateProductElements() {
  //Creating a bunch of "product cards"
  //(1) Looking for a specific place to put the cards (section/ul)
  const productContainer = document.querySelector("section ul");
  // Clear the product container to avoid duplicates
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productElement = document.createElement("li"); //# Creating a new list item (li), like making an empty card     //# then Filling the product card
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
    productContainer.appendChild(productElement); //# Adding the card list(child) to the container(parent)
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

    const sortedProducts = products.sort((a, b) => {
      const priceA = parseFloat(
        a.querySelector(".price").textContent.replace("€", "")
      );
      const priceB = parseFloat(
        b.querySelector(".price").textContent.replace("€", "")
      );

      if (sortOrder === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

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

  ///////// (2)Click on the cart icon in the navbar to open the modal cart
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
  ///////////////(5) updates the cart's display
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
  ////////////////(6) message displayConfirmation
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
