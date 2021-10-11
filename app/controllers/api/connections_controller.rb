class Api::ConnectionsController < ApplicationController
    def show
        @connection = Connection.find(params[:id])
    end

    def index
        # @followers = User.find(params[:userId]).followers
        # @followees = User.find(params[:userId]).followees
        @connections = Connection.where(followee_id: params[:userId])
        render :index
    end

    def create
        @connection = Connection.new(connection_params)
        if @connection.save
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end

    def destroy
        @connection = Connection.find(params[:id])
        @connection.destroy
        render :show
    end

    private

    def connection_params
        params.require(:connection).permit(:follower_id, :followee_id, :accepted)
    end

end