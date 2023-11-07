/**
 * DONE: Create the express server to work with Database.
 * DONE: Add MongoDB and save user data on the database.
 * DONE: Add functionality to the register page.
 * DONE: Add functionality to the Login page => manual and google login.
 * 
 * DONE: Add dropdown on the profilePic -> My Added Food Item, Add a food item, My Ordered food item.
 * DONE: Design and create "Add a food item" page first.
 * DONE: When saving the food item on database, make sure to pass email address of the user who added it.
 *       This is to prevent the user from purchasing his own product
 * 
 * DONE: Work on "My Added Food Item" page next. Design and show items from the database.
 * DONE: Work on the Update Page. --Redirect the user to the Food details page--
 * DONE: Add the Update Functionality
 *  
 * @TODO Next, Work on "ALL FOOD PAGE", 
 *              - first show all cards = DONE
 *              -then do search functionailty = DONE 
 *              -then pagination.
 * 
 * DONE Next, Work on "FOOD DETAILS PAGE",
 * DONE Next, Work on "FOOD PURCHASE PAGE",
 * 
 * 
 * DONE Next, Work on MyORDER page, show the food items when user purchasesd/ordered it.
 * DONE Work on HomePage. SHow the six cards. Sort them based on their order(dishOrdered) from high to low, then display the first six.
 * 
 * @TODO Home Page: Extra Two section
 * @TODO Footer section
 * @TODO BLOG Page
 * @TODO JWT.
 * @TODO Pagination.
 */


/**
 * Profile Pic: https://i.ibb.co/sm7GPJr/photo-1582233479366-6d38bc390a08-auto-format-fit-crop-q-80-w-1783-ixlib-rb-4-0.jpg
 * 
 * AddFoodItemPage: https://i.ibb.co/rty90bC/spices-for-use-as-cooking-ingredients-on-a-wooden-background-with-fresh-vegetables-healthy-food-herb.jpg
 * Form background: https://i.ibb.co/RgWdmhJ/pexels-photo-326333.jpg
 */


/**
 * Pasta: https://i.ibb.co/x61NnW2/one-skillet-cheesy-ground-chicken-pasta-571ba976c8934b75bd995a0c0d292af9.jpg
 * Main Course: https://i.ibb.co/n3tRSng/depositphotos-98232150-stock-photo-pan-fried-salmon-with-tender.webp
 * Sea Food: https://i.ibb.co/8Bg3pQx/shutterstock-1773695441-min.jpg
 * 
 * ###Appetizers##
 * -Spring roll: https://i.ibb.co/R6ZVxHy/Vegetable-Spring-Rolls-2-1.jpg
 * -Bruschetta: https://i.ibb.co/y0rDRkj/Bruschetta-with-Prosciutto-EXPS-TOHCA22-137592-E12-07-4b.jpg
 * -Mozzarella Sticks: https://i.ibb.co/52FHtC6/23596-fried-mozzarella-cheese-sticks-DDMFS-4x3-842a0eaebf6b435a8d3a8b04325e13eb.jpg
 * 
 * 
 * ###Main Coursed###
 * -Grilled Chicken Breast:https://i.ibb.co/NZXKBkp/grilled-chicken-horizontal-1532030541.jpg
 * -Pasta Carbonara: https://i.ibb.co/68F7MGJ/carbonara-horizontal-three-By-Two-Medium-At2-X-v2.jpg
 * -Vegetable Curry:https://i.ibb.co/NY4VKPC/indian-style-vegetable-curry-59371-1.jpg
 * 
 * ###Seafood###
 * -Grilled Salmon: https://i.ibb.co/8Bg3pQx/shutterstock-1773695441-min.jpg
 * 
 * -Shrimp Scampi: https://i.ibb.co/VQD7gJV/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg
 * -Fish Tacos: https://i.ibb.co/mhGhPzZ/221936-Quick-Fish-Tacos-DDMFS-4x3-2604-d5fa7affcf404ed7b25888a16933aa99.jpg
 * 
 * ###Beverages###
 * - Mango Tango Smoothie: https://i.ibb.co/Z6zPs8r/Mango-Tango-Cocktail.jpg
 * -Espresso Macchiato: https://i.ibb.co/QdpKjDB/85153452-56a176765f9b58b7d0bf84dd.jpg
 * -Berry Blast Mocktail :https://i.ibb.co/4Y5DwmY/Summer-Berry-Mocktail-1600x852.jpg
 * 
 * ###Desserts###
 * -Chocolate Lava Cake: https://i.ibb.co/9hfXD1g/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg
 * -Tiramisu: https://i.ibb.co/VN2ZyDN/05-COOKING-TIRAMISU1-three-By-Two-Medium-At2-X-v2.jpg
 * -Fruit Parfait: https://i.ibb.co/nsGvPfd/k-Photo-Recipes-2022-01-Yogurt-Parfait-2022-01-05-ATK-0852.jpg
 * 
 * ###Salad and soup###
 * -Caesar Salad: https://i.ibb.co/4m49ttL/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg
 * -Tomato Basil Soup: https://i.ibb.co/kSCxhg6/hd-aspect-1446063831-weeknight-din-tomato-soup.jpg
 * -Greek Salad: https://i.ibb.co/yq5n8xd/06-greek-salad-soup-salad.jpg
 */