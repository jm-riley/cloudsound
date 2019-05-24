json.song do

json.extract! @song, :title, :description, :user_id, :id
json.songUrl url_for(@song.song_file)
if @song.song_photo.attached?
  json.photoUrl url_for(@song.song_photo)
end

end

json.user do
  json.extract! @user, :username, :id
end


