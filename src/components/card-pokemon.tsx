import { Pokemons } from "~/types/pokemos"
import imgPokemon from '~/img/pokemon.png'
import { MdFavoriteBorder } from "react-icons/md"

type Props = {
    pokemon: Pokemons
}

export default function CardPokemon({ pokemon }: Props) {
    return (



        <div className="max-w-xs w-full bg-gradient-to-b from-gray-600 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative">
            {/* Card Number */}
            <div className="absolute top-3 right-4 text-green-400 font-bold text-sm">
                #002
            </div>

            {/* Favorite Button */}
            <button className="absolute top-3 left-4 text-green-400 hover:text-green-300 transition-colors">
                <MdFavoriteBorder className="h-6 w-6 " />
            </button>

            {/* Card Image */}
            <div className="relative pt-10 pb-4 px-6 text-center">
                <div className="w-full flex justify-center">
                    <img
                        className="w-40 h-40 object-contain"
                        src={imgPokemon}
                        alt="Ivysaur"
                    />
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-white mb-2">
                    {pokemon.name}
                </h2>


                {/* Pokemon Details */}
                <div className="flex justify-end items-center px-0 py-2">
                    <img
                        className="h-8 w-8"
                        src={imgPokemon}
                        alt="Ivysaur mini"
                    />
                </div>
            </div>
        </div>
    )
}   