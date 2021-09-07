class CreateEducations < ActiveRecord::Migration[6.1]
  def change
    create_table :educations do |t|
      t.integer :user_id, null: false
      t.string :school, null: false
      t.string :degree
      t.string :field
      t.text :activities
      t.text :description
      t.string :grade
      t.string :start_date, null: false
      t.string :end_date, null: false 

      t.timestamps
    end
    add_index :educations, :user_id
  end
end
