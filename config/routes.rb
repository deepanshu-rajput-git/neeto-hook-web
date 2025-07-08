Rails.application.routes.draw do
  # Mount Action Cable outside of API scope
  mount ActionCable.server => '/cable'

  namespace :api do
    # Route for receiving webhooks
    match 'hooks/:uuid', to: 'hooks#create', via: :all, as: :webhook_create

    # Routes for accessing webhook data
    get '/hooks', to: 'webhook_inboxes#index'
    post '/hooks', to: 'webhook_inboxes#create'
    get '/hooks/:uuid', to: 'webhook_inboxes#show'
    get '/hooks/:uuid/requests', to: 'hooks#index'
    get '/hooks/:uuid/requests/:id', to: 'hooks#show'

    resources :transformation_rules, only: [:index, :show, :create, :update, :destroy]
  end
end
