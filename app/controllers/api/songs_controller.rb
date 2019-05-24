class Api::SongsController < ApplicationController

def index
  @songs = current_user.songs
end

def show
  @song = Song.find(params[:id])
  @user = @song.user
  render :show
end

def create
  @song = Song.new(song_params)
  @song.user_id = current_user.id
  @user = @song.user
  if @song.save
    render :show
  else
    render json: @song.errors.full_messages, status: 422
  end
end

def update
  @song = current_user.songs.find(params[:id])
  @user = @song.user
  if @song.update_attributes(song_params)
    render :show
  else
    render json: @song.errors.full_messages, status: 422
  end
end

def destroy
  @song = current_user.songs.find(params[:id])
  @song.delete
  # render :index
end

private

def song_params
  params.require(:song).permit(:title, :description, :song_file, :song_photo)
end

end