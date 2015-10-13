class Song < ActiveRecord::Base
  validates :title, :url, :description, :user_id, presence: true
  validates :url, uniqueness: true



  def self.likedSongs

  end
end
