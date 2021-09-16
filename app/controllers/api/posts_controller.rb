class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
        render 'api/posts/index'
    end

    def show
        @post = Post.find(params[:id])
      end
    

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
    end

    def create
        @post = Post.new(post_params);
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:body, :author_id, :photo)
    end
end