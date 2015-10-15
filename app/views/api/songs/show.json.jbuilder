json.extract!(
  @song,
  :id ,:title, :description, :url, :user_id
)
json.user @song.user
