json.array!(@songs) do |song|
  json.partial!('song', song: song)
  json.username song.user.username
end
