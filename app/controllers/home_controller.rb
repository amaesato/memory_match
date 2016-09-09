class HomeController < ApplicationController
  def index
    respond_to do |format|
      @numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].shuffle
      format.html
      format.json { render json: @numbers }
    end
  end
end
