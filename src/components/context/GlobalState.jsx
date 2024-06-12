import { useEffect, useState } from "react";
import globalContext from "./globalContext";

const GlobalState = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(0)
    
    const handleWindow = () => {
        const widthWindow = window.innerWidth;
        setWindowWidth(widthWindow)

    }
    useEffect(() => {
        if (typeof window !== undefined) {
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleWindow)

            return () => window.removeEventListener("resize", handleWindow)
        }
    }, [])

    return (
        <globalContext.Provider value={{ windowWidth }}>
            {children}
        </globalContext.Provider>
    )
}

export default GlobalState