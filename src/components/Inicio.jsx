import React, { useState, useEffect, useRef, useContext } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import globalContext from './context/globalContext';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import required modules
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';
import { novedades } from './server';
import InfiniteScroller from './Infinite';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { faChalkboardUser, faFileSignature } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const PageInicio = () => {

    const { windowWidth } = useContext(globalContext)
    const [isElementVisible, setElementVisible] = useState(false);
    const [animation1, setAnimation1] = useState(false);

    const [isElementVisible2, setElementVisible2] = useState(false);
    const [animation2, setAnimation2] = useState(false);

    const [isElementVisible3, setElementVisible3] = useState(false);
    const [animation3, setAnimation3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#animados');

            if (element && !animation1) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation1(true)
                    setElementVisible(true);
                } else {
                    setElementVisible(false);
                }
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation1]);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#animados2');

            if (element && !animation2) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation2(true)
                    setElementVisible2(true);
                } else {
                    setElementVisible2(false);
                }
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation2]);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('#animados3');

            if (element && !animation3) {
                const elementPosition = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (elementPosition.top < windowHeight && elementPosition.bottom >= 0) {
                    setAnimation3(true)
                    setElementVisible3(true);
                } else {
                    setElementVisible3(false);
                }
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animation3]);


    const [swiperImages, setSwiperImages] = useState([
        {
            id: 1,
            imagen: "/swiperImages/01.webp",
            alt: "Imagen 1",
            title: "Primer Slide"
        },
        {
            id: 2,
            imagen: "/swiperImages/02.webp",
            alt: "Imagen 2",
            title: "Segundo Slide"
        },
        {
            id: 3,
            imagen: "/swiperImages/03.jpg",
            alt: "Imagen 3",
            title: "Tercero Slide"
        },
        {
            id: 4,
            imagen: "/swiperImages/04.jpg",
            alt: "Imagen 4",
            title: "Cuarto Slide"
        },
    ])

    const [swiperImages2, setSwiperImages2] = useState([
        {
            id: 1,
            imagen: "/clientes/01.jpg",
            alt: "Imagen 1",
            title: "Primer Slide"
        },
        {
            id: 2,
            imagen: "/clientes/02.jpg",
            alt: "Imagen 2",
            title: "Segundo Slide"
        },
        {
            id: 3,
            imagen: "/clientes/03.jpg",
            alt: "Imagen 3",
            title: "Tercero Slide"
        },
    ])

    const [clientes, setClientes] = useState([
        {
            id: 1,
            imagen: "/clientes/01.jpg",
            alt: "Imagen 1",
            title: "Primer Slide"
        },
        {
            id: 2,
            imagen: "/clientes/02.jpg",
            alt: "Imagen 2",
            title: "Segundo Slide"
        },
        {
            id: 3,
            imagen: "/clientes/03.jpg",
            alt: "Imagen 3",
            title: "Tercero Slide"
        },
    ])

    const [products, setProducts] = useState([])

    const handleFilter1 = (event) => {
        const newFilter = topProductos.filter(item => item.categoria == event)
        setProducts(newFilter);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='w-full'>
            <section>
                <Swiper
                    // pagination={true}
                    autoplay={{
                        delay: 5000, // tiempo en milisegundos antes de cambiar al siguiente slide
                        disableOnInteraction: false, // continua el autoplay incluso después de una interacción del usuario

                    }}
                    navigation={true}
                    modules={[EffectFade, Pagination, Navigation, Autoplay]}
                    grabCursor={true}
                    effect='fade'
                    className="swiper-inicio">
                    {
                        swiperImages.map((item, index) => (

                            <SwiperSlide key={index} className='swiper-slide' >
                                <img src={item.imagen} alt="laboratorio" />
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </section>


            <section id='vistaElegir'>
                <div className="background-1">
                    <div className={`w-full ${windowWidth < 1090 ? "" : "flex justify-center"}`}>
                        <div className={`${windowWidth < 1090 ? "w-full" : "w-[50%]"} `}>
                            <div id='animados3' className=" mb-10 p-10">

                                <Typography as={'h1'} variant='h1' className='text-center font-normal uppercase '>POR QUÉ ELEGIR CAREBIOS</Typography>
                            </div>
                            <div className={`${windowWidth < 600 ? "" : " rounded-r-full"} p-14 bg-blue-300 bg-opacity-50 ${isElementVisible3 ? "izquierda" : ""}`}>

                                <h5 style={{ fontSize: "20px" }}>
                                    Carebios es un proveedor preferido tanto en ventas como en servicios de refrigeradores médicos construidos específicamente, por muchos proveedores de salud gubernamentales y privados, así como organismos reguladores.

                                    Estamos orgullosos de tener una reputación en la industria como los expertos en refrigeración médica, y eso es porque en Refrigeración Médica es en lo que nos especializamos.

                                    Carebios está comprometido en ayudarle a alcanzar y mantener altos estándares en la conservación de sus productos médicos refrigerados de acuerdo con los protocolos de la cadena de frío.
                                </h5>
                            </div>
                        </div>

                        <div className={`${windowWidth < 1090 ? "w-full" : "w-[50%]"}  overflow-hidden p-10`}>

                            <div className={`hover:bg-[url('/principal/forma1.png')] hover:scale-105 cursor-pointer ${windowWidth < 500 ? "p-10" : "h-[25vh] flex items-center justify-center"} bg-cover transition-all duration-500`}>
                                {/* <img src="/principal/footer.jpg" alt="forma2" className="w-full" /> */}
                                <FontAwesomeIcon icon={faFileSignature} size='3x' color='#3381ff'></FontAwesomeIcon>
                                <p className='ml-10'>Hemos cubierto casi todas las necesidades de la cadena de frío médica, y la mayoría de nuestros productos cuentan con varios modelos de diferentes capacidades.
                                    Además, planeamos añadir dos o tres modelos nuevos cada año para satisfacer las diversas necesidades de los usuarios.</p>
                            </div>
                            <div className={`hover:bg-[url('/principal/forma1.png')] hover:scale-105 cursor-pointer ${windowWidth < 500 ? "p-10" : "h-[25vh] flex items-center justify-center"} bg-cover transition-all duration-500`}>
                                <FontAwesomeIcon icon={faChalkboardUser} size='3x' color='#3381ff'></FontAwesomeIcon>
                                <p className='ml-10'>Esperamos lograr una mayor presencia en el mercado internacional. Actualmente, tenemos las condiciones para competir con algunas grandes marcas en el mercado, y estamos invirtiendo muchos recursos en marketing para construir gradualmente la red de ventas.</p>
                            </div>
                            <div className={`hover:bg-[url('/principal/forma1.png')] hover:scale-105 ${windowWidth < 500 ? "p-10" : "h-[25vh] flex items-center justify-center"} bg-cover cursor-pointer transition-all duration-500`}>
                                <FontAwesomeIcon icon={faHandshakeAngle} size='3x' color='#3381ff'></FontAwesomeIcon>
                                <p className='ml-10'>Seremos capaces de realizar una producción más eficiente y una inspección de calidad más rigurosa para asegurar una mayor capacidad de producción.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id='animados'>
                <div className={`w-full ${windowWidth < 825 ? "" : "flex justify-center items-center"} bg-[url('/fondo/azul.jpg')] p-24 text-white`}>

                    <div className={`w-full p-5 ${windowWidth < 500 ? "" : "h-64"}`}>
                        <div className="">
                            <img src="/logos/02.svg" alt="" width={100} srcSet="" className={`mx-auto ${isElementVisible ? "image-rotate" : ""}`} />
                        </div>
                        <div className="mt-10">
                            <Typography className='text-center object-fade' as={'h5'} variant='h5'>12,500 m2</Typography>
                            <Typography className='text-center object-fade' as={'p'} variant='paragraph'>El área total de nuestras instalaciones</Typography>
                        </div>
                    </div>

                    <div className={`w-full p-5 ${windowWidth < 500 ? "" : "h-64"}`}>
                        <img src="/logos/03.svg" alt="" width={100} height={100} srcSet="" className={`mx-auto ${isElementVisible ? "image-rotate2" : ""}`} />
                        <Typography className='text-center mt-10 object-fade2' as={'h5'} variant='h5'>15,000 Equipos</Typography>
                        <Typography className='text-center object-fade2' as={'p'} variant='paragraph'>Nuestra capacidad de producción anual</Typography>
                    </div>
                    <div className={`w-full p-5 ${windowWidth < 500 ? "" : "h-64"}`}>
                        <img src="/logos/04.svg" alt="" width={100} height={100} srcSet="" className={`mx-auto ${isElementVisible ? "image-rotate3" : ""}`} />
                        <Typography className='text-center mt-6 object-fade3' as={'h5'} variant='h5'>30 +</Typography>
                        <Typography className='text-center object-fade3' as={'p'} variant='paragraph'>Número total de países a los que exportamos</Typography>

                    </div>
                </div>
            </section>

            <section id='animados2'>
                <div className={`w-full grid ${windowWidth < 890 ? "grid-cols-1" : "grid-cols-2"} p-10 gap-10`}>
                    {
                        novedades.map((item, index) => (
                            <Card key={index} className={`max-w-[30rem] mx-auto overflow-hidden ${isElementVisible2 ? "desde-arriba" : ""}`}>
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="m-0 rounded-none"
                                >
                                    <img
                                        src={item.imagen}
                                        alt={item.alt}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h4" color="blue-gray" className='uppercase'>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                        {item.description}
                                    </Typography>
                                </CardBody>

                            </Card>
                        ))
                    }


                </div>
            </section>

            <section>
                <div className="w-full p-10 flex justify-center">
                    <Typography as={'h3'} variant='h3' className='uppercase font-normal text-center'>Nuestros productos han sido exportados a más de 30 países y regiones</Typography>
                </div>
                <div className="w-full flex ">
                    <InfiniteScroller />

                </div>
            </section>
        </div>
    )
}

export default PageInicio
