// api paths


//grocery product search
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0&query=snickers"

// UPC search 
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/upc/041631000564"

// recipe by ingredient
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar"

// recipe scrape
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract?url=http%3A%2F%2Fwww.melskitchencafe.com%2Fthe-best-fudgy-brownies%2F"


//get nutrition by dish
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/guessNutrition?title=Spaghetti+Aglio+et+Olio"

// search ingredient sub
"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/1001/substitutes"

// Performs label detection on the image file
// client
//   .labelDetection('./resources/wakeupcat.jpg')
//   .then(results => {
//     const labels = results[0].labelAnnotations;

//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });