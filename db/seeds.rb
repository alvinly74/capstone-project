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

song1 = Song.create!({title: "We Are The People", url: "Test URL we are the people", description: "We Are the People by Empire of the Sun", user_id: 1})
song2 = Song.create!({title: "DangerZone", url: "Test URL DANGERZONE", description: "DAAAAANGERZOOOOOOOONE", user_id: 2})
song3 = Song.create!({title: "Rolling in the Deep", url: "Test URLerino", description: "You could of had it aaaaaalllllll", user_id: 3})
