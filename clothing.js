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

function generateProductElements() {                                                 //Creating a bunch of "product cards"
  const productContainer = document.querySelector("section ul");                     //(1) Looking for a specific place to put the cards (section/ul)
  products.forEach((product) => {                                                    //(2) Going through each product in the list of products
  const productElement = document.createElement("li");                               //# Creating a new list item (li), like making an empty card     //# then Filling the product card
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
    productContainer.appendChild(productElement);                                            //# Adding the card list(child) to the container(parent)
  });
}

// Call the function to generate product elements when the DOM is fully loaded(meaning: wait until the page is ready before doing something)
document.addEventListener("DOMContentLoaded", generateProductElements);
