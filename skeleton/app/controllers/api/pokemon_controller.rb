class Api::PokemonController < ApplicationController

  def show
    @poke = Pokemon.find(params[:id])
    render :show
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end

end
