json.extract!(
  song,
  :id ,:title, :description, :url, :user_id, :img_url
)
json.likeCount song.likers.length
json.current_user_likes song.likers.include?(current_user)
json.user_name user.username
json.user_img user.img_url
json.current_user_follow user.followers.include?(current_user)
