Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    get 'songs/liking' => 'songs#liking'
    get 'songs/search' => 'songs#search'
    resources :songs, only:[:index, :show, :create] do
      resource :like, only: [:create, :destroy]
    end
    get 'users/rand' => 'users#rand'
    get 'users/guest' => 'users#guest'
    get 'users/following' => 'users#following'
    resources :users, only: [:index, :show ] do
      resource :follow, only: [:create, :destroy]
    end
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:index, :new, :create, :destroy] do
    get 'guest' => :guest
  end
  root "static_pages#root"
end
