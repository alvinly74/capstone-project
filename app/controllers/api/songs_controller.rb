class Api::SongsController < ApplicationController

  def rand

  end

  def index
    @songs = Song.where(user_id: current_user.followees.pluck(:id)).order(created_at: :asc)
  end

  def show
    @song = Song.find(params[:id])
  end

  def create

  end
end
