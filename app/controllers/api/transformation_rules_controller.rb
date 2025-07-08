class Api::TransformationRulesController < ApplicationController
  before_action :set_rule, only: [:show, :update, :destroy]

  def index
    render json: TransformationRule.all
  end

  def show
    render json: @rule
  end

  def create
    @rule = TransformationRule.new(rule_params)
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

  def set_rule
    @rule = TransformationRule.find(params[:id])
  end

  def rule_params
    params.require(:transformation_rule).permit(:name, :rule_type, :body, :is_enabled)
  end
end