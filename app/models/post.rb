class Post < ApplicationRecord
    validates :author_id, :body, presence: true

    has_one_attached :photo

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
