class StudentsController < ApplicationController
  def index
    @students = Student.all 
  end

  def new
    @student = Student.new
  end

  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to students_path
    else 
      render 'new'
    end
  end

  def show
    @student = Student.find(params[:id])
  end

  def edit
    @student = Student.find(params[:id])
  end

  def update
    @student = Student.find(params[:id])
    if @student.update_attributes(student_params)
      redirect_to students_path
    else 
      render 'edit'
    end
  end

  def destroy
    @student = Student.find(params[:id])
    @student.delete
    redirect_to students_path
  end
  protected
  def student_params
    params.require(:student).permit(:name, :email, :city, :state, :description, :linked_in, :website, :github)
  end
end
