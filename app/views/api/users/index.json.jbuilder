json.array!(@users) do |user|
  json.partial!('user', user: user)
  json.following_count user.followers.count
  json.uploaded_songs user.uploaded_songs do |song|
    json.partial!('api/songs/song', song: song)
    json.like_count song.likers.length
  end

end
