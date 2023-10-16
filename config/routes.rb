Rails.application.routes.draw do
  resources :todos
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "todos#index"
  resources :posts
  get '/search' => 'welcome#search'

  resources :welcome
  resources :todos
end
