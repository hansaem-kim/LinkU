class Connection < ApplicationRecord
    validates :follower_id, uniqueness: {scope: :followee_id}

    belongs_to :follower,
        foreign_key: :follower_id,
        class_name: :User
    
    belongs_to :followee,
        foreign_key: :followee_id,
        class_name: :User
end
