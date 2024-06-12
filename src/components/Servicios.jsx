import React, { useContext, useState, useEffect } from 'react'
import { Typography } from '@material-tailwind/react'
import { servicios } from './server'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'
import globalContext from './context/globalContext'
import { NavLink } from 'react-router-dom'
const PageServicios = () => {

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={`w-full overflow-hidden ${windowWidth < 980 ? "p-8" : "p-20"}`}>

      <Typography as={'h1'} variant='h1' className={`uppercase font-normal mb-10 text-center ${windowWidth < 980 ? "text-lg" : ""}`}>Nuestros Servicios</Typography>
      <div className={`w-full gap-10 ${windowWidth < 600 ? "" : "grid grid-cols-3"}`}>
        {
          servicios.map((item) => (
            <div key={item.id} className={`w-full shadow-xl transform duration-500 ${item.clase} ${windowWidth < 600 ? "mt-10" : ""}`}>
              <div className="relative group h-full"> {/* Asegúrate de agregar la clase 'group' aquí */}
                <img src={item.imagen} width={500} height={500} className="w-full h-full" alt={item.title} />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-50 hover:text-[#c89919] transform duration-300 p-4 cursor-pointer">
                  <div className={`uppercase opacity-0 h-full text-white text-center flex justify-center items-center ${windowWidth < 980 ? "text-lg" : "text-3xl"} group-hover:opacity-80 transform duration-500`}>
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="w-full">

        <div className={`w-full ${windowWidth < 980 ? "" : "flex justify-cenetr items-center"} p-10`} id='animados'>
          {
            windowWidth < 980 ? null : <div className={`w-full bg-white z-10 ${windowWidth < 980 ? "mb-20" : "p-10"}`}>
              <img src="/servicios/04.jpg" width={1200} height={1200} alt="" className={`w-full ${isElementVisible ? "izquierda" : ""}`} />
            </div>
          }
          <div className={`w-full bg-white ${isElementVisible ? "derecha1" : ""}`}>
            <Typography as={'h1'} variant='h1' className={`uppercase font-normal mb-10 ${windowWidth < 980 ? "w-full text-lg" : ""}`}> Calibración y Validación de Equipos</Typography>
            <Typography as={'p'} variant='pargraph' className='mb-10'>
              En Thermology, no solo distribuimos equipos de refrigeración y laboratorio; ofrecemos una experiencia completa con servicios de instalación, mantenimiento y soporte técnico.
              Nuestro equipo, con años de experiencia en la industria, está dedicado a proporcionar un servicio de calidad y asistencia continua, asegurando que su equipo funcione de manera óptima y segura.
            </Typography>
            <NavLink
              to={"/contact"}
              className={"p-2 px-10 text-md uppercase efecto-boton z-10"}
            >Contacto</NavLink>
          </div>

          {
            windowWidth < 980 ? <div className={`w-full bg-white z-10 mt-20`}>
              <img src="/servicios/04.jpg" width={1200} height={1200} alt="" className={`w-full ${isElementVisible ? "izquierda" : ""}`} />
            </div> : null
          }
        </div>

        <div className={`w-full ${windowWidth < 980 ? "" : "flex items-center justify-center"}`}>

          <div className="w-full" id='animados2'>
            <Typography as={'h3'} variant='h3' className={`uppercase font-normal mb-10 ${windowWidth < 980 ? "text-lg" : ""}`}>¿Cuál es el objetivo de realizar el mantenimiento preventivo a tus equipos de laboratorio?</Typography>

            <Typography as={'p'} variant='pargraph' className='mb-5'>El objetivo del MANTENIMIENTO PREVENTIVO es un procedimiento periódico para minimizar el riesgo de fallo y asegurar la continua operación de los equipos,
              logrando de esta manera extender su vida útil.</Typography>
            <Typography as={'p'} variant='pargraph' className='mb-5'>Equipos a los cuales se les puede realizar un mantenimiento preventivo y/o correctivo</Typography>

            <ul className='font-normal list-disc ml-5'>
              <li className='text-md'>EQUIPO GENERADOR DE AGUA HELADA (CHILLER).</li>
              <li className='text-md'>BAÑO MARÍA..</li>
              <li className='text-md'>GABINETE DE SEGURIDAD BIOLÓGICA.</li>
              <li className='text-md'>CAMPANA VERTICAL.</li>
              <li className='text-md'>CAMPANA DE FLUJO LÁMINAR VERTICAL.</li>
              <li className='text-md'>CAMPANA DE FLUJO LÁMINAR HORIZONTAL.</li>
              <li className='text-md'>CENTRÍFUGA DE MESA.</li>
              <li className='text-md'>CENTRÍFUGA DE MESA REFRIGERADA.</li>
              <li className='text-md'>CENTRÍFUGA DE PISO.</li>
              <li className='text-md'>INCUBADORA</li>
              <li className='text-md'>INCUBADORA DE CO₂</li>
              <li className='text-md'>INCUBADORA REFRIGERADA</li>
              <li className='text-md'>AIRE ACONCIONADO MINI SPLIT</li>
              <li className='text-md'>REFRIGERADOR</li>
              <li className='text-md'>CONGELADOR, ULTRACONGELADOR</li>
              <li className='text-md'>CÁMARA DE CONGELACIÓN, CÁMARA DE ESTABILIDAD, CÁMARA FRIGORIFICA (DE REFRIGERACIÓN)</li>
              <li className='text-md'>AGITADOR ORBITAL</li>
            </ul>|

          </div>

          <div className="w-full p-10">
            <img src="/servicios/05.jpg" alt="Refrigerador" width={800} height={800} className={`mx-auto ${isElementVisible2 ? "derecha1" : ""}`} />
          </div>
        </div>

        <div className={`w-full ${windowWidth < 980 ? "" : "flex items-center justify-center"} p-10`}>

          {
            windowWidth < 980 ? null : <div className="w-full bg-white z-20" id='animados3'>
              <img src="/servicios/06.webp" alt="Refrigerador" width={800} height={800} className={`${isElementVisible3 ? "object-fade" : ""} hover:scale-105 transition-all duration-500 `} />
            </div>
          }

          <div className="">
            <Typography as={'h3'} variant='h3' className='uppercase font-normal mb-10'>Pólizas de mantenimiento</Typography>
            <Typography as={'p'} variant='pargraph' className='mb-5 text-lg'>Las pólizas de mantenimiento, están diseñadas para incrementar la vida útil y desempeño de su equipo, además de generar un historial del comportamiento.</Typography>
            <Typography as={'p'} variant='pargraph' className='mb-5 text-lg'>Beneficios del mantenimiento preventivo.</Typography>

            {/* <ul className='mb-10 text-lg'>
              <li> <FontAwesomeIcon icon={faMinus} color='#008fde' size='xl' className='rotate-90'></FontAwesomeIcon> Historial del comportamiento y rendimiento del equipo.</li>
              <li> <FontAwesomeIcon icon={faMinus} color='#008fde' size='xl' className='rotate-90'></FontAwesomeIcon> Reducción costos en cuanto a mantenimiento correctivos.</li>
              <li> <FontAwesomeIcon icon={faMinus} color='#008fde' size='xl' className='rotate-90'></FontAwesomeIcon> Al darle mantenimiento preventivo a tu equipo maximizas su tiempo de vida útil.</li>
            </ul> */}

            <ul className=''>
              <li className='mb-4 text-md'> <FontAwesomeIcon icon={faCheck} color='gray' size='xl' className='mr-4'></FontAwesomeIcon> Historial del comportamiento y rendimiento del equipo.</li>
              <li className='mb-4 text-md'> <FontAwesomeIcon icon={faCheck} color='gray' size='xl' className='mr-4'></FontAwesomeIcon> Reducción costos en cuanto a mantenimiento correctivos.</li>
              <li className='mb-4 text-md'> <FontAwesomeIcon icon={faCheck} color='gray' size='xl' className='mr-4'></FontAwesomeIcon> Al darle mantenimiento preventivo a tu equipo maximizas su tiempo de vida útil.</li>
            </ul>

            <div className="mt-10">
              <a
                href={"https://thermologycorp.com/"}
                target='_blank'
                className={"p-2 px-10 text-md efecto-boton z-10 uppercase"}
              >Conocer más</a>
            </div>

          </div>

          {
            windowWidth < 980 ? <div className="w-full" id='animados3'>
              <img src="/servicios/06.webp" alt="Refrigerador" width={800} height={800} className={`${isElementVisible3 ? "object-fade" : ""} hover:scale-105 transition-all duration-500 `} />
            </div> : null
          }

        </div>



      </div>
    </div>
  )
}

export default PageServicios
