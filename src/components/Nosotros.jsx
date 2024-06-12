import React, { useState, useContext, useEffect } from 'react'
import { Typography } from '@material-tailwind/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import globalContext from './context/globalContext';
import { certificados } from './server';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const PageNosotros = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { windowWidth } = useContext(globalContext)

  const [isElementVisible, setElementVisible] = useState(false);
  const [animation1, setAnimation1] = useState(false);

  const [isElementVisible2, setElementVisible2] = useState(false);
  const [animation2, setAnimation2] = useState(false);

  const [isElementVisible3, setElementVisible3] = useState(false);
  const [animation3, setAnimation3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('#nosotros1');

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
      const element = document.querySelector('#nosotros2');

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
      const element = document.querySelector('#nosotros3');

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
  }, [animation2]);


  const [imagenes, setImagenes] = useState([
    {
      id: 1,
      imagen: "/nosotros/07.jpeg",
      alt: "Fabrica"
    },
    {
      id: 2,
      imagen: "/nosotros/02.png",
      alt: "Fabrica"
    },

    {
      id: 4,
      imagen: "/nosotros/07.jpeg",
      alt: "Fabrica"
    },
    {
      id: 1,
      imagen: "/nosotros/07.jpeg",
      alt: "Fabrica"
    },
    {
      id: 2,
      imagen: "/nosotros/02.png",
      alt: "Fabrica"
    },

    {
      id: 4,
      imagen: "/nosotros/07.jpeg",
      alt: "Fabrica"
    },
  ])

  return (
    <div className='w-full overflow-hidden'>

      <div className="background-2 mb-20">

      </div>
      <div className="container mx-auto">
        <Typography as={"h1"} variant='h1' className='text-center font-normal uppercase mb-16'>Carebios</Typography>

        <div className={`w-full ${windowWidth < 1000 ? "" : " flex jsutify-center items-center"}`}>

          <div className="w-full" id='nosotros1'>
            <img src="/nosotros/principal.jpeg" alt="" className={`opacity-0 ${isElementVisible ? "izquierda" : ""}`} />
          </div>
          <div className={`w-full p-10 ${windowWidth < 1000 ? "mt-10" : "ml-24"}`}>

            <Typography as={'p'} variant='paragraph' className={`text-lg ${isElementVisible ? "derecha1" : ""}`}>
              <strong className='font-semibold text-xl uppercase'>Carebios </strong> es una empresa de alta tecnología
              con la tecnología de refrigeración como su núcleo, integrando investigación y desarrollo, fabricación, ventas y servicio.
            </Typography>
          </div>

        </div>


        <div className={`w-full mt-24 ${windowWidth < 1000 ? "" : " flex jsutify-center items-center"}`}>
          {
            windowWidth < 1000 ? <div className="w-[100%] p-10">
              <img src="/nosotros/04.jpeg" alt="" srcSet="" className={`opacity-0 ${isElementVisible2 ? "izquierda" : ""}`} />

            </div> : null
          }
          <div className="w-full p-10 text-justify" id='nosotros2'>
            <Typography as={'p'} variant='paragraph' className={`text-lg opacity-0 ${isElementVisible2 ? "izquierda" : ""}`}>
              Contamos con un equipo de profesionales con más de 10 años de experiencia en la industria de la refrigeración, quienes son
              eficientes y confiables para ofrecer soluciones asequibles a través de la innovación constante para lograr una mayor
              satisfacción del cliente de manera consistente. Nos apasiona proporcionar los productos más recientes y mejorados mediante una
              investigación y desarrollo continuos, con el fin de ofrecer la mejor experiencia de producto y servicio para nuestros clientes
              en todo el mundo.
            </Typography>
          </div>
          {
            windowWidth < 1000 ? null : <div className="w-[100%] p-10">
              <img src="/nosotros/04.jpeg" alt="" srcSet="" className={`w-full ${isElementVisible2 ? "derecha1" : ""}`} />

            </div>
          }
        </div>
        <div className="w-full p-10">
          <Typography as={'h3'} variant='h3' className='text-center uppercase font-normal' >
            Certificados
          </Typography>
        </div>

        <div className={`w-full grid ${windowWidth < 980 ? "grid-cols-1" : "grid-cols-3"} gap-10 mb-24 p-10`} id='nosotros3'>

          {
            certificados.map((item, index) => (
              <div className={`${windowWidth < 980 ? "w-full" : "w-[50%]"} shadow-xl ${isElementVisible3 ? "desde-arriba" : ""}`} key={index}>
                <img src={item.imagen} alt={item.alt} className={`w-full`} />
              </div>
            ))
          }

        </div>


        <div className={`w-full p-10 gap-10 ${windowWidth < 720 ? "" : "flex justify-center items-center"}`}>
          <div className={windowWidth < 720 ? "mt-10" : ""}>
            <img src="/logos/rohs.svg" alt="" className={`w-[50%] mx-auto ${isElementVisible3 ? "desde-arriba2" : ""}`} />
          </div>
          <div className={windowWidth < 720 ? "mt-10" : ""}>
            <img src="/logos/iso.svg" alt="" className={`w-[50%] mx-auto ${isElementVisible3 ? "desde-arriba2" : ""}`} />
          </div>
          <div className={windowWidth < 720 ? "mt-10" : ""}>
            <img src="/logos/ce.png" alt="" className={`w-[80%] mx-auto ${isElementVisible3 ? "desde-arriba2" : ""}`} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default PageNosotros
