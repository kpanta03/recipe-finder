import pancake from "../Assets/images/pancake.png";
import panipuri from "../Assets/images/panipuri.png";
// import page31 from "../Assets/images/page31.png";
// import page32 from "../Assets/images/page32.png";

const recipes = [
  {
    title: "Pancake",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking Powder"],
    time: "30 minutes",
    mealType: "Breakfast",
    image: pancake,
    sideImage:"https://www.freepngdesign.com/content/uploads/images/parsley-3477.png",
    favourites:30,
  },
  {
    title: "Panipuri",
    ingredients: ["Flour", "Tamarind", "Spices", "Water"],
    time: "20 minutes",
    mealType: "Snack",
    image: panipuri,
    sideImage: "https://static.vecteezy.com/system/resources/previews/009/827/032/large_2x/green-coriander-on-transparent-background-free-png.png",
    favourites: 25,
  },
  {
    title: "Pizza",
    ingredients: ["Flour", "Cheese", "Tomato Sauce", "Toppings"],
    time: "1 hour",
    mealType: "Dinner",
    image: "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-modern-traditional-food-sasami-pizza-3d-model-png-image_6651528.png",
    sideImage:"https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-coriander-leaf-isolated-on-white-background-life-png-image_10954596.png",
    favourites:10,
  },
  {
    title: "Burger",
    ingredients: ["Bread", "Beef Patty", "Lettuce", "Cheese", "Condiments"],
    time: "25 minutes",
    mealType: "Lunch",
    image: "https://static.vecteezy.com/system/resources/previews/032/508/308/original/a-tempting-burger-on-a-plate-isolated-on-a-transparent-background-fresh-tasty-and-appetizing-with-delicious-layers-ai-generative-free-png.png",
    sideImage: "https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-coriander-leaf-isolated-on-white-background-life-png-image_10954596.png",
    favourites:5,
  },
  {
    title: "Chicken Biryani",
    ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
    time: "1.5 hours",
    mealType: "Dinner",
    image: "https://static.vecteezy.com/system/resources/previews/027/144/543/original/delicious-chicken-biryani-isolated-on-transparent-background-png.png",
    sideImage:"https://static.vecteezy.com/system/resources/previews/009/827/032/large_2x/green-coriander-on-transparent-background-free-png.png",
    favourites: 30,
  },
  {
    title: "Salad",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olive Oil", "Vinegar"],
    time: "15 minutes",
    mealType: "Lunch",
    image: "https://freepngdesign.com/content/uploads/images/salad-4879.png",
    sideImage: "https://static.vecteezy.com/system/resources/previews/009/827/032/non_2x/green-coriander-on-transparent-background-free-png.png",
    favourites:3,
  },
  {
    title: "Pasta",
    ingredients: ["Pasta", "Tomato Sauce", "Garlic", "Olive Oil", "Herbs"],
    time: "30 minutes",
    mealType: "Lunch",
    image: "https://static.vecteezy.com/system/resources/previews/021/344/437/original/pasta-isolated-on-a-transparent-background-png.png",
    sideImage:"https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-coriander-leaf-isolated-on-white-background-life-png-image_10954596.png",
    favourites:5,
  },
];

export default recipes;
