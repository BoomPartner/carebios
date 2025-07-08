// import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import PageProductos from './components/Productos'
import PageServicios from './components/Servicios'
// import PageBlog from './components/Bog'
import PageContacto from './components/Contacto'
import PageNotFound from './components/NotFound'
import PageNosotros from './components/Nosotros'
import PageInicio from './components/Inicio'
import Footer from './components/Footer'
import GlobalState from './components/context/GlobalState'
import DetailProduct from './components/DetailProduct'
import PageCotizar from './components/Cotizar'
const Rutas = () => {

  const routes = useRoutes([
    {
      path: "/", element: <PageInicio />
    },
    {
      path: '/products', element: <PageProductos />
    },
    {
      path: '/services', element: <PageServicios/>
    },
    {
      path: "/product/:productId", element: <DetailProduct />
    },
    {
      path: "/about", element: <PageNosotros />
    },
    {
      path: "/cotizar", element: <PageCotizar />
    },
    {
      path: "/contact", element: <PageContacto />
    },
    {
      path: "*", element: <PageNotFound />
    }
  ])

  return routes;
}
function App() {

  return (
    <>
      <GlobalState>
        <BrowserRouter>

          <Navbar></Navbar>
          <Rutas />
          <Footer />

        </BrowserRouter>

      </GlobalState>


    </>
  )
}

export default App
