class Comment < ApplicationRecord
  validates_presence_of :content, :recipe_id
  belongs_to :recipe
end
