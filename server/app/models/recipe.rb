class Recipe < ApplicationRecord
  has_many :users
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients, dependent: :destroy
end
