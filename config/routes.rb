Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    # resources
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root "static_pages#root"
end
