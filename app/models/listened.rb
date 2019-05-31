class Listened < ApplicationRecord
  belongs_to :user
  belongs_to :song, dependent: :destroy
end
