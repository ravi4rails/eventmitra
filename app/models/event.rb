class Event < ApplicationRecord
	validates :title, :description, :start_date, :end_date, presence: true
end
