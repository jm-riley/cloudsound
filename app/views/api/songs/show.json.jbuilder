json.song do

json.extract! @song, :title, :description, :user_id, :id
json.songUrl url_for(@song.song_file)
json.username @song.username
if @song.song_photo.attached?
  json.photoUrl url_for(@song.song_photo)
end

end

json.user do
  json.extract! @user, :username, :id
  if @user.avatar.attached?
    json.avatarUrl url_for(@user.avatar)
  end
end


