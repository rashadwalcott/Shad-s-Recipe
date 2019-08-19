class User < ApplicationRecord
  has_many :recipes
  has_many :comments, dependent: :destroy
end
