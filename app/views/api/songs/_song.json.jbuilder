json.extract!(
  song,
  :id ,:title, :description, :url, :user_id, :img_url
)
json.user user
json.likeCount song.likers.length
json.current_user_likes song.likers.include?(current_user)
