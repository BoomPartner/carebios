

export const novedades = [
  {
    d: 1,
    imagen: "/principal/marcas.jpg",
    alt: "marcas",
    title: "Localización de marcas internacionales",
    description:
      "CareBios, como el centro líder mundial en el desarrollo y fabricación de equipos de refrigeración. Cuenta con oficinas de muchas marcas de proveedores de piezas bien conocidas a nivel mundial, para proporcionarnos servicios de calidad.",
    categoria: "conversation",
  },
  {
    id: 2,
    imagen: "/principal/team.jpg",
    alt: "Suppliers",
    title: "La gestión de los proveedores",
    description:
      "Hemos mantenido buenas relaciones a largo plazo con varios proveedores de piezas en la industria, lo que nos ayudará a mejorar continuamente la calidad, la investigación y el desarrollo de nuevos productos.",
    categoria: "conversation",
  },
];

export const navegadores = [
  {
    id: 1,
    name: "Inicio",
    ruta: "/",
  },
  {
    id: 2,
    name: "Productos",
    ruta: "/products",
  },
  {
    id:5,
    name:"Servicios",
    ruta: "/services"
  },
  {
    id: 3,
    name: "Cotizar",
    ruta: "/cotizar",
  },
  {
    id: 4,
    name: "Nosotros",
    ruta: "/about",
  },
  // {
  //   id: 5,
  //   name: "Blog",
  //   ruta: "/blog",
  // },

  {
    id: 6,
    name: "Contacto",
    ruta: "/contact",
  },
];

export const logos = [
  {
    id: 1,
    imagen: "/productos/laboratory/01.jpg",
    alt: "Refrigerador 1",
    title: "Liofilizador de laboratorio",
  },
  {
    id: 2,
    imagen: "/productos/laboratory/02.jpg",
    alt: "Refrigerador 2",
    title: "Fabricador de hielo en escamas",
  },
];

export const certificados = [
  {
    id: 1,
    imagen: "/nosotros/image55.png",
    alt: "certificados",
  },
  {
    id: 1,
    imagen: "/nosotros/image56.png",
    alt: "certificados",
  },
  {
    id: 1,
    imagen: "/nosotros/image57.png",
    alt: "certificados",
  },
  {
    id: 1,
    imagen: "/nosotros/image58.png",
    alt: "certificados",
  },
  {
    id: 1,
    imagen: "/nosotros/image60.png",
    alt: "certificados",
  },
];

export const productos = [
  {
    id: 1,
    imagen: "/productos/nueva/01.jpg",
    alt: "",
    title: `Grupo de Almacenamiento de Energía`,
    categoria: "pharmacy",

    description: `El Grupo de Almacenamiento de Energía incluye un inversor de potencia y un grupo de baterías de fosfato de hierro y litio. 
    Ha sido diseñado para proporcionar energía de respaldo o un sistema de almacenamiento de energía. 
    Posee excelente seguridad, alta densidad energética, 
    larga vida útil, rendimiento en un amplio rango de temperaturas, excelente seguridad y alta fiabilidad.`,
    features: [
      "Rendimiento Confiable: Confía en el suministro de energía consistente y fiable para proteger tu equipo valioso",
      "Interfaz Amigable para el Usuario: Monitorea y gestiona fácilmente tu situación energética con nuestra interfaz intuitiva, proporcionándote el control que necesitas.",
      " Elige nuestro Respaldo de Batería para un suministro de energía ininterrumpido y eleva tu confianza al enfrentar desafíos de energía. Asegura la seguridad y continuidad de tus operaciones con nuestra avanzada tecnología UPS."
    ]
  },

  {
    id: 2,
    imagen: "/productos/nueva/02.jpg",
    alt: "",
    categoria: "pharmacy",
    title: `Estación de Energía Portátil`,

    description: `El Grupo de Almacenamiento de Energía incluye un inversor de potencia y un grupo de baterías de fosfato de hierro y litio. Ha sido diseñado para proporcionar energía de respaldo o un sistema de almacenamiento de energía. Posee excelente seguridad, alta densidad energética, larga vida útil, rendimiento en un amplio rango de temperaturas, excelente seguridad y alta fiabilidad.`,

    control_temperatura: `Rendimiento Confiable: Confía en el suministro de energía constante y fiable para proteger tu equipo valioso.

    Interfaz Amigable para el Usuario: Monitorea y gestiona fácilmente tu situación energética con nuestra interfaz intuitiva, proporcionándote el control que necesitas.

    Elige nuestro Respaldo de Batería para un suministro de energía ininterrumpido y eleva tu confianza al enfrentar desafíos de energía. Asegura la seguridad y continuidad de tus operaciones con nuestra avanzada tecnología UPS.`,

    control_seguridad: ``,

    sistema_rerigeracion: ``,
  },

  {
    id: 3,
    imagen: "/productos/nueva/03.jpg",
    alt: "",
    title: `Refrigerador de Farmacia - 390L`,
    categoria: "pharmacy",

    description: `El refrigerador de farmacia cuenta con descongelación automática y circulación de aire forzado, adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, compañías farmacéuticas e institutos de investigación. Está diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de análisis y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, pantalla LED grande que muestra claramente la temperatura interna, y fácil de ver."
    "La temperatura interna puede ajustarse en un rango de 2℃ a 8℃ con incrementos de 0.1℃."
    "Múltiples sensores para mostrar o controlar la temperatura."
    "Registro del valor de la temperatura más baja y más alta registrada.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de fallo de energía, bajo voltaje de la batería de respaldo. Sistema de alarma por exceso de temperatura, configura la temperatura de alarma según los requisitos."

    "Tres métodos de alarma: alarma sonora (buzzer), alarma visual intermitente y alarma remota."
    
    "Función de protección: retardo al encender, tiempo entre paradas."
    
    "Sistema de monitoreo del registrador de temperatura (Opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marca reconocida y alta eficiencia."
    "Circulación de aire forzado para un gran flujo de aire, con ductos de aire especiales que garantizan la consistencia de la temperatura interna."
    "Gran diseño del área del evaporador, con fuerte capacidad de enfriamiento y alta uniformidad de temperatura, mientras suprime efectivamente la formación de escarcha y reduce el proceso de desescarche."
    "Refrigerante libre de CFC/HCFC.`,

    ergonomico: `Cerradura de seguridad en la puerta para prevenir el acceso no autorizado.
    Función de descongelación automática que garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad.
    Diseño de voltaje amplio de 192V a 242V.
    Iluminación LED interna y diseño de ruedas.
    Puerta de vidrio sin condensación.
    Diseño de estantes ajustables.
    Puerta con espuma es opcional.
    Tope en la parte trasera contra la pared trasera`,
  },

  {
    id: 4,
    imagen: "/productos/nueva/04.jpg",
    alt: "",
    categoria: "pharmacy",

    title: `Congelador portátil ULT de -86℃`,

    description: `Cuando explores nuestra colección completa de congeladores y refrigeradores para uso de laboratorio, encontrarás modelos de sobremesa, verticales y bajo mostrador, en versiones de puertas sólidas y de vidrio. Cada producto de alto rendimiento cuenta con un rendimiento altamente certificado para satisfacer una variedad de necesidades de almacenamiento en frío. Confiados por profesionales de todo el país, 
    nuestros innovadores congeladores y refrigeradores de laboratorio establecen el estándar en calidad y asequibilidad.`,

    features: `Tecnología patentada de ultra baja temperatura, rendimiento superior (refrigeración potente, enfriamiento rápido y temperatura más baja), alta eficiencia y bajo consumo de energía.
    Pantalla digital de temperatura, la temperatura dentro del congelador es fácil de visualizar.
    Alarmas de alta/baja temperatura y fallo de sensor, para conocer las condiciones reales dentro del congelador en todo momento.
    Doble junta en las puertas y aislamiento de espuma gruesa, buena aislación térmica y ahorro de energía.
    Equipado con ruedas, fácil de mover.
    Refrigerantes y agentes de espumación libres de CFC, ecológicos y respetuosos con el medio ambiente.`,
  },

  {
    id: 5,
    imagen: "/productos/nueva/05.jpg",
    alt: "",
    categoria: "pharmacy",
    title: `Refrigerador y congelador combinado con puerta de vidrio de -25℃ a +4℃.`,

    description: `
    Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación.
    
    Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de análisis y materiales de laboratorio.`,

    control_temperatura: `
    Control por microprocesador, pantalla LED grande que muestra claramente la temperatura interna y de fácil visualización.
    
    La temperatura interna puede ajustarse en un rango de 2℃ a 8℃ y de -10℃ a -25℃, con incrementos de 0.1℃.
    
    Registro de los valores de temperatura más baja y más alta registrados.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de fallo de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma por exceso de temperatura, configura la temperatura de alarma según los requisitos.

    Tres métodos de alarma: alarma sonora (buzzer), alarma visual intermitente y alarma remota.
    
    Función de protección: retardo al encender, tiempo entre paradas.`,

    sistema_rerigeracion: `Compresor y ventilador de marca famosa y alta eficiencia, con un efecto de refrigeración muy eficiente.

    Circulación de aire forzado para un gran flujo de aire, con conductos de aire especiales que garantizan la consistencia de la temperatura interna.
    
    Gran diseño del área del evaporador, con fuerte capacidad de enfriamiento y alta uniformidad de temperatura, mientras suprime efectivamente la formación de escarcha y reduce el proceso de desescarche.
    
    Refrigerante libre de CFC/HCFC.`,

    ergonomico: `Cerradura de seguridad en la puerta para prevenir el acceso no autorizado.

    La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad.
    
    Diseño de voltaje amplio de 192V a 242V.
    
    Iluminación LED interna y diseño con ruedas.
    
    Diseño de estantes ajustables.
    
    Puerta de vidrio sin condensación.
    
    Puerta con espuma es opcional.
    
    Tope en la parte trasera contra la pared trasera.`,
  },

  {
    id: 6,
    imagen: "/productos/nueva/06.jpg",
    alt: "",

    categoria: "pharmacy",
    title: `Congelador vertical ULT de -86℃ - 100L.`,

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede instalarse en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas químicas y electrónicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, pantalla LED grande que muestra claramente la temperatura interna y de fácil visualización.

    La temperatura interna puede ajustarse en un rango de -40℃ a -86℃, con incrementos de 0.1℃.
    
    Cerradura y contraseña para protección y prevenir el ajuste arbitrario de los parámetros operativos.
    
    Opcionalmente disponible con sistema de pantalla táctil LCD a color de 7 pulgadas.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, fallo del sensor, alarma de fallo de energía, bajo voltaje de la batería de respaldo, sistema de alarma por exceso de temperatura, configura la temperatura de alarma según los requisitos.

    Tres métodos de alarma: alarma sonora (buzzer), alarma visual intermitente y alarma remota.
    
    Función de protección: retardo al encender, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología optimizada de refrigeración en cascada, compresor SECOP para alcanzar un efecto de refrigeración elevado;

    Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía;
    
    Paneles de aislamiento V.I.P para asegurar el rendimiento del aislamiento;
    
    Aislamiento integral de espuma de poliuretano libre de CFC;
    
    Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomico: `Cerradura de seguridad en la puerta para prevenir el acceso no autorizado.

    Diseño de voltaje amplio de 192V a 242V.
    
    Puertas internas dobles para reducir la pérdida de aire frío después de abrir la puerta.
    
    Adecuado para cajas de congelador estándar internacionales de 2" y 3"; diseño de puerto con equilibrio de presión, fácil de abrir la puerta.
    
    Ruedas de tipo pesado con bloqueo y tornillo ajustable, fácil de mover y fijar.
    
    Diseño ultra-simple del filtro del condensador, conveniente para mantenimiento y limpieza.`,
  },

  {
    id: 7,
    imagen: "/productos/nueva/07.jpg",
    alt: "",

    categoria: "pharmacy",

    title: `Congelador vertical ULT de -86℃ - 990L.`,

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede instalarse en instituciones como bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesquería marina.`,

    control_temperatura: `Control por microprocesador, pantalla LED grande que muestra claramente la temperatura interna y de fácil visualización.

La temperatura interna puede ajustarse en un rango de -40℃ a -86℃, con incrementos de 0.1℃.

Cerradura y contraseña para protección y prevenir el ajuste arbitrario de los parámetros operativos.

Opcionalmente disponible con sistema de pantalla táctil LCD a color de 7 pulgadas.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, fallo del sensor, alarma de fallo de energía, bajo voltaje de la batería de respaldo, sistema de alarma por exceso de temperatura, configura la temperatura de alarma según los requisitos.

    Tres métodos de alarma: alarma sonora (buzzer), alarma visual intermitente y alarma remota.
    
    Función de protección: retardo al encender, tiempo entre paradas.`,

    sistema_rerigeracion: `efecto de refrigeración.

    Intercambiador de calor especialmente diseñado, con transferencia de calor de alta eficiencia y conservación de energía.
    
    Paneles de aislamiento V.I.P para asegurar el rendimiento del aislamiento.
    
    Aislamiento integral de espuma de poliuretano libre de CFC.
    
    Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomico: `
    Cerradura de seguridad en la puerta para prevenir el acceso no autorizado.
    
    Diseño de voltaje amplio de 192V a 242V.
    
    Puertas internas dobles para reducir la pérdida de aire frío después de abrir la puerta.
    
    Adecuado para cajas de congelador estándar internacionales de 2" y 3"; diseño de puerto con equilibrio de presión, fácil de abrir la puerta.
    
    Ruedas de tipo pesado con bloqueo y tornillo ajustable, fácil de mover y fijar.
    
    Diseño ultra-simple del filtro del condensador, conveniente para mantenimiento y limpieza.`,
  },

  {
    id: 8,
    imagen: "/productos/nueva/08.jpg",
    alt: "",
    title: `-25°C/+4 Frigorífico y congelador combinados con puerta de espuma`,
    categoria: "pharmacy",

    description: `Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de cría de animales, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicamentos, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C y -10 °C ~ -25 °C, con un incremento de 0,1; El registro de valores registrados de temperatura más baja y más alta.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de temperatura alta, alarma de temperatura baja, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de temperatura excesiva, establecer la temperatura de alarma según los requisitos.

    Métodos de alarma: alarma por zumbador, alarma visual intermitente y alarma remota.
    
    Función de protección: retardo al encender, tiempo entre paradas.`,

    sistema_rerigeracion: `Compresor y ventilador de marca famosa y alta eficiencia; con un efecto de refrigeración altamente eficiente.

    Circulación de aire forzado para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interna.
    
    Diseño de evaporador de gran área, refrigeración potente y uniformidad de temperatura alta, mientras suprime efectivamente la formación de escarcha, reduciendo el proceso de desescarche.
    
    Refrigerante libre de CFC/HCFC.`,

    ergonomico: `Cerradura de seguridad en la puerta, impide el acceso no autorizado.

    Función de desescarche automático que garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad.
    
    Diseño de voltaje amplio de 192V a 242V.
    
    Iluminación LED interna y diseño con ruedas.
    
    Diseño de estantes ajustables.
    
    Puerta de vidrio sin condensación.
    
    Puerta de espuma es opcional.
    
    Tope en la parte trasera contra la pared posterior.`,
  },

  {
    id: 9,
    imagen: "/productos/nueva/09.jpg",
    alt: "",
    categoria: "pharmacy",
    title: `Secador de liofilización para laboratorio DFD-18S-U`,

    description: `Para ser utilizado ampliamente en ingeniería biológica, industria farmacéutica, industria alimentaria, ciencia de materiales y agricultura.`,

    features: [
      "Sistema de pantalla táctil LCD de 7 pulgadas de alta definición, mejor sensibilidad y precisión de control, profesionalmente a prueba de agua, antimagnético y anti-interferencia electromagnética.",
      "Controlador PLC, con gestión de permisos de contraseña de tres niveles, programable y modificable de forma independiente, y actualizable en tiempo real.",
      "Función de protección de la bomba de vacío: La bomba de vacío solo puede ser iniciada para el secado al vacío después de que la trampa fría alcance la temperatura predeterminada.",
      "Manómetro de vacío Pirani, puede lograr un rango de medición más amplio y mayor precisión, mejorando significativamente la estabilidad, fiabilidad y vida útil del manómetro de vacío.",
      "Monitoreo del sistema de refrigeración: Función de autodiagnóstico para el sistema de refrigeración, con alarmas visuales y sonoras para temperaturas anormales del sistema de refrigeración.",
      "Función de autoprueba de componente individual: función de autoprueba de componente principal, puede realizar el inicio y la parada de componentes individuales, y verificar el estado de funcionamiento de los componentes individualmente.",
      "Datos de liofilización: Guarda automáticamente los datos de liofilización, permitiendo la visualización en tiempo real de la curva de operación actual de liofilización y la curva de datos históricos.",
      "Consulta de datos históricos: El módulo de almacenamiento de gran capacidad incorporado puede almacenar 1,000 registros de curvas de liofilización y alarmas.",
      "Tiempo de interfaz: El tiempo de funcionamiento actual puede mostrarse en la interfaz de operación, y también está disponible la función de calibración de fecha y hora de la pantalla.",
      "Exportación de datos: los datos de liofilización se pueden exportar a través del puerto USB, para la gestión de la información del usuario y la optimización del proceso.",
      "Diseño de ranura de sellado en la parte superior de la trampa fría, para evitar la condensación en la parte superior.",
      "Diseño separado de drenaje y admisión de aire, para evitar el drenaje y el bloqueo de hielo. Ajuste manual de la entrada de aire, y se pueden conectar directamente cilindros de gas.",
      "Función de prueba manual y función de registro de alarmas históricas.",
    ],
  },

  {
    id: 10,
    imagen: "/productos/nueva/10.jpg",
    alt: "",
    categoria: "pharmacy",
    title: `Refrigerador Portátil para Vacunas`,
    description: `Los refrigeradores/congeladores portátiles para vacunas ofrecen una construcción robusta, tecnología innovadora y un enfriamiento potente pero eficiente. El compartimento de enfriamiento puede equiparse con paquetes de hielo y una canasta de alambre.`,
    features: [
      "Capa de espuma ultra gruesa que permite mantener la temperatura durante más tiempo",
      "Compresor de ultra eficiencia",
      "Puede funcionar con 12V/24V o 110~240V 50Hz/60Hz AC o batería",
      "Temperatura ajustable desde 28 ℃ o -10-20℃",
      " Enfriamiento rápido en menos de 30 minutos",
      "Controlador de temperatura digital y pantalla LCD",
      "Diagnóstico automático de energía de 3 etapas y corte en caso de sobrecarga para proteger la batería.",
    ],
  },

  {
    id: 11,
    imagen: "/productos/nueva/11.jpg",
    alt: "",
    categoria: "pharmacy",
    title: `Refrigerador Portátil para Vacunas`,
    description: `Los refrigeradores/congeladores portátiles para vacunas ofrecen una construcción robusta, tecnología innovadora y un enfriamiento potente pero eficiente. El compartimento de enfriamiento puede equiparse con paquetes de hielo y una canasta de alambre.`,
    features: [
      "Capa de espuma ultra gruesa que permite mantener la temperatura durante más tiempo",
      "Compresor de ultra eficiencia",
      "Puede funcionar con 12V/24V o 110~240V 50Hz/60Hz AC o batería",
      "Temperatura ajustable desde 28 ℃ o -10-20℃",
      " Enfriamiento rápido en menos de 30 minutos",
      "Controlador de temperatura digital y pantalla LCD",
      "Diagnóstico automático de energía de 3 etapas y corte en caso de sobrecarga para proteger la batería.",
    ],
  },

  {
    id: 12,
    imagen: "/productos/nueva/12.jpg",
    alt: "",
    title: `El Contenedor de LN2 para Transporte Aéreo`,
    categoria: "pharmacy",
    imagen_description: "",
  },

  {
    id: 13,
    imagen: "/productos/nueva/13.jpg",
    alt: "",
    title: `Congelador criogénico de 150 °C - 138L`,
    categoria: "pharmacy",

    description: `El congelador criogénico de -150 °C proporciona un método alternativo de almacenamiento a largo plazo más seguro, conveniente y económico que los contenedores LN2. Lo diseñamos para proporcionar un entorno de almacenamiento que es aproximadamente 20 ° C más frío que la temperatura de recristalización del agua, el congelador es adecuado para el almacenamiento de una variedad de muestras biológicas, como virus, eritrocitos, leucocitos, cutis, esqueleto, espermatozoides, productos oceánicos, materiales de prueba especiales e incluso productos electrónicos para pruebas. Se puede instalar en instituciones como bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios de investigación.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna claramente y con fácil vista. La temperatura interna se puede ajustar en el rango de -125 °C ~ -150 °C. Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y contactos remotos; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Optimized cascade refrigeration technology, SECOP compressor to reach a high efficient refrigeration effect;

    Specially designed Heat Exchanger, high efficient heat transfer,energy conservation;

    Independent engine cabinet cooling system, ensure to adapt to a higher ambient temperatures;

    CFC-Free overall situ polyurethane foaming insulation;

    CFC-Free refrigerant.`,

    ergonomico:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Cámara interior de acero inoxidable, fácil de limpiar; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 14,
    imagen: "/productos/nueva/14.jpg",
    alt: "",
    categoria: "pharmacy",
    title: `Congelador de temperatura ultrabaja Ultracongelador vertical ULT - 590L`,

    description: `El ultracongelador de -86 °C está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos, cutis. Se puede instalar en instituciones como bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y empresas de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomico: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Puertas interiores dobles para reducir la pérdida de aire frío después de abrir la puerta; Adecuado para cajas de congelación estándar internacionales de 2" y 3"; Diseño de puerto de presión equilibrada, fácil de abrir la puerta; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar; Diseño de filtro de condensador ultra simple, conveniente para el mantenimiento y el lavado.`,
  },
  {
    id: 15,
    imagen: "/productos/nueva/15.jpg",
    alt: "",
    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -86℃ - 128L`,

    categoria: "pharmacy",

    description: `El congelador ULT (Ultra Bajo Temperatura) de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones como bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas químicas y electrónicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 16,
    imagen: "/productos/nueva/16.jpg",
    alt: "",
    title: `
    Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -86℃ - 730L`,
    categoria: "pharmacy",

    description: `El congelador ULT (Ultra Bajo Temperatura) de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones incluyendo bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 17,
    imagen: "/productos/nueva/17.jpg",

    alt: "",

    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -86℃ - 480L`,

    categoria: "pharmacy",

    description: `El congelador ULT (Ultra Bajo Temperatura) de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones como bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 18,
    imagen: "/productos/nueva/18.jpg",
    alt: "",
    title: `Congelador ULT tipo arcón a -86℃ - 480L`,
    categoria: "pharmacy",

    description: `-86℃ ULT Freezer is specially designed for long term storage of various biological products, such as germs, virus, erythrocytes, leukocytes, cutis. It can be installed in institutions including blood banks, hospitals, epidemic prevention services, research institutes and laboratories for electronic and chemical plants, biological engineering institutes and marine fishery companies.`,
    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 19,
    imagen: "/productos/nueva/19.jpg",
    alt: "",
    title: `
    Congelador ULT (Ultra Bajo Temperatura) vertical de -86℃ - 730L`,
    categoria: "pharmacy",

    description: `
    El congelador ULT (Ultra Bajo Temperatura) de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones incluyendo bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 20,
    imagen: "/productos/nueva/20.jpg",
    alt: "",
    title: `
    Congelador Vertical ULT (Ultra Bajo Temperatura) - 590L`,
    categoria: "pharmacy",

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 21,
    imagen: "/productos/nueva/21.jpg",
    alt: "",
    title: `Congelador Vertical ULT (Ultra Bajo Temperatura) - 360L`,
    categoria: "pharmacy",

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones incluyendo bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  // {
  //   id: 22,
  //   imagen: "/productos/nueva/22.jpg",
  //   alt: "",
  //   title: ``,
  //   categoria: "pharmacy",

  //   description: ``,

  //   control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

  //   control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

  //   sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  // },
  {
    id: 23,
    imagen: "/productos/nueva/23.jpg",
    alt: "",
    title: `
Congelador Vertical ULT (Ultra Bajo Temperatura) - 480L`,
    categoria: "pharmacy",

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },
  {
    id: 24,
    imagen: "/productos/nueva/24.jpg",
    alt: "",
    title: `
Congelador Vertical ULT (Ultra Bajo Temperatura) - 280L`,
    categoria: "pharmacy",

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones incluyendo bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },

  {
    id: 25,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -86℃ - 128L`,
    categoria: "pharmacy",

    description: `El congelador ULT de -86℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos, como gérmenes, virus, eritrocitos, leucocitos y tejido cutáneo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -40 °C ~ -86 °C, con un incremento de 0,1 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 7".`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,
  },

  {
    id: 26,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -60℃ - 500L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -60℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.

    Además, es especialmente adecuado para la preservación a largo plazo de peces de alta nutrición del mar profundo, considerados preciados.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 27,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -60℃ - 400L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -60℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.

    Además, es especialmente adecuado para la preservación a largo plazo de peces de alta nutrición del mar profundo, considerados preciados.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 28,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -60℃ - 200L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -60℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.

    Además, es especialmente adecuado para la preservación a largo plazo de peces de alta nutrición del mar profundo, considerados preciados.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 29,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `
    Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -60℃ - 100L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -60℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.

    Además, es especialmente adecuado para la preservación a largo plazo de peces de alta nutrición del mar profundo, considerados preciados.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 30,
    imagen: "/productos/nueva/30-31-32.jpg",
    alt: "",
    title: `Congelador ULT (Ultra Bajo Temperatura) tipo arcón de -60℃ - 300L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -60℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.

    Además, es especialmente adecuado para la preservación a largo plazo de peces de alta nutrición del mar profundo, considerados preciados.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 31,
    imagen: "/productos/nueva/30-31-32.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -40℃ - 590L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -40℃ está diseñado para el almacenamiento a largo plazo de diversos productos médicos y biológicos, como plasma sanguíneo, vacunas, reactivos de prueba y materiales de laboratorio, incluso algunos productos electrónicos para pruebas. Puede ser instalado en instituciones de investigación y sitios clínicos en ciencias de la vida, bancos de sangre, hospitales, pruebas electrónicas y laboratorios médicos.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 32,
    imagen: "/productos/nueva/30-31-32.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -40℃ - 360L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -40℃ está diseñado para el almacenamiento a largo plazo de diversos productos médicos y biológicos, como plasma sanguíneo, vacunas, reactivos de prueba y materiales de laboratorio, e incluso algunos productos electrónicos para pruebas. Puede ser instalado en instituciones de investigación y sitios clínicos en ciencias de la vida, bancos de sangre, hospitales, pruebas electrónicas y laboratorios médicos.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 33,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -40℃ - 280L`,
    categoria: "pharmacy",

    description: `El congelador profundo de -40℃ está diseñado para el almacenamiento a largo plazo de diversos productos médicos y biológicos, como plasma sanguíneo, vacunas, reactivos de prueba y materiales de laboratorio, e incluso algunos productos electrónicos para pruebas. Puede ser instalado en instituciones de investigación y sitios clínicos en ciencias de la vida, bancos de sangre, hospitales, pruebas electrónicas y laboratorios médicos.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 34,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador ULT tipo arcón a -60℃ - 500L`,
    categoria: "pharmacy",

    description: `El congelador profundo a -60℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede instalarse en instituciones incluyendo bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas químicas y electrónicas, institutos de ingeniería biológica y compañías de pesca marina.

Y es especialmente adecuado para la conservación a largo plazo de peces de alta nutrición de aguas profundas, que son preciosos.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -45 °C;`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 35,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",

    title: `Congelador Profundo tipo Arcón de -25℃ - 400L`,

    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo principalmente utilizado en situaciones donde se accede frecuentemente a muestras, la capacidad de almacenamiento de muestras es grande y el espacio de laboratorio de los usuarios es relativamente pequeño.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Compresor y ventilador de marca famosa altamente eficiente, con un efecto de refrigeración de alta eficiencia; Tecnología de refrigeración optimizada, bajo nivel de ruido, más eficiencia energética; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante libre de CFC.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Diseño de puerto de presión equilibrada, fácil de abrir la puerta; Diseño de estantes ajustables; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 36,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador Profundo tipo Arcón de -25℃ - 200L`,
    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo principalmente utilizado en situaciones donde se accede frecuentemente a muestras, la capacidad de almacenamiento de muestras es grande y el espacio de laboratorio de los usuarios es relativamente pequeño.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 37,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `
    Congelador Profundo tipo Arcón de -25℃ - 100L`,
    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo principalmente utilizado en situaciones donde se accede frecuentemente a muestras, la capacidad de almacenamiento de muestras es grande y el espacio de laboratorio de los usuarios es relativamente pequeño.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 38,
    imagen: "/productos/nueva/38.jpg",
    alt: "",

    title: `Congelador Profundo tipo Arcón de -40℃ - 300L`,

    categoria: "pharmacy",

    description: `El congelador profundo de -40℃ está especialmente diseñado para el almacenamiento a largo plazo de diversos productos biológicos y alimentos del mar profundo. Puede ser instalado en instituciones que incluyen bancos de sangre, hospitales, servicios de prevención de epidemias, institutos de investigación y laboratorios para plantas electrónicas y químicas, institutos de ingeniería biológica y compañías de pesca marina.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -45 °C`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un efecto de refrigeración de alta eficiencia; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Tecnología de refrigeración de ciclo térmico eficiente de un solo compresor, bajo nivel de ruido, más eficiencia energética; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante libre de CFC.`,

    ergonomic:
      "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 39,
    imagen: "/productos/nueva/39.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -30℃ - 1100L`,
    categoria: "pharmacy",

    description: `El congelador profundo de laboratorio de -30℃ está diseñado con descongelación automática y circulación forzada de aire. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Está diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil visualización; La temperatura interna se puede ajustar en el rango de -10 °C ~ -30 °C, en incrementos de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura; Protección de bloqueo y contraseña para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital e interfaz de alarma remota. Función de protección: retardo de arranque, intervalo de apagado. Sistema de monitor registrador de temperatura gráfico (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes, con un efecto de refrigeración de alta eficiencia; Aislamiento de espuma de 70 mm de espesor, mejor efecto de aislamiento, ayuda a mantener la estabilidad de la temperatura dentro del refrigerador. Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que restringe eficazmente las heladas, reduce el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Ruedas bloqueables de alta resistencia, fáciles de mover y fijar. Cestas o cajones de acero inoxidable (Opcional).",
  },
  {
    id: 40,
    imagen: "/productos/nueva/40.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -30℃ - 600L`,
    categoria: "pharmacy",

    description: `El congelador profundo de laboratorio de -30℃ está diseñado con descongelación automática y circulación forzada de aire. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Está diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,
    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil visualización; La temperatura interna se puede ajustar en el rango de -10 °C ~ -30 °C, en incrementos de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura; Protección de bloqueo y contraseña para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital e interfaz de alarma remota. Función de protección: retardo de arranque, intervalo de apagado. Sistema de monitor registrador de temperatura gráfico (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes, con un efecto de refrigeración de alta eficiencia. Aislamiento de espuma de 70 mm de espesor, mejor efecto de aislamiento, ayuda a mantener la estabilidad de la temperatura dentro del refrigerador. Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que restringe eficazmente las heladas, reduce el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Ruedas bloqueables de alta resistencia, fáciles de mover y fijar. Cestas o cajones de acero inoxidable (Opcional).",
  },
  {
    id: 41,
    imagen: "/productos/nueva/41.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -25℃ - 110L`,
    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece capacidad adecuada, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo principalmente utilizado en situaciones donde se accede frecuentemente a muestras, la capacidad de almacenamiento de muestras es grande y el espacio de laboratorio de los usuarios es relativamente pequeño.`,


    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 42,

    imagen: "/productos/nueva/42.jpg",

    alt: "",

    title: `Congelador Profundo Vertical de -25℃ - 600L`,

    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo principalmente utilizado en situaciones donde se accede frecuentemente a muestras, la capacidad de almacenamiento de muestras es grande y el espacio de laboratorio de los usuarios es relativamente pequeño.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 43,
    imagen: "/productos/nueva/43.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -25℃ - 60L`,
    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. A pesar de su capacidad compacta, ofrece ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo ideal para situaciones donde se accede frecuentemente a muestras y el espacio de laboratorio de los usuarios es limitado.`,


    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 44,
    imagen: "/productos/nueva/44.jpg",
    alt: "",
    title: `Congelador Profundo Vertical de -25℃ - 260L`,
    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo principalmente utilizado en situaciones donde se accede frecuentemente a muestras y el espacio de laboratorio de los usuarios es relativamente pequeño.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 45,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador Vertical de -25℃ - 395L`,
    categoria: "pharmacy",

    description: `El congelador vertical de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece una gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo utilizado principalmente en situaciones donde se accede frecuentemente a muestras, con una capacidad grande de muestras y en espacios de laboratorio relativamente pequeños.`,


    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },


  // {
  //   id: 46,
  //   imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
  //   alt: "",
  //   title: ``,
  //   categoria: "pharmacy",

  //   description: ``,

  //   control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

  //   control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

  //   sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

  //   ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  // },

  {
    id: 47,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador Profundo tipo Arcón de -25℃ - 500L`,
    categoria: "pharmacy",

    description: `El congelador de baja temperatura de -25 ℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo utilizado principalmente en situaciones donde se accede frecuentemente a muestras, con una capacidad grande de muestras y en espacios de laboratorio relativamente pequeños.`,


    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 48,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador Profundo tipo Arcón de -25℃ - 400L`,
    categoria: "pharmacy",

    description: `El congelador de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo utilizado principalmente en situaciones donde se accede frecuentemente a muestras, con una capacidad grande de muestras y en espacios de laboratorio relativamente pequeños.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },
  {
    id: 49,
    imagen: "/productos/nueva/25-26-27-28-29-33-34-35-36-37-45-46-47-48-49.jpg",
    alt: "",
    title: `Congelador Profundo tipo Arcón de -25℃ - 200L`,
    categoria: "pharmacy",

    description: `El congelador de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo utilizado principalmente en situaciones donde se accede frecuentemente a muestras, con una capacidad grande de muestras y en espacios de laboratorio relativamente pequeños.`,
  
    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 50,
    imagen: "/productos/nueva/50.jpg",
    alt: "",
    title: `Congelador Profundo tipo Arcón de -25℃ - 100L`,
    categoria: "pharmacy",

    description: `El congelador de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo utilizado principalmente en situaciones donde se accede frecuentemente a muestras, con una capacidad grande de muestras y en espacios de laboratorio relativamente pequeños.`,
    
    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",
  },

  {
    id: 51,

    imagen: "/productos/nueva/51.jpg",

    alt: "",

    title: `Congelador Profundo tipo Arcón de -25℃ - 300L`,

    categoria: "pharmacy",

    description: `El congelador de baja temperatura de -25℃ está diseñado principalmente para satisfacer la demanda de almacenamiento en frío en condiciones normales en el ámbito médico, de investigación científica y preparación industrial. Ofrece gran capacidad, ahorro de espacio y control preciso de la temperatura, estabilidad térmica y enfriamiento rápido, siendo utilizado principalmente en situaciones donde se accede frecuentemente a muestras, con una capacidad grande de muestras y en espacios de laboratorio relativamente pequeños.`,

     control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de -10 °C ~ -25 °C; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Dos métodos de alarma: alarma de zumbador y alarma de parpadeo digital; Función de protección: retardo de encendido, tiempo entre paradas.`,

    sistema_rerigeracion: `Tecnología de refrigeración en cascada optimizada, compresor SECOP para alcanzar un alto efecto de refrigeración; Intercambiador de calor especialmente diseñado, transferencia de calor de alta eficiencia, conservación de energía; Paneles aislantes V.I.P. para garantizar el rendimiento del aislamiento; aislamiento general de espuma de poliuretano libre de CFC; Refrigerante de hidrocarburos de alta eficiencia.`,

    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; Diseño de amplio voltaje de 192 V a 242 V; Equipado con cesta de almacenamiento; Rueda de tipo pesado y bloqueo con tornillo ajustable, fácil de mover y fijar.",

  },

  {
    id: 52,

    imagen: "/productos/nueva/52.jpg",

    alt: "",

    title: `Refrigerador y Congelador Combinados`,

    categoria: "pharmacy",

    description: `Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación.

    Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,


    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C y -10 °C ~ -25 °C, con un incremento de 0,1; El registro de valores registrados de temperatura más baja y más alta.`,
    

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas;`,

    sistema_rerigeracion: `Compresor y ventilador de marca famosa altamente eficiente, con un efecto de refrigeración de alta eficiencia; Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Diseño de estantes ajustables; Puerta de vidrio sin condensación; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,

  },

  {
    id: 53,
    imagen: "/productos/nueva/53-54.jpg",

    alt: "",

    title: `Refrigerador de Banco de Sangre a +4℃ - 600L`,

    categoria: "pharmacy",

    description: `Descongelación automática, Circulación Forzada de Aire
    Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación.
    Diseñado para almacenar sangre y medicamentos.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de 2 °C ~ 6 °C, con un incremento de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento.`,


    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Registrador de temperatura gráfico (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marca famosa altamente eficiente, con un efecto de refrigeración de alta eficiencia; El aislamiento de espuma de 70 mm de espesor, mejor efecto de aislamiento, ayuda a mantener la estabilidad de la temperatura dentro del refrigerador. Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,
    

    ergonomic: `Safety door lock, preventing unauthorized access;

    Auto defrost function guarantees a good performance in high ambient temperature and humidity area;
    
    Wide voltage design from 192V to 242V;
    
    Inner LED lighting and caster design;
    
    Maintenance free condenser design;
    
    No condensation glass door;
    
    USB export interface for event and temperature data ;
    
    Baskets or stainless steel drawers (Optional).`,
  },

  {
    id: 54,
    imagen: "/productos/nueva/53-54.jpg",

    alt: "",

    title: `Refrigerador para Banco de Sangre a +4℃ - 600L`,

    categoria: "pharmacy",

    description: `Descongelamiento Automático, Circulación de Aire Forzado
    Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación.
    Diseñado para almacenar sangre y medicamentos.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de 2 °C ~ 6 °C, con un incremento de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento.`,


    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Registrador de temperatura gráfico (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marca famosa altamente eficiente, con un efecto de refrigeración de alta eficiencia; El aislamiento de espuma de 70 mm de espesor, mejor efecto de aislamiento, ayuda a mantener la estabilidad de la temperatura dentro del refrigerador. Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,
    

    ergonomic: `Safety door lock, preventing unauthorized access;

    Auto defrost function guarantees a good performance in high ambient temperature and humidity area;
    
    Wide voltage design from 192V to 242V;
    
    Inner LED lighting and caster design;
    
    Maintenance free condenser design;
    
    No condensation glass door;
    
    USB export interface for event and temperature data ;
    
    Baskets or stainless steel drawers (Optional).`,
  },

  {
    id: 55,
    imagen: "/productos/nueva/55.jpg",
    alt: "",
    title: `Refrigerador de Farmacia - 600L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,
  },
  {
    id: 56,
    imagen: "/productos/nueva/56.jpg",
    alt: "",
    title: `
    Refrigerador de Farmacia - 395L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,


    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,

  },
  {
    id: 57,
    imagen: "/productos/nueva/57.jpg",
    alt: "",
    title: `Refrigerador de Farmacia - 390L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,

  },
  {
    id: 58,
    imagen: "/productos/nueva/58.jpg",
    alt: "",
    title: `Refrigerador de Farmacia - 60L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,
    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,

  },
  {
    id: 59,
    imagen: "/productos/nueva/59.jpg",
    alt: "",
    title: `
    Refrigerador de Farmacia - 110L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,

    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,


    
  },
  {
    id: 60,
    imagen: "/productos/nueva/60.jpg",
    alt: "",
    title: `Refrigerador de Farmacia - 260L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 12 °C con un incremento de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura, precisión +/- 0,1 °C;`,


    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,


    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,

  },
  {
    id: 61,
    imagen: "/productos/nueva/61.jpg",
    alt: "",
    title: `Refrigerador de Farmacia - 60L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,


    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,


    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura 
    ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,

  },
  {
    id: 62,

    imagen: "/productos/nueva/62.jpg",

    alt: "",

    title: `Refrigerador de Farmacia - 260L`,

    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,
    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,


    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,


    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,
  },
  {
    id: 63,
    imagen: "/productos/nueva/61.jpg",

    alt: "",

    title: `Refrigerador de Farmacia - 110L`,

    categoria: "pharmacy",

    description: `Descongelamiento automático, Circulación de aire forzado. Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación. Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, gran pantalla LED, temperatura interna clara y fácil de ver La temperatura interna se puede ajustar en el rango de 2 °C ~ 8 °C con un incremento de 0.1; Múltiples sensores para mostrar o controlar la temperatura; El registro de valores registrados de temperatura más baja y más alta.`,


    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, alarma de falla de energía, puerta atascada, bajo voltaje de la batería de respaldo. Sistema de alarma de sobretemperatura, configure la temperatura de alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitoreo registrador de temperatura (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marcas famosas altamente eficientes; Circulación forzada de aire para grandes caudales de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,

    ergonomic: `Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Puerta de vidrio sin condensación; Diseño de estante ajustable; La puerta de espuma es opcional; Tope en la parte trasera contra la pared del fondo.`,
  },
  {
    id: 64,
    imagen: "/productos/nueva/64.jpg",
    alt: "",
    title: `
    Refrigerador de Laboratorio - 1100L`,
    categoria: "pharmacy",

    description: `Descongelamiento automático, circulación de aire forzado.
    Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación.
    Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

    control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de 2 °C ~ 15 °C, con un incremento de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 4,3.`,

    control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitor registrador de temperatura gráfico (opcional).`,


    sistema_rerigeracion: `Compresor y ventilador de marca famosa altamente eficiente, con un efecto de refrigeración de alta eficiencia; El aislamiento de espuma de 70 mm de espesor, mejor efecto de aislamiento, ayuda a mantener la estabilidad de la temperatura dentro del refrigerador. Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,


    ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Diseño de condensador libre de mantenimiento; Puerta de vidrio sin condensación; Interfaz de exportación USB para datos de eventos y temperatura; Cestas o cajones de acero inoxidable (Opcional).",

  },
  // {
  //   id: 65,
  //   imagen: "/productos/nueva/63.jpg",
  //   alt: "",
  //   title: `Termostato`,
  //   categoria: "pharmacy",

  //   description: ``,

  //   control_temperatura: ``,

  //   control_seguridad: ``,

  //   sistema_rerigeracion: ``,

  //   ergonomic: "",
  // },
  // {
  //   id: 66,
  //   imagen: "/productos/nueva/66.jpg",
  //   alt: "",
  //   title: `
  //   Refrigerador de Laboratorio - 600L`,
  //   categoria: "pharmacy",

  //   description: `Descongelamiento Automático, Circulación de Aire Forzado
  //   Adecuado para hospitales, bancos de sangre, prevención de epidemias, áreas de ganadería, empresas farmacéuticas e institutos de investigación.
  //   Diseñado para almacenar productos farmacéuticos, medicinas, vacunas, materiales biológicos, reactivos de prueba y materiales de laboratorio.`,

  //   control_temperatura: `Control por microprocesador, temperatura interna de pantalla LED grande claramente y con fácil vista; La temperatura interna se puede ajustar en el rango de 2 °C ~ 15 °C, con un incremento de 0,1 °C; Múltiples sensores para mostrar o controlar la temperatura; Bloqueo y contraseña de protección para evitar el ajuste arbitrario de los parámetros de funcionamiento Sistema opcional de pantalla táctil LCD a color de 4,3".`,


  //   control_seguridad: `Alarmas de mal funcionamiento: alarma de alta temperatura, alarma de baja temperatura, falla del sensor, alarma de falla de energía, bajo voltaje de la batería de respaldo, sistema de alarma de sobrecalentamiento, configure la temperatura de la alarma según los requisitos; Tres métodos de alarma: alarma de zumbador, alarma de parpadeo digital y alarma remota; Función de protección: retardo de encendido, tiempo entre paradas; Sistema de monitor registrador de temperatura gráfico (opcional).`,


  //   sistema_rerigeracion: `Compresor y ventilador de marca famosa altamente eficiente, con un efecto de refrigeración de alta eficiencia; El aislamiento de espuma de 70 mm de espesor, mejor efecto de aislamiento, ayuda a mantener la estabilidad de la temperatura dentro del refrigerador. Circulación forzada de aire para un gran flujo de aire con conductos de aire especiales para garantizar la consistencia de la temperatura interior. Gran área del diseño del evaporador, enfriamiento fuerte y uniformidad de alta temperatura, al tiempo que suprime eficazmente las heladas, reduciendo el proceso de descongelación. Refrigerante libre de CFC/HCFC.`,


  //   ergonomic: "Cerradura de seguridad de la puerta, evitando el acceso no autorizado; La función de descongelación automática garantiza un buen rendimiento en áreas de alta temperatura ambiente y humedad; Diseño de amplio voltaje de 192 V a 242 V; Iluminación LED interior y diseño de ruedas; Diseño de condensador libre de mantenimiento; Puerta de vidrio sin condensación; Interfaz de exportación USB para datos de eventos y temperatura; Cestas o cajones de acero inoxidable (Opcional).",
  // },
  {
    id: 67,
    imagen: "/productos/nueva/65.jpg",
    alt: "",
    title: `Secadora de Congelación de Laboratorio DFD-10`,
    categoria: "laboratory",

    description: `Para ser utilizada ampliamente en ingeniería biológica, industria farmacéutica, industria alimentaria, ciencia de materiales y agricultura.`,
    features: [
      "Pantalla táctil LCD para mostrar la curva de prueba de la temperatura de la muestra, temperatura del condensador, grado de vacío y otros parámetros operativos necesarios.",
      "Interfaz USB para descargar los datos operativos almacenados del último mes.",
      "Nivel de sonido bajo.",
      "Condensador y estación de trabajo de acero inoxidable para una fácil limpieza y mantenimiento.",
      "Cámara de secado transparente para una fácil observación del proceso de congelación y secado.",
      "Interfaz compatible para conexión de diferentes bombas de vacío."
    ]
    
  },
  {
    id: 68,
    imagen: "/productos/nueva/66.jpg",
    alt: "",
    title: `Secadora de Congelación de Laboratorio DFD-12`,
    categoria: "laboratory",

    description: `Para ser utilizada ampliamente en ingeniería biológica, industria farmacéutica, industria alimentaria, ciencia de materiales y agricultura.`,
    features: [
      "Pantalla táctil LCD para mostrar la curva de prueba de la temperatura de la muestra, temperatura del condensador, grado de vacío y otros parámetros operativos necesarios.",
      "Interfaz USB para descargar los datos operativos almacenados del último mes.",
      "Nivel de sonido bajo.",
      "Condensador y estación de trabajo de acero inoxidable para una fácil limpieza y mantenimiento.",
      "Cámara de secado transparente para una fácil observación del proceso de congelación y secado.",
      "Interfaz compatible para conexión de diferentes bombas de vacío."
    ]
   
  },
  {
    id: 69,
    imagen: "/productos/nueva/67.jpg",
    alt: "Fabricador de hielo en escamas",
    title: `Fabricador de hielo en escamas`,
    categoria: "laboratory",

    description: `Los fabricadores automáticos de hielo en escamas de la serie IMS están diseñados con forma cúbica y un panel frontal curvo y puerta curva (o panel frontal plano de acero inoxidable y puerta plana) para una apariencia atractiva. Este fabricador de hielo ofrece muchas ventajas, como la rápida producción de hielo, gran capacidad de fabricación de hielo, forma atractiva del hielo y rápida descarga del hielo.
    Todos estos procesos están controlados automáticamente para la fabricación continua de hielo. En caso de escasez de agua o si el compartimento de hielo está lleno, el indicador en el panel de operaciones se iluminará correspondientemente y el fabricador de hielo dejará de funcionar automáticamente. El gabinete de almacenamiento de hielo está espumado con PU, por lo que está bien aislado y puede prevenir que el hielo se derrita. Además, el agua restante después de cada producción de hielo se recicla. Así, no solo se ahorra agua, sino que también se mejora la eficiencia de la producción de hielo, se reduce el consumo de energía y, en consecuencia, se reduce considerablemente el costo de producción de hielo del cliente. Se puede utilizar agua purificada o agua de grifo para la producción de hielo.`,

    features: [
     
    ]
   
  },
  {
    id: 70,
    imagen: "/productos/nueva/68.jpg",
    alt: "Incubadora de CO₂",
    title: `Incubadora de CO₂`,
    categoria: "laboratory",
    description: ``,
    features: [
     "El sensor de CO₂ infrarrojo sensible y la función de calibración automática proporcionan un control preciso de la concentración de CO₂.",
     "El filtro HEPA instalado en el interior asegura que la calidad del aire interno alcance el nivel 100.",
     "El sistema de circulación de aire tipo brisa no afecta el cultivo celular.",
     "Cuando se abre la puerta, el ventilador se detiene para evitar la convección del aire interno y externo, y el sistema de calefacción se detiene para prevenir el sobrecalentamiento.",
     " Calentamiento directo con cables en los seis lados y diseño de chaqueta de aire que asegura un tiempo de calentamiento corto, sin sobrecalentamiento y buena uniformidad.",
     " La cámara de acero inoxidable espejo SUS304 Cu con diseño de transición de arco cuadrado previene la bacteria y la contaminación experimental.",
     "La placa de humidificación por evaporación natural en la parte inferior asegura un ambiente de cultivo de alta humedad.",
     "La lámpara UV oculta esteriliza el agua en la placa de humidificación y el aire circulante para mantener limpio el ambiente experimental.",
     "Diseño de puerta de doble capa: la puerta interna de vidrio reforzado asegura la hermeticidad.",
     "Dirección de apertura de puerta ajustable para satisfacer diferentes usuarios personalizados.",
     " El sistema de calefacción de la puerta interna evita la condensación de la humedad.",
     " Los filtros HEPA DUF de entrada de aire filtran el polvo de diámetro mayor a 0.33 um con una eficiencia del 99.97%, y minimizan la contaminación en la cámara de trabajo.",
     "Alarma de sobrecalentamiento, alarma de anormalidad en la concentración de CO₂ y alarma de nivel de agua de advertencia.",
     "Operación PID conveniente: funcionamiento con configuración de datos y tiempo, apagado automático basado en la configuración y recuperación automática al estado anterior después de un corte de energía y recuperación.",
     "Tecla de función especial para la configuración de la temperatura.",
     "Los menús auxiliares hacen realidad la alarma de sobrecalentamiento, el ajuste de desviación y el bloqueo del menú."
    ]
   
  },
  {
    id: 71,
    imagen: "/productos/nueva/69.jpg",
    alt: "Baño de circulación de baja temperatura (calentador/enfriador)",
    title: `Baño de circulación de baja temperatura (calentador/enfriador)`,
    categoria: "laboratory",
    description: ``,
    features: [
     "Baño de gran capacidad con apertura y circuito externo integrado, que puede usarse tanto como tanque de congelación como para proporcionar refrigerante externamente.",
     " Equipado con un conjunto de compresor completamente cerrado y una bomba de circulación de agua de fabricantes internacionales renombrados, ofrece un rendimiento avanzado y una calidad confiable.",
     "Componentes de refrigeración específicos como relés especiales, protectores, condensadores y partes de refrigeración, todos de alta calidad y originales importados.",
     "El sistema de circulación utiliza acero inoxidable 304 y 316 y materiales poliméricos anticorrosivos, lo que lo hace resistente al óxido, la corrosión y la contaminación por líquidos a baja temperatura.",
     "La temperatura se muestra en un display digital y el control de temperatura es mediante microcomputadora, lo que simplifica la operación. Se puede elegir el control de temperatura programable.",
     "Ofrece ahorro de energía y es adecuado para lugares con escasez de agua, mala calidad o presión de agua, previniendo la acumulación de cal en el agua de circulación y la contaminación; en ambientes de trabajo con altas temperaturas, protege eficazmente el funcionamiento normal de instrumentos y equipos de gran precisión.",

    ]
   
  },
  {
    id: 72,
    imagen: "/productos/nueva/70.jpg",
    alt: "Baño de circulación de baja temperatura (calefactor/enfriador)",
    title: `Baño de circulación de baja temperatura (calefactor/enfriador)`,
    categoria: "laboratory",
    description: `Modelo DLSK—3/-15`,
    features: [
     "La serie DLSK se puede usar en conjunto para sustituir la condensación de agua de grifo, especialmente adecuada para materiales de bajo punto de ebullición o termosensibles cuando se necesita agua de condensación durante la evaporación. Para áreas de alta temperatura o con escasez de recursos hídricos, logra el ahorro de agua y garantiza la rápida reducción de temperatura de los instrumentos enfriados.",
     "Dentro del baño frío de trabajo se pueden colocar directamente diversos contenedores con reactivos bioquímicos o muestras para realizar experimentos y pruebas de temperatura constante a baja temperatura.",
     "Pantalla grande de LCD, control automático del sistema de enfriamiento por software, conveniente y rápido.",
     "Compresor completamente cerrado de refrigeración por aire de alta eficiencia, con protecciones múltiples como retardo, sobrecalentamiento y sobrecorriente.",
     "La bomba de circulación puede expulsar el líquido refrigerante del tanque para enfriar o mantener la temperatura constante de los recipientes experimentales externos o establecer un segundo campo de temperatura constante.",
     " El software puede corregir las desviaciones en las mediciones de temperatura, alcanzando una precisión de hasta 0.1°C."
    ]
   
  },
  {
    id: 73,
    imagen: "/productos/nueva/71.jpg",
    alt: "Baño de circulación de baja temperatura (calefactor/enfriador)",
    title: `Baño de circulación de baja temperatura (calefactor/enfriador)`,
    categoria: "laboratory",
    description: `Modelo DLSK-5/-20`,
    features: [
     "La serie DLSK se puede utilizar para reemplazar la condensación con agua del grifo, especialmente adecuada para el uso de agua de condensación en la evaporación de materiales con puntos de ebullición bajos o sensibles al calor. En regiones de altas temperaturas o escasez de recursos hídricos, permite el ahorro de agua y garantiza la rápida reducción de temperatura de los instrumentos enfriados.",
     " En el baño frío de trabajo se pueden colocar directamente varios recipientes con reactivos bioquímicos o muestras para realizar experimentos y pruebas a baja temperatura constante.",
     "Dispone de una pantalla grande de LCD y un sistema de control automático del enfriamiento por software, lo que facilita su uso de manera rápida y conveniente.",
     "Refrigeración eficiente mediante un compresor totalmente cerrado de tipo enfriado por aire, que cuenta con protecciones múltiples como retraso, sobrecalentamiento y sobrecorriente.",
     "La bomba de circulación puede expulsar el líquido refrigerante del tanque para enfriar o mantener a temperatura constante los recipientes experimentales externos o establecer un segundo campo de temperatura constante.",
     "El software puede corregir desviaciones en las mediciones de temperatura, logrando una precisión de hasta 0.1°C."
    ]
   
  },
  {
    id: 74,
    imagen: "/productos/nueva/72.jpg",
    alt: "Baño de circulación de baja temperatura (calefactor/enfriador)",
    title: `Baño de circulación de baja temperatura (calefactor/enfriador)`,
    categoria: "laboratory",
    description: `Modelo DLSK-10/20`,
    features: [
    " Bañera de gran capacidad con apertura y circuito externo integrado, que puede usarse tanto como tanque de congelación como para proporcionar refrigerante externamente.",
    " Equipado con un conjunto de compresor completamente cerrado y una bomba de circulación de agua de fabricantes internacionales renombrados, ofrece un rendimiento avanzado y una calidad confiable.",
    "Componentes de refrigeración específicos como relés especiales, protectores, condensadores y partes de refrigeración, todos de alta calidad y originales importados.",
    "El sistema de circulación utiliza acero inoxidable 304 y 316 y materiales poliméricos anticorrosivos, lo que lo hace resistente al óxido, la corrosión y la contaminación por líquidos a baja temperatura.",
    "La temperatura se muestra en un display digital y el control de temperatura es mediante microcomputadora, lo que simplifica la operación. Se puede elegir el control de temperatura programable.",
    "Ofrece ahorro de energía y es adecuado para lugares con escasez de agua, mala calidad o presión de agua, previniendo la acumulación de cal en el agua de circulación y la contaminación; en ambientes de trabajo con altas temperaturas, protege eficazmente el funcionamiento normal de instrumentos y equipos de gran precisión."
    ]
   
  },

];


export const servicios = [
  {
    id: 1,
    title: "Calibración & Validación de Equipos",
    title2: "DQ, IQ, OQ, PQ" ,
    lista: ["Carpeta de Protocolo","Catálogo del equipo","Copia de certificación de los instrumentos.","Constancia de aprobación"],
    imagen: "/servicios/01.webp",
    clase: "desde-arriba"
  },
  {
    id: 2,
    title: "Equipos de Laboratorio",
    lista: ["Carpeta de Control.","Catálogo del equipo.","Copia de certificación de los instrumentos.","Constancia de aprobación."],
    imagen: "/servicios/58.jpg",
    clase: "desde-arriba2"
  },
  {
    id: 3,
    title: "Mantenimiento preventivo & correctivo",
    lista: ["Contamos con Ingenieros de Servicio con amplia experiencia.","Pólizas de Mantenimiento.","Extensión de garantía."],
    imagen: "/servicios/15.jpg",
    clase: "desde-arriba3"
  }
]