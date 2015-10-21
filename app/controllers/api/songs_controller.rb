class Api::SongsController < ApplicationController

  def rand

  end

  def index
    if current_user
      @songs = Song.where(user_id: current_user.followees.pluck(:id)).includes(user: :followers)
                   .order(created_at: :asc)
    else
      @songs = nil
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  def create

  end
end
