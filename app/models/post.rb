class Post < ApplicationRecord
    validates :author_id, :body, presence: true
end
