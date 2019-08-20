# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
RecipeIngredient.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('recipes')
ActiveRecord::Base.connection.reset_pk_sequence!('ingredients')
ActiveRecord::Base.connection.reset_pk_sequence!('recipe_ingredients')

#Creates Users
User.create(name: 'Rashad')
User.create(name: 'Amrit')
User.create(name: 'Cindy')
#Creates Recipes
Recipe.create(name: "Buffalo Chicken Pizza",image:"https://assets.bonappetit.com/photos/5a95890bfc24be1b59dc3c07/1:1/w_1536,h_1536,c_limit/0318-Go-Live-Buffalo-Chicken-Pizza.jpg",directions: "Place a rack in upper third of oven.
  Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go).
  Place pizza dough in a large bowl, pour a little oil over, and turn to coat.
  Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.")

Recipe.create(name: "Buffalo Chicken Wrap",image:"https://images.media-allrecipes.com/userphotos/300x300/3321902.jpg",directions: "Heat the vegetable oil and butter in a large skillet over medium-high heat.
   Place the chicken in the pan; cook and stir until the chicken is no longer pink in the center and the juices run clear, about 10 minutes.
   Remove the pan from the heat.
   Pour the hot sauce over the cooked chicken and toss to coat.
   Step 2
   Lay out the flour tortillas and divide the chicken evenly among the tortillas.
   Top the chicken with lettuce, celery, and blue cheese dressing.
  Fold in the sides of the tortilla and roll the wrap burrito-style.")
Ingredient.create(name: "Cheese")
Ingredient.create(name: "Chicken")

RecipeIngredient.create(recipe_id: 1, ingredient_id: 1)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 2)
RecipeIngredient.create(recipe_id: 2, ingredient_id: 1)
