class Api::UsersController < ApplicationController
  def new
  end

  def index
    @users = User.all.includes(:followers).includes(uploaded_songs: :likers)
  end

  def show
    if params[:id] == current_user.id
      @user = User.find(params[:id]).includes(:followers).includes(uploaded_songs: :likers)
    else
      @user = User.find(params[:id]).includes(uploaded_songs: :likers)
    end
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
