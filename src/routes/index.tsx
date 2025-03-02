import { createFileRoute } from '@tanstack/react-router'
import { useCount } from '~/store/count'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {

  const { count, increment, decrement } = useCount()

  return (
    <>
      <h1 className='text-center mb-5'>Prueba con un Contador</h1>
      <div className="flex flex-row justify-center items-center mx-auto gap-4">
        <button className='btn btn-error' onClick={() => decrement()}>Disminuir</button>
        <h1 className='text-2xl font-bold w-8 text-center'>{count}</h1>
        <button className='btn btn-success' onClick={() => increment()}>Aumentar</button>
      </div>
    </>
  )

}

