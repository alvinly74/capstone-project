class Api::FollowsController < ApplicationController
  def create
    @user_follow = UserFollow.new(follow_params)
    if @user_follow.save
      render json: {follower: follow_params[:follower_id], success: true}
    else
      render json: {success: false, message: @user_follow.errors.full_messages}
    end
  end

  def destroy
    @user_follow = UserFollow.find_by(
                                follower_id: follow_params[:follower_id],
                                followee_id: follow_params[:followee_id]
                                )
    @user_follow.destroy
    render json: ["Unfollow Success"]
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
