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
    price: "€1,499.99",
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
    price: "$34.99",
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
  }
];

// Function to generate product elements
function generateProductElements() {
  const productContainer = document.querySelector("section ul");            
  products.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.innerHTML = `
   <div class="pro-card">
                    <div class="image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="des">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <div class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <p class="price">${product.price}</p>
                        </div>
                    </div>
                    <a href="#" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
                </div>
    `;
    productContainer.appendChild(productElement);
  });
}

// Call the function to generate product elements when the DOM is fully loaded(meaning: wait until the page is ready before doing something)
document.addEventListener("DOMContentLoaded", generateProductElements);