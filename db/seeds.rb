# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create!({username: "GuestUser",password_digest: "$2a$10$FGnEORVV0Z2HM0fgKz/1eOCRasTRCDX46yNmk2SFz76PKc2TdRLzO", session_token: "fn1AfGxA3NqDwYIdv2L4Vg"})
user2 = User.create!({username: "SterlingArcher",password_digest: "$2a$10$FGnEORVV0Z2HM0fgKz/1eOCRasTRCDX46yNmk2SFz76PKc2TdRLzO", session_token: "fn1AfGxA3NL4Vg"})
user3 = User.create!({username: "LanaKane",password_digest: "$2a$10$FGnEORVV0Z2HM0fgKz/1eOCRasTRCDX46yNmk2SFz76PKc2TdRLzO", session_token: "f1xqDwYIdv2L4Vg"})
user4 = User.create!({username: "asdf",password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})

song1 = Song.create!({title: "We Are The People", url: "Test URL we the people", description: "We Are the People by Empire of the Sun", user_id: 1})
song2 = Song.create!({title: "DangerZone", url: "Test URL DANGERZONE", description: "DAAAAANGERZOOOOOOOONE", user_id: 2})
song3 = Song.create!({title: "Rolling in the Deep", url: "Test URLerino", description: "You could of had it aaaaaalll", user_id: 3})
song4 = Song.create!({title: "Absolutely(When She Smiles)", url: "tempo URLerino", description: "THIS IS THE STORY", user_id: 2})
song5 = Song.create!({title: "Space Aged Love Song", url: "TestURL eo", description: "I SAW YOUR EYES", user_id: 1})
song6 = Song.create!({title: "Up All Night", url: "Test URLe  rino", description: "MEXICAN MONKEY", user_id: 3})
song7 = Song.create!({title: "To Get Lucky", url: "Test ULe rino", description: "qwerty", user_id: 3})
song8 = Song.create!({title: "Superman", url: "Te st URLino", description: "SO HERE I AM", user_id: 1})
song9 = Song.create!({title: "Amazing", url: "Tt URLer  no", description: "I'm barely breathing", user_id: 3})


song_like1 = SongLike.create!({song_id: 1, user_id:2})
song_like2 = SongLike.create!({song_id: 2, user_id:3})
song_like3 = SongLike.create!({song_id: 3, user_id:1})

user_follow1 = UserFollow.create!({follower_id: 1, followee_id: 2})
user_follow2 = UserFollow.create!({follower_id: 2, followee_id: 3})
user_follow3 = UserFollow.create!({follower_id: 3, followee_id: 1})
user_follow4 = UserFollow.create!({follower_id: 1, followee_id: 3})
user_follow5 = UserFollow.create!({follower_id: 2, followee_id: 4})
user_follow6 = UserFollow.create!({follower_id: 3, followee_id: 4})
