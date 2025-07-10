Rails.application.routes.draw do
  root 'static_pages#index'
  get '*path', to: 'static_pages#index'

  # Mount Action Cable outside of API scope
  mount ActionCable.server => "/cable"

  get "/health_check", to: proc { [200, {}, ['OK']] }

  namespace :api do
    # Route for receiving webhooks
    match "hooks/:uuid", to: "hooks#create", via: :all, as: :webhook_create

    # Routes for accessing webhook data
    get "/hooks", to: "webhook_inboxes#index"
    post "/hooks", to: "webhook_inboxes#create"
    get "/hooks/:uuid", to: "webhook_inboxes#show"
    get "/webhooks/all", to: "webhook_requests#all"
    resources :webhook_inboxes, param: :uuid, only: [] do
      resources :webhook_requests, only: [ :index, :show ]
      resources :transformation_rules, only: [ :index, :create ]
    end
    resources :transformation_rules, only: [ :show, :update, :destroy ]

    get "dashboard/stats", to: "dashboard#stats"
  end
end
