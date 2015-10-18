class Api::SongsController < ApplicationController
  def index
    @songs = Song.all.includes(:user).includes(:likers).order(created_at: :asc)
  end

  def show
    @song = Song.find(params[:id])
  end

  def create

  end
end
