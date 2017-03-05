# class Post < ActiveRecord::Base
#   def next
#     Post.where("id > ?", id).limit(1).first
#   end

#   def prev
#     Post.where("id < ?", id).limit(1).first
#   end
# end