Rails.application.routes.draw do
  resources :notes, defaults: { format: :json }
end
