Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end

  get '*path', to: 'static_pages#index'
end
