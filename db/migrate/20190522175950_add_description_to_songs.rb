class AddDescriptionToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :description, :string
  end
end
