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
end
