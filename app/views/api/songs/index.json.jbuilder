json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :title, :description, :user_id, :id
      json.songUrl url_for(song.song_file)
      if song.song_photo.attached?
        json.photoUrl url_for(song.song_photo)
      end
    end
  end
end

json.user do
  json.extract! @user, :username, :id
  if @user.avatar.attached?
    json.avatarUrl url_for(@user.avatar)
  end
end