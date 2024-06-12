import { Typography, Button } from '@material-tailwind/react'
import { productos } from './server'
import React, { useEffect, useContext } from 'react'
import globalContext from './context/globalContext'
import { NavLink } from 'react-router-dom'
const PageProductos = () => {

  const { windowWidth } = useContext(globalContext)
  const [producto, setProducto] = React.useState(productos);

  

  const handleFilterProduct = (event) => {
    const filter = productos.filter(item => item.categoria == event)
    setProducto(filter)
  }
  useEffect(() => {
    const productosFiltrados = productos.filter(item => item.categoria === "Todos")
    window.scrollTo(0, 0)
  }, [productos])

 


  return (
    <div className='w-full'>
      <section id='banner-productos'>
        <div className="bg-[url('/productos/banner.jpg')] h-[50vh] bg-cover bg-center bg-no-repeat">

        </div>
      </section>

      <section id='vista productos'>
        <div className="mt-10 mb-10">
          <Typography as={"h1"} variant='h1' className='text-center font-normal uppercase'>Productos</Typography>
        </div>

      </section>


      <section id='productos'>
        <div className={`${windowWidth < 1150 ? "" : "container"} w-full mx-auto`}>
          <div className={`w-full mt-10 grid ${windowWidth < 500 ? "grid-cols-1" : "grid-cols-2"} gap-10`}>
            <Button className='bg-blue-500 text-md uppercase' onClick={() => handleFilterProduct("laboratory")}>Refrigerador para Laboratorio</Button>
            <Button className='bg-blue-500 text-md uppercase' onClick={() => handleFilterProduct("pharmacy")}>Refrigerador para Farmacia</Button>
          </div>
          <div className={`w-full grid ${windowWidth < 500 ? "grid-cols-1" : windowWidth < 1000 ? "grid-cols-2" : "grid-cols-4"} gap-10 p-10 mt-10`}>
            {
              producto.map((item, index) => (
                <NavLink key={index}
                  to={`/product/${item.id}`}>

                  <div className="group rounded-xl cursor-pointer tarnsition-all duration-500">

                    <div className="">
                      <img src={item.imagen} alt={item.alt} className='group-hover:scale-105 transition-all duration-500' />
                    </div>
                    <div className="bg-gray-200 p-10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                      <h3>{item.title}</h3>
                      {/* <h3>{item.id}</h3> */}
                    </div>
                  </div>
                </NavLink>
              ))
            }
          </div>
        </div>

      </section>
    </div>
  )
}

export default PageProductos
