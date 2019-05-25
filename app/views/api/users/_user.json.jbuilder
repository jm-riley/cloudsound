json.extract! user, :username, :id 

if user.avatar.attached?
  json.avatarUrl url_for(user.avatar)
end