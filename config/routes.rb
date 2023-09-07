Rails.application.routes.draw do
  devise_for :users
  root "spendings#top"
end
