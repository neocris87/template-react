import { create } from "zustand";
import { URL_POKEMON } from "~/api";
import { PokemonsAll } from "~/types/pokemos";

type PokemonState = {
    pokemons: PokemonsAll,
    getPokemons: () => void
}

export const usePokemonStore = create<PokemonState>((set) => ({
    pokemons: undefined!,
    getPokemons: async () => {
        const response = await fetch(`${URL_POKEMON}/?limit=30&offset=0`)
        const data = await response.json()
        set({ pokemons: data })
    }
}))