class Api::SongsController < ApplicationController

  def search
    @song_ids = Song.includes(user: :followers)
                 .includes(:likers)
                 .where("lower(title) ~ ?", params[:input]).pluck(:id).uniq
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
    @songs = Song.where(user_id: current_user.followees.pluck(:id))
                 .includes(:likers)
                 .includes(user: :followers)
  end

  def create

  end
end
