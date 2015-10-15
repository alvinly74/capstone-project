class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :url, null: false
      t.text :description, null: false
      t.text :img_url, null:false, 'http://res.cloudinary.com/awwdiio/image/upload/v1444932880/bobs_burgers_500x500_tr3ykn.gif'
      t.timestamps null: false
    end
  end
end
