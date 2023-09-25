Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: 'users/registrations', sessions: 'users/sessions'}
  root "spendings#top"
  resources :spendings, only: [:index, :destroy]
  resources :year_spendings, only: [:index]
end
