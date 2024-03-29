Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resources :educations, only: [:index, :create, :update, :destroy]
    resources :experiences, only: [:index, :create, :update, :destroy]
    resources :abouts, only: [:index, :create, :update, :destroy]    
    resources :posts, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only: [:index, :create, :show, :update, :destroy]
    resources :connections, only: [:index, :create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
