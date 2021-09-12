class ChangeUserColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :pronouns, :string
    add_column :users, :headline, :string
    add_column :users, :location, :string
  end
end
