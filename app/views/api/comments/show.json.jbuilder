json.extract! @comment, :id, :body, :user_id , :post_id, :created_at
json.user do
    user = @comment.user
    json.extract! user, :first_name, :last_name
    json.picture url_for(user.profile_pic) if user.profile_pic.attached?
end