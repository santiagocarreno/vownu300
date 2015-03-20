class CreateGenericPosts < ActiveRecord::Migration
  def change
    create_table :generic_posts do |t|
      t.string :content
      t.string :image

      t.timestamps null: false
    end
  end
end
