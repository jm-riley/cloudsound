class Api::CommentsController < ApplicationController

  def index
    @comments = Song.find(params[:song_id]).comments.includes(:user)
    @users = @comments.map {|comment| comment.user }.uniq
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.song_id = params[:song_id]
    @comment.user_id = current_user.id

    @user = current_user
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end