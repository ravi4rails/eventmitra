Rails.application.routes.draw do
  root 'home#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions', 
    registrations: 'users/registrations', 
    passwords: 'users/passwords', 
    confirmations: 'users/confirmations', 
    unlocks: 'users/unlocks',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }

  namespace :organizer do 
  	get "dashboard" => "sites#dashboard"
  	resources :events
  end

end
