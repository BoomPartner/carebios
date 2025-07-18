import { Typography, Input, Textarea, Button, Spinner } from '@material-tailwind/react'
import React, { useState, useContext, useEffect } from 'react'
import globalContext from './context/globalContext';
const PageContacto = () => {
  const [mensaje, setMensaje] = useState(null)
  const [status, setStatus] = useState(null)
  const [spiner, setSpiner] = useState(false)

  const { windowWidth } = useContext(globalContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    nombre: null,
    correo: null,
    telefono: null,
    empresa: null,
    ciudad: null,
    pais: null,
    mensaje: null,
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
      setStatus(false)
      setSpiner(true)
      // console.log('Todos los campos están completos');
      // console.log(formData);

      try {
        console.log(formData);
        console.log(typeof formData);
        const response = await fetch("https://tecknum.com/CAREBIOS_ENDPOINT_FORM/contactForm.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        })
        if (response) {
          console.log("mensaje enviado");
          const data = await response.json()
          console.log(data);
          setMensaje(true)
          setSpiner(false)
          setTimeout(() => {
            setMensaje(false); // Cambiar mensaje a false o null después de 3 segundos
          }, 3000); // 3000 milisegundos = 3 segundos


        } else {
          console.log("No se envio el mensaje");
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

  return (
    <div className='w-full'>

      <div className="background-3"></div>

      <div className={`w-full mx-auto ${windowWidth < 1330 ? "" : "container flex"}`}>


        <div className={`${windowWidth < 1330 ? "w-full flex justify-center" : "w-[50%]"} p-10`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8906.796419999217!2d-99.01160786018363!3d19.587365298415737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fb0ac1000021%3A0x43deda9a1fa9aa74!2sThermology%20Corporation%20S.A.%20de%20C.V.!5e0!3m2!1ses!2smx!4v1752868712827!5m2!1ses!2smx"
            width={windowWidth < 1330 ? "1000" : "600"} height="450" style={{ border: "0px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="w-full mx-auto p-10">
          <Typography as={'h1'} variant="h3" className="text-left uppercase font-normal">
            Contacto
          </Typography>
          <Typography as={'h5'} variant='paragraph' className='mt-5 uppercase'>Thermology Corporation S.A de C.V.</Typography>
          <Typography as={"p"} variant='paragraph' className='mt-2'>
            Calle Patagonia Lt 3 A Mz.10  Colonia Las Americas IV
          </Typography>

          <Typography as={"p"} variant='paragraph' className='w-full mt-2'>C.P 55076 Ecatepec de Morelos, Edo de México</Typography>

          <Typography as={"p"} variant='paragraph' className='mt-2'>55 1153 9289</Typography>

          <div className="w-full flex justify-center items-center">
            <img src="/logos/logo.png" alt="logo-thermology" className='mt-4' width={200} height={200} />
          </div>

          <Typography as={'h5'} variant='h5' className='mt-10'>
            Envíanos un mensaje
          </Typography>

          <div className={`w-full mt-5 grid ${windowWidth < 500 ? "grid-cols-1" : "grid-cols-2"} gap-5`}>


            <Input required onChange={handleChange} name='nombre' label='Nombre'></Input>
            <Input required onChange={handleChange} name='telefono' label='Telefono'></Input>
            <Input required onChange={handleChange} name='correo' label='Email'></Input>
            <Input required onChange={handleChange} name='empresa' label='Empresa'></Input>
            <Input required onChange={handleChange} name='ciudad' label='Ciudad'></Input>
            <Input required onChange={handleChange} name='pais' label='País'></Input>


          </div>
          <div className="mt-5">
            <Textarea name='mensaje' label='Mensaje' size='lg' rows={4} maxLength={150} onChange={handleChange}></Textarea>
          </div>

          <div className="mt-5">
            <Button className='bg-blue-500 px-10' onClick={handleData}> {spiner ? <Spinner className="h-5 w-5" /> : "Enviar"}</Button>
          </div>

          <div className={`text-center text-md p-2 text-green-500 ${mensaje == true ? "" : "hidden"} transition-all duration-500`} id="exito">{"Muchas gracias, tu mensaje ha sido enviado."}</div>
          <div className={`text-center text-md p-2 text-red-500  ${status == true ? "" : "hidden"} transition-all duration-500`} id='warning'>{"Todos los campos son requeridos"}</div>


        </div>
      </div>
    </div>
  )
}
export default PageContacto
