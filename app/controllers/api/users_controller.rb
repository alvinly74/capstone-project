class Api::UsersController < ApplicationController
  def new
  end

  def rand
    user_id = User.pluck(:id).sample
    while user_id == current_user.id do
      user_id = User.pluck(:id).sample
    end
      @user = User.all.includes(:followers).includes(uploaded_songs: :likers).find(user_id)
  end

  def index
    @users = User.all.includes(:followers).includes(uploaded_songs: :likers)
  end

  def show
    @user = User.all.includes(:followers).includes(uploaded_songs: :likers).find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save()
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render:new
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
