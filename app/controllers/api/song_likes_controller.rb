class Api::SongLikesController < ApplicationController
  def create
    @like = SongLike.new(likes_params)

    if @like.save
      render json: ["like Success"]
    else
      render json: ["like Failed"]
    end
  end

  def destroy

  end


  private

  def likes_params
    params.require(:like).permit(:song_id, :user_id)
  end
end
