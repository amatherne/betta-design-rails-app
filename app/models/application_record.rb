class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
	def next
	    Blog.where("id > ?", id).order(id: :asc).limit(1).first
	end

	def prev
	     Blog.where("id < ?", id).order(id: :desc).limit(1).first
	end

end
