class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["Invalid Credentials"], status: 401
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
        else
            render json: ["Please Log-In"], status: 401
        end
    end
end