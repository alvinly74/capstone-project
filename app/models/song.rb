class Song < ActiveRecord::Base
  validates :title, :url, :description, :user_id, presence: true
  validates :url, uniqueness: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.likedSongs

  end
end
