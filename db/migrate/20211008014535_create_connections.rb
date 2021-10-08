class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false
      t.boolean :accepted, default: false, null: false

      t.timestamps
    end
    
    add_index :connections, [:follower_id, :followee_id], unique: true

  end
end
