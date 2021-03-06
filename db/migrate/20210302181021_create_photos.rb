class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :name
      t.integer :price
      t.integer :likes
      t.string :description
      t.boolean :liked, :default => false

      t.timestamps
    end
  end
end
