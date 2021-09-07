class Education < ApplicationRecord
    validates :user_id, :school, :start_date, :end_date, presence: true

    belongs_to :user
end
