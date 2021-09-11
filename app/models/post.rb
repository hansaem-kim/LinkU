class Post < ApplicationRecord
    validates :author_id, :body, presence: true

    belongs_to :user

end
