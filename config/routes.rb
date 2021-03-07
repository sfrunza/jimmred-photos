Rails.application.routes.draw do

  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  
  namespace :api do
    namespace :v1 do
      resources :photos, only: [:index, :show, :create, :edit, :update, :destroy]
      resources :events, only: [:index, :show, :create, :edit, :update, :destroy]
      resources :users, only: [:index, :show, :create, :edit, :update, :destroy]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
   !request.xhr? && request.format.html?
 end
end
