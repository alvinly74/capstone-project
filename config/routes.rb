Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :songs, only:[:index, :create]
    resources :users, only: [:index, :show ]
    resources :follows, only: [:create, :destroy]
    resources :song_likes, only: [:create, :destroy]

  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root "static_pages#root"
end
