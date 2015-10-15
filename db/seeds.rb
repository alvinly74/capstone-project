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

song01 = Song.create!({title: "Superman", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866573/Goldfinger_-_Superman_kipjht.mp3", description: "As seen in Tony Hawk's Pro Skater", user_id: 1})
song02 = Song.create!({title: "The Clear Blue Sky", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866572/Tsukasa_-_The_Clear_Blue_Sky_qimswl.mp3", description: "From DJ Max, a Korean Rhythm game", user_id: 2})
song03 = Song.create!({title: "I'm Not Gonna Teach Your Boyfriend How to Dance", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866572/Black_Kids_-_I_m_Not_Gonna_Teach_Your_Boyfriend_How_To_Dance_Twelves_Remix_ypyjuv.mp3", description: "He's got two left feet and he bites my moves", user_id: 3})
song04 = Song.create!({title: "Please Take Me Home", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866571/-_13_Please_Take_Me_Home.mp3_vcxdeb.mp3", description: "Nostalgic Blink 182", user_id: 2})
song05 = Song.create!({title: "Flea", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866567/CLAZZIQUAI_-_Flea_x3gjzx.mp3", description: "Clazziquai, not so traditional Kpop", user_id: 1})
song06 = Song.create!({title: "Amazing", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866565/Mystery_Skulls_-_Amazing_esiq9s.mp3", description: "I'm barely breathing", user_id: 3})
song07 = Song.create!({title: "The Rock Show", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866563/Blink-182_-_The_Rock_Show_n1sdsa.mp3", description: "CAUSE I FELL IN LOVE WITH THE GIRL AT THE ROCK SHOW", user_id: 3})
song08 = Song.create!({title: "Feeling This", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866557/Blink-182_-_Feeling_This_unzdaf.mp3", description: "Got a regret right now", user_id: 1})
song09 = Song.create!({title: "Hurricane Jane", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866553/Black_Kids_-_Hurricane_Jane_sue7zz.mp3", description: "I took something and it feels like Karate", user_id: 3})
song10 = Song.create!({title: "We are the People", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866548/Empire_Of_The_Sun_-_We_Are_The_People_sthlyx.mp3", description: "That rule the world", user_id: 3})
song11 = Song.create!({title: "Hit the Heartbrakes", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866547/Black_Kids_-_Hit_The_Heartbrakes_dcnbxo.mp3", description: "", user_id: 3})
song12 = Song.create!({title: "Dammit", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866545/Blink_182_-_Dammit_plcyrg.mp3", description: "Blink182 in their prime", user_id: 3})
song13 = Song.create!({title: "Xeus", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866541/XeoN_-_Xeus_Extended_Ver._kwl5uo.mp3", description: "it's like Zeus, except intended", user_id: 3})
song14 = Song.create!({title: "Prom Night", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866525/Anamanaguchi_-_Prom_Night_rew09o.mp3", description: "Chiptunes!!", user_id: 3})
song15 = Song.create!({title: "Wonderful", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444867749/Nine_Days_-_Wonderful_gry8op.mp3", description: "Brought to you by the guys who sing 'This is the story of a girl'", user_id: 3})



song_like1 = SongLike.create!({song_id: 1, user_id:2})
song_like2 = SongLike.create!({song_id: 2, user_id:3})
song_like3 = SongLike.create!({song_id: 3, user_id:1})

user_follow1 = UserFollow.create!({follower_id: 1, followee_id: 2})
user_follow2 = UserFollow.create!({follower_id: 2, followee_id: 3})
user_follow3 = UserFollow.create!({follower_id: 3, followee_id: 1})
user_follow4 = UserFollow.create!({follower_id: 1, followee_id: 3})
user_follow5 = UserFollow.create!({follower_id: 2, followee_id: 4})
user_follow6 = UserFollow.create!({follower_id: 3, followee_id: 4})
