json.extract!(
  user,
  :id, :username, :img_url
)
json.following_count user.followers.length
json.current_user_follow user.followers.include?(current_user)
json.uploaded_songs user.uploaded_songs do |song|
  json.partial!('api/songs/song', song: song)
  json.like_count song.likers.length
end
