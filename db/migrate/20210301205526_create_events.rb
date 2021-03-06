class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :service
      t.string :date
      t.string :time
      t.string :name
      t.string :email
      t.string :subject
      t.text :message

      t.timestamps
    end
  end
end
