
import { CuisineCategory, MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Tuna Salad",
    description: "Delight in our fresh Tuna Salad, featuring chunks of premium tuna mixed with crisp romaine lettuce, cherry tomatoes, cucumber, red onion, and Kalamata olives.",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "salads",
    cuisine: "american",
    rating: 4.5,
    reviews: 24,
    popular: true
  },
  {
    id: "2",
    name: "Sea Salad",
    description: "A healthy and satisfying option, our Quinoa Avocado Salad includes a blend of quinoa, diced avocado, cherry tomatoes, cucumber, red onion, and mixed greens.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    category: "salads",
    cuisine: "american",
    rating: 4.2,
    reviews: 18
  },
  {
    id: "3",
    name: "Grilled Caesar Salad",
    description: "Enjoy a twist on a classic with our Grilled Caesar Salad. Crisp romaine hearts lightly charred on the grill, topped with shaved Parmesan, crunchy croutons.",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74",
    category: "salads",
    cuisine: "italian",
    rating: 4.7,
    reviews: 32,
    popular: true
  },
  {
    id: "4",
    name: "Salisbury Steak",
    description: "Juicy ground beef patties smothered in rich mushroom gravy, served with creamy mashed potatoes and seasonal vegetables.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    category: "main",
    cuisine: "western",
    rating: 4.3,
    reviews: 28
  },
  {
    id: "5",
    name: "English Breakfast",
    description: "Traditional English breakfast with eggs, bacon, sausage, baked beans, grilled tomatoes, and toast.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1533920379810-6bedac961c2a",
    category: "breakfast",
    cuisine: "western",
    rating: 4.8,
    reviews: 42,
    popular: true
  },
  {
    id: "6",
    name: "Buldak",
    description: "Spicy Korean chicken dish with a fiery sauce, topped with melted cheese and served with rice.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    category: "main",
    cuisine: "asian",
    rating: 4.5,
    reviews: 36
  },
  {
    id: "7",
    name: "Creamed Chipped Prawn",
    description: "Succulent prawns in a creamy sauce served over rice or pasta, garnished with fresh herbs.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    category: "main",
    cuisine: "seafood",
    rating: 4.6,
    reviews: 22
  },
  {
    id: "8",
    name: "Mexican Bean Salad",
    description: "Colorful mix of beans, corn, bell peppers, and onions tossed in a zesty lime dressing with fresh cilantro.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
    category: "salads",
    cuisine: "mexican",
    rating: 4.4,
    reviews: 19
  },
  {
    id: "9",
    name: "Scrambled Eggs",
    description: "Fluffy scrambled eggs cooked to perfection, seasoned with salt and pepper, and garnished with fresh herbs.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    category: "breakfast",
    cuisine: "american",
    rating: 4.2,
    reviews: 24
  },
  {
    id: "10",
    name: "Spaghetti Aglio",
    description: "Simple yet flavorful pasta dish with garlic, olive oil, and chili flakes, topped with parmesan cheese.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    category: "pasta",
    cuisine: "italian",
    rating: 4.5,
    reviews: 31,
    discount: 15
  },
  {
    id: "11",
    name: "Grilled Fish & Chips",
    description: "Healthier take on a classic - grilled fish served with crispy oven-baked potato wedges and tartar sauce.",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1518964063-10d3cf874c7b",
    category: "main",
    cuisine: "seafood",
    rating: 4.6,
    reviews: 27
  },
  {
    id: "12",
    name: "Galouti Kebab",
    description: "Melt-in-your-mouth minced meat kebabs seasoned with aromatic spices, served with mint chutney and onion rings.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
    category: "appetizer",
    cuisine: "indian",
    rating: 4.8,
    reviews: 34,
    popular: true
  },
];

export const cuisines: CuisineCategory[] = [
  {
    id: "indian",
    name: "Indian Cuisine",
    description: "Aromatic spices and rich flavors from the Indian subcontinent.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356cf4",
    dishes: ["12"]
  },
  {
    id: "italian",
    name: "Italian Cuisine",
    description: "Classic Mediterranean flavors with pasta, pizzas and more.",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b",
    dishes: ["3", "10"]
  },
  {
    id: "american",
    name: "American Cuisine",
    description: "Hearty classics from across the United States.",
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7",
    dishes: ["1", "2", "9"]
  },
  {
    id: "asian",
    name: "Asian Cuisine",
    description: "Diverse flavors from East and Southeast Asia.",
    image: "https://images.unsplash.com/photo-1540648639573-8c848de23f0a",
    dishes: ["6"]
  },
  {
    id: "western",
    name: "Western Cuisine",
    description: "European classics with modern twists.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    dishes: ["4", "5"]
  },
  {
    id: "seafood",
    name: "Seafood Specialties",
    description: "Fresh catches prepared with culinary expertise.",
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86",
    dishes: ["7", "11"]
  }
];
