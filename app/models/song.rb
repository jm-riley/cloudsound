# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Song < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :comments

  def username
    self.user.username
  end

  has_one_attached :song_file
  has_one_attached :song_photo
  has_many :listeneds, dependent: :destroy
end
