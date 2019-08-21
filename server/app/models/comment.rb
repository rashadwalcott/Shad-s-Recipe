class Comment < ApplicationRecord
  belongs_to :recipe, dependent: :destroy
end
