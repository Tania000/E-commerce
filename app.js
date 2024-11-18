// Define Products
const products = [
  {
    id: 1,
    name: "Woolen Overcoat",
    description:
      "A sleek, warm woolen overcoat for cold winter days.Available in black, gray, and navy blue.",
    image: "Images/New-Arrivals/n1.png",
  },
  {
    id: 2,
    name: "Thermal Knit Sweater",
    description:
      "A cozy thermal sweater made from high-quality wool. Keeps you warm during chilly weather.",
    image: "Images/New-Arrivals/n2.png",
  },
  {
    id: 3,
    name: "Puffer Jacket",
    description:
      "Lightweight, water-resistant puffer jacket with a hood. Perfect for winter activities.",
    image: "Images/New-Arrivals/n3.png",
  },
  {
    id: 4,
    name: "Winter Boots",
    description:
      "Durable winter boots with fleece lining and waterproof exterior. Ideal for snowy conditions.",
    image: "Images/New-Arrivals/n4.png",
  },
  {
    id: 5,
    name: "Smartphone (Latest Model)",
    description:
      "The latest smartphone with a 6.7-inch OLED display, 128GB storage, and 5G connectivity.",
    image: "Images/New-Arrivals/n5.png",
  },
  {
    id: 6,
    name: "Noise-Canceling Headphones",
    description:
      "Wireless noise-canceling headphones with 30 hours of battery life. Includes fast charging.",
    image: "Images/New-Arrivals/n6.png",
  },
  {
    id: 7,
    name: "Smartwatch",
    description:
      "A waterproof smartwatch with fitness tracking, GPS, heart rate monitoring, and notification alerts.",
    image: "Images/New-Arrivals/n7.png",
  },
  {
    id: 8,
    name: "4K Ultra HD TV (55-inch)",
    description:
      "A 55-inch 4K Ultra HD smart TV with HDR support and built-in streaming services.",
    image: "Images/New-Arrivals/n8.png",
  },
];

// Function to generate product elements and inject them into the DOM
function generateProductElements() {
  const productContainer = document.querySelector("section ul");

  // Clear the product container to avoid duplicates
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("li");

    productElement.innerHTML = `
      <div class="new-pro-card">
        <div class="image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <button class="product--details" data-name="${product.name}" data-description="${product.description}" data-image="${product.image}">Quick View</button>
      </div>
    `;

    productContainer.appendChild(productElement);
  });

  // (1) Add event listeners to "Quick View" buttons (Show a Popup)
  const quickViewButtons = document.querySelectorAll(".product--details");
  quickViewButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });
}

// (2) Function to open the modal and display the product details
// 2#
function openModal(event) {
  //tells us which button was clicked
  const button = event.target;
  //Grab the information stored in that button
  const productName = button.getAttribute("data-name");
  const productDescription = button.getAttribute("data-description");
  const productImage = button.getAttribute("data-image");

  // 2## Set the modal content based on the product details
  document.getElementById("modalProductImage").src = productImage;
  document.getElementById("modalProductDescription").innerText =
    productDescription;

  // 2### Show the modal
  const modal = document.getElementById("productModal");
  modal.style.display = "block";
}

// (3) Function to close the modal
function closeModal() {
  const modal = document.getElementById("productModal");
  modal.style.display = "none";
}

// Event listener for closing the modal when the 'x' is clicked
document.querySelector(".modal .close").addEventListener("click", closeModal);

// Call the function to generate product elements when the DOM is fully loaded(meaning: wait until the page is ready before doing something)
document.addEventListener("DOMContentLoaded", generateProductElements);
