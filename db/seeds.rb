# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user01 = User.create!({username: "GuestUser", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "fn1AfGxA3NqDwYIdv2L4Vg"})
user02 = User.create!({username: "SterlingArcher", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221608/SterlingArcher_bvdqp7.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "fn1AfGxA3NL4Vg"})
user03 = User.create!({username: "LanaKane", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221609/Lana_Kane_h6eyqt.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "f1xqDwYIdv2L4Vg"})
user04 = User.create!({username: "PamPoovey", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445290301/PamPoovey_z51vzf.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
user05 = User.create!({username: "CherylTunt", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221608/CherylTunt_tkagpw.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
user06 = User.create!({username: "CyrilFiggis", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221608/Cyril_Figgus_mvfv9o.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
user07 = User.create!({username: "MaloryArcher", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221610/MaloryArcher_sdtj4p.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
user08 = User.create!({username: "RayGilette", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221608/RayGilette_oigsba.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
user09 = User.create!({username: "DoctorKrieger", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221608/tumblr_nlhs72rLfk1r0opvmo1_500_bp7yak.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
user10 = User.create!({username: "Woodhouse", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445221610/WoodHouse_xzbfmq.jpg", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})

# user11 = User.create!({username: "Arnold", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user12 = User.create!({username: "GeraldJohanssen", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user13 = User.create!({username: "HelgaGPataki", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user14 = User.create!({username: "PhoebeHeyerdahl", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user15 = User.create!({username: "HaroldBerman", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user16 = User.create!({username: "StinkyPeterson", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user17 = User.create!({username: "Sid", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user18 = User.create!({username: "Rhonda", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user19 = User.create!({username: "Brainy", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user20 = User.create!({username: "EugeneHorowitz", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})
# user21 = User.create!({username: "Curly", img_url:"http://res.cloudinary.com/awwdiio/image/upload/c_scale,h_500,w_500/v1445221608/BarryDillon_x6it27.png", password_digest: "$2a$10$pEDp.XqVxnZXjUrKMXeupevUdizCptkIXIr39kKPCXKtjjVYXnFb6", session_token: "SDFSDFSDFSDFSDFW"})













song01 = Song.create!({title: "Superman", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/Superman_imfpdo.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866573/Goldfinger_-_Superman_kipjht.mp3", description: "As seen in Tony Hawk's Pro Skater", user_id: 1})
song02 = Song.create!({title: "The Clear Blue Sky", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/ClearBlue_Sky_mjspe6.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866572/Tsukasa_-_The_Clear_Blue_Sky_qimswl.mp3", description: "From DJ Max, a Korean Rhythm game", user_id: 2})
song03 = Song.create!({title: "I'm Not Gonna Teach Your Boyfriend", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/I_m_not_gonna_teach_him_how_to_dance_zvxxew.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866572/Black_Kids_-_I_m_Not_Gonna_Teach_Your_Boyfriend_How_To_Dance_Twelves_Remix_ypyjuv.mp3", description: "He's got two left feet and he bites my moves", user_id: 3})
song04 = Song.create!({title: "Please Take Me Home", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222869/blink_182_dqcujv.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866571/-_13_Please_Take_Me_Home.mp3_vcxdeb.mp3", description: "Nostalgic Blink 182", user_id: 4})
song05 = Song.create!({title: "Flea", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/ClearBlue_Sky_mjspe6.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866567/CLAZZIQUAI_-_Flea_x3gjzx.mp3", description: "Clazziquai, not so traditional Kpop", user_id: 5})
song06 = Song.create!({title: "Amazing", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/Mystery_Skulls_ewwtss.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866565/Mystery_Skulls_-_Amazing_esiq9s.mp3", description: "I'm barely breathing", user_id: 6})
song07 = Song.create!({title: "The Rock Show", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222869/blink_182_dqcujv.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866563/Blink-182_-_The_Rock_Show_n1sdsa.mp3", description: "CAUSE I FELL IN LOVE WITH THE GIRL AT THE ROCK SHOW", user_id: 7})
song08 = Song.create!({title: "Feeling This", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222869/blink_182_dqcujv.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866557/Blink-182_-_Feeling_This_unzdaf.mp3", description: "Got a regret right now", user_id: 8})
song09 = Song.create!({title: "Hurricane Jane", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/I_m_not_gonna_teach_him_how_to_dance_zvxxew.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866553/Black_Kids_-_Hurricane_Jane_sue7zz.mp3", description: "I took something and it feels like Karate", user_id: 9})
song10 = Song.create!({title: "We are the People", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/Empire_of_the_Sun_jm9pe5.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866548/Empire_Of_The_Sun_-_We_Are_The_People_sthlyx.mp3", description: "That rule the world", user_id: 10})
song11 = Song.create!({title: "Hit the Heartbrakes", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/I_m_not_gonna_teach_him_how_to_dance_zvxxew.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866547/Black_Kids_-_Hit_The_Heartbrakes_dcnbxo.mp3", description: "Hit the heartbrakes baby you drive me crazy!", user_id: 11})
song12 = Song.create!({title: "Dammit", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222869/blink_182_dqcujv.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866545/Blink_182_-_Dammit_plcyrg.mp3", description: "Blink182 in their prime", user_id: 1})
song13 = Song.create!({title: "Xeus", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/ClearBlue_Sky_mjspe6.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866541/XeoN_-_Xeus_Extended_Ver._kwl5uo.mp3", description: "it's like Zeus, except intended", user_id: 2})
song14 = Song.create!({title: "Prom Night", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/animaniguchi_lv1nsx.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444866525/Anamanaguchi_-_Prom_Night_rew09o.mp3", description: "Chiptunes!!", user_id: 3})
song15 = Song.create!({title: "Wonderful", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/Wonderful_Nine_Days_doydb7.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444867749/Nine_Days_-_Wonderful_gry8op.mp3", description: "Brought to you by the guys who sing 'This is the story of a girl'", user_id: 4})
song16 = Song.create!({title: "When I was Eighteen", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/Elyon_izqopq.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935274/WhiteRain_x_ElyonBeats_-_1._When_I_Was_Eighteen_Intro_.mp3_wxt2n1.mp3", description: "ElyonBeats, some indie dude you probably never heard of", user_id: 5})
song17 = Song.create!({title: "Cherokee", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/ClearBlue_Sky_mjspe6.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935280/xxdbxx_-_Cherokee_qxwkjm.mp3", description: "Yet another Korean Music game song.", user_id: 6})
song18 = Song.create!({title: "Prayers", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/Elyon_izqopq.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935272/NAK_x_Elyon_Beats_-_23_Prayers_Daniel_vkw13g.mp3", description: "ElyonBeats collaboration with NAK, some random dude on youtube", user_id: 7})
song19 = Song.create!({title: "Young Folks", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222870/peter_bjorn_and_John_u1fsn5.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935271/Peter_Bjorn_and_John_-_Young_Folks_avpt82.mp3", description: "WINNER WINNER CHICKEN DINNER", user_id: 8})
song20 = Song.create!({title: "Telecommunication", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/AFlockOfSeagulls_m6hlxz.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935246/A_Flock_Of_Seagulls_-_Telecommunication_lseqqy.mp3", description: "A Flock of Seagulls has more than just 'I Ran'", user_id: 9})
song21 = Song.create!({title: "Wienerschnitzel Coupon", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/Elyon_izqopq.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935257/Elyonbeats_-_wienerschnitzel_coupon.mp3_rprnih.mp3", description: "It's der-licious!", user_id: 10})
song22 = Song.create!({title: "WhiteBlue", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/ClearBlue_Sky_mjspe6.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935248/zts_-_WhiteBlue_iw6qag.mp3", description: "WHITEBLUE!!!", user_id: 11})
song23 = Song.create!({title: "Space Age Love Song", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/AFlockOfSeagulls_m6hlxz.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935252/A_Flock_Of_Seagulls_-_Space_Age_Love_Song_stzcy6.mp3", description: "a Flock of Seagulls, discovered through a cartoon series 'Symbionic Titan'", user_id: 1})
song24 = Song.create!({title: "I Ran", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/AFlockOfSeagulls_m6hlxz.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935290/A_Flock_Of_Seagulls_-_I_Ran_nlauqh.mp3", description: "One doesn't listen to a Flock of Seagulls without this classic", user_id: 2})
song25 = Song.create!({title: "Transfer Affection", img_url:"http://res.cloudinary.com/awwdiio/image/upload/v1445222868/AFlockOfSeagulls_m6hlxz.jpg", url: "http://res.cloudinary.com/awwdiio/video/upload/v1444935282/A_Flock_Of_Seagulls_-_Transfer_Affection_ucywkk.mp3", description: "Trying to Transfer my data", user_id: 3})
song26 = Song.create!({title: "Archer Theme Song", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445290907/Archer_-_FX_fbkz46.mp3", description: "Trying to Transfer my data", user_id: 1})

song27 = Song.create!({title: "NY Rush", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444123/15_NY_Rush_owvkrm.mp3", description: "Cowboy Bebop, an anime localized for western audiences in the 90s", user_id: 4})
song28 = Song.create!({title: "Tank!", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444208/02_Tank_TV_Edit_dhhymh.mp3", description: "Cowboy Bebop's opening theme song", user_id: 5})
song29 = Song.create!({title: "Say Hello(Explicit)", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444203/07_-_2_Mello_-_Say_Hello_to_the_Black_Omen_Jay-Z_vs._Chrono_Trigger_Mashup_kbhhpz.mp3", description: "from the album 'Chrono Jigga', a mashup album between Jay-Z and the video game Chrono Trigger", user_id: 6})
song30 = Song.create!({title: "Ignorant Scene", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444208/04_-_2_Mello_-_Ignorant_Scene_Jay-Z_vs._Chrono_Trigger_Mashup_jqjzil.mp3", description: "from the album 'Chrono Jigga', a mashup album between Jay-Z and the video game Chrono Trigger", user_id: 7})
song31 = Song.create!({title: "An Encore In Time", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444217/03_-_2_Mello_-_An_Encore_In_Time_Jay-Z_vs._Chrono_Trigger_Mashup_w49a3h.mp3", description: "from the album 'Chrono Jigga', a mashup album between Jay-Z and the video game Chrono Trigger", user_id: 8})
song32 = Song.create!({title: "Public Chrono Announcement", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444215/02_-_2_Mello_-_Public_Chrono_Announcement_Jay-Z_vs._Chrono_Trigger_Mashup_xrkitm.mp3", description: "from the album 'Chrono Jigga', a mashup album between Jay-Z and the video game Chrono Trigger", user_id: 9})
song33 = Song.create!({title: "Tengen Toppa Dairantou pt.1", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444473/02_OverClocked_Assembled_Super_Smash_Bros._series_-_Tengen_Toppa_Dairantou_-_Part_1_-_Game_Set_sn4atn.mp3", description: "OCRemix.com presents Tenga Toppa Dairantou part 1, a rap compilation of many of our users singing to Super Smash Bros. music.", user_id: 10})
song34 = Song.create!({title: "Pineapple Princess(Kinsey Moor Remix)", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444577/14._Pineapple_Princess_From_Hawaiiannette_Kinsey_Moore_Remix_bddfm7.mp3", description: "In 2014, Disney reached out to a bunch of electronic artists to create an EDM remix album of their music. this is Dconstructed", user_id: 11})
song35 = Song.create!({title: "Disco Zombi Italia", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444667/2.Carpenter_Brut_-_Disco_Zombi_Italia_igzcdl.mp3", description: "Carpenter Brut is like Justice, if Justice only made 'Stressed'", user_id: 1})
song36 = Song.create!({title: "Roller Mobster", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444796/1.Carpenter_Brut_-_Roller_Mobster_hrtfhs.mp3", description: "Carpenter Brut is at it again with another high intesity electronic hit!", user_id: 2})
song37 = Song.create!({title: "To the Top", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444948/ToTheTop_ykgepp.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 3})
song38 = Song.create!({title: "It's Safe Now", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444945/22_-_ItsSafeNow_t1d8yn.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 4})
song39 = Song.create!({title: "Inner Animal", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444959/21_-_InnerAnimal_parrfo.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 5})
song40 = Song.create!({title: "Electric Dreams", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444949/20_-_ElectricDreams_do5sqv.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 6})
song41 = Song.create!({title: "Daisuke", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444948/16_-_Daisuke_v4skdo.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 7})
song42 = Song.create!({title: "A New Morning", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444932/13_-_ANewMorning_smvmdk.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 8})
song43 = Song.create!({title: "Release", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444952/12_-_Release_tcwzkv.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 9})
song44 = Song.create!({title: "Perturbator", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444937/11_-_Perturbator_a8cpts.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 10})
song45 = Song.create!({title: "Musikk", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444917/10_-_Musikk2_ppcjta.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 11})
song46 = Song.create!({title: "Knock", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444920/09_-_Knock_pyykux.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 1})
song47 = Song.create!({title: "Hotline", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444917/08_-_Hotline_x4ns7m.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 2})
song48 = Song.create!({title: "Crystals", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444932/04_-_Crystals_irr3t0.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 3})
song49 = Song.create!({title: "Paris", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444916/03_-_Paris2_ypttdv.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 4})
song50 = Song.create!({title: "Hydrogen", url:"http://res.cloudinary.com/awwdiio/video/upload/v1445444922/02_-_Hydrogen_mzqk9n.mp3", description: "Taken from the Hotline Miami soundtrack", user_id: 5})


song_like01 = SongLike.create!({song_id: 1, user_id:1})
song_like02 = SongLike.create!({song_id: 2, user_id:1})
song_like03 = SongLike.create!({song_id: 3, user_id:6})
song_like04 = SongLike.create!({song_id: 4, user_id:5})
song_like05 = SongLike.create!({song_id: 5, user_id:3})
song_like06 = SongLike.create!({song_id: 6, user_id:8})
song_like07 = SongLike.create!({song_id: 7, user_id:6})
song_like08 = SongLike.create!({song_id: 8, user_id:0})
song_like09 = SongLike.create!({song_id: 9, user_id:3})
song_like10 = SongLike.create!({song_id: 10, user_id:1})





user_follow01 = UserFollow.create!({follower_id: 1, followee_id: 2})
user_follow02 = UserFollow.create!({follower_id: 2, followee_id: 3})
user_follow03 = UserFollow.create!({follower_id: 3, followee_id: 1})
user_follow04 = UserFollow.create!({follower_id: 1, followee_id: 3})
user_follow05 = UserFollow.create!({follower_id: 2, followee_id: 1})
user_follow06 = UserFollow.create!({follower_id: 4, followee_id: 1})
user_follow07 = UserFollow.create!({follower_id: 5, followee_id: 1})
user_follow08 = UserFollow.create!({follower_id: 6, followee_id: 1})
user_follow09 = UserFollow.create!({follower_id: 7, followee_id: 1})
user_follow10 = UserFollow.create!({follower_id: 8, followee_id: 1})
user_follow11 = UserFollow.create!({follower_id: 9, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 10, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 11, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 12, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 13, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 14, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 15, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 16, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 17, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 18, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 19, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 20, followee_id: 1})
# user_follow11 = UserFollow.create!({follower_id: 21, followee_id: 1})
