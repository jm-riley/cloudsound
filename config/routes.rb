Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resources :users, only: [:show] do
      resources :songs, only: [:index]
    end
    resources :songs, only: [:show, :update, :destroy, :create] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
    resource :session, only: [:create, :destroy]
  end
end
