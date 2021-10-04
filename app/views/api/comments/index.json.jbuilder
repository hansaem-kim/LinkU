@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :user_id , :post_id, :created_at
        json.user comment.user, :first_name, :last_name
        json.user do
            user = comment.user
            json.extract! user, :first_name, :last_name
            json.picture url_for(user.profile_pic) if user.profile_pic.attached?
        end
    end
end