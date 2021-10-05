json.partial! 'api/users/user' , user: @user 
json.profilePic url_for(@user.profile_pic) if @user.profile_pic.attached?