class Campaign < ActiveRecord::Base

  #has_many :generic_posts, dependent: :destroy
  belongs_to :user_id 
  
end
 

 

