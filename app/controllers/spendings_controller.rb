class SpendingsController < ApplicationController
  def top
  end

  def index
    @first_day_of_month = Date.new(2023, 9, 1).wday
    @current_month = Date.today.month
  end
end
