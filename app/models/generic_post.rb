class GenericPost < ActiveRecord::Base
	validates :content, length: { maximum: 140 }

	belongs_to :campaign
  	
end
