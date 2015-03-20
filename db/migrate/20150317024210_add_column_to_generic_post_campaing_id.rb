class AddColumnToGenericPostCampaingId < ActiveRecord::Migration
  def change
  
    add_column :generic_posts, :campaing_id, :integer
  end
end
