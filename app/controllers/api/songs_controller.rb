class Api::SongsController < ApplicationController

  def search
    @songs = Song.includes(user: :followers)
                 .includes(:likers)
                 .where("lower(title) ~ ?", params[:input]).uniq
  end

  def liking
      @songs = Song.where(id: current_user.liked_songs.pluck(:id))
                   .includes(user: :followers)
                   .includes(:likers)
  end

  def index
      @songs = Song.includes(user: :followers)
                   .includes(:likers)
  end

  def show
    @song = Song.find(params[:id])
  end

  def followed_songs
    if current_user
      @songs = Song.where(user_id: current_user.followees.pluck(:id))
                   .includes(:likers)
                   .includes(user: :followers)
    else
      @songs = nil
      render :no_follow
    end
  end

  def random
    @song = Song.includes(user: :followers).includes(:likers).sample
  end
end
