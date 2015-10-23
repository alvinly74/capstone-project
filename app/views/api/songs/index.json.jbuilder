json.array!(@songs) do |song|
  json.partial!('song', song: song, user: song.user)
end
