class CreateUserFollows < ActiveRecord::Migration
  def change
    create_table :user_follows do |t|
      t.integer :follower_id, null:false
      t.integer :followee_id, null:false
      t.timestamps null: false
    end
    validates_uniqueness_of :follower_id, :scope => [:followee_id]
  end
end
