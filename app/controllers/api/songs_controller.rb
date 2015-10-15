class Api::SongsController < ApplicationController
  def index
    @songs = Song.followed_songs(current_user).includes(:user)
  end

  def show
    @song = Song.find(params[:id])
  end

  def create

  end
end
