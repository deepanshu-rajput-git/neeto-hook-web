class Api::TransformationRulesController < ApplicationController
  before_action :set_inbox, only: [ :index, :create ]
  before_action :set_rule, only: [ :show, :update, :destroy ]

  def index
    render json: @inbox.transformation_rules
  end

  def show
    render json: @rule
  end

  def create
    @rule = @inbox.transformation_rules.new(rule_params)
    if @rule.save
      render json: @rule, status: :created
    else
      render json: @rule.errors, status: :unprocessable_entity
    end
  end

  def update
    if @rule.update(rule_params)
      render json: @rule
    else
      render json: @rule.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @rule.destroy
    head :no_content
  end

  private

  def set_inbox
    @inbox = WebhookInbox.find_by!(uuid: params[:webhook_inbox_uuid])
  end

  def set_rule
    @rule = TransformationRule.find(params[:id])
  end

  def rule_params
    params.require(:transformation_rule).permit(:name, :rule_type, :body, :is_enabled)
  end
end
