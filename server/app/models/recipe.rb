class Recipe < ApplicationRecord
  validates_presence_of :name,:image,:ingredients,:directions,:likes
has_many :comments, dependent: :destroy
end
