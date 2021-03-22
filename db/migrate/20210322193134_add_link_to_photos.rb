class AddLinkToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :link, :string
  end
end
