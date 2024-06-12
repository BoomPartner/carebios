import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from './server'
import globalContext from './context/globalContext'
import { NavLink, Link } from 'react-router-dom'
const DetailProduct = () => {

    const { productId } = useParams()

    const [producto, setProducto] = useState([])

    const { windowWidth } = useContext(globalContext)

    useEffect(() => {
        // console.log(productId);
        const filter = productos.filter((item) => item.id == productId)
        if (filter) {
            setProducto(filter)
        }

        window.scrollTo(0, 0);
    }, [])

    const handleScroll = () => {
        window.scrollBy({
            top: 500, // Cantidad de píxeles que quieres desplazar hacia abajo
            left: 0,  // Cero porque no queremos desplazar horizontalmente
            behavior: 'smooth' // Esto hace que el scroll sea suave
        });
    }



    return (
        <div className={`w-full ${windowWidth < 980 ? "p-8" : "p-24"} overflow-hidden`}>
            <div className={`w-full`}>
                {
                    producto?.map((item, index) => (

                        <div key={index} className={`w-full ${windowWidth < 980 ? "" : "flex gap-5"} `}>
                            <div className="w-full object-fade">
                                <img src={item.imagen} alt={item.alt} className='w-[50%] mx-auto' />
                            </div>
                            <div className="w-full derecha1">
                                <h1 className='text-2xl font-bold text-gray-800'>{item.title}</h1>
                                <p className='text-xl font-bold mt-5'>{item.category}</p>
                                <p className='mb-5'>{item.description}</p>
                                <NavLink key={index}
                                    to={`/cotizar`}>
                                    <div className="uppercase text-md inline-block bg-blue-500 py-2 px-4 rounded-t-lg text-white hover:-translate-y-1 transition-all duration-500">
                                        Cotizar
                                    </div>
                                </NavLink>
                            </div>

                        </div>

                    ))
                }
            </div>
            <div className='w-full flex'>
                <button className='text-xl uppercase font-bold mt-10 bg-blue-500 text-white p-2 rounded-t-lg hover:-translate-y-1 transition-all duration-500' onClick={handleScroll}>Caracteristicas</button>
            </div>
            <div className="w-full flex">
                <div className="w-full">
                    {
                        producto.map((item, index) => (
                            <div key={index} className="">

                                {
                                    item.control_temperatura && <div className="">
                                        <h5 className='mt-10 text-2xl font-semibold text-gray-800'>Control de temperatura</h5>
                                        <p className='mt-5'>{item.control_temperatura}</p>
                                    </div>
                                }

                                {
                                    item.control_seguridad && <div className="">
                                        <h5 className='mt-10 text-2xl font-semibold  text-gray-800'>Control de Seguridad</h5>
                                        <p className='mt-5'>{item.control_seguridad}</p>

                                    </div>
                                }
                                {
                                    item.sistema_rerigeracion && <div className="">
                                        <h5 className='mt-10 text-2xl font-semibold  text-gray-800'>Sistema de Refrigeración</h5>
                                        <p className='mt-5'>{item.sistema_rerigeracion}</p>
                                    </div>
                                }
                                {
                                    item.ergonomic && <div className="">
                                        <h5 className='mt-10 text-2xl font-semibold  text-gray-800'>Sistema de Refrigeración</h5>
                                        <p className='mt-5'>{item.ergonomic}</p>
                                    </div>
                                }
                                {
                                    item.features ? item.features.map((target,indice)=>(
                                        <div key={indice} className="mt-10">
                                            {target}
                                        </div>
                                    )) : null
                                }


                            </div>

                        ))
                    }
                </div>
                {
                    windowWidth < 980 ? null :  <div className="w-full">

                    </div>
                }

            </div>

            
        </div>
    )
}

export default DetailProduct
