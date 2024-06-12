import React, { useState, useEffect, useContext } from 'react'
import { useRoutes, NavLink } from 'react-router-dom'
import { Drawer, Typography, IconButton } from '@material-tailwind/react'
import { navegadores } from './server'
import globalContext from './context/globalContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const { windowWidth } = useContext(globalContext)
    const [open, setOpen] = useState(false);


    const openDrawer = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <div className="w-full flex justify-between p-5 sticky top-0 z-50 bg-white">

            <div className={`${windowWidth < 590 ? "w-[30%]" : "w-[20%]"} flex justify-center`}>
                <img src="/logos/logo.svg" alt="logo" />
            </div>
            <ul className={`w-full flex justify-center items-center gap-10 ${windowWidth < 700 ? "hidden" : ""}`}>
                {
                    navegadores.map((item, index) => (
                        <li key={index} className='font-semibold' style={{ fontSize: "18px" }}>
                            <NavLink

                                to={item.ruta}
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : ''
                                }
                            >
                                {item.name}
                            </NavLink>

                        </li>
                    ))
                }
            </ul>
            {
                windowWidth < 700 ? <div className="w-full text-right">
                    <FontAwesomeIcon icon={faBars} size='xl' className='cursor-pointer' onClick={openDrawer}></FontAwesomeIcon>
                </div> : null
            }

            <Drawer
                placement="right"
                overlay={false}
                open={open}
                onClose={openDrawer}
                className="p-4"
            >
                <div className="mb-6 flex justify-between">
                    <div className="mt-48 ml-16 w-full">
                        {
                            navegadores.map((item, index) => (
                                <div key={index} className='font-semibold mt-4 ' style={{ fontSize: "18px" }}>
                                    <NavLink

                                        to={item.ruta}
                                        className={({ isActive }) =>
                                            isActive ? 'text-blue-500' : ''
                                        }
                                        onClick={openDrawer}
                                    >
                                        {item.name}
                                    </NavLink>

                                </div>
                            ))
                        }
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={openDrawer}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

            </Drawer>



        </div>
    )
}

export default Navbar
