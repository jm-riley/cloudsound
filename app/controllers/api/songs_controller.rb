class Api::SongsController < ApplicationController

def index
  if params[:user_id]
    @user = User.find(params[:user_id])
    @songs = @user.songs
    render :index
  else
    @songs = Song.last(12)
  end
  rescue ActiveRecord::RecordNotFound => e
    render json: {
      error: e.to_s 
    }, status: 404
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

def listens
  if params[:song_id] 
    @listen = Listened.create(song_id: params[:song_id], user_id: current_user.id)
  end
 
  @listens = current_user.listeneds.last(10)
  @songIds = @listens.map {|listen| listen.song_id}
  @songs = @songIds.reverse.uniq.map {|songId| Song.find(songId)}
  render :history

end

private

def song_params
  params.require(:song).permit(:title, :description, :song_file, :song_photo, :song_id)
end

end