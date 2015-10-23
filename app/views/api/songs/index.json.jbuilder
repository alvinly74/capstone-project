json.array!(@songs) do |song|
  p "song"
  p song.user
  p "end song start song id"
  p song.id
  p "end song id"
  json.partial!('song', song: song, user: song.user)
end
