import React, { useEffect, useState } from 'react'
import database from '../utils/database'
import { Link, useParams } from 'react-router-dom'

const Detalle = () => {
  const params = useParams()

  const [producto, setProducto] = useState({})



  useEffect(() => {
    const prod = database.find(prod => prod.id === parseInt(params.id))
    setProducto(prod)
    //eslint-disable-next-line
  }, [])

  return (
    <div className='w-full flex items-center justify-center h-screen'>
      <div className='flex gap-4 h-[50vh] p-4 w-1/2 border-2 rounded-lg'>
        <img className='w-1/2 h-full mr-4 object-contain drop-shadow-lg cursor-pointer' src={producto.imagen} alt={producto.nombre} />
        <div className='w-1/2 flex flex-col pt-4 h-full justify-between'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>
              Detalle de {producto.nombre}
            </h1>
            <p className='text-xl font-medium'>Precio: <span className='font-thin'>
              {producto.precio}</span></p>
          </div>
          <div className='flex gap-4'>
            <button className='p-4 border bg-green-500 rounded-lg border-black font-bold'>
              Comprar ahora
            </button>
            <Link to='/'>
              <button className='p-4 border bg-red-400 rounded-lg border-black font-bold'>
                X
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalle