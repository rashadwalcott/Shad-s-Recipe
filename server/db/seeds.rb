# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Recipe.destroy_all


ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('recipes')
ActiveRecord::Base.connection.reset_pk_sequence!('ingredients')
ActiveRecord::Base.connection.reset_pk_sequence!('recipe_ingredients')

#Creates Users
User.create(name: 'Rashad')
User.create(name: 'Amrit')
User.create(name: 'Cindy')
#Creates Recipes
Recipe.create(name: "Buffalo Chicken Pizza",likes: 0, ingredients: "Buffalo Sauce
  Chicken
  Cheese", image:"https://assets.bonappetit.com/photos/5a95890bfc24be1b59dc3c07/1:1/w_1536,h_1536,c_limit/0318-Go-Live-Buffalo-Chicken-Pizza.jpg",directions: "Place a rack in upper third of oven.
  Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go).
  Place pizza dough in a large bowl, pour a little oil over, and turn to coat.
  Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.")

Recipe.create(name: "Buffalo Chicken Wrap",likes: 0,ingredients: "Cheese,
   Buffalo Sauce",image: "https://images.media-allrecipes.com/userphotos/300x300/3321902.jpg",directions: "Heat the vegetable oil and butter in a large skillet over medium-high heat.
   Place the chicken in the pan; cook and stir until the chicken is no longer pink in the center and the juices run clear, about 10 minutes.
   Remove the pan from the heat.
   Pour the hot sauce over the cooked chicken and toss to coat.
   Step 2
   Lay out the flour tortillas and divide the chicken evenly among the tortillas.
   Top the chicken with lettuce, celery, and blue cheese dressing.
  Fold in the sides of the tortilla and roll the wrap burrito-style.")

  Recipe.create(name: "Raisin Rice", likes:0, ingredients: "2 cups rice
      1 cup raisins
      1/2 onion
      4 cloves garlic
      2 stems scallions
      1 stem celery
      2 stem fine thyme
      1/2 cup corn
      approx 3 sweet peppers different colours
      carrot
      chicken
      cube to taste
      paprika
      1/2 tsp. mustard
      2 tsp. margarine
      black pepper
      pepper to taste", image: "https://www.realniceguyana.com/wp-content/uploads/2019/06/Raisin-rice-recipe.jpg",directions: "1. Boil rice and let cool, you can prepare hours before
      2. chop and prepare all seasonings
      3. heat pan and add the margarine
      4. add onion, sweet peppers and carrots and fry for 2 mins
      5. add raisins, mustard and all the rest of seasonings, fry for a little bit, add salt to taste
      6. add rice and fry for a bit .
      7. make adjustments That's it, Enjoy!")

      Recipe.create(name: "Tamarind Ball",likes:0,ingredients: "1 1/2 cups sugar
        1 lb. ripe tamarind
        2 cloves garlic
        pepper to taste",image: "https://www.realniceguyana.com/wp-content/uploads/2019/06/TAMARIND-BALL1.jpg",
      directions:" 1. Grind garlic and pepper in a mortar
      2. add that and sugar to the tamarind
      3. mix together
      4. form into balls")

      Recipe.create(name:"Sijan Bhaji with Shrimp", likes:0,ingredients: "1/2 pound approx. Sijan leaves
        Shrimp
        4 cloves garlic
        3 stems scallions
        1/2 onion
        milk from 1/2 coconut or half of the box of cream
        pepper to taste
        salt to taste",directions:"1. prepare ingredients, crush garlic and pepper
        2. heat oil in pan, add shimp, a bit salt and black pepper and fry for about 30 sec.
        3. add scallions, onions and the garlic
        4. fry for approx. 2 mins.
        5. now it's time to add the bhaji
        6. add salt and black pepper to
        7. add coconot milk
        8. let boil, then add some water
        9. cook on low heat That's it, enjoy.")
