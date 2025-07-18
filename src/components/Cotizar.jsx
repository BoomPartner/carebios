"use client";
import React, { useEffect, useState, useContext } from 'react'
import { productos } from './server'
import { NavLink, Link } from 'react-router-dom'
import { Dialog, DialogBody, Input, Button, Spinner, Typography } from '@material-tailwind/react'
import globalContext from './context/globalContext'
const PageCotizar = () => {

    const { windowWidth } = useContext(globalContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [producto, setProducto] = useState(productos)

    const [open, setOpen] = useState(false);
    const [imagen, setImagen] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [mensaje, setMensaje] = useState(null)
    const [status, setStatus] = useState(null)
    const [spiner, setSpiner] = useState(false)

    const [formData, setFormData] = useState({
        nombre: null,
        correo: null,
        telefono: null,
        empresa: null,
        unidades: null,
        emisor: "Carebios"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleData = async () => {
        const allFieldsFilled = Object.values(formData).every(item => item !== null && item !== "");

        if (allFieldsFilled) {
            // console.log('Todos los campos están completos');
            setSpiner(true)
            setStatus(false)
            try {
                console.log(formData);
                console.log(typeof formData);
                const response = await fetch("https://tecknum.com/CAREBIOS_ENDPOINT_FORM/cotizaForm.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                if (response) {
                    // console.log("mensaje enviado");
                    const data = await response.json()
                    console.log(data);
                    setMensaje(true)
                    setSpiner(false)

                    setTimeout(() => {
                        setMensaje(false); // Cambiar mensaje a false o null después de 3 segundos
                    }, 3000); // 3000 milisegundos = 3 segundos


                } else {
                    // console.log("No se envio el mensaje");
                    // console.log(response.status, response.statusText);
                    setMensaje(false)
                }
            } catch (error) {
                // console.log(error);
                // console.error('Error al enviar el formulario:', error);
                setMensaje(false)
            }
        } else {
            setStatus(true)
            setMensaje(false)
            setSpiner(false)
            // console.log('Algunos campos están vacíos');
            // Manejar campos vacíos o nulos aquí
        }
    }



    const handleOpen = (imagen, title, description) => {
        setOpen(!open)
        setImagen(imagen)
        setTitle(title)
        setDescription(description)

    };

    const handleFilterProduct = (event) => {
        const filter = productos.filter(item => item.categoria == event)
        setProducto(filter)
    }
    return (

        <>
            <section id='banner-productos'>
                <div className="bg-[url('/principal/cotizar.jpg')] h-[50vh] bg-cover bg-center bg-no-repeat">

                </div>
            </section>

            <div className='p-20'>


                <div className="w-full mb-10">
                        <Typography as={"h1"} variant='h1' className='text-center font-normal uppercase '>Cotizar Equipos</Typography>
                </div>

                <div className={`w-full mt-20 grid ${windowWidth < 900 ? "grid-cols-1" : "grid-cols-2"} gap-10`}>
                    <Button className='bg-blue-500 text-md uppercase' onClick={() => handleFilterProduct("laboratory")}>Refrigerador para Laboratorio</Button>
                    <Button className='bg-blue-500 text-md uppercase' onClick={() => handleFilterProduct("pharmacy")}>Refrigerador para Farmacia</Button>
                </div>

                <div className="w-full">

                    {
                        producto.map((item, index) => (
                            <div key={index} className={`w-full ${windowWidth < 980 ? "" : "flex items-center justify-center"} shadow-xl gap-5 mt-10`}>
                                <div className={`${windowWidth < 980 ? "w-full" : "w-[50%]"} `}>
                                    <img src={item.imagen} alt="" srcSet="" className={`mx-auto w-[50%]`} />
                                </div>
                                <div className="w-full p-10">
                                    <h5 className='mb-10 text-xl'>{item.title}</h5>
                                    <p className='mb-10'>{item.description}</p>

                                    <div className={`w-full ${windowWidth < 500 ? "" : "flex gap-5"}`}>
                                        <button onClick={() => handleOpen(item.imagen, item.title, item.description)} className={`${windowWidth < 500 ? "w-full mb-5" : ""} text-md bg-blue-500 py-2 px-4 rounded-t-lg text-white hover:-translate-y-1 transition-all duration-500 uppercase`}>Cotizar</button>

                                        <NavLink key={index}
                                            to={`/product/${item.id}`}>
                                            <div className="text-md text-center bg-blue-500 py-2 px-4 rounded-t-lg text-white hover:-translate-y-1 transition-all duration-500 uppercase">Ver Producto</div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <Dialog open={open} handler={handleOpen}>
                    <DialogBody>
                        <div className="w-full flex items-center mb-5 gap-10">
                            <div className="w-full">
                                <img src={imagen} alt="" srcSet="" />
                            </div>
                            <div className="">
                                <h1 className='text-xl mb-5'>{title}</h1>
                                <p className='text-sm'>{description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="mb-5">
                                <Input onChange={handleChange} name='nombre' label='Nombre Completo' className='mb-10'></Input>
                            </div>
                            <div className="mb-5">
                                <Input onChange={handleChange} name='empresa' label='Empresa' className=''></Input>
                            </div>
                            <div className="mb-5">
                                <Input onChange={handleChange} name='correo' label='Correo' className=''></Input>
                            </div>
                            <div className="mb-5">
                                <Input onChange={handleChange} name='telefono' label='Telefono' className=''></Input>
                            </div>
                            <div className="mb-5">
                                <Input onChange={handleChange} name='unidades' label='Cantidad de Unidades' className=''></Input>
                            </div>
                            {/* <div className="mb-5">
                                <Input label='Cantidad de Unidades' className=''></Input>
                            </div> */}
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="">
                                <Button className='bg-blue-500 px-10' onClick={handleData}> {spiner ? <Spinner className="h-5 w-5" /> : "Enviar"}</Button>
                            </div>
                            <div className="">
                                <Link to={"https://api.whatsapp.com/send/?phone=525511539289"} target='_blank' className='hover:underline ring-offset-2'>Contáctanos por WhatsApp</Link>
                            </div>
                        </div>

                        <div className="w-full">

                            <div className={`text-center text-md p-2 text-green-500  ${mensaje == true ? "" : "hidden"} transition-all duration-500`} id="exito">{"Muchas gracias, los datos han sido enviados. Nos pondremos en contacto contigo lo antes posible."}</div>
                            <div className={`text-center text-md p-2 text-red-500  ${status == true ? "" : "hidden"} transition-all duration-500`} id='warning'>{"Todos los campos son requeridos"}</div>
                        </div>
                    </DialogBody>

                </Dialog>
            </div>

        </>

    )
}

export default PageCotizar
