class Api::EducationsController < ApplicationController
  def create
    @education = Education.new(education_params)

    if @education.save
      render :show 
    else 
      render json: @education.errors.full_messages, status: 422
    end
  end
  
  def update 
    @education = Education.find(params[:id])

    if @education.update(education_params)
      render :show 
    else
      render json: @education.errors.full_messages, status: 422
    end
  end

  def index
    @educations = Education.where(user_id: params[:userId])
  end
  
  def destroy 
    @education = Education.find(params[:id])
    @education.destroy 
    render :show
  end

  private 

  def education_params
    params.require(:education).permit(:user_id, :school, :degree, :field, :activities, :description, :grade, :start_date, :end_date)
  end

end