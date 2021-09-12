class Experience < ApplicationRecord
    validates :user_id, :title, :company, :start_date, :end_date, presence: true

    belongs_to :user
end
