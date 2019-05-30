json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :body, :user_id, :song_id, :id
    end
  end
end


json.users do
  @users.each do |user|
    json.extract! user, :username, :id
    if user.avatar.attached?
      json.avatarUrl url_for(user.avatar)
    end
  end
end
