json.extract! comment, :id, :body, :user_id , :post_id, :created_at
json.picture url_for(user.profile_pic) if user.profile_pic.attached?