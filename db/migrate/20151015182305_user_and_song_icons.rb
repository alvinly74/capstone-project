class UserAndSongIcons < ActiveRecord::Migration
  def change
    add_column :users, :img_url, :text, default: 'http://res.cloudinary.com/awwdiio/image/upload/v1444932880/bobs_burgers_500x500_tr3ykn.gif'
    add_column :songs, :img_url, :text, default: "http://res.cloudinary.com/awwdiio/image/upload/c_scale,w_200/v1444932715/archer_500x500_zrhro1.jpg"
  end
end
