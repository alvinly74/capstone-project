class CreateUserFollows < ActiveRecord::Migration
  def change
    create_table :user_follows do |t|
      t.integer :follower_id, null:false
      t.integer :followee_id, null:false
      t.timestamps null: false
    end
      add_index(:followings, [:follower_id, :followee_id], unique: true)
  end
end
