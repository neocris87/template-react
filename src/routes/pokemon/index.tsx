import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { getPokemonsAll } from '~/api'
import { usePokemonStore } from '~/store/pokemonStore'
import { DotLoader } from 'react-spinners'
import CardPokemon from '~/components/card-pokemon'

export const Route = createFileRoute('/pokemon/')({
  component: RouteComponent,
})

function RouteComponent() {

  // const { pokemons, getPokemons } = usePokemonStore()
  const { data: pokemons, isLoading, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemonsAll
  })


  if (isLoading) return <DotLoader color='#000' className='text-center' />
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className='max-w-7xl mx-auto'>
      <h1>Pokemons</h1>
      <div className='flex flex-row flex-wrap gap-4 justify-center'>
        {
          pokemons?.results.map((pokemon) => (
            <CardPokemon key={pokemon.name} pokemon={pokemon} />
          ))
        }
        {/* <button onClick={async () => await getPokemons()}>Obtener Pokemons</button> */}

      </div>
    </div>
  )
}
