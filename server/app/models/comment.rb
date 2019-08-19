class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :recipe, dependent: :destroy
end
