import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Typography } from '@material-tailwind/react'
import { useRoutes, NavLink, Link } from 'react-router-dom'
import { navegadores } from './server'
import globalContext from './context/globalContext'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const { windowWidth } = useContext(globalContext)
    return (
        <div className={`w-full bg-[url('/principal/footer.jpg')] text-white`}>
            <div className={`w-full h-full grid ${windowWidth < 600 ? "grid-cols-1" : "grid-cols-3"}`}>
                
                <div className="p-10">

                    <div className="flex justify-center">
                        <img src="/logos/logo.svg" alt="" className='' width={250} height={100} />
                    </div>

                    <div className="w-full flex flex-wrap justify-center gap-10 mt-10">

                        <div className="">
                            <FontAwesomeIcon icon={faFacebook} size='2x' color='#3B5998' className='cursor-pointer'></FontAwesomeIcon>
                        </div>

                        <div className="">
                            <FontAwesomeIcon icon={faInstagram} size='2x' color='#DD2A7B' className='cursor-pointer'></FontAwesomeIcon>
                        </div>

                        <div className="">
                            <FontAwesomeIcon icon={faLinkedin} size='2x' color='#0077B5' className='cursor-pointer'></FontAwesomeIcon>
                        </div>

                        <div className="">
                            <FontAwesomeIcon icon={faPinterest} size='2x' color='#BD081C' className='cursor-pointer'></FontAwesomeIcon>
                        </div>

                    </div>

                    {
                        windowWidth < 600 ? null : <div className="w-full text-center">
                            <h5 className='mt-5'>Developed By: <Link to={"https://www.boom-partner.com/"} target='_blank'
                                className='ml-2 hover:underline'> Boom Growth Partner</Link></h5>
                        </div>
                    }
                </div>

                <div className="p-10">
                    <Typography variant='h5' className='text-left uppercase'>Contáctanos</Typography>
                    <Typography variant='paragraph' className='text-left mt-10'>C.P 55076 Ecatepec de Morelos, Edo de México</Typography>
                    <div className="flex mt-5 items-center">
                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        <Typography as={'p'} variant='paragraph' className='ml-5'>5534086252</Typography>
                    </div>
                    <div className="flex mt-5 items-center">
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                        <Typography as={'p'} variant='paragraph' className='ml-5'>contacto@thermologycorp.com</Typography>
                    </div>


                </div>

                <div className="p-10">
                    <Typography variant='h5' className='uppercase text-left'>Navegación</Typography>
                    <ul className='mt-10'>
                        {
                            navegadores.map((item, index) => (
                                <li key={index} className="" style={{ fontSize: "16px" }}>
                                    <NavLink
                                        className={"hover:underline"}

                                        to={item.ruta}

                                    >
                                        {item.name}
                                    </NavLink>

                                </li>
                            ))
                        }
                    </ul>


                </div>
                {
                    windowWidth < 600 ? <div className="">
                        <div className="w-full text-center">
                            <h5 className=''>Developed By: <Link to={"https://www.boom-partner.com/"} target='_blank' className='ml-2 hover:underline'>Boom Growth Partner</Link></h5>
                        </div>
                    </div> : null
                }



            </div>
        </div >
    )
}

export default Footer
