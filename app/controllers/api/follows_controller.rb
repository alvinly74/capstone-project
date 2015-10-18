class Api::FollowsController < ApplicationController
  def create
    @user = User.all.includes(:followers).includes(uploaded_songs: :likers).find(params[:user_id])
    @user.followers << current_user
    render partial: 'api/users/user', locals: {user: @user}
  end

  def destroy
    @user = User.all.includes(:followers).includes(uploaded_songs: :likers).find(params[:user_id])
    @user.followers.destroy(current_user)
    render partial: 'api/users/user', locals: {user: @user}
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
