class Organizer::EventsController < OrganizerController

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def create
  end

end
