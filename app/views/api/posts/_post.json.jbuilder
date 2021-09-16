json.extract! post, :id, :author_id ,:body
json.photoUrl url_for(post.photo) if post.photo.attached?
json.author post.author, :first_name, :last_name, :headline