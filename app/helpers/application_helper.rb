module ApplicationHelper
	def admin?
	  @current_user.role == "Administrator"
	  # I made up the line above. Implement your own checks according to your setup
	end


end
