class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def create

  end
end
