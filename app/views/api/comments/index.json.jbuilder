@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :user_id , :post_id, :created_at
        json.user do
            json.profilePic url_for(comment.user.profile_pic) if comment.user.profile_pic.attached?
        end
    end
end
