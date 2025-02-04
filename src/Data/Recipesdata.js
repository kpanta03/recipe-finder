import pancake from "../Assets/images/pancake.png";
import panipuri from "../Assets/images/panipuri.png";
import video from "../Assets/images/video.mp4";

const recipes = [
  {
    id:1,
    title: "Pancake",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking Powder"],
    time: "30 minutes",
    mealType: "Breakfast",
    image: pancake,
    sideImage:"https://www.freepngdesign.com/content/uploads/images/parsley-3477.png",
    favourites:30,
    steps: [
      "In a large mixing bowl, whisk together flour, sugar, and baking powder.",
      "In another bowl, beat the eggs and mix them with milk.",
      "Slowly pour the wet ingredients into the dry ingredients and mix until smooth.",
      "Heat a pan over medium heat and lightly grease it with butter.",
      "Pour a ladle of batter onto the pan and cook until bubbles form.",
      "Flip the pancake and cook the other side until golden brown.",
      "Serve warm with syrup, fruits, or honey."
    ],
    video:video,
  },
  {
    id:2,
    title: "Panipuri",
    ingredients: ["Flour", "Tamarind", "Spices", "Water"],
    time: "20 minutes",
    mealType: "Snack",
    image: panipuri,
    sideImage: "https://static.vecteezy.com/system/resources/previews/009/827/032/large_2x/green-coriander-on-transparent-background-free-png.png",
    favourites: 25,
    steps: [
      "Mix flour and water to form a stiff dough, then roll into small circles.",
      "Deep fry the circles until crispy and puffed.",
      "Prepare tamarind water by soaking tamarind and mixing it with spices.",
      "Make a hole in the fried puris and fill with boiled potatoes and chickpeas.",
      "Pour tamarind water into each puri and enjoy immediately."
    ],
    video:video,
  },
  {
    id:3,
    title: "Pizza",
    ingredients: ["Flour", "Cheese", "Tomato Sauce", "Toppings"],
    time: "1 hour",
    mealType: "Dinner",
    image: "https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-modern-traditional-food-sasami-pizza-3d-model-png-image_6651528.png",
    sideImage:"https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-coriander-leaf-isolated-on-white-background-life-png-image_10954596.png",
    favourites:10,
    steps: [
      "In a bowl, mix flour, yeast, salt, and water to form a soft dough.",
      "Knead the dough and let it rest for 30 minutes until doubled in size.",
      "Roll out the dough into a thin circle and place on a baking tray.",
      "Spread tomato sauce evenly over the surface.",
      "Top with cheese and desired toppings like vegetables or meat.",
      "Bake in a preheated oven at 220°C for 15-20 minutes until golden brown.",
      "Slice and serve hot."
    ],
    video:video,
  },
  {
    id:4,
    title: "Burger",
    ingredients: ["Bread", "Beef Patty", "Lettuce", "Cheese", "Condiments"],
    time: "25 minutes",
    mealType: "Lunch",
    image: "https://static.vecteezy.com/system/resources/previews/032/508/308/original/a-tempting-burger-on-a-plate-isolated-on-a-transparent-background-fresh-tasty-and-appetizing-with-delicious-layers-ai-generative-free-png.png",
    sideImage: "https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-coriander-leaf-isolated-on-white-background-life-png-image_10954596.png",
    favourites:5,
    steps: [
      "Season the beef patty with salt and pepper.",
      "Grill or fry the patty until fully cooked.",
      "Toast the burger buns lightly.",
      "Assemble the burger by placing lettuce, cheese, and condiments on the bun.",
      "Place the cooked patty on top and cover with the top bun.",
      "Serve hot with fries or a side salad."
    ],
    video:video,
  },
  {
    id:5,
    title: "Chicken Biryani",
    ingredients: ["Rice", "Chicken", "Spices", "Yogurt", "Onions"],
    time: "1.5 hours",
    mealType: "Dinner",
    image: "https://static.vecteezy.com/system/resources/previews/027/144/543/original/delicious-chicken-biryani-isolated-on-transparent-background-png.png",
    sideImage:"https://static.vecteezy.com/system/resources/previews/009/827/032/large_2x/green-coriander-on-transparent-background-free-png.png",
    favourites: 30,
    steps: [
      "Marinate chicken with yogurt and spices for at least 30 minutes.",
      "Fry onions until golden brown and set aside.",
      "Cook rice separately until 70% done.",
      "In a pot, layer the marinated chicken and rice, adding fried onions and herbs.",
      "Cover and cook on low heat for 30 minutes.",
      "Serve hot with raita and salad."
    ],
    video:video,
  },
  {
    id:6,
    title: "Salad",
    ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olive Oil", "Vinegar"],
    time: "15 minutes",
    mealType: "Lunch",
    image: "https://freepngdesign.com/content/uploads/images/salad-4879.png",
    sideImage: "https://static.vecteezy.com/system/resources/previews/009/827/032/non_2x/green-coriander-on-transparent-background-free-png.png",
    favourites:3,
    steps: [
      "Chop lettuce, tomatoes, and cucumber into bite-sized pieces.",
      "In a bowl, mix olive oil, vinegar, salt, and pepper.",
      "Toss the vegetables with the dressing.",
      "Serve fresh with a sprinkle of herbs."
    ],
    video:video,
  },
  

  {
    id:7,
    title: "Pasta",
    ingredients: ["Pasta", "Tomato Sauce", "Garlic", "Olive Oil", "Herbs"],
    time: "30 minutes",
    mealType: "Lunch",
    image: "https://static.vecteezy.com/system/resources/previews/021/344/437/original/pasta-isolated-on-a-transparent-background-png.png",
    sideImage:"https://png.pngtree.com/png-vector/20231229/ourmid/pngtree-coriander-leaf-isolated-on-white-background-life-png-image_10954596.png",
    favourites:5,
    steps: [
      "Boil water in a large pot and add a pinch of salt.",
      "Add pasta to the boiling water and cook according to package instructions.",
      "Drain the pasta and set it aside.",
      "In a pan, heat olive oil over medium heat and sauté minced garlic until fragrant.",
      "Pour in tomato sauce and stir well, seasoning with salt, pepper, and herbs.",
      "Simmer the sauce for a few minutes, then add the cooked pasta.",
      "Toss everything together and cook for another 2 minutes to blend the flavors.",
      "Serve hot, garnished with grated cheese and fresh basil.",
    ],
    video:video,
  },
];

export default recipes;
