class StaticPagesController < ApplicationController
  def index
    render file: Rails.root.join('frontend', 'dist', 'index.html'), layout: false
  end
end
