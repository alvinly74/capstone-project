Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    get 'users/rand' => 'users#rand'
    resources :songs, only:[:index, :show, :create] do
      resource :like, only: [:create, :destroy]
    end
    resources :users, only: [:index, :show ] do
      resource :follow, only: [:create, :destroy]
    end
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root "static_pages#root"
end
