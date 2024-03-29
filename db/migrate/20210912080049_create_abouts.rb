class CreateAbouts < ActiveRecord::Migration[6.1]
  def change
    create_table :abouts do |t|
      t.integer :user_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :abouts, :user_id
  end
end
