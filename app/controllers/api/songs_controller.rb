class Api::SongsController < ApplicationController
  def index
    @songs = Song.followed_songs(current_user).includes(:user).includes(:likers)
  end

  def show
    @song = Song.find(params[:id])
  end

  def create

  end
end
