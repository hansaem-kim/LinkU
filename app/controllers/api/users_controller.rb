class UsersController < ApplicationController

    before_action :ensure_logged_in, only: [:show, :index]

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(users_param)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def index
        @users = User.all
        render :index
    end

    private
    def users_param
        params.require(:user).permit(:password, :email, :first_name, :last_name)
    end
end