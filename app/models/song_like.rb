class SongLike < ActiveRecord::Base
  validates :song_id, :user_id, presence: true
  validates :song_id, uniqueness: { scope: :user_id }
  belongs_to(
    :liker,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
   :song,
   class_name: "Song",
   foreign_key: :song_id,
   primary_key: :id
  )

end
