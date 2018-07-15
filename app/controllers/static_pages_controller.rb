class StaticPagesController < ApplicationController
  before_action :authorize_user, except: [:index, :show]

  def index
    if current_user
      render :'static_pages/index'
    else
      redirect_to '/users/sign_in'
    end
  end

  protected

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
