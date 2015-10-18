class Api::LikesController < ApplicationController
  def create
    @song = Song.find(params[:song_id])
    @song.likers << current_user
    render partial: 'api/songs/song', locals: {song: @song, user: @song.user}
  end

  def destroy
    @song = Song.find(params[:song_id])
    @song.likers.destroy(current_user)
    render partial: 'api/songs/song', locals: {song: @song, user: @song.user}
  end


  private

  def likes_params
    params.require(:like).permit(:song_id, :user_id)
  end
end
