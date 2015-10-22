class Api::SongsController < ApplicationController

  def rand

  end

  def liking
    if current_user
      @songs = Song.where(id: current_user.liked_songs.pluck(:id))
                   .includes(user: :followers)
                   .includes(:likers)
    else
      @songs = nil
    end
  end

  def index
    if current_user
      @songs = Song.where(user_id: current_user.followees.pluck(:id)).includes(user: :followers)
                   .includes(:likers)
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
