import { PokemonsAll } from "~/types/pokemos"

export const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon"
export const URL_ESPECIES = "https://pokeapi.co/api/v2/pokemon-species"
export const URL_EVOLUCIONES = "https://pokeapi.co/api/v2/evolution-chain"


export const getPokemonsAll = async (): Promise<PokemonsAll> => {
    const response = await fetch(`${URL_POKEMON}/?limit=11&offset=0`)
    const data = await response.json()
    return data
}
