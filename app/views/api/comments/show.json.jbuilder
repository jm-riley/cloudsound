json.comment do
  json.extract! @comment, :body, :user_id, :id
end

json.user do
  json.extract! @user, :id, :username
  if @user.avatar.attached?
      json.avatarUrl url_for(@user.avatar)
  end
end