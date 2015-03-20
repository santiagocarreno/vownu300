class AddColumnTweetToCampaign < ActiveRecord::Migration
  def change
  	 add_column :campaigns, :tweet, :string
  end
end
