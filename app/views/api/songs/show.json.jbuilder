json.extract!(
  @song,
  :id ,:title, :description, :url, :user_id, :img_url
)
json.user @song.user
