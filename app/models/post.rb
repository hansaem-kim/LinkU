class Post < ApplicationRecord
    validates :author_id, :body, presence: true

    has_one_attached :photo
end
