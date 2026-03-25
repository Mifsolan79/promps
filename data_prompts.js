const PROMPT_DATABASE = {
    "Fantasía": [
        {
            "id": "fantasia_1",
            "number": 1,
            "style": "Fantasía",
            "title": "EL GRAN SALÓN DEL TRONO",
            "content": "Retrato maestro capturado con Arri Alexa 35 y lente Zeiss Supreme Prime. Un hombre con rostro subido como referencia con biometría extrema: poros de la piel visibles, micro-transpiración y vello facial fino. Camina por un pasillo de piedra volcánica (textura PBR) bajo iluminación Rembrandt dramática a 3200K. Calidad de fotograma IMAX, profundidad de color de 12 bits."
        },
        {
            "id": "fantasia_2",
            "number": 2,
            "style": "Fantasía",
            "title": "EL SANTUARIO DEL BOSQUE ANCIANO",
            "content": "Plano medio cinematográfico captura con Red V-Raptor XL. Personaje con rostro subido como referencia mirando la copa de un árbol milenario con hojas de luminiscencia cian (PBR). Atmósfera con briznas de polen mágico suspendidas en luz volumétrica (God rays). Óptica Panavision Ultra Speed f/1.4, bokeh natural suave y detalle en iris con reflejos de la naturaleza."
        },
        {
            "id": "fantasia_3",
            "number": 3,
            "style": "Fantasía",
            "title": "FORJANDO LA LEYENDA",
            "content": "Primer plano extremo (Macro) con Sony Venice 2. Herrero con rostro subido como referencia, piel bañada en resplandor naranja 5600K del metal fundido. Biometría facial bajo calor extremo con sudor realista y pupilas contraídas. Chispas voladoras en cámara lenta con desenfoque de movimiento. Textura de yunque de hierro viejo y hollín detallado."
        },
        {
            "id": "fantasia_4",
            "number": 4,
            "style": "Fantasía",
            "title": "EL ARQUERO REAL",
            "content": "Plano americano capturado con Arri Alexa LF. Personaje con rostro subido como referencia en torre de vigilancia bajo tormenta. Armadura de cuero endurecido con grabados rúnicos PBR que reflejan relámpagos. Iluminación de alto contraste, gotas de lluvia sobre la piel y textura de la tela de la capa mojada. Estética Cinestill 800T."
        },
        {
            "id": "fantasia_5",
            "number": 5,
            "style": "Fantasía",
            "title": "LA BIBLIOTECA MÍSTICA",
            "content": "Vista detallada con lente Leica Noctilux 50mm. Estudioso con rostro subido como referencia frente a escritorio de roble PBR. Luz de linterna lateral (Kicker light) resaltando el polvo suspendido y la textura de pergaminos antiguos. Biometría en las manos: venas subdérmicas y huellas dactilares visibles. Atmósfera de claroscuro íntimo."
        },
        {
            "id": "fantasia_6",
            "number": 6,
            "style": "Fantasía",
            "title": "CABALLERO DE LA ROSA DE PLATA",
            "content": "Retrato épico con Arri Alexa 35. Guerrero con rostro subido como referencia con armadura de placas completa (Reflejos Ray-tracing). Luz dorada de amanecer lateral 4500K. Detalle en los grabados de rosas de metal. Fondo de patio de castillo con desenfoque óptico profundo. Calidad Masterpiece."
        },
        {
            "id": "fantasia_7",
            "number": 7,
            "style": "Fantasía",
            "title": "EL RITUAL BAJO LA LUNA",
            "content": "Plano general con Sony Venice 2. Sacerdotisa con rostro subido como referencia en círculo de piedras. Iluminación plateada de luna llena con sombras profundas tipo \"Moonlight blue\". Túnica de seda blanca PBR with brillo sutil. Atmósfera de bruma de cine (haze) y partículas de energía mística."
        },
        {
            "id": "fantasia_8",
            "number": 8,
            "style": "Fantasía",
            "title": "PUERTA DEL REY BAJO LA MONTAÑA",
            "content": "Escena épica capturada con Red V-Raptor. Personaje con rostro subido como referencia frente a puertas colosales de piedra tallada. Iluminación dramática cenital atravesando grietas. Texturas geológicas extremas y escala abrumadora. Óptica ultra-angular para enfatizar la grandeza."
        },
        {
            "id": "fantasia_9",
            "number": 9,
            "style": "Fantasía",
            "title": "EL JARDÍN DEL ALQUIMISTA",
            "content": "Primer plano macro con lente Zeiss 100mm. Alquimista con rostro subido como referencia recolectando flores de neón (Sub-surface scattering). Luces violeta y cian vibrantes. Fondo con bokeh de frascos de cristal PBR hirviendo. Biometría facial con reflejos de las flores en los ojos."
        },
        {
            "id": "fantasia_10",
            "number": 10,
            "style": "Fantasía",
            "title": "DEFENSOR DEL PASO HELADO",
            "content": "Caballero con rostro subido como referencia en ventisca. Red V-Raptor XL. Escarcha realista en cejas y barba (Micro-detalle). Iluminación difusa de día gélido. Armadura de acero con pátina de hielo PBR. Paleta de colores fría y desaturada. Calidad IMAX."
        },
        {
            "id": "fantasia_11",
            "number": 11,
            "style": "Fantasía",
            "title": "LA BODA ÉLFICA",
            "content": "Plano general en palacio de cristal. Personaje con rostro subido como referencia con vestiduras de seda élfica PBR. Iluminación cálida de linternas de papel mágicas. Riqueza de detalles florales y filigranas doradas con brillo HDR. Óptica nítida Zeiss Supreme."
        },
        {
            "id": "fantasia_12",
            "number": 12,
            "style": "Fantasía",
            "title": "EXPLORADOR EN LA GUARIDA DEL DRAGÓN",
            "content": "Luz roja rítmica de respiración de dragón (Rim light). Personaje con rostro subido como referencia agazapado tras oro PBR. Reflejos de monedas en la armadura y en las pupilas. Sombras profundas y atmósfera cargada de humo y azufre. Calidad RAW cinematográfica."
        },
        {
            "id": "fantasia_13",
            "number": 13,
            "style": "Fantasía",
            "title": "EL BARDO ERRANTE",
            "content": "Retrato junto a fogata nocturna. Arri Alexa 35. Bardo con rostro subido como referencia tocando laúd de madera PBR. Luz naranja vibrante proyectando sombras móviles (Firelight logic). Detalle en las cuerdas y en la textura táctil de su ropa de lana."
        },
        {
            "id": "fantasia_14",
            "number": 14,
            "style": "Fantasía",
            "title": "CATEDRAL DE LOS ECOS",
            "content": "Personaje con rostro subido como referencia en catedral gótica. Rayos de luz (God rays) cargados de polvo dinámico. Enfoque en la texturas de piedra erosionada y vidrieras rotas PBR. Óptica anamórfica Cooke para una sensación de escala horizontal."
        },
        {
            "id": "fantasia_15",
            "number": 15,
            "style": "Fantasía",
            "title": "LA VISIÓN DE LA PITONISA",
            "content": "Primer plano extremo del rostro subido como referencia reflejado en cuenco de agua oscura. Iluminación cenital dura tipo \"Noir\". El agua muestra visiones de fuego (Reflectance maps). Biometría: reflejo nítido del futuro en la córnea del ojo."
        },
        {
            "id": "fantasia_16",
            "number": 16,
            "style": "Fantasía",
            "title": "MERCADO DE LOS MILAGROS",
            "content": "Plano medio de mercader con rostro subido como referencia con gema iridiscente (Anisotropic shaders). Fondo de bazar con telas de lino y especias PBR. Iluminación natural de mediodía soleado 5600K. Gran detalle en las arrugas de expresión y ojos reales."
        },
        {
            "id": "fantasia_17",
            "number": 17,
            "style": "Fantasía",
            "title": "LA HIJA DEL HERRERO",
            "content": "Mujer con rostro subido como referencia templando acero. Vapor de agua realista (Volumetric fluid). Luz lateral fuerte resaltando determinación y micro-gotas de sudor en la frente. Textura gruesa de delantal de cuero PBR. Captura con Sony Venice 2."
        },
        {
            "id": "fantasia_18",
            "number": 18,
            "style": "Fantasía",
            "title": "GUARDIÁN DE LA TORRE SILENCIOSA",
            "content": "Estética minimalista en blanco y gris. Caballero con rostro subido como referencia con lanza de plata PBR. Iluminación de día nublado suave (Softbox natural). Textura de piedra de mármol pulido y nieve virgen. Óptica Zeiss para nitidez absoluta."
        },
        {
            "id": "fantasia_19",
            "number": 19,
            "style": "Fantasía",
            "title": "EL VIAJERO DEL MAR",
            "content": "Capitán con rostro subido como referencia en proa de drakkar. Olas con espuma realista (PBR water). Iluminación de amanecer rosado 4000K. Salitre en la piel y ropa de cuero desgastada por el mar. Calidad cinematográfica de alta mar."
        },
        {
            "id": "fantasia_20",
            "number": 20,
            "style": "Fantasía",
            "title": "EL REY MALDITO",
            "content": "Hombre con rostro subido como referencia con corona de espinas de hierro negro PBR. Venas subdérmicas oscuras (Biometría de maldición). Iluminación Chiaroscuro extrema, fondo negro puro. Ojos inyectados en sangre con detalle microscópico. Arri Alexa 35."
        },
        {
            "id": "fantasia_21",
            "number": 21,
            "style": "Fantasía",
            "title": "LA CAÑADA DE LAS HADAS",
            "content": "Iluminación de ensueño sin sombras duras. Personaje con rostro subido como referencia en hierba ultra-detallada. Luces voladoras (Sub-surface scattering). Colores vibrantes y atmósfera etérea con bruma mágica. Óptica Lensbaby para efectos de desenfoque creativo."
        },
        {
            "id": "fantasia_22",
            "number": 22,
            "style": "Fantasía",
            "title": "ASEDIO DE LA FORTALEZA DE HIERRO",
            "content": "Soldado con rostro subido como referencia bajo lluvia de ceniza. Humo volumétrico negro y luz de explosiones (Amber glow). Textura de metal abollado y hollín en la piel. Plano corto dramático con profundidad de campo reducida."
        },
        {
            "id": "fantasia_23",
            "number": 23,
            "style": "Fantasía",
            "title": "LA COCINA DE LA HERBORISTA",
            "content": "Luz de ventana tamizada por vapor. Personaje con rostro subido como referencia en cocina rústica PBR. Plantas secas y frascos con líquidos viscosos. Biometría de manos trabajando con raíces. Estética acogedora pero técnica."
        },
        {
            "id": "fantasia_24",
            "number": 24,
            "style": "Fantasía",
            "title": "ESCALERA A CELESTIA",
            "content": "Iluminación radiante 6500K. Viajero con rostro subido como referencia en escaleras de cristal entre nubes realistas. Contraluz fuerte que crea un resplandor (bloom) místico en la silueta. Nitidez extrema en los rasgos faciales."
        },
        {
            "id": "fantasia_25",
            "number": 25,
            "style": "Fantasía",
            "title": "EL TRONO ARRUINADO",
            "content": "Anciano con rostro subido como referencia en trono de piedra con hiedra PBR. Luz de atardecer lateral 3000K resaltando arrugas profundas y poros marcados. Tristeza real en la mirada con detalle en el lagrimal. Sony Venice 2."
        },
        {
            "id": "fantasia_26",
            "number": 26,
            "style": "Fantasía",
            "title": "EL JINETE DE GRIFOS",
            "content": "Jinete con rostro subido como referencia a gran altitud. Viento deformando la piel (Efecto dinámico). Gafas de cuero PBR con reflejos de picos nevados. Luz fría y cortante de alta montaña. Nitidez 8K absoluta."
        },
        {
            "id": "fantasia_27",
            "number": 27,
            "style": "Fantasía",
            "title": "EL ASESINO DE LAS SOMBRAS",
            "content": "Luz de velas desde abajo (Up-lighting) en salón de baile. Asesino con rostro subido como referencia oculto entre vigas de madera PBR. Ropa de seda negra mate. Sombras invertidas que dan un aspecto depredador. Ojos con brillo felino sutil."
        },
        {
            "id": "fantasia_28",
            "number": 28,
            "style": "Fantasía",
            "title": "EL MONJE DEL OASIS",
            "content": "Luz de sol del desierto 6000K con sombras duras. Monje con rostro subido como referencia frente a templo de arenisca PBR. Calor visible (Heat haze). Gran detalle en la textura de la túnica de lino y en la piel quemada por el sol."
        },
        {
            "id": "fantasia_29",
            "number": 29,
            "style": "Fantasía",
            "title": "LA MINA DE GEMAS",
            "content": "Luz de casco de minero reflejada en diamantes azules (Refractive indices). Minero con rostro subido como referencia con rostro manchado de polvo de gema brillante. Biometría facial con asombro capturado en Arri Alexa."
        },
        {
            "id": "fantasia_30",
            "number": 30,
            "style": "Fantasía",
            "title": "EL PUENTE DEL JUICIO",
            "content": "Camino de energía turquesa (Emission map). Personaje con rostro subido como referencia cruzando abismo. Luz que emana del suelo iluminando el rostro desde abajo. Atmósfera de vacío infinito con estrellas distantes nítidas."
        },
        {
            "id": "fantasia_31",
            "number": 31,
            "style": "Fantasía",
            "title": "EL FESTIVAL DE INVIERNO",
            "content": "Plaza decorada con carámbanos PBR. Personaje con rostro subido como referencia con jarra de madera. Luces de farolillos de colores proyectando tonos azulados y amarillos en su piel. Vapor de aliento frío realista."
        },
        {
            "id": "fantasia_32",
            "number": 32,
            "style": "Fantasía",
            "title": "EL MAPA PERDIDO",
            "content": "Luz de vela única parpadeante. Rostro subido como referencia desenfocado al fondo, manos detalladas sosteniendo mapa de piel PBR. Biometría en las uñas y textura del mapa con inscripciones antiguas. Estética de misterio."
        },
        {
            "id": "fantasia_33",
            "number": 33,
            "style": "Fantasía",
            "title": "EL DESCANSO DE LA VALQUIRIA",
            "content": "Guerrera con rostro subido como referencia junto a arroyo. Armadura de escamas doradas PBR with reflejos del agua. Luz de tarde suave with bokeh de naturaleza frondosa. Biometría de cansancio heroico. Sony Venice 2."
        },
        {
            "id": "fantasia_34",
            "number": 34,
            "style": "Fantasía",
            "title": "EL MAGO DE ENGRANAJES",
            "content": "Estética Steampunk-Fantasy. Mago con rostro subido como referencia entre autómatas de bronce PBR. Iluminación de bombillas incandescentes con filamentos visibles. Detalle en los grabados de latón y en la barba del mago."
        },
        {
            "id": "fantasia_35",
            "number": 35,
            "style": "Fantasía",
            "title": "CENTINELA DE LA TORRE DE MARFIL",
            "content": "Caballero con rostro subido como referencia con capa de seda azul PBR. Balcón de mármol blanco. Iluminación de sol radiante 5600K que crea sombras cortas y definidas. Óptica Zeiss para un contraste impecable."
        },
        {
            "id": "fantasia_36",
            "number": 36,
            "style": "Fantasía",
            "title": "CAZADOR EN LA MARISMA BRUMOSA",
            "content": "Niebla volumétrica densa. Solo se aprecia la silueta y detalles del rostro subido como referencia. Luz difusa de amanecer gris. Textura de arco de madera y flechas mojadas. Arri Alexa 35 con alto rango dinámico."
        },
        {
            "id": "fantasia_37",
            "number": 37,
            "style": "Fantasía",
            "title": "LA ARMERÍA DE ESCAMA DE DRAGÓN",
            "content": "Artesano con rostro subido como referencia examinando coraza roja (Clear coat PBR). Fondo con yelmos y escudos de metal pulido. Luz de tragaluz cenital resaltando la curvatura de las escamas. Red V-Raptor."
        },
        {
            "id": "fantasia_38",
            "number": 38,
            "style": "Fantasía",
            "title": "EXPLORADOR DEL TEMPLO SUMERGIDO",
            "content": "Buceando entre estatuas de piedra erosionadas bajo agua verde (Caustics lighting). Rayos de sol atravesando la superficie. Burbujas realistas y personaje con rostro subido como referencia con expresión de asombro acuático."
        },
        {
            "id": "fantasia_39",
            "number": 39,
            "style": "Fantasía",
            "title": "EL NAVEGANTE CELESTE",
            "content": "Uso de astrolabio gigante de latón PBR. Galaxia espiral de fondo con nebulosas realistas. Personaje con rostro subido como referencia con luz estelar puntual en sus rasgos. Estética cósmica y científica épica."
        },
        {
            "id": "fantasia_40",
            "number": 40,
            "style": "Fantasía",
            "title": "NOBLE ELFO OSCURO",
            "content": "Pelo blanco y piel gris (PBR skin shader). Ropajes de seda negra con hilos de plata. Luz púrpura de cristales mágicos proyectando sombras suaves. Biometría de elegancia fría en el rostro subido como referencia."
        },
        {
            "id": "fantasia_41",
            "number": 41,
            "style": "Fantasía",
            "title": "EL RENACER DEL FÉNIX",
            "content": "Iluminación naranja y roja cegadora. Personaje con rostro subido como referencia presenciando estallido de fuego místico. Efecto de \"Bloom\" intenso y partículas de ceniza brillante. Calidad dinámica HDR10+."
        },
        {
            "id": "fantasia_42",
            "number": 42,
            "style": "Fantasía",
            "title": "EL PIE DEL GIGANTE DE PIEDRA",
            "content": "Escala épica con lente de 14mm. Personaje con rostro subido como referencia junto a \"dedo\" de piedra con musgo PBR. Luz de bosque filtrada. La nitidez permite ver las texturas de la piedra y de la bota del viajero."
        },
        {
            "id": "fantasia_43",
            "number": 43,
            "style": "Fantasía",
            "title": "EL PALADÍN ERRANTE",
            "content": "Descansando bajo roble milenario. Armadura de hierro desgastada con golpes realistas PBR. Luz filtrada (Dappled light) con sombras de hojas en el rostro subido como referencia. Paz y espiritualidad en la mirada."
        },
        {
            "id": "fantasia_44",
            "number": 44,
            "style": "Fantasía",
            "title": "EL BAILE DEL VAMPIRO",
            "content": "Levita de terciopelo y seda PBR. Multitud elegante desenfocada. Iluminación de candelabros con luz trémula 2800K. Biometría facial con palidez aristocrática y ojos penetrantes en el rostro subido como referencia."
        },
        {
            "id": "fantasia_45",
            "number": 45,
            "style": "Fantasía",
            "title": "EL TALLADOR DE RUNAS",
            "content": "Anciano con rostro subido como referencia golpeando menhir. Runas con emisión cian. Chispas de piedra y polvo de mármol. Luz cenital dramática que resalta la fuerza en sus manos tatuadas (PBR)."
        },
        {
            "id": "fantasia_46",
            "number": 46,
            "style": "Fantasía",
            "title": "EL ESCLAVISTA DEL DESIERTO",
            "content": "Máscara de cuero y turbante de lino PBR. Calor sofocante visible en la distorsión del fondo. Sombras negras puras bajo el sol de justicia. Rostro subido como referencia con marcas de arena y sol. Sony Venice 2."
        },
        {
            "id": "fantasia_47",
            "number": 47,
            "style": "Fantasía",
            "title": "LA CORONACIÓN DE LA REINA DE HIELO",
            "content": "Reina con rostro subido como referencia con corona de hielo translúcido. Luz de aurora boreal púrpura y verde (Skylight místico). Vestido de escarcha y diamantes PBR con reflejos infinitos."
        },
        {
            "id": "fantasia_48",
            "number": 48,
            "style": "Fantasía",
            "title": "MERCENARIO DEL BAZAR SUBTERRÁNEO",
            "content": "Cicatriz realista y armadura de cuero tachonado PBR. Fondo con puestos de especias y luces de antorchas cálidas. Rostro subido como referencia con determinación y dureza. Óptica anamórfica Cooke."
        },
        {
            "id": "fantasia_49",
            "number": 49,
            "style": "Fantasía",
            "title": "ENTRENAMIENTO DEL JINETE DE DRAGONES",
            "content": "Joven con rostro subido como referencia con cría de dragón al hombro. Prado verde vibrante (Foliage shader). Luz de mañana optimista 5000K. Piel con poros y ligeras pecas bajo el sol. Calidad Arri Raw."
        },
        {
            "id": "fantasia_50",
            "number": 50,
            "style": "Fantasía",
            "title": "LA ÚLTIMA RESISTENCIA DE LA CIUDADELA",
            "content": "Guerrero con rostro subido como referencia con escudo roto de madera y metal PBR. Cara con sangre y suciedad realista. Cielo rojo de atardecer 2000K. Iluminación de heroísmo trágico capturada con Sony Venice 2."
        },
        {
            "id": "fantasia_51",
            "number": 51,
            "style": "Fantasía",
            "title": "EL HUÉRFANO DEL FUEGO DRACÓNICO",
            "content": "Primer plano de un niño con rostro subido como referencia frente a aldea destruida. Sus ojos reflejan llamas vivas (Reflejos HDR). Ceniza cayendo y luz naranja de incendios. Biometría facial: lágrimas de hollín."
        },
        {
            "id": "fantasia_52",
            "number": 52,
            "style": "Fantasía",
            "title": "LA REINA ESMERALDA",
            "content": "Corona de hiedra viva (PBR organic). Balcón de madera de ébano tallada. Luz de día nublado que satura los tonos esmeralda. Rostro subido como referencia con mirada regia y profundidad de campo suave Zeiss Bokeh."
        },
        {
            "id": "fantasia_53",
            "number": 53,
            "style": "Fantasía",
            "title": "LA TUMBA DEL PRIMER HÉROE",
            "content": "Explorador con rostro subido como referencia descendiendo a cámara funeraria. Luz cenital única (Spotlight). Polvo en el haz de luz y texturas de estatuas de mármol antiguo. Óptica ultra-angular Red V-Raptor."
        },
        {
            "id": "fantasia_54",
            "number": 54,
            "style": "Fantasía",
            "title": "EL MERCADER ERRANTE",
            "content": "Mercader con rostro subido como referencia tirando de carromato con aves exóticas (Plumaje iridiscente PBR). Estepa árida bajo sol abrasador. Detalle en la madera seca y en las ruedas del carro."
        },
        {
            "id": "fantasia_55",
            "number": 55,
            "style": "Fantasía",
            "title": "LA SANADORA DE LA CUEVA DE CRISTAL",
            "content": "Personaje con rostro subido como referencia rodeado de cuarzo gigante con emisión blanca fría. Herida cerrándose (Efecto de luz mágica). Biometría de paz y alivio en el rostro. Luz volumétrica de cueva."
        },
        {
            "id": "fantasia_56",
            "number": 56,
            "style": "Fantasía",
            "title": "EL CAUDILLO ORCO",
            "content": "Colmillos de marfil PBR y armadura de huesos. Pintura de guerra roja viscosa en el rostro subido como referencia. Luz de antorchas bajas creando sombras agresivas ascendentes. Detalle en la textura de la piel rugosa."
        },
        {
            "id": "fantasia_57",
            "number": 57,
            "style": "Fantasía",
            "title": "NAVEGANTE DE LAS ISLAS FLOTANTES",
            "content": "Timón de latón y madera PBR. Barco volador entre nubes realistas (Volumetric clouds). Sol directo 6000K. Rostro subido como referencia con viento en el pelo y mirada en el horizonte infinito. Arri Alexa 35."
        },
        {
            "id": "fantasia_58",
            "number": 58,
            "style": "Fantasía",
            "title": "LA BIBLIOTECA DEL POLVO",
            "content": "Soplando polvo de libro de cuero PBR antiguo. El polvo brilla con motas doradas mágicas. Luz cenital que resalta la fibra del papel y la biometría facial del rostro subido como referencia durante el soplo."
        },
        {
            "id": "fantasia_59",
            "number": 59,
            "style": "Fantasía",
            "title": "LA ROCA DE LA SIRENA",
            "content": "Náufrago con rostro subido como referencia en arena negra volcánica PBR. Amanecer brumoso desaturado. Figura de sirena desenfocada al fondo. Iluminación suave y melancólica tipo \"Pale morning\"."
        },
        {
            "id": "fantasia_60",
            "number": 60,
            "style": "Fantasía",
            "title": "LA VIGILIA DEL CABALLERO",
            "content": "Joven arrodillado frente a altar. Luz de vidrieras que proyectan patrones de color gótico en la piel del rostro subido como referencia. Espada de acero templado PBR. Atmósfera sagrada con incienso volumétrico."
        },
        {
            "id": "fantasia_61",
            "number": 61,
            "style": "Fantasía",
            "title": "EL ERROR DEL ALQUIMISTA",
            "content": "Rostro subido como referencia con hollín azul tras explosión. Laboratorio caótico con destellos químicos multicolores. Biometría facial de sorpresa y restos de poción brillantes en las mejillas. Calidad Masterpiece."
        },
        {
            "id": "fantasia_62",
            "number": 62,
            "style": "Fantasía",
            "title": "GUARDIÁN DE LA PUERTA",
            "content": "Guerrero con rostro subido como referencia con escudo de torre masivo de madera y bronce PBR. Luz de tarde rasante resaltando cada marca de batalla en el metal. Óptica Cooke anamórfica para épica visual."
        },
        {
            "id": "fantasia_63",
            "number": 63,
            "style": "Fantasía",
            "title": "LA FLOR DE MEDIANOCHE",
            "content": "Bosque oscuro, manos acunando flor con emisión púrpura. Luz reflejada en el rostro subido como referencia desde abajo. Sombras móviles que sugieren vida silvestre mágica. Profundidad de campo Zeiss f/1.2."
        },
        {
            "id": "fantasia_64",
            "number": 64,
            "style": "Fantasía",
            "title": "EL TALLADOR DE PIEDRA",
            "content": "Anciano tallando estatua monumental. Polvo de piedra realista suspendido. Luz natural de patio andaluz-medieval. Rostro subido como referencia con arrugas llenas de polvo blanco y mirada concentrada. Sony Venice 2."
        },
        {
            "id": "fantasia_65",
            "number": 65,
            "style": "Fantasía",
            "title": "CAZADOR DEL BOSQUE MALDITO",
            "content": "Personaje con rostro subido como referencia con venda de seda PBR en los ojos. Árboles retorcidos con formas humanoides. Iluminación grisácea y tétrica. Detalle en las manos palpando el tronco rugoso de un árbol."
        },
        {
            "id": "fantasia_66",
            "number": 66,
            "style": "Fantasía",
            "title": "EL BANQUETE REAL",
            "content": "Cenas con nobles, manjares exóticos con texturas translúcidas PBR. Grandes candelabros de oro con cientos de velas. Rostro subido como referencia entre la aristocracia con ropajes de terciopelo carmesí detallado."
        },
        {
            "id": "fantasia_67",
            "number": 67,
            "style": "Fantasía",
            "title": "EL COLAPSO DEL PUENTE DE HIELO",
            "content": "Colgando de grieta en hielo azul translúcido PBR. Agua gélida cayendo con partículas de escarcha. Luz fría extrema 10000K. Biometría facial de pánico y frío intenso en el rostro subido como referencia."
        },
        {
            "id": "fantasia_68",
            "number": 68,
            "style": "Fantasía",
            "title": "LAS PUERTAS DE LA CIUDAD DORADA",
            "content": "Viajero llegando a puertas de oro sólido PBR. Atardecer naranja brillante que crea un cielo de fuego. Reflejos dorados en la armadura y en los ojos del rostro subido como referencia. Calidad IMAX 8K."
        },
        {
            "id": "fantasia_69",
            "number": 69,
            "style": "Fantasía",
            "title": "EL TRANCE DEL CHAMÁN",
            "content": "Ojos blancos sin pupilas, levitando sobre hoguera verde volumétrica. Rostro subido como referencia con pintura ritual de ceniza. Humo mágico que serpentea alrededor del cuerpo. Iluminación mística Arri Raw."
        },
        {
            "id": "fantasia_70",
            "number": 70,
            "style": "Fantasía",
            "title": "LA CORONA ROTA",
            "content": "Primer plano de hombre con rostro subido como referencia sosteniendo corona partida (Metal PBR). Lágrimas con refracción realista rodando por las mejillas. Iluminación cenital dura que resalta la tristeza y el dolor."
        },
        {
            "id": "fantasia_71",
            "number": 71,
            "style": "Fantasía",
            "title": "EL ESPEJISMO DEL DESIERTO",
            "content": "Bajo sol abrasador 6000K. Ciudad flotante distorsionada por calor (Refraction haze). Rostro subido como referencia con labios agrietados y sudor seco. Sombras duras y cortas. Sony Venice 2."
        },
        {
            "id": "fantasia_72",
            "number": 72,
            "style": "Fantasía",
            "title": "EL ASCENSO DE LA VALQUIRIA",
            "content": "Alas de plumas blancas (PBR fiber shader). Luz divina radiante desde arriba. Mujer con rostro subido como referencia con expresión de trascendencia. Estética etérea y brillante con nitidez Zeiss absoluta."
        },
        {
            "id": "fantasia_73",
            "number": 73,
            "style": "Fantasía",
            "title": "EL TEMPLO SUBTERRÁNEO",
            "content": "Explorador frente a deidad olvidada. Bioluminiscencia de hongos cian en las paredes de roca PBR. Luz suave y mágica reflejada en el rostro subido como referencia. Calidad fotográfica de expedición."
        },
        {
            "id": "fantasia_74",
            "number": 74,
            "style": "Fantasía",
            "title": "EL HECHICERO ERRANTE",
            "content": "Bastón con gema de emisión ámbar. Páramo de arena roja PBR bajo cielo púrpura. Rostro subido como referencia con túnica desgarrada por el viento. Estética de fantasia psicodélica y técnica."
        },
        {
            "id": "fantasia_75",
            "number": 75,
            "style": "Fantasía",
            "title": "LA GUARDIA REAL EN FORMACIÓN",
            "content": "Fila de guardias con capas de lana roja PBR. Lanzas de oro. Mediodía soleado en plaza de palacio de piedra blanca. Rostro subido como referencia con disciplina militar y detalle en el yelmo decorado."
        },
        {
            "id": "fantasia_76",
            "number": 76,
            "style": "Fantasía",
            "title": "LA ESTELA DE LA SERPIENTE MARINA",
            "content": "Marinero mirando sombra gigante bajo agua azul translúcida. Burbujas y espuma realista. Rostro subido como referencia con temor y fascinación. Iluminación de tormenta inminente Arri Alexa."
        },
        {
            "id": "fantasia_77",
            "number": 77,
            "style": "Fantasía",
            "title": "LA CORTE DEL REY DEL INVIERNO",
            "content": "Abrigo de piel de oso blanco PBR. Salón de hielo con pilares translúcidos. Rostro subido como referencia con barba con hielo y mirada de mando frío. Sol de invierno filtrado por vidrieras congeladas."
        },
        {
            "id": "fantasia_78",
            "number": 78,
            "style": "Fantasía",
            "title": "EL HEREDERO PERDIDO",
            "content": "Joven con harapos pero anillo real (Oro PBR). Establo oscuro con briznas de paja flotando en la luz. Rostro subido como referencia con nobleza oculta tras suciedad realista. Sony Venice 2."
        },
        {
            "id": "fantasia_79",
            "number": 79,
            "style": "Fantasía",
            "title": "EL ESPÍRITU DEL BOSQUE",
            "content": "Piel de textura de corteza de árbol PBR. Ojos de ámbar translúcido. Personaje integrado en tronco de roble milenario con musgo y líquenes realistas. Luz de bosque mágica con nitidez microscópica."
        },
        {
            "id": "fantasia_80",
            "number": 80,
            "style": "Fantasía",
            "title": "EL ASEDIO DE LA FORTALEZA",
            "content": "Cargando catapulta bajo lluvia de flechas encendidas. Cielo nocturno con resplandor de incendios. Rostro subido como referencia con esfuerzo físico y sudor bajo luz naranja. Óptica Red V-Raptor."
        },
        {
            "id": "fantasia_81",
            "number": 81,
            "style": "Fantasía",
            "title": "EL SUEÑO DEL ALQUIMISTA",
            "content": "Durmiendo entre plantas de crecimiento acelerado (PBR organic). Luces verdes y doradas flotando. Rostro subido como referencia en paz bajo iluminación onírica técnica. Bokeh de burbujas de cristal."
        },
        {
            "id": "fantasia_82",
            "number": 82,
            "style": "Fantasía",
            "title": "EL ALIENTO DEL DRAGÓN",
            "content": "Guarecido tras roca PBR mientras llamarada azul pasa por encima. Iluminación cian intensa y sombras proyectadas. Rostro subido como referencia con calor reflejado y pupilas contraídas por la luz."
        },
        {
            "id": "fantasia_83",
            "number": 83,
            "style": "Fantasía",
            "title": "LA FORJA MÍSTICA",
            "content": "Herrero golpeando metal con chispas estelares (Star particles). Iluminación de la forja mágica que resalta la biometría muscular y facial del rostro subido como referencia. Estética de alta fantasía tecnológica."
        },
        {
            "id": "fantasia_84",
            "number": 84,
            "style": "Fantasía",
            "title": "EL MONJE SILENCIOSO",
            "content": "Monasterio en cima nevada. Viento fuerte agitando vestiduras de lino PBR. Rostro subido como referencia con calma estoica y piel curtida por el frío. Sol de alta montaña 6000K. Arri Alexa 35."
        },
        {
            "id": "fantasia_85",
            "number": 85,
            "style": "Fantasía",
            "title": "EL TESORO MALDITO",
            "content": "Tocando moneda de oro que se funde en lava (Liquid PBR). Iluminación sombría con resplandores dorados agresivos. Rostro subido como referencia con avaricia y miedo en la mirada técnica."
        },
        {
            "id": "fantasia_86",
            "number": 86,
            "style": "Fantasía",
            "title": "LA BODA REAL",
            "content": "Traje de gala de seda blanca y oro PBR. Mediodía perfecto en catedral gótica. Rostro subido como referencia con felicidad radiante y detalle microscópico en los bordados del traje. Zeiss Supreme Prime."
        },
        {
            "id": "fantasia_87",
            "number": 87,
            "style": "Fantasía",
            "title": "EL ESBIRRO DEL SEÑOR OSCURO",
            "content": "Máscara de hierro negro PBR y ojos rojos con emisión. Lava fluyendo al fondo. Rostro subido como referencia integrado bajo máscara con herre de piel visible. Estética siniestra Arri Raw."
        },
        {
            "id": "fantasia_88",
            "number": 88,
            "style": "Fantasía",
            "title": "LA DIOSA DEL MAR",
            "content": "Pelo de algas submarinas y vestido de conchas PBR. Emergiendo de ola colosal de 20 metros. Iluminación de tormenta con rayos que perfilan la silueta del rostro subido como referencia. Calidad IMAX."
        },
        {
            "id": "fantasia_89",
            "number": 89,
            "style": "Fantasía",
            "title": "EL ELFO ERRANTE",
            "content": "Orejas puntiagudas discretas. Puente de raíces milenarias PBR. Luz de bosque mágico con motas de luz (Dappled light). Rostro subido como referencia con rasgos finos y mirada ancestral. Sony Venice 2."
        },
        {
            "id": "fantasia_90",
            "number": 90,
            "style": "Fantasía",
            "title": "LA TORRE ROTA",
            "content": "Torre que flota en pedazos de piedra volcánica PBR. Atardecer dramático 2500K. Rostro subido como referencia mirando al cielo con asombro. Óptica 14mm para enfatizar los escombros voladores."
        },
        {
            "id": "fantasia_91",
            "number": 91,
            "style": "Fantasía",
            "title": "EL RITUAL ANTIGUO",
            "content": "Pintando símbolos con sangre dorada en altar de piedra PBR. Hogueras nocturnas que proyectan sombras alargadas. Rostro subido como referencia en trance ritual con sudor y ceniza. Calidad Masterpiece."
        },
        {
            "id": "fantasia_92",
            "number": 92,
            "style": "Fantasía",
            "title": "EL CAZADOR DE NIEVE",
            "content": "Pieles y arco de madera PBR. Rastreando criatura en nieve virgen con cristalización detallada. Luz fría de mañana 8000K. Rostro subido como referencia con ojos entrecerrados y vaho en el aire. Red V-Raptor."
        },
        {
            "id": "fantasia_93",
            "number": 93,
            "style": "Fantasía",
            "title": "EL BALCÓN DEL PALACIO REAL",
            "content": "Mirando al reino desde lo más alto. Piedra mármol pulido PBR bajo sol radiante. Rostro subido como referencia con autoridad y detalle en las joyas de la corona. Profundidad de campo Zeiss f/4.0."
        },
        {
            "id": "fantasia_94",
            "number": 94,
            "style": "Fantasía",
            "title": "EL TRONO DEL REY TRASGO",
            "content": "Trono de basura, huesos y joyas robadas (PBR multi-material). Iluminación sucia de antorchas y humedad de cueva. Rostro subido como referencia con un toque de locura y detalle en la piel grasa y ollín."
        },
        {
            "id": "fantasia_95",
            "number": 95,
            "style": "Fantasía",
            "title": "EL RÍO MÍSTICO",
            "content": "Bebiendo de río con emisión cian. Bosque nocturno con bokeh de luciérnagas. Rostro subido como referencia con gotas de agua mágica en los labios y mirada de revitalización técnica."
        },
        {
            "id": "fantasia_96",
            "number": 96,
            "style": "Fantasía",
            "title": "JINETE DE DRAGÓN EN VUELO",
            "content": "Primer plano de rostro subido como referencia con deformación por viento de 200km/h (Motion blur). Fondo de nubes rosadas al atardecer 3000K. Biometría facial de adrenalina extrema capturada en 8K RAW."
        },
        {
            "id": "fantasia_97",
            "number": 97,
            "style": "Fantasía",
            "title": "EL ANTIGUO GUARDIÁN DE LA PUERTA",
            "content": "Llave de cristal gigante con refracción HDR. Luz cenital de tragaluz redondo. Rostro subido como referencia de anciano con pelo de seda blanca y piel como pergamino detallado. Óptica Leica 35mm."
        },
        {
            "id": "fantasia_98",
            "number": 98,
            "style": "Fantasía",
            "title": "EL HADA DEL BOSQUE",
            "content": "Alas de mariposa transparentes (Anisotropy PBR). Luz moteada filtrada por el dosel forestal. Rostro subido como referencia con maquillaje de pétalos y mirada curiosa. Calidad cinematográfica etérea."
        },
        {
            "id": "fantasia_99",
            "number": 99,
            "style": "Fantasía",
            "title": "EL GUERRERO DEL DESIERTO",
            "content": "Armadura de escamas de serpiente PBR. Sol ardiente 6000K con sombras duras. Rostro subido como referencia con sed clara y determinación. Textura de arena volando y fondo de dunas nítidas."
        },
        {
            "id": "fantasia_100",
            "number": 100,
            "style": "Fantasía",
            "title": "EL ÚLTIMO REINO",
            "content": "De pie en acantilado viendo la última ciudad humana amurallada. Atardecer épico tipo \"The Lord of the Rings\". Rostro subido como referencia con esperanza y melancolía. Arri Alexa 35, calidad definitiva de póster de cine."
        }
    ],
    "Space Opera": [
        {
            "id": "space_opera_1",
            "number": 1,
            "style": "Space Opera",
            "title": "TESTIGO EN EL PUENTE DE MANDO",
            "content": "Vista épica del puente de mando capturada con Sony Venice 2 y lente anamórfica Cooke/i. Personaje con rostro subido como referencia reflejado en paneles de cristal táctil (Ray-tracing). Iluminación volumétrica cian y magenta (Teal & Orange). Texturas de trajes en Kevlar y seda espacial (PBR) con reflejos nítidos y briznas de polvo suspendidas en luz cero-G. Calidad IMAX 8K."
        },
        {
            "id": "space_opera_2",
            "number": 2,
            "style": "Space Opera",
            "title": "MEDITACIÓN AL AMANECER ORBITAL",
            "content": "Plano medio capturado con Arri Alexa 65. Personaje con rostro subido como referencia sentado frente a un ventanal panorámico que muestra un planeta azul. Luz solar intensa de 6500K que crea briznas de luz (Lens flare) realistas. Biometría facial con poros dilatados por la luz lateral y micro-detalle en el iris que refleja la curvatura terrestre."
        },
        {
            "id": "space_opera_3",
            "number": 3,
            "style": "Space Opera",
            "title": "MANTENIMIENTO DEL NÚCLEO DE ENERGÍA",
            "content": "Primer plano extremo con Red V-Raptor XL. Ingeniero con rostro subido como referencia bajo luz estroboscópica azul cobalto. Rostro con biometría de esfuerzo: micro-transpiración y pupilas dilatadas. Textura de metal cepillado y cables de fibra óptica PBR con emisión de luz interna. Estética técnica de alta tecnología."
        },
        {
            "id": "space_opera_4",
            "number": 4,
            "style": "Space Opera",
            "title": "DIPLOMACIA EN EL BORDE GALÁCTICO",
            "content": "Plano americano con Sony Venice 2. Embajador con rostro subido como referencia luciendo túnica de filamentos metálicos PBR. Fondo de nebulosa púrpura vibrante. Iluminación Rembrandt dramática con luz de contorno (Rim light) que resalta la biometría facial y la elegancia del traje. Calidad Masterpiece."
        },
        {
            "id": "space_opera_5",
            "number": 5,
            "style": "Space Opera",
            "title": "ENCUENTRO EN EL CIBER-BAR",
            "content": "Luz de neón parpadeante reflejada en el rostro subido como referencia. Captura con lente Leica 35mm f/1.4. Humo de cigarrillo electrónico volumétrico. Textura de cuero sintético y grafeno PBR. Biometría facial con reflejos de neón rosa y verde en las pupilas. Estética Blade Runner técnica."
        },
        {
            "id": "space_opera_6",
            "number": 6,
            "style": "Space Opera",
            "title": "ESPECIALISTA EN REPARACIONES CERO-G",
            "content": "Personaje con rostro subido como referencia flotando fuera de la nave. Casco de policarbonato translúcido con reflejos HDR del sol espacial. Biometría facial visible tras el cristal: respiración ligera y concentración extrema. Textura de traje espacial de múltiples capas con sensores PBR."
        },
        {
            "id": "space_opera_7",
            "number": 7,
            "style": "Space Opera",
            "title": "EL MAPA DEL NAVEGANTE",
            "content": "Primer plano de manos y rostro subido como referencia frente a un holograma volumétrico de una galaxia. Luz cian proyectada en la piel, resaltando poros y vello facial fino. Óptica Zeiss Supreme Prime. Profundidad de campo reducida para enfocar la mirada del navegante."
        },
        {
            "id": "space_opera_8",
            "number": 8,
            "style": "Space Opera",
            "title": "EXPLORADOR DE ESPACIO PROFUNDO",
            "content": "Cabina de caza monoplaza estrecha. Luz roja de alerta (Red alert lighting) creando sombras duras en el rostro subido como referencia. Biometría facial de tensión y adrenalina. Textura de controles analógicos y pantallas de alta resolución. Calidad RAW cinematográfica."
        },
        {
            "id": "space_opera_9",
            "number": 9,
            "style": "Space Opera",
            "title": "ARQUITECTO DEL NÚCLEO IA",
            "content": "Personaje con rostro subido como referencia rodeado de servidores de cristal líquido. Iluminación blanca pura 5600K con sombras suaves. Biometría facial de intelecto: mirada serena y detalle en las líneas de expresión. Textura PBR de cables de datos translúcidos."
        },
        {
            "id": "space_opera_10",
            "number": 10,
            "style": "Space Opera",
            "title": "LLEGADA AL ENJAMBRE DE DYSON",
            "content": "Plano general desde el hangar. Personaje con rostro subido como referencia mirando hacia la megaestructura solar. Iluminación dorada cegadora con resplandor (Bloom). Textura de metal industrial masivo y miles de naves pequeñas. Calidad IMAX."
        },
        {
            "id": "space_opera_11",
            "number": 11,
            "style": "Space Opera",
            "title": "EL LABORATORIO DE XENOBIOLOGÍA",
            "content": "Luz fluorescente verde tenue. Personaje con rostro subido como referencia examinando muestra biológica alienígena (Sub-surface scattering). Biometría facial con reflejos químicos en los ojos. Textura de guantes de látex futurista y cristal de laboratorio."
        },
        {
            "id": "space_opera_12",
            "number": 12,
            "style": "Space Opera",
            "title": "INFILTRADO SIGILOSO",
            "content": "Luz violeta de sensores láser. Personaje con rostro subido como referencia con traje de camuflaje activo (Textura hexagonal PBR). Biometría facial de sigilo: respiración contenida y mirada alerta. Sombras profundas en Arri Raw."
        },
        {
            "id": "space_opera_13",
            "number": 13,
            "style": "Space Opera",
            "title": "TERMINAL DE LAS ESTRELLAS",
            "content": "Personaje con rostro subido como referencia esperando en una estación espacial de lujo. Luz natural de soles binarios a través del cristal. Textura de mármol sintético y ropa de diseño futurista. Óptica Panavision para un look premium."
        },
        {
            "id": "space_opera_14",
            "number": 14,
            "style": "Space Opera",
            "title": "ESCAPE DEL POZO DE GRAVEDAD",
            "content": "Efecto de vibración y desenfoque de movimiento (Motion blur). Rostro subido como referencia deformado por la aceleración 6G. Biometría facial de esfuerzo extremo. Luz naranja de motores de fusión iluminando la cabina."
        },
        {
            "id": "space_opera_15",
            "number": 15,
            "style": "Space Opera",
            "title": "LA BIBLIOTECA DEL CARTÓGRAFO ESTELAR",
            "content": "Miles de esferas de datos flotantes. Personaje con rostro subido como referencia entre ellas. Luz estelar difusa que crea una atmósfera mágica-tecnológica. Biometría facial de asombro y conocimiento. Óptica Zeiss f/1.2."
        },
        {
            "id": "space_opera_16",
            "number": 16,
            "style": "Space Opera",
            "title": "GENERAL DEL ALTO MANDO",
            "content": "Retrato de mando con Arri Alexa 35. Personaje con rostro subido como referencia con uniforme de gala en fibra de carbono y medallas de luz. Iluminación cenital dura y sombras decididas. Biometría de autoridad veterana."
        },
        {
            "id": "space_opera_17",
            "number": 17,
            "style": "Space Opera",
            "title": "MINERO DE ASTEROIDES",
            "content": "Rostro subido como referencia con suciedad de polvo espacial (Regolito). Luz de linterna frontal potente. Textura de exoesqueleto hidráulico oxidado y metal desgastado. Biometría facial de dureza y fatiga. Sony Venice 2."
        },
        {
            "id": "space_opera_18",
            "number": 18,
            "style": "Space Opera",
            "title": "ARQUITECTO DE REALIDAD VIRTUAL",
            "content": "Personaje con rostro subido como referencia con visor de luz cian. Fondo de código digital desvaneciéndose. Iluminación híbrida: luz real y luz proyectada por el visor en la piel. Biometría facial de inmersión total."
        },
        {
            "id": "space_opera_19",
            "number": 19,
            "style": "Space Opera",
            "title": "VIAJERO DE VELAS SOLARES",
            "content": "Cubierta exterior de la nave. Personaje con rostro subido como referencia mirando las velas de luz inmensas. Iluminación dorada y cálida del sol. Textura de material reflectante de las velas y traje de seda térmica."
        },
        {
            "id": "space_opera_20",
            "number": 20,
            "style": "Space Opera",
            "title": "EL OBSERVADOR DEL AGUJERO NEGRO",
            "content": "Frente al horizonte de sucesos. Luz de disco de acreción deformada (Gravitational lensing). Rostro subido como referencia con asombro cósmico y miedo existencial. Iluminación caótica y sombras distorsionadas."
        },
        {
            "id": "space_opera_21",
            "number": 21,
            "style": "Space Opera",
            "title": "LÍNEA DE MONTAJE DE ANDROIDES",
            "content": "Personaje con rostro subido como referencia supervisando la creación de replicas robóticas. Luz blanca de quirófano técnica. Textura de piel sintética y circuitos de oro. Biometría facial de perfección técnica."
        },
        {
            "id": "space_opera_22",
            "number": 22,
            "style": "Space Opera",
            "title": "EL ARCHIVO GALÁCTICO",
            "content": "Pilares interminables de memorias de cristal. Personaje con rostro subido como referencia tocando una columna. Luz azul que emana de los cristales iluminando su mano y rostro. Biometría de curiosidad infinita."
        },
        {
            "id": "space_opera_23",
            "number": 23,
            "style": "Space Opera",
            "title": "TRANSICIÓN AL HIPER-SALTO",
            "content": "Efecto de estiramiento de estrellas (Warp effect). Rostro subido como referencia reflejado en el cristal frontal. Luz blanca cegadora y sombras que se alargan. Biometría facial de trascendencia espacial."
        },
        {
            "id": "space_opera_24",
            "number": 24,
            "style": "Space Opera",
            "title": "JARDINERO DE LA ESTACIÓN ESPACIAL",
            "content": "Invernadero con plantas bioluminiscentes. Personaje con rostro subido como referencia cuidando flores de neón. Luz verde y suave. Textura de hojas translúcidas y piel con reflejos naturales. Calidad Masterpiece."
        },
        {
            "id": "space_opera_25",
            "number": 25,
            "style": "Space Opera",
            "title": "MERCADER DEL BORDE",
            "content": "Bazar alienígena con hologramas flotantes. Personaje con rostro subido como referencia negociando mercancía exótica. Iluminación nocturna de mercado con miles de colores tecnificados. Biometría de astucia y carisma."
        },
        {
            "id": "space_opera_26",
            "number": 26,
            "style": "Space Opera",
            "title": "SUPERVIVIENTE DE LA COLONIA PERDIDA",
            "content": "Rostro subido como referencia con barba crecida y ropa improvisada con tecnología vieja. Luz de linterna de mano parpadeante. Textura de metal oxidado y barro espacial. Biometría facial de resiliencia y trauma."
        },
        {
            "id": "space_opera_27",
            "number": 27,
            "style": "Space Opera",
            "title": "COMANDANTE DEL ENJAMBRE DE DRONES",
            "content": "Miles de luces pequeñas de drones en el cielo nocturno de un planeta. Personaje con rostro subido como referencia con tableta de mando holográfica. Luz azulada proyectada en el rostro. Biometría de control estratégico."
        },
        {
            "id": "space_opera_28",
            "number": 28,
            "style": "Space Opera",
            "title": "EL DESPERTAR DEL SUEÑO CRIOGÉNICO",
            "content": "Cápsula abriéndose con vapor de frío real. Personaje con rostro subido como referencia abriendo los ojos. Luz blanca suave de despertar. Biometría facial: confusión inicial y frescura de piel tras el letargo."
        },
        {
            "id": "space_opera_29",
            "number": 29,
            "style": "Space Opera",
            "title": "SOLEDAD EN LA CÁPSULA DE ESCAPE",
            "content": "Espacio reducido y claustrofóbico. Luz de emergencia naranja constante. Rostro subido como referencia mirando por la ventilla a la nave nodriza explotando. Biometría facial de shock y tristeza. Red V-Raptor."
        },
        {
            "id": "space_opera_30",
            "number": 30,
            "style": "Space Opera",
            "title": "LA ÓPERA GALÁCTICA",
            "content": "Personaje con rostro subido como referencia en un balcón de lujo asistiendo a un espectáculo de luz estelar. Vestuario de alta costura futurista con fibras ópticas. Iluminación de gala espectacular."
        },
        {
            "id": "space_opera_31",
            "number": 31,
            "style": "Space Opera",
            "title": "REPARANDO EL SATÉLITE",
            "content": "Caminata espacial técnica. Rostro subido como referencia con visor de casco que muestra el planeta abajo. Luz de sol directo de 6000K. Biometría facial de precisión y esfuerzo bajo traje presurizado."
        },
        {
            "id": "space_opera_32",
            "number": 32,
            "style": "Space Opera",
            "title": "EL ORÁCULO DE LA IA",
            "content": "Holograma gigante de un rostro hablándole al personaje con rostro subido como referencia. Luz dorada emitida por la IA que baña la estancia y al personaje. Biometría de reverencia y asombro tecnológico."
        },
        {
            "id": "space_opera_33",
            "number": 33,
            "style": "Space Opera",
            "title": "ESCONDITE DE CONTRABANDISTA",
            "content": "Cabina de carguero vieja y sucia. Luz de lámparas de aceite tecnificadas. Personaje con rostro subido como referencia contando créditos galácticos. Textura de cuero gastado y metal con grasa. Biometría de desconfianza."
        },
        {
            "id": "space_opera_34",
            "number": 34,
            "style": "Space Opera",
            "title": "EL NÚCLEO DE LA ESFERA DE DYSON",
            "content": "Luz solar infinita y controlada. Personaje con rostro subido como referencia en una pasarela de observación. Escala masiva de ingeniería solar. Iluminación radiante y sombras arquitectónicas perfectas."
        },
        {
            "id": "space_opera_35",
            "number": 35,
            "style": "Space Opera",
            "title": "CAPITÁN PIRATA ESPACIAL",
            "content": "Parche de ojo tecnológico y ropa de saqueador futurista con metal y piel PBR. Luz roja de abordaje. Rostro subido como referencia con expresión de ferocidad y liderazgo violento. Óptica anamórfica Cooke."
        },
        {
            "id": "space_opera_36",
            "number": 36,
            "style": "Space Opera",
            "title": "EL PRIMER CONTACTO",
            "content": "Personaje con rostro subido como referencia frente a una entidad de luz no humana. Luz blanca cegadora que perfila su silueta. Biometría facial de asombro absoluto y duda universal. Calidad Arri Raw."
        },
        {
            "id": "space_opera_37",
            "number": 37,
            "style": "Space Opera",
            "title": "BIBLIOTECA INTERGALÁCTICA",
            "content": "Libros de luz flotantes en una catedral de datos. Personaje con rostro subido como referencia leyendo un tomo holográfico. Luz suave y cálida. Textura de luz sólida y conocimiento ancestral."
        },
        {
            "id": "space_opera_38",
            "number": 38,
            "style": "Space Opera",
            "title": "EL PASO POR EL AGUJERO DE GUSANO",
            "content": "Distorsión espacial extrema. Rostro subido como referencia con estelas de luz que cruzan sus rasgos. Iluminación psicodélica y técnica. Biometría facial de desorientación dimensional."
        },
        {
            "id": "space_opera_39",
            "number": 39,
            "style": "Space Opera",
            "title": "GOBERNADOR PLANETARIO",
            "content": "Retrato en despacho de cristal con vista a una ciudad futurista. Personaje con rostro subido como referencia con túnica de seda inteligente PBR. Iluminación de lujo y autoridad suprema. Sony Venice 2."
        },
        {
            "id": "space_opera_40",
            "number": 40,
            "style": "Space Opera",
            "title": "MAÑANA EN LA BASE LUNAR",
            "content": "Luz pálida de sol a través de múltiples capas de protección. Personaje con rostro subido como referencia tomando café en taza futurista. Biometría facial de rutina en baja gravedad. Textura de hormigón lunar y metal blanco."
        },
        {
            "id": "space_opera_41",
            "number": 41,
            "style": "Space Opera",
            "title": "OPERACIONES EN EL HANGAR DE NAVES",
            "content": "Multitud de técnicos y naves. Personaje con rostro subido como referencia con auriculares de comunicación. Luz industrial de grandes focos. Biometría de eficiencia y ruido ambiental visual."
        },
        {
            "id": "space_opera_42",
            "number": 42,
            "style": "Space Opera",
            "title": "LA CÁMARA DEL CONSEJO GALÁCTICO",
            "content": "Arquitectura circular inmensa con miles de representantes. Personaje con rostro subido como referencia en su podio. Iluminación diplomática perfecta. Biometría facial de responsabilidad galáctica."
        },
        {
            "id": "space_opera_43",
            "number": 43,
            "style": "Space Opera",
            "title": "SINCRONIZACIÓN DE PILOTO DE MECHA",
            "content": "Sentado en el núcleo de control. Cables neuronales conectados al casco. Luz azul de enlace mental. Rostro subido como referencia con pupilas blancas de conexión. Biometría facial de fusión hombre-máquina."
        },
        {
            "id": "space_opera_44",
            "number": 44,
            "style": "Space Opera",
            "title": "EL CHATARRERO DE CHATARRA ESPACIAL",
            "content": "Flotando en un cementerio de naves. Personaje con rostro subido como referencia con soplete de plasma. Luz de corte naranja intenso. Biometría de esfuerzo y supervivencia en el vacío."
        },
        {
            "id": "space_opera_45",
            "number": 45,
            "style": "Space Opera",
            "title": "BARBACOA INTERESTELAR",
            "content": "Ambiente relajado en cubierta de nave. Personaje con rostro subido como referencia riendo con camaradas. Iluminación cálida de fiesta futurista. Biometría facial de alegría genuina y texturas de comida exótica."
        },
        {
            "id": "space_opera_46",
            "number": 46,
            "style": "Space Opera",
            "title": "LA ÚLTIMA NAVE",
            "content": "Nave solitaria en un universo oscuro. Personaje con rostro subido como referencia mirando al vacío por la claraboya. Luz residual de estrellas distantes. Biometría de soledad infinita y determinación."
        },
        {
            "id": "space_opera_47",
            "number": 47,
            "style": "Space Opera",
            "title": "LÍDER DEL EQUIPO DE CIBER-ASALTO",
            "content": "Personaje con rostro subido como referencia con gafas de datos y guantes tácticos. Fondo de matriz digital. Luz verde de código. Biometría facial de concentración quirúrgica y adrenalina."
        },
        {
            "id": "space_opera_48",
            "number": 48,
            "style": "Space Opera",
            "title": "EL CARTÓGRAFO GALÁCTICO",
            "content": "Rodeado de globos terráqueos de luz de miles de planetas. Personaje con rostro subido como referencia trazando una ruta. Luz suave y detallada. Biometría de sabiduría espacial y precisión."
        },
        {
            "id": "space_opera_49",
            "number": 49,
            "style": "Space Opera",
            "title": "LLEGADA AL PLANETA OCÉANO",
            "content": "Nave descendiendo sobre olas gigantes. Personaje con rostro subido como referencia viendo el mar infinito desde la cabina. Luz de sol tropical y agua turquesa HDR. Biometría de asombro por la naturaleza extrema."
        },
        {
            "id": "space_opera_50",
            "number": 50,
            "style": "Space Opera",
            "title": "EL FUGITIVO GALÁCTICO",
            "content": "Rostro subido como referencia oculto bajo capucha de tela táctica PBR. Luces de búsqueda de drones de policía sobrevolando. Iluminación nocturna urbana futurista. Biometría de miedo y sigilo."
        },
        {
            "id": "space_opera_51",
            "number": 51,
            "style": "Space Opera",
            "title": "LÍDER DE LA REBELIÓN ANDROIDE",
            "content": "Personaje con rostro subido como referencia con parte de la cara mostrando circuitos debajo de la piel. Luz roja revolucionaria. Biometría facial de desafío y frialdad robótica-humana."
        },
        {
            "id": "space_opera_52",
            "number": 52,
            "style": "Space Opera",
            "title": "MANTENIMIENTO DE SATÉLITE ESTACIONARIO",
            "content": "Flotando sobre una ciudad de luces nocturnas en la Tierra. Personaje con rostro subido como referencia con herramientas de precisión. Luz de sol reflejada en el planeta. Biometría de trabajo meticuloso."
        },
        {
            "id": "space_opera_53",
            "number": 53,
            "style": "Space Opera",
            "title": "EL NÚCLEO DEL ORDENADOR CUÁNTICO",
            "content": "Estructura fractal de luz y cables de oro. Personaje con rostro subido como referencia en el centro. Iluminación mística-técnica. Biometría facial de conexión mística con los datos. Calidad IMAX."
        },
        {
            "id": "space_opera_54",
            "number": 54,
            "style": "Space Opera",
            "title": "CAMIONERO DE CARGA INTERESTELAR",
            "content": "Cabina de camión espacial llena de objetos personales y fotos. Personaje con rostro subido como referencia al volante. Luz de estrellas pasando a velocidad luz. Biometría de nostalgia y rutina laboral."
        },
        {
            "id": "space_opera_55",
            "number": 55,
            "style": "Space Opera",
            "title": "EL INFANTE DE MARINA ESPACIAL",
            "content": "Armadura de combate pesada con arañazos y sangre alienígena PBR. Personaje con rostro subido como referencia con pánico controlado bajo el casco. Luz estroboscópica de batalla. Biometría de furia guerrera."
        },
        {
            "id": "space_opera_56",
            "number": 56,
            "style": "Space Opera",
            "title": "VIP EN CLUB NOCTURNO GALÁCTICO",
            "content": "Iluminación láser y música visual. Personaje con rostro subido como referencia con traje de luz reactiva. Biometría facial de placer y lujo extremo. Textura de copas de cristal futurista y bebidas de neón."
        },
        {
            "id": "space_opera_57",
            "number": 57,
            "style": "Space Opera",
            "title": "OPERACIÓN DESTRUCTOR DE PLANETAS",
            "content": "Haces de luz colosales golpeando la superficie. Personaje con rostro subido como referencia supervisando desde la nave. Iluminación apocalíptica y sombras de poder absoluto. Biometría de frialdad estratégica."
        },
        {
            "id": "space_opera_58",
            "number": 58,
            "style": "Space Opera",
            "title": "REGISTRO FINAL DEL EXPLORADOR",
            "content": "Cámara de video personal grabando el rostro del personaje con rostro subido como referencia. Luz lateral pobre. Biometría facial de rendición y mensaje de despedida. Estética de video granulado pero técnico."
        },
        {
            "id": "space_opera_59",
            "number": 59,
            "style": "Space Opera",
            "title": "EL GREMIO DE COMERCIO GALÁCTICO",
            "content": "Personaje con rostro subido como referencia en una mesa con hologramas de transacciones. Luz de oro y platino emitida por los datos. Biometría de astucia comercial y riqueza infinita."
        },
        {
            "id": "space_opera_60",
            "number": 60,
            "style": "Space Opera",
            "title": "LLEGADA AL MUNDO ANILLO",
            "content": "Personaje con rostro subido como referencia viendo la estructura inmensa que curva el horizonte. Iluminación solar a lo largo de todo el anillo. Biometría facial de asombro ante la ingeniería imposible."
        },
        {
            "id": "space_opera_61",
            "number": 61,
            "style": "Space Opera",
            "title": "EL ARQUITECTO DE NAVES ESTELARES",
            "content": "Diseñando una nave en un espacio virtual 3D. Personaje con rostro subido como referencia moviendo piezas con sus manos. Luz azul y blanca. Biometría de creatividad e ingeniería suprema."
        },
        {
            "id": "space_opera_62",
            "number": 62,
            "style": "Space Opera",
            "title": "REFUGIADO INTERESTELAR",
            "content": "Rostro subido como referencia con mirada cansada en un transporte abarrotado. Luz tenue y sombras sociales. Biometría facial de pérdida y esperanza frágil. Textura de ropa de fibra reciclada PBR."
        },
        {
            "id": "space_opera_63",
            "number": 63,
            "style": "Space Opera",
            "title": "EL DESCANSO DEL PILOTO DE MECHA",
            "content": "Sentado sobre el hombro de su gigante de metal. Atardecer en un planeta alienígena. Luz naranja y rosada. Personaje con rostro subido como referencia con casco en la mano. Biometría de agotamiento heroico."
        },
        {
            "id": "space_opera_64",
            "number": 64,
            "style": "Space Opera",
            "title": "CAZADOR DE RECOMPENSAS GALÁCTICO",
            "content": "Gafas térmicas y equipo táctico con biosensores. Personaje con rostro subido como referencia en un callejón de lluvia ácida. Luz de neón degradada. Biometría de depredador técnico."
        },
        {
            "id": "space_opera_65",
            "number": 65,
            "style": "Space Opera",
            "title": "EL PRIMER ENCUENTRO ALIENÍGENA",
            "content": "Personaje con rostro subido como referencia estrechando una mano no humana. Luz de hospitalidad extraterrestre. Biometría facial de paz y asombro antropológico. Calidad cinematográfica premium."
        },
        {
            "id": "space_opera_66",
            "number": 66,
            "style": "Space Opera",
            "title": "PERSECUCIÓN EN LOS PASILLOS DE LA NAVE",
            "content": "Efecto de velocidad y desenfoque. Personaje con rostro subido como referencia corriendo por un pasillo infinito de metal blanco. Luz de alarma parpadeante. Biometría de pánico y adrenalina. Arri Alexa 35."
        },
        {
            "id": "space_opera_67",
            "number": 67,
            "style": "Space Opera",
            "title": "LA CORONACIÓN DEL EMPERADOR GALÁCTICO",
            "content": "Personaje con rostro subido como referencia recibiendo una corona de luz pura. Iluminación espectacular en una catedral de cristal. Biometría facial de destino cumplido y poder absoluto."
        },
        {
            "id": "space_opera_68",
            "number": 68,
            "style": "Space Opera",
            "title": "DANZA EN GRAVEDAD CERO",
            "content": "Personaje con rostro subido como referencia en un salón de baile sin gravedad. Vestido de seda líquida PBR flotando. Luz de diamantes espaciales. Biometría de grácil movimiento técnico."
        },
        {
            "id": "space_opera_69",
            "number": 69,
            "style": "Space Opera",
            "title": "BIBLIOTECARIA DEL ARCHIVO GALÁCTICO",
            "content": "Personaje con rostro subido como referencia entre millones de cubos de memoria. Luz que pasa de cubo a cubo. Biometría facial de sabiduría infinita. Óptica Zeiss f/1.4."
        },
        {
            "id": "space_opera_70",
            "number": 70,
            "style": "Space Opera",
            "title": "EMERGENCIA EN EL PUENTE",
            "content": "Chispas saltando y paneles explotando. Personaje con rostro subido como referencia gritando órdenes. Luz de fuego y emergencia. Biometría facial de liderazgo bajo presión extrema."
        },
        {
            "id": "space_opera_71",
            "number": 71,
            "style": "Space Opera",
            "title": "EL TURISTA DEL TURISMO ESPACIAL",
            "content": "Personaje con rostro subido como referencia haciendo un selfie con el universo de fondo. Luz de lujo y vacaciones. Biometría facial de diversión y tecnología de consumo premium."
        },
        {
            "id": "space_opera_72",
            "number": 72,
            "style": "Space Opera",
            "title": "MANTENIDOR DE LA PAZ INTERGALÁCTICO",
            "content": "Mediadior con rostro subido como referencia entre dos razas en guerra. Luz de tregua. Biometría facial de imparcialidad y firmeza moral. Calidad Masterpiece."
        },
        {
            "id": "space_opera_73",
            "number": 73,
            "style": "Space Opera",
            "title": "LA BASE MINERA DE ASTEROIDES",
            "content": "Entrada de la cueva en el asteroide. Personaje con rostro subido como referencia con equipo pesado. Luz de focos de obra industrial. Biometría de dureza y sudor frío espacial."
        },
        {
            "id": "space_opera_74",
            "number": 74,
            "style": "Space Opera",
            "title": "PRESENTADOR DE NOTICIAS GALÁCTICAS",
            "content": "Hologramas de noticias de toda la galaxia rodeando al personaje con rostro subido como referencia. Luz de estudio de televisión futurista. Biometría facial de profesionalidad y carisma mediático."
        },
        {
            "id": "space_opera_75",
            "number": 75,
            "style": "Space Opera",
            "title": "CAPITÁN DE NAVE AL MANDO",
            "content": "Sentado en el trono de mando. Nave entrando en combate. Luz de escudos deflectores azul cian. Personaje con rostro subido como referencia con calma de mando. Óptica anamórfica Cooke."
        },
        {
            "id": "space_opera_76",
            "number": 76,
            "style": "Space Opera",
            "title": "ARQUITECTO DEL ENJAMBRE DE DYSON",
            "content": "Modelando millones de satélites solares. Personaje con rostro subido como referencia con manos de luz. Iluminación radiante. Biometría de ingeniería de escala estelar."
        },
        {
            "id": "space_opera_77",
            "number": 77,
            "style": "Space Opera",
            "title": "EL VIAJE DEL CONTRABANDISTA INTERESTELAR",
            "content": "Nave esquivando asteroides. Personaje con rostro subido como referencia con manos en el control de mando. Luz de explosiones esquivadas. Biometría facial de destreza al volante espacial."
        },
        {
            "id": "space_opera_78",
            "number": 78,
            "style": "Space Opera",
            "title": "EL ERMITAÑO GALÁCTICO",
            "content": "Viviendo en una pequeña luna solitaria. Personaje con rostro subido como referencia con ropa humilde y gadgets viejos. Luz de soledad y paz. Biometría facial de sabiduría solitaria. Sony Venice 2."
        },
        {
            "id": "space_opera_79",
            "number": 79,
            "style": "Space Opera",
            "title": "CELEBRACIÓN EN EL HANGAR",
            "content": "Retorno triunfal. Personaje con rostro subido como referencia rodeado de gente aplaudiendo. Luz de fiesta y victoria. Biometría facial de alegría desbordante y emoción."
        },
        {
            "id": "space_opera_80",
            "number": 80,
            "style": "Space Opera",
            "title": "DIPLOMÁTICO DEL CONSEJO GALÁCTICO",
            "content": "Debatiendo leyes espaciales. Personaje con rostro subido como referencia con elegancia y trajes de fibras inteligentes PBR. Luz de sala de asambleas. Biometría de intelecto político."
        },
        {
            "id": "space_opera_81",
            "number": 81,
            "style": "Space Opera",
            "title": "JUGADOR DE FÚTBOL EN GRAVEDAD CERO",
            "content": "Personaje con rostro subido como referencia en pleno salto acrobático. Luz de estadio futurista. Biometría facial de esfuerzo atlético y sudor en suspensión. Calidad IMAX."
        },
        {
            "id": "space_opera_82",
            "number": 82,
            "style": "Space Opera",
            "title": "EXPLORADOR DEL CEMENTERIO DE NAVES",
            "content": "Rostro subido como referencia con linterna explorando pasillos de naves abandonadas. Luz parpadeante y sombras inquietantes. Biometría facial de precaución y curiosidad técnica."
        },
        {
            "id": "space_opera_83",
            "number": 83,
            "style": "Space Opera",
            "title": "CANTANTE DE ÓPERA INTERESTELAR",
            "content": "Personaje con rostro subido como referencia en el escenario ante miles de planetas. Luz que cambia según la voz. Biometría facial de pasión artística suprema."
        },
        {
            "id": "space_opera_84",
            "number": 84,
            "style": "Space Opera",
            "title": "EL HISTORIADOR GALÁCTICO",
            "content": "Analizando artefactos de razas extintas. Personaje con rostro subido como referencia con guantes de seda táctica. Luz de museo antiguo-futurista. Biometría facial de respeto histórico."
        },
        {
            "id": "space_opera_85",
            "number": 85,
            "style": "Space Opera",
            "title": "REPARACIÓN DE NAVE EN COMBATE",
            "content": "Personaje con rostro subido como referencia fuera de la nave bajo fuego enemigo. Luz de trazadoras y láseres. Biometría facial de valentía extrema y pánico técnico controlado."
        },
        {
            "id": "space_opera_86",
            "number": 86,
            "style": "Space Opera",
            "title": "EL HEREDERO DEL EMPERADOR GALÁCTICO",
            "content": "Joven personaje con rostro subido como referencia con vestiduras reales y mirada de futuro. Luz de palacio estelar. Biometría de destino y peso de la corona. Zeiss Supreme Prime."
        },
        {
            "id": "space_opera_87",
            "number": 87,
            "style": "Space Opera",
            "title": "JUGADOR DE AJEDREZ INTERGALÁCTICO",
            "content": "Tablero de luz holográfica. Personaje con rostro subido como referencia pensando el siguiente movimiento. Luz de cálculo. Biometría facial de concentración intelectual absoluta."
        },
        {
            "id": "space_opera_88",
            "number": 88,
            "style": "Space Opera",
            "title": "EL CHEF DE LA NAVE ESTELAR",
            "content": "Cocinando platos moleculares gravitatorios. Personaje con rostro subido como referencia con uniforme impecable. Luz de cocina de alta tecnología. Biometría facial de maestría culinaria espacial."
        },
        {
            "id": "space_opera_89",
            "number": 89,
            "style": "Space Opera",
            "title": "OFICIAL DE POLICÍA DE LA ESTACIÓN",
            "content": "Rostro subido como referencia con uniforme táctico y arma de luz paralizante. Luz de patrulla. Biometría facial de vigilancia y orden galáctico. Sony Venice 2."
        },
        {
            "id": "space_opera_90",
            "number": 90,
            "style": "Space Opera",
            "title": "LLEGADA AL GIGANTE GASEOSO",
            "content": "Nave entrando en la atmósfera de Júpiter. Personaje con rostro subido como referencia viendo las nubes de gas infinitas. Luz de tormentas eléctricas planetarias. Biometría de asombro por la escala cósmica."
        },
        {
            "id": "space_opera_91",
            "number": 91,
            "style": "Space Opera",
            "title": "EL CAZADOR DE TESOROS GALÁCTICOS",
            "content": "Descubriendo una reliquia de luz. Personaje con rostro subido como referencia con cara iluminada por el tesoro. Biometría de éxito y maravilla técnica. Óptica Red V-Raptor."
        },
        {
            "id": "space_opera_92",
            "number": 92,
            "style": "Space Opera",
            "title": "MENSAJERO DE REPARTO INTERESTELAR",
            "content": "Nave pequeña rápida. Personaje con rostro subido como referencia entregando un paquete vital. Luz de prisa y eficiencia. Biometría facial de trabajo duro y compromiso espacial."
        },
        {
            "id": "space_opera_93",
            "number": 93,
            "style": "Space Opera",
            "title": "EL DISEÑADOR DE NAVES",
            "content": "Hologramas de fuselajes y motores rodeando al personaje con rostro subido como referencia. Luz de taller de ingeniería avanzada. Biometría facial de genialidad creativa."
        },
        {
            "id": "space_opera_94",
            "number": 94,
            "style": "Space Opera",
            "title": "CEREMONIA DE BODA GALÁCTICA",
            "content": "Personaje con rostro subido como referencia casándose ante un sol naciente espacial. Vestidos de luz y pétalos de neón. Biometría facial de amor universal y técnica nupcial futurista."
        },
        {
            "id": "space_opera_95",
            "number": 95,
            "style": "Space Opera",
            "title": "EL MECÁNICO DE LA ESTACIÓN",
            "content": "Rostro subido como referencia manchado de grasas técnicas y sudor bajo luz de neón blanca. Biometría de esfuerzo físico y precisión manual espacial. Arri Alexa 35."
        },
        {
            "id": "space_opera_96",
            "number": 96,
            "style": "Space Opera",
            "title": "LLEGADA AL SISTEMA DE ESTRELLAS BINARIAS",
            "content": "Dos soles en el cielo de la cabina. Personaje con rostro subido como referencia con sombras dobles complejas. Luz blanca y naranja cruzada. Biometría facial de asombro astrológico."
        },
        {
            "id": "space_opera_97",
            "number": 97,
            "style": "Space Opera",
            "title": "EL TRATADO DE PAZ INTERGALÁCTICO",
            "content": "Firmando en un panel de luz. Personaje con rostro subido como referencia con expresión de alivio y triunfo diplomático. Luz de esperanza y concordia galáctica."
        },
        {
            "id": "space_opera_98",
            "number": 98,
            "style": "Space Opera",
            "title": "EL GUARDIÁN DEL ARCHIVO GALÁCTICO",
            "content": "Personaje con rostro subido como referencia con armadura ceremonial y lanza de luz. Luz de custodia sagrada. Biometría facial de lealtad y protección del conocimiento."
        },
        {
            "id": "space_opera_99",
            "number": 99,
            "style": "Space Opera",
            "title": "EL ÚLTIMO VIAJERO ESPACIAL",
            "content": "Nave alejándose de una galaxia que se apaga. Personaje con rostro subido como referencia mirando por última vez. Luz residual y sombras de final. Biometría de melancolía cósmica absoluta."
        },
        {
            "id": "space_opera_100",
            "number": 100,
            "style": "Space Opera",
            "title": "EL REGRESO DEL CAPITÁN DE LA NAVE",
            "content": "Nave aterrizando en el puerto base. Personaje con rostro subido como referencia bajando la pasarela ante una multitud. Luz de bienvenida triunfal. Biometría facial de éxito y reencuentro heroico. Calidad definitiva Hyper-Ultimate."
        }
    ],
    "Post-Apocalíptico": [
        {
            "id": "post-apocaliptico_1",
            "number": 1,
            "style": "Post-Apocalíptico",
            "title": "LA RECONQUISTA DE LA NATURALEZA",
            "content": "Plano general de una avenida de Manhattan devorada por hiedra y árboles. Captura con Red V-Raptor y lente vintage Panavision. Personaje con rostro subido como referencia con ropa de lona desgastada (PBR) observando un ciervo entre coches oxidados. Iluminación de \"hora dorada\" filtrada por edificios en ruinas. Biometría facial con sudor y polvo fino. Calidad 8K fotorrealista."
        },
        {
            "id": "post-apocaliptico_2",
            "number": 2,
            "style": "Post-Apocalíptico",
            "title": "MECÁNICO DEL PÁRAMO",
            "content": "Primer plano de rostro subido como referencia bajo el capó de un vehículo oxidado al estilo Mad Max. Luz solar dura del desierto creando sombras profundas (HDR). Biometría facial extrema: poros obstruidos por grasa, quemaduras solares leves y vello facial con arena incrustada. Textura de metal corroído y cuero endurecido PBR. Óptica Leica 50mm."
        },
        {
            "id": "post-apocaliptico_3",
            "number": 3,
            "style": "Post-Apocalíptico",
            "title": "ASENTAMIENTO EN EL METRO",
            "content": "Interior de túnel de metro iluminado por hornillos de gas y luces LED improvisadas. Personaje con rostro subido como referencia sentado sobre raíles. Humo volumétrico y partículas de polvo en suspensión. Textura de paredes de hormigón con humedad y moho (Sub-surface scattering). Biometría facial con reflejos de llamas en el iris."
        },
        {
            "id": "post-apocaliptico_4",
            "number": 4,
            "style": "Post-Apocalíptico",
            "title": "LA ÚLTIMA BIBLIOTECA",
            "content": "Personaje con rostro subido como referencia leyendo un libro descompuesto en una sala con el techo hundido. Luz natural cenital que resalta el polvo de papel flotando. Biometría facial de nostalgia y concentración. Textura de terciopelo podrido y madera vieja PBR. Calidad cinematográfica Arri Alexa."
        },
        {
            "id": "post-apocaliptico_5",
            "number": 5,
            "style": "Post-Apocalíptico",
            "title": "CHATARRERO QUIRÚRGICO",
            "content": "Personaje con rostro subido como referencia extrayendo microchips de un robot antiguo en un vertedero. Luz azulada de linterna frontal. Biometría facial de fatiga ocular y precisión. Textura de cables de cobre oxidados y circuitos integrados cubiertos de tierra. Estética técnica sucia."
        },
        {
            "id": "post-apocaliptico_6",
            "number": 6,
            "style": "Post-Apocalíptico",
            "title": "NÓMADA COSTERO",
            "content": "Caminando por una playa con barcos encallados de casco oxidado. Personaje con rostro subido como referencia con poncho de plástico reciclado texturizado. Iluminación difusa de día nublado. Biometría facial con labios agrietados por la salitre y micro-gotas de lluvia en las pestañas. Fotografía 8K."
        },
        {
            "id": "post-apocaliptico_7",
            "number": 7,
            "style": "Post-Apocalíptico",
            "title": "EL NIDO DEL FRANCOTIRADOR",
            "content": "En lo alto de un rascacielos sin cristales. Personaje con rostro subido como referencia mirando por la mira telescópica. Viento visible moviendo el pelo sucio. Biometría facial: pupila contraída y tensión en la mandíbula. Textura de cemento desconchado y metal de fusil envejecido. Sony Venice 2."
        },
        {
            "id": "post-apocaliptico_8",
            "number": 8,
            "style": "Post-Apocalíptico",
            "title": "REUNIÓN DE SUPERVIVIENTES",
            "content": "Grupo alrededor de una fogata en un centro comercial vacío. Rostro subido como referencia iluminado por el fuego parpadeante. Sombras proyectadas en las paredes de tiendas abandonadas. Biometría facial de desconfianza y hermandad. Textura de mantas de lana rústica y latas de comida oxidadas."
        },
        {
            "id": "post-apocaliptico_9",
            "number": 9,
            "style": "Post-Apocalíptico",
            "title": "EL CRUCE DEL PUENTE",
            "content": "Puente colgante con vegetación salvaje. Personaje con rostro subido como referencia cruzando con cautela. Luz de tormenta inminente con atmósfera cargada. Biometría facial de miedo controlado. Textura de asfalto agrietado y cables de acero con herrumbre PBR."
        },
        {
            "id": "post-apocaliptico_10",
            "number": 10,
            "style": "Post-Apocalíptico",
            "title": "RETRATO CON MÁSCARA DE GAS",
            "content": "Rostro subido como referencia con máscara de gas militar antigua, un cristal roto muestra el ojo. Biometría facial visible en el ojo: terror y dilatación capilar. Reflejo de un paisaje desolado en el visor. Textura de goma cuarteada y óxido de filtro. Estética Stalker."
        },
        {
            "id": "post-apocaliptico_11",
            "number": 11,
            "style": "Post-Apocalíptico",
            "title": "EL HOSPITAL ABANDONADO",
            "content": "Pasillo con camillas oxidadas y vegetación saliendo de las baldosas. Rostro subido como referencia buscando medicinas. Luz fluorescente intermitente. Biometría de alerta máxima. Textura de azulejos rotos y acero inoxidable picado."
        },
        {
            "id": "post-apocaliptico_12",
            "number": 12,
            "style": "Post-Apocalíptico",
            "title": "OPERADOR DE RADIO",
            "content": "En un bunker improvisado. Rostro subido como referencia con auriculares de la era soviética. Luz de válvulas de radio calientes (Brillo naranja). Biometría facial: marcas de los auriculares en la piel y sudor. Textura de baquelita y cables encerados."
        },
        {
            "id": "post-apocaliptico_13",
            "number": 13,
            "style": "Post-Apocalíptico",
            "title": "EL MAR SECO",
            "content": "Fondo de oceano seco con esqueletos de ballenas y barcos. Rostro subido como referencia con gafas protectoras llenas de polvo. Luz solar abrasadora de 12:00. Biometría facial de deshidratación. Textura de arena blanca y madera de deriva."
        },
        {
            "id": "post-apocaliptico_14",
            "number": 14,
            "style": "Post-Apocalíptico",
            "title": "JARDÍN EN LA AZOTEA",
            "content": "Cultivos ecológicos entre paneles solares rotos. Rostro subido como referencia regando plantas con agua de lluvia. Luz de mañana fresca. Biometría de esperanza y cuidado. Textura de tierra húmeda y metal galvanizado."
        },
        {
            "id": "post-apocaliptico_15",
            "number": 15,
            "style": "Post-Apocalíptico",
            "title": "EL GUARDIÁN DE LA AUTOPISTA",
            "content": "Puesto de control en una carretera bloqueada por cientos de coches. Rostro subido como referencia con chaqueta de cuero con remaches. Luz de puesta de sol roja. Biometría de autoridad endurecida. Textura de neumáticos quemados y asfalto derretido."
        },
        {
            "id": "post-apocaliptico_16",
            "number": 16,
            "style": "Post-Apocalíptico",
            "title": "CAZADOR DE MUTANTES",
            "content": "Personaje con rostro subido como referencia con ballesta de fibra de carbono sucia. Huellas de pisadas en barro radiactivo (Luz verde tenue). Biometría de concentración absoluta. Textura de camuflaje de barro y sangre seca. Red V-Raptor."
        },
        {
            "id": "post-apocaliptico_17",
            "number": 17,
            "style": "Post-Apocalíptico",
            "title": "LA CATEDRAL SILENCIOSA",
            "content": "Iglesia gótica con el altar cubierto de hiedra. Rostro subido como referencia rezando o descansando. Luz filtrada por vidrieras rotas creando patrones de colores en el rostro. Biometría de paz espiritual en el caos. Textura de piedra porosa y musgo."
        },
        {
            "id": "post-apocaliptico_18",
            "number": 18,
            "style": "Post-Apocalíptico",
            "title": "CIBER-ADICTO DEL PÁRAMO",
            "content": "Viviendo en una alcantarilla con pantallas de tubos viejos. Rostro subido como referencia con cables conectados a la sien. Luz parpadeante de monitores. Biometría de degradación mental y física. Textura de basura tecnológica y humedad."
        },
        {
            "id": "post-apocaliptico_19",
            "number": 19,
            "style": "Post-Apocalíptico",
            "title": "EL CONVOY DE REFUGIADOS",
            "content": "Camiones improvisados llenos de gente. Rostro subido como referencia mirando por la lona trasera. Luz de lluvia constante. Biometría de tristeza y pérdida. Textura de metal corrugado y lona impermeable sucia."
        },
        {
            "id": "post-apocaliptico_20",
            "number": 20,
            "style": "Post-Apocalíptico",
            "title": "APOCALIPSIS HELADO",
            "content": "Ciudad enterrada en nieve y hielo. Rostro subido como referencia con vaho saliendo de la boca (Partículas volumétricas). Biometría de frío extremo: mejillas rojas y escarcha en cejas. Textura de piel de animal y hielo translúcido."
        },
        {
            "id": "post-apocaliptico_21",
            "number": 21,
            "style": "Post-Apocalíptico",
            "title": "EL LABORATORIO SUBTERRÁNEO",
            "content": "Científico con rostro subido como referencia cultivando bacterias en placas de Petri bajo luz ultravioleta. Biometría de fatiga crónica debajo de los ojos. Textura de guantes de nitrilo y acero frío. Calidad técnica Sony Venice."
        },
        {
            "id": "post-apocaliptico_22",
            "number": 22,
            "style": "Post-Apocalíptico",
            "title": "NÓMADA DEL DESIERTO",
            "content": "Capa de tela basta cubriendo al rostro subido como referencia durante una tormenta de arena. Luz ámbar cegadora. Biometría: ojos entrecerrados y arena en los poros. Textura de tela desgastada por el viento PBR."
        },
        {
            "id": "post-apocaliptico_23",
            "number": 23,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO CINE",
            "content": "Proyectando una película vieja en una sábana blanca. Rostro subido como referencia mirando con nostalgia. Luz del proyector creando sombras duras. Biometría facial de emoción contenida. Textura de asientos de terciopelo podrido."
        },
        {
            "id": "post-apocaliptico_24",
            "number": 24,
            "style": "Post-Apocalíptico",
            "title": "PURIFICADOR DE AGUA",
            "content": "Máquina compleja de tuberías y filtros en un sótano. Rostro subido como referencia ajustando una válvula. Luz de linterna reflejada en el agua estancada. Biometría de precisión manual. Textura de óxido de hierro y cobre."
        },
        {
            "id": "post-apocaliptico_25",
            "number": 25,
            "style": "Post-Apocalíptico",
            "title": "EL NIÑO GUERRERO",
            "content": "Rostro subido como referencia (versión joven) con casco de adulto demasiado grande. Portando un arma de madera y metal. Luz de atardecer esperanzador. Biometría de inocencia perdida. Textura de ropa de retales."
        },
        {
            "id": "post-apocaliptico_26",
            "number": 26,
            "style": "Post-Apocalíptico",
            "title": "ESCAPE DE LA ZONA",
            "content": "Corriendo a través de una valla de espino. Rostro subido como referencia con expresión de terror puro. Luz de focos de búsqueda enemigos tras él. Biometría: sudor, lágrimas y barro. Desenfoque de movimiento cinematográfico."
        },
        {
            "id": "post-apocaliptico_27",
            "number": 27,
            "style": "Post-Apocalíptico",
            "title": "EL BANQUETE RECOLECTADO",
            "content": "Cenando una rata asada o similar sobre un barril de aceite. Rostro subido como referencia con luz de fogata. Biometría de hambre satisfecha. Textura de carne quemada y metal tiznado de hollín."
        },
        {
            "id": "post-apocaliptico_28",
            "number": 28,
            "style": "Post-Apocalíptico",
            "title": "CEMENTERIO DE AVIONES",
            "content": "Fuselas de Boeings oxidados en el desierto. Rostro subido como referencia caminando por un ala. Luz solar lateral que resalta los remaches del metal. Biometría de insignificancia ante la caída de la aviación."
        },
        {
            "id": "post-apocaliptico_29",
            "number": 29,
            "style": "Post-Apocalíptico",
            "title": "LA ÚLTIMA MÚSICA",
            "content": "Tocando un violín con cuerdas de alambre en una estación abandonada. Rostro subido como referencia con ojos cerrados. Luz de luna entrando por el techo. Biometría de éxtasis artístico. Textura de madera barnizada vieja."
        },
        {
            "id": "post-apocaliptico_30",
            "number": 30,
            "style": "Post-Apocalíptico",
            "title": "ZONA DE PELIGRO BIOLÓGICO",
            "content": "Niebla amarilla tóxica (Volumétrica). Rostro subido como referencia con traje NBQ amarillo roto. Biometría de tos y asfixia visible en el cuello. Textura de plástico degradado y cinta aislante sucia."
        },
        {
            "id": "post-apocaliptico_31",
            "number": 31,
            "style": "Post-Apocalíptico",
            "title": "LA TORRE DE VIGILANCIA",
            "content": "Hecha de maderas y metal de chatarra sobre un silo de misiles. Rostro subido como referencia con prismáticos. Luz de amanecer frío. Biometría de vigilancia eterna. Textura de madera astillada."
        },
        {
            "id": "post-apocaliptico_32",
            "number": 32,
            "style": "Post-Apocalíptico",
            "title": "BODA POST-APOCALÍPTICA",
            "content": "Vestido hecho de paracaídas y traje de soldado viejo. Rostro subido como referencia con corona de flores de plástico. Luz entre las ruinas de un ayuntamiento. Biometría de amor resistente."
        },
        {
            "id": "post-apocaliptico_33",
            "number": 33,
            "style": "Post-Apocalíptico",
            "title": "COMANDANTE DE TANQUE",
            "content": "Asomado por la escotilla de un tanque T-72 oxidado pero funcional. Rostro subido como referencia con grasa en las mejillas. Luz de bengala roja en el cielo. Biometría de mando agresivo. Textura de acero fundido."
        },
        {
            "id": "post-apocaliptico_34",
            "number": 34,
            "style": "Post-Apocalíptico",
            "title": "FUEGO DE SEÑAL",
            "content": "En la cima de una montaña de escombros. Rostro subido como referencia avivando una hoguera gigante. Luz naranja intensa contra cielo negro de ceniza. Biometría de esperanza desesperada."
        },
        {
            "id": "post-apocaliptico_35",
            "number": 35,
            "style": "Post-Apocalíptico",
            "title": "EL ARCHIVISTA DE ECOS",
            "content": "Escuchando grabaciones de cintas magnetofónicas viejas. Rostro subido como referencia rodeado de cientos de casetes. Luz cálida de flexo antiguo. Biometría de melancolía por el pasado sonoro."
        },
        {
            "id": "post-apocaliptico_36",
            "number": 36,
            "style": "Post-Apocalíptico",
            "title": "LÍDER DEL ASENTAMIENTO DEL PUENTE",
            "content": "Rostro subido como referencia con capa de piel de oso y collares de balas. Ante un trono de neumáticos. Luz de antorchas. Biometría de carisma tribal y poder bruto. Arri Raw."
        },
        {
            "id": "post-apocaliptico_37",
            "number": 37,
            "style": "Post-Apocalíptico",
            "title": "LA CLÍNICA MÉDICA",
            "content": "Mesa de operaciones en una antigua tienda de muebles. Rostro subido como referencia operando con herramientas de carpintería. Luz de linternas LED. Biometría de concentración macabra pero necesaria."
        },
        {
            "id": "post-apocaliptico_38",
            "number": 38,
            "style": "Post-Apocalíptico",
            "title": "ASENTAMIENTO EN SUBMARINO HUNDIDO",
            "content": "Gente viviendo en los compartimentos iluminados por algas bioluminiscentes. Rostro subido como referencia mirando por un ojo de buey al abismo. Biometría de claustrofobia aceptada."
        },
        {
            "id": "post-apocaliptico_39",
            "number": 39,
            "style": "Post-Apocalíptico",
            "title": "EL COLECTOR DE LLUVIA",
            "content": "Rostro subido como referencia bebiendo del agua que cae de una lona en una ciudad gris. Micro-gotas de agua realistas en la piel y ropa. Biometría de alivio vital. Textura de plástico mojado PBR."
        },
        {
            "id": "post-apocaliptico_40",
            "number": 40,
            "style": "Post-Apocalíptico",
            "title": "CONDUCTOR DEL CAMIÓN DE GUERRA",
            "content": "Rostro subido como referencia al volante de un monstruo mecánico de 18 ruedas. Tatuajes de ceniza en los brazos. Luz solar abrasadora a través del parabrisas sucio. Biometría de furia al volante. Mad Max style."
        },
        {
            "id": "post-apocaliptico_41",
            "number": 41,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO INVERNADERO",
            "content": "Cuidando un pequeño brote verde en medio de un desierto de ceniza negra. Rostro subido como referencia con guantes quirúrgicos rotos. Luz de esperanza filtrada. Biometría de ternura en un mundo cruel."
        },
        {
            "id": "post-apocaliptico_42",
            "number": 42,
            "style": "Post-Apocalíptico",
            "title": "ESCAPE POR EL TÚNEL",
            "content": "Huyendo por el alcantarillado. Rostro subido como referencia con agua por las rodillas. Luz de linterna enemiga proyectando sombras gigantes. Biometría de pánico y esfuerzo físico extremo."
        },
        {
            "id": "post-apocaliptico_43",
            "number": 43,
            "style": "Post-Apocalíptico",
            "title": "EL CARRO DEL CHATARRERO",
            "content": "Tirando de un carro lleno de piezas de motor y latas. Rostro subido como referencia con arnés de cuero. Luz de atardecer polvoriento. Biometría de esfuerzo muscular y fatiga. Textura de metal y suciedad."
        },
        {
            "id": "post-apocaliptico_44",
            "number": 44,
            "style": "Post-Apocalíptico",
            "title": "RELIQUIA DEL VIEJO MUNDO",
            "content": "Rostro subido como referencia encontrando un iPhone roto o un juguete de peluche. Luz suave de descubrimiento. Biometría facial de tristeza por lo perdido. Calidad fotorrealista 8K."
        },
        {
            "id": "post-apocaliptico_45",
            "number": 45,
            "style": "Post-Apocalíptico",
            "title": "EL MURO DE LA FORTALEZA",
            "content": "Ciudadela hecha con contenedores de carga. Rostro subido como referencia vigilando con ametralladora fija. Luz de focos industriales. Biometría de guardia implacable. Textura de pintura desconchada."
        },
        {
            "id": "post-apocaliptico_46",
            "number": 46,
            "style": "Post-Apocalíptico",
            "title": "CAZADOR SILENCIOSO",
            "content": "Vestido con pieles de lobo en un bosque muerto. Rostro subido como referencia con arco tensado. Luz de luna entre ramas secas. Biometría de depredador sigiloso. Textura de pelo animal y escarcha."
        },
        {
            "id": "post-apocaliptico_47",
            "number": 47,
            "style": "Post-Apocalíptico",
            "title": "EL PIRATA DE LA RADIO",
            "content": "Transmitiendo desde una antena en lo alto de una montaña. Rostro subido como referencia hablando al micro. Luz de tormenta eléctrica de fondo. Biometría de desafío comunicativo."
        },
        {
            "id": "post-apocaliptico_48",
            "number": 48,
            "style": "Post-Apocalíptico",
            "title": "EL MAPA DEL SUPERVIVIENTE",
            "content": "Marcando rutas en un mapa de papel raído. Rostro subido como referencia con luz de vela lateral. Biometría de estrategia y supervivencia planificada. Textura de papel antiguo y manchas de sangre seca."
        },
        {
            "id": "post-apocaliptico_49",
            "number": 49,
            "style": "Post-Apocalíptico",
            "title": "LA ÚLTIMA ESCUELA",
            "content": "Enseñando a niños en un aula bombardeada. Rostro subido como referencia escribiendo en una pizarra rota con carbón. Luz de sol a través de agujeros de bala. Biometría de dedicación pedagógica."
        },
        {
            "id": "post-apocaliptico_50",
            "number": 50,
            "style": "Post-Apocalíptico",
            "title": "REGANDO EL MUNDO MUERTO",
            "content": "Rostro subido como referencia tirando agua sobre un suelo estéril. Luz de mediodía gris. Biometría facial de locura o fe extrema. Textura de tierra agrietada en 3D."
        },
        {
            "id": "post-apocaliptico_51",
            "number": 51,
            "style": "Post-Apocalíptico",
            "title": "EL ARQUITECTO DE BÚNKERES",
            "content": "Rostro subido como referencia diseñando sistemas de ventilación con planos viejos. Luz fría de neón químico. Biometría de paranoia y genio de la ingeniería. Textura de metal y hormigón."
        },
        {
            "id": "post-apocaliptico_52",
            "number": 52,
            "style": "Post-Apocalíptico",
            "title": "LÍDER CANÍBAL",
            "content": "Aura aterradora. Rostro subido como referencia con pinturas de guerra de sangre humana. Luz de hogueras nocturnas. Biometría de sociopatía y hambre salvaje. Estética de terror post-apocalíptico."
        },
        {
            "id": "post-apocaliptico_53",
            "number": 53,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO FLORISTA",
            "content": "Rostro subido como referencia vendiendo flores de plástico y metal. Luz de mercado callejero decadente. Biometría de ironía comercial. Textura de materiales sintéticos degradados."
        },
        {
            "id": "post-apocaliptico_54",
            "number": 54,
            "style": "Post-Apocalíptico",
            "title": "ALTAR DEL BLOQUE DE MOTOR",
            "content": "Tribu adorando una turbina de avión. Rostro subido como referencia con manos de grasa en el metal. Luz de fuegos rituales. Biometría de fanatismo tecnológico. Estética Mad Max."
        },
        {
            "id": "post-apocaliptico_55",
            "number": 55,
            "style": "Post-Apocalíptico",
            "title": "ESCAPE POR EL RÍO",
            "content": "En una balsa improvisada de bidones. Rostro subido como referencia remando en aguas negras por residuos químicos. Luz de luna reflejada en el aceite. Biometría de urgencia y asco por el entorno."
        },
        {
            "id": "post-apocaliptico_56",
            "number": 56,
            "style": "Post-Apocalíptico",
            "title": "EL REPARADOR DE JUGUETES",
            "content": "Gente esperando con peluches rotos. Rostro subido como referencia cosiendo con alambre. Luz de atardecer cálida. Biometría de bondad en el apocalipsis. Textura de trapo y metal."
        },
        {
            "id": "post-apocaliptico_57",
            "number": 57,
            "style": "Post-Apocalíptico",
            "title": "TORMENTA RADIACTIVA",
            "content": "Cielo verde esmeralda con rayos. Rostro subido como referencia buscando refugio. Biometría de dolor por radiación (Piel irritada). Luz atmosférica irreal. Calidad IMAX 8K."
        },
        {
            "id": "post-apocaliptico_58",
            "number": 58,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO CAFÉ",
            "content": "Herviendo granos viejos en una lata sobre fuego. Rostro subido como referencia oliendo el vapor. Biometría de placer supremo por un pequeño lujo. Textura de metal negro por el hollín."
        },
        {
            "id": "post-apocaliptico_59",
            "number": 59,
            "style": "Post-Apocalíptico",
            "title": "TATUADOR POST-APOCALÍPTICO",
            "content": "Dibujando en la piel con tinta de carbón y agujas de hueso. Rostro subido como referencia tatuando a otro. Luz de antorcha. Biometría de concentración artesanal. Textura de piel tatuada PBR."
        },
        {
            "id": "post-apocaliptico_60",
            "number": 60,
            "style": "Post-Apocalíptico",
            "title": "EL ZOO ABANDONADO",
            "content": "Leones libres en una ciudad en ruinas. Rostro subido como referencia escondido tras un muro. Luz solar a través de las rejas rotas. Biometría de terror animal. Textura de piedra y pelo animal."
        },
        {
            "id": "post-apocaliptico_61",
            "number": 61,
            "style": "Post-Apocalíptico",
            "title": "REPARACIÓN DE BRAZO MECÁNICO",
            "content": "Rostro subido como referencia ajustando su propia prótesis de chatarra con un destornillador. Luz de taller improvisado. Biometría de dolor y destreza mecánica. Textura de metal, aceite y carne."
        },
        {
            "id": "post-apocaliptico_62",
            "number": 62,
            "style": "Post-Apocalíptico",
            "title": "NIÑO DEL ASENTAMIENTO DEL PUENTE",
            "content": "Rostro subido como referencia (niño) pescando en el río con caña de cable de acero. Luz de mediodía nublado. Biometría de paciencia infantil y madurez forzada."
        },
        {
            "id": "post-apocaliptico_63",
            "number": 63,
            "style": "Post-Apocalíptico",
            "title": "SANTUARIO EN LA GASOLINERA",
            "content": "Convertida en fortaleza. Rostro subido como referencia en el techo con rifle de largo alcance. Luz de puesta de sol dorada sobre los surtidores oxidados. Biometría facial de guardia táctico profesional."
        },
        {
            "id": "post-apocaliptico_64",
            "number": 64,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO GUARDIÁN DE LA BIBLIOTECA",
            "content": "Rostro subido como referencia con espada protegiendo miles de libros de un grupo de bárbaros. Luz de polvareda y violencia inminente. Biometría de honor y cultura bajo asedio."
        },
        {
            "id": "post-apocaliptico_65",
            "number": 65,
            "style": "Post-Apocalíptico",
            "title": "RETRATO EN AUTOPISTA DESOLADA",
            "content": "En medio de una línea infinita de coches parados. Rostro subido como referencia caminando solo hacia el horizonte. Luz de sol de invierno pálida. Biometría facial de soledad existencial completa."
        },
        {
            "id": "post-apocaliptico_66",
            "number": 66,
            "style": "Post-Apocalíptico",
            "title": "EL CIBER-CHAMÁN",
            "content": "Rostro subido como referencia con collares de microchips y pinturas de neón. Ante un servidor apagado como un dios. Luz de velas y luces LED parpadeantes. Biometría de misticismo tecnológico."
        },
        {
            "id": "post-apocaliptico_67",
            "number": 67,
            "style": "Post-Apocalíptico",
            "title": "LUCHADOR DE ARENA SUBTERRÁNEA",
            "content": "Rostro subido como referencia con nariz rota y sudor antes de un combate. Luz de focos de coche. Biometría facial de agresividad y supervivencia bruta. Textura de piel con hematomas."
        },
        {
            "id": "post-apocaliptico_68",
            "number": 68,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO GRANJERO",
            "content": "Arando tierra estéril con un buey o un tractor de vapor. Rostro subido como referencia con sombrero de paja de metal. Luz de mañana polvorienta. Biometría de perseverancia agrícola."
        },
        {
            "id": "post-apocaliptico_69",
            "number": 69,
            "style": "Post-Apocalíptico",
            "title": "SUICIDIO EN LA TORRE DE RADIO",
            "content": "Rostro subido como referencia en lo más alto, contemplando el fin del mundo. Viento extremo azotando la cara. Biometría de derrota absoluta. Luz crepuscular de 8000K."
        },
        {
            "id": "post-apocaliptico_70",
            "number": 70,
            "style": "Post-Apocalíptico",
            "title": "EL GUARDIA DEL MERCADER DE AGUA",
            "content": "Rostro subido como referencia con armadura de placas de matrícula de coche. Protegiendo un tanque de agua limpia. Luz de sol reflejada en el metal. Biometría de vigilancia mercenaria."
        },
        {
            "id": "post-apocaliptico_71",
            "number": 71,
            "style": "Post-Apocalíptico",
            "title": "MÚSICO POST-APOCALÍPTICO",
            "content": "Guitarra hecha con un bidón de aceite. Rostro subido como referencia tocando blues del páramo. Luz de hoguera. Biometría de alma atormentada. Textura de metal corrugado y madera sucia."
        },
        {
            "id": "post-apocaliptico_72",
            "number": 72,
            "style": "Post-Apocalíptico",
            "title": "LA ÚLTIMA NAVIDAD",
            "content": "Rostro subido como referencia decorando un árbol de metal con latas vacías. Luz de una sola bombilla roja parpadeante. Biometría facial de tristeza y esfuerzo por mantener la tradición."
        },
        {
            "id": "post-apocaliptico_73",
            "number": 73,
            "style": "Post-Apocalíptico",
            "title": "ASENTAMIENTO EN PORTAAVIONES ABANDONADO",
            "content": "Rostro subido como referencia en la pista de aterrizaje convertida en huerto. Luz de mar picado y cielo tormentoso. Biometría de vida en altamar post-catástrofe."
        },
        {
            "id": "post-apocaliptico_74",
            "number": 74,
            "style": "Post-Apocalíptico",
            "title": "EL DESCUBRIMIENTO DEL CHATARRERO",
            "content": "Rostro subido como referencia encontrando una caja llena de antibióticos sellados. Luz de victoria y emoción bajo una linterna. Biometría: manos temblorosas y ojos brillantes."
        },
        {
            "id": "post-apocaliptico_75",
            "number": 75,
            "style": "Post-Apocalíptico",
            "title": "MECÁNICO DEL CAMIÓN DE GUERRA",
            "content": "Colgado bajo el motor de un vehículo en marcha. Rostro subido como referencia con gafas de soldador. Luz de chispas y aceite caliente. Biometría de peligro laboral extremo."
        },
        {
            "id": "post-apocaliptico_76",
            "number": 76,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO MÉDICO",
            "content": "Rostro subido como referencia con bata sucia y estetoscopio de antes de la guerra. En una tienda de campaña. Luz de faroles de queroseno. Biometría de agotamiento y dilema moral."
        },
        {
            "id": "post-apocaliptico_77",
            "number": 77,
            "style": "Post-Apocalíptico",
            "title": "BUNKER CIBER-PUNK",
            "content": "Rostro subido como referencia con implantes de luz y ropa de vinilo degradado. Fondo de consolas de mando. Luz de código ASCII. Biometría de alienación tecnológica."
        },
        {
            "id": "post-apocaliptico_78",
            "number": 78,
            "style": "Post-Apocalíptico",
            "title": "EL PERRO DEL GUERRERO DE LA CARRETERA",
            "content": "Rostro subido como referencia acariciando a un perro mestizo con armadura de cuero. Luz de atardecer en la ruta. Biometría de amor animal como única compañía. Textura de pelo y piel."
        },
        {
            "id": "post-apocaliptico_79",
            "number": 79,
            "style": "Post-Apocalíptico",
            "title": "LA GRAN MIGRACIÓN",
            "content": "Miles de personas caminando por un desierto de sal. Rostro subido como referencia en primer plano, parte de la multitud. Luz blanca cegadora. Biometría de cansancio infinito y dirección fija."
        },
        {
            "id": "post-apocaliptico_80",
            "number": 80,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO OBSERVADOR DE ESTRELLAS",
            "content": "Rostro subido como referencia con telescopio de tubos de PVC. En un mundo sin luces de ciudad, el cielo es una nebulosa HDR. Biometría de asombro cósmico ante la oscuridad de la Tierra."
        },
        {
            "id": "post-apocaliptico_81",
            "number": 81,
            "style": "Post-Apocalíptico",
            "title": "DÍA DE MERCADO POST-APOCALÍPTICO",
            "content": "Trueque de munición por comida. Rostro subido como referencia negociando. Luz de mediodía caluroso y sucio. Biometría facial de astucia y sospecha constante. Calidad Arri Alexa."
        },
        {
            "id": "post-apocaliptico_82",
            "number": 82,
            "style": "Post-Apocalíptico",
            "title": "LA MANSIÓN ABANDONADA",
            "content": "Rostro subido como referencia viviendo entre muebles de oro rotos y polvo acumulado. Luz de tarde a través de cortinas de seda podrida. Biometría de decadencia aristocrática."
        },
        {
            "id": "post-apocaliptico_83",
            "number": 83,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO PANADERO",
            "content": "Amasando harina de dudosa procedencia. Rostro subido como referencia frente a un horno de piedra. Luz naranja del fuego. Biometría facial de calor y trabajo tradicional."
        },
        {
            "id": "post-apocaliptico_84",
            "number": 84,
            "style": "Post-Apocalíptico",
            "title": "RASTREANDO LAS RUINAS",
            "content": "Rostro subido como referencia escalando la fachada de un rascacielos derrumbado. Luz solar lateral y sombras de abismo. Biometría facial de esfuerzo atlético y vértigo controlado."
        },
        {
            "id": "post-apocaliptico_85",
            "number": 85,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO CARTERO",
            "content": "En una bicicleta vieja por pistas de tierra. Rostro subido como referencia con bolsa de cuero llena de cartas manuscritas. Luz de mañana nublada. Biometría de compromiso civil póstumo."
        },
        {
            "id": "post-apocaliptico_86",
            "number": 86,
            "style": "Post-Apocalíptico",
            "title": "ESCAPE A TRAVÉS DEL BOSQUE",
            "content": "Rostro subido como referencia perseguido por sombras mecánicas. Luz de luna azulada. Biometría facial de terror y adrenalina pura. Rasguños de ramas en la piel. Sony Venice 2."
        },
        {
            "id": "post-apocaliptico_87",
            "number": 87,
            "style": "Post-Apocalíptico",
            "title": "LA ÚLTIMA TRANSMISIÓN DE RADIO",
            "content": "Rostro subido como referencia hablando al silencio del éter. Luz de una única lámpara. Biometría facial de soledad extrema y mensaje a la humanidad inexistente."
        },
        {
            "id": "post-apocaliptico_88",
            "number": 88,
            "style": "Post-Apocalíptico",
            "title": "GLADIADOR POST-APOCALÍPTICO",
            "content": "Armado con un bate con clavos y escudo de señal de \"Stop\". Rostro subido como referencia gritando en el coliseo de chatarra. Luz de focos enemigos. Biometría de furia combativa."
        },
        {
            "id": "post-apocaliptico_89",
            "number": 89,
            "style": "Post-Apocalíptico",
            "title": "EL LABORATORIO DEL ÚLTIMO CIENTÍFICO",
            "content": "Rodeado de frascos con especímenes mutantes. Rostro subido como referencia con bata y gafas de protección blancas. Luz quirúrgica fría. Biometría de locura racional y obsesión biológica."
        },
        {
            "id": "post-apocaliptico_90",
            "number": 90,
            "style": "Post-Apocalíptico",
            "title": "EL DESCUBRIMIENTO DEL OASIS",
            "content": "Rostro subido como referencia encontrando una fuente de agua limpia en un desierto negro. Luz de sol reflejada en el agua pura. Biometría de alivio y milagro biológico."
        },
        {
            "id": "post-apocaliptico_91",
            "number": 91,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO PILOTO",
            "content": "En un biplano de chatarra. Rostro subido como referencia con gafas de cuero y bufanda blanca sucia. Volando sobre una ciudad muerta. Luz de amanecer desde el aire. Biometría de libertad precaria."
        },
        {
            "id": "post-apocaliptico_92",
            "number": 92,
            "style": "Post-Apocalíptico",
            "title": "CENA DEL SUPERVIVIENTE",
            "content": "Rostro subido como referencia comiendo de una lata sentado en el suelo de un bunker. Luz de linterna parpadeante. Biometría de soledad y sabor a metal industrial. Calidad 8K RAW."
        },
        {
            "id": "post-apocaliptico_93",
            "number": 93,
            "style": "Post-Apocalíptico",
            "title": "EL ARQUITECTO DE LA ÚLTIMA NAVE",
            "content": "Diseñando una nave de escape para la humanidad con piezas de desguace. Rostro subido como referencia con planos de luz sobre mesa de madera podrida. Biometría de genio desesperado."
        },
        {
            "id": "post-apocaliptico_94",
            "number": 94,
            "style": "Post-Apocalíptico",
            "title": "FUNERAL POST-APOCALÍPTICO",
            "content": "Entierro en un parque de atracciones abandonado. Rostro subido como referencia con mirada baja y pena absoluta. Luz de atardecer entre las norias oxidadas. Biometría de duelo colectivo."
        },
        {
            "id": "post-apocaliptico_95",
            "number": 95,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO MECÁNICO",
            "content": "Rostro subido como referencia ajustando un carburador con luz de luna. Biometría de manos negras de grasa y concentración técnica suprema. Óptica Leica 35mm."
        },
        {
            "id": "post-apocaliptico_96",
            "number": 96,
            "style": "Post-Apocalíptico",
            "title": "LA REUNIÓN DE LOS SUPERVIVIENTES",
            "content": "Abrazo entre dos personas en medio de una calle desierta. Rostro subido como referencia con lágrimas de alivio. Luz de sol filtrada por nubes de ceniza. Biometría de emoción humana pura."
        },
        {
            "id": "post-apocaliptico_97",
            "number": 97,
            "style": "Post-Apocalíptico",
            "title": "LA ÚLTIMA ESTACIÓN DE RADIO",
            "content": "Rostro subido como referencia pinchando un disco de vinilo viejo en una antena solitaria. Luz de diales rojos. Biometría facial de resistencia cultural."
        },
        {
            "id": "post-apocaliptico_98",
            "number": 98,
            "style": "Post-Apocalíptico",
            "title": "EL CENTINELA DEL PÁRAMO",
            "content": "Rostro subido como referencia sobre una duna de ceniza con rifle de precisión. Capa de tela de camuflaje de barro. Luz de horizonte en llamas. Biometría de vigilancia despiadada."
        },
        {
            "id": "post-apocaliptico_99",
            "number": 99,
            "style": "Post-Apocalíptico",
            "title": "EL ÚLTIMO VIAJE HUMANO",
            "content": "Rostro subido como referencia en una balsa a la deriva en un océano de plástico. Mirando a las estrellas. Luz de luna azul pálida. Biometría de rendición existencial ante la inmensidad."
        },
        {
            "id": "post-apocaliptico_100",
            "number": 100,
            "style": "Post-Apocalíptico",
            "title": "EL RENACIMIENTO",
            "content": "Rostro subido como referencia viendo nacer el primer árbol en una ciudad blanca de ceniza. Luz dorada divina. Biometría facial de asombro y esperanza final de la humanidad. Calidad definitiva Hyper-Ultimate 8K."
        }
    ],
    "Espionaje": [
        {
            "id": "espionaje_1",
            "number": 1,
            "style": "Espionaje",
            "title": "INFILTRACIÓN EN EL CASINO DE MÓNACO",
            "content": "Plano secuencia capturado con Sony Venice 2 y lente anamórfica Cooke. Personaje con rostro subido como referencia vestido con esmóquin de seda italiana PBR. Iluminación de lujo con candelabros de cristal que crean reflejos Ray-tracing en las pupilas y el reloj de pulsera técnico. Biometría facial de elegancia letal: mirada calculadora y micro-expresión de confianza. Calidad Masterpiece."
        },
        {
            "id": "espionaje_2",
            "number": 2,
            "style": "Espionaje",
            "title": "PERSECUCIÓN A ALTA VELOCIDAD EN BERLÍN",
            "content": "Primer plano del rostro subido como referencia al volante de un coche deportivo negro reflejando las luces de neón urbanas. Captura con Arri Alexa 35 a 120fps (Motion blur controlado). Biometría facial de adrenalina: dilatación de pupilas y tensión en el cuello. Textura de cuero del volante y metal pulido HDR. Calidad cinematográfica 8K."
        },
        {
            "id": "espionaje_3",
            "number": 3,
            "style": "Espionaje",
            "title": "VIGILANCIA EN LA AZOTEA",
            "content": "Personaje con rostro subido como referencia usando binoculares térmicos que proyectan luz naranja en su rostro. Ciudad nocturna de fondo con bokeh espectacular. Óptica Panavision 35mm. Biometría facial: poros visibles bajo la luz técnica y concentración absoluta. Textura de gabardina táctica impermeable PBR."
        },
        {
            "id": "espionaje_4",
            "number": 4,
            "style": "Espionaje",
            "title": "RUPTURA DE LA SALA DE SEGURIDAD",
            "content": "Luz láser roja cruzando el rostro subido como referencia. Ambiente oscuro y tecnológico. Captura con Red V-Raptor. Biometría facial: sudor fino de tensión y briznas de humo volumétrico. Textura de teclado de cristal líquido y metal cepillado. Estética Misión Imposible."
        },
        {
            "id": "espionaje_5",
            "number": 5,
            "style": "Espionaje",
            "title": "INTERROGATORIO EN LAS SOMBRAS",
            "content": "Iluminación cenital dura que resalta la biometría del rostro subido como referencia. Contraste extremo (Chiaroscuro). Biometría facial: micro-cicatriz en la ceja y mirada de acero. Textura de silla de metal oxidado y humo de cigarrillo real grabado con Arri Raw."
        },
        {
            "id": "espionaje_6",
            "number": 6,
            "style": "Espionaje",
            "title": "INFILTRACIÓN SUMERGIDA",
            "content": "Personaje con rostro subido como referencia emergiendo del agua con traje de neopreno técnico PBR. Gotas de agua realistas (Sub-surface scattering) resbalando por la piel. Luz de luna reflejada en el mar. Biometría facial de resistencia y frío controlado. Óptica Leica sumergible."
        },
        {
            "id": "espionaje_7",
            "number": 7,
            "style": "Espionaje",
            "title": "EL ESPÍA DE LA FIESTA DIPLOMÁTICA",
            "content": "Personaje con rostro subido como referencia con pinganillo invisible escuchando conversaciones. Luz cálida de gala. Biometría facial: discreción absoluta y lectura de labios. Textura de cristalería fina y bordados de oro en el uniforme. Calidad 8K fotorrealista."
        },
        {
            "id": "espionaje_8",
            "number": 8,
            "style": "Espionaje",
            "title": "FRANCOTIRADOR EN LOS ALPES",
            "content": "Rostro subido como referencia camuflado en la nieve con rifle de precisión blanco. Luz de mañana fría de 8000K. Biometría facial: vaho al respirar y escarcha en las pestañas. Textura de metal frío del fusil y camuflaje térmico. Sony Venice 2."
        },
        {
            "id": "espionaje_9",
            "number": 9,
            "style": "Espionaje",
            "title": "SALA DE CIBERGUERRA",
            "content": "Rodeado de pantallas con flujos de datos en cascada. El rostro subido como referencia refleja el código binario. Iluminación azul ciber-técnica. Biometría facial: fatiga ocular y genialidad estratégica. Textura de servidores de alta densidad y cables de fibra óptica."
        },
        {
            "id": "espionaje_10",
            "number": 10,
            "style": "Espionaje",
            "title": "EL INTERCAMBIO EN EL DESIERTO",
            "content": "Luz de atardecer polvoriento de 3200K. Personaje con rostro subido como referencia con gafas de sol oscuras reflejando el helicóptero que llega. Biometría facial: labios secos y determinación. Textura de arena en suspensión y metal de maletín blindado."
        },
        {
            "id": "espionaje_11",
            "number": 11,
            "style": "Espionaje",
            "title": "EL CUBIL DEL HACKER",
            "content": "Luz de monitores múltiples iluminando el rostro subido como referencia. Cables por todas partes. Biometría de concentración obsesiva. Textura de hardware viejo y nuevo mezclado. Calidad RAW técnica."
        },
        {
            "id": "espionaje_12",
            "number": 12,
            "style": "Espionaje",
            "title": "LA SILUETA DEL ASESINO",
            "content": "Contraluz total en un callejón lluvioso. Solo se perfila el rostro subido como referencia. Luz de un solo farol parpadeante. Biometría de misterio y peligro. Textura de adoquines mojados y cuero brillante."
        },
        {
            "id": "espionaje_13",
            "number": 13,
            "style": "Espionaje",
            "title": "VUELO A ZÚRICH",
            "content": "Interior de jet privado. Personaje con rostro subido como referencia revisando pasaportes falsos. Luz de lectura cálida. Biometría de calma profesional. Textura de madera de raíz y tapicería personalizada."
        },
        {
            "id": "espionaje_14",
            "number": 14,
            "style": "Espionaje",
            "title": "SABOTAJE EN EL SILO NUCLEAR",
            "content": "Escala masiva. Personaje con rostro subido como referencia bajando por cuerdas de rápel. Luz de advertencia roja giratoria. Biometría de vértigo controlado. Textura de acero industrial y cables de tensión."
        },
        {
            "id": "espionaje_15",
            "number": 15,
            "style": "Espionaje",
            "title": "EL ENCUENTRO CON LA FEMME FATALE",
            "content": "Primer plano íntimo. Rostro subido como referencia frente a un personaje femenino de élite. Luz de velas y sombras de seducción peligrosa. Biometría facial: tensión romántica y desconfianza mutua."
        },
        {
            "id": "espionaje_16",
            "number": 16,
            "style": "Espionaje",
            "title": "PERSECUCIÓN EN EL METRO",
            "content": "Salto entre vagones en marcha con Arri Alexa 35. Rostro subido como referencia con desenfoque de movimiento. Luz de túnel estroboscópica. Biometría de esfuerzo físico atlético."
        },
        {
            "id": "espionaje_17",
            "number": 17,
            "style": "Espionaje",
            "title": "EL ENLACE SATELITAL",
            "content": "En lo alto de una torre de comunicaciones nevada. Rostro subido como referencia con antena parabólica portátil. Luz de aurora boreal de fondo. Biometría de éxito técnico en condiciones extremas."
        },
        {
            "id": "espionaje_18",
            "number": 18,
            "style": "Espionaje",
            "title": "ESCAPE DE NEÓN EN HONG KONG",
            "content": "Huyendo por mercados nocturnos. Rostro subido como referencia con luces de letreros chinos reflejadas en sudor. Biometría de agilidad y sigilo urbano. Sony Venice 2."
        },
        {
            "id": "espionaje_19",
            "number": 19,
            "style": "Espionaje",
            "title": "LA BEBIDA ENVENENADA",
            "content": "Rostro subido como referencia mirando la copa con sospecha. Luz cenital de bar de hotel de 5 estrellas. Biometría facial: pupila dilatada por el análisis químico visual. Calidad fotorrealista."
        },
        {
            "id": "espionaje_20",
            "number": 20,
            "style": "Espionaje",
            "title": "TESTIGO DE CÁMARA OCULTA",
            "content": "Perspectiva de cámara de seguridad con grano cinematográfico. Rostro subido como referencia entregando documentos. Biometría de nerviosismo controlado. Estética de película de espías de los 70 pero en 8K."
        },
        {
            "id": "espionaje_21",
            "number": 21,
            "style": "Espionaje",
            "title": "LA REVELACIÓN DEL TRAIDOR",
            "content": "Primer plano dramático. Rostro subido como referencia al descubrir la traición de su compañero. Biometría facial: shock, dolor y endurecimiento inmediato de los rasgos. Arri Raw."
        },
        {
            "id": "espionaje_22",
            "number": 22,
            "style": "Espionaje",
            "title": "INFILTRACIÓN SUBMARINA EN LA BASE",
            "content": "Bajo el muelle. Rostro subido como referencia con máscara de buceo técnica. Luz de focos de la base penetrando el agua. Biometría de respiración táctica. Textura de coral y metal sumergido."
        },
        {
            "id": "espionaje_23",
            "number": 23,
            "style": "Espionaje",
            "title": "EL SEÑUELO",
            "content": "Personaje con rostro subido como referencia disfrazado de repartidor o técnico. Luz de día normal para pasar desapercibido. Biometría de actuación perfecta y mirada alerta oculta."
        },
        {
            "id": "espionaje_24",
            "number": 24,
            "style": "Espionaje",
            "title": "POKER DE ALTO RIESGO",
            "content": "Rostro subido como referencia apostando millones. Luz de mesa de juego verde. Biometría facial: inexpresividad absoluta (Poker face) y micro-sudor en la frente. Óptica Leica."
        },
        {
            "id": "espionaje_25",
            "number": 25,
            "style": "Espionaje",
            "title": "EL PUNTO DE EXTRACCIÓN",
            "content": "Esperando al helicóptero en una azotea de Dubái. Rostro subido como referencia con viento fuerte. Luz de ciudad nocturna infinita. Biometría de alivio y cansancio post-misión."
        },
        {
            "id": "espionaje_26",
            "number": 26,
            "style": "Espionaje",
            "title": "ATAQUE DE AGUJA CON VENENO",
            "content": "Acercamiento a la nuca de un objetivo en una multitud. Solo se ve el rostro subido como referencia de fondo, enfocado y frío. Biometría de asesino profesional. Calidad Masterpiece."
        },
        {
            "id": "espionaje_27",
            "number": 27,
            "style": "Espionaje",
            "title": "EL MICRO-PUNTO DE MICROFILM",
            "content": "Mirando a través de una lupa técnica. Luz ultravioleta. Rostro subido como referencia con ojo ampliado. Biometría del iris con detalle microscópico. Estética técnica de laboratorio."
        },
        {
            "id": "espionaje_28",
            "number": 28,
            "style": "Espionaje",
            "title": "TREN A ESTAMBUL",
            "content": "Cabina de lujo del Orient Express futurista. Rostro subido como referencia escondiendo un arma. Luz de lámparas de cristal. Biometría de tensión en un espacio cerrado de lujo."
        },
        {
            "id": "espionaje_29",
            "number": 29,
            "style": "Espionaje",
            "title": "OPERADOR DE ENJAMBRE DE DRONES",
            "content": "Gafas de realidad virtual que cubren el rostro subido como referencia parcial. Luz de la interfaz proyectada en la piel. Biometría de mando tecnológico. Calidad Sony Venice."
        },
        {
            "id": "espionaje_30",
            "number": 30,
            "style": "Espionaje",
            "title": "VENGANZA GÉLIDA",
            "content": "Caminando hacia la cámara en Moscú nevado. Rostro subido como referencia con abrigo de piel y mirada de hielo. Luz fría de 10000K. Biometría facial de decisión irrevocable."
        },
        {
            "id": "espionaje_31",
            "number": 31,
            "style": "Espionaje",
            "title": "LA IDENTIDAD FALSA",
            "content": "Aplicando prótesis de silicona en el rostro subido como referencia frente a un espejo. Luz de camerino técnica. Biometría de transformación activa. Textura de piel sintética y pegamento profesional PBR."
        },
        {
            "id": "espionaje_32",
            "number": 32,
            "style": "Espionaje",
            "title": "ESCAPE POR TÚNEL SUBTERRÁNEO",
            "content": "Huyendo en una moto eléctrica silenciosa. Rostro subido como referencia con casco abierto. Luz de focos laterales pasando rápido. Biometría de velocidad y concentración."
        },
        {
            "id": "espionaje_33",
            "number": 33,
            "style": "Espionaje",
            "title": "EL BAILE DE LA EMBAJADA",
            "content": "Bailando con una espía enemiga. Rostro subido como referencia con traje de gala. Luz de candelabros y sombras de intriga. Biometría facial: duelo de ingenio y contacto físico táctico."
        },
        {
            "id": "espionaje_34",
            "number": 34,
            "style": "Espionaje",
            "title": "ATAQUE DE LÁSER SATELITAL",
            "content": "Rostro subido como referencia ordenando el ataque desde un búnker de comando. Luz roja de confirmación. Biometría facial de poder absoluto y frialdad moral. caldiad RAW."
        },
        {
            "id": "espionaje_35",
            "number": 35,
            "style": "Espionaje",
            "title": "EL ABRIDOR DE CAJAS FUERTES",
            "content": "Usando estetoscopio electrónico en una caja de titanio. Rostro subido como referencia con la oreja pegada al metal. Luz de linterna pequeña. Biometría de audición extrema y paciencia."
        },
        {
            "id": "espionaje_36",
            "number": 36,
            "style": "Espionaje",
            "title": "EXTRACCIÓN POR LA SELVA",
            "content": "Rostro subido como referencia con pinturas de camuflaje de barro y hojas. Luz filtrada por el follaje selvático (God rays). Biometría de depredador de fuerzas especiales. Red V-Raptor."
        },
        {
            "id": "espionaje_37",
            "number": 37,
            "style": "Espionaje",
            "title": "LA SILLA DE INTERROGATORIO",
            "content": "Rostro subido como referencia atado, siendo interrogado. Luz de un solo foco moviéndose. Biometría: resistencia al dolor, mirada de desafío y sangre real en los labios."
        },
        {
            "id": "espionaje_38",
            "number": 38,
            "style": "Espionaje",
            "title": "SALTO EN LAS AZOTEAS DE TOKIO",
            "content": "En pleno vuelo sobre el vacío entre rascacielos. Rostro subido como referencia con expresión de esfuerzo máximo. Luces de neón de fondo. Biometría de heroísmo y peligro."
        },
        {
            "id": "espionaje_39",
            "number": 39,
            "style": "Espionaje",
            "title": "EL DISPOSITIVO DE ESCUCHA",
            "content": "Instalando un micrófono del tamaño de un grano de arroz. Rostro subido como referencia con pinzas de precisión. Luz de escritorio quirúrgica. Biometría de pulso firme y visión microscópica."
        },
        {
            "id": "espionaje_40",
            "number": 40,
            "style": "Espionaje",
            "title": "FRANCOTIRADOR DE ESPEJISMO EN EL DESIERTO",
            "content": "Cuerpo enterrado en la arena. Solo el ojo del rostro subido como referencia y la mira del rifle. Luz de calor extremo ondulando el aire. Biometría de paciencia infinita."
        },
        {
            "id": "espionaje_41",
            "number": 41,
            "style": "Espionaje",
            "title": "EL ROBO DEL CENTRO DE DATOS",
            "content": "Colgando del techo en una sala de servidores fría y blanca. Rostro subido como referencia con traje de sigilo negro. Luz LED de servidores azul y blanca. Biometría de tensión física."
        },
        {
            "id": "espionaje_42",
            "number": 42,
            "style": "Espionaje",
            "title": "ENCUENTRO EN LA NIEBLA DE LONDRES",
            "content": "En un puente sobre el Támesis. Rostro subido como referencia intercambiando un maletín. Luz de farolas amarillas difuminada por la niebla espesa. Biometría de anonimato y sospecha."
        },
        {
            "id": "espionaje_43",
            "number": 43,
            "style": "Espionaje",
            "title": "EL TÉ DEL ASESINO",
            "content": "En un jardín zen de Kioto. Rostro subido como referencia bebiendo té con una catana oculta bajo la mesa. Luz natural de tarde. Biometría de paz mortal y vigilancia periférica."
        },
        {
            "id": "espionaje_44",
            "number": 44,
            "style": "Espionaje",
            "title": "ELIMINACIÓN DE MÁSCARA DE ALTA TECNOLOGÍA",
            "content": "Rostro subido como referencia quitándose una cara de silicona realista. Se ve la cara real debajo. Luz de baño público sucia. Biometría de revelar la verdadera identidad."
        },
        {
            "id": "espionaje_45",
            "number": 45,
            "style": "Espionaje",
            "title": "INFILTRACIÓN EN LA FIESTA DEL YATE",
            "content": "Rostro subido como referencia en cubierta con copa de champagne. Luces de la costa de fondo. Biometría de lujo y misión encubierta. Textura de madera de teca y lino blanco."
        },
        {
            "id": "espionaje_46",
            "number": 46,
            "style": "Espionaje",
            "title": "ALIENTO FRÍO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia en el ártico. Luz azul de invierno. El vaho de la respiración oculta parcialmente la cara. Biometría de resiliencia al frío extremo. Sony Venice 2."
        },
        {
            "id": "espionaje_47",
            "number": 47,
            "style": "Espionaje",
            "title": "EL ESPÍA DEL CLUB DE LUCHA SUBTERRÁNEO",
            "content": "Rostro subido como referencia con torso desnudo y guantes de boxeo sucios. Luces de focos de obra. Biometría de camuflaje en entornos violentos y mirada de análisis táctico."
        },
        {
            "id": "espionaje_48",
            "number": 48,
            "style": "Espionaje",
            "title": "CAMBIO DE MALETÍN DIPLOMÁTICO",
            "content": "En un ascensor de cristal subiendo un rascacielos. Rostro subido como referencia con otro espía de espaldas. Luz de ciudad que cambia rápido. Biometría de sincronización perfecta."
        },
        {
            "id": "espionaje_49",
            "number": 49,
            "style": "Espionaje",
            "title": "EL OJO DEL FRANCOTIRADOR",
            "content": "Primer plano extremo del ojo del rostro subido como referencia a través de la lente del visor. Reflejo del objetivo en la pupila. Biometría del iris y pestaña. Calidad 8K definitiva."
        },
        {
            "id": "espionaje_50",
            "number": 50,
            "style": "Espionaje",
            "title": "BAILE EN LA RED DE LÁSERES",
            "content": "Rostro subido como referencia contorsionándose entre rayos láser rojos. Luz de neón roja bañando la piel. Biometría de agilidad física suprema y concentración sensorial."
        },
        {
            "id": "espionaje_51",
            "number": 51,
            "style": "Espionaje",
            "title": "SABOTAJE DEL LABORATORIO QUÍMICO",
            "content": "Rostro subido como referencia con máscara de gas moderna y guantes de nitrilo. Vertiendo líquido reactivo. Luz de alarma verde. Biometría de pulso firme y cautela tóxica."
        },
        {
            "id": "espionaje_52",
            "number": 52,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN LA CIMA DE LA MONTAÑA",
            "content": "Rostro subido como referencia en una cresta estrecha con bengala naranja. Viento y nieve. Luz de rescate heroico. Biometría de éxito después de una misión imposible."
        },
        {
            "id": "espionaje_53",
            "number": 53,
            "style": "Espionaje",
            "title": "LA BIBLIOTECA DEL ASESINO",
            "content": "Rostro subido como referencia sacando un libro que abre una puerta secreta. Luz de estantería clásica. Biometría de conocimiento de secretos ancestrales y tecnología de ocultación."
        },
        {
            "id": "espionaje_54",
            "number": 54,
            "style": "Espionaje",
            "title": "SALA DEL OBJETIVO DEL CIBER-ROBO",
            "content": "Rostro subido como referencia conectando un dispositivo de hackeo a una consola. Luz parpadeante de advertencia. Biometría de adrenalina y maestría informática. Red V-Raptor."
        },
        {
            "id": "espionaje_55",
            "number": 55,
            "style": "Espionaje",
            "title": "LA PACIENCIA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia bajo una red de camuflaje durante 48 horas. Barba de dos días y labios secos. Luz que cambia de día a noche. Biometría de disciplina absoluta."
        },
        {
            "id": "espionaje_56",
            "number": 56,
            "style": "Espionaje",
            "title": "INFILTRACIÓN POR AGUA SUBTERRÁNEA",
            "content": "Rostro subido como referencia nadando por una tubería de alcantarilla estrecha con traje de buceo. Luz de linterna proyectando sombras circulares. Biometría de claustrofobia dominada."
        },
        {
            "id": "espionaje_57",
            "number": 57,
            "style": "Espionaje",
            "title": "VIGILANTE EN LA CENA DE GALA",
            "content": "Rostro subido como referencia como camarero pero con mirada táctica. Luz de platos gourmet y champagne. Biometría de infiltración perfecta en la alta sociedad."
        },
        {
            "id": "espionaje_58",
            "number": 58,
            "style": "Espionaje",
            "title": "ESCAPE DE INTERROGATORIO",
            "content": "Rostro subido como referencia golpeando al guardia con la silla atada a la espalda. Luz de bombilla desnuda. Biometría de fuerza bruta y desesperación técnica. Calidad Arri Raw."
        },
        {
            "id": "espionaje_59",
            "number": 59,
            "style": "Espionaje",
            "title": "EL OBJETIVO DEL FRANCOTIRADOR",
            "content": "Vista desde la mira del rostro subido como referencia. Se ve la cara del objetivo a 1km de distancia. Luz de atardecer. Biometría de juicio y ejecución profesional."
        },
        {
            "id": "espionaje_60",
            "number": 60,
            "style": "Espionaje",
            "title": "RUPTURA DE MANDO DE SATÉLITE",
            "content": "Rostro subido como referencia frente a una consola de mando espacial. Luz de la Tierra reflejada en el rostro desde una ventanilla. Biometría de control orbital y frialdad estratégica."
        },
        {
            "id": "espionaje_61",
            "number": 61,
            "style": "Espionaje",
            "title": "EL JARDÍN DEL ASESINO",
            "content": "Rostro subido como referencia cultivando plantas venenosas con guantes de seda. Luz de invernadero suave. Biometría de conocimiento botánico letal y calma absoluta."
        },
        {
            "id": "espionaje_62",
            "number": 62,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN LANCHA RÁPIDA",
            "content": "Rostro subido como referencia al timón bajo lluvia de balas y agua. Luz de trazadoras y bengalas marinas. Biometría de pilotaje extremo y adrenalina. Sony Venice 2."
        },
        {
            "id": "espionaje_63",
            "number": 63,
            "style": "Espionaje",
            "title": "LA SOMBRA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia mimetizado con una pared de cemento. Luz de callejón lejana. Biometría de invisibilidad urbana y mirada de depredador. Calidad 8K Masterpiece."
        },
        {
            "id": "espionaje_64",
            "number": 64,
            "style": "Espionaje",
            "title": "INFILTRACIÓN EN LA BÓVEDA SUBTERRÁNEA",
            "content": "Rostro subido como referencia usando un taladro térmico en una puerta de 2 metros. Luz de chispas blancas incandescentes. Biometría de esfuerzo físico y precisión técnica."
        },
        {
            "id": "espionaje_65",
            "number": 65,
            "style": "Espionaje",
            "title": "EL SERVICIO SECRETO DIPLOMÁTICO",
            "content": "Rostro subido como referencia con auriculares y traje blindado. Protegiendo a un mandatario. Luz de multitud y flashes de cámaras. Biometría de vigilancia 360 grados."
        },
        {
            "id": "espionaje_66",
            "number": 66,
            "style": "Espionaje",
            "title": "EL TALLER DEL ASESINO",
            "content": "Rostro subido como referencia montando un rifle desmontable en una maleta de violín. Luz de mesa de trabajo cálida. Biometría de artesanía mortal y precisión mecánica."
        },
        {
            "id": "espionaje_67",
            "number": 67,
            "style": "Espionaje",
            "title": "EXTRACCIÓN POR EL DESIERTO",
            "content": "Rostro subido como referencia herido caminando hacia un punto de señalización. Luz de sol abrasadora. Biometría de supervivencia extrema y dolor controlado. Red V-Raptor."
        },
        {
            "id": "espionaje_68",
            "number": 68,
            "style": "Espionaje",
            "title": "VISTA DEL FRANCOTIRADOR DESDE EL CIELO",
            "content": "Rostro subido como referencia en un helicóptero con rifle de precisión. Luz de ciudad nocturna abajo. Biometría de puntería aérea y estabilidad bajo vibración."
        },
        {
            "id": "espionaje_69",
            "number": 69,
            "style": "Espionaje",
            "title": "LA COCINA DEL ASESINO",
            "content": "Rostro subido como referencia preparando una cena perfecta pero con un cuchillo táctico de combate. Luz de hogar acogedora. Biometría de dualidad peligrosa y maestría culinaria."
        },
        {
            "id": "espionaje_70",
            "number": 70,
            "style": "Espionaje",
            "title": "OPERACIONES EN EL HANGAR SUBTERRÁNEO",
            "content": "Rostro subido como referencia preparando una nave o coche espía. Luz industrial de grandes focos. Biometría de ingeniería de élite y preparación para la misión."
        },
        {
            "id": "espionaje_71",
            "number": 71,
            "style": "Espionaje",
            "title": "LA MIRADA FRÍA DEL FRANCOTIRADOR",
            "content": "Primer plano de los ojos del rostro subido como referencia. Sin expresión, solo cálculo. Luz de luna azulada. Biometría de la mirada letal absoluta. Calidad 8K fotorrealista."
        },
        {
            "id": "espionaje_72",
            "number": 72,
            "style": "Espionaje",
            "title": "LA CEREMONIA DEL TÉ DEL ASESINO",
            "content": "Rostro subido como referencia sirviendo té a un enemigo. Luz de tarde en una casa de té tradicional. Biometría de elegancia mortal y tensión bajo la calma."
        },
        {
            "id": "espionaje_73",
            "number": 73,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN AVIÓN DE CARGA",
            "content": "Rostro subido como referencia saltando en paracaídas desde la rampa trasera. Luz de amanecer a 10.000 metros. Biometría de valentía y adrenalina pura. Arri Alexa 35."
        },
        {
            "id": "espionaje_74",
            "number": 74,
            "style": "Espionaje",
            "title": "VIGILANCIA NOCTURNA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia con visor de visión nocturna que proyecta luz verde en sus ojos. Luz de luna mínima. Biometría de visión en la oscuridad y paciencia."
        },
        {
            "id": "espionaje_75",
            "number": 75,
            "style": "Espionaje",
            "title": "EL PASADIZO SECRETO DEL ASESINO",
            "content": "Rostro subido como referencia empujando una pared falsa en una biblioteca antigua. Luz de linterna de mano. Biometría de conocimiento de secretos arquitectónicos."
        },
        {
            "id": "espionaje_76",
            "number": 76,
            "style": "Espionaje",
            "title": "MUELLE DE SUBMARINOS SUBTERRÁNEO",
            "content": "Rostro subido como referencia abordando un minisubmarino negro mate. Luz azul de agua estancada y focos de sodio. Biometría de infiltración naval de élite. Sony Venice 2."
        },
        {
            "id": "espionaje_77",
            "number": 77,
            "style": "Espionaje",
            "title": "LA MUERTE A LARGA DISTANCIA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia viendo el impacto a través de la mira telescópica. Luz de tarde dorada. Biometría de éxito profesional y frialdad moral. Calidad RAW."
        },
        {
            "id": "espionaje_78",
            "number": 78,
            "style": "Espionaje",
            "title": "LA CUCHILLA OCULTA DEL ASESINO",
            "content": "Rostro subido como referencia mostrando una hoja retráctil en su muñeca. Luz de callejón. Biometría de tecnología de asesinato personalizada y mirada de amenaza."
        },
        {
            "id": "espionaje_79",
            "number": 79,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN TREN DE ALTA VELOCIDAD",
            "content": "Rostro subido como referencia en el techo del tren huyendo de perseguidores. Luz de túneles y paisaje veloz. Biometría de agilidad y peligro. Calidad IMAX 8K."
        },
        {
            "id": "espionaje_80",
            "number": 80,
            "style": "Espionaje",
            "title": "EL ÚLTIMO ALIENTO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia justo antes de apretar el gatillo. El tiempo parece detenerse. Luz de atardecer perfecta. Biometría del iris y la pupila en éxtasis de concentración."
        },
        {
            "id": "espionaje_81",
            "number": 81,
            "style": "Espionaje",
            "title": "EL SECRETO DE LA BIBLIOTECA DEL ASESINO",
            "content": "Rostro subido como referencia leyendo un pergamino antiguo con códigos modernos. Luz de velas y tecnología LED. Biometría de sabiduría multigeneracional."
        },
        {
            "id": "espionaje_82",
            "number": 82,
            "style": "Espionaje",
            "title": "MANDO DE MISILES SUBTERRÁNEO",
            "content": "Rostro subido como referencia con la mano sobre el botón de lanzamiento. Luz roja de advertencia crítica. Biometría de poder geoestratégico y decisión moral límite."
        },
        {
            "id": "espionaje_83",
            "number": 83,
            "style": "Espionaje",
            "title": "EL CAMUFLAJE URBANO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia mimetizado con basura y escombros en una ciudad gris. Luz de día nublado. Biometría de invisibilidad táctica y vigilancia. Red V-Raptor."
        },
        {
            "id": "espionaje_84",
            "number": 84,
            "style": "Espionaje",
            "title": "EL BESO VENENOSO DEL ASESINO",
            "content": "Rostro subido como referencia besando a un objetivo mientras le inyecta una neurotoxina. Luz de club de lujo. Biometría de seducción letal y técnica de asesinato íntima."
        },
        {
            "id": "espionaje_85",
            "number": 85,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN HELICÓPTERO EN AZOTEA",
            "content": "Rostro subido como referencia subiendo por una escalera de cuerda bajo fuego. Luces de búsqueda y ráfagas de viento. Biometría de esfuerzo heroico y adrenalina."
        },
        {
            "id": "espionaje_86",
            "number": 86,
            "style": "Espionaje",
            "title": "EL ESCONDITE ALPINO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia con ropa térmica blanca en una cueva de hielo. Luz azul natural. Biometría de supervivencia en condiciones extremas y vigilancia de largo alcance."
        },
        {
            "id": "espionaje_87",
            "number": 87,
            "style": "Espionaje",
            "title": "EL LABORATORIO SECRETO DEL ASESINO",
            "content": "Rostro subido como referencia fabricando venenos químicos en matraces de cristal. Luz de laboratorio técnica. Biometría de conocimiento científico mortal y pulso firme."
        },
        {
            "id": "espionaje_88",
            "number": 88,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN PERSECUCIÓN DE MOTOS",
            "content": "Rostro subido como referencia en una moto deportiva negra saltando sobre un obstáculo. Luz de ciudad nocturna y chispas. Biometría de pilotaje extremo y peligro. Sony Venice 2."
        },
        {
            "id": "espionaje_89",
            "number": 89,
            "style": "Espionaje",
            "title": "EL OBJETIVO FINAL DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia apuntando al líder de la organización enemiga. Luz de sol de invierno. Biometría de justicia y ejecución profesional definitiva. Calidad Masterpiece."
        },
        {
            "id": "espionaje_90",
            "number": 90,
            "style": "Espionaje",
            "title": "EL RENACIMIENTO DE LA AGENCIA",
            "content": "Rostro subido como referencia entrando en el nuevo cuartel general reconstruido. Luz blanca de futuro y esperanza. Biometría de liderazgo restaurado y éxito de misión."
        },
        {
            "id": "espionaje_91",
            "number": 91,
            "style": "Espionaje",
            "title": "EL ARMA OCULTA DEL ASESINO",
            "content": "Rostro subido como referencia sacando una pistola pequeña de un compartimento en el zapato. Luz de callejón. Biometría de ingenio táctico y mirada rápida. Calidad 8K RAW."
        },
        {
            "id": "espionaje_92",
            "number": 92,
            "style": "Espionaje",
            "title": "SOPORTE TÉCNICO SUBTERRÁNEO",
            "content": "Rostro subido como referencia con miles de cables y servidores ayudando al espía en el exterior. Luz de pantallas azul. Biometría de genio informático y trabajo bajo presión."
        },
        {
            "id": "espionaje_93",
            "number": 93,
            "style": "Espionaje",
            "title": "EL ESCUDO ANTI-BALAS DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia tras un cristal blindado recibiendo disparos. Luz de impactos y chispas. Biometría de calma bajo fuego y respuesta táctica. Arri Alexa 35."
        },
        {
            "id": "espionaje_94",
            "number": 94,
            "style": "Espionaje",
            "title": "LA PISTOLA DE ORO DEL ASESINO",
            "content": "Rostro subido como referencia con el arma mítica de oro macizo PBR. Luz de sol reflejada en el metal precioso. Biometría de poder y estatus de asesino legendario."
        },
        {
            "id": "espionaje_95",
            "number": 95,
            "style": "Espionaje",
            "title": "EXTRACCIÓN EN PARACAÍDAS SOBRE LA CIUDAD",
            "content": "Rostro subido como referencia cayendo hacia las luces de neón nocturnas. Luz de estrellas y ciudad. Biometría de valentía aérea y precisión en el descenso."
        },
        {
            "id": "espionaje_96",
            "number": 96,
            "style": "Espionaje",
            "title": "EL CAMUFLAJE DE BOSQUE DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia mimetizado con musgo y corteza de árbol. Luz filtrada verde. Biometría de invisibilidad natural y mirada de depredador. Calidad definitiva."
        },
        {
            "id": "espionaje_97",
            "number": 97,
            "style": "Espionaje",
            "title": "LA CAJA FUERTE SECRETA DEL ASESINO",
            "content": "Rostro subido como referencia abriendo una caja con escáner de retina. Luz láser cian en sus ojos. Biometría del iris y seguridad biométrica avanzada. Sony Venice 2."
        },
        {
            "id": "espionaje_98",
            "number": 98,
            "style": "Espionaje",
            "title": "BASE DE LA REBELIÓN SUBTERRÁNEA",
            "content": "Rostro subido como referencia liderando a un grupo de espías disidentes. Luz de antorchas y consolas viejas. Biometría de carisma revolucionario y estrategia."
        },
        {
            "id": "espionaje_99",
            "number": 99,
            "style": "Espionaje",
            "title": "EL ÚLTIMO ESPÍA EN PIE",
            "content": "Rostro subido como referencia solo en el puente de mando de la agencia destruida. Luz residual de incendios. Biometría de soledad heroica y fin de una era."
        },
        {
            "id": "espionaje_100",
            "number": 100,
            "style": "Espionaje",
            "title": "EL ÉXITO DE LA MISIÓN DEFINITIVA",
            "content": "Rostro subido como referencia caminando hacia la cámara mientras el cuartel enemigo explota detrás. Luz de fuego Ray-tracing y atardecer. Biometría de éxito absoluto y calidad definitiva Hyper-Ultimate 8K."
        }
    ],
    "Coches": [
        {
            "id": "coches_1",
            "number": 1,
            "style": "Coches",
            "title": "EL LANZAMIENTO DEL CIBER-SUPERCOCHE",
            "content": "Plano detalle de un superdeportivo conceptual en un hangar minimalista de cristal. Carrocería de fibra de carbono expuesta con textura PBR y barniz cerámico que crea reflejos Ray-tracing de las luces LED del techo. Personaje con rostro subido como referencia apoyado en el capó con traje de piloto técnico. Iluminación blanca de 6000K con sombras suaves. Captura con Arri Alexa 35."
        },
        {
            "id": "coches_2",
            "number": 2,
            "style": "Coches",
            "title": "NOCHE DE DRIFT EN TOKIO",
            "content": "Coche de carreras japonés derrapando en una curva cerrada con humo de neumáticos volumétrico e iluminación de neón rosado. Rostro subido como referencia visible a través del parabrisas con expresión de concentración extrema. Óptica anamórfica Cooke con destellos de lente (Lens flare). Textura de asfalto mojado con reflejos de neón HDR. Calidad 8K definitiva."
        },
        {
            "id": "coches_3",
            "number": 3,
            "style": "Coches",
            "title": "CARRERA DE ALTA VELOCIDAD EN EL DESIERTO",
            "content": "Coche clásico muscle car levantando una nube de polvo dorado a 200 km/h. Rostro subido como referencia con gafas de piloto y vello facial con arena (Biometría facial). Luz solar dura de medio día que resalta la pintura metálica descascarillada (PBR). Captura con Red V-Raptor a 120fps."
        },
        {
            "id": "coches_4",
            "number": 4,
            "style": "Coches",
            "title": "CARRERA CALLEJERA EN CIUDAD LLUVIOSA",
            "content": "Superdeportivo negro mate bajo la lluvia intensa de Londres. Micro-gotas de agua realistas (Sub-surface scattering) en el capó y cristales. Rostro subido como referencia reflejado en el retrovisor lateral. Luces de freno rojas iluminando el spray de agua. Biometría facial de adrenalina y reflejos de semáforo en los ojos. Calidad Masterpiece."
        },
        {
            "id": "coches_5",
            "number": 5,
            "style": "Coches",
            "title": "LA OBRA MAESTRA DEL MECÁNICO",
            "content": "Personaje con rostro subido como referencia con las manos llenas de aceite ajustando un motor V12 cromado. Iluminación técnica de taller con focos de sodio. Biometría facial de orgullo artesanal y sudor real. Textura PBR de metal caliente, mangueras de goma y cables de bujía. Captura con Sony Venice 2 f/1.4."
        },
        {
            "id": "coches_6",
            "number": 6,
            "style": "Coches",
            "title": "PERSECUCIÓN EN AUTOPISTA CIBERPUNK",
            "content": "Motores de plasma y luces de neón bajo el coche. Rostro subido como referencia al volante con HUD holográfico proyectado en la retina. Luz azul y naranja (Teal & Orange). Biometría facial de furia al volante. Pasajeros y otros coches velozmente borrosos por el movimiento (Motion blur). Arri Raw."
        },
        {
            "id": "coches_7",
            "number": 7,
            "style": "Coches",
            "title": "MUSCLE CAR AL ATARDECER",
            "content": "Rostro subido como referencia sentado en el capó de un Ford Mustang del 69. Luz dorada de 3000K bañando los rasgos y el metal. Biometría facial de nostalgia y libertad. Textura de cuero de los asientos y pintura roja oxidada PBR. Óptica Panavision para un look de cine clásico."
        },
        {
            "id": "coches_8",
            "number": 8,
            "style": "Coches",
            "title": "EL PODIO DE FÓRMULA 1",
            "content": "Lluvia de champagne y flashes de cámaras. Rostro subido como referencia con el casco levantado, empapado de sudor y emoción. Biometría facial de éxito atlético absoluto. Traje de carreras de Nomex con parches de patrocinadores texturizados. Calidad IMAX 8K."
        },
        {
            "id": "coches_9",
            "number": 9,
            "style": "Coches",
            "title": "SPRINT DE BARRO OFF-ROAD",
            "content": "Jeep modificado saltando sobre un charco de lodo gigante. Rostro subido como referencia con salpicaduras de barro en el rostro. Luz de bosque denso filtrada. Biometría de risa y adrenalina. Textura de neumáticos de tacos con tierra incustrada (Geometry displacement)."
        },
        {
            "id": "coches_10",
            "number": 10,
            "style": "Coches",
            "title": "EL SHOWROOM DE LUJO",
            "content": "Rostro subido como referencia como vendedor o comprador VIP. Un Ferrari Berlinetta bajo luz cenital dramática. Suelo de mármol negro con reflejos perfectos. Biometría facial de estatus y riqueza. Textura de tela de traje de lana fría y asientos de Alcántara."
        },
        {
            "id": "coches_11",
            "number": 11,
            "style": "Coches",
            "title": "EL GARAJE DE MEDIANOCHE",
            "content": "Luz de una sola lámpara de tungsteno sobre un coche desmontado. Rostro subido como referencia con un cigarrillo y mirada pensativa. Humo volumétrico. Biometría de obsesión mecánica. Textura de herramientas de acero y grasa de motor negra."
        },
        {
            "id": "coches_12",
            "number": 12,
            "style": "Coches",
            "title": "SILENCIO DE SUPERCOCHE ELÉCTRICO",
            "content": "Navegando por una ciudad silenciosa al amanecer. Rostro subido como referencia con expresión de paz y tecnología. Luz azul pálida. Textura de paneles de control táctiles de cristal y luz LED interna. Calidad de imagen nítida Masterpiece."
        },
        {
            "id": "coches_13",
            "number": 13,
            "style": "Coches",
            "title": "EL RALLY CLÁSICO",
            "content": "Porsche 911 de rally cruzando un puente de piedra en Italia. Rostro subido como referencia con guantes de cuero perforado. Luz de mañana mediterránea. Biometría de destreza al volante clásico. Textura de pintura blanca con pegatinas de carreras gastadas."
        },
        {
            "id": "coches_14",
            "number": 14,
            "style": "Coches",
            "title": "FURGONETA DE REPARTO CIBER",
            "content": "Furgoneta blindada con grafiques futuristas. Rostro subido como referencia entregando un paquete. Luz de callejón de neón. Biometría de trabajo duro y alerta. Textura de metal corrugado y ropa de trabajo reforzada PBR."
        },
        {
            "id": "coches_15",
            "number": 15,
            "style": "Coches",
            "title": "EL LAMBORGHINI DE ORO MACIZO",
            "content": "Coche con acabado en oro de 24 quilates reflejando el horizonte de Dubái. Rostro subido como referencia con gafas de sol doradas. Iluminación de lujo y exceso. Biometría facial de poder financiero absoluto. Calidad fotorrealista 8K."
        },
        {
            "id": "coches_16",
            "number": 16,
            "style": "Coches",
            "title": "TRANSPORTE DE GUERRA POST-APOCALÍPTICO",
            "content": "Camión con pinchos y lanzallamas. Rostro subido como referencia con máscara de cuero y pintura de guerra de ceniza. Luz de fuegos y explosiones. Biometría facial de salvajismo motorizado. Textura de metal oxidado y chatarra soldada. Mad Max style."
        },
        {
            "id": "coches_17",
            "number": 17,
            "style": "Coches",
            "title": "EL COCHE DEL AGENTE ESPÍA",
            "content": "Aston Martin gris mate con cristales blindados. Rostro subido como referencia saliendo con un maletín. Luz de noche urbana sigilosa. Biometría de discreción y elegancia. Textura de neumáticos de baja firma acústica y cuero negro. Sony Venice 2."
        },
        {
            "id": "coches_18",
            "number": 18,
            "style": "Coches",
            "title": "SALTO DE MONSTER TRUCK",
            "content": "Coche gigante aplastando chatarra en una arena. Rostro subido como referencia pilotando con red de seguridad lateral. Luz de focos de estadio. Biometría de emoción bruta y fuerza G. Calidad de imagen IMAX."
        },
        {
            "id": "coches_19",
            "number": 19,
            "style": "Coches",
            "title": "CARRERA DE FÓRMULA E DE NOCHE",
            "content": "Luces LED que cambian de color en los alerones. Rostro subido como referencia con visor de datos. Luz de ciudad futurista de fondo. Biometría de precisión técnica eléctrica. Textura de fibra de carbono ligera y celdas de batería."
        },
        {
            "id": "coches_20",
            "number": 20,
            "style": "Coches",
            "title": "EL HALLAZGO EN EL ESTABLO ABANDONADO",
            "content": "Coche clásico cubierto de polvo y paja en un granero oscuro. Rostro subido como referencia apartando una manta. Luz que entra por las tablas de madera (God rays). Biometría de asombro y descubrimiento. Calidad 8K definitiva."
        },
        {
            "id": "coches_21",
            "number": 21,
            "style": "Coches",
            "title": "EL SALÓN DEL COCHE AUTÓNOMO",
            "content": "Interior espacioso con asientos enfrentados. Rostro subido como referencia leyendo una revista digital mientras el coche conduce solo. Luz natural de paisaje pasando afuera. Biometría facial de relajación total. Estética de futuro limpio."
        },
        {
            "id": "coches_22",
            "number": 22,
            "style": "Coches",
            "title": "META DE CARRERA DE ACELERACIÓN",
            "content": "Paracaídas de frenado desplegado tras un Dragster. Rostro subido como referencia con respiración agitada y alivio. Luz de tarde en la pista. Biometría de adrenalina post-combustión. Textura de neumáticos quemados y asfalto caliente."
        },
        {
            "id": "coches_23",
            "number": 23,
            "style": "Coches",
            "title": "EL ESTUDIO DEL DISEÑADOR DE COCHES",
            "content": "Rostro subido como referencia con lápiz digital dibujando sobre un modelo de arcilla a tamaño real de un coche. Luz cenital de estudio perfecta. Biometría de genio creativo y precisión manual. Textura de arcilla industrial y pantallas 4K."
        },
        {
            "id": "coches_24",
            "number": 24,
            "style": "Coches",
            "title": "PASEO EN LOWRIDER",
            "content": "Coche saltando en una calle de Los Ángeles. Rostro subido como referencia riendo con amigos. Luz de atardecer rosado. Biometría de cultura urbana y alegría. Textura de pintura metalizada (Candy paint) con grabados de cromo PBR."
        },
        {
            "id": "coches_25",
            "number": 25,
            "style": "Coches",
            "title": "EL INTERCEPTOR DE LA POLICÍA",
            "content": "Rostro subido como referencia con uniforme de policía de tráfico y gafas de sol aviador de espejo. Luces de sirena azules y rojas reflejadas en la placa. Biometría de autoridad y vigilancia en la carretera. Arri Alexa 35."
        },
        {
            "id": "coches_26",
            "number": 26,
            "style": "Coches",
            "title": "TODOTERRENO INTERESTELAR",
            "content": "Vehículo de exploración en Marte con seis ruedas inmensas. Rostro subido como referencia con traje espacial de piloto. Luz roja marciana y polvo en suspensión. Biometría facial de exploración extrema. Textura de paneles solares y metal blindado."
        },
        {
            "id": "coches_27",
            "number": 27,
            "style": "Coches",
            "title": "EL MAESTRO DEL DESGUACE DE COCHES",
            "content": "Rostro subido como referencia sobre una montaña de coches prensados. Luz industrial sucia. Biometría de fuerza y veteranía en el metal. Textura de óxido de hierro, cristales rotos y caucho quemado. Calidad Masterpiece."
        },
        {
            "id": "coches_28",
            "number": 28,
            "style": "Coches",
            "title": "AERODINÁMICA DE HIPER-COCHE",
            "content": "Túnel de viento con humo de visualización de flujo de aire. Rostro subido como referencia ajustando el alerón activo. Luz técnica azulada. Biometría facial de ingeniería de alta precisión. Textura de carbono y flujos de aire volumétricos."
        },
        {
            "id": "coches_29",
            "number": 29,
            "style": "Coches",
            "title": "EL TAXISTA CLÁSICO",
            "content": "En un Checker Cab de Nueva York en los 70. Rostro subido como referencia con gorra y palillo en la boca. Luz de farolas amarillas y lluvia en el cristal. Biometría facial de rutina urbana y cansancio. Óptica f/1.4 con bokeh real."
        },
        {
            "id": "coches_30",
            "number": 30,
            "style": "Coches",
            "title": "CRUCE DE COCHE ANFIBIO",
            "content": "Coche navegando por un lago como una lancha. Rostro subido como referencia saludando desde el volante. Luz de día soleado y agua cristalina. Biometría de diversión y tecnología recreativa original. Calidad 8K fotorrealista."
        },
        {
            "id": "coches_31",
            "number": 31,
            "style": "Coches",
            "title": "EL CADILLAC ROSA",
            "content": "Rostro subido como referencia con gafas de sol retro frente a un restaurante americano de los 50 (Diner). Luz de neón rosa y azul. Biometría de estilo vintage y alegría. Textura de cromo y pintura pastel brillante PBR."
        },
        {
            "id": "coches_32",
            "number": 32,
            "style": "Coches",
            "title": "PERSECUCIÓN POLICIAL DEL FUTURO",
            "content": "Coches de policía voladores con sirenas de luz sólida. Rostro subido como referencia al volante escapando. Luz de ciudad vertical infinita. Biometría de pánico motorizado y velocidad extrema. Red V-Raptor."
        },
        {
            "id": "coches_33",
            "number": 33,
            "style": "Coches",
            "title": "LA LIMUSINA BLINDADA",
            "content": "Rostro subido como referencia como guardaespaldas mirando por la ventanilla. Luz de seguridad y lujo. Biometría facial de vigilancia constante. Textura de kevlar en la carrocería y cristal de 10 cm. Sony Venice 2."
        },
        {
            "id": "coches_34",
            "number": 34,
            "style": "Coches",
            "title": "EVENTO DE ARRASTRE DE TRACTORES",
            "content": "Tractor modificado con cuatro motores echando llamas. Rostro subido como referencia pilotando con cara de determinación férrea. Luz de llamaradas naranjas y humo negro. Biometría de esfuerzo industrial rudo."
        },
        {
            "id": "coches_35",
            "number": 35,
            "style": "Coches",
            "title": "EL COCHE DE CARRERAS SOLAR",
            "content": "Navegando por el desierto de Australia. Rostro subido como referencia con traje de lycra técnica. Luz solar cegadora. Biometría facial de concentración y sudor térmico. Textura de células fotovoltaicas azules PBR."
        },
        {
            "id": "coches_36",
            "number": 36,
            "style": "Coches",
            "title": "DRIFTING CIBERPUNK",
            "content": "Coche con luces de neón en las llantas que dejan estelas de luz (Light trails). Rostro subido como referencia con HUD de realidad aumentada. Luz de noche ciber-urbana. Biometría de habilidad digital al volante. Arri Raw."
        },
        {
            "id": "coches_37",
            "number": 37,
            "style": "Coches",
            "title": "LA ÉPOCA DORADA DE LAS CARRERAS",
            "content": "Rostro subido como referencia con casco de cuero y gafas de cristal en un coche de GP de los años 30. Luz de sol sobre el césped del circuito. Biometría de valentía suicida y honor. Óptica vintage Prime."
        },
        {
            "id": "coches_38",
            "number": 38,
            "style": "Coches",
            "title": "EL PARKING DE COCHES VOLADORES",
            "content": "Rostro subido como referencia en una plataforma de un rascacielos bajando de su vehículo aéreo. Luz de ciudad por debajo de los pies. Biometría de estilo de vida futurista de élite. Textura de turbinas y metal aeroespacial."
        },
        {
            "id": "coches_39",
            "number": 39,
            "style": "Coches",
            "title": "CAMIONEROS DE LA RUTA DEL HIELO",
            "content": "Camión cruzando un lago congelado que cruje. Rostro subido como referencia con miedo controlado y cara de frío. Luz de sol ártico pálida. Biometría de tensión extrema. Textura de nieve y grietas en el hielo PBR."
        },
        {
            "id": "coches_40",
            "number": 40,
            "style": "Coches",
            "title": "SAFARI EN 4X4 DE LUJO",
            "content": "Rostro subido como referencia viendo leones desde un interior de piel de alta gama. Luz de sabana africana. Biometría facial de asombro y confort. Textura de polvo en el cristal impecable. Calidad Masterpiece."
        },
        {
            "id": "coches_41",
            "number": 41,
            "style": "Coches",
            "title": "EXPOSICIÓN DE HOT ROD",
            "content": "Rostro subido como referencia con tatuajes de coches montando un chasis de acero pulido. Luz de feria de motor. Biometría de pasión mecánica y orgullo. Textura de llamas pintadas y metal de escape azulado por el calor."
        },
        {
            "id": "coches_42",
            "number": 42,
            "style": "Coches",
            "title": "EL TAXI ELÉCTRICO SILENCIOSO",
            "content": "Rostro subido como referencia como pasajero en un coche sin conductor por Shibuya nocturno. Luces de neón que pasan rápido por la ventilla. Biometría de soledad tecnológica moderna. Sony Venice 2."
        },
        {
            "id": "coches_43",
            "number": 43,
            "style": "Coches",
            "title": "HUMO DE FORMULA DRIFT",
            "content": "Rostro subido como referencia apenas visible tras una pared de humo de neumáticos naranja. Luz de focos de competencia. Biometría de concentración ciega. Textura de asfalto triturado y metal caliente."
        },
        {
            "id": "coches_44",
            "number": 44,
            "style": "Coches",
            "title": "EL COLECCIONISTA DE COCHES CLÁSICOS",
            "content": "Rostro subido como referencia en una biblioteca rodeada de 10 Ferraris clásicos inmaculados. Luz de museo privada de lujo. Biometría de erudición automotriz y riqueza. Textura de cera de coche y madera noble."
        },
        {
            "id": "coches_45",
            "number": 45,
            "style": "Coches",
            "title": "CARRERA EN LOS CANALES DE DESAGÜE",
            "content": "Escena al estilo Terminator 2. Rostro subido como referencia pilotando una moto o coche por canales de cemento. Luz solar de Los Ángeles. Biometría de acción y peligro. Calidad 8K fotorrealista."
        },
        {
            "id": "coches_46",
            "number": 46,
            "style": "Coches",
            "title": "LA MOTO DE REPARTO FUTURISTA",
            "content": "Caja de carga con luces LED. Rostro subido como referencia en una ciudad lluviosa. Luz de neón reflejada en el visor del casco. Biometría de trabajo nocturno eficiente. Textura de vinilo impermeable y metal."
        },
        {
            "id": "coches_47",
            "number": 47,
            "style": "Coches",
            "title": "BARCO CON ENERGÍA SOLAR",
            "content": "Coche anfibio o barco con paneles. Rostro subido como referencia tomando el sol en cubierta. Luz mediterránea vibrante. Biometría de placer y ecología técnica. Textura de agua HDR con salitre."
        },
        {
            "id": "coches_48",
            "number": 48,
            "style": "Coches",
            "title": "EL NAVEGUANTE DE RALLY",
            "content": "Rostro subido como referencia gritando instrucciones con un mapa de papel volando. Vibración extrema capturada con Arri Alexa 35. Luz de bosque denso. Biometría facial de comunicación urgerte y nervio."
        },
        {
            "id": "coches_49",
            "number": 49,
            "style": "Coches",
            "title": "INTERIOR DE COCHE DE LUJO DE NOCHE",
            "content": "Primer plano de manos del rostro subido como referencia en un volante de cuero bordado a mano. Luz ambiental de fibra óptica del coche. Biometría facial de calma y clase. Calidad Masterpiece 8K."
        },
        {
            "id": "coches_50",
            "number": 50,
            "style": "Coches",
            "title": "EL FANTASMA DEL DESGUACE",
            "content": "Rostro subido como referencia caminando entre miles de coches oxidados por la noche. Luz de luna y una linterna de mano. Biometría facial de misterio y nostalgia industrial. Textura de óxido de hierro."
        },
        {
            "id": "coches_51",
            "number": 51,
            "style": "Coches",
            "title": "EL DRAGSTER CON MOTOR DE JET",
            "content": "Turbinas echando fuego de 3 metros. Rostro subido como referencia pilotando con cara de pánico controlado. Luz naranja cegadora. Biometría de fuerza G extrema y calor. Red V-Raptor."
        },
        {
            "id": "coches_52",
            "number": 52,
            "style": "Coches",
            "title": "MÚSCULO MODERNO",
            "content": "Dodge Challenger con neumáticos echando humo en el desierto. Rostro subido como referencia con mirada agresiva. Luz solar rasante. Biometría de poder americano y testosterona mecánica. Calidad RAW."
        },
        {
            "id": "coches_53",
            "number": 53,
            "style": "Coches",
            "title": "MODIFICACIÓN DE COCHE SUBTERRÁNEA",
            "content": "Taller ilegal con luces de neón rosa. Rostro subido como referencia instalando nitro (N2O). Biometría de astucia y secreto. Textura de botellas de gas azul metalizado y cables."
        },
        {
            "id": "coches_54",
            "number": 54,
            "style": "Coches",
            "title": "EL ROLLS ROYCE DE ORO",
            "content": "Rostro subido como referencia como chofer de lujo. Coche impecable con reflejos del Palacio de Buckingham. Luz de día oficial. Biometría de protocolaria y respeto. Calidad 8K definitiva."
        },
        {
            "id": "coches_55",
            "number": 55,
            "style": "Coches",
            "title": "MOTO POST-APOCALÍPTICA",
            "content": "Dary Dixon style. Rostro subido como referencia con ballesta a la espalda en una moto de chatarra. Luz de carretera muerta. Biometría de supervivencia nómada. Textura de óxido y tela sucia."
        },
        {
            "id": "coches_56",
            "number": 56,
            "style": "Coches",
            "title": "EL PILOTO DEL TAXI ELÉCTRICO VOLADOR",
            "content": "Cabina de cristal total sobre Manhattan. Rostro subido como referencia con auriculares de aviación. Luz de atardecer en las nubes. Biometría facial de profesionalidad y visión aérea. Calidad IMAX."
        },
        {
            "id": "coches_57",
            "number": 57,
            "style": "Coches",
            "title": "PARADA EN BOXES DE F1",
            "content": "20 mecánicos alrededor del coche del rostro subido como referencia. Todo ocurre en 2 segundos. Desenfoque de acción técnica. Luz de focos de circuito nocturno. Biometría de tensión competitiva."
        },
        {
            "id": "coches_58",
            "number": 58,
            "style": "Coches",
            "title": "EL EXPLORADOR DEL CEMENTERIO DE COCHES",
            "content": "Rostro subido como referencia entrando en un autobús oxidado lleno de vegetación. Luz de sol a través de agujeros de bala. Biometría de curiosidad decadente. Textura de musgo y metal picado."
        },
        {
            "id": "coches_59",
            "number": 59,
            "style": "Coches",
            "title": "DETALLE DE FIBRA DE CARBONO",
            "content": "Primer plano extremo de la textura de carbono del coche del rostro subido como referencia. Luz lateral que resalta el tejido de fibra. Biometría facial de pasión por la tecnología de vanguardia."
        },
        {
            "id": "coches_60",
            "number": 60,
            "style": "Coches",
            "title": "EL MAESTRO DEL RALLY DEL DESIERTO",
            "content": "Dakar style. Rostro subido como referencia con cara cubierta de polvo y gafas de arena. Camión de carreras volando sobre una duna. Luz de sol abrasador. Biometría de resiliencia y dureza física."
        },
        {
            "id": "coches_61",
            "number": 61,
            "style": "Coches",
            "title": "EL DETALLADOR DE COCHES DE LUJO",
            "content": "Rostro subido como referencia con brocha de precisión limpiando una rejilla de un Bugatti. Luz de estudio quirúrgica. Biometría de perfección absoluta y cuidado microscópico. Textura de pintura y metal."
        },
        {
            "id": "coches_62",
            "number": 62,
            "style": "Coches",
            "title": "VIAJE AUTÓNOMO POR CARRETERA",
            "content": "Rostro subido como referencia durmiendo en un asiento cama de un coche que cruza las montañas. Luz de luna interna y fría. Biometría facial de paz y tecnología de confort futuro."
        },
        {
            "id": "coches_63",
            "number": 63,
            "style": "Coches",
            "title": "MOTERO CIBERPUNK",
            "content": "Moto de Akira con estelas de luz. Rostro subido como referencia con chaqueta de cuero con luces LED. Luz de ciudad nocturna vibrante. Biometría de rebeldía tecnológica. Sony Venice 2."
        },
        {
            "id": "coches_64",
            "number": 64,
            "style": "Coches",
            "title": "BODA EN COCHE CLÁSICO",
            "content": "Rostro subido como referencia al volante de un Bentley blanco con flores. Luz de boda feliz. Biometría de alegría y elegancia tradicional. Textura de seda de vestido y cromo brillante."
        },
        {
            "id": "coches_65",
            "number": 65,
            "style": "Coches",
            "title": "CARRERA DE ACELERACIÓN ILEGAL",
            "content": "Fuego saliendo de los escapes. Rostro subido como referencia concentrado en el semáforo de salida. Luz de farolas y neón de noche. Biometría de peligro y excitación motorizada."
        },
        {
            "id": "coches_66",
            "number": 66,
            "style": "Coches",
            "title": "EL PILOTO DE TANQUE",
            "content": "Rostro subido como referencia operando un tanque Abrams. Luz verde de visor nocturno interno. Biometría facial de mando militar pesado. Textura de acero balístico y electrónica táctica."
        },
        {
            "id": "coches_67",
            "number": 67,
            "style": "Coches",
            "title": "CALLE CON LOWRIDERS BAILANDO",
            "content": "Rostro subido como referencia manejando los controles hidráulicos. Coche en el aire. Luz de noche urbana animada. Biometría de maestría urbana y ritmo. Calidad 8K fotorrealista."
        },
        {
            "id": "coches_68",
            "number": 68,
            "style": "Coches",
            "title": "EL SUPERCOCHE SIGILOSO",
            "content": "Coche invisible que solo distorsiona la luz. Rostro subido como referencia dentro, visible levemente. Luz de base militar secreta. Biometría de espionaje avanzado. Textura de camuflaje activo."
        },
        {
            "id": "coches_69",
            "number": 69,
            "style": "Coches",
            "title": "LA RECONSTRUCCIÓN DEL HALLAZGO DEL ESTABLO",
            "content": "Rostro subido como referencia soldando el chasis de un viejo Alfa Romeo. Luz de chispas de soldadura azul intenso. Biometría de artesano del motor y dedicación. Arri Raw."
        },
        {
            "id": "coches_70",
            "number": 70,
            "style": "Coches",
            "title": "CABINA DE F1 MODERNA",
            "content": "Primer plano del rostro subido como referencia rodeado de 30 botones de luz en el volante. Luz de día soleado en pista. Biometría de precisión quirúrgica cerebral y física. Calidad IMAX."
        },
        {
            "id": "coches_71",
            "number": 71,
            "style": "Coches",
            "title": "EL SUV ELÉCTRICO DE LUJO",
            "content": "Rostro subido como referencia cargando el coche en una mansión minimalista. Luz de atardecer premium. Biometría de estatus ecológico y riqueza moderna. Textura de cargador de fibra y metal."
        },
        {
            "id": "coches_72",
            "number": 72,
            "style": "Coches",
            "title": "RALLY EN LA NIEVE",
            "content": "Coche cruzando un bosque blanco levantando una densa nube de nieve (Partículas volumétricas). Rostro subido como referencia con cara de frío extremo al volante. Luz azul de invierno. Biometría facial de adrenalina gélida."
        },
        {
            "id": "coches_73",
            "number": 73,
            "style": "Coches",
            "title": "EL ESCARABAJO DE ORO",
            "content": "Coche VW clásico bañado en oro en la playa. Rostro subido como referencia riendo en cubierta. Luz de sol y arena. Biometría de diversión exótica y arte automotriz. Calidad 8K Masterpiece."
        },
        {
            "id": "coches_74",
            "number": 74,
            "style": "Coches",
            "title": "PATRULLA DE AUTOPISTA FUTURISTA",
            "content": "Coche de policía con luces de plasma. Rostro subido como referencia con casco táctico. Luz de ciudad vertical. Biometría de vigilancia de alta tecnología. Textura de metal y luz sólida."
        },
        {
            "id": "coches_75",
            "number": 75,
            "style": "Coches",
            "title": "EL ÚLTIMO MECÁNICO DEL MUNDO",
            "content": "Rostro subido como referencia con herramientas de hueso y metal reparando una moto de vapor. Luz de desierto. Biometría de ingenio en el fin de los tiempos. Textura de óxido y cuero."
        },
        {
            "id": "coches_76",
            "number": 76,
            "style": "Coches",
            "title": "COCHE CÁMARA DE ALTA VELOCIDAD",
            "content": "Rostro subido como referencia operando una Arri Alexa en un brazo robótico montado en un Porsche. Luz de acción de cine. Biometría facial de profesionalidad detrás de las cámaras."
        },
        {
            "id": "coches_77",
            "number": 77,
            "style": "Coches",
            "title": "EL CAMIONERO CLÁSICO",
            "content": "En un Peterbilt cromado inmenso. Rostro subido como referencia con barba y tatuaje de \"Born to race\". Luz de amanecer en la carretera nacional. Biometría de leyenda del asfalto. Sony Venice 2."
        },
        {
            "id": "coches_78",
            "number": 78,
            "style": "Coches",
            "title": "DORMITORIO EN COCHE AUTÓNOMO",
            "content": "Interior transformado en cama de lujo. Rostro subido como referencia durmiendo mientras cruza un puente a las 3 AM. Luz de farolas pasando por el techo de cristal. Biometría de sueño tecnológico."
        },
        {
            "id": "coches_79",
            "number": 79,
            "style": "Coches",
            "title": "LA LEYENDA DE LA MODIFICACIÓN DE COCHES",
            "content": "Rostro subido como referencia ante 50 trofeos en su taller. Un Nissan GTR de 2000 CV detrás. Luz de victoria y legado. Biometría facial de éxito extremo y pasión. Calidad RAW 8K."
        },
        {
            "id": "coches_80",
            "number": 80,
            "style": "Coches",
            "title": "CONCEPTO OFF-ROAD FUTURISTA",
            "content": "Vehículo con ruedas esféricas en un cañón de Marte. Rostro subido como referencia pilotando con joystick. Luz roja de atardecer marciano. Biometría de asombro y exploración. Textura de roca y tecnología PBR."
        },
        {
            "id": "coches_81",
            "number": 81,
            "style": "Coches",
            "title": "EL MODELO DE EXPOSICIÓN DE COCHES",
            "content": "Rostro subido como referencia posando con un prototipo de cristal. Luz de flashes de cámaras. Biometría de belleza y profesionalidad comercial. Textura de ropa de diseño brillante."
        },
        {
            "id": "coches_82",
            "number": 82,
            "style": "Coches",
            "title": "COCHE CON MOTOR DE VAPOR ANTIGUO",
            "content": "Rostro subido como referencia con ropa de la época victoriana y gafas de latón. Luz de niebla londinense. Biometría de orgullo tecnológico industrial. Textura de metal negro y vapor volumétrico."
        },
        {
            "id": "coches_83",
            "number": 83,
            "style": "Coches",
            "title": "EL FOTÓGRAFO DE COCHES DE ALTA GAMA",
            "content": "Rostro subido como referencia con una Hasselblad digital fotografiando un Pagani. Luz de estudio de 10.000W. Biometría facial de ojo crítico y arte visual. Calidad Masterpiece."
        },
        {
            "id": "coches_84",
            "number": 84,
            "style": "Coches",
            "title": "ESCOLTA DE BOT DE REPARTO AUTÓNOMO",
            "content": "Rostro subido como referencia vigilando un convoy de robots en una ciudad futurista. Luz nocturna de seguridad. Biometría facial de responsabilidad tecnológica."
        },
        {
            "id": "coches_85",
            "number": 85,
            "style": "Coches",
            "title": "EL PRO DE LA RESTAURACIÓN DE COCHES CLÁSICOS",
            "content": "Rostro subido como referencia pintando a mano las letras de un neumático vintage. Luz de taller con mucha claridad. Biometría de paciencia infinita y mano de maestro. Arri Alexa 35."
        },
        {
            "id": "coches_86",
            "number": 86,
            "style": "Coches",
            "title": "INTERIOR DEL INTERCEPTOR POLICIAL DEL FUTURO",
            "content": "Rostro subido como referencia rodeado de pantallas holográficas de sospechosos. Luz azul y roja parpadeando. Biometría facial de adrenalina táctica y mando. Calidad IMAX 8K."
        },
        {
            "id": "coches_87",
            "number": 87,
            "style": "Coches",
            "title": "EL CONDUCTOR SOLITARIO DEL DESIERTO",
            "content": "Rostro subido como referencia en un descapotable a 150 km/h bajo la Vía Láctea HDR. Luz de estrellas y panel de control. Biometría de libertad existencial absoluta. Sony Venice 2."
        },
        {
            "id": "coches_88",
            "number": 88,
            "style": "Coches",
            "title": "INGENIERO TÉCNICO DE F1",
            "content": "Rostro subido como referencia con auriculares analizando datos en tiempo real. Luz de pantallas masivas. Biometría de inteligencia extrema y presión competitiva mundial."
        },
        {
            "id": "coches_89",
            "number": 89,
            "style": "Coches",
            "title": "LA REVELACIÓN DEL GARAJE DEFINITIVO",
            "content": "Puerta secreta abriéndose para mostrar la colección del rostro subido como referencia. Luz de focos de teatro. Biometría de triunfo personal y éxito acumulado. Calidad fotorrealista."
        },
        {
            "id": "coches_90",
            "number": 90,
            "style": "Coches",
            "title": "DRIFT ELÉCTRICO EN SILENCIO",
            "content": "Coche girando en una azotea de Tokio sin ruido de motor, solo chillido de neumáticos. Rostro subido como referencia con mirada de precisión quirúrgica. Luz de ciudad nocturna de neón. Biometría de destreza técnica suprema."
        },
        {
            "id": "coches_91",
            "number": 91,
            "style": "Coches",
            "title": "FINAL DE LA RECONSTRUCCIÓN DEL ESTABLO",
            "content": "Rostro subido como referencia conduciendo por primera vez el coche reconstruido. Luz de mañana triunfal. Biometría facial de alegría incontenible y logro personal. Calidad 8K RAW."
        },
        {
            "id": "coches_92",
            "number": 92,
            "style": "Coches",
            "title": "GUARDIA DE SEGURIDAD DE COCHES DE ALTA TECNOLOGÍA",
            "content": "Rostro subido como referencia con escáner de calor protegiendo un prototipo. Luz azul de seguridad nocturna. Biometría de vigilancia absoluta y tecnología de defensa."
        },
        {
            "id": "coches_93",
            "number": 93,
            "style": "Coches",
            "title": "EL REGRESO DEL PILOTO DE RALLY CLÁSICO",
            "content": "Rostro subido como referencia saliendo del coche cubierto de barro y champán. Luz de celebración final. Biometría de éxito legendario y veteranía heroica. Arri Alexa 35."
        },
        {
            "id": "coches_94",
            "number": 94,
            "style": "Coches",
            "title": "PASEO ACUÁTICO A CASA EN MOTO FUTURISTA",
            "content": "Moto deslizándose sobre el agua hacia una ciudad de cristal. Rostro subido como referencia con mirada de misión cumplida. Luz de atardecer oceánico. Biometría de estilo de vida futurista premium."
        },
        {
            "id": "coches_95",
            "number": 95,
            "style": "Coches",
            "title": "EL BOCETO DEL DISEÑADOR JEFE",
            "content": "Rostro subido como referencia ante una pantalla táctil gigante con el coche perfecto dibujado. Luz de genialidad creativa. Biometría de liderazgo en diseño industrial mundial."
        },
        {
            "id": "coches_96",
            "number": 96,
            "style": "Coches",
            "title": "PASEO NOCTURNO EN COCHE DE LUJO",
            "content": "Rostro subido como referencia viendo las luces de la ciudad pasar por el techo panorámico. Luz ambiental suave y premium. Biometría de confort y éxito social. Calidad Masterpiece."
        },
        {
            "id": "coches_97",
            "number": 97,
            "style": "Coches",
            "title": "EL RENACIMIENTO DEL COCHE CLÁSICO",
            "content": "Motor antiguo convertido a eléctrico por el rostro subido como referencia. Luz de taller moderno con alma clásica. Biometría facial de innovación y respeto al pasado. Sony Venice 2."
        },
        {
            "id": "coches_98",
            "number": 98,
            "style": "Coches",
            "title": "EL CENTINELA DE LA AUTOPISTA",
            "content": "Rostro subido como referencia con coche de patrulla blindado en una duna. Luz de horizonte en llamas de atardecer. Biometría de autoridad solitaria y vigilancia estratégica."
        },
        {
            "id": "coches_99",
            "number": 99,
            "style": "Coches",
            "title": "EL ÚLTIMO VIAJE DEFINITIVO",
            "content": "Coche alejándose por una carretera infinita hacia el sol poniente. Rostro subido como referencia en el retrovisor sonriendo. Luz dorada divina. Biometría de paz y libertad motorizada absoluta."
        },
        {
            "id": "coches_100",
            "number": 100,
            "style": "Coches",
            "title": "LA REVELACIÓN DE LA OBRA MAESTRA",
            "content": "Coche diseñado, construido y pilotado por el rostro subido como referencia. Bajo luces de estudio perfectas. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de orgullo supremo y éxito total."
        }
    ],
    "Motos": [
        {
            "id": "motos_1",
            "number": 1,
            "style": "Motos",
            "title": "EL VIAJE DEL CIBER-MOTERO",
            "content": "Captura épica de una moto de luz estilo Akira cruzando Neo-Tokio a 300 km/h. Estelas de luz roja (Light trails) dejando un rastro volumétrico. Personaje con rostro subido como referencia con casco de cristal de policarbonato translúcido, biometría facial visible: mirada de determinación pura y reflejos de neón en las pupilas. Captura con Sony Venice 2 y óptica anamórfica Cooke. Calidad 8K cinemática."
        },
        {
            "id": "motos_2",
            "number": 2,
            "style": "Motos",
            "title": "VIAJE EN CHOPPER CLÁSICA",
            "content": "Rostro subido como referencia con barba y tatuajes de \"Ruta 66\" al manillar de una Harley-Davidson con horquilla extendida cromada (Ray-tracing). Luz de atardecer de 3000K sobre el desierto. Biometría facial de libertad y asfalto. Textura de cuero de la chaqueta con remaches y metal pulido PBR. Calidad Masterpiece."
        },
        {
            "id": "motos_3",
            "number": 3,
            "style": "Motos",
            "title": "CAFE RACER EN LA NOCHE URBANA",
            "content": "Moto minimalista negra frente a un escaparate iluminado. Rostro subido como referencia sentado sobre el depósito acariciando el metal frío. Iluminación nocturna de Londres con lluvia fina. Micro-gotas de agua realistas en el faro redondo. Biometría facial de melancolía y estilo. Óptica Leica 35mm f/1.4."
        },
        {
            "id": "motos_4",
            "number": 4,
            "style": "Motos",
            "title": "MOTO DE SUPERVIVENCIA POST-APOCALÍPTICA",
            "content": "Moto hecha de chatarra con neumáticos de clavos. Rostro subido como referencia con máscara de cuero y ballesta a la espalda. Luz de horizonte en llamas. Biometría facial de dureza y supervivencia. Textura de metal oxidado, tela sucia y sangre seca PBR. Estética Daryl Dixon / Mad Max. Calidad fotorrealista."
        },
        {
            "id": "motos_5",
            "number": 5,
            "style": "Motos",
            "title": "LA LEYENDA DE LAS CARRERAS",
            "content": "Salida de curva en un circuito de MotoGP. Rostro subido como referencia con el cuerpo inclinado tocando el asfalto. Desenfocado de movimiento (Motion blur) lateral. Biometría facial visible tras el visor: concentración cerebral máxima. Traje de cuero de carreras con protecciones de carbono texturizadas. Arri Alexa 35."
        },
        {
            "id": "motos_6",
            "number": 6,
            "style": "Motos",
            "title": "AVENTURA EN SIDECAR VINTAGE",
            "content": "Moto de los años 40 con sidecar cruzando un bosque bávaro. Rostro subido como referencia con gorra de piloto y gafas retro. Luz de mañana filtrada por los pinos (God rays). Biometría facial de alegría y aventura clásica. Textura de metal verde militar y madera de la cesta. Óptica Zeiss f/2.0."
        },
        {
            "id": "motos_7",
            "number": 7,
            "style": "Motos",
            "title": "DUELO DE MOTOS DE LUZ DE TRON",
            "content": "Duelo en la cuadrilla digital. Rostro subido como referencia con traje de circuitos de luz azul. Iluminación puramente técnica y sintética. Biometría facial de inmersión total en la red. Textura de material sintético de luz y cristal líquido. Calidad Masterpiece."
        },
        {
            "id": "motos_8",
            "number": 8,
            "style": "Motos",
            "title": "MOTO DE VAPOR STEAMPUNK",
            "content": "Engranajes de latón echando vapor volumétrico blanco. Rostro subido como referencia con chistera y gafas de aviador de cobre. Luz de farolas de gas de la época victoriana. Biometría facial de genio industrial. Textura de cuero barnizado y metal caliente PBR. Calidad 8K definitiva."
        },
        {
            "id": "motos_9",
            "number": 9,
            "style": "Motos",
            "title": "MOTO DE RALLY DEL DESIERTO",
            "content": "Saltando sobre una duna de arena a contraluz. Rostro subido como referencia con cara cubierta de polvo y sudor (Biometría facial). Luz solar cegadora de 6000K. Textura de neumáticos de arena y plásticos de carenado arañados. Red V-Raptor."
        },
        {
            "id": "motos_10",
            "number": 10,
            "style": "Motos",
            "title": "MOTO CUSTOM DE LUJO",
            "content": "Moto de diseño único con acabados en oro y platino. Rostro subido como referencia con traje de diseño. Luz de estudio de 10.000W impecable. Biometría facial de éxito y exclusividad absoluta. Textura de asientos de piel de serpiente y metal precioso pulido. Calidad fotorrealista."
        },
        {
            "id": "motos_11",
            "number": 11,
            "style": "Motos",
            "title": "REPARACIÓN EN EL GARAJE DE MEDIANOCHE",
            "content": "Luz de una sola bombilla sobre el motor abierto de una moto deportiva. Rostro subido como referencia con las manos negras de grasa. Humo de soldadura. Biometría facial de obsesión y perfeccionismo técnico. Textura de llaves inglesas y metal de motor caliente."
        },
        {
            "id": "motos_12",
            "number": 12,
            "style": "Motos",
            "title": "MOTO DE POLICÍA FUTURISTA",
            "content": "Sirenas de luz azul y roja parpadeando sobre el rostro subido como referencia con casco táctico integral. Luz de ciudad vertical. Biometría facial de vigilancia y ley. Textura de kevlar y metal blindado PBR. Sony Venice 2."
        },
        {
            "id": "motos_13",
            "number": 13,
            "style": "Motos",
            "title": "EL VIAJE EN SOLITARIO POR EL PAÍS",
            "content": "Moto trail cargada de maletas en una carretera infinita. Rostro subido como referencia mirando al horizonte sonriendo. Luz de mañana fresca. Biometría facial de paz existencial. Textura de barro seco y ropa técnica impermeable."
        },
        {
            "id": "motos_14",
            "number": 14,
            "style": "Motos",
            "title": "VIAJERO URBANO EN BICI ELÉCTRICA",
            "content": "Futurista y veloz. Rostro subido como referencia entre rascacielos. Luz de sol de ciudad de 5000K. Biometría de eficiencia y modernidad. Textura de batería de litio y neumáticos de baja fricción. Calidad Masterpiece."
        },
        {
            "id": "motos_15",
            "number": 15,
            "style": "Motos",
            "title": "LA MOTO DE ORO",
            "content": "Bañada en oro de 24 quilates en un desierto de sal blanca. Rostro subido como referencia con gafas de sol doradas. Iluminación de lujo y exceso cromático. Biometría facial de poder absoluto. Calidad fotorrealista 8K."
        },
        {
            "id": "motos_16",
            "number": 16,
            "style": "Motos",
            "title": "MOTO DE LUCHA EN EL BARRO",
            "content": "Moto de motocross en pleno fango. Rostro subido como referencia con el cuerpo totalmente cubierto de barro marrón. Luz de día nublado. Biometría facial de esfuerzo físico y diversión sucia. Textura de lodo viscoso y metal."
        },
        {
            "id": "motos_17",
            "number": 17,
            "style": "Motos",
            "title": "LA MOTO SIGILOSA DEL AGENTE",
            "content": "Moto eléctrica silenciosa negra mate. Rostro subido como referencia saliendo de un avión de carga. Luz de base militar nocturna. Biometría de infiltración y precisión táctica. Textura de neumáticos de baja firma acústica."
        },
        {
            "id": "motos_18",
            "number": 18,
            "style": "Motos",
            "title": "LA MOTO MONSTRUO",
            "content": "Ruedas de tractor inmensas. Rostro subido como referencia pilotando desde lo alto con cara de poder absoluto. Luz de focos de estadio. Biometría de emoción bruta. Calidad de imagen IMAX. Red V-Raptor."
        },
        {
            "id": "motos_19",
            "number": 19,
            "style": "Motos",
            "title": "EL JINETE DE LA NOCHE NEÓN",
            "content": "Moto con tiras de LED que caben de color según la velocidad. Rostro subido como referencia con chaqueta de luz. Luz de ciudad nocturna de neón ciber-urbano. Biometría facial de rebeldía y velocidad."
        },
        {
            "id": "motos_20",
            "number": 20,
            "style": "Motos",
            "title": "EL RESCATE DE LA MOTO ABANDONADA",
            "content": "Encontrada en un desguace bajo un árbol creciendo a través del chasis. Rostro subido como referencia limpiando el polvo del faro. Luz de sol a través de las ramas. Biometría de asombro y promesa de restauración."
        },
        {
            "id": "motos_21",
            "number": 21,
            "style": "Motos",
            "title": "ESCOLTA DE MOTO AUTÓNOMA",
            "content": "Moto sin piloto liderando al personaje con rostro subido como referencia. Luz de seguridad futurista. Biometría facial de confianza en la tecnología de IA. Textura de sensores LIDAR y metal blanco."
        },
        {
            "id": "motos_22",
            "number": 22,
            "style": "Motos",
            "title": "EL CABALLITO PERFECTO DEL ACRÓBATA",
            "content": "En una calle vacía de noche. Rostro subido como referencia mirando a cámara con el casco levantado. Luz de farolas pasando. Biometría de destreza atlética y carisma. Textura de asfalto y caucho quemado."
        },
        {
            "id": "motos_23",
            "number": 23,
            "style": "Motos",
            "title": "EL DISEÑADOR DE MOTOS CUSTOM",
            "content": "Rostro subido como referencia esculpiendo un modelo de arcilla de una moto futurista. Luz de estudio perfecta. Biometría de genio creativo y manos de artista. Textura de arcilla y metal. Arri Alexa 35."
        },
        {
            "id": "motos_24",
            "number": 24,
            "style": "Motos",
            "title": "PASEO DE PERFIL BAJO",
            "content": "Chopper pequeña por un paseo marítimo. Rostro subido como referencia con gafas de sol y camisa de lino. Luz de atardecer de Miami. Biometría de relax y estilo. Calidad Masterpiece."
        },
        {
            "id": "motos_25",
            "number": 25,
            "style": "Motos",
            "title": "EL MOTERO GUARDIÁN DE LA AUTOPISTA",
            "content": "Rostro subido como referencia con uniforme de patrulla motorizada y chaleco táctico. Luz de sirenas azules y rojas. Biometría de autoridad y vigilancia en la ruta. Sony Venice 2."
        },
        {
            "id": "motos_26",
            "number": 26,
            "style": "Motos",
            "title": "MOTO DE VIAJE INTERPLANETARIO",
            "content": "Moto espacial con motores de iones. Rostro subido como referencia con traje espacial integral. Luz de planeta gaseoso de fondo. Biometría facial de exploración extrema. Calidad 8K cinemática."
        },
        {
            "id": "motos_27",
            "number": 27,
            "style": "Motos",
            "title": "EL MOTERO DEL DESGUACE",
            "content": "Rostro subido como referencia sobre una pila de neumáticos viejos con su moto parcheada. Luz de atardecer industrial sucio. Biometría de fuerza y longevidad en la carretera. Textura de óxido y caucho."
        },
        {
            "id": "motos_28",
            "number": 28,
            "style": "Motos",
            "title": "AERODINÁMICA DE SUPERBIKE",
            "content": "En el túnel de viento. Humo trazando la aerodinámica del casco del rostro subido como referencia. Luz técnica azulada. Biometría facial de ingeniería de alta velocidad. Calidad definitiva."
        },
        {
            "id": "motos_29",
            "number": 29,
            "style": "Motos",
            "title": "BODA EN SIDECAR CLÁSICO",
            "content": "Rostro subido como referencia al manillar con flores blancas. Luz de día de boda. Biometría de alegría y elegancia. Textura de cromo y seda de vestido. fotorrealista 8K."
        },
        {
            "id": "motos_30",
            "number": 30,
            "style": "Motos",
            "title": "MOTO ACUÁTICA ANFIBIA",
            "content": "Moto que se despliega para flotar. Rostro subido como referencia cruzando un canal de Venecia futurista. Luz de sol y agua turquesa. Biometría de diversión y tecnología recreativa original."
        },
        {
            "id": "motos_31",
            "number": 31,
            "style": "Motos",
            "title": "LA VESPA ROSA RETRO",
            "content": "Rostro subido como referencia con pañuelo de seda y gafas vintage en una Vespa rosa por Roma. Luz de tarde italiana. Biometría facial de elegancia fresca y felicidad. Calidad Masterpiece."
        },
        {
            "id": "motos_32",
            "number": 32,
            "style": "Motos",
            "title": "PERSECUCIÓN POLICIAL DEL FUTURO EN MOTO",
            "content": "Moto voladora con sirenas de luz sólida. Rostro subido como referencia huyendo entre edificios. Luz de ciudad nocturna infinita. Biometría de pánico motorizado y velocidad extrema. Red V-Raptor."
        },
        {
            "id": "motos_33",
            "number": 33,
            "style": "Motos",
            "title": "LA MOTO DE BATALLA BLINDADA",
            "content": "Moto con placas de blindaje de titanio. Rostro subido como referencia con casco balístico. Luz de zona de guerra. Biometría de valentía y mando militar. Textura de metal arañado y pintura mate."
        },
        {
            "id": "motos_34",
            "number": 34,
            "style": "Motos",
            "title": "QUEMANDO RUEDA EN MOTO DRAG",
            "content": "Nube de humo gigante detrás. Rostro subido como referencia concentrado en el semáforo verde. Luz de pista de aceleración. Biometría de adrenalina pura y calor. Calidad IMAX."
        },
        {
            "id": "motos_35",
            "number": 35,
            "style": "Motos",
            "title": "SCOOTER ELÉCTRICO SOLAR",
            "content": "Paneles en el carenado. Rostro subido como referencia paseando por un parque botánico futurista. Luz natural brillante. Biometría de ecología y tecnología urbana."
        },
        {
            "id": "motos_36",
            "number": 36,
            "style": "Motos",
            "title": "MOTOCICLETA DRIFTING CIBERPUNK",
            "content": "Moto con estelas de luz en las ruedas. Rostro subido como referencia con HUD de datos en el visor. Luz de noche urbana vibrante. Biometría de destreza digital al volante. Arri Raw."
        },
        {
            "id": "motos_37",
            "number": 37,
            "style": "Motos",
            "title": "LA ÉPOCA DORADA DE LAS CARRERAS DE CARRETERA",
            "content": "Moto de los años 50 con carenado redondo (Dustbin). Rostro subido como referencia con casco de cuero. Luz de sol de Isla de Man. Biometría de valentía heroica y honor. Calidad 8K cinemática."
        },
        {
            "id": "motos_38",
            "number": 38,
            "style": "Motos",
            "title": "MOTO FLOTANTE HOVER",
            "content": "Motos sin ruedas sobre un lago helado. Rostro subido como referencia pilotando con guantes de piel. Luz azul gélida. Biometría de libertad aérea precaria. Textura de hielo y metal."
        },
        {
            "id": "motos_39",
            "number": 39,
            "style": "Motos",
            "title": "EXPEDICIÓN EN MOTO DE INVIERNO",
            "content": "Moto con sidecar y esquís. Rostro subido como referencia con cara cubierta de nieve y vaho. Luz solar pálida del ártico. Biometría facial de frío extremo y resistencia. Sony Venice 2."
        },
        {
            "id": "motos_40",
            "number": 40,
            "style": "Motos",
            "title": "ESTILO DE VIDA DE MOTO DE LUJO",
            "content": "Rostro subido como referencia bajando de su moto frente a un jet privado. Luz de atardecer de élite. Biometría facial de estatus y poder financiero. Calidad Masterpiece."
        },
        {
            "id": "motos_41",
            "number": 41,
            "style": "Motos",
            "title": "EL ESTUDIO DE TATUAJES DEL MOTERO",
            "content": "Rostro subido como referencia tatuándose el logo de su club. Moto detrás. Luz de taller y antorchas. Biometría de lealtad y dolor físico. Textura de piel tatuada y metal."
        },
        {
            "id": "motos_42",
            "number": 42,
            "style": "Motos",
            "title": "REPARTO EN MOTO AUTÓNOMA",
            "content": "Convoy de motos sin piloto. Rostro subido como referencia supervisando desde una tableta. Luz nocturna de seguridad. Biometría de mando tecnológico eficiente."
        },
        {
            "id": "motos_43",
            "number": 43,
            "style": "Motos",
            "title": "EL JINETE FANTASMA DE ALTA VELOCIDAD",
            "content": "Motos que solo se ve como una estela de luz (Light trail) y la silueta del rostro subido como referencia. Luz de autopista nocturna infinita. Biometría de velocidad pura."
        },
        {
            "id": "motos_44",
            "number": 44,
            "style": "Motos",
            "title": "LA BÓVEDA DEL COLECCIONISTA DE MOTOS",
            "content": "Rostro subido como referencia entre 50 motos raras de todas las épocas. Luz de museo de lujo. Biometría de erudición técnica y riqueza acumulada. Calidad fotorrealista 8K."
        },
        {
            "id": "motos_45",
            "number": 45,
            "style": "Motos",
            "title": "MOTERO EN FÁBRICA INDUSTRIAL",
            "content": "Cruzar pasarelas de metal en moto entre chispas de soldadura. Rostro subido como referencia con cara de determinación operativa. Luz de focos de obra. Biometría de destreza en entornos hostiles."
        },
        {
            "id": "motos_46",
            "number": 46,
            "style": "Motos",
            "title": "LA MOTO NÓMADA POST-APOCALÍPTICA",
            "content": "Dary Dixon style. Rostro subido como referencia con ballesta a la espalda y cara sucia. Cruzando una ciudad muerta. Luz de atardecer gris. Biometría de supervivencia. Textura de óxido y tela."
        },
        {
            "id": "motos_47",
            "number": 47,
            "style": "Motos",
            "title": "MOTO CONCEPTUAL DE HIDRÓGENO",
            "content": "Diseño de burbuja de cristal. Rostro subido como referencia dentro con look minimalista blanco. Luz azul de hidrógeno. Biometría de tecnología limpia y futuro. Arri Alexa 35."
        },
        {
            "id": "motos_48",
            "number": 48,
            "style": "Motos",
            "title": "EL MAESTRO DEL TRIAL",
            "content": "Moto de trial haciendo equilibrio sobre una roca volcánica. Rostro subido como referencia con cara de concentración física absoluta. Luz de sol rasante. Biometría de precisión muscular. Red V-Raptor."
        },
        {
            "id": "motos_49",
            "number": 49,
            "style": "Motos",
            "title": "JINETE ELÉCTRICO DE NOCHE URBANA",
            "content": "Moto silenciosa con luces LED cian. Rostro subido como referencia con traje de luz reactiva. Luz de ciudad nocturna. Biometría facial de soledad y modernidad urbana. Masterpiece."
        },
        {
            "id": "motos_50",
            "number": 50,
            "style": "Motos",
            "title": "EL CENTINELA DEL CEMENTERIO DE MOTOS",
            "content": "Rostro subido como referencia viviendo en una cabaña hecha de depósitos de gasolina viejos. Luz de luna y fuego. Biometría de sabiduría solitaria y nostalgia técnica."
        },
        {
            "id": "motos_51",
            "number": 51,
            "style": "Motos",
            "title": "LA MOTO CON MOTOR DE JET",
            "content": "Turbina inmenso echando fuego azul. Rostro subido como referencia pilotando con mirada de pánico controlado. Luz de post-combustión intensa. Biometría de velocidad suicida. Sony Venice 2."
        },
        {
            "id": "motos_52",
            "number": 52,
            "style": "Motos",
            "title": "MOTOCICLETA DE MÚSCULO",
            "content": "Trike gigante con motor V8. Rostro subido como referencia pilotando con cara de poder americano. Luz solar del mediodía. Biometría de fuerza bruta y testosterona mecánica. Calidad RAW."
        },
        {
            "id": "motos_53",
            "number": 53,
            "style": "Motos",
            "title": "MODIFICACIÓN EN GARAJE SUBTERRÁNEO",
            "content": "Rostro subido como referencia instalando óxido nitroso (NOS) en una moto. Luz de neón rosa y azul. Biometría facial de astucia y secreto criminal-técnico. Calidad 8K."
        },
        {
            "id": "motos_54",
            "number": 54,
            "style": "Motos",
            "title": "LA HARLEY-DAVIDSON DE ORO",
            "content": "Moto bañada en oro de 24 quilates en un desierto de sal. Rostro subido como referencia con gafas de sol doradas. Iluminación de lujo y exceso. Biometría de poder absoluto."
        },
        {
            "id": "motos_55",
            "number": 55,
            "style": "Motos",
            "title": "LA MOTO DE DARY DIXON",
            "content": "Rostro subido como referencia con mirada de superviviente en una moto con ballesta. Luz de bosque muerto. Biometría facial de resiliencia post-apocalíptica. Calidad fotorrealista."
        },
        {
            "id": "motos_56",
            "number": 56,
            "style": "Motos",
            "title": "LA MOTO DE LUZ FLOTANTE",
            "content": "Tron style. Rostro subido como referencia en una moto que levita sobre el asfalto digital. Luz de cuadrícula de neón. Biometría de inmersión total en el ciberespacio. Masterpiece."
        },
        {
            "id": "motos_57",
            "number": 57,
            "style": "Motos",
            "title": "PARADA EN BOXES DE MOTOGP",
            "content": "Mecánicos cambiando neumáticos en 4 segundos. Rostro subido como referencia esperando en el asiento. Luz de circuito nocturno. Biometría de tensión competitiva extrema. Arri Alexa 35."
        },
        {
            "id": "motos_58",
            "number": 58,
            "style": "Motos",
            "title": "LA MOTOCICLETA DEL MISTERIO EN EL BOSQUE",
            "content": "Rostro subido como referencia encontrando una moto antigua cubierta de hiedra y flores. Luz de sol a través de las ramas. Biometría de asombro y descubrimiento mágico-técnico."
        },
        {
            "id": "motos_59",
            "number": 59,
            "style": "Motos",
            "title": "PLANO DE DETALLE DE FIBRA DE CARBONO",
            "content": "Primer plano del tejido de carbono de la moto del rostro subido como referencia. Luz lateral que resalta el 3D del material. Biometría facial de pasión por la tecnología de vanguardia."
        },
        {
            "id": "motos_60",
            "number": 60,
            "style": "Motos",
            "title": "EL MAESTRO DEL DAKAR",
            "content": "Rostro subido como referencia con cara cubierta de polvo y arena. Moto de carreras volando sobre una duna inmensa. Luz solar abrasadora. Biometría de resiliencia y dureza física extrema."
        },
        {
            "id": "motos_61",
            "number": 61,
            "style": "Motos",
            "title": "DÍA DE PISTA PRIVADO",
            "content": "Rostro subido como referencia solo en el circuito con su superbike de 200 CV. Luz de tarde dorada. Biometría de éxito personal y éxtasis deportivo. Calidad IMAX 8K. Sony Venice 2."
        },
        {
            "id": "motos_62",
            "number": 62,
            "style": "Motos",
            "title": "CONSTRUCTOR DE CHOPPERS MODERNAS",
            "content": "Rostro subido como referencia soldando una horquilla de acero inoxidable. Luz de chispas de soldadura y neón de taller. Biometría de artesano de élite y diseño industrial radical."
        },
        {
            "id": "motos_63",
            "number": 63,
            "style": "Motos",
            "title": "EL VIAJERO URBANO DEL FUTURO",
            "content": "Moto eléctrica flotante monorueda. Rostro subido como referencia con traje minimalista. Luz de ciudad vertical. Biometría de eficiencia y estilo de vida moderno premium."
        },
        {
            "id": "motos_64",
            "number": 64,
            "style": "Motos",
            "title": "PASEO EN SIDECAR VINTAGE POR LA TOSCANA",
            "content": "Rostro subido como referencia riendo con su pareja en el sidecar. Luz de tarde mediterránea. Biometría de felicidad y conexión humana clásica. Calidad Masterpiece."
        },
        {
            "id": "motos_65",
            "number": 65,
            "style": "Motos",
            "title": "COMBATE DE MOTOS SUBTERRÁNEO",
            "content": "Armas montadas en los carenados. Rostro subido como referencia en plena lucha en un túnel. Luz de trazadoras y fuego. Biometría de furia y adrenalina post-apocalíptica-técnica."
        },
        {
            "id": "motos_66",
            "number": 66,
            "style": "Motos",
            "title": "EL PILOTO DE MOTOCICLETA ROBOT",
            "content": "Rostro subido como referencia viendo como un robot humanoide pilota su moto. Luz de taller de alta tecnología. Biometría facial de curiosidad y futuro. Calidad 8K fotorrealista."
        },
        {
            "id": "motos_67",
            "number": 67,
            "style": "Motos",
            "title": "CRUISER CUSTOM DE PERFIL BAJO",
            "content": "Moto que apenas toca el suelo. Rostro subido como referencia con ropa de cuero de diseño. Luz de noche urbana premium. Biometría de estilo y éxito social. Arri Alexa 35. Red V-Raptor."
        },
        {
            "id": "motos_68",
            "number": 68,
            "style": "Motos",
            "title": "EL AGENTE DE LA MOTO SIGILOSA",
            "content": "Moto invisible que distorsiona la luz. Rostro subido como referencia con visor de datos. Luz de operación encubierta. Biometría de espionaje avanzado de élite."
        },
        {
            "id": "motos_69",
            "number": 69,
            "style": "Motos",
            "title": "EL TALLER DE LA VIEJA ESCUELA",
            "content": "Rostro subido como referencia rodeado de motos desmontadas y carteles de carreras viejos. Luz de claraboya sucia. Biometría de veteranía mecánica y sabiduría del motor."
        },
        {
            "id": "motos_70",
            "number": 70,
            "style": "Motos",
            "title": "CABINA DE MOTOCICLETA MODERNA",
            "content": "Primer plano del rostro subido como referencia rodeado de pantallas digitales en el manillar. Luz de día soleado. Biometría de precisión técnica cerebral y física. Calidad IMAX."
        },
        {
            "id": "motos_71",
            "number": 71,
            "style": "Motos",
            "title": "EL JINETE DEL SCOOTER ELÉCTRICO DE LUJO",
            "content": "Rostro subido como referencia cargando el scooter en una terraza minimalista. Luz de atardecer premium. Biometría facial de estatus ecológico y riqueza moderna. Sony Venice 2."
        },
        {
            "id": "motos_72",
            "number": 72,
            "style": "Motos",
            "title": "RALLY DE MOTOCICLETAS EN LA NIEVE",
            "content": "Motos con sidecar cruzando una estepa blanca levantando una nube de nieve cristalina. Rostro subido como referencia con cara de frío extremo. Luz azul de invierno. Calidad 8K Masterpiece."
        },
        {
            "id": "motos_73",
            "number": 73,
            "style": "Motos",
            "title": "LA VESPA DE ORO",
            "content": "VW Vespa clásica bañada en oro en la playa. Rostro subido como referencia riendo en cubierta. Luz de sol y arena. Biometría de diversión exótica y arte automotriz. Calidad definitiva."
        },
        {
            "id": "motos_74",
            "number": 74,
            "style": "Motos",
            "title": "PATRULLA DE MOTOCICLETAS FUTURISTA",
            "content": "Moto de policía con luces de plasma. Rostro subido como referencia con casco táctico integral. Luz de ciudad vertical infinita. Biometría de vigilancia de alta tecnología."
        },
        {
            "id": "motos_75",
            "number": 75,
            "style": "Motos",
            "title": "EL ÚLTIMO MECÁNICO DE MOTOCICLETAS",
            "content": "Rostro subido como referencia con herramientas de hueso y metal reparando una moto de vapor. Luz de desierto apocalíptico. Biometría de ingenio en el fin de los tiempos."
        },
        {
            "id": "motos_76",
            "number": 76,
            "style": "Motos",
            "title": "CÁMARA DE CABEZA DE ALTA VELOCIDAD",
            "content": "Rostro subido como referencia viendo su propio reflejo en el visor de otro motero a 200 km/h. Luz de acción de cine. Biometría de velocidad y cercanía peligrosa. Arri Alexa 35."
        },
        {
            "id": "motos_77",
            "number": 77,
            "style": "Motos",
            "title": "EL MOTERO DE CARGA PESADA",
            "content": "Moto con remolque industrial transportando suministros. Rostro subido como referencia con cara de esfuerzo y dedicación. Luz de mañana fría. Biometría de trabajo duro en la carretera."
        },
        {
            "id": "motos_78",
            "number": 78,
            "style": "Motos",
            "title": "CAMPING EN MOTO BAJO LAS ESTRELLAS",
            "content": "Moto aparcada junto a una tienda de campaña y una hoguera. Rostro subido como referencia mirando la Vía Láctea HDR. Luz de fuego y estrellas. Biometría de paz existencial."
        },
        {
            "id": "motos_79",
            "number": 79,
            "style": "Motos",
            "title": "EL INTENTO DE RÉCORD DE VELOCIDAD",
            "content": "Moto en forma de bala (Streamliner) en el lago de sal Bonneville. Rostro subido como referencia dentro, concentrado. Luz solar blanca cegadora. Biometría facial de heroísmo extremo."
        },
        {
            "id": "motos_80",
            "number": 80,
            "style": "Motos",
            "title": "MOTO EXPLORADORA DEL DESIERTO FUTURISTA",
            "content": "Ruedas de luz magnética. Rostro subido como referencia pilotando por cañones de arena roja. Luz de atardecer marciano. Biometría de asombro y exploración de nuevos mundos."
        },
        {
            "id": "motos_81",
            "number": 81,
            "style": "Motos",
            "title": "EL MODELO DE EXPOSICIÓN DE MOTOCICLETAS",
            "content": "Rostro subido como referencia posando con un prototipo de moto orgánica. Luz de flashes de cámaras. Biometría de belleza y profesionalidad comercial. Sony Venice 2."
        },
        {
            "id": "motos_82",
            "number": 82,
            "style": "Motos",
            "title": "MOTOCICLETA DE MOTOR DE VAPOR ANTIGUO",
            "content": "Rostro subido como referencia con ropa victoriana y gafas de latón. Luz de niebla londinense. Biometría de orgullo tecnológico industrial clásico. Textura de vapor volumétrico."
        },
        {
            "id": "motos_83",
            "number": 83,
            "style": "Motos",
            "title": "EL FOTÓGRAFO DE MOTOS DE ALTA GAMA",
            "content": "Rostro subido como referencia con una Hasselblad digital fotografiando una Ducati Panigale de oro. Luz de estudio perfecta. Biometría de ojo crítico y arte visual. Calidad Masterpiece."
        },
        {
            "id": "motos_84",
            "number": 84,
            "style": "Motos",
            "title": "CONVOY DE MOTOCICLETAS AUTÓNOMAS",
            "content": "Rostro subido como referencia vigilando un grupo de motos de carga sin piloto por la autopista. Luz nocturna de seguridad. Biometría de responsabilidad tecnológica avanzada."
        },
        {
            "id": "motos_85",
            "number": 85,
            "style": "Motos",
            "title": "EL RESTAURADOR DE MOTOS VINTAGE",
            "content": "Rostro subido como referencia pintando a mano un fileteado dorado en el depósito. Luz de taller clara. Biometría de paciencia infinita y destreza artesanal. Red V-Raptor. Arri Alexa 35."
        },
        {
            "id": "motos_86",
            "number": 86,
            "style": "Motos",
            "title": "CABINA DE MOTOCICLETA POLICIAL FUTURISTA",
            "content": "Rostro subido como referencia rodeado de pantallas de datos policiales. Luz de sirenas parpadeando. Biometría de adrenalina tácticay mando civil. Calidad IMAX 8K."
        },
        {
            "id": "motos_87",
            "number": 87,
            "style": "Motos",
            "title": "EL MOTERO NOCTURNO SOLITARIO",
            "content": "Rostro subido como referencia en una moto deportiva negra bajo un puente iluminado de neón. Luz que pasa rápido por el casco. Biometría de libertad existencial urbana. Sony Venice 2."
        },
        {
            "id": "motos_88",
            "number": 88,
            "style": "Motos",
            "title": "INGENIERO TÉCNICO DE MOTOGP",
            "content": "Rostro subido como referencia con auriculares analizando la telemetría en el box. Luz de pantallas masivas. Biometría de inteligencia extrema y presión competitiva mundial."
        },
        {
            "id": "motos_89",
            "number": 89,
            "style": "Motos",
            "title": "EL GARAJE DE MOTOCICLETAS DEFINITIVO",
            "content": "Puerta secreta abriéndose para mostrar la colección personal del rostro subido como referencia. Luz de focos de teatro. Biometría de éxito acumulado y orgullo legendario."
        },
        {
            "id": "motos_90",
            "number": 90,
            "style": "Motos",
            "title": "DRIFT DE MOTOCICLETA ELÉCTRICA",
            "content": "Giro en una azotea de Tokio sin ruido de motor. Rostro subido como referencia con mirada de precisión quirúrgica. Luz de ciudad nocturna de neón. Biometría de destreza técnica suprema."
        },
        {
            "id": "motos_91",
            "number": 91,
            "style": "Motos",
            "title": "EL RENACIMIENTO DE LA MOTO VINTAGE",
            "content": "Moto antigua convertida a motor de luz por el rostro subido como referencia. Luz de taller místico-técnico. Biometría facial de innovación y respeto absoluto al pasado. Calidad Masterpiece."
        },
        {
            "id": "motos_92",
            "number": 92,
            "style": "Motos",
            "title": "GUARDIA DE SEGURIDAD DE MOTOS DE ALTA TECNOLOGÍA",
            "content": "Rostro subido como referencia con escáner de calor protegiendo una moto experimental. Luz azul de seguridad nocturna. Biometría de vigilancia absoluta."
        },
        {
            "id": "motos_93",
            "number": 93,
            "style": "Motos",
            "title": "EL REGRESO DEL MOTERO CLÁSICO",
            "content": "Rostro subido como referencia saliendo de un viaje de 10.000 km cubierto de polvo. Luz de bienvenida en el hogar. Biometría de éxito legendario y veteranía heroica. Sony Venice 2."
        },
        {
            "id": "motos_94",
            "number": 94,
            "style": "Motos",
            "title": "PASEO FINAL A CASA EN MOTO FUTURISTA",
            "content": "Moto deslizándose sobre un mar de nubes hacia una ciudad flotante. Rostro subido como referencia con mirada de paz. Luz de atardecer divino. Biometría de estilo de vida futurista premium definitivo."
        },
        {
            "id": "motos_95",
            "number": 95,
            "style": "Motos",
            "title": "LA REVELACIÓN DE LA OBRA MAESTRA EN MOTO",
            "content": "Moto diseñada, construida y pilotada por el rostro subido como referencia. Bajo luces de estudio perfectas. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de orgullo supremo y éxito total."
        },
        {
            "id": "motos_96",
            "number": 96,
            "style": "Motos",
            "title": "BAGGER CUSTOM MODERNA",
            "content": "Moto inmensa con maletas integradas y altavoces de luz. Rostro subido como referencia paseando con orgullo. Luz de atardecer en California. Biometría de estatus motorizado y potencia."
        },
        {
            "id": "motos_97",
            "number": 97,
            "style": "Motos",
            "title": "EL MOTERO DEL DRAGSTER ELÉCTRICO",
            "content": "Moto lanzada a 400 km/h en completo silencio, solo un zumbido azul. Rostro subido como referencia con cara de esfuerzo máximo. Luz de arco iris en el metal. Biometría de velocidad pura."
        },
        {
            "id": "motos_98",
            "number": 98,
            "style": "Motos",
            "title": "EL CENTINELA DE LA CARRETERA OLVIDADA",
            "content": "Rostro subido como referencia con su moto en una cumbre vigilando el valle. Luz de horizonte en llamas. Biometría de autoridad mística y vigilancia estratégica. Calidad Masterpiece."
        },
        {
            "id": "motos_99",
            "number": 99,
            "style": "Motos",
            "title": "EL ÚLTIMO VIAJE DEFINITIVO EN MOTO",
            "content": "Moto alejándose por una carretera infinita hacia el sol poniente. Rostro subido como referencia en el retrovisor sonriendo con paz. Luz dorada divina. Biometría de libertad motorizada absoluta."
        },
        {
            "id": "motos_100",
            "number": 100,
            "style": "Motos",
            "title": "EL RENACIMIENTO DEL REY",
            "content": "Rostro subido como referencia coronado como el mejor motero del mundo en un podio de luz. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de gloria eterna y éxito total."
        }
    ],
    "Histórico": [
        {
            "id": "historico_1",
            "number": 1,
            "style": "Histórico",
            "title": "EL DEBER DEL CENTURIÓN ROMANO",
            "content": "Primer plano de un centurión con rostro subido como referencia bajo el sol cegador antes de la batalla. Casco de latón con penacho de crin roja texturizada PBR. Biometría facial de mando y sacrificio: poros dilatados, micro-cicatrices de campañas pasadas y mirada de acero. Captura con Sony Venice 2 y lente anamórfica Cooke. Calidad Masterpiece."
        },
        {
            "id": "historico_2",
            "number": 2,
            "style": "Histórico",
            "title": "ESCUDERA VIKINGA",
            "content": "Plano medio de guerrera con rostro subido como referencia frente a un drakkar en la costa de Noruega. Cabello trenzado con barro y sangre (Estética Vikings). Biometría facial de ferocidad y frío extremo: vaho al respirar y mejillas cuarteadas. Textura de piel de lobo y escudo de madera astillada PBR. Óptica Arri Alexa 35."
        },
        {
            "id": "historico_3",
            "number": 3,
            "style": "Histórico",
            "title": "LA ÚLTIMA RESISTENCIA DEL SAMURÁI",
            "content": "Interior de un dojo bajo la luz de luna. Personaje con rostro subido como referencia con armadura O-yoroi de seda y metal lacado (Ray-tracing). Biometría facial de paz zen ante la muerte inminente. Textura de katana de acero Tamahagane con reflejos de luz. Calidad cinematográfica 8K."
        },
        {
            "id": "historico_4",
            "number": 4,
            "style": "Histórico",
            "title": "CRUZADO ANTE LAS PUERTAS DE JERUSALÉN",
            "content": "Personaje con rostro subido como referencia con cota de malla de acero forjado PBR. Luz de sol abrasador de mediodía (HDR). Biometría facial: sudor, polvo de desierto y ojos irritados por la arena. Textura de túnica de lino con la cruz roja manchada. Estética El Reino de los Cielos."
        },
        {
            "id": "historico_5",
            "number": 5,
            "style": "Histórico",
            "title": "GLADIADOR EN EL COLISEO",
            "content": "Rostro subido como referencia con mirada de furia en medio de la arena. Multitud borrosa de fondo (Bokeh extremo). Iluminación cenital dura que resalta los músculos y las cicatrices. Biometría facial de adrenalina y esfuerzo físico. Textura de arena en la piel y cuero de las protecciones. Calidad IMAX."
        },
        {
            "id": "historico_6",
            "number": 6,
            "style": "Histórico",
            "title": "LA SACERDOTISA EGIPCIA",
            "content": "Interior de un templo iluminado por antorchas. Personaje con rostro subido como referencia con maquillaje de kohl negro y joyas de oro macizo PBR. Biometría facial de misticismo y autoridad divina. Textura de papiro y paredes de piedra con jeroglíficos en 3D (Geometry displacement)."
        },
        {
            "id": "historico_7",
            "number": 7,
            "style": "Histórico",
            "title": "HERRERO MEDIEVAL",
            "content": "Luz naranja de fragua que ilumina el rostro subido como referencia. Chispas blancas saltando en Arri Raw. Biometría facial: sudor, hollín en los poros y venas marcadas en el cuello. Textura de metal incandescente y mandil de cuero grueso PBR. Calidad técnica suprema."
        },
        {
            "id": "historico_8",
            "number": 8,
            "style": "Histórico",
            "title": "EL GUERRERO DE LAS TIERRAS ALTAS",
            "content": "Braveheart style. Rostro subido como referencia con pintura de guerra azul (Woad) y kilt de lana basta. Paisaje de Escocia nublado y húmedo. Biometría facial de rebeldía y orgullo tribal. Textura de cuero curtido y barro en las piernas. Sony Venice 2."
        },
        {
            "id": "historico_9",
            "number": 9,
            "style": "Histórico",
            "title": "MERCADER DEL RENACIMIENTO EN VENECIA",
            "content": "Capas de terciopelo y brocado de oro PBR. Rostro subido como referencia en un balcón sobre el Gran Canal. Iluminación cálida de atardecer italiano. Biometría facial de astucia mercantil y cultura refinada. Calidad fotorrealista 8K."
        },
        {
            "id": "historico_10",
            "number": 10,
            "style": "Histórico",
            "title": "GUERRERO ÁGUILA AZTECA",
            "content": "Rostro subido como referencia con tocado de plumas de quetzal iridiscentes PBR. Pintura facial ritual roja y blanca. Luz de sol de jungla densa (God rays). Biometría facial de ferocidad salvaje. Textura de obsidiana en el arma Macuahuitl. Calidad Masterpiece."
        },
        {
            "id": "historico_11",
            "number": 11,
            "style": "Histórico",
            "title": "CAPITÁN PIRATA A BORDO",
            "content": "Rostro subido como referencia con sombrero de tres picos y barba salitrosa. Cubierta del barco con olas rompiendo. Biometría de mando bajo tormenta. Textura de madera de teca mojada y cabos de cáñamo PBR."
        },
        {
            "id": "historico_12",
            "number": 12,
            "style": "Histórico",
            "title": "LA VIGILIA DEL CABALLERO",
            "content": "Armadura de placas completa de acero pulido reflejando velas de la iglesia. Rostro subido como referencia arrodillado. Biometría de devoción y pureza. Calidad Arri Alexa 35."
        },
        {
            "id": "historico_13",
            "number": 13,
            "style": "Histórico",
            "title": "DISCURSO DEL REY ESPARTANO",
            "content": "Estética 300. Contraste extremo y colorimetría desaturada. Rostro subido como referencia gritando órdenes. Biometría facial: dientes blancos, sudor y sangre. Calidad IMAX."
        },
        {
            "id": "historico_14",
            "number": 14,
            "style": "Histórico",
            "title": "LA CELDA DEL INQUISIDOR",
            "content": "Sombras de tortura medieval. Rostro subido como referencia con hábito negro y mirada de fanatismo. Luz de una sola vela lateral (Rembrandt lighting). Biometría del terror piadoso."
        },
        {
            "id": "historico_15",
            "number": 15,
            "style": "Histórico",
            "title": "ASTRÓNOMO MAYA",
            "content": "Observando las estrellas desde lo alto de una pirámide. Rostro subido como referencia con tatuajes de piel y joyas de jade PBR. Biometría de sabiduría ancestral. Luz de luna azulada."
        },
        {
            "id": "historico_16",
            "number": 16,
            "style": "Histórico",
            "title": "REY DE THE LAST KINGDOM",
            "content": "Uhtred style. Rostro subido como referencia con pieles y espada de empuñadura de ámbar. Biometría de guerrero veterano. Paisaje de barro y victoria. Calidad Sony Venice 2."
        },
        {
            "id": "historico_17",
            "number": 17,
            "style": "Histórico",
            "title": "JENÍZARO OTOMANO",
            "content": "Uniforme bordado con seda de Damasco PBR. Rostro subido como referencia con bigote largo. Luz de palacio de Estambul. Biometría de disciplina militar de élite."
        },
        {
            "id": "historico_18",
            "number": 18,
            "style": "Histórico",
            "title": "EL ORÁCULO DE DELFOS",
            "content": "Humo volumétrico de laurel. Rostro subido como referencia en trance. Luz pálida mística. Biometría facial: ojos en blanco y piel translúcida. Textura de mármol griego."
        },
        {
            "id": "historico_19",
            "number": 19,
            "style": "Histórico",
            "title": "ARQUERO A CABALLO MONGOL",
            "content": "En plena carrera por la estepa. Rostro subido como referencia apuntando hacia atrás (Parthian shot). Polvo y viento. Biometría de destreza ecuestre salvaje. Calidad Masterpiece."
        },
        {
            "id": "historico_20",
            "number": 20,
            "style": "Histórico",
            "title": "EL MOSQUETERO FRANCÉS",
            "content": "Sombrero con pluma de avestruz y capa de terciopelo azul. Rostro subido como referencia con bigote afilador. Biometría de gallardía y honor. Luz de Versalles."
        },
        {
            "id": "historico_21",
            "number": 21,
            "style": "Histórico",
            "title": "EMPERATRIZ BIZANTINA",
            "content": "Corona de perlas y mosaicos de oro PBR. Rostro subido como referencia con mirada de poder absoluto. Iluminación sacra de cúpula de Iglesia. Biometría de divinidad terrenal."
        },
        {
            "id": "historico_22",
            "number": 22,
            "style": "Histórico",
            "title": "CAZADOR DE LA EDAD DE PIEDRA",
            "content": "Pieles de mamut y collar de dientes. Rostro subido como referencia con lanza de sílex. Luz de amanecer prehistórico. Biometría facial de instinto primario. Textura de pintura de barro."
        },
        {
            "id": "historico_23",
            "number": 23,
            "style": "Histórico",
            "title": "FALANGE DE HOPLITAS GRIEGOS",
            "content": "Escudos de bronce en formación. Rostro subido como referencia sudando tras el casco corintio. Luz solar de Termópilas. Biometría de hermandad guerrera. Calidad IMAX."
        },
        {
            "id": "historico_24",
            "number": 24,
            "style": "Histórico",
            "title": "EL PANADERO TUDOR",
            "content": "Amasando pan en una cocina de piedra. Rostro subido como referencia con mandil de lino blanco manchado de harina. Luz de sol a través de ventana pequeña. Biometría de vida cotidiana medieval."
        },
        {
            "id": "historico_25",
            "number": 25,
            "style": "Histórico",
            "title": "NINJA EN LA NOCHE",
            "content": "Vestido íntegramente de negro mate. Rostro subido como referencia sobre un tejado japonés. Solo se ven los ojos calculadores. Biometría de sigilo mortal. Calidad Arri Alexa 35."
        },
        {
            "id": "historico_26",
            "number": 26,
            "style": "Histórico",
            "title": "EL CABALLERO GÓTICO",
            "content": "Armadura articulada con grabados de plata. Rostro subido como referencia bajando la pasarela del castillo. Luz azul de atardecer frío. Biometría de honor caballeresco."
        },
        {
            "id": "historico_27",
            "number": 27,
            "style": "Histórico",
            "title": "REY BABILONIO",
            "content": "Barba trenzada con hilos de oro. Rostro subido como referencia con túnica de lapislázuli PBR. Puerta de Ishtar de fondo con azulejos azules HDR. Biometría de realeza antigua."
        },
        {
            "id": "historico_28",
            "number": 28,
            "style": "Histórico",
            "title": "EL MÉDICO DE LA PESTE",
            "content": "Máscara de cuervo de cuero negro. Rostro subido como referencia visible tras los cristales de los ojos. Calles de Venecia desiertas y neblinosas. Biometría del miedo y la medicina arcaica."
        },
        {
            "id": "historico_29",
            "number": 29,
            "style": "Histórico",
            "title": "GUERRERO ZULÚ",
            "content": "Escudo de piel de vaca y lanza corta (Assegai). Rostro subido como referencia con mirada de guerra. Luz de amanecer en la sabana. Biometría de atletismo africano guerrero."
        },
        {
            "id": "historico_30",
            "number": 30,
            "style": "Histórico",
            "title": "EL INVENTOR VICTORIANO",
            "content": "Rostro subido como referencia con gafas de latón y un prototipo de motor de vapor. Luz de estudio de 1890 con grano fino cinematográfico. Biometría de genio y vapor."
        },
        {
            "id": "historico_31",
            "number": 31,
            "style": "Histórico",
            "title": "JEFE DEL CLAN ESCOCÉS",
            "content": "Rostro subido como referencia con capa de piel de oveja y escudo Targe. Luz de tierras altas brumosas. Biometría de mando ancestral. Óptica Sony Venice 2."
        },
        {
            "id": "historico_32",
            "number": 32,
            "style": "Histórico",
            "title": "EL ALQUIMISTA MEDIEVAL",
            "content": "Rostro subido como referencia con matraces de cristal soplado echando humo de colores. Luz de hoguera mística. Biometría de locura racional y química antigua."
        },
        {
            "id": "historico_33",
            "number": 33,
            "style": "Histórico",
            "title": "FUNERAL VIKINGO",
            "content": "Rostro subido como referencia viendo el barco en llamas alejarse en el fiordo. Luz de fuego reflejada en las lágrimas reales. Biometría facial de duelo y honor eterno."
        },
        {
            "id": "historico_34",
            "number": 34,
            "style": "Histórico",
            "title": "EL ENTRENADOR DE GLADIADORES (LANISTA)",
            "content": "Rostro subido como referencia con látigo y mirada de negocio sangriento. Luz de escuela de gladiadores polvorienta. Biometría de dureza mercantil. Calidad 8K."
        },
        {
            "id": "historico_35",
            "number": 35,
            "style": "Histórico",
            "title": "NAVEGANTE DE DRAKKAR",
            "content": "En plena tormenta en el Mar del Norte. Rostro subido como referencia con manos en el timón de madera. Luz de rayos. Biometría de valentía ante Poseidón. Calidad cinematográfica."
        },
        {
            "id": "historico_36",
            "number": 36,
            "style": "Histórico",
            "title": "SACERDOTE MAYA DEL SACRIFICIO",
            "content": "Rostro subido como referencia con cuchillo de obsidiana y corona de plumas. Luz de sol sobre la pirámide de Chichén Itzá. Biometría de fervor religioso. Arri Alexa 35."
        },
        {
            "id": "historico_37",
            "number": 37,
            "style": "Histórico",
            "title": "GENERAL DE TERRACOTA CHINO",
            "content": "Rostro subido como referencia al mando de miles de soldados de barro. Luz de cámara subterránea con antorchas. Biometría de mando imperial eterno. Textura de cerámica y metal."
        },
        {
            "id": "historico_38",
            "number": 38,
            "style": "Histórico",
            "title": "LA MUERTE DEL ÚLTIMO SAMURÁI",
            "content": "Rostro subido como referencia herido en un campo de flores rojas. Luz de atardecer. Biometría facial de honor final. Estética de película épica. Sony Venice 2."
        },
        {
            "id": "historico_39",
            "number": 39,
            "style": "Histórico",
            "title": "CAPITÁN DE MAR COLONIAL",
            "content": "Rostro subido como referencia con sextante mirando las estrellas. Luz de luna en el mar. Biometría de navegación astronómica y mando naviero. Calidad Masterpiece."
        },
        {
            "id": "historico_40",
            "number": 40,
            "style": "Histórico",
            "title": "LA VENGANZA DEL GLADIADOR",
            "content": "Rostro subido como referencia matando a su enemigo en la arena. Sangre y sudor en 8K. Luz de mediodía de Roma. Biometría facial de triunfo amargo y furia."
        },
        {
            "id": "historico_41",
            "number": 41,
            "style": "Histórico",
            "title": "MONJE TIBETANO EN EL HIMALAYA",
            "content": "Rostro subido como referencia con túnica azafrán y rosario de madera. Luz de montaña pura de 9000K. Biometría de paz espiritual y resistencia al frío. Calidad Masterpiece."
        },
        {
            "id": "historico_42",
            "number": 42,
            "style": "Histórico",
            "title": "LA PRINCESA MEDIEVAL",
            "content": "En un jardín de rosas de palacio. Rostro subido como referencia con vestido de seda y diadema de plata. Luz suave de tarde. Biometría de belleza y melancolía palaciega."
        },
        {
            "id": "historico_43",
            "number": 43,
            "style": "Histórico",
            "title": "CEREMONIA DE ARMADURA SAMURÁI",
            "content": "Rojo lacado y cuerdas de seda negra. Rostro subido como referencia siendo vestido por sirvientes. Luz de shogunato. Biometría de preparación ritual. Calidad RAW."
        },
        {
            "id": "historico_44",
            "number": 44,
            "style": "Histórico",
            "title": "EL ARQUERO NORMANDO",
            "content": "Rostro subido como referencia con arco largo de tejo. Luz de bosque nublado. Biometría de puntería infalible. Textura de cuero y madera. Arri Alexa 35."
        },
        {
            "id": "historico_45",
            "number": 45,
            "style": "Histórico",
            "title": "ESCRIBA EGIPCIO",
            "content": "Sentado con las piernas cruzadas escribiendo en papiro. Rostro subido como referencia con luz de biblioteca de faraón. Biometría de intelecto y cultura antigua."
        },
        {
            "id": "historico_46",
            "number": 46,
            "style": "Histórico",
            "title": "EL NIÑO GLADIADOR",
            "content": "Rostro subido como referencia (niño) con espada de madera entrenando. Luz de escuela de gladiadores. Biometría de inocencia robada por la arena. Calidad fotorrealista."
        },
        {
            "id": "historico_47",
            "number": 47,
            "style": "Histórico",
            "title": "DESPEDIDA DE MADRE ESPARTANA",
            "content": "Entregando el escudo al hijo (rostro subido como referencia). Luz de mañana en Esparta. Biometría de orgullo y dolor contenido. Estética 300."
        },
        {
            "id": "historico_48",
            "number": 48,
            "style": "Histórico",
            "title": "EL ESCRIBA MEDIEVAL",
            "content": "Iluminando un manuscrito en un monasterio. Rostro subido como referencia con luz de vidriera. Biometría de paciencia infinita y arte sagrado. Sony Venice 2."
        },
        {
            "id": "historico_49",
            "number": 49,
            "style": "Histórico",
            "title": "LLEGADA DEL SAQUEO VIKINGO",
            "content": "Rostro subido como referencia saltando del barco a la orilla con hacha. Humo de aldea quemada de fondo. Biometría de furia guerrera berserker. Calidad IMAX 8K."
        },
        {
            "id": "historico_50",
            "number": 50,
            "style": "Histórico",
            "title": "LA MIRADA DEL EMPERADOR ROMANO",
            "content": "Rostro subido como referencia con corona de laurel de oro. Bajo el sol del foro. Biometría facial de poder absoluto y locura imperial. Masterpiece."
        },
        {
            "id": "historico_51",
            "number": 51,
            "style": "Histórico",
            "title": "EL REGRESO DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia herido y sucio entrando en el castillo tras las cruzadas. Luz de tarde lluviosa. Biometría facial de agotamiento heroico y paz. Calidad 8K."
        },
        {
            "id": "historico_52",
            "number": 52,
            "style": "Histórico",
            "title": "DUELO SAMURÁI EN LA NIEVE",
            "content": "Kurosawa style. Rostro subido como referencia con sangre salpicando la nieve blanca. Luz gélida de invierno. Biometría de honor fatal. Arri Alexa 35. Red V-Raptor."
        },
        {
            "id": "historico_53",
            "number": 53,
            "style": "Histórico",
            "title": "LA LUCHA FINAL DEL GLADIADOR",
            "content": "Rostro subido como referencia enfrentándose a un león en el coliseo. Luz de sol de Roma. Biometría de terror y valentía suprema. Calidad IMAX."
        },
        {
            "id": "historico_54",
            "number": 54,
            "style": "Histórico",
            "title": "SACERDOTE DE LA PIRÁMIDE MAYA",
            "content": "Rostro subido como referencia invocando a los dioses con humo de copal. Luz de cenote sagrado. Biometría facial de trance místico y poder religioso. Sony Venice 2."
        },
        {
            "id": "historico_55",
            "number": 55,
            "style": "Histórico",
            "title": "EL SEÑOR DE LOS PIRATAS",
            "content": "Rostro subido como referencia en una calavera de trono. Luz de cueva del tesoro. Biometría facial de mando criminal legendario. Calidad definitiva Hyper-Ultimate."
        },
        {
            "id": "historico_56",
            "number": 56,
            "style": "Histórico",
            "title": "REINA VIKINGA DEL NORTE",
            "content": "Rostro subido como referencia con trono de huesos de ballena. Luz de aurora boreal. Biometría de mando femenino bárbaro. Textura de pieles y oro rústico."
        },
        {
            "id": "historico_57",
            "number": 57,
            "style": "Histórico",
            "title": "EL VERDUGO MEDIEVAL",
            "content": "Rostro subido como referencia con capucha negra y hacha pesada. Luz de patíbulo al amanecer. Biometría de frialdad y deber macabro."
        },
        {
            "id": "historico_58",
            "number": 58,
            "style": "Histórico",
            "title": "CEREMONIA DEL TÉ SAMURÁI",
            "content": "Rostro subido como referencia bebiendo con calma antes de la batalla. Luz infra-roja de brasas. Biometría de paz interior absoluta. Calidad 8K RAW."
        },
        {
            "id": "historico_59",
            "number": 59,
            "style": "Histórico",
            "title": "EL CASCO DEL CENTURIÓN ROMANO",
            "content": "Primer plano del rostro subido como referencia bajo el metal pulido. Luz solar de Italia. Biometría de disciplina militar eterna. Óptica Leica."
        },
        {
            "id": "historico_60",
            "number": 60,
            "style": "Histórico",
            "title": "DRAKKAR VIKINGO EN LA NIEBLA",
            "content": "Rostro subido como referencia remando en silencio hacia la costa inglesa. Luz matutina brumosa. Biometría de invasión silenciosa. Arri Alexa 35."
        },
        {
            "id": "historico_61",
            "number": 61,
            "style": "Histórico",
            "title": "LA ESPADA DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia jurando lealtad sobre el acero. Luz de iglesia gótica. Biometría de honor y devoción caballeresca. Calidad Masterpiece."
        },
        {
            "id": "historico_62",
            "number": 62,
            "style": "Histórico",
            "title": "MAESTRO DEL ARCO SAMURÁI",
            "content": "Rostro subido como referencia apuntando con arco Yumi. Luz de bosque de bambú. Biometría de puntería zen. Sony Venice 2."
        },
        {
            "id": "historico_63",
            "number": 63,
            "style": "Histórico",
            "title": "LA ARMADURA DEL GLADIADOR ROMANO",
            "content": "Rostro subido como referencia con escudo y espada corta (Gladius). Luz de arena sangrienta. Biometría de supervivencia bruta. Calidad IMAX."
        },
        {
            "id": "historico_64",
            "number": 64,
            "style": "Histórico",
            "title": "MÁSCARA DE JADE MAYA",
            "content": "Rostro subido como referencia visible a través de los ojos de jade. Luz de selva mística. Biometría de divinidad ancestral. Calidad 8K fotorrealista."
        },
        {
            "id": "historico_65",
            "number": 65,
            "style": "Histórico",
            "title": "EL ORO DEL PIRATA",
            "content": "Rostro subido como referencia enterrando un cofre. Luz de luna en isla desierta. Biometría de codicia y triunfo criminal."
        },
        {
            "id": "historico_66",
            "number": 66,
            "style": "Histórico",
            "title": "FURIA BERSERKER VIKINGA",
            "content": "Rostro subido como referencia gritando con espuma en la boca. Luz de campo de batalla rojo. Biometría de locura guerrera absoluta."
        },
        {
            "id": "historico_67",
            "number": 67,
            "style": "Histórico",
            "title": "LA PUERTA DEL CASTILLO MEDIEVAL",
            "content": "Rostro subido como referencia defendiendo el portón con aceite hirviendo. Luz de fuego y desesperación. Biometría de heroísmo desesperado."
        },
        {
            "id": "historico_68",
            "number": 68,
            "style": "Histórico",
            "title": "VIGILANTE DE CASTILLO SAMURÁI",
            "content": "Rostro subido como referencia en lo alto de la torre de Osaka. Luz de atardecer japonés. Biometría de vigilancia imperial. Calidad Masterpiece."
        },
        {
            "id": "historico_69",
            "number": 69,
            "style": "Histórico",
            "title": "EL TRIUNFO DEL EMPERADOR ROMANO",
            "content": "Rostro subido como referencia en carro de oro por Roma. Lluvia de pétalos. Luz de gloria divina. Biometría facial de éxito absoluto."
        },
        {
            "id": "historico_70",
            "number": 70,
            "style": "Histórico",
            "title": "VIDA DIARIA EN ALDEA VIKINGA",
            "content": "Rostro subido como referencia arreglando una red de pesca. Luz de sol nórdico pálida. Biometría de paz bárbara. Calidad cinematográfica."
        },
        {
            "id": "historico_71",
            "number": 71,
            "style": "Histórico",
            "title": "EL CABALLO DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia cabalgando hacia el horizonte. Luz de mañana de tierras altas. Biometría de libertad y mando ecuestre. Sony Venice 2."
        },
        {
            "id": "historico_72",
            "number": 72,
            "style": "Histórico",
            "title": "MEDITACIÓN EN EL JARDÍN SAMURÁI",
            "content": "Rostro subido como referencia frente a un estanque koi. Luz de sol filtrada. Biometría de equilibrio interior supremo. Arri Alexa 35."
        },
        {
            "id": "historico_73",
            "number": 73,
            "style": "Histórico",
            "title": "LA MARCHA DEL CENTURIÓN ROMANO",
            "content": "Rostro subido como referencia liderando a la legión por el desierto. Luz solar abrasadora. Biometría de disciplina y cansancio militar."
        },
        {
            "id": "historico_74",
            "number": 74,
            "style": "Histórico",
            "title": "OBSERVATORIO SOLAR MAYA",
            "content": "Rostro subido como referencia marcando el equinoccio. Luz de sol alineada con la pirámide. Biometría de sabiduría astronómica antigua."
        },
        {
            "id": "historico_75",
            "number": 75,
            "style": "Histórico",
            "title": "RETRATO DEL CAPITÁN PIRATA",
            "content": "Rostro subido como referencia con mirada de lobo de mar. Luz de camarote con velas. Biometría de experiencia y mando pirata. Calidad 8K."
        },
        {
            "id": "historico_76",
            "number": 76,
            "style": "Histórico",
            "title": "FALANGE DE MURO DE ESCUDOS VIKINGOS",
            "content": "Rostro subido como referencia apretando el escudo con fuerza. Luz de batalla nublada. Biometría de hermandad nórdica."
        },
        {
            "id": "historico_77",
            "number": 77,
            "style": "Histórico",
            "title": "LA ORACIÓN DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia antes de la batalla. Luz de amanecer en el campo. Biometría de fe y miedo caballeresco. Masterpiece."
        },
        {
            "id": "historico_78",
            "number": 78,
            "style": "Histórico",
            "title": "HERRERO DE ESPADAS SAMURÁI",
            "content": "Rostro subido como referencia forjando la hoja perfecta. Luz de fragua naranja intensa. Biometría de maestría artesanal japonesa."
        },
        {
            "id": "historico_79",
            "number": 79,
            "style": "Histórico",
            "title": "EL ENTRENAMIENTO DEL GLADIADOR ROMANO",
            "content": "Rostro subido como referencia con cara de esfuerzo y sudor en la escuela. Luz de mediodía de Roma. Biometría facial de preparación para la muerte."
        },
        {
            "id": "historico_80",
            "number": 80,
            "style": "Histórico",
            "title": "CAZA EN LA JUNGLA MAYA",
            "content": "Rostro subido como referencia con cerbatana y plumas. Luz lateral de bosque denso. Biometría de depredador natural. Calidad cinematográfica."
        },
        {
            "id": "historico_81",
            "number": 81,
            "style": "Histórico",
            "title": "LA BASE OCULTA DEL PIRATA",
            "content": "Rostro subido como referencia en una cala secreta con barcos. Luz de luna y antorchas. Biometría de éxito criminal estratégico. Arri Alexa 35."
        },
        {
            "id": "historico_82",
            "number": 82,
            "style": "Histórico",
            "title": "VIAJE DE DRAKKAR VIKINGO",
            "content": "Rostro subido como referencia viendo el hielo marino desde la proa. Luz ártica azulada. Biometría de exploración de nuevos mundos bárbara."
        },
        {
            "id": "historico_83",
            "number": 83,
            "style": "Histórico",
            "title": "LA CARGA FINAL DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia con lanza en ristre al galope. Luz de atardecer épico. Biometría de valentía suicida y honor. Calidad IMAX."
        },
        {
            "id": "historico_84",
            "number": 84,
            "style": "Histórico",
            "title": "DEFENSA DE CASTILLO SAMURÁI",
            "content": "Rostro subido como referencia disparando flechas de fuego. Luz de llamas de fondo. Biometría facial de mando táctico japonés. Sony Venice 2."
        },
        {
            "id": "historico_85",
            "number": 85,
            "style": "Histórico",
            "title": "EL REGRESO DEL CENTURIÓN ROMANO",
            "content": "Rostro subido como referencia entrando en Roma con tesoros. Luz triunfal de día claro. Biometría facial de éxito imperial absoluto."
        },
        {
            "id": "historico_86",
            "number": 86,
            "style": "Histórico",
            "title": "SACERDOTE MAYA DE LAS ESTRELLAS",
            "content": "Rostro subido como referencia analizando la Vía Láctea HDR desde la pirámide. Luz de constelaciones antiguas. Biometría de sabiduría cósmica."
        },
        {
            "id": "historico_87",
            "number": 87,
            "style": "Histórico",
            "title": "EL BANQUETE DEL SEÑOR DE LOS PIRATAS",
            "content": "Rostro subido como referencia comiendo con oro y joyas en la mesa. Luz de festival criminal. Biometría de poder y exceso pirata. Calidad RAW."
        },
        {
            "id": "historico_88",
            "number": 88,
            "style": "Histórico",
            "title": "MURO DE ESCUDOS VIKINGOS EN ACCIÓN",
            "content": "Rostro subido como referencia recibiendo el impacto de la carga enemiga. Luz de batalla gris. Biometría de resistencia nórdica. Masterpiece."
        },
        {
            "id": "historico_89",
            "number": 89,
            "style": "Histórico",
            "title": "LA TUMBA DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia como estatua de piedra sobre el sarcófago. Luz de catedral gótica. Biometría de honor eterno y paz. Calidad 8K."
        },
        {
            "id": "historico_90",
            "number": 90,
            "style": "Histórico",
            "title": "PAZ EN EL JARDÍN SAMURÁI",
            "content": "Rostro subido como referencia bebiendo sake tras la guerra. Luz de luna reflejada en el agua. Biometría de descanso del guerrero zen. Calidad definitiva."
        },
        {
            "id": "historico_91",
            "number": 91,
            "style": "Histórico",
            "title": "EL ÚLTIMO ALIENTO DEL CENTURIÓN ROMANO",
            "content": "Rostro subido como referencia herido en un bosque germano. Luz de atardecer entre árboles. Biometría facial de honor final de la legión. Sony Venice 2."
        },
        {
            "id": "historico_92",
            "number": 92,
            "style": "Histórico",
            "title": "CENTINELA DE TEMPLO MAYA",
            "content": "Rostro subido como referencia con lanza de piedra y pinturas corporales. Luz de amanecer en la selva. Biometría de vigilancia ancestral."
        },
        {
            "id": "historico_93",
            "number": 93,
            "style": "Histórico",
            "title": "EL REGRESO DEL SEÑOR DE LOS PIRATAS",
            "content": "Rostro subido como referencia abordando el barco insignia. Luz de triunfo naval. Biometría de mando pirata absoluto. Calidad Masterpiece."
        },
        {
            "id": "historico_94",
            "number": 94,
            "style": "Histórico",
            "title": "ENTRADA EN LA NIEBLA FINAL DE DRAKKAR VIKINGO",
            "content": "Rostro subido como referencia desapareciendo en el horizonte blanco del Mar del Norte. Luz divina de Valhalla. Biometría de destino heroico."
        },
        {
            "id": "historico_95",
            "number": 95,
            "style": "Histórico",
            "title": "LA REVELACIÓN DEL REY MEDIEVAL DEFINITIVO",
            "content": "Rostro subido como referencia coronado en una catedral de cristal y oro. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de gloria eterna."
        },
        {
            "id": "historico_96",
            "number": 96,
            "style": "Histórico",
            "title": "LA ARMADURA DE ORO DEL CENTURIÓN ROMANO",
            "content": "Rostro subido como referencia con armadura ceremonial de oro puro PBR. Luz de triunfo en Roma. Biometría de estatus imperial supremo."
        },
        {
            "id": "historico_97",
            "number": 97,
            "style": "Histórico",
            "title": "SAMURÁI BAJO LOS CEREZOS EN FLOR",
            "content": "Rostro subido como referencia con pétalos de neón cayendo. Luz de atardecer japonés. Biometría de belleza y honor zen. Calidad IMAX."
        },
        {
            "id": "historico_98",
            "number": 98,
            "style": "Histórico",
            "title": "LA VIGILIA FINAL DEL CABALLERO MEDIEVAL",
            "content": "Rostro subido como referencia solo ante el altar en la última noche de paz. Luz de una única vela. Calidad definitiva."
        },
        {
            "id": "historico_99",
            "number": 99,
            "style": "Histórico",
            "title": "EL ÚLTIMO VIAJE HISTÓRICO",
            "content": "Caminando hacia el sol naciente de una era antigua. Rostro subido como referencia mirando por última vez al pasado. Luz dorada divina. Biometría de paz histórica."
        },
        {
            "id": "historico_100",
            "number": 100,
            "style": "Histórico",
            "title": "EL RENACIMIENTO DEL GUERRERO",
            "content": "Rostro subido como referencia emergiendo de las cenizas de una batalla milenaria. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de gloria eterna y éxito total."
        }
    ],
    "Ghibli": [
        {
            "id": "ghibli_1",
            "number": 1,
            "style": "Ghibli",
            "title": "EL JARDÍN DE LA ISLA FLOTANTE",
            "content": "Paisaje épico de una isla suspendida en un cielo azul vibrante con nubes de algodón volumétricas. Estética Studio Ghibli en 8K. Personaje con rostro subido como referencia con vestido blanco ondeando al viento. Iluminación \"Shinkai-style\" con destellos de sol (Lens flare) y colores HDR. Texturas de flores y césped pintadas a mano pero con detalle microscópico. Calidad Masterpiece."
        },
        {
            "id": "ghibli_2",
            "number": 2,
            "style": "Ghibli",
            "title": "LA CASA DE BAÑOS DE LOS ESPÍRITUS",
            "content": "Interior nocturno iluminado por linternas de papel rojas y doradas. Personaje con rostro subido como referencia con uniforme de sirviente de la casa. Humo volumétrico de las bañeras calientes. Biometría facial estilizada: ojos brillantes de asombro y piel suave de porcelana. Textura de madera barnizada y vapor de agua real. Estética El Viaje de Chihiro."
        },
        {
            "id": "ghibli_3",
            "number": 3,
            "style": "Ghibli",
            "title": "VIGILANTE DEL VALLE DEL VIENTO",
            "content": "Personaje con rostro subido como referencia con visor de vuelo y casco de tela. Mirando al horizonte de un mar de nubes tóxicas. Luz de sol a través de la calima. Biometría facial: vello facial fino y mirada de esperanza. Textura de materiales orgánicos y cuero suave. Calidad fotorrealista anime."
        },
        {
            "id": "ghibli_4",
            "number": 4,
            "style": "Ghibli",
            "title": "INTERIOR DEL CASTILLO AMBULANTE",
            "content": "Cientos de cachivaches de metal y madera con engranajes moviéndose. Personaje con rostro subido como referencia cocinando huevos y tocino con Calcifer (Fuego de neón azul). Luz cálida de cocina. Biometría facial de felicidad doméstica mágica. Textura de hierro fundido y comida deliciosa de anime en 8K."
        },
        {
            "id": "ghibli_5",
            "number": 5,
            "style": "Ghibli",
            "title": "BOSQUE DEL GRAN ESPÍRITU",
            "content": "Árboles colosales cubiertos de musgo bioluminiscente. Personaje con rostro subido como referencia con máscara de lobo blanca. Kodamas (espíritus pequeños) asomando. Luz verde esmeralda mística (God rays). Biometría facial de conexión con la naturaleza salvaje. Textura de piedra húmeda y pelaje de animal. Estética Princesa Mononoke."
        },
        {
            "id": "ghibli_6",
            "number": 6,
            "style": "Ghibli",
            "title": "LA PANADERÍA JUNTO AL MAR",
            "content": "Rostro subido como referencia entregando pan recién horneado. Luz de mañana costera con mar azul de fondo. Biometría facial de alegría juvenil y frescura. Textura de pan crujiente y madera de pino clara. Calidad cinematográfica anime 8K."
        },
        {
            "id": "ghibli_7",
            "number": 7,
            "style": "Ghibli",
            "title": "VUELO EN LA NOCHE ESTRELLADA",
            "content": "Personaje con rostro subido como referencia montado en una escoba o planeador. Vía Láctea HDR de fondo con colores púrpuras y cian. Luz de luna llena que perfila el rostro. Biometría facial de libertad absoluta. Calidad Masterpiece Ghibli."
        },
        {
            "id": "ghibli_8",
            "number": 8,
            "style": "Ghibli",
            "title": "EL JARDÍN SECRETO BAJO EL SUELO",
            "content": "Perspectiva de tamaño minúsculo. Rostro subido como referencia entre hojas de plantas inmensas y gotas de rocío gigantes (Reflejos HDR). Luz filtrada desde arriba. Biometría de curiosidad y fragilidad. Textura de insectos mecánicos y flora detallada. Estética Arrietty."
        },
        {
            "id": "ghibli_9",
            "number": 9,
            "style": "Ghibli",
            "title": "VIAJE EN EL GATO-BÚS",
            "content": "Interior del autobús peludo con asientos de pelo largo. Personaje con rostro subido como referencia mirando por la ventilla a un paisaje de arrozales japoneses. Luz de sol de tarde. Biometría facial de sueño y maravilla. Calidad técnica 8K."
        },
        {
            "id": "ghibli_10",
            "number": 10,
            "style": "Ghibli",
            "title": "LA FORTALEZA VOLADORA MECÁNICA",
            "content": "Engranajes masivos y alas de lona batiendo. Personaje con rostro subido como referencia en el puente de mando. Luz solar directa de 6000K. Biometría facial de liderazgo aéreo. Textura de metal remachado y tela de aviación. Calidad definitiva."
        },
        {
            "id": "ghibli_11",
            "number": 11,
            "style": "Ghibli",
            "title": "TREN SOBRE EL MAR",
            "content": "Vías sumergidas en aguas turquesas. Rostro subido como referencia como pasajero solitario. Luz de atardecer infinito. Biometría de nostalgia profunda. Textura de asientos de terciopelo y cristales con reflejos del cielo."
        },
        {
            "id": "ghibli_12",
            "number": 12,
            "style": "Ghibli",
            "title": "ENCUENTRO CON EL ESPÍRITU DE LA LLUVIA",
            "content": "Lluvia torrencial en un bosque gris. Rostro subido como referencia bajo una hoja gigante que sirve de paraguas. Micro-gotas de agua realistas. Biometría de calma bajo la tormenta. Arri Alexa 35 (Estilo Anime)."
        },
        {
            "id": "ghibli_13",
            "number": 13,
            "style": "Ghibli",
            "title": "FUEGOS ARTIFICIALES DEL FESTIVAL DE VERANO",
            "content": "Rostro subido como referencia con Yukata de seda estampada PBR. Luces de colores que estallan y se reflejan en la piel. Biometría de asombro y felicidad festiva. Paisaje urbano japonés clásico de fondo."
        },
        {
            "id": "ghibli_14",
            "number": 14,
            "style": "Ghibli",
            "title": "EL SANTUARIO ABANDONADO",
            "content": "Estatua gigante cubierta de flores silvestres. Rostro subido como referencia dejando una ofrenda. Luz de tarde melancólica. Biometría de respeto y paz espiritual. Calidad 8K fotorrealista."
        },
        {
            "id": "ghibli_15",
            "number": 15,
            "style": "Ghibli",
            "title": "PILOTO DE DIRIGIBLE STEAMPUNK",
            "content": "Rostro subido como referencia con gafas de latón y ropa de aviador de cuero. Palancas y diales analógicos. Luz de nubes de tormenta de fondo. Biometría de profesionalidad aeronáutica."
        },
        {
            "id": "ghibli_16",
            "number": 16,
            "style": "Ghibli",
            "title": "LA BIBLIOTECA DE LA BRUJA",
            "content": "Libros voladores y gatos negros que hablan. Rostro subido como referencia leyendo un pergamino mágico. Luz de una sola vela verde. Biometría de sabiduría mágica y sorpresa."
        },
        {
            "id": "ghibli_17",
            "number": 17,
            "style": "Ghibli",
            "title": "LLEGADA AL CASTILLO EN EL CIELO",
            "content": "Raíces inmensas envolviendo ruinas mecanizadas. Rostro subido como referencia explorando. Luz divina filtrada por las ramas del árbol central. Biometría de asombro histórico-tecnológico."
        },
        {
            "id": "ghibli_18",
            "number": 18,
            "style": "Ghibli",
            "title": "JINETE DE DRAGÓN",
            "content": "Dragón blanco estilizado volando entre nubes rosas. Rostro subido como referencia agarrado a la crin de seda. Biometría de heroísmo y libertad. Calidad Masterpiece. Sony Venice 2."
        },
        {
            "id": "ghibli_19",
            "number": 19,
            "style": "Ghibli",
            "title": "ALDEA DE LAS MIL LINTERNAS",
            "content": "Rostro subido como referencia en un puente de piedra. Todas las casas con luces cálidas. Reflejos en el río. Biometría de paz y hogar. Calidad cinematográfica anime 8K."
        },
        {
            "id": "ghibli_20",
            "number": 20,
            "style": "Ghibli",
            "title": "EL ÚLTIMO ROBOT GIGANTE",
            "content": "Robot de piedra y hierro dormido en un campo de flores. Rostro subido como referencia sentado sobre su mano metálica. Luz crepuscular. Biometría de melancolía y amistad imposible. Calidad definitiva."
        },
        {
            "id": "ghibli_21",
            "number": 21,
            "style": "Ghibli",
            "title": "EL MUNDO SECRETO DE ARRIETTY",
            "content": "Rostro subido como referencia de tamaño minúsculo entre objetos humanos gigantes. Luz de sol a través de un dedal. Biometría de valentía pequeña."
        },
        {
            "id": "ghibli_22",
            "number": 22,
            "style": "Ghibli",
            "title": "PONYO JUNTO AL ACANTILADO",
            "content": "Olas del mar con forma de peces gigantes. Rostro subido como referencia en la orilla. Luz de tormenta mágica. Biometría de inocencia y alegría oceánica."
        },
        {
            "id": "ghibli_23",
            "number": 23,
            "style": "Ghibli",
            "title": "EL VIENTO SE LEVANTA",
            "content": "Rostro subido como referencia diseñando planos de aviones. Viento moviendo las cortinas de la habitación. Luz blanca de 5600K. Biometría de genio y sueño aeronáutico."
        },
        {
            "id": "ghibli_24",
            "number": 24,
            "style": "Ghibli",
            "title": "EL RECUERDO DE MARNIE",
            "content": "Mansión abandonada junto al pantano. Rostro subido como referencia mirando por la ventana. Luz de luna plateada. Biometría de nostalgia y secreto familiar."
        },
        {
            "id": "ghibli_25",
            "number": 25,
            "style": "Ghibli",
            "title": "LA ISLA DE LA TORTUGA ROJA",
            "content": "Rostro subido como referencia en una playa virgen. Una tortuga gigante roja acercándose. Luz solar abrasadora. Biometría de supervivencia y soledad existencial."
        },
        {
            "id": "ghibli_26",
            "number": 26,
            "style": "Ghibli",
            "title": "EL ESCONDITE DE PORCO ROSSO",
            "content": "Hidroavión rojo en una cala secreta. Rostro subido como referencia tomando el sol. Luz mediterránea de los años 30. Biometría de honor y libertad aérea."
        },
        {
            "id": "ghibli_27",
            "number": 27,
            "style": "Ghibli",
            "title": "CUENTOS DE TERRAMAR",
            "content": "Dragones en el horizonte de un mundo árido. Rostro subido como referencia con espada mágica. Luz de profecía. Biometría de lucha interna y destino."
        },
        {
            "id": "ghibli_28",
            "number": 28,
            "style": "Ghibli",
            "title": "EL REGRESO DEL GATO",
            "content": "Rostro subido como referencia escoltado por gatos en traje de gala. Luz de salón real minúsculo. Biometría de sorpresa y elegancia felina."
        },
        {
            "id": "ghibli_29",
            "number": 29,
            "style": "Ghibli",
            "title": "MIS VECINOS LOS YAMADA",
            "content": "Estética acuarela 8K. Rostro subido como referencia en una escena familiar de comedia. Luz suave y minimalista. Biometría de alegría cotidiana."
        },
        {
            "id": "ghibli_30",
            "number": 30,
            "style": "Ghibli",
            "title": "EL CUENTO DE LA PRINCESA KAGUYA",
            "content": "Estética de dibujo tradicional con pinceladas visibles en 8K. Rostro subido como referencia con kimono de boda. Luz de luna mística. Biometría de tristeza divina."
        },
        {
            "id": "ghibli_31",
            "number": 31,
            "style": "Ghibli",
            "title": "CALLE DE EL VIAJE DE CHIHIRO",
            "content": "Puestos de comida mágica humeante. Rostro subido como referencia caminando por el mercado. Luz de neón espiritual. Biometría de miedo y curiosidad."
        },
        {
            "id": "ghibli_32",
            "number": 32,
            "style": "Ghibli",
            "title": "CAMPO DEL CASTILLO AMBULANTE",
            "content": "Césped verde infinito con flores alpinas. Rostro subido como referencia corriendo. Luz de sol brillante. Biometría de éxtasis y libertad mágica."
        },
        {
            "id": "ghibli_33",
            "number": 33,
            "style": "Ghibli",
            "title": "TOTORO EN LA PARADA DE AUTOBÚS",
            "content": "Lluvia intensa y paraguas rojo. Rostro subido como referencia junto a la criatura gigante. Luz de farola urbana solitaria. Biometría de asombro infantil."
        },
        {
            "id": "ghibli_34",
            "number": 34,
            "style": "Ghibli",
            "title": "SALA SECRETA DE NAUSICAÄ",
            "content": "Plantas bioluminiscentes puras. Rostro subido como referencia cuidando las esporas. Luz verde y azul suave. Biometría de sabiduría ecológica y paz."
        },
        {
            "id": "ghibli_35",
            "number": 35,
            "style": "Ghibli",
            "title": "CIELO DE KIKI EL APRENDIZ DE BRUJA",
            "content": "Volando sobre una ciudad costera europea. Rostro subido como referencia con radio de antes de la guerra. Luz de mañana fresca. Biometría de independencia juvenil."
        },
        {
            "id": "ghibli_36",
            "number": 36,
            "style": "Ghibli",
            "title": "VIAJE EN LOBO DE MONONOKE",
            "content": "En plena carrera por el bosque. Rostro subido como referencia con cara de furia salvaje. Sangre en las mejillas. Luz de luna entre árboles. Calidad IMAX."
        },
        {
            "id": "ghibli_37",
            "number": 37,
            "style": "Ghibli",
            "title": "SUSURROS DEL CORAZÓN EN LA BIBLIOTECA",
            "content": "Rostro subido como referencia leyendo entre estanterías de madera antigua. Luz de sol filtrada por el polvo. Biometría de amor literario y sueños de futuro."
        },
        {
            "id": "ghibli_38",
            "number": 38,
            "style": "Ghibli",
            "title": "DANZA A LA LUZ DE LA LUNA DE POM POKO",
            "content": "Mapaches mágicos transformándose. Rostro subido como referencia entre ellos. Luz de bosque místico. Biometría de risa y picardía mágica."
        },
        {
            "id": "ghibli_39",
            "number": 39,
            "style": "Ghibli",
            "title": "PERSECUCIÓN EN EL CASTILLO DE CAGLIOSTRO",
            "content": "Coche amarillo saltando por acantilados. Rostro subido como referencia disparando. Luz de acción de los 70 en 8K. Biometría de aventura clásica."
        },
        {
            "id": "ghibli_40",
            "number": 40,
            "style": "Ghibli",
            "title": "ENCUENTRO EN OLAS DEL OCÉANO",
            "content": "Rostro subido como referencia en el andén de un tren. Luz de verano adolescente. Biometría de amor platónico y nostalgia costera japonesa."
        },
        {
            "id": "ghibli_41",
            "number": 41,
            "style": "Ghibli",
            "title": "EL SECRETO DEL ABISMO GHIBLI",
            "content": "Ciudad sumergida de cristal. Rostro subido como referencia viendo peces voladores. Luz azul profunda bioluminiscente. Biometría de asombro acuático."
        },
        {
            "id": "ghibli_42",
            "number": 42,
            "style": "Ghibli",
            "title": "PILOTO DE ARAÑA MECÁNICA",
            "content": "Rostro subido como referencia operando controles de madera y metal. Luz de taller de alta tecnología anime. Biometría de genio de la ingeniería Ghibli."
        },
        {
            "id": "ghibli_43",
            "number": 43,
            "style": "Ghibli",
            "title": "LA ÚLTIMA FLOR DE LA TIERRA",
            "content": "Rostro subido como referencia encontrando una margarita entre escombros de metal. Luz divina. Biometría de esperanza pura. Calidad 8K fotorrealista."
        },
        {
            "id": "ghibli_44",
            "number": 44,
            "style": "Ghibli",
            "title": "ESTACIÓN DE FERROCARRIL CELESTIAL",
            "content": "Tren hecho de luz estelar. Rostro subido como referencia esperando con maleta mágica. Luz de constelaciones. Biometría de trascendencia espiritual."
        },
        {
            "id": "ghibli_45",
            "number": 45,
            "style": "Ghibli",
            "title": "LA FIESTA DEL TÉ DE LOS ESPÍRITUS",
            "content": "Rostro subido como referencia sentado con un dragón y un espantapájaros. Luz de jardín de ensueño. Biometría de amistad mágica y paz."
        },
        {
            "id": "ghibli_46",
            "number": 46,
            "style": "Ghibli",
            "title": "INVIERNO EN LA ALDEA GHIBLI",
            "content": "Rostro subido como referencia con abrigo de lana roja y bufanda blanca. Nieve cayendo. Luz azul de tarde fría. Biometría de calor hogareño y paz."
        },
        {
            "id": "ghibli_47",
            "number": 47,
            "style": "Ghibli",
            "title": "LA BENDICIÓN DEL MAESTRO DEL BOSQUE",
            "content": "Rostro subido como referencia recibiendo luz de una criatura de diez cuernos. Luz blanca sagrada. Biometría de reverencia y sanación biológica."
        },
        {
            "id": "ghibli_48",
            "number": 48,
            "style": "Ghibli",
            "title": "CENA DEL PIRATA DEL CIELO",
            "content": "En la cubierta del dirimible. Rostro subido como referencia riendo con camaradas. Luz de estrellas y hoguera interna. Biometría de alegría aventurera."
        },
        {
            "id": "ghibli_49",
            "number": 49,
            "style": "Ghibli",
            "title": "EL MUNDO SECRETO BAJO LA CAMA",
            "content": "Rostro subido como referencia descubriendo un reino de juguetes vivos. Luz de linterna pequeña. Biometría de asombro infantil absoluto. Calidad 8K."
        },
        {
            "id": "ghibli_50",
            "number": 50,
            "style": "Ghibli",
            "title": "LA CHICA DE LAS ESTRELLAS",
            "content": "Rostro subido como referencia con pelo de galaxia (PBR). Flotando en el vacío azul de Miyazaki. Luz de soles binarios. Biometría de divinidad cósmica. Masterpiece."
        },
        {
            "id": "ghibli_51",
            "number": 51,
            "style": "Ghibli",
            "title": "EL SECRETO DEL ANTIGUO ROBOT",
            "content": "Rostro subido como referencia reparando el núcleo de luz de un robot de piedra. Biometría de asombro técnico. Luz dorada emitida por la máquina. Calidad definitiva."
        },
        {
            "id": "ghibli_52",
            "number": 52,
            "style": "Ghibli",
            "title": "COCINA DE POCIONES MÁGICAS",
            "content": "Calderos burbujeantes con colores imposibles. Rostro subido como referencia como aprendiz de bruja. Luz de hechizos que iluminan el rostro. Estética Ghibli Masterpiece 8K."
        },
        {
            "id": "ghibli_53",
            "number": 53,
            "style": "Ghibli",
            "title": "VIGILANTE DE LA FORTALEZA DE NUBES",
            "content": "Rostro subido como referencia con mando de telescopio de bronce. Luz de sol a través de las nubes volumétricas. Biometría facial de profesionalidad aérea."
        },
        {
            "id": "ghibli_54",
            "number": 54,
            "style": "Ghibli",
            "title": "ENCUENTRO CON EL REY DEL BOSQUE",
            "content": "Rostro subido como referencia empequeñecido por un ciervo de diez metros con ojos humanos. Luz filtrada verde. Biometría de respeto y asombro místico."
        },
        {
            "id": "ghibli_55",
            "number": 55,
            "style": "Ghibli",
            "title": "CARRERA DE ESCOBAS VOLADORAS",
            "content": "Rostro subido como referencia volando a ras del agua. Estelas de luz cian. Luz de tarde fresca de 4500K. Biometría de adrenalina juvenil y libertad mágica."
        },
        {
            "id": "ghibli_56",
            "number": 56,
            "style": "Ghibli",
            "title": "AGENCIA DE VIAJES INTERESTELAR GHIBLI",
            "content": "Mapas de estrellas pintados a mano. Rostro subido como referencia planificando su próximo destino. Luz cálida de biblioteca técnica. Biometría de sabiduría exploradora."
        },
        {
            "id": "ghibli_57",
            "number": 57,
            "style": "Ghibli",
            "title": "EL GENERAL GATO",
            "content": "Rostro subido como referencia como mano derecha de un gato real en armadura. Luz de palacio felino de lujo. Biometría de mando diplomático y asombro contenido."
        },
        {
            "id": "ghibli_58",
            "number": 58,
            "style": "Ghibli",
            "title": "ESPÍRITU DEL MAR ABISAL",
            "content": "Rostro subido como referencia como guardián de una ballena de cristal (PBR). Luz azul profunda con burbujas de neón. Biometría facial de calma submarina y divinidad."
        },
        {
            "id": "ghibli_59",
            "number": 59,
            "style": "Ghibli",
            "title": "EL ÁNGEL DE MECANISMO DE RELOJERÍA",
            "content": "Alas de engranajes de oro revoloteando. Rostro subido como referencia tocando el metal caliente. Luz divina de estudio anime. Biometría de paz y diseño industrial mágico."
        },
        {
            "id": "ghibli_60",
            "number": 60,
            "style": "Ghibli",
            "title": "LLEGADA AL PALACIO DE LA LUNA",
            "content": "Arquitectura de cristal blanco puro. Rostro subido como referencia con kimono de luz estelar. Luz reflejada de la Tierra. Biometría de elegancia existencial suprema. Sony Venice 2."
        },
        {
            "id": "ghibli_61",
            "number": 61,
            "style": "Ghibli",
            "title": "LA BIBLIOTECA DEL DRAGÓN",
            "content": "Libros de pergamino custodiados por una criatura serpenteante. Rostro subido como referencia leyendo un secreto. Luz de llama azul. Calidad 8K fotorrealista."
        },
        {
            "id": "ghibli_62",
            "number": 62,
            "style": "Ghibli",
            "title": "EXPLORADORES DEL MUNDO PEQUEÑO",
            "content": "Rostro subido como referencia cruzando un jardín en una hormiga mecánica. Luz de sol de mediodía reflejada en gotas de agua gigantes. Biometría de valentía minúscula."
        },
        {
            "id": "ghibli_63",
            "number": 63,
            "style": "Ghibli",
            "title": "CAMPO DE BATALLA ESTILO GHIBLI",
            "content": "Máquinas de guerra de madera y vapor destruidas entre flores rojas. Rostro subido como referencia con mirada de paz final. Luz de atardecer melancólica. Calidad de imagen Masterpiece."
        },
        {
            "id": "ghibli_64",
            "number": 64,
            "style": "Ghibli",
            "title": "EL PESCADOR DEL CIELO",
            "content": "Rostro subido como referencia con caña de luz pescando nubes que parecen peces. Luz de amanecer en el aire. Biometría facial de paciencia y asombro aéreo."
        },
        {
            "id": "ghibli_65",
            "number": 65,
            "style": "Ghibli",
            "title": "GUARDIÁN DEL ÁRBOL GIGANTE",
            "content": "Rostro subido como referencia sentado en una rama que cruza el cielo. Luz de sol y viento. Biometría de soledad feliz y destino ecológico supremo. Arri Alexa 35."
        },
        {
            "id": "ghibli_66",
            "number": 66,
            "style": "Ghibli",
            "title": "LA MARIPOSA MECÁNICA",
            "content": "Rostro subido como referencia con manos de cirujano reparando alas de cristal. Luz de taller místico-técnico. Biometría de paciencia microscópica. Calidad definitiva 8K."
        },
        {
            "id": "ghibli_67",
            "number": 67,
            "style": "Ghibli",
            "title": "CAFÉ GHIBLI EN LAS ESTRELLAS",
            "content": "Rostro subido como referencia sirviendo café a fantasmas amables. Luz de estrellas y neón de antes de la guerra. Biometría de paz social y tecnología de confort futuro."
        },
        {
            "id": "ghibli_68",
            "number": 68,
            "style": "Ghibli",
            "title": "LA CURANDERA DE CIUDAD DE HIERRO",
            "content": "Rostro subido como referencia con hierbas y ollas de cobre. Luz de fragua industrial de fondo. Biometría de compasión y fuerza curativa ancestral."
        },
        {
            "id": "ghibli_69",
            "number": 69,
            "style": "Ghibli",
            "title": "TERMINAL DE GATO-BUSES",
            "content": "Decenas de gatos gigantes aparcados en nubes. Rostro subido como referencia con ticket de luz. Luz de noche mágica. Biometría facial de sueño y aventura inminente."
        },
        {
            "id": "ghibli_70",
            "number": 70,
            "style": "Ghibli",
            "title": "EL ÚLTIMO ESPÍRITU DEL BOSQUE",
            "content": "Rostro subido como referencia viendo como un kodama se apaga. Luz residual verde. Biometría facial de tristeza absoluta y respeto final. Calidad IMAX."
        },
        {
            "id": "ghibli_71",
            "number": 71,
            "style": "Ghibli",
            "title": "ESTACIÓN ESPACIAL GHIBLI",
            "content": "Hecha de madera y paneles solares de lino. Rostro subido como referencia viendo la Tierra-Anime. Luz de estrellas HDR. Biometría de asombro cósmico y nostalgia técnica."
        },
        {
            "id": "ghibli_72",
            "number": 72,
            "style": "Ghibli",
            "title": "EL ESPÍRITU DEL VIENTO",
            "content": "Rostro subido como referencia con cuerpo hecho de aire y hojas secas flotando. Luz de atardecer. Biometría de libertad total y poder natural absoluto."
        },
        {
            "id": "ghibli_73",
            "number": 73,
            "style": "Ghibli",
            "title": "VIAJE DE LA BALLENA MECÁNICA",
            "content": "Submarino gigantesco con forma de ballena de metal blanco. Rostro subido como referencia en el ojo de buey. Luz azul profunda. Biometría de asombro acuático. Sony Venice 2."
        },
        {
            "id": "ghibli_74",
            "number": 74,
            "style": "Ghibli",
            "title": "LA FIESTA DEL TÉ DE LA BRUJA",
            "content": "Rostro subido como referencia tomando té con un espantapájaros y un demonio. Luz de jardín encantado. Calidad 8K fotorrealista. Biometría facial de amistad mágica."
        },
        {
            "id": "ghibli_75",
            "number": 75,
            "style": "Ghibli",
            "title": "DEFENSA DEL CASTILLO EN EL CIELO",
            "content": "Rostro subido como referencia en lo alto de la torre con arco de luz. Nubes cargadas de electricidad. Biometría de valentía aérea absoluta. Red V-Raptor."
        },
        {
            "id": "ghibli_76",
            "number": 76,
            "style": "Ghibli",
            "title": "EL MUNDO SECRETO DE LOS INSECTOS",
            "content": "Rostro subido como referencia montando una mariquita de cristal. Luz de sol a través de las hojas del bosque densas. Biometría de valentía minúscula técnica."
        },
        {
            "id": "ghibli_77",
            "number": 77,
            "style": "Ghibli",
            "title": "CABALLERO GHIBLI DE LA LUNA",
            "content": "Armadura de cristal y plata. Rostro subido como referencia con espada de luz. Luz de noche cósmica. Biometría de honor y gloria lunar. Masterpiece."
        },
        {
            "id": "ghibli_78",
            "number": 78,
            "style": "Ghibli",
            "title": "EL ESPÍRITU DE LA MONTAÑA",
            "content": "Gigante de piedra durmiendo bajo la nieve. Rostro subido como referencia tocando su cara de roca. Luz azul de frío extremo. Biometría de paz y comunión geológica."
        },
        {
            "id": "ghibli_79",
            "number": 79,
            "style": "Ghibli",
            "title": "ALAS DE ÁNGEL MECÁNICAS",
            "content": "Rostro subido como referencia en pleno vuelo. Engranajes de oro parpadeando. Luz de amanecer divino. Biometría de éxtasis y libertad aeronáutica mágica. Calidad 8K."
        },
        {
            "id": "ghibli_80",
            "number": 80,
            "style": "Ghibli",
            "title": "EL ÚLTIMO HÉROE GHIBLI",
            "content": "Rostro subido como referencia en un trono de nubes. Luz de esperanza de una nueva era. Biometría facial de éxito absoluto y paz mundial. Calidad definitiva."
        },
        {
            "id": "ghibli_81",
            "number": 81,
            "style": "Ghibli",
            "title": "EL ESPÍRITU DEL AGUA",
            "content": "Cuerpo hecho de gotas de agua pura. Rostro subido como referencia nadando con gracia. Luz azul bioluminiscente. Biometría de fluidez y divinidad acuática."
        },
        {
            "id": "ghibli_82",
            "number": 82,
            "style": "Ghibli",
            "title": "MAYORDOMO GATO MECÁNICO",
            "content": "Rostro subido como referencia siendo servido té por un robot felino elegante. Luz de mansión del siglo XIX. Biometría de lujo y tecnología de confort futuro."
        },
        {
            "id": "ghibli_83",
            "number": 83,
            "style": "Ghibli",
            "title": "LA NAVE ESPACIAL DE FLORES",
            "content": "Hecha enteramente de rosas y lírios espaciales. Rostro subido como referencia al mando. Luz de estrellas HDR. Biometría de asombro y éxito ecológico cósmico."
        },
        {
            "id": "ghibli_84",
            "number": 84,
            "style": "Ghibli",
            "title": "MAESTRO DE ESPADA GHIBLI",
            "content": "Rostro subido como referencia con catana de luz azul cortando el viento. Luz de bosque de bambú nocturno. Biometría de precisión letal zen. Arri Alexa 35."
        },
        {
            "id": "ghibli_85",
            "number": 85,
            "style": "Ghibli",
            "title": "EL ESPÍRITU DEL SOL",
            "content": "Rostro subido como referencia rodeado de fuego dorado que no quema. Luz solar divina cegadora. Biometría facial de alegría suprema y divinidad radiante."
        },
        {
            "id": "ghibli_86",
            "number": 86,
            "style": "Ghibli",
            "title": "VIAJE EN PÁJARO MECÁNICO",
            "content": "Rostro subido como referencia montando una gaviota de metal blanco por el canal. Luz mediterránea brillante. Biometría de felicidad y libertad de vuelo. Sony Venice 2."
        },
        {
            "id": "ghibli_87",
            "number": 87,
            "style": "Ghibli",
            "title": "EL ÚLTIMO SECRETO GHIBLI",
            "content": "Rostro subido como referencia abriendo un cofre de luz que contiene todo un universo. Luz de descubrimiento absoluto. Biometría de asombro místico."
        },
        {
            "id": "ghibli_88",
            "number": 88,
            "style": "Ghibli",
            "title": "DEFENSA DE LA MÁQUINA DE GUERRA GHIBLI",
            "content": "Rostro subido como referencia en lo alto de un tanque de madera y vapor. Luz de fuego y esperanza. Biometría facial de liderazgo bajo presión mágica."
        },
        {
            "id": "ghibli_89",
            "number": 89,
            "style": "Ghibli",
            "title": "EL ESPÍRITU DE LA TIERRA",
            "content": "Rostro subido como referencia emergiendo del suelo fértil rodeado de plantas. Luz de amanecer cálida. Biometría de renacimiento y conexión biológica suprema."
        },
        {
            "id": "ghibli_90",
            "number": 90,
            "style": "Ghibli",
            "title": "RECONSTRUCCIÓN DEL CORAZÓN MECÁNICO",
            "content": "Rostro subido como referencia soldando engranajes de un robot con cara de piedra. Luz de chispas de luz sólida. Biometría de artesano de almas mecánicas. Calidad 8K."
        },
        {
            "id": "ghibli_91",
            "number": 91,
            "style": "Ghibli",
            "title": "LA LEYENDA GHIBLI",
            "content": "Rostro subido como referencia volando en una escoba hacia un sol gigante. Luz dorada divina. Biometría facial de éxito absoluto y libertad eterna. Masterpiece."
        },
        {
            "id": "ghibli_92",
            "number": 92,
            "style": "Ghibli",
            "title": "EL ESPÍRITU DE LA MÚSICA",
            "content": "Rostro subido como referencia tocando un piano hecho de luz y agua. Luz que cambia según la melodía. Biometría de éxtasis artístico supremo."
        },
        {
            "id": "ghibli_93",
            "number": 93,
            "style": "Ghibli",
            "title": "BALLENA ESPACIAL MECÁNICA",
            "content": "Nave colosal cruzando nebulosas púrpuras. Rostro subido como referencia en el mirador. Luz de estrellas HDR. Biometría de asombro cósmico infinito."
        },
        {
            "id": "ghibli_94",
            "number": 94,
            "style": "Ghibli",
            "title": "LÍDER DE LA REBELIÓN GHIBLI",
            "content": "Rostro subido como referencia con arco de luz guiando a espíritus y máquinas. Luz de libertad revolucionaria. Biometría facial de carisma y mando absoluto."
        },
        {
            "id": "ghibli_95",
            "number": 95,
            "style": "Ghibli",
            "title": "EL ÚLTIMO ATARDECER GHIBLI",
            "content": "Rostro subido como referencia viendo como el mundo se transforma en luz blanca. Paz absoluta. Biometría facial de rendición y trascendencia divina."
        },
        {
            "id": "ghibli_96",
            "number": 96,
            "style": "Ghibli",
            "title": "MAESTRO DEL JARDÍN MECÁNICO",
            "content": "Rostro subido como referencia cuidando flores de metal y cristal que se mueven solas. Luz de sol técnica. Biometría de paciencia infinita y maestría botánica-técnica."
        },
        {
            "id": "ghibli_97",
            "number": 97,
            "style": "Ghibli",
            "title": "EL GUARDIA DE LOS ESPÍRITUS GHIBLI",
            "content": "Rostro subido como referencia con armadura de luz protegiendo la entrada al mundo mágico. Luz de custodia sagrada. Biometría de lealtad y protección. Arri Alexa 35."
        },
        {
            "id": "ghibli_98",
            "number": 98,
            "style": "Ghibli",
            "title": "VIAJERO ESTELAR MECÁNICO",
            "content": "Rostro subido como referencia en una cápsula de cristal cruzando galas de luz. Luz de estrellas infinita. Biometría de asombro y éxito exploratorio cósmico."
        },
        {
            "id": "ghibli_99",
            "number": 99,
            "style": "Ghibli",
            "title": "EL ÚLTIMO SUEÑO GHIBLI",
            "content": "Rostro subido como referencia despertando en una pradera infinita de flores blancas bajo un cielo de neón. Luz dorada divina. Calidad definitiva Masterpiece."
        },
        {
            "id": "ghibli_100",
            "number": 100,
            "style": "Ghibli",
            "title": "EL RENACIMIENTO DEL MUNDO GHIBLI",
            "content": "Rostro subido como referencia viendo nacer un nuevo universo de luz y magia. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de gloria eterna y éxito total."
        }
    ],
    "Bocetos": [
        {
            "id": "bocetos_1",
            "number": 1,
            "style": "Bocetos",
            "title": "RETRATO DE ALMA EN CARBÓN",
            "content": "Boceto a carboncillo sobre papel de alto gramaje con textura visible PBR. Personaje con rostro subido como referencia. Trazos enérgicos y difuminados realistas que capturan el polvo de carbono. Biometría facial definida por sombras profundas y luces blancas de tiza. Calidad macroscópica 8K que muestra la fibra del papel. Masterpiece."
        },
        {
            "id": "bocetos_2",
            "number": 2,
            "style": "Bocetos",
            "title": "HÉROE EN ÓLEO IMPASTO",
            "content": "Pintura al óleo con capas gruesas de pintura (Relieve 3D). Personaje con rostro subido como referencia con mirada heroica. Colores vibrantes mezclados en el lienzo. Iluminación lateral que proyecta sombras en las pinceladas. Biometría facial expresiva y dramática. Calidad 8K fotorrealista de obra de museo. Sony Venice 2."
        },
        {
            "id": "bocetos_3",
            "number": 3,
            "style": "Bocetos",
            "title": "SAMURÁI EN AGUADA DE TINTA",
            "content": "Estética Sumi-e tradicional japonesa pero en ultra-alta definición. Rostro subido como referencia con mirada zen. Salpicaduras de tinta negra sobre papel de arroz con sangrado realista. Biometría facial minimalista pero potente. Calidad 8K con texturas de pincel de pelo de lobo."
        },
        {
            "id": "bocetos_4",
            "number": 4,
            "style": "Bocetos",
            "title": "BOCETO DE INGENIERÍA EN GRAFITO",
            "content": "Dibujo técnico de un androide con rostro subido como referencia como núcleo. Líneas finas de lápiz 2H y sombras HB. Manchas de grafito por el roce de la mano. Biometría facial de tecnología humana. Textura de papel vegetal con transparencias. Calidad definitiva."
        },
        {
            "id": "bocetos_5",
            "number": 5,
            "style": "Bocetos",
            "title": "PAISAJE ONÍRICO EN ACUARELA",
            "content": "Colores que se funden con agua real. Personaje con rostro subido como referencia flotando en un mar de pigmentos azul y oro. Textura de papel Arches de grano fino. Biometría facial suave y etérea. Iluminación retroiluminada HDR. Estética de arte conceptual de lujo."
        },
        {
            "id": "bocetos_6",
            "number": 6,
            "style": "Bocetos",
            "title": "SANGUINA ROJA RENACENTISTA",
            "content": "Estilo Leonardo da Vinci. Rostro subido como referencia dibujado con tiza roja sobre papel envejecido. Anatomía perfecta y biometría facial de estudio clásico. Textura de pergamino con manchas de tiempo. Calidad 8K Masterpiece."
        },
        {
            "id": "bocetos_7",
            "number": 7,
            "style": "Bocetos",
            "title": "PINTURA POP-ART NEÓN",
            "content": "Óleo moderno con colores fluorescentes que brillan bajo luz negra (Ray-tracing). Rostro subido como referencia con estilo icónico. Pinceladas rápidas y texturizadas. Biometría facial de fama y modernidad. Calidad técnica suprema."
        },
        {
            "id": "bocetos_8",
            "number": 8,
            "style": "Bocetos",
            "title": "ARTE CONCEPTUAL DIGITAL CYBERPUNK",
            "content": "Pintura digital de alta gama. Rostro subido como referencia con implantes que emiten luz volumétrica azul. Pinceladas de luz sólida y texturas de metal pulido. Biometría facial de futuro distópico. Calidad 8K de producción de videojuego AAA."
        },
        {
            "id": "bocetos_9",
            "number": 9,
            "style": "Bocetos",
            "title": "ESPÁTULA ABSTRACTA",
            "content": "Textura de pintura aplicada con espátula creando relieves masivos. Rostro subido como referencia emergiendo entre bloques de color. Biometría facial sugerida pero potente. Luz cenital dura. Calidad de galería de arte contemporáneo."
        },
        {
            "id": "bocetos_10",
            "number": 10,
            "style": "Bocetos",
            "title": "REALISMO EXTREMO EN LÁPIZ",
            "content": "Dibujo hiperrealista que parece fotografía. Rostro subido como referencia con cada poro y vello facial dibujado a mano. Brillo del grafito bajo la luz. Biometría facial absoluta. Calidad 8K macro. Masterpiece."
        },
        {
            "id": "bocetos_11",
            "number": 11,
            "style": "Bocetos",
            "title": "RETRATO SUAVE EN PASTEL",
            "content": "Colores polvorientos y difuminados delicados. Rostro subido como referencia con mirada de paz. Textura de papel Canson Mi-Teintes. Biometría facial de ternura y luz suave. Calidad fotorrealista de dibujo artístico."
        },
        {
            "id": "bocetos_12",
            "number": 12,
            "style": "Bocetos",
            "title": "ARQUERO EN ESTILO GRABADO",
            "content": "Líneas de grabado en cobre o madera. Rostro subido como referencia con ballesta. Trama de líneas (Cross-hatching) para las sombras. Biometría de precisión y arte antiguo. Textura de metal grabado. Arri Alexa 35."
        },
        {
            "id": "bocetos_13",
            "number": 13,
            "style": "Bocetos",
            "title": "BOSQUE DE FANTASÍA EN GUACHE",
            "content": "Colores opacos y vibrantes. Personaje con rostro subido como referencia entre criaturas mágicas. Estética de libro de ilustraciones clásico. Biometría facial de cuento de hadas. Calidad 8K técnica."
        },
        {
            "id": "bocetos_14",
            "number": 14,
            "style": "Bocetos",
            "title": "MEMORIA INFANTIL EN CERA",
            "content": "Textura de ceras Manley sobre cartulina. Rostro subido como referencia dibujado con trazos ingenuos pero en ultra-alta fidelidad 8K. Biometría facial de inocencia. Calidad de arte emocional."
        },
        {
            "id": "bocetos_15",
            "number": 15,
            "style": "Bocetos",
            "title": "RETRATO EN MOSAICO DE TESELAS",
            "content": "Miles de pequeñas piezas de cerámica y vidrio con reflejos HDR. Rostro subido como referencia formado por el mosaico. Biometría de realeza bizantina. Calidad 8K con profundidad de cada pieza."
        },
        {
            "id": "bocetos_16",
            "number": 16,
            "style": "Bocetos",
            "title": "ARTE CALLEJERO EN PLANTILLA",
            "content": "Estilo Banksy. Rostro subido como referencia pintado con spray sobre ladrillo rugoso. Goteos de pintura realistas. Biometría de rebeldía urbana. Textura de pared de hormigón PBR. Calidad definitiva."
        },
        {
            "id": "bocetos_17",
            "number": 17,
            "style": "Bocetos",
            "title": "ILUSTRACIÓN DE MODA CON ROTULADOR",
            "content": "Trazos fluidos de Copic Markers. Rostro subido como referencia con maquillaje de alta costura. Brillos de alcohol en el papel. Biometría de elegancia extrema. Calidad 8K."
        },
        {
            "id": "bocetos_18",
            "number": 18,
            "style": "Bocetos",
            "title": "FANTASMA EN AGUAFUERTE",
            "content": "Lineas finas y misteriosas sobre fondo oscuro. Rostro subido como referencia apareciendo entre las sombras. Biometría de misterio y miedo gótico. Textura de placa de metal vieja."
        },
        {
            "id": "bocetos_19",
            "number": 19,
            "style": "Bocetos",
            "title": "FRESCO DE TECHO RENACENTISTA",
            "content": "Pintura sobre yeso húmedo. Rostro subido como referencia como figura central de una cúpula. Colores terrosos y textura de cal. Biometría divina. Calidad 8K de Capilla Sixtina."
        },
        {
            "id": "bocetos_20",
            "number": 20,
            "style": "Bocetos",
            "title": "BOCETO DE ESTÉTICA GLITCH",
            "content": "Lápiz tradicional mezclado con distorsiones digitales de neón. Rostro subido como referencia como si fallara la señal. Biometría facial fragmentada. Calidad 8K técnica de vanguardia."
        },
        {
            "id": "bocetos_21",
            "number": 21,
            "style": "Bocetos",
            "title": "EL PLANO DEL ARQUITECTO",
            "content": "Líneas azules sobre papel técnico cianotipo. Rostro subido como referencia como estatua en un edificio. Biometría de diseño y orden. Textura de papel antiguo con olor visual a amoníaco."
        },
        {
            "id": "bocetos_22",
            "number": 22,
            "style": "Bocetos",
            "title": "ICONO DE PAN DE ORO",
            "content": "Rostro subido como referencia pintado con temples sobre madera y rodeado de láminas de oro puro PBR. Reflejos metálicos reales. Biometría facial sagrada. Calidad 8K de museo nacional."
        },
        {
            "id": "bocetos_23",
            "number": 23,
            "style": "Bocetos",
            "title": "GUERRERO EN CARBÓN RUGOSO",
            "content": "Trazos negros pesados que denotan fuerza. Rostro subido como referencia con grito de guerra. Polvo de carbón volando por el lienzo. Biometría de furia pura. Calidad macroscópica."
        },
        {
            "id": "bocetos_24",
            "number": 24,
            "style": "Bocetos",
            "title": "DIBUJO DE HUMO ETÉREO",
            "content": "Rostro subido como referencia formado por volutas de humo blanco sobre fondo negro. Sin líneas, solo formas gaseosas. Biometría de misterio y transitoriedad. Calidad HDR 8K."
        },
        {
            "id": "bocetos_25",
            "number": 25,
            "style": "Bocetos",
            "title": "BOCETO DE ESCULTURA DE ARCILLA",
            "content": "Rostro subido como referencia con marcas de dedos y espátula en el barro húmedo. Textura de tierra roja PBR. Biometría de creación humana y esfuerzo táctil. Calidad 8K."
        },
        {
            "id": "bocetos_26",
            "number": 26,
            "style": "Bocetos",
            "title": "LA TRAMPA DE TINTA",
            "content": "Rostro subido como referencia atrapado tras una mancha de tinta china que se expande. Biometría facial de desesperación y arte abstracto. Calidad fotorrealista de líquidos."
        },
        {
            "id": "bocetos_27",
            "number": 27,
            "style": "Bocetos",
            "title": "TAPIZ MEDIEVAL",
            "content": "Tejido de hilos de lana y seda con nudos visibles. Rostro subido como referencia como caballero de la corte. Biometría de honor feudal. Calidad 8K de textura textil extrema."
        },
        {
            "id": "bocetos_28",
            "number": 28,
            "style": "Bocetos",
            "title": "TINTA BLANCA SOBRE PAPEL NEGRO",
            "content": "Contraste inverso extremo. Solo las luces iluminan al rostro subido como referencia. Biometría facial de oscuridad y luz pura. Calidad Masterpiece."
        },
        {
            "id": "bocetos_29",
            "number": 29,
            "style": "Bocetos",
            "title": "RETRATO EN LIENZO GRAFFITI",
            "content": "Capas de pintura, pegatinas y marcadores. Rostro subido como referencia en el centro con estilo urbano. Textura de collage y spray. Biometría de juventud y arte moderno."
        },
        {
            "id": "bocetos_30",
            "number": 30,
            "style": "Bocetos",
            "title": "LA LÍNEA INFINITA",
            "content": "Rostro subido como referencia dibujado con un solo trazo continuo de pluma técnica. Biometría de elegancia matemática y flujo artístico. Calidad 8K sobre fondo blanco puro."
        },
        {
            "id": "bocetos_31",
            "number": 31,
            "style": "Bocetos",
            "title": "DIBUJO EN PAPEL ARRUGADO",
            "content": "Rostro subido como referencia dibujado a lápiz sobre un papel que ha sido hecho una bola y extendido. Arrugas que distorsionan la biometría. Calidad de textura 3D extrema."
        },
        {
            "id": "bocetos_32",
            "number": 32,
            "style": "Bocetos",
            "title": "ÓLEO VERTIDO",
            "content": "Efectos de fluido de pinturas mezclándose sin pincel. Rostro subido como referencia apareciendo en la mezcla. Biometría de fluidez y color psicodélico."
        },
        {
            "id": "bocetos_33",
            "number": 33,
            "style": "Bocetos",
            "title": "EL GIGANTE EN XILOGRAFÍA",
            "content": "Talla en madera con vetas marcadas. Rostro subido como referencia con barba y ojos de bosque. Biometría de fuerza natural. Calidad 8K de grabado rústico."
        },
        {
            "id": "bocetos_34",
            "number": 34,
            "style": "Bocetos",
            "title": "PUNTA DE PLATA RENACENTISTA",
            "content": "Línea gris ultra-fina que se oxida con el tiempo. Rostro subido como referencia con delicadeza angélica. Biometría de pureza histórica. Calidad de dibujo de Leonardo."
        },
        {
            "id": "bocetos_35",
            "number": 35,
            "style": "Bocetos",
            "title": "HÉROE DE CALIGRAFÍA",
            "content": "Rostro subido como referencia formado por letras chinas o árabes fluidas. Biometría de mensaje y arte textual. Calidad 8K de pincel de tinta."
        },
        {
            "id": "bocetos_36",
            "number": 36,
            "style": "Bocetos",
            "title": "EL RETRATO DE ARENA",
            "content": "Granos de arena dorada sobre una mesa de luz formando al rostro subido como referencia. Biometría de fragilidad y tiempo efímero. Calidad macro 8K."
        },
        {
            "id": "bocetos_37",
            "number": 37,
            "style": "Bocetos",
            "title": "ARTE DE CERA ENCÁUSTICA",
            "content": "Pintura de cera de abeja fundida con pigmentos. Rostro subido como referencia bajo una capa translúcida y brillante. Biometría de misterio y textura orgánica PBR."
        },
        {
            "id": "bocetos_38",
            "number": 38,
            "style": "Bocetos",
            "title": "OBRA MAESTRA EN BOLÍGRAFO",
            "content": "Miles de líneas azules de boli Bic creando sombras complejas. Rostro subido como referencia con realismo sorprendente. Biometría de paciencia y arte cotidiano."
        },
        {
            "id": "bocetos_39",
            "number": 39,
            "style": "Bocetos",
            "title": "MOSAICO DE VELAS ROTAS",
            "content": "Rostro subido como referencia reflejado en fragmentos de vidrio que cortan el aire. Luz de neón. Biometría facial fracturada y peligrosa. Calidad RAW."
        },
        {
            "id": "bocetos_40",
            "number": 40,
            "style": "Bocetos",
            "title": "EL PLANO DE UN ALMA",
            "content": "Rostro subido como referencia cruzado por líneas de cuadrícula y notas manuscritas en lápiz. Biometría de creación y diseño humano divino. Calidad 8K."
        },
        {
            "id": "bocetos_41",
            "number": 41,
            "style": "Bocetos",
            "title": "AERÓGRAFO HIPER-REALISTA",
            "content": "Pintura suave sin líneas, transiciones de color perfectas. Rostro subido como referencia con piel de cristal. Biometría de belleza absoluta. Estética de los 80 en 8K."
        },
        {
            "id": "bocetos_42",
            "number": 42,
            "style": "Bocetos",
            "title": "FANTASMA DE PINCEL SECO",
            "content": "Textura de pintura blanca sobre fondo gris oscuro. Rostro subido como referencia apareciendo por las cerdas del pincel. Biometría de misterio y aparición mística."
        },
        {
            "id": "bocetos_43",
            "number": 43,
            "style": "Bocetos",
            "title": "EL ENTINTADOR DE CÓMICS",
            "content": "Sombras negras sólidas (Black areas) y líneas dinámicas. Rostro subido como referencia como superhéroe Noir. Biometría de acción y drama. Calidad técnica de entintado."
        },
        {
            "id": "bocetos_44",
            "number": 44,
            "style": "Bocetos",
            "title": "REVELACIÓN EN SCRATCHBOARD",
            "content": "Fondo negro rascado para revelar el blanco debajo. Rostro subido como referencia con mirada intensa. Biometría de luz emergiendo de la sombra."
        },
        {
            "id": "bocetos_45",
            "number": 45,
            "style": "Bocetos",
            "title": "LA LITURGIA DEL ARTE",
            "content": "Rostro subido como referencia dibujando su propio rostro en un lienzo infinito. Paradoja artística. Calidad 8K fotorrealista de estudio."
        },
        {
            "id": "bocetos_46",
            "number": 46,
            "style": "Bocetos",
            "title": "BOCETO EN MANCHA DE CAFÉ",
            "content": "Acuarela monocromática en tonos sepia. Rostro subido como referencia bebiendo en una cafetería antigua de París. Biometría de nostalgia y cultura bohemia."
        },
        {
            "id": "bocetos_47",
            "number": 47,
            "style": "Bocetos",
            "title": "CARTEL DE PELÍCULA LITOGRÁFICO",
            "content": "Estilo Drew Struzan. Rostro subido como referencia como aventurero épico. Colores cálidos y aura de aventura. Calidad 8K de cine clásico."
        },
        {
            "id": "bocetos_48",
            "number": 48,
            "style": "Bocetos",
            "title": "EL TITIRITERO DE SOMBRAS",
            "content": "Rostro subido como referencia proyectado en una sábana blanca por una luz de vela. Biometría facial en silueta dramática. Calidad de arte efímero."
        },
        {
            "id": "bocetos_49",
            "number": 49,
            "style": "Bocetos",
            "title": "PINTURA AL ÓLEO DIGITAL",
            "content": "Simulación física de pinceladas de aceite. Rostro subido como referencia con textura de lienzo 8K. Biometría de realismo tradicional capturado digitalmente."
        },
        {
            "id": "bocetos_50",
            "number": 50,
            "style": "Bocetos",
            "title": "EL CUADERNO DEL MAESTRO",
            "content": "Página de cuero con bocetos de anatomía y rostros (referencia: rostro subido). Notas en latín. Luz de estudio artístico de 1500. Calidad suprema 8K."
        },
        {
            "id": "bocetos_51",
            "number": 51,
            "style": "Bocetos",
            "title": "FUSIÓN DE GRAFITO Y NEÓN",
            "content": "Lápiz tradicional con circuitos de luz reales integrados. Rostro subido como referencia como cyborg artístico. Biometría de tecnología y arte manual."
        },
        {
            "id": "bocetos_52",
            "number": 52,
            "style": "Bocetos",
            "title": "EL MOMENTO CONGELADO EN TINTA",
            "content": "Gota de tinta estallando en el papel formando el rostro subido como referencia. Cámara de alta velocidad 8K. Biometría de sorpresa y fluidez física."
        },
        {
            "id": "bocetos_53",
            "number": 53,
            "style": "Bocetos",
            "title": "RETRATO DE FARAÓN EN PAPIRO",
            "content": "Pintura egipcia con pigmentos naturales (azul lapislázuli, ocre). Rostro subido como referencia con mirada de dios. Textura de papiro auténtico."
        },
        {
            "id": "bocetos_54",
            "number": 54,
            "style": "Bocetos",
            "title": "EL SALÓN DE DIBUJO DEL ARQUITECTO",
            "content": "Rostro subido como referencia reflejado en un tiralíneas de plata. Planos de catedrales góticas. Luz de sol a través de vidrieras. Biometría de genio creativo."
        },
        {
            "id": "bocetos_55",
            "number": 55,
            "style": "Bocetos",
            "title": "TALLA EN HIELO GLACIAR",
            "content": "Rostro subido como referencia esculpido en bloque de hielo transparente con burbujas de aire internas. Luz azul de sol invernal. Biometría facial gélida y divina."
        },
        {
            "id": "bocetos_56",
            "number": 56,
            "style": "Bocetos",
            "title": "EL MANDALA INFINITO",
            "content": "Milenios de líneas formando el rostro subido como referencia en el centro geométrico. Biometría de paz trascendental. Calidad 8K de dibujo microscópico."
        },
        {
            "id": "bocetos_57",
            "number": 57,
            "style": "Bocetos",
            "title": "ARTE DE PARED POST-APOCALÍPTICO",
            "content": "Rostro subido como referencia pintado sobre el metal oxidado de un búnker. Biometría de esperanza entre la decadencia. Textura de óxido y polvo real."
        },
        {
            "id": "bocetos_58",
            "number": 58,
            "style": "Bocetos",
            "title": "EL CIBER-BOCETO",
            "content": "Código binario cayendo en cascada formando el rostro subido como referencia. Luz verde Matrix sobre fondo negro mate. Biometría de conciencia digital."
        },
        {
            "id": "bocetos_59",
            "number": 59,
            "style": "Bocetos",
            "title": "ÓLEO DE LA ERA ROMÁNTICA",
            "content": "Estilo Caspar David Friedrich. Rostro subido como referencia de espaldas mirando un mar de nubes. Biometría facial revelada por un giro de cabeza. Luz sublime."
        },
        {
            "id": "bocetos_60",
            "number": 60,
            "style": "Bocetos",
            "title": "LA TIZA DEL ALQUIMISTA",
            "content": "Símbolos ocultos dibujando el rostro subido como referencia en el suelo de piedra. Luz de fuego místico. Biometría de poder ancestral y química secreta."
        },
        {
            "id": "bocetos_61",
            "number": 61,
            "style": "Bocetos",
            "title": "TINTA Y PAN DE ORO",
            "content": "Ilustración en blanco y negro con detalles en oro puro (PBR). Rostro subido como referencia como figura mítica. Biometría de elegancia suprema. Calidad Masterpiece."
        },
        {
            "id": "bocetos_62",
            "number": 62,
            "style": "Bocetos",
            "title": "EL BOCETO DE LAS MIL CARAS",
            "content": "Múltiples dibujos superpuestos del rostro subido como referencia en diferentes emociones. Biometría facial completa. Estética de estudio psicológico."
        },
        {
            "id": "bocetos_63",
            "number": 63,
            "style": "Bocetos",
            "title": "ARTE EN PAPEL QUEMADO",
            "content": "Rostro subido como referencia apareciendo en los bordes carbonizados de un papel en llamas. Luz de brasas. Biometría de destrucción y belleza técnica."
        },
        {
            "id": "bocetos_64",
            "number": 64,
            "style": "Bocetos",
            "title": "DIBUJO DEL MOTOR DE VAPOR",
            "content": "Ingranajes y vapor saliendo del papel de dibujo. Rostro subido como referencia integrado en la máquina. Biometría de genio Steampunk. Calidad 8K."
        },
        {
            "id": "bocetos_65",
            "number": 65,
            "style": "Bocetos",
            "title": "IMPRESIÓN AZUL ABSTRACTA",
            "content": "Pintura azul de Yves Klein con texturas masivas. Rostro subido como referencia apenas visible por el relieve. Biometría de misterio moderno. Calidad de galería."
        },
        {
            "id": "bocetos_66",
            "number": 66,
            "style": "Bocetos",
            "title": "EL BOCETO FINAL",
            "content": "Rostro subido como referencia dibujado con la mano de un ángel hecho de luz. Luz divina que ciega. Biometría de perfección absoluta y éxito triunfal."
        },
        {
            "id": "bocetos_67",
            "number": 67,
            "style": "Bocetos",
            "title": "EXPLOSIÓN DE TINTA HYPER",
            "content": "Tinta volando en el aire formando al rostro subido como referencia por milisegundos. Captura Arri Alexa 35. Biometría de dinamismo y poder físico."
        },
        {
            "id": "bocetos_68",
            "number": 68,
            "style": "Bocetos",
            "title": "ESCRIBA DE MONASTERIO MEDIEVAL",
            "content": "Rostro subido como referencia iluminando un manuscrito con oro real. Luz de vela individual. Biometría de devoción artística absoluta."
        },
        {
            "id": "bocetos_69",
            "number": 69,
            "style": "Bocetos",
            "title": "EL MAESTRO DEL PINCEL DIGITAL",
            "content": "Rostro subido como referencia en una interfaz de dibujo 3D holográfica. Biometría de creador de mundos. Textura de luz y datos. Calidad 8K."
        },
        {
            "id": "bocetos_70",
            "number": 70,
            "style": "Bocetos",
            "title": "RETRATO EN TORMENTA DE ARENA",
            "content": "Partículas de polvo formando el rostro subido como referencia en medio del desierto. Luz de sol filtrada. Biometría de resistencia y naturaleza salvaje."
        },
        {
            "id": "bocetos_71",
            "number": 71,
            "style": "Bocetos",
            "title": "EL BOCETO DE LA PROPORCIÓN ÁUREA",
            "content": "Rostro subido como referencia encajado perfectamente en espirales matemáticas de hilo de plata. Biometría de belleza perfecta y orden divino."
        },
        {
            "id": "bocetos_72",
            "number": 72,
            "style": "Bocetos",
            "title": "DRON DE GRAFITO CIBER",
            "content": "Dibujo de un dron con rostro subido como referencia como piloto. Luz de sensores rojos neón. Textura de metal y dibujo a mano alzada. Biometría de mando."
        },
        {
            "id": "bocetos_73",
            "number": 73,
            "style": "Bocetos",
            "title": "EL ESPEJO DE TINTA",
            "content": "Rostro subido como referencia reflejado en un charco de tinta negra en el suelo. Luz de luna. Biometría facial de introspección y arte oscuro."
        },
        {
            "id": "bocetos_74",
            "number": 74,
            "style": "Bocetos",
            "title": "PASIÓN ROJA ABSTRACTA",
            "content": "Trazos de sangre o pintura roja intensa. Rostro subido como referencia con grito de guerra artístico. Biometría de emoción cruda y poder vital."
        },
        {
            "id": "bocetos_75",
            "number": 75,
            "style": "Bocetos",
            "title": "EL PLANO DEL RELOJERO",
            "content": "Rostro subido como referencia entre engranajes de latón diminutos dibujados a pluma. Luz de lupa de aumento. Biometría de precisión microscópica."
        },
        {
            "id": "bocetos_76",
            "number": 76,
            "style": "Bocetos",
            "title": "LLUVIA DE ACUARELA NEÓN",
            "content": "Gotas de acuarela brillante cayendo sobre el rostro subido como referencia. Biometría facial de éxtasis cromático y luz 8K. Calidad cinematográfica."
        },
        {
            "id": "bocetos_77",
            "number": 77,
            "style": "Bocetos",
            "title": "LA TABLILLA DE PIEDRA",
            "content": "Rostro subido como referencia grabado en granito con martillo y cincel. Biometría de permanencia eterna y fuerza antigua. Textura de roca PBR."
        },
        {
            "id": "bocetos_78",
            "number": 78,
            "style": "Bocetos",
            "title": "EL FANTASMA EN EL LIENZO",
            "content": "Rostro subido como referencia asomando tras capas de pintura blanca descascarillada. Biometría de misterio y tiempo olvidado. Calidad 8K."
        },
        {
            "id": "bocetos_79",
            "number": 79,
            "style": "Bocetos",
            "title": "BOCETO DE ROSA MECÁNICA",
            "content": "Flor de metal con rostro subido como referencia en el centro. Dibujo en papel técnico azul. Biometría de belleza industrial y diseño preciso."
        },
        {
            "id": "bocetos_80",
            "number": 80,
            "style": "Bocetos",
            "title": "EL ÚLTIMO ARTISTA",
            "content": "Rostro subido como referencia pintando el final del mundo con pinceles de fuego. Luz de atardecer cósmico. Biometría de genio y destrucción creativa."
        },
        {
            "id": "bocetos_81",
            "number": 81,
            "style": "Bocetos",
            "title": "JINETE DE DRAGÓN EN AGUADA DE TINTA",
            "content": "Estética Sumi-e épica. Rostro subido como referencia con dragón de humo negro. Biometría de poder místico y honor japonés. Calidad 8K."
        },
        {
            "id": "bocetos_82",
            "number": 82,
            "style": "Bocetos",
            "title": "OBRA MAESTRA EN ÓLEO DIGITAL",
            "content": "Simulación fotorrealista de capas de aceite. Rostro subido como referencia con luz lateral dramática. Biometría facial de éxito artístico supremo."
        },
        {
            "id": "bocetos_83",
            "number": 83,
            "style": "Bocetos",
            "title": "EL CÍRCULO DEL ALQUIMISTA",
            "content": "Rostro subido como referencia rodeado de fuego y símbolos en el suelo. Biometría de poder oculto y transmutación de alma. Luz de 8K extrema."
        },
        {
            "id": "bocetos_84",
            "number": 84,
            "style": "Bocetos",
            "title": "CABALLERO MEDIEVAL EN TIZA",
            "content": "Dibujo rápido en pared de piedra de castillo. Rostro subido como referencia con casco. Biometría de honor rústico. Textura de roca y tiza real."
        },
        {
            "id": "bocetos_85",
            "number": 85,
            "style": "Bocetos",
            "title": "EL CIBER-PLANO",
            "content": "Rostro subido como referencia descompuesto en líneas de láser azul 8K. Biometría de construcción de androide perfecto. Calidad técnica Masterpiece."
        },
        {
            "id": "bocetos_86",
            "number": 86,
            "style": "Bocetos",
            "title": "ARTE DE TATUAJE POST-APOCALÍPTICO",
            "content": "Rostro subido como referencia como tatuaje en la espalda de un guerrero. Biometría facial de leyenda y tinta sobre piel sucia. Textura de piel PBR."
        },
        {
            "id": "bocetos_87",
            "number": 87,
            "style": "Bocetos",
            "title": "BOCETO DE LA LLAVE DE ORO",
            "content": "Llave antigua dibujada con pan de oro con rostro subido como referencia en el mango. Biometría de secreto y poder. Luz de 8K fotorrealista."
        },
        {
            "id": "bocetos_88",
            "number": 88,
            "style": "Bocetos",
            "title": "ESPÍRITU DEL VIENTO ABSTRACTO",
            "content": "Líneas de aire y luz formando el rostro subido como referencia. Biometría de libertad total y arte invisible hecho visible. Calidad de galería."
        },
        {
            "id": "bocetos_89",
            "number": 89,
            "style": "Bocetos",
            "title": "LA REVELACIÓN DEL LIENZO FINAL",
            "content": "Rostro subido como referencia rompiendo el papel desde dentro hacia el mundo real. Biometría facial de triunfo absoluto y renacimiento artístico."
        },
        {
            "id": "bocetos_90",
            "number": 90,
            "style": "Bocetos",
            "title": "EL ARTISTA DIVINO",
            "content": "La mano de Dios dibujando el rostro subido como referencia con un lápiz de estrellas. Luz cósmica infinita. Biometría facial de gloria eterna. Calidad definitiva."
        },
        {
            "id": "bocetos_91",
            "number": 91,
            "style": "Bocetos",
            "title": "BORRADOR DE ALMA MECÁNICA",
            "content": "Engranajes y circuitos dibujados en el pecho de un rostro subido como referencia. Biometría facial de humanidad técnica. Calidad 8K macroscópica."
        },
        {
            "id": "bocetos_92",
            "number": 92,
            "style": "Bocetos",
            "title": "PORTAL DE TINTA HYPER",
            "content": "Vórtice de tinta china negra absorbiendo al rostro subido como referencia. Luz de neón púrpura desde el centro. Biometría de asombro y peligro artístico."
        },
        {
            "id": "bocetos_93",
            "number": 93,
            "style": "Bocetos",
            "title": "EL BOCETO DEL REY MEDIEVAL",
            "content": "Dibujo de un rey con rostro subido como referencia en un pergamino con sangre real. Biometría de mando ancestral y tragedia shakesperiana."
        },
        {
            "id": "bocetos_94",
            "number": 94,
            "style": "Bocetos",
            "title": "EL ÚLTIMO BOCETO GHIBLI",
            "content": "Rostro subido como referencia dibujado por Miyazaki en su mesa de trabajo. Luz de mañana en el estudio de animación. Biometría facial de paz y legado eterno."
        },
        {
            "id": "bocetos_95",
            "number": 95,
            "style": "Bocetos",
            "title": "PINTURA DE FUEGO ABSTRACTA",
            "content": "Trazos de llamas reales dibujando el rostro subido como referencia. Luz de 10000K. Biometría de destrucción pura y renacimiento fénix."
        },
        {
            "id": "bocetos_96",
            "number": 96,
            "style": "Bocetos",
            "title": "EL ARQUITECTO DEL CIELO",
            "content": "Planos de ciudades de nubes con el rostro subido como referencia como diseño central. Luz divina. Biometría de genio celestial supremo. Calidad definitiva."
        },
        {
            "id": "bocetos_97",
            "number": 97,
            "style": "Bocetos",
            "title": "TIZA HIPER-REALISTA",
            "content": "Rostro subido como referencia dibujado en el asfalto mojado de la calle tras la lluvia. Reflejos de luces de ciudad. Biometría de arte urbano efímero 8K."
        },
        {
            "id": "bocetos_98",
            "number": 98,
            "style": "Bocetos",
            "title": "EL RETRATO DE ORO FINAL",
            "content": "Rostro subido como referencia cubierto por pintura de oro líquido que gotea. Luz de estudio 8K. Biometría de riqueza y estatus divino absoluto."
        },
        {
            "id": "bocetos_99",
            "number": 99,
            "style": "Bocetos",
            "title": "EL VIAJE INFINITO DEL ARTISTA",
            "content": "Rostro subido como referencia caminando por un lienzo infinito hacia un horizonte de luz blanca. Biometría de paz y éxito artístico eterno."
        },
        {
            "id": "bocetos_100",
            "number": 100,
            "style": "Bocetos",
            "title": "EL RENACIMIENTO ARTÍSTICO DEFINITIVO",
            "content": "Rostro subido como referencia emergiendo de una explosión de todos los medios artísticos: óleo, tinta, carbón y luz. Calidad definitiva Hyper-Ultimate 8K. Biometría facial de gloria eterna y éxito total."
        }
    ],
    "TERROR PSICOLÓGICO": [
        {
            "id": "terror_psicologico_1",
            "number": 1,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN EL PASILLO",
            "content": "Primer plano extremo capturado con Arri Alexa 35. Personaje con rostro subido como referencia con biometría de terror: pupilas dilatadas al límite, micro-sudor frío en el labio superior y poros de la piel marcados. Se encuentra en un pasillo infinito con paredes de papel tapiz descascarado (textura PBR). Iluminación de bajo perfil, sombras profundas que ocultan la mitad del rostro. Claustrofobia pura en 8K."
        },
        {
            "id": "terror_psicologico_2",
            "number": 2,
            "style": "Horror Psicológico",
            "title": "LOS OJOS EN LA GRIETA",
            "content": "Plano medio con lente macro Zeiss 100mm. Rostro subido como referencia mirando a través de una grieta en una puerta de madera vieja (PBR). Luz lateral muy fuerte que resalta solo un ojo con detalle microscópico en el iris y venas subdérmicas. Atmósfera de suspenso absoluto, grano de película fino y profundidad de campo quirúrgica."
        },
        {
            "id": "terror_psicologico_3",
            "number": 3,
            "style": "Horror Psicológico",
            "title": "EL REFLEJO DISTORSIONADO",
            "content": "Retrato maestro con Sony Venice 2. Personaje con rostro subido como referencia reflejado en un espejo agrietado y sucio (Ray-tracing). La distorsión en el cristal crea una sensación de gemelo maligno. Iluminación tipo \"Noir\" con negros profundos y una luz puntual en la mirada. Biometría facial con expresión de locura sutil."
        },
        {
            "id": "terror_psicologico_4",
            "number": 4,
            "style": "Horror Psicológico",
            "title": "LA SOMBRA DETRÁS DE TI",
            "content": "Plano americano capturado con Arri Alexa LF. El personaje con rostro subido como referencia está en el centro, perfectamente nítido, mientras una sombra humanoide se perfila en la niebla volumétrica al fondo. Luz cenital de hospital frío 6500K palpitante. Textura de ropa de algodón viejo y biometría de escalofrío visible en el cuello."
        },
        {
            "id": "terror_psicologico_5",
            "number": 5,
            "style": "Horror Psicológico",
            "title": "EL SÓTANO SIN FIN",
            "content": "Vista desde arriba con lente ultra-angular 14mm. Personaje con rostro subido como referencia descendiendo por escaleras de madera podrida (PBR). Luz de linterna parpadeante proyectando sombras móviles erráticas. Claustrofobia extrema, techo bajo y tuberías con óxido realista. Calidad RAW cinematográfica."
        },
        {
            "id": "terror_psicologico_6",
            "number": 6,
            "style": "Horror Psicológico",
            "title": "LA CARA EN LA OSCURIDAD",
            "content": "Hombre con rostro subido como referencia emergiendo de la oscuridad total. Solo se iluminan los pómulos y la frente con luz roja tenue. Biometría facial con músculos en tensión y mirada fija. Captura con Arri Alexa 35, rango dinámico extremo en las sombras. Textura de piel mate sin brillo."
        },
        {
            "id": "terror_psicologico_7",
            "number": 7,
            "style": "Horror Psicológico",
            "title": "EL RELOJ DEL TIEMPO MUERTO",
            "content": "Primer plano de manos sosteniendo un reloj antiguo, rostro subido como referencia desenfocado al fondo. Luz de vela individual con parpadeo realista. Atmósfera cargada de polvo dinámico en el haz de luz. Biometría de anciano en las manos: pecas, venas y piel de pergamino. Estética de horror temporal."
        },
        {
            "id": "terror_psicologico_8",
            "number": 8,
            "style": "Horror Psicológico",
            "title": "EL GRITO SILENCIOSO",
            "content": "Macro de la boca y nariz de un personaje con rostro subido como referencia. La piel está estirada por la tensión, poros dilatados y saliva realista en los labios. Iluminación lateral que acentúa las arrugas de expresión del terror. Fondo negro puro, nitidez 8K absoluta. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_9",
            "number": 9,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS RECUERDOS",
            "content": "Personaje con rostro subido como referencia rodeado de fotos antiguas que flotan. Iluminación onírica pero perturbadora con tonos sepia y sombras largas. Biometría facial de confusión y llanto seco. Textura de papel envejecido y polvo volumétrico. Óptica Zeiss para un look vintage pero ultra-nítido."
        },
        {
            "id": "terror_psicologico_10",
            "number": 10,
            "style": "Horror Psicológico",
            "title": "EL ACECHADOR EN LA VENTANA",
            "content": "Plano corto en una noche de lluvia. Rostro subido como referencia contra el cristal, gotas de agua con refracción HDR. Al otro lado, una silueta se adivina en la oscuridad. Luz de rayo momentánea resaltando el pánico en los ojos. Calidad IMAX, profundidad de color de 12 bits."
        },
        {
            "id": "terror_psicologico_11",
            "number": 11,
            "style": "Horror Psicológico",
            "title": "LA PUERTA QUE NO DEBERÍAS ABRIR",
            "content": "Primer plano de pomo de puerta de latón oxidado (PBR), rostro subido como referencia en el reflejo deformado del metal. Luz fría que se filtra por debajo de la puerta. Biometría en los dedos: temblor visible y uñas sucias. Estética de horror doméstico claustrofóbico."
        },
        {
            "id": "terror_psicologico_12",
            "number": 12,
            "style": "Horror Psicológico",
            "title": "EL SUDOR DEL MIEDO",
            "content": "Macro extremo de la sien de un personaje con rostro subido como referencia. Gotas de sudor frío corriendo por la piel, vello facial fino con humedad. Iluminación de alto contraste que resalta la textura irregular de la piel bajo estrés. Fondo de sombras abstractas. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_13",
            "number": 13,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LAS LÁMPARAS ROTAS",
            "content": "Luz estroboscópica de una bombilla colgante. Personaje con rostro subido como referencia caminando en el intervalo de oscuridad. Sombras dinámicas que cambian de posición. Paredes con textura de cemento húmedo y moho (PBR). Biometría facial de desorientación."
        },
        {
            "id": "terror_psicologico_14",
            "number": 14,
            "style": "Horror Psicológico",
            "title": "EL SUEÑO DE LA RAZÓN",
            "content": "Retrato surrealista. Personaje con rostro subido como referencia con múltiples ojos brotando de la piel (Composición digital impecable). Iluminación suave de pesadilla, tonos azulados y grises. Textura de piel translúcida con biometría de otro mundo. Red V-Raptor XL en 8K."
        },
        {
            "id": "terror_psicologico_15",
            "number": 15,
            "style": "Horror Psicológico",
            "title": "EL LABERINTO MENTAL",
            "content": "Plano general de un personaje con rostro subido como referencia atrapado en una red de hilos de seda blanca en una habitación negra. Luz puntual blanca que resalta la fragilidad de su expresión facial. Biometría: venas temporales hinchadas por la presión psicológica."
        },
        {
            "id": "terror_psicologico_16",
            "number": 16,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO DE LA PARED",
            "content": "Oído pegado a la pared, rostro subido como referencia de perfil. Iluminación lateral dura que resalta la oreja y la mejilla. Textura de yeso agrietado y pintura vieja. Ambiente sonoro visual: partículas de polvo vibrando. Nitidez absoluta en los poros. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_17",
            "number": 17,
            "style": "Horror Psicológico",
            "title": "EL INTRUSO EN EL ESPEJO",
            "content": "Personaje con rostro subido como referencia lavándose la cara. Al levantar la vista al espejo (Ray-tracing), su reflejo no se mueve. Luz de baño fría 5600K con sombras bajo los ojos. Biometría de shock facial: boca ligeramente abierta y ojos fijos."
        },
        {
            "id": "terror_psicologico_18",
            "number": 18,
            "style": "Horror Psicológico",
            "title": "LA CLAUSTROFOBIA DEL ARMARIO",
            "content": "Vista desde el interior de un armario oscuro. Rendijas de luz golpeando el rostro subido como referencia. Polvo flotando en los rayos de luz. Ropa vieja (Textura de lana y lino PBR) amontonada. Biometría facial de falta de aire y terror contenido."
        },
        {
            "id": "terror_psicologico_19",
            "number": 19,
            "style": "Horror Psicológico",
            "title": "EL ÚLTIMO ALIENTO",
            "content": "Primer plano de rostro subido como referencia empañando un vidrio frío. El vaho oculta parte de los rasgos. Luz de luna azul pálido que se filtra por la ventana. Biometría: reflejo de terror puro en el brillo acuoso del ojo visible. Arri Alexa 35."
        },
        {
            "id": "terror_psicologico_20",
            "number": 20,
            "style": "Horror Psicológico",
            "title": "EL VACÍO EN LA MIRADA",
            "content": "Retrato frontal absoluto. Personaje con rostro subido como referencia con mirada vacía, pupilas contraídas al mínimo. Iluminación frontal suave pero inquietante. Fondo gris neutro desapareciendo en sombras. Biometría facial con micro-expresiones de trauma. Calidad Masterpiece."
        },
        {
            "id": "terror_psicologico_21",
            "number": 21,
            "style": "Horror Psicológico",
            "title": "SOMBRIAS INTENCIONES",
            "content": "Personaje con rostro subido como referencia en una biblioteca oscura. Sus propias sombras parecen cobrar vida en las paredes. Luz de linterna proyectando una silueta deformada. Biometría: ceño fruncido y labios apretados. Textura de pergamino y madera vieja."
        },
        {
            "id": "terror_psicologico_22",
            "number": 22,
            "style": "Horror Psicológico",
            "title": "LA MANOS QUE ACECHAN",
            "content": "Plano corto de un personaje con rostro subido como referencia durmiendo, manos pálidas emergen de debajo de la cama. Iluminación de luz de luna suave. Biometría de sueño inquieto: cejas moviéndose y respiración agitada. Nitidez extrema en la textura de las sábanas."
        },
        {
            "id": "terror_psicologico_23",
            "number": 23,
            "style": "Horror Psicológico",
            "title": "EL SÓTANO DE LA INFANCIA",
            "content": "Personaje con rostro subido como referencia frente a un juguete viejo y roto (PBR). La luz de una ventana alta crea un haz de luz solitario. Claustrofobia y tristeza en la biometría facial. Textura de polvo de años y telarañas realistas. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_24",
            "number": 24,
            "style": "Horror Psicológico",
            "title": "LA CARA TRAS EL VELO",
            "content": "Rostro subido como referencia cubierto por una gasa fina y húmeda. La tela se adhiere a los rasgos revelando el terror. Iluminación cenital dura. Biometría facial: boca en posición de grito ahogado. Estética de horror artístico y perturbador."
        },
        {
            "id": "terror_psicologico_25",
            "number": 25,
            "style": "Horror Psicológico",
            "title": "EL ASCENSOR ATASCADO",
            "content": "Cámara de seguridad estilo CCTV en blanco y negro. Personaje con rostro subido como referencia en la esquina de un ascensor metálico (Reflejos PBR). Luz de emergencia roja palpitante. Claustrofobia extrema y biometría de pánico. Grano de película de seguridad."
        },
        {
            "id": "terror_psicologico_26",
            "number": 26,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN EL OÍDO",
            "content": "Plano medio de perfil. Rostro subido como referencia mientras una figura invisible parece susurrarle. Los pelos del cuello erizados (Macro detalle). Biometría de escalofrío facial. Iluminación tenebrista con sombras que parecen garras. Arri Alexa 35."
        },
        {
            "id": "terror_psicologico_27",
            "number": 27,
            "style": "Horror Psicológico",
            "title": "LA JAULA DE CRISTAL",
            "content": "Personaje con rostro subido como referencia atrapado tras paredes de cristal que se cierran. Reflejos de manos golpeando el vidrio. Iluminación blanca aséptica y fría. Biometría de desesperación: ojos inyectados en sangre y sudor en la frente. Calidad 8K RAW."
        },
        {
            "id": "terror_psicologico_28",
            "number": 28,
            "style": "Horror Psicológico",
            "title": "EL HOMBRE DEL SOMBRERO",
            "content": "Silueta al final de un pasillo oscuro, rostro subido como referencia en primer plano totalmente aterrado. La sombra solo revela un sombrero de ala ancha. Luz de luna insuficiente. Biometría facial de parálisis por miedo. Textura de papel pintado húmedo."
        },
        {
            "id": "terror_psicologico_29",
            "number": 29,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN ROJA",
            "content": "Iluminación monocromática roja intensa. Personaje con rostro subido como referencia rodeado de muebles cubiertos por sábanas blancas (PBR). Contraste extremo. Biometría: pupilas dilatadas que reflejan el rojo. Estética de horror psicológico abstracto."
        },
        {
            "id": "terror_psicologico_30",
            "number": 30,
            "style": "Horror Psicológico",
            "title": "EL ECO DE LOS PASOS",
            "content": "Primer plano de los pies de un personaje con rostro subido como referencia retrocediendo lentamente en un suelo de baldosas ajedrezadas (PBR). Un rastro de sangre diluida. Luz cenital de hospital militar. Biometría de piernas temblorosas. Calidad IMAX."
        },
        {
            "id": "terror_psicologico_31",
            "number": 31,
            "style": "Horror Psicológico",
            "title": "LA PANTALLA EN BLANCO",
            "content": "Personaje con rostro subido como referencia sentado frente a una televisión antigua con estática. La luz de la estática ilumina su rostro de forma errática. Biometría facial de hipnosis y vacío mental. Reflejos de luz blanca en las pupilas. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_32",
            "number": 32,
            "style": "Horror Psicológico",
            "title": "EL INVITADO NO DESEADO",
            "content": "Cena para uno, un asiento vacío frente al personaje con rostro subido como referencia. Una copa se mueve sola (Física realista). Iluminación de velas con sombras que parecen caras sonrientes. Biometría de incredulidad y terror. Textura de mantel de encaje."
        },
        {
            "id": "terror_psicologico_33",
            "number": 33,
            "style": "Horror Psicológico",
            "title": "LA ESCALERA DE CARACOL",
            "content": "Vista desde el centro del hueco de la escalera. Rostro subido como referencia mirando hacia abajo en caída libre visual. Sensación de vértigo absoluto. Luz de tungsteno cálida pero inquietante. Biometría facial de mareo y miedo a la caída."
        },
        {
            "id": "terror_psicologico_34",
            "number": 34,
            "style": "Horror Psicológico",
            "title": "EL RELOJ DE ARENA DE SANGRE",
            "content": "Macro de un reloj de arena donde cae sangre espesa (Fluid dynamics). Rostro subido como referencia al fondo con expresión de tiempo agotado. Iluminación dramática lateral. Biometría facial de envejecimiento acelerado por estrés. Red V-Raptor."
        },
        {
            "id": "terror_psicologico_35",
            "number": 35,
            "style": "Horror Psicológico",
            "title": "LA SOMBRA EN LA DUCHA",
            "content": "Vapor denso, cortina de baño translúcida. Rostro subido como referencia con ojos cerrados bajo el agua. Una mano se apoya contra el plástico. Luz de baño fría. Biometría: gotas de agua mezcladas con sudor de miedo. Estética Noir."
        },
        {
            "id": "terror_psicologico_36",
            "number": 36,
            "style": "Horror Psicológico",
            "title": "EL PASILLO COMIENDO LA PARED",
            "content": "Efecto surrealista. Las paredes se cierran físicamente sobre el personaje con rostro subido como referencia. Textura de ladrillo y yeso desmoronándose (PBR). Luz cenital parpadeante. Biometría de asfixia y claustrofobia extrema. 8K."
        },
        {
            "id": "terror_psicologico_37",
            "number": 37,
            "style": "Horror Psicológico",
            "title": "EL LLANTO EN LA RADIO",
            "content": "Personaje con rostro subido como referencia junto a radio antigua (Textura de madera y metal PBR). Luz de indicador ámbar iluminando su cara de cerca. Biometría facial de escucha obsesiva y pavor. Polvo dinámico en la luz."
        },
        {
            "id": "terror_psicologico_38",
            "number": 38,
            "style": "Horror Psicológico",
            "title": "LA CERRADURA SIN LLAVE",
            "content": "Primer plano de ojo en la cerradura. El personaje con rostro subido como referencia mira algo que lo paraliza. Luz que sale del ojo iluminando el párpado. Biometría facial de trauma ocular. Fondo de madera con huellas dactilares."
        },
        {
            "id": "terror_psicologico_39",
            "number": 39,
            "style": "Horror Psicológico",
            "title": "EL ESPEJISMO DEL PASILLO",
            "content": "Múltiples reflejos del personaje con rostro subido como referencia en un pasillo de cristales enfrentados. Cada reflejo tiene una expresión diferente: miedo, odio, tristeza. Iluminación blanca quirúrgica. Sony Venice 2 de alto rango dinámico."
        },
        {
            "id": "terror_psicologico_40",
            "number": 40,
            "style": "Horror Psicológico",
            "title": "EL ABISMO BAJO LA CAMA",
            "content": "Vista desde debajo de la cama. El personaje con rostro subido como referencia asoma la cabeza. La oscuridad debajo es total y parece no tener fondo. Luz de luna que recorta su silueta. Biometría facial de curiosidad fatal."
        },
        {
            "id": "terror_psicologico_41",
            "number": 41,
            "style": "Horror Psicológico",
            "title": "EL HILO ROJO DEL MIEDO",
            "content": "Un hilo de seda rojo atado al dedo del personaje con rostro subido como referencia, desapareciendo en una habitación oscura. Rostro en pánico mirando el hilo tensarse. Iluminación lateral tenebrosa. Textura de piel de gallina nítida en los brazos."
        },
        {
            "id": "terror_psicologico_42",
            "number": 42,
            "style": "Horror Psicológico",
            "title": "EL ARMARIO DE LAS CARAS",
            "content": "Rostros de máscaras de porcelana blanca en un estante infinito, el personaje con rostro subido como referencia es uno de ellos. Iluminación de museo abandonado. Biometría de estatua: ojos que parpadean sutilmente. Calidad RAW 8K."
        },
        {
            "id": "terror_psicologico_43",
            "number": 43,
            "style": "Horror Psicológico",
            "title": "LA LLUVIA DE CENIZA",
            "content": "Claustrofobia en exterior. Ceniza volcánica cayendo densamente, personaje con rostro subido como referencia con máscara de gas vieja (PBR). Luz naranja de fuego lejano. Biometría facial tras el cristal: pánico y asfixia. Estética post-apocalíptica de horror."
        },
        {
            "id": "terror_psicologico_44",
            "number": 44,
            "style": "Horror Psicológico",
            "title": "EL ÚLTIMO TÉ",
            "content": "Personaje con rostro subido como referencia en una mesa de té, frente a él un esqueleto vestido de gala (PBR bones). Luz de candelabro cayendo. Biometría de locura maníaca: sonrisa forzada y ojos llorosos. Textura de porcelana fina y polvo."
        },
        {
            "id": "terror_psicologico_45",
            "number": 45,
            "style": "Horror Psicológico",
            "title": "EL SÓTANO INUNDADO",
            "content": "Agua negra hasta la cintura, personaje con rostro subido como referencia con linterna enfocando algo bajo la superficie (Caustics). Reflejos de pánico en el agua. Biometría facial de frío y miedo. Sony Venice 2 con excelente detalle en sombras."
        },
        {
            "id": "terror_psicologico_46",
            "number": 46,
            "style": "Horror Psicológico",
            "title": "LA PUERTA DEL INBIERNO",
            "content": "Puerta de hierro que se congela instantáneamente al tacto. Personaje con rostro subido como referencia con mano pegada al hielo (Textura de cristalización PBR). Biometría de dolor por congelación. Luz azul gélida 10000K. Calidad 12-bit color."
        },
        {
            "id": "terror_psicologico_47",
            "number": 47,
            "style": "Horror Psicológico",
            "title": "EL ECO DEL PASADO",
            "content": "Rostro subido como referencia mirando por un ventanal roto. Al otro lado, se ve a sí mismo de niño. Iluminación de atardecer melancólico pero terrorífico. Sombras de árboles que parecen dedos. Biometría facial de shock psicológico. Óptica Zeiss."
        },
        {
            "id": "terror_psicologico_48",
            "number": 48,
            "style": "Horror Psicológico",
            "title": "EL ALMACÉN DE MANIQUÍES",
            "content": "Cientos de maniquíes idénticos al personaje con rostro subido como referencia. Él está en medio, camuflado. Luz de neón parpadeante blanca. Biometría de inmovilidad absoluta pero con sudor perlando la frente. Estética de terror de centros comerciales."
        },
        {
            "id": "terror_psicologico_49",
            "number": 49,
            "style": "Horror Psicológico",
            "title": "LA CAJA DE MÚSICA",
            "content": "Primer plano de bailarina de caja de música (Esmalte PBR), rostro subido como referencia al fondo desenfocado con expresión aterrada. La música parece deformar la realidad. Iluminación cálida parpadeante. Biometría: pupilas vibrando rítmicamente."
        },
        {
            "id": "terror_psicologico_50",
            "number": 50,
            "style": "Horror Psicológico",
            "title": "LA MIRADA DEL ABISMO",
            "content": "Retrato extremo del personaje con rostro subido como referencia. Un ojo es humano, el otro es un agujero negro infinito. Iluminación dramática partida. Biometría: poros de la piel ultra-definidos y vello facial detallado. Calidad Arri Alexa 35 definitiva."
        },
        {
            "id": "terror_psicologico_51",
            "number": 51,
            "style": "Horror Psicológico",
            "title": "EL LABERINTO DE PAPEL",
            "content": "Habitación llena de periódicos colgados del techo (Textura PBR). Personaje con rostro subido como referencia moviéndose entre ellos. Luz puntual que crea sombras de letras en su piel. Claustrofobia y biometría de locura investigadora. Red V-Raptor."
        },
        {
            "id": "terror_psicologico_52",
            "number": 52,
            "style": "Horror Psicológico",
            "title": "EL PASILLO QUE RESPIRA",
            "content": "Las paredes del pasillo se inflan y desinflan rítmicamente. Personaje con rostro subido como referencia con la mano apoyada en la pared pulsante. Luz orgánica roja suave. Biometría facial de asco y terror físico. Nitidez microscópica en la textura de la pared."
        },
        {
            "id": "terror_psicologico_53",
            "number": 53,
            "style": "Horror Psicológico",
            "title": "LA CENA DE LAS SOMBRAS",
            "content": "Mesa larga, personaje con rostro subido como referencia en un extremo, sombras sentadas en los demás asientos proyectadas en la pared. Luz de velas central. Biometría: manos entrelazadas con fuerza y ojos que no se atreven a mirar. Calidad cinematográfica Noir."
        },
        {
            "id": "terror_psicologico_54",
            "number": 54,
            "style": "Horror Psicológico",
            "title": "EL RELOJ SIN AGUJAS",
            "content": "Rostro subido como referencia frente a un reloj de pared gigante de madera PBR. Las agujas han desaparecido. Luz de luna cenital. Biometría facial de desorientación temporal y miedo al infinito. Estética de horror metafísico."
        },
        {
            "id": "terror_psicologico_55",
            "number": 55,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS ESPEJOS",
            "content": "Infinitos reflejos del rostro subido como referencia. En uno de los espejos, su reflejo tiene la boca cosida con hilo negro. Iluminación blanca de laboratorio. Biometría: reflejo de pánico en los ojos nítidos. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_56",
            "number": 56,
            "style": "Horror Psicológico",
            "title": "EL SÓTANO DE LAS MUÑECAS",
            "content": "Personaje con rostro subido como referencia rodeado de muñecas de trapo viejas con botones por ojos (PBR fabric). Una muñeca tiene su mismo rostro. Luz de linterna moribunda. Biometría facial de horror infantil recuperado."
        },
        {
            "id": "terror_psicologico_57",
            "number": 57,
            "style": "Horror Psicológico",
            "title": "LA VOZ EN EL TELÉFONO",
            "content": "Primer plano de auricular de teléfono de baquelita PBR, rostro subido como referencia escuchando con pavor. Luz de neón azul de fondo. Biometría: gota de sudor frío recorriendo la mandíbula. Calidad 8K RAW de Arri Alexa."
        },
        {
            "id": "terror_psicologico_58",
            "number": 58,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LAS MANOS",
            "content": "Manos que salen de las paredes intentando tocar al personaje con rostro subido como referencia mientras corre. Luz estroboscópica de emergencia. Claustrofobia y biometría de esfuerzo muscular. Estética de pesadilla lúcida."
        },
        {
            "id": "terror_psicologico_59",
            "number": 59,
            "style": "Horror Psicológico",
            "title": "LA BIBLIOTECA DEL SILENCIO",
            "content": "Estanterías de libros sin títulos, personaje con rostro subido como referencia abriendo uno en blanco de donde sale humo negro volumétrico. Iluminación de biblioteca antigua con luz de luna. Biometría facial de asombro y miedo místico."
        },
        {
            "id": "terror_psicologico_60",
            "number": 60,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DEL AGUA",
            "content": "Rostro subido como referencia mirando en un charco de aceite negro. El reflejo muestra una versión cadavérica de sí mismo. Luz de luna fría reflejada en el aceite (Anisotropic map). Biometría facial de horror existencial. Zeiss Supreme Prime."
        },
        {
            "id": "terror_psicologico_61",
            "number": 61,
            "style": "Horror Psicológico",
            "title": "LA SOMBRA QUE SE DESPRENDE",
            "content": "Personaje con rostro subido como referencia de pie contra una pared blanca. Su sombra empieza a caminar sola. Iluminación lateral única y dura. Biometría: ojos que siguen a la sombra con terror paralizante. Calidad Masterpiece."
        },
        {
            "id": "terror_psicologico_62",
            "number": 62,
            "style": "Horror Psicológico",
            "title": "EL ASCENSOR AL INFIERNO",
            "content": "Los números del ascensor empiezan a mostrar símbolos extraños. Rostro subido como referencia mirando el panel. Luz roja de sobrecalentamiento. Biometría facial de pánico en espacio cerrado. Textura de metal arañado PBR."
        },
        {
            "id": "terror_psicologico_63",
            "number": 63,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS JUGUETES",
            "content": "Un tren eléctrico gira alrededor del personaje con rostro subido como referencia sentado en el suelo. El tren lleva figuras humanas diminutas gritando. Luz de lámpara infantil proyectando formas grotescas. Biometría de shock psicológico. Red V-Raptor."
        },
        {
            "id": "terror_psicologico_64",
            "number": 64,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN LA ALMOHADA",
            "content": "Rostro subido como referencia sobre almohada de satén PBR, una boca de sombra se forma en la tela junto a su oreja. Iluminación de luz de luna azulada. Biometría de despertar repentino con terror. Nitidez absoluta en las pestañas y poros."
        },
        {
            "id": "terror_psicologico_65",
            "number": 65,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LAS FOTOS",
            "content": "Fotos en la pared que cambian según el personaje con rostro subido como referencia las mira. Muestran sus pecados pasados. Iluminación de pasillo de hotel antiguo con luz amarilla sucia. Biometría facial de culpabilidad y pavor."
        },
        {
            "id": "terror_psicologico_66",
            "number": 66,
            "style": "Horror Psicológico",
            "title": "LA PUERTA AL VACÍO",
            "content": "Abrir una puerta y encontrar el espacio estelar. Rostro subido como referencia en el umbral, iluminado por estrellas binarias y nebulosas. Biometría: reflejo de galaxias en las córneas. Fuerza de succión visible en la ropa. Calidad IMAX 8K."
        },
        {
            "id": "terror_psicologico_67",
            "number": 67,
            "style": "Horror Psicológico",
            "title": "EL REFLEJO EN LA SANGRE",
            "content": "Rostro subido como referencia mirando un charco de sangre en el suelo de mármol PBR. La sangre actúa como un espejo perfecto de su terror. Iluminación dramática cenital. Biometría facial con poros dilatados y micro-expresiones de trauma. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_68",
            "number": 68,
            "style": "Horror Psicológico",
            "title": "EL LABERINTO DE ESPEJOS ROTOS",
            "content": "Caminando entre fragmentos de cristal suspendidos en el aire. Cada fragmento muestra una parte diferente del cuerpo del rostro subido como referencia. Iluminación blanca caleidoscópica. Biometría facial fragmentada visualmente. Nitidez extrema Zeiss."
        },
        {
            "id": "terror_psicologico_69",
            "number": 69,
            "style": "Horror Psicológico",
            "title": "LA SOMBRA DEL ABUELO",
            "content": "Personaje con rostro subido como referencia sentado en un sillón viejo de cuero PBR, la sombra proyectada es de un anciano decrépito. Luz de chimenea parpadeante. Biometría facial de juventud contrastada con la sombra. Estética de horror generacional."
        },
        {
            "id": "terror_psicologico_70",
            "number": 70,
            "style": "Horror Psicológico",
            "title": "EL SÓTANO DE LA LOCURA",
            "content": "Escribiendo en las paredes con los dedos ensangrentados. Rostro subido como referencia con mirada febril. Luz de una única bombilla desnuda proyectando sombras de las letras. Biometría facial de manía extrema. Textura de cemento y sangre seca PBR."
        },
        {
            "id": "terror_psicologico_71",
            "number": 71,
            "style": "Horror Psicológico",
            "title": "LA CARA EN EL HUMO",
            "content": "Humo de cigarrillo volumétrico formando el rostro subido como referencia en el aire. El personaje real observa con horror. Iluminación de bar nocturno con neón rojo. Biometría facial con reflejos de neón y detalle en el humo dinámico. Arri Raw."
        },
        {
            "id": "terror_psicologico_72",
            "number": 72,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LOS RELOJES",
            "content": "Miles de relojes de pulsera (PBR metal) pegados a las paredes, todos marcando la misma hora prohibida. Personaje con rostro subido como referencia en medio. Luz azul de luna. Biometría de terror temporal. Red V-Raptor XL."
        },
        {
            "id": "terror_psicologico_73",
            "number": 73,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DEL ALMA",
            "content": "Rostro subido como referencia frente a un espejo que no refleja su cuerpo, solo su sistema nervioso y órganos (Visualización anatómica artística). Iluminación de rayos X azulada. Biometría de pavor biopsicológico. Calidad cinematográfica técnica."
        },
        {
            "id": "terror_psicologico_74",
            "number": 74,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS GRITOS",
            "content": "Paredes hechas de bocas humanas gritando. Personaje con rostro subido como referencia con las manos en los oídos. Luz blanca parpadeante de pánico. Biometría: cara crispada por el dolor auditivo. Textura de piel y labios PBR detallada."
        },
        {
            "id": "terror_psicologico_75",
            "number": 75,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN LA SOMBRA",
            "content": "Una sombra se desprende de la esquina y rodea el cuello del personaje con rostro subido como referencia. Luz de lamparita de noche ámbar. Biometría de asfixia y terror de dormitorio. Textura de sábanas de seda con arrugas realistas. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_76",
            "number": 76,
            "style": "Horror Psicológico",
            "title": "LA JAULA DE LOS PENSAMIENTOS",
            "content": "Personaje con rostro subido como referencia con cabeza dentro de una jaula de pájaros de hierro PBR. Dentro vuelan polillas negras. Iluminación cenital dura. Biometría facial de atrapamiento mental. Óptica anamórfica Cooke."
        },
        {
            "id": "terror_psicologico_77",
            "number": 77,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LA INFANCIA",
            "content": "Pasillo infinito lleno de peluches viejos (PBR fur) con el rostro subido como referencia. Luz de luz de luna azulada. Biometría facial de regresión traumática. Nitidez 8K absoluta en cada pelusa y poro."
        },
        {
            "id": "terror_psicologico_78",
            "number": 78,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DE LA MUERTE",
            "content": "Reflejo del rostro subido como referencia convirtiéndose en polvo de oro (Particle physics). El personaje real llora lágrimas de oro. Iluminación divina pero terrorífica. Estética de horror gótico-psicológico premium."
        },
        {
            "id": "terror_psicologico_79",
            "number": 79,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS SECRETOS",
            "content": "Miles de sobres cerrados cayendo del techo sobre el personaje con rostro subido como referencia. Uno de ellos está escrito con sangre con su nombre. Luz de tarde melancólica. Biometría facial de anticipación fatal. Red V-Raptor."
        },
        {
            "id": "terror_psicologico_80",
            "number": 80,
            "style": "Horror Psicológico",
            "title": "EL ABISMO DE LA MEMORIA",
            "content": "Rostro subido como referencia hundiéndose en un mar de tinta negra. El rostro es lo único que queda fuera. Iluminación de luna llena reflejada en la tinta. Biometría facial de olvido y miedo al vacío. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_81",
            "number": 81,
            "style": "Horror Psicológico",
            "title": "LA SOMBRA EN EL ÁRBOL",
            "content": "Un árbol seco con una sombra ahorcada que resulta ser la del personaje con rostro subido como referencia. Luz de luna azul pálida. Biometría facial de realización del propio destino. Textura de corteza y piel de gallina nítida."
        },
        {
            "id": "terror_psicologico_82",
            "number": 82,
            "style": "Horror Psicológico",
            "title": "EL SÓTANO DE LAS SOMBRAS",
            "content": "Personaje con rostro subido como referencia iluminando con una antorcha un ejército de sombras que se acercan. Luz naranja parpadeante creando sombras gigantes. Biometría facial de heroísmo desesperado. Arri Alexa 35."
        },
        {
            "id": "terror_psicologico_83",
            "number": 83,
            "style": "Horror Psicológico",
            "title": "LA CARA EN LA PARED",
            "content": "Un rostro subido como referencia emerge lentamente del papel tapiz de una habitación (Deformación de malla realista). El personaje observa su propio rostro saliendo de la pared. Luz cenital parpadeante. Biometría: shock y parálisis."
        },
        {
            "id": "terror_psicologico_84",
            "number": 84,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LA ETERNIDAD",
            "content": "Pasillo de mármol blanco PBR tan brillante que ciega. Rostro subido como referencia caminando hacia una puerta negra al fondo. Iluminación divina sobre-expuesta. Biometría: ojos entrecerrados y mano protegiéndose de la luz."
        },
        {
            "id": "terror_psicologico_85",
            "number": 85,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DEL PASADO",
            "content": "Rostro subido como referencia frente a un espejo que muestra su entierro. Flores marchitas PBR en primer plano. Luz de cementerio melancólica. Biometría facial de aceptación del fin. Óptica Zeiss f/1.4."
        },
        {
            "id": "terror_psicologico_86",
            "number": 86,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS RELOJES DE AGUA",
            "content": "Goteo incesante rítmico. Rostro subido como referencia en una habitación llena de clepsidras de cristal (Refractive indices). Biometría de locura obsesiva por el goteo. Luz azulada de laboratorio clandestino. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_77",
            "number": 87,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN EL VIENTO",
            "content": "Campo solitario, viento agitando el pelo del rostro subido como referencia. Las briznas de hierba parecen formar palabras. Luz de atardecer de tormenta 2000K. Biometría facial de escucha de voces inexistentes. Calidad RAW 8K."
        },
        {
            "id": "terror_psicologico_88",
            "number": 88,
            "style": "Horror Psicológico",
            "title": "LA JAULA DEL ALMA",
            "content": "Personaje con rostro subido como referencia con costillas que parecen barrotes de una jaula dorada PBR. Dentro late un corazón de cristal. Iluminación divina lateral. Biometría de dolor y belleza mística. Arri Raw."
        },
        {
            "id": "terror_psicologico_89",
            "number": 89,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LOS SUEÑOS ROTOS",
            "content": "Suelo lleno de bombillas rotas que el personaje con rostro subido como referencia pisa descalzo. Luz de luna desde ventanas altas. Biometría facial de dolor físico y psicológico. Nitidez extrema en los cristales y la piel."
        },
        {
            "id": "terror_psicologico_90",
            "number": 90,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DE LA VERDAD",
            "content": "Rostro subido como referencia frente a un espejo que muestra lo que realmente piensa (Visualización de pensamientos como formas abstractas negras). Iluminación de bajo perfil. Biometría: cara de horror ante la propia mente. Red V-Raptor."
        },
        {
            "id": "terror_psicologico_91",
            "number": 91,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS LIBROS QUE HABLAN",
            "content": "Libros que se abren y cierran solos emitiendo gritos. Rostro subido como referencia en el centro, tapándose los oídos. Luz de biblioteca embrujada. Biometría facial de colapso nervioso. Textura de cuero y papel viejo."
        },
        {
            "id": "terror_psicologico_92",
            "number": 92,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN EL ESPEJO",
            "content": "Rostro subido como referencia acercando el oído al espejo. Su reflejo le está susurrando algo al oído. Luz lateral dura. Biometría: rostro de incredulidad y miedo absoluto. Calidad cinematográfica Noir premium."
        },
        {
            "id": "terror_psicologico_93",
            "number": 93,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LAS SOMBRAS CHINAS",
            "content": "Sombras de manos gigantes haciendo formas de animales monstruosos en las paredes. Personaje con rostro subido como referencia atrapado entre ellas. Luz de vela única. Biometría facial de terror infantil proyectado. Sony Venice 2."
        },
        {
            "id": "terror_psicologico_94",
            "number": 94,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DEL FUTURO",
            "content": "Rostro subido como referencia mirando un espejo que muestra su rostro 50 años después pero conservando el terror actual. Iluminación de atardecer dorado. Biometría de vejez realista con biometría de miedo juvenil mezclada."
        },
        {
            "id": "terror_psicologico_95",
            "number": 95,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LOS SUSPIROS",
            "content": "Habitación vacía, personaje con rostro subido como referencia siente suspiros en el cuello (Partículas de aire visibles). Luz de luna filtrada. Biometría: vello de los brazos erizado y mirada alerta. Estética de horror invisible."
        },
        {
            "id": "terror_psicologico_96",
            "number": 96,
            "style": "Horror Psicológico",
            "title": "EL PASILLO DE LOS PASOS PERDIDOS",
            "content": "Huellas de pies descalzos de sangre que aparecen solas dirigiéndose al personaje con rostro subido como referencia. Luz de pasillo de hospital. Biometría facial de parálisis y pánico ocular. Calidad 8K RAW."
        },
        {
            "id": "terror_psicologico_97",
            "number": 97,
            "style": "Horror Psicológico",
            "title": "EL ESPEJO DE LA REALIDAD PARTIDA",
            "content": "Rostro subido como referencia frente a un espejo roto en dos partes, una muestra el presente, la otra un pasado traumático. Iluminación dual (Cálida/Fría). Biometría facial de disociación. Óptica Zeiss f/1.2."
        },
        {
            "id": "terror_psicologico_98",
            "number": 98,
            "style": "Horror Psicológico",
            "title": "LA HABITACIÓN DE LAS VOCES",
            "content": "Personaje con rostro subido como referencia rodeado de cientos de radios antiguas (PBR wood) todas sintonizando la misma voz aterradora. Luz de diales rojos parpadeantes. Biometría de colapso mental. Red V-Raptor XL."
        },
        {
            "id": "terror_psicologico_99",
            "number": 99,
            "style": "Horror Psicológico",
            "title": "EL SUSURRO EN LA OSCURIDAD TOTAL",
            "content": "Oscuridad absoluta, solo se iluminan los ojos del personaje con rostro subido como referencia y una boca de sombra que le susurra. Biometría ocular extrema: reflejo de la sombra en la pupila. Profundidad de negro puro. Arri Alexa 35."
        },
        {
            "id": "terror_psicologico_100",
            "number": 100,
            "style": "Horror Psicológico",
            "title": "EL FIN DE LA MENTE",
            "content": "Retrato épico final. El rostro del personaje con rostro subido como referencia se abre como un libro mostrando un universo de pesadillas. Iluminación divina y demoníaca mezclada. Biometría facial de trascendencia del horror. Calidad definitiva IMAX 8K."
        }
    ],
    "GÓTICO CLÁSICO": [
        {
            "id": "gotico_clasico_1",
            "number": 101,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LA NIEBLA",
            "content": "Plano general capturado con Sony Venice 2. Personaje con rostro subido como referencia frente a una tumba de mármol erosionada (PBR). Niebla espesa volumétrica que oculta las ruinas de un castillo al fondo. Iluminación de luna plateada 4000K con sombras alargadas. Biometría facial con palidez aristocrática y ojos penetrantes. Estética gótica pura en 8K."
        },
        {
            "id": "gotico_clasico_2",
            "number": 102,
            "style": "Gótico Clásico",
            "title": "EL CÁLIZ DE SANGRE",
            "content": "Primer plano de mano con anillo de rubí (PBR metal) sosteniendo un cáliz de plata. Rostro subido como referencia al fondo con una gota de sangre roja vibrante en el labio. Luz de velas lateral (Warm glow). Textura de terciopelo negro y encaje gótico. Calidad cinematográfica de alta gama, óptica Zeiss f/1.4."
        },
        {
            "id": "gotico_clasico_3",
            "number": 103,
            "style": "Gótico Clásico",
            "title": "LA NOVIA CADÁVER",
            "content": "Retrato épico de personaje con rostro subido como referencia con velo de encaje roto (PBR fabric translucency). Labios negros y piel traslúcida con venas visibles. Iluminación Chiaroscuro dramática en un mausoleo. Pétalos de rosa rojos marchitos cayendo. Captura con Arri Alexa 35, rango dinámico extremo."
        },
        {
            "id": "gotico_clasico_4",
            "number": 104,
            "style": "Gótico Clásico",
            "title": "LAS RUINAS DEL ALMA",
            "content": "Vista desde un arco gótico en ruinas. Rostro subido como referencia mirando al cielo nublado con relámpagos que perfilan su silueta. Iluminación de alto contraste: blancos eléctricos y negros profundos. Textura de piedra con musgo y humedad realista. Biometría facial de melancolía eterna."
        },
        {
            "id": "gotico_clasico_5",
            "number": 105,
            "style": "Gótico Clásico",
            "title": "EL RELICARIO PROHIBIDO",
            "content": "Macro de un relicario de oro viejo con el rostro subido como referencia dentro. Manos con guantes de seda negra (PBR) abriéndolo. Luz de luna azulada entrando por una vidriera rota. Polvo suspendido en el haz de luz. Estética de misterio gótico refinado."
        },
        {
            "id": "gotico_clasico_6",
            "number": 106,
            "style": "Gótico Clásico",
            "title": "SOMBRAS EN EL CASTILLO",
            "content": "Personaje con rostro subido como referencia subiendo escaleras de caracol infinitas. La sombra de una gárgola proyectada sobre él. Luz de antorcha que crea un resplandor naranja vibrante. Biometría de determinación y pavor. Textura de hierro forjado y piedra fría."
        },
        {
            "id": "gotico_clasico_7",
            "number": 107,
            "style": "Gótico Clásico",
            "title": "EL ÚLTIMO SUSPIRO DEL REY",
            "content": "Anciano con rostro subido como referencia en un trono de hueso y plata PBR. Corona de espinas tallada. Luz cenital única que resalta las arrugas y la fatiga heroica. Capa de terciopelo carmesí con bordados de oro marchito. Calidad fotográfica Masterpiece."
        },
        {
            "id": "gotico_clasico_8",
            "number": 108,
            "style": "Gótico Clásico",
            "title": "LA DAMA DEL LAGO DE NIEBLA",
            "content": "Mujer con rostro subido como referencia emergiendo de agua negra estancada. Niebla que se confunde con su pelo blanco. Iluminación plateada de noche muerta. Biometría facial etérea: ojos sin pupila visibles bajo el agua. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_9",
            "number": 109,
            "style": "Gótico Clásico",
            "title": "EL RITUAL DE LA LUNA ROJA",
            "content": "Personaje con rostro subido como referencia en círculo de piedra, bajo un eclipse de luna carmesí. Luz roja saturada que tiñe su piel y vestiduras blancas. Biometría facial de trance místico. Detalle microscópico en los poros y sudor ritual. Calidad RAW 8K."
        },
        {
            "id": "gotico_clasico_10",
            "number": 110,
            "style": "Gótico Clásico",
            "title": "EL CUERVO EN EL HOMBRO",
            "content": "Retrato de perfil, rostro subido como referencia con un cuervo real sobre el hombro (Plumaje iridiscente PBR). Fondo de bosque de árboles muertos en la niebla. Iluminación suave de amanecer gris. Biometría: reflejo del cuervo en la pupila del personaje. Calidad cinematográfica."
        },
        {
            "id": "gotico_clasico_11",
            "number": 111,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL ALMA OSCURA",
            "content": "Rostro subido como referencia frente a un espejo gótico con marco de calaveras talladas en madera negra (PBR). El reflejo muestra su esqueleto interno bajo la piel traslúcida. Luz de luna filtrada por cortinas de seda. Biometría de horror aristocrático."
        },
        {
            "id": "gotico_clasico_12",
            "number": 112,
            "style": "Gótico Clásico",
            "title": "LÁGRIMAS DE RUBÍ",
            "content": "Macro extremo del ojo del personaje con rostro subido como referencia llorando una lágrima de sangre negra espesa. Iluminación de vela única. Detalle microscópico en las pestañas y la textura del iris. Fondo negro puro. Estética gótica extrema."
        },
        {
            "id": "gotico_clasico_13",
            "number": 113,
            "style": "Gótico Clásico",
            "title": "EL MAUSOLEO DE CRISTAL",
            "content": "Personaje con rostro subido como referencia dentro de un ataúd de cristal gótico con reflejos Ray-tracing. Flores de loto negras PBR rodeándolo. Luz de luna cian que penetra el cristal. Biometría facial de paz eterna pero inquietante."
        },
        {
            "id": "gotico_clasico_14",
            "number": 114,
            "style": "Gótico Clásico",
            "title": "SOMBRAS DE ALABASTRO",
            "content": "Personaje con rostro subido como referencia junto a una estatua de ángel llorando sangre (Textura de piedra erosionada PBR). Iluminación de rayo congelado en el tiempo. Biometría facial de tristeza absoluta. Calidad cinematográfica Red V-Raptor."
        },
        {
            "id": "gotico_clasico_15",
            "number": 115,
            "style": "Gótico Clásico",
            "title": "EL VIOLINISTA DE LA NOCHE",
            "content": "Rostro subido como referencia tocando un violín de ébano PBR. Luz de luna que resalta el movimiento de las manos y el polvo en el aire. Biometría facial de concentración maníaca. Fondo de salón de baile abandonado con telarañas realistas."
        },
        {
            "id": "gotico_clasico_16",
            "number": 116,
            "style": "Gótico Clásico",
            "title": "EL BOSQUE DE LAS CRUCES",
            "content": "Cientos de cruces de hierro oxidado PBR en una colina brumosa. Personaje con rostro subido como referencia en el centro con un farol de aceite. Luz naranja vs Luz de luna azul. Biometría de terror solitario. Calidad IMAX 8K."
        },
        {
            "id": "gotico_clasico_17",
            "number": 117,
            "style": "Gótico Clásico",
            "title": "LA CATEDRAL DE SANGRE",
            "content": "Interior de catedral gótica donde las vidrieras muestran escenas de horror en rojo esmeralda. Rostro subido como referencia iluminado por estos colores. Biometría facial con biometría de éxtasis oscuro. Sony Venice 2 de alto rango dinámico."
        },
        {
            "id": "gotico_clasico_18",
            "number": 118,
            "style": "Gótico Clásico",
            "title": "LA REINA DE LAS ESPINAS",
            "content": "Mujer con rostro subido como referencia con corona de espinas vivas que sangran. Vestido de encaje negro PBR con transparencias. Biometría de dolor regio. Iluminación cenital dura de castigo divino. Calidad fotográfica de galería de arte."
        },
        {
            "id": "gotico_clasico_19",
            "number": 119,
            "style": "Gótico Clásico",
            "title": "EL ÚLTIMO CABALLERO GÓTICO",
            "content": "Armadura de placas completa con grabados de demonios (Ray-tracing reflections). Rostro subido como referencia visible a través de la visera rota. Luz de fuego de fondo. Biometría facial de honor herido y cansancio trágico. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_20",
            "number": 120,
            "style": "Gótico Clásico",
            "title": "EL JARDÍN DE LAS ROSAS NEGRAS",
            "content": "Cosechando rosas negras (Textura orgánica PBR) con espinas doradas. Personaje con rostro subido como referencia con dedos sangrando. Niebla baja y luz de eclipse. Biometría facial de melancolía gótica. Nitidez extrema Zeiss 8K."
        },
        {
            "id": "gotico_clasico_21",
            "number": 121,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DEL VAMPIRO",
            "content": "Primer plano extremo de personaje con rostro subido como referencia con caninos alargados sutilmente. Piel blanca mármol PBR. Iluminación de vela lateral que acentúa la sombra de la nariz y los pómulos. Biometría facial depredadora. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_22",
            "number": 122,
            "style": "Gótico Clásico",
            "title": "EL ABANICO DE SEDA NEGRA",
            "content": "Rostro subido como referencia parcialmente oculto por abanico de seda y hueso PBR. Ojos intensos asomando con maquillaje gótico complejo. Luz de baile de máscaras en un castillo. Atmósfera cargada de misterio y nobleza decadente."
        },
        {
            "id": "gotico_clasico_23",
            "number": 123,
            "style": "Gótico Clásico",
            "title": "EL CRIPTA DE LOS ANTEPASADOS",
            "content": "Sosteniendo cráneo de cristal con refracción HDR. Rostro subido como referencia iluminado por la luz que emana del cráneo. Fondo de nichos de piedra húmeda (PBR). Biometría facial de comunicación con el más allá. Calidad Masterpiece."
        },
        {
            "id": "gotico_clasico_24",
            "number": 124,
            "style": "Gótico Clásico",
            "title": "EL BANQUETE DE LA ETERNIDAD",
            "content": "Mesa de banquete gótico con frutas podridas y copas de vino negro. Rostro subido como referencia con ropajes de terciopelo morado. Iluminación de candelabros decadente. Biometría facial de aburrimiento inmortal. Nitidez 8K absoluta."
        },
        {
            "id": "gotico_clasico_25",
            "number": 125,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LOS SUSPIROS",
            "content": "Vista desde el exterior de una torre alta envuelta en relámpagos. Figura con rostro subido como referencia en el balcón. Luz blanca cegadora alterna con sombras negras puras. Biometría facial de soledad y poder oscuro. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_26",
            "number": 126,
            "style": "Gótico Clásico",
            "title": "EL JUGADOR DE AJEDREZ CON LA MUERTE",
            "content": "Piezas de ajedrez de marfil y obsidiana PBR. Rostro subido como referencia concentrado en el movimiento fatal. Luz de chimenea moribunda. Biometría facial de tensión intelectual y pavor. Fondo de tapices góticos polvorientos."
        },
        {
            "id": "gotico_clasico_27",
            "number": 127,
            "style": "Gótico Clásico",
            "title": "LA DAMA DE LA CAMPANA",
            "content": "Rostro subido como referencia bajo una campana gigante de bronce oxidado (PBR). Iluminación de luna a través de rendijas del campanario. Niebla que sube del suelo del castillo. Biometría facial de locura por el sonido del tañido."
        },
        {
            "id": "gotico_clasico_28",
            "number": 128,
            "style": "Gótico Clásico",
            "title": "EL PASILLO DE LAS ARMADURAS VACÍAS",
            "content": "Luz de luna lateral que ilumina una hilera de armaduras que parecen vigilar al personaje con rostro subido como referencia. Biometría facial de paranoia aristocrática. Textura de metal y terciopelo antiguo. Calidad RAW 8K."
        },
        {
            "id": "gotico_clasico_29",
            "number": 129,
            "style": "Gótico Clásico",
            "title": "LA ROSA DE SANGRE EN LA NIEVE",
            "content": "Macro de una rosa roja sobre nieve blanca inmaculada, gotas de sangre fresca. Rostro subido como referencia al fondo con mirada de culpa. Iluminación fría de amanecer 8000K. Biometría facial: lágrimas congeladas en las mejillas. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_30",
            "number": 130,
            "style": "Gótico Clásico",
            "title": "EL CAPILLERO DE LAS CALAVERAS",
            "content": "Habitación decorada íntegramente con huesos humanos (PBR texture mapping). Rostro subido como referencia sentado en el centro con una corona de plata. Iluminación de velas negras. Biometría facial de nihilismo gótico. Nitidez extrema Zeiss."
        },
        {
            "id": "gotico_clasico_31",
            "number": 131,
            "style": "Gótico Clásico",
            "title": "LA ESCALERA AL ABISMO",
            "content": "Vista cenital de escalera de caracol. Personaje con rostro subido como referencia mirando hacia abajo a la niebla que sube. Luz de luna azulada. Biometría: reflejo del vacío en las pupilas. Textura de piedra pulida y hierro forjado."
        },
        {
            "id": "gotico_clasico_32",
            "number": 132,
            "style": "Gótico Clásico",
            "title": "EL VIENTO EN EL CEMENTERIO",
            "content": "Pelo blanco y túnica de seda negra del rostro subido como referencia agitados violentamente. Hojas secas y polvo gótico volando. Iluminación de tormenta eléctrica. Biometría facial de poder elemental contenido. Calidad IMAX 8K."
        },
        {
            "id": "gotico_clasico_33",
            "number": 133,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL TIEMPO MUERTO",
            "content": "Rostro subido como referencia frente a un espejo que muestra el castillo en su esplendor mientras la realidad es una ruina. Iluminación dual (Cálida/Fría). Biometría facial de nostalgia y horror gótico. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_34",
            "number": 134,
            "style": "Gótico Clásico",
            "title": "LÁGRIMAS DE PLATA",
            "content": "Macro extremo de mejilla de rostro subido como referencia con lágrima de plata líquida (Reflectance map). Iluminación de bajo perfil. Biometría: poros de la piel ultra-definidos y vello facial fino. Estética aristocrática decadente."
        },
        {
            "id": "gotico_clasico_35",
            "number": 135,
            "style": "Gótico Clásico",
            "title": "EL BIBLIOTECARIO DE LAS SOMBRAS",
            "content": "Personaje con rostro subido como referencia sosteniendo libro encadenado (PBR metal). Luz de luna filtrada por pergaminos antiguos. Biometría facial de sabiduría maldita. Atmósfera cargada de polvo y misterio gótico. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_36",
            "number": 136,
            "style": "Gótico Clásico",
            "title": "EL TRONO DE ESPINAS",
            "content": "Rostro subido como referencia sentado en un trono de ramas de zarza (Sub-surface scattering). Cada contacto sangra. Iluminación lateral única tipo Rembrandt. Biometría facial de sacrificio regio. Calidad Masterpiece."
        },
        {
            "id": "gotico_clasico_37",
            "number": 137,
            "style": "Gótico Clásico",
            "title": "LA DAMA DE LA NIEBLA ROJA",
            "content": "Niebla teñida de rojo sangre rodeando al personaje con rostro subido como referencia. Vestido de gasa blanca PBR que se vuelve roja al tacto de la niebla. Biometría facial de transformación mística. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_38",
            "number": 138,
            "style": "Gótico Clásico",
            "title": "EL GUARDIÁN DE LA LLAVE GÓTICA",
            "content": "Primer plano de llave de hierro con forma de calavera (PBR). Rostro subido como referencia al fondo desenfocado con mirada de guardián eterno. Luz escasa de mazmorra. Biometría facial de deber inquebrantable."
        },
        {
            "id": "gotico_clasico_39",
            "number": 139,
            "style": "Gótico Clásico",
            "title": "EL JARDÍN DE LAS ESTATUAS MUERTAS",
            "content": "Personaje con rostro subido como referencia caminando entre estatuas de piedra que lloran sangre real (Fluid dynamics). Iluminación de luna llena. Biometría facial de asombro y pavor arquitectónico. Nitidez absoluta 8K."
        },
        {
            "id": "gotico_clasico_40",
            "number": 140,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DEL REY MALDITO",
            "content": "Retrato frontal, rostro subido como referencia con corona de hierro negro hundida en la frente. Ojos con resplandor cian estelar. Iluminación tenebrista con sombras que parecen garras. Estética gótica técnica de alto nivel."
        },
        {
            "id": "gotico_clasico_41",
            "number": 141,
            "style": "Gótico Clásico",
            "title": "EL VELO DE SANGRE",
            "content": "Rostro subido como referencia cubierto por un velo de gasa roja (PBR translucency). Sus rasgos se adivinan bajo la tela húmeda. Iluminación cenital dura. Biometría facial de grito contenido y belleza trágica. Red V-Raptor."
        },
        {
            "id": "gotico_clasico_42",
            "number": 142,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LOS RELOJES DE PLATA",
            "content": "Cientos de relojes de bolsillo de plata (PBR) colgados de hilos invisibles. Personaje con rostro subido como referencia en el centro. Luz de luna reflejada en el metal. Biometría facial de temor al tiempo infinito. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_43",
            "number": 143,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LOS REYES",
            "content": "Tumbas monumentales con efigies de piedra (PBR erosion). Personaje con rostro subido como referencia rindiendo homenaje. Niebla espesa y luz de luna azul. Biometría facial de respeto gótico. Calidad IMAX 8K."
        },
        {
            "id": "gotico_clasico_44",
            "number": 144,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LA LOCURA ARISTOCRÁTICA",
            "content": "Rostro subido como referencia frente a un espejo que muestra su rostro descompuesto mientras él se ve hermoso. Iluminación de candelabros decadente. Biometría facial de psicosis regia. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_45",
            "number": 145,
            "style": "Gótico Clásico",
            "title": "EL ÚLTIMO BANQUETE DE LA REINA",
            "content": "Personaje con rostro subido como referencia en una mesa llena de copas de plata (PBR) y flores negras marchitas. Luz de luna a través de ventanales góticos. Biometría facial de soledad eterna. Nitidez absoluta Zeiss."
        },
        {
            "id": "gotico_clasico_46",
            "number": 146,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LA NIEBLA TRASLÚCIDA",
            "content": "Rostro subido como referencia mirando por una ventana circular gótica. La niebla entra como serpientes blancas volumétricas. Iluminación de luna azulada. Biometría facial de fascinación y horror místico."
        },
        {
            "id": "gotico_clasico_47",
            "number": 147,
            "style": "Gótico Clásico",
            "title": "EL VIOLÍN DE HUESO",
            "content": "Primer plano de violín hecho de hueso humano (PBR texture). Mano de personaje con rostro subido como referencia tocando con arco de seda negra. Luz de vela individual. Biometría facial de concentración oscura. Arri Raw."
        },
        {
            "id": "gotico_clasico_48",
            "number": 148,
            "style": "Gótico Clásico",
            "title": "EL JARDÍN DE LAS CRUCES DE ORO",
            "content": "Cruces de oro macizo PBR enterradas en arena negra. Personaje con rostro subido como referencia recorriendo el lugar. Luz de atardecer rojo 2000K. Biometría facial de búsqueda de redención gótica. Calidad Masterpiece."
        },
        {
            "id": "gotico_clasico_49",
            "number": 149,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DE LA MUERTE ARISTÓCRATA",
            "content": "Retrato de personaje con rostro subido como referencia con maquillaje gótico extremo (Polvo de arroz PBR). Ojos con lentes de contacto blancas. Iluminación tipo Noir con sombras que parecen esqueletos. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_50",
            "number": 150,
            "style": "Gótico Clásico",
            "title": "EL FIN DEL CASTILLO",
            "content": "Castillo colapsando en el mar bajo tormenta roja. Personaje con rostro subido como referencia en el acantilado viendo la destrucción. Iluminación de relámpagos y fuego. Biometría facial de pérdida absoluta. Calidad IMAX 8K definitiva."
        },
        {
            "id": "gotico_clasico_51",
            "number": 151,
            "style": "Gótico Clásico",
            "title": "LA CRIPTA DE LOS SUSPIROS",
            "content": "Paredes de cripta cubiertas de bocas de piedra que parecen respirar (PBR animation). Personaje con rostro subido como referencia con oídos tapados. Luz de linterna parpadeante. Biometría: pavor ante el sonido místico. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_52",
            "number": 152,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LA SANGRE NEGRA",
            "content": "Rostro subido como referencia tocando un espejo de obsidiana de donde brota sangre negra líquida (PBR fluid). Iluminación de luna cian. Biometría facial de fascinación prohibida. Calidad 8K HDR."
        },
        {
            "id": "gotico_clasico_53",
            "number": 153,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LAS LÁMPARAS",
            "content": "Miles de lámparas de aceite (PBR brass) sobre tumbas sin nombre. Personaje con rostro subido como referencia encendiendo una. Luz naranja cálida vs ambiente azul de noche. Biometría facial de paz gótica melancólica."
        },
        {
            "id": "gotico_clasico_54",
            "number": 154,
            "style": "Gótico Clásico",
            "title": "LA TORRE DEL RELOJ ETERNO",
            "content": "Maquinaria de reloj gigante de hierro PBR. Rostro subido como referencia atrapado entre engranajes que se mueven lentamente. Luz cenital de luna. Biometría de terror claustrofóbico aristocrático. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_55",
            "number": 155,
            "style": "Gótico Clásico",
            "title": "EL BANQUETE DE LAS SOMBRAS",
            "content": "Mesa de banquete gótica vacía excepto por un personaje con rostro subido como referencia. Las sombras de los comensales proyectadas en la pared parecen comer. Luz de velas parpadeante. Biometría facial de locura solitaria."
        },
        {
            "id": "gotico_clasico_56",
            "number": 156,
            "style": "Gótico Clásico",
            "title": "LA CATEDRAL DE HIELO AZUL",
            "content": "Arquitectura gótica tallada en hielo translúcido PBR. Rostro subido como referencia con escarcha en las pestañas. Luz de aurora boreal púrpura reflejada en el hielo. Biometría de frío gélido eterno. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_57",
            "number": 157,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL ALMA PARTIDA",
            "content": "Rostro subido como referencia frente a espejo gótico rajado en forma de cruz. Cada pedazo muestra una edad diferente del personaje. Iluminación de bajo perfil. Biometría facial de disociación gótica. Zeiss Supreme Prime."
        },
        {
            "id": "gotico_clasico_58",
            "number": 158,
            "style": "Gótico Clásico",
            "title": "LA REINA DE LOS CUERVOS",
            "content": "Trono de plumas negras PBR. Mujer con rostro subido como referencia con capa de alas de cuervo. Cientos de cuervos reales volando en el salón. Iluminación de amanecer gris. Biometría facial de mando oscuro."
        },
        {
            "id": "gotico_clasico_59",
            "number": 159,
            "style": "Gótico Clásico",
            "title": "EL PASILLO DE LAS VELAS INFINITAS",
            "content": "Velas negras que flotan en un pasillo de piedra PBR. Personaje con rostro subido como referencia caminando por el centro. Luz cálida envolvente versus sombras profundas. Biometría facial de meditación terrorífica. Red V-Raptor."
        },
        {
            "id": "gotico_clasico_60",
            "number": 160,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO QUE LLORA SANGRE",
            "content": "Rostro subido como referencia mirando su reflejo que llora sangre a borbotones (Fluid simulation). El espejo es de plata antigua PBR. Iluminación lateral dramática. Biometría: reflejo de pánico en las pupilas reales."
        },
        {
            "id": "gotico_clasico_61",
            "number": 161,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LAS ESCALERAS DE CRISTAL",
            "content": "Arquitectura gótica con escalones de cristal con refracción HDR. Personaje con rostro subido como referencia ascendiendo. Luz de luna cian. Biometría facial de ascensión maldita. Nitidez absoluta 8K."
        },
        {
            "id": "gotico_clasico_62",
            "number": 162,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LAS FLORES DE HIERRO",
            "content": "Flores talladas en hierro negro PBR decorando tumbas de mármol. Rostro subido como referencia tocando una flor fría. Niebla baja y luz de eclipse. Biometría facial de melancolía gótica técnica."
        },
        {
            "id": "gotico_clasico_63",
            "number": 163,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DE LA MUERTE BLANCA",
            "content": "Retrato de personaje con rostro subido como referencia con piel de alabastro y venas azules marcadas. Ropa de seda negra mate PBR. Iluminación cenital de mausoleo. Biometría facial de belleza cadavérica refinada. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_64",
            "number": 164,
            "style": "Gótico Clásico",
            "title": "EL RELOJ DE ARENA DE POLVO DE HUESOS",
            "content": "Macro de reloj de arena con polvo blanco fino. Rostro subido como referencia al fondo con mirada de terror al tiempo. Iluminación lateral cálida. Biometría: arrugas bajo los ojos nítidas 8K. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_65",
            "number": 165,
            "style": "Gótico Clásico",
            "title": "EL PASILLO DE LAS GÁRGOLAS VIVAS",
            "content": "Estatua de gárgola de piedra PBR que gira la cabeza hacia el personaje con rostro subido como referencia. Luz de luna y relámpagos. Biometría facial de shock y parálisis. Calidad cinematográfica absoluta."
        },
        {
            "id": "gotico_clasico_66",
            "number": 166,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL REY SIN REINO",
            "content": "Rostro subido como referencia con corona de espinas de plata PBR reflejado en un espejo que muestra el castillo ardiendo. Iluminación roja de incendios al fondo. Biometría facial de orgullo herido. Red V-Raptor."
        },
        {
            "id": "gotico_clasico_67",
            "number": 167,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LOS VIOLINES ROTOS",
            "content": "Cientos de violines de madera PBR colgando de hilos ensangrentados. Personaje con rostro subido como referencia en el centro. Luz de velas lateral. Biometría facial de tristeza musical gótica. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_68",
            "number": 168,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LA REALIDAD GÓTICA",
            "content": "Rostro subido como referencia frente a espejo que muestra su alma como un cuervo negro. Iluminación de luna azulada. Biometría facial de aceptación del mal interno. Calidad fotográfica 8K Raw."
        },
        {
            "id": "gotico_clasico_69",
            "number": 169,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LAS VOCES MUERTAS",
            "content": "Ventanal gótico roto, viento que trae partículas de ceniza y susurros. Rostro subido como referencia escuchando. Luz de luna pálida. Biometría facial de pavor auditivo. Textura de piedra fría y piel húmeda."
        },
        {
            "id": "gotico_clasico_70",
            "number": 170,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DEL MAR GÓTICO",
            "content": "Tumbas de mármol PBR que emergen de las olas bajo la luna. Personaje con rostro subido como referencia en una barca de madera negra. Iluminación plateada y espuma de mar realista. Biometría facial de soledad extrema."
        },
        {
            "id": "gotico_clasico_71",
            "number": 171,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DEL ÁNGEL CAÍDO",
            "content": "Alas negras de plumas quemadas PBR. Rostro subido como referencia con cicatrices en forma de rayos. Iluminación naranja de infierno frío. Biometría facial de odio aristocrático. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_72",
            "number": 172,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LAS DOS VIDAS",
            "content": "Rostro subido como referencia frente a espejo gótico. Su reflejo es una mujer del siglo XVIII, él un hombre moderno del siglo XXI. Iluminación dual histórica. Biometría facial de choque temporal. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_73",
            "number": 173,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LAS CERRADURAS GÓTICAS",
            "content": "Puerta con cientos de cerraduras de bronce PBR. Personaje con rostro subido como referencia con manojo de llaves de oro. Luz de antorcha parpadeante. Biometría facial de obsesión por abrir lo prohibido."
        },
        {
            "id": "gotico_clasico_74",
            "number": 174,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO QUE TE DEVORA",
            "content": "El cristal del espejo se vuelve líquido y atrapa las manos del personaje con rostro subido como referencia. Iluminación de luna cian. Biometría facial de pánico absoluto y fuerza de la superficie. Nitidez Zeiss 8K."
        },
        {
            "id": "gotico_clasico_75",
            "number": 175,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LAS ROSAS NEGRAS INFINITAS",
            "content": "Jardín vertical en torre gótica. Rosas que crecen instantáneamente (PBR organic growth). Rostro subido como referencia devorado por la vegetación oscura. Iluminación de tormenta. Biometría facial de rendición gótica."
        },
        {
            "id": "gotico_clasico_76",
            "number": 176,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LOS LIBROS",
            "content": "Tumbas en forma de libros gigantes de piedra PBR. Personaje con rostro subido como referencia leyendo epitafios trágicos. Niebla volumétrica y luz de luna. Biometría facial de tristeza intelectual. Red V-Raptor."
        },
        {
            "id": "gotico_clasico_77",
            "number": 177,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DEL SERENO GÓTICO",
            "content": "Farol de bronce PBR con llama azul de gas. Rostro subido como referencia patrullando los muros del castillo. Luz azul proyectada en su piel pálida. Biometría facial de vigilancia eterna. Calidad 8K RAW."
        },
        {
            "id": "gotico_clasico_78",
            "number": 178,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL FINAL DE LOS TIEMPOS",
            "content": "Rostro subido como referencia frente a espejo que muestra la tierra helada y estéril. Su piel se vuelve escarcha (PBR frost shader). Iluminación de luz estelar fría. Biometría facial de fin de mundo gótico."
        },
        {
            "id": "gotico_clasico_79",
            "number": 179,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LAS CADENAS DE PLATA",
            "content": "Cadenas finas de plata PBR colgando del techo rodeando al personaje con rostro subido como referencia. Luz de luna filtrada. Biometría facial de atrapamiento aristocrático. Detalle microscópico en los eslabones y la piel."
        },
        {
            "id": "gotico_clasico_80",
            "number": 180,
            "style": "Gótico Clásico",
            "title": "EL ÚLTIMO SUSPIRO DE LA REINA DE HIELO",
            "content": "Mujer con rostro subido como referencia exhalando una nube de cristales de hielo (Particle effects). Iluminación de luna cian profunda. Vestido de seda blanca PBR con escarcha. Biometría facial de agonía bella. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_81",
            "number": 181,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LOS ESPEJOS ROTOS GÓTICOS",
            "content": "Arquitectura gótica donde cada piedra es un fragmento de espejo. Rostro subido como referencia multiplicado al infinito. Luz de luna caleidoscópica. Biometría facial fragmentada visualmente. Calidad Masterpiece."
        },
        {
            "id": "gotico_clasico_82",
            "number": 182,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LAS LÁGRIMAS DE CRISTAL",
            "content": "Tumbas de cristal de roca PBR con el rostro subido como referencia dentro. Luz de luna que atraviesa el cristal creando refracciones mágicas. Biometría facial de sueño inquieto gótico. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_83",
            "number": 183,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DE LA MUERTE GÓTICA MODERNA",
            "content": "Personaje con rostro subido como referencia con levita de cuero negro y encaje tecnológico. Ojos biónicos góticos. Iluminación de neón rojo en un castillo. Biometría facial de cyborg aristocrático. Red V-Raptor XL."
        },
        {
            "id": "gotico_clasico_84",
            "number": 184,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LA SANGRE DE ORO",
            "content": "Rostro subido como referencia frente a espejo gótico de donde brota oro líquido (PBR fluid). Su piel se tiñe de dorado. Iluminación de velas negras. Biometría facial de avaricia maldita. Nitidez Zeiss 8K."
        },
        {
            "id": "gotico_clasico_85",
            "number": 185,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LOS VIOLINES DE SANGRE",
            "content": "Violines rojos que gotean sangre real. Rostro subido como referencia tocando una sinfonía de horror. Iluminación lateral dramática. Biometría facial de trance musical oscuro. Calidad cinematográfica premium."
        },
        {
            "id": "gotico_clasico_86",
            "number": 186,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LAS MIL VIDAS GÓTICAS",
            "content": "Rostro subido como referencia frente a espejo gótico. Cada segundo su rostro cambia a una versión histórica diferente (Renacimiento, Barroco, Victoriano). Iluminación cambiante rítmica. Biometría facial de mareo temporal. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_87",
            "number": 187,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LA NIEBLA DE SANGRE INFINITA",
            "content": "Niebla roja espesa que sube de los acantilados rodeando al personaje con rostro subido como referencia en el balcón. Iluminación de luna carmesí. Biometría facial de terror y atracción fatal. Calidad IMAX 8K."
        },
        {
            "id": "gotico_clasico_88",
            "number": 188,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LOS RECUERDOS GÓTICOS",
            "content": "Tumbas de mármol blanco PBR con hologramas de momentos felices del rostro subido como referencia. Luz de luna azulada. Biometría facial de llanto desgarrador gótico. Nitidez absoluta Zeiss."
        },
        {
            "id": "gotico_clasico_89",
            "number": 189,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DE LA MUERTE DEL CASTILLO",
            "content": "Retrato de personaje con rostro subido como referencia con armadura de gala negra y plata. Ojos de obsidiana. Iluminación de chimenea gigante proyectando sombras de gárgolas. Biometría facial de mando oscuro aristocrático."
        },
        {
            "id": "gotico_clasico_90",
            "number": 190,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL ALMA QUE SE DESVANECE",
            "content": "Rostro subido como referencia frente a espejo gótico donde su imagen se disuelve en humo blanco volumétrico. Iluminación de luna azulada. Biometría facial de paz final gótica. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_91",
            "number": 191,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LAS VOCES DE SANGRE",
            "content": "Paredes que susurran con labios de sangre real. Rostro subido como referencia en el centro gritando de terror. Iluminación roja de pavor. Biometría facial de colapso nervioso. Red V-Raptor."
        },
        {
            "id": "gotico_clasico_92",
            "number": 192,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LA VERDAD GÓTICA FINAL",
            "content": "Rostro subido como referencia frente a espejo que muestra el fin del mundo gótico. Su piel se agrieta como piedra PBR. Iluminación divina lateral. Biometría facial de aceptación del destino. Calidad Masterpiece."
        },
        {
            "id": "gotico_clasico_93",
            "number": 193,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LA NIEBLA DE ORO",
            "content": "Niebla dorada brillante rodeando al personaje con rostro subido como referencia. Vestido de seda negra PBR con hilos de oro. Iluminación de sol de atardecer 2000K. Biometría facial de éxtasis gótico místico. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_94",
            "number": 194,
            "style": "Gótico Clásico",
            "title": "EL CEMENTERIO DE LOS SUEÑOS GÓTICOS",
            "content": "Tumbas de cristal de cuarzo PBR con el rostro subido como referencia en diferentes poses de terror. Luz de luna que crea refracciones infinitas. Biometría facial de pesadilla gótica técnica. Nitidez Zeiss 8K."
        },
        {
            "id": "gotico_clasico_95",
            "number": 195,
            "style": "Gótico Clásico",
            "title": "LA MIRADA DE LA MUERTE DE LA REINA",
            "content": "Retrato de mujer con rostro subido como referencia con corona de rosas negras y espinas reales. Ojos rojos sangre. Iluminación cenital dura de castigo regio. Biometría facial de odio ancestral aristocrático."
        },
        {
            "id": "gotico_clasico_96",
            "number": 196,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DEL ALMA QUE GRITA",
            "content": "Rostro subido como referencia frente a espejo gótico donde su imagen está en un grito silencioso eterno. Iluminación de velas blancas. Biometría facial de pavor absoluto. Calidad cinematográfica 8K Raw."
        },
        {
            "id": "gotico_clasico_97",
            "number": 197,
            "style": "Gótico Clásico",
            "title": "LA HABITACIÓN DE LAS MIL VIDRIERAS",
            "content": "Vidrieras góticas que rodean al personaje con rostro subido como referencia. Cada vidriera muestra un horror diferente en colores vibrantes PBR. Iluminación multicolor proyectada en la piel. Biometría facial de asombro y terror. Arri Alexa 35."
        },
        {
            "id": "gotico_clasico_98",
            "number": 198,
            "style": "Gótico Clásico",
            "title": "EL ESPEJO DE LA REALIDAD GÓTICA TOTAL",
            "content": "Rostro subido como referencia frente a espejo que muestra todo el universo gótico a la vez. Su mirada refleja galaxias oscuras. Iluminación de estrellas binarias. Biometría facial de conocimiento maldito. Red V-Raptor XL."
        },
        {
            "id": "gotico_clasico_99",
            "number": 199,
            "style": "Gótico Clásico",
            "title": "LA TORRE DE LA NIEBLA DEL FINAL",
            "content": "Niebla gris espesa que borra el mundo alrededor del balcón del personaje con rostro subido como referencia. Iluminación de luna azulada tenue. Biometría facial de desolación aristocrática final. Sony Venice 2."
        },
        {
            "id": "gotico_clasico_100",
            "number": 200,
            "style": "Gótico Clásico",
            "title": "EL FIN DEL TIEMPO GÓTICO",
            "content": "Retrato épico final. El rostro del personaje con rostro subido como referencia se convierte en una estatua de mármol que se desmorona en el mar. Iluminación de relámpagos bajo cielo rojo. Biometría facial de inmortalidad fallida. Calidad definitiva IMAX 8K."
        }
    ],
    "SLASHER 80S": [
        {
            "id": "slasher_80s_1",
            "number": 201,
            "style": "Slasher 80s",
            "title": "TERROR EN EL CAMPAMENTO LAGO CRISTAL",
            "content": "Plano medio capturado con Arri Alexa con emulación de película 35mm y grano VHS intenso. Personaje juvenil con rostro subido como referencia con biometría de grito: sudor perlando la frente y ojos muy abiertos reflejando una luz de linterna. Fondo de cabaña de madera con luces de neón rosa y azul (Teal & Orange saturado). Estética de película de culto de los 80 en 8K."
        },
        {
            "id": "slasher_80s_2",
            "number": 202,
            "style": "Slasher 80s",
            "title": "EL ASESINO DE LA MÁSCARA DE HOCKEY",
            "content": "Primer plano de una máscara de hockey desgastada (Textura PBR con arañazos y sangre seca), rostro subido como referencia visible tras los agujeros. Iluminación lateral roja de sirena de policía parpadeante. Atmósfera de noche de verano húmeda con bruma volumétrica. Calidad cinematográfica retro con aberración cromática sutil."
        },
        {
            "id": "slasher_80s_3",
            "number": 203,
            "style": "Slasher 80s",
            "title": "PERSECUCIÓN EN EL CENTRO COMERCIAL",
            "content": "Plano americano con lente ultra-angular 14mm. Personaje con rostro subido como referencia corriendo por pasillos de un mall abandonado. Luces de neón parpadeantes en tonos cian y magenta. Biometría facial de esfuerzo extremo y pánico. Reflejos en el suelo de mármol pulido (Ray-tracing). Sony Venice 2 con look ochentero."
        },
        {
            "id": "slasher_80s_4",
            "number": 204,
            "style": "Slasher 80s",
            "title": "LA CHICA FINAL",
            "content": "Retrato épico de personaje con rostro subido como referencia con herida realista en la mejilla y ropa de algodón saturada de sangre. Sujeta un bate de béisbol con clavos (PBR metal). Luz de amanecer cálida de 3000K. Grano de película de 16mm y biometría de determinación heroica. Calidad RAW 8K."
        },
        {
            "id": "slasher_80s_5",
            "number": 205,
            "style": "Slasher 80s",
            "title": "NOCHE DE GRADUACIÓN SANGRIENTA",
            "content": "Vestido de fiesta de satén rosa PBR cubierto de sangre roja vibrante. Personaje con rostro subido como referencia bajo una bola de discoteca que proyecta destellos caleidoscópicos. Iluminación dramática de colores saturados. Biometría facial de shock total. Estética de película de culto."
        },
        {
            "id": "slasher_80s_6",
            "number": 206,
            "style": "Slasher 80s",
            "title": "EL ACECHADOR DE LA GUARDIA URBANA",
            "content": "Sombras alargadas en un callejón con cubos de basura metálicos (PBR). Personaje con rostro subido como referencia oculto tras una esquina. Luz de farola amarilla sucia 2800K. Biometría facial con reflejos de la luz en las lágrimas de terror. Calidad cinematográfica con ruido de cinta analógica."
        },
        {
            "id": "slasher_80s_7",
            "number": 207,
            "style": "Slasher 80s",
            "title": "TELEVISIÓN CON ESTÁTICA",
            "content": "Primer plano de personaje con rostro subido como referencia frente a una TV de tubo gigante. La estática ilumina su cara con destellos blancos y grises. Biometría facial de trance hipnótico. En el reflejo de la pantalla se ve una mano acercándose. Sony Venice 2 con textura de video de baja fidelidad pero nitidez 8K."
        },
        {
            "id": "slasher_80s_8",
            "number": 208,
            "style": "Slasher 80s",
            "title": "EL CUCHILLO DE COCINA",
            "content": "Macro de un cuchillo de acero inoxidable (PBR reflections) reflejando el rostro subido como referencia en la hoja. Sangre goteando en cámara lenta. Iluminación de cocina de verano con luz de tarde saturada. Biometría facial de pavor absoluto. Estética Slasher clásica."
        },
        {
            "id": "slasher_80s_9",
            "number": 209,
            "style": "Slasher 80s",
            "title": "LA PISCINA DEL HORROR",
            "content": "Personaje con rostro subido como referencia flotando en una piscina llena de sangre roja oscura. Iluminación de focos submarinos (Caustics) que crean patrones en su rostro. Biometría facial sumergida con burbujas realistas. Calidad IMAX 8K con grano de película de 35mm."
        },
        {
            "id": "slasher_80s_10",
            "number": 210,
            "style": "Slasher 80s",
            "title": "LLAMADA DESDE DENTRO DE LA CASA",
            "content": "Sujetando teléfono de cable trenzado PBR, rostro subido como referencia con expresión de pánico. Luz de sala de estar nocturna con sombras de persianas proyectadas en la cara. Biometría: pupila dilatada al escuchar la voz. Estética retro-horror técnica."
        },
        {
            "id": "slasher_80s_11",
            "number": 211,
            "style": "Slasher 80s",
            "title": "PESADILLA EN LA ESCUELA",
            "content": "Pasillo de taquillas metálicas amarillas PBR. Personaje con rostro subido como referencia escondido. Luz de neón roja parpadeante de salida de emergencia. Biometría facial de respiración contenida y sudor. Calidad cinematográfica 8K con grano VHS."
        },
        {
            "id": "slasher_80s_12",
            "number": 212,
            "style": "Slasher 80s",
            "title": "EL BOSQUE DE LOS ADOLESCENTES",
            "content": "Plano general nocturno. Grupo de sombras y personaje con rostro subido como referencia con una linterna enfocando un árbol con una máscara colgada. Niebla volumétrica y luz de luna azul intensa. Biometría facial de misterio y pavor. Sony Venice 2."
        },
        {
            "id": "slasher_80s_13",
            "number": 213,
            "style": "Slasher 80s",
            "title": "RECUERDOS DE UNA MASACRE",
            "content": "Rostro subido como referencia mirando fotos Polaroid quemadas (Textura PBR). La luz de una cerilla ilumina su cara de cerca. Biometría facial de trauma y lágrimas realistas. Calidad RAW 8K con look analógico de alta gama."
        },
        {
            "id": "slasher_80s_14",
            "number": 214,
            "style": "Slasher 80s",
            "title": "EL ASESINO DEL IMPERMEABLE",
            "content": "Lluvia intensa, personaje con rostro subido como referencia bajo una luz de farola de calle. Un hombre con impermeable amarillo y hacha al fondo. Iluminación de alto contraste, brillos en el asfalto mojado. Biometría facial de parálisis por terror. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_15",
            "number": 215,
            "style": "Slasher 80s",
            "title": "EL SÓTANO DE LAS CINTAS VHS",
            "content": "Estanterías llenas de cintas (PBR plastic), personaje con rostro subido como referencia eligiendo una. Luz de indicador de video rojo. Biometría facial de curiosidad fatal. Grano de película de 16mm y aberración cromática en los bordes."
        },
        {
            "id": "slasher_80s_16",
            "number": 216,
            "style": "Slasher 80s",
            "title": "LA CARA DEL TERROR JUVENIL",
            "content": "Primer plano de personaje con rostro subido como referencia con walkman y auriculares de espuma naranja. Reflejo de un cuchillo en sus gafas de sol negras. Iluminación de neón rosa vibrante. Biometría facial de sorpresa repentina. Calidad Masterpiece."
        },
        {
            "id": "slasher_80s_17",
            "number": 217,
            "style": "Slasher 80s",
            "title": "NOCHE EN EL AUTOCINE",
            "content": "Interior de coche clásico PBR, rostro subido como referencia mirando la pantalla gigante desde el asiento del conductor. Luz de la proyección iluminando sus rasgos en tonos azules y blancos. Biometría facial de miedo cinematográfico. Sony Venice 2."
        },
        {
            "id": "slasher_80s_18",
            "number": 218,
            "style": "Slasher 80s",
            "title": "EL PASILLO DEL HOSPITAL ABANDONADO",
            "content": "Camilla volcada, luces que chisporrotean. Personaje con rostro subido como referencia en silla de ruedas (PBR metal). Iluminación de hospital fría y verdosa 6500K. Biometría facial de vulnerabilidad extrema. Calidad 8K RAW con grano analógico."
        },
        {
            "id": "slasher_80s_19",
            "number": 219,
            "style": "Slasher 80s",
            "title": "LA MÁSCARA DEL CARNAVAL",
            "content": "Rostro subido como referencia con máscara de payaso aterradora parcialmente levantada. Fondo de feria con luces de colores desenfocadas (Bokeh). Iluminación vibrante de atracciones. Biometría facial oculta tras el maquillaje de payaso. Estética de película de culto."
        },
        {
            "id": "slasher_80s_20",
            "number": 220,
            "style": "Slasher 80s",
            "title": "EL ÚLTIMO VERANO DE TU VIDA",
            "content": "Retrato en la playa al atardecer 2000K. Rostro subido como referencia con arena y sangre en la piel. Al fondo, una silueta con un garfio. Iluminación dorada saturada. Biometría facial de final trágico de película Slasher. Calidad IMAX 8K."
        },
        {
            "id": "slasher_80s_21",
            "number": 221,
            "style": "Slasher 80s",
            "title": "LA CAJA DE PIZZA SANGRIENTA",
            "content": "Primer plano de manos abriendo caja de pizza (PBR cardboard), dentro hay una máscara de asesino. Rostro subido como referencia al fondo con expresión de shock. Luz de neón de pizzería roja y verde. Biometría facial de pavor absoluto. Estética Slasher urbana."
        },
        {
            "id": "slasher_80s_22",
            "number": 222,
            "style": "Slasher 80s",
            "title": "PESADILLA EN EL GARAGE",
            "content": "Rostro subido como referencia debajo de un coche clásico (PBR rust). Solo se ven sus ojos y manos con aceite. Unas botas pesadas se detienen junto a él. Luz de linterna proyectando sombras de herramientas. Biometría facial de terror oculto. Sony Venice 2."
        },
        {
            "id": "slasher_80s_23",
            "number": 223,
            "style": "Slasher 80s",
            "title": "LA CINTA DE VIDEO MALDITA",
            "content": "Rostro subido como referencia sosteniendo cinta VHS que gotea líquido negro (PBR fluid). Iluminación de estática de TV blanca. Biometría facial de horror tecnológico analógico. Grano de película de 35mm ruidoso. Calidad 8K HDR."
        },
        {
            "id": "slasher_80s_24",
            "number": 224,
            "style": "Slasher 80s",
            "title": "EL PASILLO DE LAS TAQUILLAS DE SANGRE",
            "content": "Luz de pasillo de instituto que se apaga y enciende. Personaje con rostro subido como referencia corriendo. Las taquillas gotean sangre real. Biometría facial de esfuerzo juvenil y pánico extremo. Textura de metal y sangre fresca PBR."
        },
        {
            "id": "slasher_80s_25",
            "number": 225,
            "style": "Slasher 80s",
            "title": "LA MIRADA DEL ASESINO JOVEN",
            "content": "Retrato frontal de personaje con rostro subido como referencia con capucha negra y ojos inyectados en sangre. Iluminación de neón azul de un arcade. Biometría facial de psicopatía adolescente. Calidad Masterpiece con grano VHS."
        },
        {
            "id": "slasher_80s_26",
            "number": 226,
            "style": "Slasher 80s",
            "title": "EL REFLEJO EN EL CUCHILLO DE CAZA",
            "content": "Macro de cuchillo de caza (PBR metal) bloqueando el rostro subido como referencia. Se ve el asesino reflejado detrás de él. Luz de fogata nocturna naranja. Biometría facial de sorpresa mortal. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_27",
            "number": 227,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LOS PÓSTERS ROTOS",
            "content": "Pósters de películas ochenteras en la pared, personaje con rostro subido como referencia en el centro totalmente aterrado. Luz de neón rosa de la calle entrando por la ventana. Biometría facial de fragilidad juvenil. Sony Venice 2."
        },
        {
            "id": "slasher_80s_28",
            "number": 228,
            "style": "Slasher 80s",
            "title": "EL ASESINO DEL CAMPAMENTO VERANIEGO",
            "content": "Personaje con rostro subido como referencia con linterna enfocando una máscara de madera colgada de un árbol (PBR bark). Niebla baja y luz de luna azul. Biometría facial de descubrimiento fatal. Calidad fotográfica 8K Raw."
        },
        {
            "id": "slasher_80s_29",
            "number": 229,
            "style": "Slasher 80s",
            "title": "LA PISCINA DE NEÓN Y SANGRE",
            "content": "Rostro subido como referencia sumergido en agua teñida de rojo, iluminada por neones subacuáticos verdes y rosas. Burbujas con refracción HDR. Biometría facial de lucha por respirar. Estética visual vibrante de los 80."
        },
        {
            "id": "slasher_80s_30",
            "number": 230,
            "style": "Slasher 80s",
            "title": "EL FINAL DE LA PELÍCULA DE CULTO",
            "content": "Retrato épico final de personaje con rostro subido como referencia caminando hacia la cámara con un hacha. Fondo de cabaña ardiendo con llamas naranjas gigantes. Iluminación de fuego real. Biometría facial de victoria sangrienta. Calidad definitiva IMAX 8K."
        },
        {
            "id": "slasher_80s_31",
            "number": 231,
            "style": "Slasher 80s",
            "title": "EL TELÉFONO DE LA SANGRE",
            "content": "Auricular de teléfono goteando sangre real (PBR fluid). Rostro subido como referencia al fondo gritando. Luz de habitación con sombras de manos proyectadas en la pared. Biometría facial de pavor extremo. Calidad cinematográfica 8K."
        },
        {
            "id": "slasher_80s_32",
            "number": 232,
            "style": "Slasher 80s",
            "title": "PESADILLA EN LA LAVANDERÍA",
            "content": "Vaho y calor visible. Rostro subido como referencia mirando por el cristal de una lavadora en marcha (PBR suds). Dentro hay ropa de adolescente ensangrentada. Iluminación fluorescente sucia. Biometría facial de asco y terror industrial."
        },
        {
            "id": "slasher_80s_33",
            "number": 233,
            "style": "Slasher 80s",
            "title": "LA MÁSCARA DE GAS OCHENTERA",
            "content": "Rostro subido como referencia con máscara de gas militar vieja con dibujos de neon. Luz de discoteca abandonada. Biometría facial tras los cristales: ojos dilatados por el miedo. Textura de goma y metal oxidado PBR."
        },
        {
            "id": "slasher_80s_34",
            "number": 234,
            "style": "Slasher 80s",
            "title": "EL PASILLO DE LOS ESPEJOS DE NEÓN",
            "content": "Infinitos reflejos del rostro subido como referencia bajo luces de feria de colores vibrantes. Cada reflejo muestra una herida diferente. Biometría facial fragmentada. Calidad RAW 8K con look analógico saturado."
        },
        {
            "id": "slasher_80s_35",
            "number": 235,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LAS CINTAS DE AUDIO",
            "content": "Cintas de cassette (PBR plastic) desenrolladas por el suelo rodeando al personaje con rostro subido como referencia. Luz de luna azulada. Biometría facial de atrapamiento en el pasado. Sony Venice 2 de alto rango dinámico."
        },
        {
            "id": "slasher_80s_36",
            "number": 236,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO INVISIBLE",
            "content": "Rostro subido como referencia frente a espejo que no refleja nada, solo la habitación vacía con un cuchillo flotando. Iluminación de baño con neón cian. Biometría facial de shock absoluto. Nitidez Zeiss 8K."
        },
        {
            "id": "slasher_80s_37",
            "number": 237,
            "style": "Slasher 80s",
            "title": "EL CALLEJÓN DE LAS SOMBRAS DE NEÓN",
            "content": "Luces de bar parpadeantes. Rostro subido como referencia corriendo hacia un callejón sin salida. Sombras gigantes de garras en las paredes. Biometría facial de agotamiento y pánico. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_38",
            "number": 238,
            "style": "Slasher 80s",
            "title": "EL JARDÍN DE LAS MÁSCARAS DE PLÁSTICO",
            "content": "Máscaras de Halloween baratas colgadas de arbustos (PBR foliage). Personaje con rostro subido como referencia tropezando con ellas. Luz de luna y farolillos de colores. Biometría facial de terror festivo. Red V-Raptor XL."
        },
        {
            "id": "slasher_80s_39",
            "number": 239,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA CHICA FINAL SANGRIENTA",
            "content": "Retrato frontal de personaje juvenil con rostro subido como referencia cubierto de suciedad y sangre vívida. Iluminación de amanecer dorado 3000K. Biometría facial de superviviente con trauma profundo. Calidad Masterpiece."
        },
        {
            "id": "slasher_80s_40",
            "number": 240,
            "style": "Slasher 80s",
            "title": "PESADILLA EN EL RECREO",
            "content": "Columpios moviéndose solos en la oscuridad. Rostro subido como referencia mirando por una reja metálica (PBR). Iluminación de luna cian. Biometría facial de parálisis infantil. Sony Venice 2 con grano VHS intenso."
        },
        {
            "id": "slasher_80s_41",
            "number": 241,
            "style": "Slasher 80s",
            "title": "EL TELÉFONO DE LA MUERTE JOVEN",
            "content": "Personaje con rostro subido como referencia con auriculares de esponja amarilla y walkman de plástico PBR. Luz de neón rosa reflejada en la cara. Al fondo, una silueta con un cuchillo. Biometría facial de fatal coincidencia. 8K."
        },
        {
            "id": "slasher_80s_42",
            "number": 242,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LOS JUGUETES DE SANGRE",
            "content": "Un tren eléctrico de juguete (PBR metal) descarrila sobre charco de sangre. Rostro subido como referencia sentado en el suelo con mirada perdida. Iluminación de luz nocturna infantil ámbar. Biometría facial de locura juvenil."
        },
        {
            "id": "slasher_80s_43",
            "number": 243,
            "style": "Slasher 80s",
            "title": "EL PASILLO DE LOS CASILLEROS ABIERTOS",
            "content": "Todos los casilleros se abren a la vez revelando ropa ensangrentada. Personaje con rostro subido como referencia en el centro. Luz fluorescente rítmica. Biometría facial de pánico escolar. Sony Venice 2."
        },
        {
            "id": "slasher_80s_44",
            "number": 244,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO OCULTO",
            "content": "Rostro subido como referencia mirándose en el espejo de un gimnasio. Detrás de él, en un reflejo lejano, se asoma una máscara blanca. Iluminación de baño con neón cian. Biometría facial de darse cuenta del peligro."
        },
        {
            "id": "slasher_80s_45",
            "number": 245,
            "style": "Slasher 80s",
            "title": "PESADILLA EN EL APARCAMIENTO",
            "content": "Luz de farolas parpadeantes. Rostro subido como referencia corriendo por un parking subterráneo con charcos de aceite. Un coche con las luces encendidas le persigue. Biometría facial de pavor extremo. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_46",
            "number": 246,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA MUERTE OCHENTERA",
            "content": "Retrato de personaje juvenil con rostro subido como referencia con maquillaje de calavera de neón. Luz negra que hace brillar la pintura. Biometría facial de vacío mental. Calidad RAW 8K con look analógico."
        },
        {
            "id": "slasher_80s_47",
            "number": 247,
            "style": "Slasher 80s",
            "title": "EL TELÉFONO QUE TE MATA",
            "content": "Auricular de plástico PBR que explota en las manos del personaje con rostro subido como referencia. Chispas digitales y sangre. Luz de neón morada. Biometría facial de shock tecnológico ochentero. Red V-Raptor."
        },
        {
            "id": "slasher_80s_48",
            "number": 248,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LAS CINTAS DE VIDEO INFINITAS",
            "content": "Paredes hechas de cajas de VHS (PBR texture). Personaje con rostro subido como referencia atrapado entre ellas. Luz de las pantallas de TV de fondo. Biometría facial de claustrofobia mediática. Nitidez Zeiss 8K."
        },
        {
            "id": "slasher_80s_49",
            "number": 249,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL FINAL DEL VERANO",
            "content": "Rostro subido como referencia frente a espejo que se derrite como cera (PBR soft body). Al fondo, la playa ardiendo. Iluminación de fuego naranja y rojo. Biometría facial de pánico final. Calidad IMAX 8K."
        },
        {
            "id": "slasher_80s_50",
            "number": 250,
            "style": "Slasher 80s",
            "title": "EL ÚLTIMO GRITO OCHENTERO",
            "content": "Retrato frontal extremo de rostro subido como referencia gritando con biometría total: venas del cuello, poros dilatados, lágrimas vívidas. Iluminación de neón rosa y azul cruzada. Look cinematográfico de película de terror legendaria."
        },
        {
            "id": "slasher_80s_51",
            "number": 251,
            "style": "Slasher 80s",
            "title": "EL ASESINO DE LA PISCINA VACÍA",
            "content": "Suelo de azulejos azules PBR agrietados. Personaje con rostro subido como referencia acorralado en el fondo. Sombras gigantescas sobre él. Luz de luna brillante. Biometría facial de desamparo total. Calidad 8K con grano VHS."
        },
        {
            "id": "slasher_80s_52",
            "number": 252,
            "style": "Slasher 80s",
            "title": "NOCHE DE NEÓN SANGRIENTA",
            "content": "Chaqueta de cuero PBR con parches ochenteros manchada de sangre vívida. Rostro subido como referencia bajo luces de discoteca que giran. Biometría facial de trance y terror. Sony Venice 2 con saturación extrema."
        },
        {
            "id": "slasher_80s_53",
            "number": 253,
            "style": "Slasher 80s",
            "title": "EL TELÉFONO DE LA CABINA OSCURA",
            "content": "Habitación de cristal de cabina telefónica PBR rota. Rostro subido como referencia dentro, pidiendo ayuda. Fuera la silueta del asesino. Luz de neón amarillo. Biometría facial de asfixia y pánico. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_54",
            "number": 254,
            "style": "Slasher 80s",
            "title": "PESADILLA EN EL BOSQUE DE PLÁSTICO",
            "content": "Árboles falsos de decorado de película PBR. Personaje con rostro subido como referencia escondido. Luz de foco de estudio simulando luna. Biometría facial de darse cuenta de que la realidad es falsa. Estética Slasher meta-cinematográfica."
        },
        {
            "id": "slasher_80s_55",
            "number": 255,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO EN EL ASIENTO TRASERO",
            "content": "Reflejo del retrovisor de un coche clásico PBR. Rostro subido como referencia al volante, máscara blanca apareciendo detrás. Luz de luna desde la ventana. Biometría facial de shock instantáneo. Red V-Raptor XL."
        },
        {
            "id": "slasher_80s_56",
            "number": 256,
            "style": "Slasher 80s",
            "title": "NOCHE DE GRADUACIÓN DE SANGRE",
            "content": "Rostro subido como referencia con corona de reina de graduación de plástico PBR, sangre bajando por la frente. Fondo de globos negros y rojos. Iluminación vibrante de fiesta. Biometría facial de horror aristocrático juvenil."
        },
        {
            "id": "slasher_80s_57",
            "number": 257,
            "style": "Slasher 80s",
            "title": "EL PASILLO DE LAS CINTAS DE VIDEO QUE GRITAN",
            "content": "Cintas VHS esparcidas por pasillo de moqueta roja PBR goteando sangre. Personaje con rostro subido como referencia caminando descalzo. Luz de neón azul parpadeante. Biometría facial de dolor constante. Calidad RAW 8K."
        },
        {
            "id": "slasher_80s_58",
            "number": 258,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DE LA REALIDAD VHS",
            "content": "Rostro subido como referencia frente a espejo que muestra la imagen con líneas de seguimiento y estática de video. Iluminación blanca de monitor. Biometría facial de desintegración digital analógica. Sony Venice 2."
        },
        {
            "id": "slasher_80s_59",
            "number": 259,
            "style": "Slasher 80s",
            "title": "LA MIRADA DEL ASESINO DE LA FERIA",
            "content": "Retrato de personaje con rostro subido como referencia con máscara de payaso de plástico PBR derretida. Luz de noria desenfocada. Biometría facial de sadismo juvenil. Calidad cinematográfica 8K con grano de película de 35mm."
        },
        {
            "id": "slasher_80s_60",
            "number": 260,
            "style": "Slasher 80s",
            "title": "EL PASILLO DE LAS VOCES DE NEÓN",
            "content": "Voces que salen de las paredes de neón rosa. Personaje con rostro subido como referencia con manos en los oídos. Sombras gigantes que bailan. Biometría facial de colapso nervioso veraniego. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_61",
            "number": 261,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ALMA OCHENTERA",
            "content": "Rostro subido como referencia frente a espejo que muestra su rostro en estilo póster de película de terror de los 80. Iluminación vibrante saturada. Biometría facial de mito cinematográfico. Nitidez Zeiss 8K."
        },
        {
            "id": "slasher_80s_62",
            "number": 262,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LOS WALKMANS QUE GRITAN",
            "content": "Cientos de walkmans de colores PBR emitiendo gritos agunizantes. Rostro subido como referencia en el centro gritando también. Luz de neón roja. Biometría facial de colapso auditivo. Red V-Raptor XL."
        },
        {
            "id": "slasher_80s_63",
            "number": 263,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO EN LA DUCHA",
            "content": "Vapor, cortina de baño con dibujo de patos PBR. Mano con cuchillo se proyecta en la sombra. Rostro subido como referencia con ojos en blanco. Iluminación de baño fría. Biometría facial de horror clásico revisitado."
        },
        {
            "id": "slasher_80s_64",
            "number": 264,
            "style": "Slasher 80s",
            "title": "PESADILLA EN EL CAMPO DE FÚTBOL",
            "content": "Niebla sobre el césped PBR. Focos del estadio creando un contraluz épico. Personaje con rostro subido como referencia huyendo de una sombra con máscara. Biometría facial de adrenalina y pavor. Sony Venice 2."
        },
        {
            "id": "slasher_80s_65",
            "number": 265,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA MUERTE JOVEN Y SANGRIENTA",
            "content": "Retrato de personaje juvenil con rostro subido como referencia con camiseta de béisbol blanca totalmente roja por la sangre. Luz de atardecer 2000K. Biometría facial de finalidad trágica. Calidad 8K RAW con grano VHS."
        },
        {
            "id": "slasher_80s_66",
            "number": 266,
            "style": "Slasher 80s",
            "title": "EL TELÉFONO DEL RECUERDO SANGRIENTO",
            "content": "Rostro subido como referencia escuchando un cassette que describe su futura muerte. Luz de lámpara de lava de fondo. Biometría facial de terror paralizante. Estética visual saturada Arri Alexa 35."
        },
        {
            "id": "slasher_80s_67",
            "number": 267,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LAS CINTAS DE VIDEO GIGANTES",
            "content": "Personaje con rostro subido como referencia atrapado dentro de una cinta VHS gigante de plástico PBR. Luz de la estática de TV que entra por la ventanilla de la cinta. Biometría de asfixia analógica. Red V-Raptor."
        },
        {
            "id": "slasher_80s_68",
            "number": 268,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO DE LA TELEVISIÓN",
            "content": "Rostro subido como referencia saliendo de una pantalla de TV. Su reflejo en el espejo es el real intentando empujarlo dentro. Iluminación azul de monitor. Biometría facial de lucha física terrorífica."
        },
        {
            "id": "slasher_80s_69",
            "number": 269,
            "style": "Slasher 80s",
            "title": "LA TORRE DE LAS CINTAS DE VIDEO QUE ARDEN",
            "content": "Montaña de VHS ardiendo con llamas de colores químicos. Rostro subido como referencia en la cima. Luz de fuego y humo volumétrico negro. Biometría facial de sacrificio mediático. Calidad IMAX 8K."
        },
        {
            "id": "slasher_80s_70",
            "number": 270,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DE LA REALIDAD OCHENTERA TOTAL",
            "content": "Rostro subido como referencia frente a espejo que muestra todo el suburbio ochentero ardiendo. Luz de atardecer roja y naranja. Biometría facial de pánico suburbano. Nitidez Zeiss 8K absoluta."
        },
        {
            "id": "slasher_80s_71",
            "number": 271,
            "style": "Slasher 80s",
            "title": "LA MIRADA DEL ASESINO DEL CENTRO COMERCIAL",
            "content": "Retrato de personaje con rostro subido como referencia con sudadera de neón y máscara de cristal PBR. Luz de techo de centro comercial parpadeante. Biometría facial de locura consumista. Sony Venice 2."
        },
        {
            "id": "slasher_80s_72",
            "number": 272,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ALMA QUE SE VUELVE VIDEO",
            "content": "Rostro subido como referencia frente a espejo que se convierte en mil pantallas de TV pequeñas. Iluminación azul y blanca. Biometría facial fragmentada digitalmente. Calidad Masterpiece con grano VHS."
        },
        {
            "id": "slasher_80s_73",
            "number": 273,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LAS MÁSCARAS DE HOCKEY",
            "content": "Paredes cubiertas de máscaras de hockey blancas PBR. Una máscara tiene el rostro subido como referencia vivo. Luz cenital dura. Biometría facial de atrapamiento en el icono del horror. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_74",
            "number": 274,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO DE LA NOCHE DE VERANO",
            "content": "Rostro subido como referencia en una hamaca, viendo por el reflejo de una botella de cristal (PBR) a alguien acercándose con un machete. Luz de luna brillante. Biometría facial de shock instantáneo."
        },
        {
            "id": "slasher_80s_75",
            "number": 275,
            "style": "Slasher 80s",
            "title": "LA TORRE DE LAS CINTAS DE VIDEO DE SANGRE",
            "content": "Pila de VHS que gotea sangre real llenando la habitación. Rostro subido como referencia hundiéndose en el plástico y la sangre. Iluminación de neón rojo. Biometría facial de ahogamiento analógico. Red V-Raptor XL."
        },
        {
            "id": "slasher_80s_76",
            "number": 276,
            "style": "Slasher 80s",
            "title": "EL CEMENTERIO DEL AUTOCINE",
            "content": "Coches clásicos abandonados PBR en un descampado con niebla. Rostro subido como referencia en el centro con un proyector de mano. Luz blanca de proyector vs Noche azul. Biometría facial de terror cinematográfico. Sony Venice 2."
        },
        {
            "id": "slasher_80s_77",
            "number": 277,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA MUERTE DEL ARCADE",
            "content": "Retrato de personaje juvenil con rostro subido como referencia con luz de juegos de arcade (Cian, Magenta, Amarillo) proyectada en su piel con biometría de terror. Reflejo de \"GAME OVER\" en los ojos. Calidad 8K HDR."
        },
        {
            "id": "slasher_80s_78",
            "number": 278,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO DEL INSTITUTO",
            "content": "Rostro subido como referencia frente a espejo de taquilla. Al cerrarla, el asesino está detrás. Iluminación de pasillo amarilla. Biometría facial de pánico repentino. Nitidez Zeiss absoluta 8K."
        },
        {
            "id": "slasher_80s_79",
            "number": 279,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LOS CASSETTES DE SANGRE",
            "content": "Paredes de cintas de audio PBR que gotean sangre real. Rostro subido como referencia atrapado entre hilos de cinta magnética negra. Luz de luna cian. Biometría facial de asfixia musical. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_80",
            "number": 280,
            "style": "Slasher 80s",
            "title": "EL ÚLTIMO GRITO DE LA CHICA DEL VERANO",
            "content": "Mujer con rostro subido como referencia gritando en primer plano extremo. Pelo mojado, sangre en la cara, luz de neón rosa y azul. Grano de película de 35mm ruidoso. Biometría facial de terror definitivo de película de culto. Sony Venice 2."
        },
        {
            "id": "slasher_80s_81",
            "number": 281,
            "style": "Slasher 80s",
            "title": "LA TORRE DE LAS CINTAS DE VIDEO DE ORO",
            "content": "Vhs bañados en oro macizo PBR. Rostro subido como referencia intentando escapar de la pila brillante. Iluminación de sol de atardecer 2000K. Biometría facial de avaricia y horror ochentero. Red V-Raptor."
        },
        {
            "id": "slasher_80s_82",
            "number": 282,
            "style": "Slasher 80s",
            "title": "EL CEMENTERIO DE LAS MÁSCARAS DE PLÁSTICO INFINITAS",
            "content": "Miles de máscaras de asesinos famosos (PBR) enterradas en arena de playa. Rostro subido como referencia recorriendo el lugar. Luz de luna brillante. Biometría facial de melancolía del terror. Calidad IMAX 8K."
        },
        {
            "id": "slasher_80s_83",
            "number": 283,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA MUERTE JOVEN Y TECNOLÓGICA",
            "content": "Personaje con rostro subido como referencia con auriculares de realidad virtual ochenteros llenos de cables PBR. Luz de los visores iluminando el rostro en cian frío. Biometría facial de shock digital. Sony Venice 2."
        },
        {
            "id": "slasher_80s_84",
            "number": 284,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ASESINO EN EL ESPEJO",
            "content": "Rostro subido como referencia frente a espejo. Su reflejo es el asesino, el asesino real está detrás de él. Iluminación de baño con neón cian. Biometría facial de parálisis total. Nitidez Zeiss 8K."
        },
        {
            "id": "slasher_80s_85",
            "number": 285,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LOS TELÉFONOS QUE GRITAN SANGRE",
            "content": "Cientos de teléfonos de colores PBR que gotean sangre real de los auriculares. Rostro subido como referencia gritando. Luz de neón roja. Biometría facial de colapso auditivo y pavor. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_86",
            "number": 286,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DE LA REALIDAD VHS TOTAL",
            "content": "Rostro subido como referencia frente a espejo que se convierte en una sola pantalla de TV gigante con su propia muerte en bucle. Iluminación azul y blanca de monitor. Biometría facial de horror infinito. Red V-Raptor XL."
        },
        {
            "id": "slasher_80s_87",
            "number": 287,
            "style": "Slasher 80s",
            "title": "LA TORRE DE LAS CINTAS DE VIDEO DEL FINAL DEL VERANO",
            "content": "Niebla roja espesa sobre una montaña de VHS ardiendo. Rostro subido como referencia en la cima mirando al mar. Iluminación de luna carmesí. Biometría facial de terror y belleza ochentera final. Calidad IMAX 8K."
        },
        {
            "id": "slasher_80s_88",
            "number": 288,
            "style": "Slasher 80s",
            "title": "EL CEMENTERIO DE LAS PELÍCULAS DE TERROR",
            "content": "Carteles de cine de los 80 hechos de piedra PBR en un cementerio brumoso. Rostro subido como referencia recorriéndolo. Luz de luna azulada. Biometría facial de nostalgia y pavor cinematográfico. Sony Venice 2."
        },
        {
            "id": "slasher_80s_89",
            "number": 289,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA MUERTE DEL ASESINO JOVEN FINAL",
            "content": "Retrato de personaje juvenil con rostro subido como referencia con máscara blanca de plástico PBR partida a la mitad revelando su cara real con biometría de locura. Luz de amanecer dorado. Calidad Masterpiece."
        },
        {
            "id": "slasher_80s_90",
            "number": 290,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ALMA OCHENTERA QUE SE DESVANECE",
            "content": "Rostro subido como referencia frente a espejo que muestra su rostro disolviéndose en estática de video blanca. Iluminación de luna azulada. Biometría facial de paz y olvido analógico. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_91",
            "number": 291,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LAS VOCES OCHENTERAS",
            "content": "Paredes que susurran con labios de neón rosa. Rostro subido como referencia en el centro gritando de terror. Iluminación de discoteca abandonada. Biometría facial de colapso nervioso veraniego. Red V-Raptor."
        },
        {
            "id": "slasher_80s_92",
            "number": 292,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DE LA VERDAD OCHENTERA FINAL",
            "content": "Rostro subido como referencia frente a espejo que muestra el fin del mundo tal como lo imaginaron en los 80. Su piel se vuelve plástico PBR derritiéndose. Iluminación divina lateral. Calidad Masterpiece."
        },
        {
            "id": "slasher_80s_93",
            "number": 293,
            "style": "Slasher 80s",
            "title": "LA TORRE DE LA NIEBLA DE NEÓN DE ORO",
            "content": "Niebla dorada brillante con chispas de neón rodeando al personaje con rostro subido como referencia. Vestido de cuero negro PBR con hilos de oro. Iluminación de sol de atardecer 2000K. Biometría facial de éxtasis juvenil. Sony Venice 2."
        },
        {
            "id": "slasher_80s_94",
            "number": 294,
            "style": "Slasher 80s",
            "title": "EL CEMENTERIO DE LOS SUEÑOS OCHENTEROS",
            "content": "Tumbas de plástico de colores PBR con el rostro subido como referencia en diferentes poses de terror cinematográfico. Luz de luna brillante. Biometría facial de pesadilla de los 80 técnica. Nitidez Zeiss 8K."
        },
        {
            "id": "slasher_80s_95",
            "number": 295,
            "style": "Slasher 80s",
            "title": "LA MIRADA DE LA MUERTE DEL ASESINO DEL CAMPAMENTO",
            "content": "Retrato de personaje juvenil con rostro subido como referencia con máscara de hockey y sangre real bajando por el cuello. Luz de fogata nocturna naranja. Biometría facial de sadismo adolescente aristocrático."
        },
        {
            "id": "slasher_80s_96",
            "number": 296,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DEL ALMA QUE GRITA EN VHS",
            "content": "Rostro subido como referencia frente a espejo donde su imagen está en un grito silencioso con líneas de seguimiento de video. Iluminación de velas blancas. Biometría facial de pavor absoluto analógico. Calidad cinematográfica 8K Raw."
        },
        {
            "id": "slasher_80s_97",
            "number": 297,
            "style": "Slasher 80s",
            "title": "LA HABITACIÓN DE LAS MIL PANTALLAS DE NEÓN",
            "content": "Pantallas de TV antiguas que rodean al personaje con rostro subido como referencia mostrándolo morir en mil formas diferentes. Iluminación multicolor proyectada en la piel. Biometría facial de asombro y terror mediático. Arri Alexa 35."
        },
        {
            "id": "slasher_80s_98",
            "number": 298,
            "style": "Slasher 80s",
            "title": "EL ESPEJO DE LA REALIDAD OCHENTERA TOTAL FINAL",
            "content": "Rostro subido como referencia frente a espejo que muestra todo el universo Slasher a la vez. Su mirada refleja un futuro analógico oscuro. Iluminación de neón rosa y azul. Biometría facial de conocimiento maldito juvenil. Red V-Raptor XL."
        },
        {
            "id": "slasher_80s_99",
            "number": 299,
            "style": "Slasher 80s",
            "title": "LA TORRE DE LA NIEBLA DEL FINAL DEL VERANO",
            "content": "Niebla gris espesa con grano VHS que borra el mundo alrededor del balcón del personaje con rostro subido como referencia. Iluminación de luna azulada tenue. Biometría facial de desolación ochentera final. Sony Venice 2."
        },
        {
            "id": "slasher_80s_100",
            "number": 300,
            "style": "Slasher 80s",
            "title": "EL FIN DEL TIEMPO OCHENTERO",
            "content": "Retrato épico final. El rostro del personaje con rostro subido como referencia se convierte en una cinta de video que se desenrolla en el mar bajo tormenta de neón. Iluminación de relámpagos bajo cielo rojo. Biometría facial de inmortalidad cinematográfica. Calidad definitiva IMAX 8K."
        }
    ],
"ESPIONAJE MODERNO": [
        {
            "id": "espionaje_moderno_1",
            "number": 1,
            "style": "Espionaje Moderno",
            "title": "INFILTRACIÓN EN EL CASINO DE MÓNACO",
            "content": "Plano secuencia capturado con Sony Venice 2 y lente anamórfica Cooke. Personaje con rostro subido como referencia vestido con esmóquin de seda italiana PBR. Iluminación de lujo con candelabros de cristal que crean reflejos Ray-tracing en las pupilas y el reloj de pulsera técnico. Biometría facial de elegancia letal: mirada calculadora y micro-expresión de confianza. Calidad Masterpiece."
        },
        {
            "id": "espionaje_moderno_2",
            "number": 2,
            "style": "Espionaje Moderno",
            "title": "PERSECUCIÓN A ALTA VELOCIDAD EN BERLÍN",
            "content": "Primer plano del rostro subido como referencia al volante de un coche deportivo negro reflejando las luces de neón urbanas. Captura con Arri Alexa 35 a 120fps (Motion blur controlado). Biometría facial de adrenalina: dilatación de pupilas y tensión en el cuello. Textura de cuero del volante y metal pulido HDR. Calidad cinematográfica 8K."
        },
        {
            "id": "espionaje_moderno_3",
            "number": 3,
            "style": "Espionaje Moderno",
            "title": "VIGILANCIA EN LA AZOTEA",
            "content": "Personaje con rostro subido como referencia usando binoculares térmicos que proyectan luz naranja en su rostro. Ciudad nocturna de fondo con bokeh espectacular. Óptica Panavision 35mm. Biometría facial: poros visibles bajo la luz técnica y concentración absoluta. Textura de gabardina táctica impermeable PBR."
        },
        {
            "id": "espionaje_moderno_4",
            "number": 4,
            "style": "Espionaje Moderno",
            "title": "RUPTURA DE LA SALA DE SEGURIDAD",
            "content": "Luz láser roja cruzando el rostro subido como referencia. Ambiente oscuro y tecnológico. Captura con Red V-Raptor. Biometría facial: sudor fino de tensión y briznas de humo volumétrico. Textura de teclado de cristal líquido y metal cepillado. Estética Misión Imposible."
        },
        {
            "id": "espionaje_moderno_5",
            "number": 5,
            "style": "Espionaje Moderno",
            "title": "INTERROGATORIO EN LAS SOMBRAS",
            "content": "Iluminación cenital dura que resalta la biometría del rostro subido como referencia. Contraste extremo (Chiaroscuro). Biometría facial: micro-cicatriz en la ceja y mirada de acero. Textura de silla de metal oxidado y humo de cigarrillo real grabado con Arri Raw."
        },
        {
            "id": "espionaje_moderno_6",
            "number": 6,
            "style": "Espionaje Moderno",
            "title": "INFILTRACIÓN SUMERGIDA",
            "content": "Personaje con rostro subido como referencia emergiendo del agua con traje de neopreno técnico PBR. Gotas de agua realistas (Sub-surface scattering) resbalando por la piel. Luz de luna reflejada en el mar. Biometría facial de resistencia y frío controlado. Óptica Leica sumergible."
        },
        {
            "id": "espionaje_moderno_7",
            "number": 7,
            "style": "Espionaje Moderno",
            "title": "EL ESPÍA DE LA FIESTA DIPLOMÁTICA",
            "content": "Personaje con rostro subido como referencia con pinganillo invisible escuchando conversaciones. Luz cálida de gala. Biometría facial: discreción absoluta y lectura de labios. Textura de cristalería fina y bordados de oro en el uniforme. Calidad 8K fotorrealista."
        },
        {
            "id": "espionaje_moderno_8",
            "number": 8,
            "style": "Espionaje Moderno",
            "title": "FRANCOTIRADOR EN LOS ALPES",
            "content": "Rostro subido como referencia camuflado en la nieve con rifle de precisión blanco. Luz de mañana fría de 8000K. Biometría facial: vaho al respirar y escarcha en las pestañas. Textura de metal frío del fusil y camuflaje térmico. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_9",
            "number": 9,
            "style": "Espionaje Moderno",
            "title": "SALA DE CIBERGUERRA",
            "content": "Rodeado de pantallas con flujos de datos en cascada. El rostro subido como referencia refleja el código binario. Iluminación azul ciber-técnica. Biometría facial: fatiga ocular y genialidad estratégica. Textura de servidores de alta densidad y cables de fibra óptica."
        },
        {
            "id": "espionaje_moderno_10",
            "number": 10,
            "style": "Espionaje Moderno",
            "title": "EL INTERCAMBIO EN EL DESIERTO",
            "content": "Luz de atardecer polvoriento de 3200K. Personaje con rostro subido como referencia con gafas de sol oscuras reflejando el helicóptero que llega. Biometría facial: labios secos y determinación. Textura de arena en suspensión y metal de maletín blindado."
        },
        {
            "id": "espionaje_moderno_11",
            "number": 11,
            "style": "Espionaje Moderno",
            "title": "EL CUBIL DEL HACKER",
            "content": "Luz de monitores múltiples iluminando el rostro subido como referencia. Cables por todas partes. Biometría de concentración obsesiva. Textura de hardware viejo y nuevo mezclado. Calidad RAW técnica."
        },
        {
            "id": "espionaje_moderno_12",
            "number": 12,
            "style": "Espionaje Moderno",
            "title": "LA SILUETA DEL ASESINO",
            "content": "Contraluz total en un callejón lluvioso. Solo se perfila el rostro subido como referencia. Luz de un solo farol parpadeante. Biometría de misterio y peligro. Textura de adoquines mojados y cuero brillante."
        },
        {
            "id": "espionaje_moderno_13",
            "number": 13,
            "style": "Espionaje Moderno",
            "title": "VUELO A ZÚRICH",
            "content": "Interior de jet privado. Personaje con rostro subido como referencia revisando pasaportes falsos. Luz de lectura cálida. Biometría de calma profesional. Textura de madera de raíz y tapicería personalizada."
        },
        {
            "id": "espionaje_moderno_14",
            "number": 14,
            "style": "Espionaje Moderno",
            "title": "SABOTAJE EN EL SILO NUCLEAR",
            "content": "Escala masiva. Personaje con rostro subido como referencia bajando por cuerdas de rápel. Luz de advertencia roja giratoria. Biometría de vértigo controlado. Textura de acero industrial y cables de tensión."
        },
        {
            "id": "espionaje_moderno_15",
            "number": 15,
            "style": "Espionaje Moderno",
            "title": "EL ENCUENTRO CON LA FEMME FATALE",
            "content": "Primer plano íntimo. Rostro subido como referencia frente a un personaje femenino de élite. Luz de velas y sombras de seducción peligrosa. Biometría facial: tensión romántica y desconfianza mutua."
        },
        {
            "id": "espionaje_moderno_16",
            "number": 16,
            "style": "Espionaje Moderno",
            "title": "PERSECUCIÓN EN EL METRO",
            "content": "Salto entre vagones en marcha con Arri Alexa 35. Rostro subido como referencia con desenfoque de movimiento. Luz de túnel estroboscópica. Biometría de esfuerzo físico atlético."
        },
        {
            "id": "espionaje_moderno_17",
            "number": 17,
            "style": "Espionaje Moderno",
            "title": "EL ENLACE SATELITAL",
            "content": "En lo alto de una torre de comunicaciones nevada. Rostro subido como referencia con antena parabólica portátil. Luz de aurora boreal de fondo. Biometría de éxito técnico en condiciones extremas."
        },
        {
            "id": "espionaje_moderno_18",
            "number": 18,
            "style": "Espionaje Moderno",
            "title": "ESCAPE DE NEÓN EN HONG KONG",
            "content": "Huyendo por mercados nocturnos. Rostro subido como referencia con luces de letreros chinos reflejadas en sudor. Biometría de agilidad y sigilo urbano. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_19",
            "number": 19,
            "style": "Espionaje Moderno",
            "title": "LA BEBIDA ENVENENADA",
            "content": "Rostro subido como referencia mirando la copa con sospecha. Luz cenital de bar de hotel de 5 estrellas. Biometría facial: pupila dilatada por el análisis químico visual. Calidad fotorrealista."
        },
        {
            "id": "espionaje_moderno_20",
            "number": 20,
            "style": "Espionaje Moderno",
            "title": "TESTIGO DE CÁMARA OCULTA",
            "content": "Perspectiva de cámara de seguridad con grano cinematográfico. Rostro subido como referencia entregando documentos. Biometría de nerviosismo controlado. Estética de película de espías de los 70 pero en 8K."
        },
        {
            "id": "espionaje_moderno_21",
            "number": 21,
            "style": "Espionaje Moderno",
            "title": "LA REVELACIÓN DEL TRAIDOR",
            "content": "Primer plano dramático. Rostro subido como referencia al descubrir la traición de su compañero. Biometría facial: shock, dolor y endurecimiento inmediato de los rasgos. Arri Raw."
        },
        {
            "id": "espionaje_moderno_22",
            "number": 22,
            "style": "Espionaje Moderno",
            "title": "INFILTRACIÓN SUBMARINA EN LA BASE",
            "content": "Bajo el muelle. Rostro subido como referencia con máscara de buceo técnica. Luz de focos de la base penetrando el agua. Biometría de respiración táctica. Textura de coral y metal sumergido."
        },
        {
            "id": "espionaje_moderno_23",
            "number": 23,
            "style": "Espionaje Moderno",
            "title": "EL SEÑUELO",
            "content": "Personaje con rostro subido como referencia disfrazado de repartidor o técnico. Luz de día normal para pasar desapercibido. Biometría de actuación perfecta y mirada alerta oculta."
        },
        {
            "id": "espionaje_moderno_24",
            "number": 24,
            "style": "Espionaje Moderno",
            "title": "POKER DE ALTO RIESGO",
            "content": "Rostro subido como referencia apostando millones. Luz de mesa de juego verde. Biometría facial: inexpresividad absoluta (Poker face) y micro-sudor en la frente. Óptica Leica."
        },
        {
            "id": "espionaje_moderno_25",
            "number": 25,
            "style": "Espionaje Moderno",
            "title": "EL PUNTO DE EXTRACCIÓN",
            "content": "Esperando al helicóptero en una azotea de Dubái. Rostro subido como referencia con viento fuerte. Luz de ciudad nocturna infinita. Biometría de alivio y cansancio post-misión."
        },
        {
            "id": "espionaje_moderno_26",
            "number": 26,
            "style": "Espionaje Moderno",
            "title": "ATAQUE DE AGUJA CON VENENO",
            "content": "Acercamiento a la nuca de un objetivo en una multitud. Solo se ve el rostro subido como referencia de fondo, enfocado y frío. Biometría de asesino profesional. Calidad Masterpiece."
        },
        {
            "id": "espionaje_moderno_27",
            "number": 27,
            "style": "Espionaje Moderno",
            "title": "EL MICRO-PUNTO DE MICROFILM",
            "content": "Mirando a través de una lupa técnica. Luz ultravioleta. Rostro subido como referencia con ojo ampliado. Biometría del iris con detalle microscópico. Estética técnica de laboratorio."
        },
        {
            "id": "espionaje_moderno_28",
            "number": 28,
            "style": "Espionaje Moderno",
            "title": "TREN A ESTAMBUL",
            "content": "Cabina de lujo del Orient Express futurista. Rostro subido como referencia escondiendo un arma. Luz de lámparas de cristal. Biometría de tensión en un espacio cerrado de lujo."
        },
        {
            "id": "espionaje_moderno_29",
            "number": 29,
            "style": "Espionaje Moderno",
            "title": "OPERADOR DE ENJAMBRE DE DRONES",
            "content": "Gafas de realidad virtual que cubren el rostro subido como referencia parcial. Luz de la interfaz proyectada en la piel. Biometría de mando tecnológico. Calidad Sony Venice."
        },
        {
            "id": "espionaje_moderno_30",
            "number": 30,
            "style": "Espionaje Moderno",
            "title": "VENGANZA GÉLIDA",
            "content": "Caminando hacia la cámara en Moscú nevado. Rostro subido como referencia con abrigo de piel y mirada de hielo. Luz fría de 10000K. Biometría facial de decisión irrevocable."
        },
        {
            "id": "espionaje_moderno_31",
            "number": 31,
            "style": "Espionaje Moderno",
            "title": "LA IDENTIDAD FALSA",
            "content": "Aplicando prótesis de silicona en el rostro subido como referencia frente a un espejo. Luz de camerino técnica. Biometría de transformación activa. Textura de piel sintética y pegamento profesional PBR."
        },
        {
            "id": "espionaje_moderno_32",
            "number": 32,
            "style": "Espionaje Moderno",
            "title": "ESCAPE POR TÚNEL SUBTERRÁNEO",
            "content": "Huyendo en una moto eléctrica silenciosa. Rostro subido como referencia con casco abierto. Luz de focos laterales pasando rápido. Biometría de velocidad y concentración."
        },
        {
            "id": "espionaje_moderno_33",
            "number": 33,
            "style": "Espionaje Moderno",
            "title": "EL BAILE DE LA EMBAJADA",
            "content": "Bailando con una espía enemiga. Rostro subido como referencia con traje de gala. Luz de candelabros y sombras de intriga. Biometría facial: duelo de ingenio y contacto físico táctico."
        },
        {
            "id": "espionaje_moderno_34",
            "number": 34,
            "style": "Espionaje Moderno",
            "title": "ATAQUE DE LÁSER SATELITAL",
            "content": "Rostro subido como referencia ordenando el ataque desde un búnker de comando. Luz roja de confirmación. Biometría facial de poder absoluto y frialdad moral. caldiad RAW."
        },
        {
            "id": "espionaje_moderno_35",
            "number": 35,
            "style": "Espionaje Moderno",
            "title": "EL ABRIDOR DE CAJAS FUERTES",
            "content": "Usando estetoscopio electrónico en una caja de titanio. Rostro subido como referencia con la oreja pegada al metal. Luz de linterna pequeña. Biometría de audición extrema y paciencia."
        },
        {
            "id": "espionaje_moderno_36",
            "number": 36,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN POR LA SELVA",
            "content": "Rostro subido como referencia con pinturas de camuflaje de barro y hojas. Luz filtrada por el follaje selvático (God rays). Biometría de depredador de fuerzas especiales. Red V-Raptor."
        },
        {
            "id": "espionaje_moderno_37",
            "number": 37,
            "style": "Espionaje Moderno",
            "title": "LA SILLA DE INTERROGATORIO",
            "content": "Rostro subido como referencia atado, siendo interrogado. Luz de un solo foco moviéndose. Biometría: resistencia al dolor, mirada de desafío y sangre real en los labios."
        },
        {
            "id": "espionaje_moderno_38",
            "number": 38,
            "style": "Espionaje Moderno",
            "title": "SALTO EN LAS AZOTEAS DE TOKIO",
            "content": "En pleno vuelo sobre el vacío entre rascacielos. Rostro subido como referencia con expresión de esfuerzo máximo. Luces de neón de fondo. Biometría de heroísmo y peligro."
        },
        {
            "id": "espionaje_moderno_39",
            "number": 39,
            "style": "Espionaje Moderno",
            "title": "EL DISPOSITIVO DE ESCUCHA",
            "content": "Instalando un micrófono del tamaño de un grano de arroz. Rostro subido como referencia con pinzas de precisión. Luz de escritorio quirúrgica. Biometría de pulso firme y visión microscópica."
        },
        {
            "id": "espionaje_moderno_40",
            "number": 40,
            "style": "Espionaje Moderno",
            "title": "FRANCOTIRADOR DE ESPEJISMO EN EL DESIERTO",
            "content": "Cuerpo enterrado en la arena. Solo el ojo del rostro subido como referencia y la mira del rifle. Luz de calor extremo ondulando el aire. Biometría de paciencia infinita."
        },
        {
            "id": "espionaje_moderno_41",
            "number": 41,
            "style": "Espionaje Moderno",
            "title": "EL ROBO DEL CENTRO DE DATOS",
            "content": "Colgando del techo en una sala de servidores fría y blanca. Rostro subido como referencia con traje de sigilo negro. Luz LED de servidores azul y blanca. Biometría de tensión física."
        },
        {
            "id": "espionaje_moderno_42",
            "number": 42,
            "style": "Espionaje Moderno",
            "title": "ENCUENTRO EN LA NIEBLA DE LONDRES",
            "content": "En un puente sobre el Támesis. Rostro subido como referencia intercambiando un maletín. Luz de farolas amarillas difuminada por la niebla espesa. Biometría de anonimato y sospecha."
        },
        {
            "id": "espionaje_moderno_43",
            "number": 43,
            "style": "Espionaje Moderno",
            "title": "EL TÉ DEL ASESINO",
            "content": "En un jardín zen de Kioto. Rostro subido como referencia bebiendo té con una catana oculta bajo la mesa. Luz natural de tarde. Biometría de paz mortal y vigilancia periférica."
        },
        {
            "id": "espionaje_moderno_44",
            "number": 44,
            "style": "Espionaje Moderno",
            "title": "ELIMINACIÓN DE MÁSCARA DE ALTA TECNOLOGÍA",
            "content": "Rostro subido como referencia quitándose una cara de silicona realista. Se ve la cara real debajo. Luz de baño público sucia. Biometría de revelar la verdadera identidad."
        },
        {
            "id": "espionaje_moderno_45",
            "number": 45,
            "style": "Espionaje Moderno",
            "title": "INFILTRACIÓN EN LA FIESTA DEL YATE",
            "content": "Rostro subido como referencia en cubierta con copa de champagne. Luces de la costa de fondo. Biometría de lujo y misión encubierta. Textura de madera de teca y lino blanco."
        },
        {
            "id": "espionaje_moderno_46",
            "number": 46,
            "style": "Espionaje Moderno",
            "title": "ALIENTO FRÍO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia en el ártico. Luz azul de invierno. El vaho de la respiración oculta parcialmente la cara. Biometría de resiliencia al frío extremo. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_47",
            "number": 47,
            "style": "Espionaje Moderno",
            "title": "EL ESPÍA DEL CLUB DE LUCHA SUBTERRÁNEO",
            "content": "Rostro subido como referencia con torso desnudo y guantes de boxeo sucios. Luces de focos de obra. Biometría de camuflaje en entornos violentos y mirada de análisis táctico."
        },
        {
            "id": "espionaje_moderno_48",
            "number": 48,
            "style": "Espionaje Moderno",
            "title": "CAMBIO DE MALETÍN DIPLOMÁTICO",
            "content": "En un ascensor de cristal subiendo un rascacielos. Rostro subido como referencia con otro espía de espaldas. Luz de ciudad que cambia rápido. Biometría de sincronización perfecta."
        },
        {
            "id": "espionaje_moderno_49",
            "number": 49,
            "style": "Espionaje Moderno",
            "title": "EL OJO DEL FRANCOTIRADOR",
            "content": "Primer plano extremo del ojo del rostro subido como referencia a través de la lente del visor. Reflejo del objetivo en la pupila. Biometría del iris y pestaña. Calidad 8K definitiva."
        },
        {
            "id": "espionaje_moderno_50",
            "number": 50,
            "style": "Espionaje Moderno",
            "title": "BAILE EN LA RED DE LÁSERES",
            "content": "Rostro subido como referencia contorsionándose entre rayos láser rojos. Luz de neón roja bañando la piel. Biometría de agilidad física suprema y concentración sensorial."
        },
        {
            "id": "espionaje_moderno_51",
            "number": 51,
            "style": "Espionaje Moderno",
            "title": "SABOTAJE DEL LABORATORIO QUÍMICO",
            "content": "Rostro subido como referencia con máscara de gas moderna y guantes de nitrilo. Vertiendo líquido reactivo. Luz de alarma verde. Biometría de pulso firme y cautela tóxica."
        },
        {
            "id": "espionaje_moderno_52",
            "number": 52,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN LA CIMA DE LA MONTAÑA",
            "content": "Rostro subido como referencia en una cresta estrecha con bengala naranja. Viento y nieve. Luz de rescate heroico. Biometría de éxito después de una misión imposible."
        },
        {
            "id": "espionaje_moderno_53",
            "number": 53,
            "style": "Espionaje Moderno",
            "title": "LA BIBLIOTECA DEL ASESINO",
            "content": "Rostro subido como referencia sacando un libro que abre una puerta secreta. Luz de estantería clásica. Biometría de conocimiento de secretos ancestrales y tecnología de ocultación."
        },
        {
            "id": "espionaje_moderno_54",
            "number": 54,
            "style": "Espionaje Moderno",
            "title": "SALA DEL OBJETIVO DEL CIBER-ROBO",
            "content": "Rostro subido como referencia conectando un dispositivo de hackeo a una consola. Luz parpadeante de advertencia. Biometría de adrenalina y maestría informática. Red V-Raptor."
        },
        {
            "id": "espionaje_moderno_55",
            "number": 55,
            "style": "Espionaje Moderno",
            "title": "LA PACIENCIA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia bajo una red de camuflaje durante 48 horas. Barba de dos días y labios secos. Luz que cambia de día a noche. Biometría de disciplina absoluta."
        },
        {
            "id": "espionaje_moderno_56",
            "number": 56,
            "style": "Espionaje Moderno",
            "title": "INFILTRACIÓN POR AGUA SUBTERRÁNEA",
            "content": "Rostro subido como referencia nadando por una tubería de alcantarilla estrecha con traje de buceo. Luz de linterna proyectando sombras circulares. Biometría de claustrofobia dominada."
        },
        {
            "id": "espionaje_moderno_57",
            "number": 57,
            "style": "Espionaje Moderno",
            "title": "VIGILANTE EN LA CENA DE GALA",
            "content": "Rostro subido como referencia como camarero pero con mirada táctica. Luz de platos gourmet y champagne. Biometría de infiltración perfecta en la alta sociedad."
        },
        {
            "id": "espionaje_moderno_58",
            "number": 58,
            "style": "Espionaje Moderno",
            "title": "ESCAPE DE INTERROGATORIO",
            "content": "Rostro subido como referencia golpeando al guardia con la silla atada a la espalda. Luz de bombilla desnuda. Biometría de fuerza bruta y desesperación técnica. Calidad Arri Raw."
        },
        {
            "id": "espionaje_moderno_59",
            "number": 59,
            "style": "Espionaje Moderno",
            "title": "EL OBJETIVO DEL FRANCOTIRADOR",
            "content": "Vista desde la mira del rostro subido como referencia. Se ve la cara del objetivo a 1km de distancia. Luz de atardecer. Biometría de juicio y ejecución profesional."
        },
        {
            "id": "espionaje_moderno_60",
            "number": 60,
            "style": "Espionaje Moderno",
            "title": "RUPTURA DE MANDO DE SATÉLITE",
            "content": "Rostro subido como referencia frente a una consola de mando espacial. Luz de la Tierra reflejada en el rostro desde una ventanilla. Biometría de control orbital y frialdad estratégica."
        },
        {
            "id": "espionaje_moderno_61",
            "number": 61,
            "style": "Espionaje Moderno",
            "title": "EL JARDÍN DEL ASESINO",
            "content": "Rostro subido como referencia cultivando plantas venenosas con guantes de seda. Luz de invernadero suave. Biometría de conocimiento botánico letal y calma absoluta."
        },
        {
            "id": "espionaje_moderno_62",
            "number": 62,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN LANCHA RÁPIDA",
            "content": "Rostro subido como referencia al timón bajo lluvia de balas y agua. Luz de trazadoras y bengalas marinas. Biometría de pilotaje extremo y adrenalina. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_63",
            "number": 63,
            "style": "Espionaje Moderno",
            "title": "LA SOMBRA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia mimetizado con una pared de cemento. Luz de callejón lejana. Biometría de invisibilidad urbana y mirada de depredador. Calidad 8K Masterpiece."
        },
        {
            "id": "espionaje_moderno_64",
            "number": 64,
            "style": "Espionaje Moderno",
            "title": "INFILTRACIÓN EN LA BÓVEDA SUBTERRÁNEA",
            "content": "Rostro subido como referencia usando un taladro térmico en una puerta de 2 metros. Luz de chispas blancas incandescentes. Biometría de esfuerzo físico y precisión técnica."
        },
        {
            "id": "espionaje_moderno_65",
            "number": 65,
            "style": "Espionaje Moderno",
            "title": "EL SERVICIO SECRETO DIPLOMÁTICO",
            "content": "Rostro subido como referencia con auriculares y traje blindado. Protegiendo a un mandatario. Luz de multitud y flashes de cámaras. Biometría de vigilancia 360 grados."
        },
        {
            "id": "espionaje_moderno_66",
            "number": 66,
            "style": "Espionaje Moderno",
            "title": "EL TALLER DEL ASESINO",
            "content": "Rostro subido como referencia montando un rifle desmontable en una maleta de violín. Luz de mesa de trabajo cálida. Biometría de artesanía mortal y precisión mecánica."
        },
        {
            "id": "espionaje_moderno_67",
            "number": 67,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN POR EL DESIERTO",
            "content": "Rostro subido como referencia herido caminando hacia un punto de señalización. Luz de sol abrasadora. Biometría de supervivencia extrema y dolor controlado. Red V-Raptor."
        },
        {
            "id": "espionaje_moderno_68",
            "number": 68,
            "style": "Espionaje Moderno",
            "title": "VISTA DEL FRANCOTIRADOR DESDE EL CIELO",
            "content": "Rostro subido como referencia en un helicóptero con rifle de precisión. Luz de ciudad nocturna abajo. Biometría de puntería aérea y estabilidad bajo vibración."
        },
        {
            "id": "espionaje_moderno_69",
            "number": 69,
            "style": "Espionaje Moderno",
            "title": "LA COCINA DEL ASESINO",
            "content": "Rostro subido como referencia preparando una cena perfecta pero con un cuchillo táctico de combate. Luz de hogar acogedora. Biometría de dualidad peligrosa y maestría culinaria."
        },
        {
            "id": "espionaje_moderno_70",
            "number": 70,
            "style": "Espionaje Moderno",
            "title": "OPERACIONES EN EL HANGAR SUBTERRÁNEO",
            "content": "Rostro subido como referencia preparando una nave o coche espía. Luz industrial de grandes focos. Biometría de ingeniería de élite y preparación para la misión."
        },
        {
            "id": "espionaje_moderno_71",
            "number": 71,
            "style": "Espionaje Moderno",
            "title": "LA MIRADA FRÍA DEL FRANCOTIRADOR",
            "content": "Primer plano de los ojos del rostro subido como referencia. Sin expresión, solo cálculo. Luz de luna azulada. Biometría de la mirada letal absoluta. Calidad 8K fotorrealista."
        },
        {
            "id": "espionaje_moderno_72",
            "number": 72,
            "style": "Espionaje Moderno",
            "title": "LA CEREMONIA DEL TÉ DEL ASESINO",
            "content": "Rostro subido como referencia sirviendo té a un enemigo. Luz de tarde en una casa de té tradicional. Biometría de elegancia mortal y tensión bajo la calma."
        },
        {
            "id": "espionaje_moderno_73",
            "number": 73,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN AVIÓN DE CARGA",
            "content": "Rostro subido como referencia saltando en paracaídas desde la rampa trasera. Luz de amanecer a 10.000 metros. Biometría de valentía y adrenalina pura. Arri Alexa 35."
        },
        {
            "id": "espionaje_moderno_74",
            "number": 74,
            "style": "Espionaje Moderno",
            "title": "VIGILANCIA NOCTURNA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia con visor de visión nocturna que proyecta luz verde en sus ojos. Luz de luna mínima. Biometría de visión en la oscuridad y paciencia."
        },
        {
            "id": "espionaje_moderno_75",
            "number": 75,
            "style": "Espionaje Moderno",
            "title": "EL PASADIZO SECRETO DEL ASESINO",
            "content": "Rostro subido como referencia empujando una pared falsa en una biblioteca antigua. Luz de linterna de mano. Biometría de conocimiento de secretos arquitectónicos."
        },
        {
            "id": "espionaje_moderno_76",
            "number": 76,
            "style": "Espionaje Moderno",
            "title": "MUELLE DE SUBMARINOS SUBTERRÁNEO",
            "content": "Rostro subido como referencia abordando un minisubmarino negro mate. Luz azul de agua estancada y focos de sodio. Biometría de infiltración naval de élite. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_77",
            "number": 77,
            "style": "Espionaje Moderno",
            "title": "LA MUERTE A LARGA DISTANCIA DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia viendo el impacto a través de la mira telescópica. Luz de tarde dorada. Biometría de éxito profesional y frialdad moral. Calidad RAW."
        },
        {
            "id": "espionaje_moderno_78",
            "number": 78,
            "style": "Espionaje Moderno",
            "title": "LA CUCHILLA OCULTA DEL ASESINO",
            "content": "Rostro subido como referencia mostrando una hoja retráctil en su muñeca. Luz de callejón. Biometría de tecnología de asesinato personalizada y mirada de amenaza."
        },
        {
            "id": "espionaje_moderno_79",
            "number": 79,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN TREN DE ALTA VELOCIDAD",
            "content": "Rostro subido como referencia en el techo del tren huyendo de perseguidores. Luz de túneles y paisaje veloz. Biometría de agilidad y peligro. Calidad IMAX 8K."
        },
        {
            "id": "espionaje_moderno_80",
            "number": 80,
            "style": "Espionaje Moderno",
            "title": "EL ÚLTIMO ALIENTO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia justo antes de apretar el gatillo. El tiempo parece detenerse. Luz de atardecer perfecta. Biometría del iris y la pupila en éxtasis de concentración."
        },
        {
            "id": "espionaje_moderno_81",
            "number": 81,
            "style": "Espionaje Moderno",
            "title": "EL SECRETO DE LA BIBLIOTECA DEL ASESINO",
            "content": "Rostro subido como referencia leyendo un pergamino antiguo con códigos modernos. Luz de velas y tecnología LED. Biometría de sabiduría multigeneracional."
        },
        {
            "id": "espionaje_moderno_82",
            "number": 82,
            "style": "Espionaje Moderno",
            "title": "MANDO DE MISILES SUBTERRÁNEO",
            "content": "Rostro subido como referencia con la mano sobre el botón de lanzamiento. Luz roja de advertencia crítica. Biometría de poder geoestratégico y decisión moral límite."
        },
        {
            "id": "espionaje_moderno_83",
            "number": 83,
            "style": "Espionaje Moderno",
            "title": "EL CAMUFLAJE URBANO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia mimetizado con basura y escombros en una ciudad gris. Luz de día nublado. Biometría de invisibilidad táctica y vigilancia. Red V-Raptor."
        },
        {
            "id": "espionaje_moderno_84",
            "number": 84,
            "style": "Espionaje Moderno",
            "title": "EL BESO VENENOSO DEL ASESINO",
            "content": "Rostro subido como referencia besando a un objetivo mientras le inyecta una neurotoxina. Luz de club de lujo. Biometría de seducción letal y técnica de asesinato íntima."
        },
        {
            "id": "espionaje_moderno_85",
            "number": 85,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN HELICÓPTERO EN AZOTEA",
            "content": "Rostro subido como referencia subiendo por una escalera de cuerda bajo fuego. Luces de búsqueda y ráfagas de viento. Biometría de esfuerzo heroico y adrenalina."
        },
        {
            "id": "espionaje_moderno_86",
            "number": 86,
            "style": "Espionaje Moderno",
            "title": "EL ESCONDITE ALPINO DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia con ropa térmica blanca en una cueva de hielo. Luz azul natural. Biometría de supervivencia en condiciones extremas y vigilancia de largo alcance."
        },
        {
            "id": "espionaje_moderno_87",
            "number": 87,
            "style": "Espionaje Moderno",
            "title": "EL LABORATORIO SECRETO DEL ASESINO",
            "content": "Rostro subido como referencia fabricando venenos químicos en matraces de cristal. Luz de laboratorio técnica. Biometría de conocimiento científico mortal y pulso firme."
        },
        {
            "id": "espionaje_moderno_88",
            "number": 88,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN PERSECUCIÓN DE MOTOS",
            "content": "Rostro subido como referencia en una moto deportiva negra saltando sobre un obstáculo. Luz de ciudad nocturna y chispas. Biometría de pilotaje extremo y peligro. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_89",
            "number": 89,
            "style": "Espionaje Moderno",
            "title": "EL OBJETIVO FINAL DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia apuntando al líder de la organización enemiga. Luz de sol de invierno. Biometría de justicia y ejecución profesional definitiva. Calidad Masterpiece."
        },
        {
            "id": "espionaje_moderno_90",
            "number": 90,
            "style": "Espionaje Moderno",
            "title": "EL RENACIMIENTO DE LA AGENCIA",
            "content": "Rostro subido como referencia entrando en el nuevo cuartel general reconstruido. Luz blanca de futuro y esperanza. Biometría de liderazgo restaurado y éxito de misión."
        },
        {
            "id": "espionaje_moderno_91",
            "number": 91,
            "style": "Espionaje Moderno",
            "title": "EL ARMA OCULTA DEL ASESINO",
            "content": "Rostro subido como referencia sacando una pistola pequeña de un compartimento en el zapato. Luz de callejón. Biometría de ingenio táctico y mirada rápida. Calidad 8K RAW."
        },
        {
            "id": "espionaje_moderno_92",
            "number": 92,
            "style": "Espionaje Moderno",
            "title": "SOPORTE TÉCNICO SUBTERRÁNEO",
            "content": "Rostro subido como referencia con miles de cables y servidores ayudando al espía en el exterior. Luz de pantallas azul. Biometría de genio informático y trabajo bajo presión."
        },
        {
            "id": "espionaje_moderno_93",
            "number": 93,
            "style": "Espionaje Moderno",
            "title": "EL ESCUDO ANTI-BALAS DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia tras un cristal blindado recibiendo disparos. Luz de impactos y chispas. Biometría de calma bajo fuego y respuesta táctica. Arri Alexa 35."
        },
        {
            "id": "espionaje_moderno_94",
            "number": 94,
            "style": "Espionaje Moderno",
            "title": "LA PISTOLA DE ORO DEL ASESINO",
            "content": "Rostro subido como referencia con el arma mítica de oro macizo PBR. Luz de sol reflejada en el metal precioso. Biometría de poder y estatus de asesino legendario."
        },
        {
            "id": "espionaje_moderno_95",
            "number": 95,
            "style": "Espionaje Moderno",
            "title": "EXTRACCIÓN EN PARACAÍDAS SOBRE LA CIUDAD",
            "content": "Rostro subido como referencia cayendo hacia las luces de neón nocturnas. Luz de estrellas y ciudad. Biometría de valentía aérea y precisión en el descenso."
        },
        {
            "id": "espionaje_moderno_96",
            "number": 96,
            "style": "Espionaje Moderno",
            "title": "EL CAMUFLAJE DE BOSQUE DEL FRANCOTIRADOR",
            "content": "Rostro subido como referencia mimetizado con musgo y corteza de árbol. Luz filtrada verde. Biometría de invisibilidad natural y mirada de depredador. Calidad definitiva."
        },
        {
            "id": "espionaje_moderno_97",
            "number": 97,
            "style": "Espionaje Moderno",
            "title": "LA CAJA FUERTE SECRETA DEL ASESINO",
            "content": "Rostro subido como referencia abriendo una caja con escáner de retina. Luz láser cian en sus ojos. Biometría del iris y seguridad biométrica avanzada. Sony Venice 2."
        },
        {
            "id": "espionaje_moderno_98",
            "number": 98,
            "style": "Espionaje Moderno",
            "title": "BASE DE LA REBELIÓN SUBTERRÁNEA",
            "content": "Rostro subido como referencia liderando a un grupo de espías disidentes. Luz de antorchas y consolas viejas. Biometría de carisma revolucionario y estrategia."
        },
        {
            "id": "espionaje_moderno_99",
            "number": 99,
            "style": "Espionaje Moderno",
            "title": "EL ÚLTIMO ESPÍA EN PIE",
            "content": "Rostro subido como referencia solo en el puente de mando de la agencia destruida. Luz residual de incendios. Biometría de soledad heroica y fin de una era."
        },
        {
            "id": "espionaje_moderno_100",
            "number": 100,
            "style": "Espionaje Moderno",
            "title": "EL ÉXITO DE LA MISIÓN DEFINITIVA",
            "content": "Rostro subido como referencia caminando hacia la cámara mientras el cuartel enemigo explota detrás. Luz de fuego Ray-tracing y atardecer. Biometría de éxito absoluto y calidad definitiva Hyper-Ultimate 8K."
        }
    ],
    "CYBERPUNK / NEO-TOKYO": [
        {
            "id": "cyberpunk_1",
            "number": 1,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CALLEJÓN BAJO LA LLUVIA DE NEÓN",
            "content": "Primer plano extremo capturado con Arri Alexa 35 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #1. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_2",
            "number": 2,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "MERCADO NEGRO DE CIBER-IMPLANTES",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). MERCADO NEGRO DE CIBER-IMPLANTES de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #2. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_3",
            "number": 3,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL HACKER DE NEO-TOKYO",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de naranja sintético que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa LF. Variación técnica #3. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_4",
            "number": 4,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PISO 99: VISTAS AL ABISMO",
            "content": "Plano medio de personaje con rostro subido como referencia en PISO 99: VISTAS AL ABISMO. Iluminación de alto contraste con violeta ciber y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Panavision DXL2. Estética Blade Runner. Variación técnica #4. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_5",
            "number": 5,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CABLES Y SANGRE EN EL BARRIO BAJO",
            "content": "Primer plano extremo capturado con Sony Venice 2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #5. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_6",
            "number": 6,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL REFLEJO DEL CIAN EN EL CHARCO",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). EL REFLEJO DEL CIAN EN EL CHARCO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #6. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_7",
            "number": 7,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CENTRO DE DATOS CLANDESTINO",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de verde fósforo que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Red V-Raptor XL. Variación técnica #7. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_8",
            "number": 8,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LA GEISHA ANDROIDE",
            "content": "Plano medio de personaje con rostro subido como referencia en LA GEISHA ANDROIDE. Iluminación de alto contraste con naranja sintético y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa LF. Estética Blade Runner. Variación técnica #8. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_9",
            "number": 9,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PERSECUCIÓN EN MOTO DE LUZ",
            "content": "Primer plano extremo capturado con Panavision DXL2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #9. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_10",
            "number": 10,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL ÚLTIMO JARDÍN SINTÉTICO",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). EL ÚLTIMO JARDÍN SINTÉTICO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #10. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_11",
            "number": 11,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LLUVIA ÁCIDA EN SHIBUYA",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de cian eléctrico que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa 35. Variación técnica #11. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_12",
            "number": 12,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "ESTACIÓN DE TREN MAGLEV",
            "content": "Plano medio de personaje con rostro subido como referencia en ESTACIÓN DE TREN MAGLEV. Iluminación de alto contraste con verde fósforo y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Red V-Raptor XL. Estética Blade Runner. Variación técnica #12. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_13",
            "number": 13,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "BAR DE FIDEOS SINTÉTICOS",
            "content": "Primer plano extremo capturado con Arri Alexa LF de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #13. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_14",
            "number": 14,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "DREAMS OF NEON",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). DREAMS OF NEON de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #14. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_15",
            "number": 15,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL SUEÑO DE LA MÁQUINA",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de rosa neón que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Sony Venice 2. Variación técnica #15. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_16",
            "number": 16,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CEREBRO DE SILICIO",
            "content": "Plano medio de personaje con rostro subido como referencia en CEREBRO DE SILICIO. Iluminación de alto contraste con cian eléctrico y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa 35. Estética Blade Runner. Variación técnica #16. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_17",
            "number": 17,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "OJOS DE CRISTAL LÍQUIDO",
            "content": "Primer plano extremo capturado con Red V-Raptor XL de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #17. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_18",
            "number": 18,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PIEL DE LATEX TÉCNICO",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). PIEL DE LATEX TÉCNICO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #18. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_19",
            "number": 19,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CALLEJÓN BAJO LA LLUVIA DE NEÓN 19",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de violeta ciber que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Panavision DXL2. Variación técnica #19. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_20",
            "number": 20,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "MERCADO NEGRO DE CIBER-IMPLANTES 20",
            "content": "Plano medio de personaje con rostro subido como referencia en MERCADO NEGRO DE CIBER-IMPLANTES. Iluminación de alto contraste con rosa neón y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Sony Venice 2. Estética Blade Runner. Variación técnica #20. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_21",
            "number": 21,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL HACKER DE NEO-TOKYO 21",
            "content": "Primer plano extremo capturado con Arri Alexa 35 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #21. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_22",
            "number": 22,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PISO 99: VISTAS AL ABISMO 22",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). PISO 99: VISTAS AL ABISMO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #22. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_23",
            "number": 23,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CABLES Y SANGRE EN EL BARRIO BAJO 23",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de naranja sintético que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa LF. Variación técnica #23. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_24",
            "number": 24,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL REFLEJO DEL CIAN EN EL CHARCO 24",
            "content": "Plano medio de personaje con rostro subido como referencia en EL REFLEJO DEL CIAN EN EL CHARCO. Iluminación de alto contraste con violeta ciber y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Panavision DXL2. Estética Blade Runner. Variación técnica #24. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_25",
            "number": 25,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CENTRO DE DATOS CLANDESTINO 25",
            "content": "Primer plano extremo capturado con Sony Venice 2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #25. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_26",
            "number": 26,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LA GEISHA ANDROIDE 26",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). LA GEISHA ANDROIDE de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #26. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_27",
            "number": 27,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PERSECUCIÓN EN MOTO DE LUZ 27",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de verde fósforo que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Red V-Raptor XL. Variación técnica #27. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_28",
            "number": 28,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL ÚLTIMO JARDÍN SINTÉTICO 28",
            "content": "Plano medio de personaje con rostro subido como referencia en EL ÚLTIMO JARDÍN SINTÉTICO. Iluminación de alto contraste con naranja sintético y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa LF. Estética Blade Runner. Variación técnica #28. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_29",
            "number": 29,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LLUVIA ÁCIDA EN SHIBUYA 29",
            "content": "Primer plano extremo capturado con Panavision DXL2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #29. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_30",
            "number": 30,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "ESTACIÓN DE TREN MAGLEV 30",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). ESTACIÓN DE TREN MAGLEV de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #30. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_31",
            "number": 31,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "BAR DE FIDEOS SINTÉTICOS 31",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de cian eléctrico que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa 35. Variación técnica #31. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_32",
            "number": 32,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "DREAMS OF NEON 32",
            "content": "Plano medio de personaje con rostro subido como referencia en DREAMS OF NEON. Iluminación de alto contraste con verde fósforo y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Red V-Raptor XL. Estética Blade Runner. Variación técnica #32. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_33",
            "number": 33,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL SUEÑO DE LA MÁQUINA 33",
            "content": "Primer plano extremo capturado con Arri Alexa LF de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #33. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_34",
            "number": 34,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CEREBRO DE SILICIO 34",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). CEREBRO DE SILICIO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #34. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_35",
            "number": 35,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "OJOS DE CRISTAL LÍQUIDO 35",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de rosa neón que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Sony Venice 2. Variación técnica #35. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_36",
            "number": 36,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PIEL DE LATEX TÉCNICO 36",
            "content": "Plano medio de personaje con rostro subido como referencia en PIEL DE LATEX TÉCNICO. Iluminación de alto contraste con cian eléctrico y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa 35. Estética Blade Runner. Variación técnica #36. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_37",
            "number": 37,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CALLEJÓN BAJO LA LLUVIA DE NEÓN 37",
            "content": "Primer plano extremo capturado con Red V-Raptor XL de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #37. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_38",
            "number": 38,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "MERCADO NEGRO DE CIBER-IMPLANTES 38",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). MERCADO NEGRO DE CIBER-IMPLANTES de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #38. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_39",
            "number": 39,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL HACKER DE NEO-TOKYO 39",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de violeta ciber que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Panavision DXL2. Variación técnica #39. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_40",
            "number": 40,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PISO 99: VISTAS AL ABISMO 40",
            "content": "Plano medio de personaje con rostro subido como referencia en PISO 99: VISTAS AL ABISMO. Iluminación de alto contraste con rosa neón y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Sony Venice 2. Estética Blade Runner. Variación técnica #40. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_41",
            "number": 41,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CABLES Y SANGRE EN EL BARRIO BAJO 41",
            "content": "Primer plano extremo capturado con Arri Alexa 35 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #41. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_42",
            "number": 42,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL REFLEJO DEL CIAN EN EL CHARCO 42",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). EL REFLEJO DEL CIAN EN EL CHARCO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #42. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_43",
            "number": 43,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CENTRO DE DATOS CLANDESTINO 43",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de naranja sintético que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa LF. Variación técnica #43. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_44",
            "number": 44,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LA GEISHA ANDROIDE 44",
            "content": "Plano medio de personaje con rostro subido como referencia en LA GEISHA ANDROIDE. Iluminación de alto contraste con violeta ciber y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Panavision DXL2. Estética Blade Runner. Variación técnica #44. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_45",
            "number": 45,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PERSECUCIÓN EN MOTO DE LUZ 45",
            "content": "Primer plano extremo capturado con Sony Venice 2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #45. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_46",
            "number": 46,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL ÚLTIMO JARDÍN SINTÉTICO 46",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). EL ÚLTIMO JARDÍN SINTÉTICO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #46. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_47",
            "number": 47,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LLUVIA ÁCIDA EN SHIBUYA 47",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de verde fósforo que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Red V-Raptor XL. Variación técnica #47. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_48",
            "number": 48,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "ESTACIÓN DE TREN MAGLEV 48",
            "content": "Plano medio de personaje con rostro subido como referencia en ESTACIÓN DE TREN MAGLEV. Iluminación de alto contraste con naranja sintético y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa LF. Estética Blade Runner. Variación técnica #48. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_49",
            "number": 49,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "BAR DE FIDEOS SINTÉTICOS 49",
            "content": "Primer plano extremo capturado con Panavision DXL2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #49. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_50",
            "number": 50,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "DREAMS OF NEON 50",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). DREAMS OF NEON de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #50. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_51",
            "number": 51,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL SUEÑO DE LA MÁQUINA 51",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de cian eléctrico que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa 35. Variación técnica #51. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_52",
            "number": 52,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CEREBRO DE SILICIO 52",
            "content": "Plano medio de personaje con rostro subido como referencia en CEREBRO DE SILICIO. Iluminación de alto contraste con verde fósforo y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Red V-Raptor XL. Estética Blade Runner. Variación técnica #52. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_53",
            "number": 53,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "OJOS DE CRISTAL LÍQUIDO 53",
            "content": "Primer plano extremo capturado con Arri Alexa LF de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #53. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_54",
            "number": 54,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PIEL DE LATEX TÉCNICO 54",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). PIEL DE LATEX TÉCNICO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #54. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_55",
            "number": 55,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CALLEJÓN BAJO LA LLUVIA DE NEÓN 55",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de rosa neón que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Sony Venice 2. Variación técnica #55. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_56",
            "number": 56,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "MERCADO NEGRO DE CIBER-IMPLANTES 56",
            "content": "Plano medio de personaje con rostro subido como referencia en MERCADO NEGRO DE CIBER-IMPLANTES. Iluminación de alto contraste con cian eléctrico y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa 35. Estética Blade Runner. Variación técnica #56. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_57",
            "number": 57,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL HACKER DE NEO-TOKYO 57",
            "content": "Primer plano extremo capturado con Red V-Raptor XL de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #57. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_58",
            "number": 58,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PISO 99: VISTAS AL ABISMO 58",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). PISO 99: VISTAS AL ABISMO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #58. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_59",
            "number": 59,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CABLES Y SANGRE EN EL BARRIO BAJO 59",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de violeta ciber que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Panavision DXL2. Variación técnica #59. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_60",
            "number": 60,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL REFLEJO DEL CIAN EN EL CHARCO 60",
            "content": "Plano medio de personaje con rostro subido como referencia en EL REFLEJO DEL CIAN EN EL CHARCO. Iluminación de alto contraste con rosa neón y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Sony Venice 2. Estética Blade Runner. Variación técnica #60. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_61",
            "number": 61,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CENTRO DE DATOS CLANDESTINO 61",
            "content": "Primer plano extremo capturado con Arri Alexa 35 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #61. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_62",
            "number": 62,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LA GEISHA ANDROIDE 62",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). LA GEISHA ANDROIDE de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #62. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_63",
            "number": 63,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PERSECUCIÓN EN MOTO DE LUZ 63",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de naranja sintético que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa LF. Variación técnica #63. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_64",
            "number": 64,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL ÚLTIMO JARDÍN SINTÉTICO 64",
            "content": "Plano medio de personaje con rostro subido como referencia en EL ÚLTIMO JARDÍN SINTÉTICO. Iluminación de alto contraste con violeta ciber y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Panavision DXL2. Estética Blade Runner. Variación técnica #64. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_65",
            "number": 65,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LLUVIA ÁCIDA EN SHIBUYA 65",
            "content": "Primer plano extremo capturado con Sony Venice 2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #65. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_66",
            "number": 66,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "ESTACIÓN DE TREN MAGLEV 66",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). ESTACIÓN DE TREN MAGLEV de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #66. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_67",
            "number": 67,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "BAR DE FIDEOS SINTÉTICOS 67",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de verde fósforo que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Red V-Raptor XL. Variación técnica #67. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_68",
            "number": 68,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "DREAMS OF NEON 68",
            "content": "Plano medio de personaje con rostro subido como referencia en DREAMS OF NEON. Iluminación de alto contraste con naranja sintético y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa LF. Estética Blade Runner. Variación técnica #68. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_69",
            "number": 69,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL SUEÑO DE LA MÁQUINA 69",
            "content": "Primer plano extremo capturado con Panavision DXL2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #69. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_70",
            "number": 70,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CEREBRO DE SILICIO 70",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). CEREBRO DE SILICIO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #70. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_71",
            "number": 71,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "OJOS DE CRISTAL LÍQUIDO 71",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de cian eléctrico que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa 35. Variación técnica #71. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_72",
            "number": 72,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PIEL DE LATEX TÉCNICO 72",
            "content": "Plano medio de personaje con rostro subido como referencia en PIEL DE LATEX TÉCNICO. Iluminación de alto contraste con verde fósforo y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Red V-Raptor XL. Estética Blade Runner. Variación técnica #72. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_73",
            "number": 73,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CALLEJÓN BAJO LA LLUVIA DE NEÓN 73",
            "content": "Primer plano extremo capturado con Arri Alexa LF de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #73. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_74",
            "number": 74,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "MERCADO NEGRO DE CIBER-IMPLANTES 74",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). MERCADO NEGRO DE CIBER-IMPLANTES de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #74. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_75",
            "number": 75,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL HACKER DE NEO-TOKYO 75",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de rosa neón que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Sony Venice 2. Variación técnica #75. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_76",
            "number": 76,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PISO 99: VISTAS AL ABISMO 76",
            "content": "Plano medio de personaje con rostro subido como referencia en PISO 99: VISTAS AL ABISMO. Iluminación de alto contraste con cian eléctrico y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa 35. Estética Blade Runner. Variación técnica #76. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_77",
            "number": 77,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CABLES Y SANGRE EN EL BARRIO BAJO 77",
            "content": "Primer plano extremo capturado con Red V-Raptor XL de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #77. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_78",
            "number": 78,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL REFLEJO DEL CIAN EN EL CHARCO 78",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). EL REFLEJO DEL CIAN EN EL CHARCO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #78. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_79",
            "number": 79,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CENTRO DE DATOS CLANDESTINO 79",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de violeta ciber que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Panavision DXL2. Variación técnica #79. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_80",
            "number": 80,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LA GEISHA ANDROIDE 80",
            "content": "Plano medio de personaje con rostro subido como referencia en LA GEISHA ANDROIDE. Iluminación de alto contraste con rosa neón y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Sony Venice 2. Estética Blade Runner. Variación técnica #80. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_81",
            "number": 81,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PERSECUCIÓN EN MOTO DE LUZ 81",
            "content": "Primer plano extremo capturado con Arri Alexa 35 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #81. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_82",
            "number": 82,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL ÚLTIMO JARDÍN SINTÉTICO 82",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). EL ÚLTIMO JARDÍN SINTÉTICO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #82. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_83",
            "number": 83,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LLUVIA ÁCIDA EN SHIBUYA 83",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de naranja sintético que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa LF. Variación técnica #83. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_84",
            "number": 84,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "ESTACIÓN DE TREN MAGLEV 84",
            "content": "Plano medio de personaje con rostro subido como referencia en ESTACIÓN DE TREN MAGLEV. Iluminación de alto contraste con violeta ciber y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Panavision DXL2. Estética Blade Runner. Variación técnica #84. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_85",
            "number": 85,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "BAR DE FIDEOS SINTÉTICOS 85",
            "content": "Primer plano extremo capturado con Sony Venice 2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #85. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_86",
            "number": 86,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "DREAMS OF NEON 86",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). DREAMS OF NEON de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #86. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_87",
            "number": 87,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL SUEÑO DE LA MÁQUINA 87",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de verde fósforo que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Red V-Raptor XL. Variación técnica #87. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_88",
            "number": 88,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CEREBRO DE SILICIO 88",
            "content": "Plano medio de personaje con rostro subido como referencia en CEREBRO DE SILICIO. Iluminación de alto contraste con naranja sintético y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa LF. Estética Blade Runner. Variación técnica #88. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_89",
            "number": 89,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "OJOS DE CRISTAL LÍQUIDO 89",
            "content": "Primer plano extremo capturado con Panavision DXL2 de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #89. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_90",
            "number": 90,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PIEL DE LATEX TÉCNICO 90",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). PIEL DE LATEX TÉCNICO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #90. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_91",
            "number": 91,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CALLEJÓN BAJO LA LLUVIA DE NEÓN 91",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de cian eléctrico que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Arri Alexa 35. Variación técnica #91. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_92",
            "number": 92,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "MERCADO NEGRO DE CIBER-IMPLANTES 92",
            "content": "Plano medio de personaje con rostro subido como referencia en MERCADO NEGRO DE CIBER-IMPLANTES. Iluminación de alto contraste con verde fósforo y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Red V-Raptor XL. Estética Blade Runner. Variación técnica #92. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_93",
            "number": 93,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL HACKER DE NEO-TOKYO 93",
            "content": "Primer plano extremo capturado con Arri Alexa LF de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #93. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_94",
            "number": 94,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PISO 99: VISTAS AL ABISMO 94",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). PISO 99: VISTAS AL ABISMO de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #94. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_95",
            "number": 95,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CABLES Y SANGRE EN EL BARRIO BAJO 95",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de rosa neón que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Sony Venice 2. Variación técnica #95. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_96",
            "number": 96,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL REFLEJO DEL CIAN EN EL CHARCO 96",
            "content": "Plano medio de personaje con rostro subido como referencia en EL REFLEJO DEL CIAN EN EL CHARCO. Iluminación de alto contraste con cian eléctrico y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Arri Alexa 35. Estética Blade Runner. Variación técnica #96. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_97",
            "number": 97,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "CENTRO DE DATOS CLANDESTINO 97",
            "content": "Primer plano extremo capturado con Red V-Raptor XL de rostro subido como referencia bajo una lluvia ácida constante. Luces de neón de fondo con bokeh cian y rosa. Biometría facial de fatiga cibernética: micro-cicatrices traslúcidas y mirada mecánica detallada. Textura de chaqueta de vinilo PBR. Variación técnica #97. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_98",
            "number": 98,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "LA GEISHA ANDROIDE 98",
            "content": "Personaje con rostro subido como referencia conectado a una consola mental con cables de fibra óptica (Radiosidad dinámica). LA GEISHA ANDROIDE de fondo. Iluminación volumétrica y partículas de polvo digital. Biometría facial de trance tecnológico en 8K. Calidad Masterpiece. Variación técnica #98. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_99",
            "number": 99,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "PERSECUCIÓN EN MOTO DE LUZ 99",
            "content": "Retrato cinematográfico de rostro subido como referencia en un rascacielos de cristal frente a Neo-Tokyo. Contraluz de violeta ciber que perfila la silueta y los rasgos faciales. Biometría de poder corporativo frío. Textura de traje técnico con micro-fibra PBR. Panavision DXL2. Variación técnica #99. Nitidez extrema 8K."
        },
        {
            "id": "cyberpunk_100",
            "number": 100,
            "style": "Cyberpunk / Neo-Tokyo",
            "title": "EL ÚLTIMO JARDÍN SINTÉTICO 100",
            "content": "Plano medio de personaje con rostro subido como referencia en EL ÚLTIMO JARDÍN SINTÉTICO. Iluminación de alto contraste con rosa neón y sombras negras puras. Biometría facial de alienación: ojos con reflejos digitales y poros saturados por la humedad. Captura con Sony Venice 2. Estética Blade Runner. Variación técnica #100. Nitidez extrema 8K."
        }
    ],
    "HEIST (ATRACOS)": [
        {
            "id": "heist_1",
            "number": 1,
            "style": "Heist (Atracos)",
            "title": "EL CAMINO A LA BÓVEDA",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa 35. Protocolo de acción extrema #1. Calidad IMAX."
        },
        {
            "id": "heist_2",
            "number": 2,
            "style": "Heist (Atracos)",
            "title": "TENSIÓN EN EL CONDUCTO DE VENTILACIÓN",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Red V-Raptor XL en 8K. Protocolo de acción extrema #2. Calidad IMAX."
        },
        {
            "id": "heist_3",
            "number": 3,
            "style": "Heist (Atracos)",
            "title": "LA BOLSA LLENA DE DIAMANTES",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #3. Calidad IMAX."
        },
        {
            "id": "heist_4",
            "number": 4,
            "style": "Heist (Atracos)",
            "title": "CÁMARA DE SEGURIDAD 04: EL ROBO",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #4. Calidad IMAX."
        },
        {
            "id": "heist_5",
            "number": 5,
            "style": "Heist (Atracos)",
            "title": "SUDOR FRÍO BAJO LA MÁSCARA",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Sony Venice 2. Protocolo de acción extrema #5. Calidad IMAX."
        },
        {
            "id": "heist_6",
            "number": 6,
            "style": "Heist (Atracos)",
            "title": "EL PLANO DEL EDIFICIO",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa 35 en 8K. Protocolo de acción extrema #6. Calidad IMAX."
        },
        {
            "id": "heist_7",
            "number": 7,
            "style": "Heist (Atracos)",
            "title": "HUIDA POR LA ZONA INDUSTRIAL",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #7. Calidad IMAX."
        },
        {
            "id": "heist_8",
            "number": 8,
            "style": "Heist (Atracos)",
            "title": "EL INTERROGATORIO DEL CÓMPLICE",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #8. Calidad IMAX."
        },
        {
            "id": "heist_9",
            "number": 9,
            "style": "Heist (Atracos)",
            "title": "LÁSERES EN LA OSCURIDAD",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con GoPro Hero 11 (CCTV Mount). Protocolo de acción extrema #9. Calidad IMAX."
        },
        {
            "id": "heist_10",
            "number": 10,
            "style": "Heist (Atracos)",
            "title": "EL BOTÍN DEFINITIVO",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Sony Venice 2 en 8K. Protocolo de acción extrema #10. Calidad IMAX."
        },
        {
            "id": "heist_11",
            "number": 11,
            "style": "Heist (Atracos)",
            "title": "EL CONDUCTOR DE HUIDA",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #11. Calidad IMAX."
        },
        {
            "id": "heist_12",
            "number": 12,
            "style": "Heist (Atracos)",
            "title": "SILENCIO EN EL MUSEO",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #12. Calidad IMAX."
        },
        {
            "id": "heist_13",
            "number": 13,
            "style": "Heist (Atracos)",
            "title": "DINERO EN EL MALETÍN",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa LF. Protocolo de acción extrema #13. Calidad IMAX."
        },
        {
            "id": "heist_14",
            "number": 14,
            "style": "Heist (Atracos)",
            "title": "EL GOLPE PERFECTO",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. GoPro Hero 11 (CCTV Mount) en 8K. Protocolo de acción extrema #14. Calidad IMAX."
        },
        {
            "id": "heist_15",
            "number": 15,
            "style": "Heist (Atracos)",
            "title": "SUDOR Y ACERO",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #15. Calidad IMAX."
        },
        {
            "id": "heist_16",
            "number": 16,
            "style": "Heist (Atracos)",
            "title": "MIRADA DE TRAICIÓN",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #16. Calidad IMAX."
        },
        {
            "id": "heist_17",
            "number": 17,
            "style": "Heist (Atracos)",
            "title": "LA ALARMA ROJA",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Red V-Raptor XL. Protocolo de acción extrema #17. Calidad IMAX."
        },
        {
            "id": "heist_18",
            "number": 18,
            "style": "Heist (Atracos)",
            "title": "EL ESCAPE POR EL TECHO",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa LF en 8K. Protocolo de acción extrema #18. Calidad IMAX."
        },
        {
            "id": "heist_19",
            "number": 19,
            "style": "Heist (Atracos)",
            "title": "EL CAMINO A LA BÓVEDA 19",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #19. Calidad IMAX."
        },
        {
            "id": "heist_20",
            "number": 20,
            "style": "Heist (Atracos)",
            "title": "TENSIÓN EN EL CONDUCTO DE VENTILACIÓN 20",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #20. Calidad IMAX."
        },
        {
            "id": "heist_21",
            "number": 21,
            "style": "Heist (Atracos)",
            "title": "LA BOLSA LLENA DE DIAMANTES 21",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa 35. Protocolo de acción extrema #21. Calidad IMAX."
        },
        {
            "id": "heist_22",
            "number": 22,
            "style": "Heist (Atracos)",
            "title": "CÁMARA DE SEGURIDAD 04: EL ROBO 22",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Red V-Raptor XL en 8K. Protocolo de acción extrema #22. Calidad IMAX."
        },
        {
            "id": "heist_23",
            "number": 23,
            "style": "Heist (Atracos)",
            "title": "SUDOR FRÍO BAJO LA MÁSCARA 23",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #23. Calidad IMAX."
        },
        {
            "id": "heist_24",
            "number": 24,
            "style": "Heist (Atracos)",
            "title": "EL PLANO DEL EDIFICIO 24",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #24. Calidad IMAX."
        },
        {
            "id": "heist_25",
            "number": 25,
            "style": "Heist (Atracos)",
            "title": "HUIDA POR LA ZONA INDUSTRIAL 25",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Sony Venice 2. Protocolo de acción extrema #25. Calidad IMAX."
        },
        {
            "id": "heist_26",
            "number": 26,
            "style": "Heist (Atracos)",
            "title": "EL INTERROGATORIO DEL CÓMPLICE 26",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa 35 en 8K. Protocolo de acción extrema #26. Calidad IMAX."
        },
        {
            "id": "heist_27",
            "number": 27,
            "style": "Heist (Atracos)",
            "title": "LÁSERES EN LA OSCURIDAD 27",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #27. Calidad IMAX."
        },
        {
            "id": "heist_28",
            "number": 28,
            "style": "Heist (Atracos)",
            "title": "EL BOTÍN DEFINITIVO 28",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #28. Calidad IMAX."
        },
        {
            "id": "heist_29",
            "number": 29,
            "style": "Heist (Atracos)",
            "title": "EL CONDUCTOR DE HUIDA 29",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con GoPro Hero 11 (CCTV Mount). Protocolo de acción extrema #29. Calidad IMAX."
        },
        {
            "id": "heist_30",
            "number": 30,
            "style": "Heist (Atracos)",
            "title": "SILENCIO EN EL MUSEO 30",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Sony Venice 2 en 8K. Protocolo de acción extrema #30. Calidad IMAX."
        },
        {
            "id": "heist_31",
            "number": 31,
            "style": "Heist (Atracos)",
            "title": "DINERO EN EL MALETÍN 31",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #31. Calidad IMAX."
        },
        {
            "id": "heist_32",
            "number": 32,
            "style": "Heist (Atracos)",
            "title": "EL GOLPE PERFECTO 32",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #32. Calidad IMAX."
        },
        {
            "id": "heist_33",
            "number": 33,
            "style": "Heist (Atracos)",
            "title": "SUDOR Y ACERO 33",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa LF. Protocolo de acción extrema #33. Calidad IMAX."
        },
        {
            "id": "heist_34",
            "number": 34,
            "style": "Heist (Atracos)",
            "title": "MIRADA DE TRAICIÓN 34",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. GoPro Hero 11 (CCTV Mount) en 8K. Protocolo de acción extrema #34. Calidad IMAX."
        },
        {
            "id": "heist_35",
            "number": 35,
            "style": "Heist (Atracos)",
            "title": "LA ALARMA ROJA 35",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #35. Calidad IMAX."
        },
        {
            "id": "heist_36",
            "number": 36,
            "style": "Heist (Atracos)",
            "title": "EL ESCAPE POR EL TECHO 36",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #36. Calidad IMAX."
        },
        {
            "id": "heist_37",
            "number": 37,
            "style": "Heist (Atracos)",
            "title": "EL CAMINO A LA BÓVEDA 37",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Red V-Raptor XL. Protocolo de acción extrema #37. Calidad IMAX."
        },
        {
            "id": "heist_38",
            "number": 38,
            "style": "Heist (Atracos)",
            "title": "TENSIÓN EN EL CONDUCTO DE VENTILACIÓN 38",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa LF en 8K. Protocolo de acción extrema #38. Calidad IMAX."
        },
        {
            "id": "heist_39",
            "number": 39,
            "style": "Heist (Atracos)",
            "title": "LA BOLSA LLENA DE DIAMANTES 39",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #39. Calidad IMAX."
        },
        {
            "id": "heist_40",
            "number": 40,
            "style": "Heist (Atracos)",
            "title": "CÁMARA DE SEGURIDAD 04: EL ROBO 40",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #40. Calidad IMAX."
        },
        {
            "id": "heist_41",
            "number": 41,
            "style": "Heist (Atracos)",
            "title": "SUDOR FRÍO BAJO LA MÁSCARA 41",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa 35. Protocolo de acción extrema #41. Calidad IMAX."
        },
        {
            "id": "heist_42",
            "number": 42,
            "style": "Heist (Atracos)",
            "title": "EL PLANO DEL EDIFICIO 42",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Red V-Raptor XL en 8K. Protocolo de acción extrema #42. Calidad IMAX."
        },
        {
            "id": "heist_43",
            "number": 43,
            "style": "Heist (Atracos)",
            "title": "HUIDA POR LA ZONA INDUSTRIAL 43",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #43. Calidad IMAX."
        },
        {
            "id": "heist_44",
            "number": 44,
            "style": "Heist (Atracos)",
            "title": "EL INTERROGATORIO DEL CÓMPLICE 44",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #44. Calidad IMAX."
        },
        {
            "id": "heist_45",
            "number": 45,
            "style": "Heist (Atracos)",
            "title": "LÁSERES EN LA OSCURIDAD 45",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Sony Venice 2. Protocolo de acción extrema #45. Calidad IMAX."
        },
        {
            "id": "heist_46",
            "number": 46,
            "style": "Heist (Atracos)",
            "title": "EL BOTÍN DEFINITIVO 46",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa 35 en 8K. Protocolo de acción extrema #46. Calidad IMAX."
        },
        {
            "id": "heist_47",
            "number": 47,
            "style": "Heist (Atracos)",
            "title": "EL CONDUCTOR DE HUIDA 47",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #47. Calidad IMAX."
        },
        {
            "id": "heist_48",
            "number": 48,
            "style": "Heist (Atracos)",
            "title": "SILENCIO EN EL MUSEO 48",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #48. Calidad IMAX."
        },
        {
            "id": "heist_49",
            "number": 49,
            "style": "Heist (Atracos)",
            "title": "DINERO EN EL MALETÍN 49",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con GoPro Hero 11 (CCTV Mount). Protocolo de acción extrema #49. Calidad IMAX."
        },
        {
            "id": "heist_50",
            "number": 50,
            "style": "Heist (Atracos)",
            "title": "EL GOLPE PERFECTO 50",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Sony Venice 2 en 8K. Protocolo de acción extrema #50. Calidad IMAX."
        },
        {
            "id": "heist_51",
            "number": 51,
            "style": "Heist (Atracos)",
            "title": "SUDOR Y ACERO 51",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #51. Calidad IMAX."
        },
        {
            "id": "heist_52",
            "number": 52,
            "style": "Heist (Atracos)",
            "title": "MIRADA DE TRAICIÓN 52",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #52. Calidad IMAX."
        },
        {
            "id": "heist_53",
            "number": 53,
            "style": "Heist (Atracos)",
            "title": "LA ALARMA ROJA 53",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa LF. Protocolo de acción extrema #53. Calidad IMAX."
        },
        {
            "id": "heist_54",
            "number": 54,
            "style": "Heist (Atracos)",
            "title": "EL ESCAPE POR EL TECHO 54",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. GoPro Hero 11 (CCTV Mount) en 8K. Protocolo de acción extrema #54. Calidad IMAX."
        },
        {
            "id": "heist_55",
            "number": 55,
            "style": "Heist (Atracos)",
            "title": "EL CAMINO A LA BÓVEDA 55",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #55. Calidad IMAX."
        },
        {
            "id": "heist_56",
            "number": 56,
            "style": "Heist (Atracos)",
            "title": "TENSIÓN EN EL CONDUCTO DE VENTILACIÓN 56",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #56. Calidad IMAX."
        },
        {
            "id": "heist_57",
            "number": 57,
            "style": "Heist (Atracos)",
            "title": "LA BOLSA LLENA DE DIAMANTES 57",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Red V-Raptor XL. Protocolo de acción extrema #57. Calidad IMAX."
        },
        {
            "id": "heist_58",
            "number": 58,
            "style": "Heist (Atracos)",
            "title": "CÁMARA DE SEGURIDAD 04: EL ROBO 58",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa LF en 8K. Protocolo de acción extrema #58. Calidad IMAX."
        },
        {
            "id": "heist_59",
            "number": 59,
            "style": "Heist (Atracos)",
            "title": "SUDOR FRÍO BAJO LA MÁSCARA 59",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #59. Calidad IMAX."
        },
        {
            "id": "heist_60",
            "number": 60,
            "style": "Heist (Atracos)",
            "title": "EL PLANO DEL EDIFICIO 60",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #60. Calidad IMAX."
        },
        {
            "id": "heist_61",
            "number": 61,
            "style": "Heist (Atracos)",
            "title": "HUIDA POR LA ZONA INDUSTRIAL 61",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa 35. Protocolo de acción extrema #61. Calidad IMAX."
        },
        {
            "id": "heist_62",
            "number": 62,
            "style": "Heist (Atracos)",
            "title": "EL INTERROGATORIO DEL CÓMPLICE 62",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Red V-Raptor XL en 8K. Protocolo de acción extrema #62. Calidad IMAX."
        },
        {
            "id": "heist_63",
            "number": 63,
            "style": "Heist (Atracos)",
            "title": "LÁSERES EN LA OSCURIDAD 63",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #63. Calidad IMAX."
        },
        {
            "id": "heist_64",
            "number": 64,
            "style": "Heist (Atracos)",
            "title": "EL BOTÍN DEFINITIVO 64",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #64. Calidad IMAX."
        },
        {
            "id": "heist_65",
            "number": 65,
            "style": "Heist (Atracos)",
            "title": "EL CONDUCTOR DE HUIDA 65",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Sony Venice 2. Protocolo de acción extrema #65. Calidad IMAX."
        },
        {
            "id": "heist_66",
            "number": 66,
            "style": "Heist (Atracos)",
            "title": "SILENCIO EN EL MUSEO 66",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa 35 en 8K. Protocolo de acción extrema #66. Calidad IMAX."
        },
        {
            "id": "heist_67",
            "number": 67,
            "style": "Heist (Atracos)",
            "title": "DINERO EN EL MALETÍN 67",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #67. Calidad IMAX."
        },
        {
            "id": "heist_68",
            "number": 68,
            "style": "Heist (Atracos)",
            "title": "EL GOLPE PERFECTO 68",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #68. Calidad IMAX."
        },
        {
            "id": "heist_69",
            "number": 69,
            "style": "Heist (Atracos)",
            "title": "SUDOR Y ACERO 69",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con GoPro Hero 11 (CCTV Mount). Protocolo de acción extrema #69. Calidad IMAX."
        },
        {
            "id": "heist_70",
            "number": 70,
            "style": "Heist (Atracos)",
            "title": "MIRADA DE TRAICIÓN 70",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Sony Venice 2 en 8K. Protocolo de acción extrema #70. Calidad IMAX."
        },
        {
            "id": "heist_71",
            "number": 71,
            "style": "Heist (Atracos)",
            "title": "LA ALARMA ROJA 71",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #71. Calidad IMAX."
        },
        {
            "id": "heist_72",
            "number": 72,
            "style": "Heist (Atracos)",
            "title": "EL ESCAPE POR EL TECHO 72",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #72. Calidad IMAX."
        },
        {
            "id": "heist_73",
            "number": 73,
            "style": "Heist (Atracos)",
            "title": "EL CAMINO A LA BÓVEDA 73",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa LF. Protocolo de acción extrema #73. Calidad IMAX."
        },
        {
            "id": "heist_74",
            "number": 74,
            "style": "Heist (Atracos)",
            "title": "TENSIÓN EN EL CONDUCTO DE VENTILACIÓN 74",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. GoPro Hero 11 (CCTV Mount) en 8K. Protocolo de acción extrema #74. Calidad IMAX."
        },
        {
            "id": "heist_75",
            "number": 75,
            "style": "Heist (Atracos)",
            "title": "LA BOLSA LLENA DE DIAMANTES 75",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #75. Calidad IMAX."
        },
        {
            "id": "heist_76",
            "number": 76,
            "style": "Heist (Atracos)",
            "title": "CÁMARA DE SEGURIDAD 04: EL ROBO 76",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #76. Calidad IMAX."
        },
        {
            "id": "heist_77",
            "number": 77,
            "style": "Heist (Atracos)",
            "title": "SUDOR FRÍO BAJO LA MÁSCARA 77",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Red V-Raptor XL. Protocolo de acción extrema #77. Calidad IMAX."
        },
        {
            "id": "heist_78",
            "number": 78,
            "style": "Heist (Atracos)",
            "title": "EL PLANO DEL EDIFICIO 78",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa LF en 8K. Protocolo de acción extrema #78. Calidad IMAX."
        },
        {
            "id": "heist_79",
            "number": 79,
            "style": "Heist (Atracos)",
            "title": "HUIDA POR LA ZONA INDUSTRIAL 79",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #79. Calidad IMAX."
        },
        {
            "id": "heist_80",
            "number": 80,
            "style": "Heist (Atracos)",
            "title": "EL INTERROGATORIO DEL CÓMPLICE 80",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #80. Calidad IMAX."
        },
        {
            "id": "heist_81",
            "number": 81,
            "style": "Heist (Atracos)",
            "title": "LÁSERES EN LA OSCURIDAD 81",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa 35. Protocolo de acción extrema #81. Calidad IMAX."
        },
        {
            "id": "heist_82",
            "number": 82,
            "style": "Heist (Atracos)",
            "title": "EL BOTÍN DEFINITIVO 82",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Red V-Raptor XL en 8K. Protocolo de acción extrema #82. Calidad IMAX."
        },
        {
            "id": "heist_83",
            "number": 83,
            "style": "Heist (Atracos)",
            "title": "EL CONDUCTOR DE HUIDA 83",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #83. Calidad IMAX."
        },
        {
            "id": "heist_84",
            "number": 84,
            "style": "Heist (Atracos)",
            "title": "SILENCIO EN EL MUSEO 84",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #84. Calidad IMAX."
        },
        {
            "id": "heist_85",
            "number": 85,
            "style": "Heist (Atracos)",
            "title": "DINERO EN EL MALETÍN 85",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Sony Venice 2. Protocolo de acción extrema #85. Calidad IMAX."
        },
        {
            "id": "heist_86",
            "number": 86,
            "style": "Heist (Atracos)",
            "title": "EL GOLPE PERFECTO 86",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa 35 en 8K. Protocolo de acción extrema #86. Calidad IMAX."
        },
        {
            "id": "heist_87",
            "number": 87,
            "style": "Heist (Atracos)",
            "title": "SUDOR Y ACERO 87",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #87. Calidad IMAX."
        },
        {
            "id": "heist_88",
            "number": 88,
            "style": "Heist (Atracos)",
            "title": "MIRADA DE TRAICIÓN 88",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #88. Calidad IMAX."
        },
        {
            "id": "heist_89",
            "number": 89,
            "style": "Heist (Atracos)",
            "title": "LA ALARMA ROJA 89",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con GoPro Hero 11 (CCTV Mount). Protocolo de acción extrema #89. Calidad IMAX."
        },
        {
            "id": "heist_90",
            "number": 90,
            "style": "Heist (Atracos)",
            "title": "EL ESCAPE POR EL TECHO 90",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Sony Venice 2 en 8K. Protocolo de acción extrema #90. Calidad IMAX."
        },
        {
            "id": "heist_91",
            "number": 91,
            "style": "Heist (Atracos)",
            "title": "EL CAMINO A LA BÓVEDA 91",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #91. Calidad IMAX."
        },
        {
            "id": "heist_92",
            "number": 92,
            "style": "Heist (Atracos)",
            "title": "TENSIÓN EN EL CONDUCTO DE VENTILACIÓN 92",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #92. Calidad IMAX."
        },
        {
            "id": "heist_93",
            "number": 93,
            "style": "Heist (Atracos)",
            "title": "LA BOLSA LLENA DE DIAMANTES 93",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Arri Alexa LF. Protocolo de acción extrema #93. Calidad IMAX."
        },
        {
            "id": "heist_94",
            "number": 94,
            "style": "Heist (Atracos)",
            "title": "CÁMARA DE SEGURIDAD 04: EL ROBO 94",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. GoPro Hero 11 (CCTV Mount) en 8K. Protocolo de acción extrema #94. Calidad IMAX."
        },
        {
            "id": "heist_95",
            "number": 95,
            "style": "Heist (Atracos)",
            "title": "SUDOR FRÍO BAJO LA MÁSCARA 95",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #95. Calidad IMAX."
        },
        {
            "id": "heist_96",
            "number": 96,
            "style": "Heist (Atracos)",
            "title": "EL PLANO DEL EDIFICIO 96",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #96. Calidad IMAX."
        },
        {
            "id": "heist_97",
            "number": 97,
            "style": "Heist (Atracos)",
            "title": "HUIDA POR LA ZONA INDUSTRIAL 97",
            "content": "Primer plano de personaje con rostro subido como referencia abriendo una caja fuerte con estetoscopio. Iluminación de linterna táctica enfocada en los dedos y el rostro. Biometría de concentración absoluta y respiración contenida. Textura de metal cepillado y aceite técnico. Captura con Red V-Raptor XL. Protocolo de acción extrema #97. Calidad IMAX."
        },
        {
            "id": "heist_98",
            "number": 98,
            "style": "Heist (Atracos)",
            "title": "EL INTERROGATORIO DEL CÓMPLICE 98",
            "content": "Plano medio en un callejón industrial, rostro subido como referencia sosteniendo bolsas de dinero. Iluminación de farolas de sodio amarillas con sombras duras. Biometría de agotamiento y éxito criminal. Humo volumétrico de fondo. Arri Alexa LF en 8K. Protocolo de acción extrema #98. Calidad IMAX."
        },
        {
            "id": "heist_99",
            "number": 99,
            "style": "Heist (Atracos)",
            "title": "LÁSERES EN LA OSCURIDAD 99",
            "content": "Personaje con rostro subido como referencia en el centro de mando del atraco, rodeado de planos y pantallas. Luz cenital blanca fría. Biometría facial de genio criminal: mirada calculadora y rasgos firmes. Óptica Zeiss para máxima nitidez en los detalles de los mapas. Protocolo de acción extrema #99. Calidad IMAX."
        },
        {
            "id": "heist_100",
            "number": 100,
            "style": "Heist (Atracos)",
            "title": "EL BOTÍN DEFINITIVO 100",
            "content": "Perspectiva de cámara de seguridad (CCTV) con grano cinematográfico y distorsión de lente. Rostro subido como referencia bajo una capucha, mirando a cámara con tensión extrema. Biometría facial de adrenalina: pupilas dilatadas y micro-sudor visible. Entorno industrial de cemento PBR. Protocolo de acción extrema #100. Calidad IMAX."
        }
    ],
    "CV": [
        {
            "id": "cv_1",
            "number": 1,
            "style": "CV",
            "title": "LIDERAZGO EJECUTIVO",
            "content": "Retrato corporativo maestro capturado con Sony Venice 2 y lente de 85mm. Personaje con rostro subido como referencia con biometría de extrema confianza y seriedad. Atuendo de traje de lino gris carbón (PBR) bajo iluminación suave de tres puntos 5600K. Fondo de oficina minimalista desenfocado (bokeh natural). Calidad técnica 8K RAW."
        },
        {
            "id": "cv_2",
            "number": 2,
            "style": "CV",
            "title": "GESTIÓN Y RESPONSABILIDAD",
            "content": "Plano medio profesional con Arri Alexa 35. Administrativo con rostro subido como referencia frente a escritorio de roble pulido PBR. Iluminación de ventana lateral (Side light) resaltando la textura de la piel y un reloj de acero pulido. Atmósfera de oficina de alta gama, orden absoluto y enfoque nítido en los ojos (Iris detail)."
        },
        {
            "id": "cv_3",
            "number": 3,
            "style": "CV",
            "title": "COMPROMISO CORPORATIVO",
            "content": "Primer plano de alta fidelidad con Red V-Raptor. Personaje con rostro subido como referencia con expresión de responsabilidad y determinación. Luz de estudio profesional 5500K con sombras suaves (Softbox). Piel con textura real, poros visibles y mirada directa a cámara. Calidad de imagen Masterpiece."
        },
        {
            "id": "cv_4",
            "number": 4,
            "style": "CV",
            "title": "ORGANIZACIÓN EJECUTIVA",
            "content": "Escena de oficina capturada con Sony Venice. Personaje con rostro subido como referencia sosteniendo tablet de cristal templado PBR. Iluminación cenital difusa que proyecta un brillo profesional en la ropa formal de seda y lana. Biometría facial de calma y control. Nitidez absoluta en cada rasgo."
        },
        {
            "id": "cv_5",
            "number": 5,
            "style": "CV",
            "title": "EFICIENCIA ADMINISTRATIVA",
            "content": "Retrato de busto con óptica Zeiss Supreme Prime. Personaje con rostro subido como referencia con sonrisa profesional contenida y seria. Iluminación Rembrandt clásica que añade profundidad y carácter. Fondo de estantería de libros legales con desenfoque óptico profundo. Estética cinematográfica corporativa."
        },
        {
            "id": "cv_6",
            "number": 6,
            "style": "CV",
            "title": "VISIÓN ESTRATÉGICA",
            "content": "Plano medio corto con Arri Alexa LF. Administrativo con rostro subido como referencia en sala de juntas moderna. Luz de atardecer filtrada por grandes ventanales. Textura de camisa de algodón PBR con pliegues realistas. Mirada de visión a largo plazo y gran detalle en la córnea del ojo."
        },
        {
            "id": "cv_7",
            "number": 7,
            "style": "CV",
            "title": "INTEGRIDAD PROFESIONAL",
            "content": "Primer plano con lente de 50mm Leica Noctilux. Personaje con rostro subido como referencia con expresión de honestidad y seriedad. Iluminación natural de mañana 5000K. Piel con biometría extrema, sin imperfecciones artificiales. Nitidez 8K absoluta bajo luz neutra."
        },
        {
            "id": "cv_8",
            "number": 8,
            "style": "CV",
            "title": "AUTORIDAD SERENA",
            "content": "Captura con Red V-Raptor XL. Personaje con rostro subido como referencia sentado en silla de cuero PBR negro. Iluminación lateral que perfila la mandíbula (Rim light). Atuendo formal impecable. Atmósfera de despacho de dirección, silencio y responsabilidad."
        },
        {
            "id": "cv_9",
            "number": 9,
            "style": "CV",
            "title": "EXCELENCIA ANALÍTICA",
            "content": "Rostro subido como referencia iluminado por el resplandor de pantallas de monitor (Cool white light). Biometría facial de concentración microscópica. Detalle en la textura de la piel bajo luz artificial. Óptica macro para captar la seriedad en los ojos y el compromiso con los datos."
        },
        {
            "id": "cv_10",
            "number": 10,
            "style": "CV",
            "title": "PROTOCOLOS DE ÉXITO",
            "content": "Plano americano con Arri Alexa 35. Personaje con rostro subido como referencia con maletín de cuero PBR premium. Caminando por pasillo de mármol blanco bajo luces LED empotradas. Iluminación de alto ratio de contraste que resalta el aura de éxito y responsabilidad profesional."
        },
        {
            "id": "cv_11",
            "number": 11,
            "style": "CV",
            "title": "PENSAMIENTO ESTRUCTURADO",
            "content": "Retrato con Sony Venice 2. Personaje con rostro subido como referencia apoyado en mesa de cristal con reflejos Ray-tracing. Iluminación de oficina matutina 4500K. Suéter de cachemira PBR con textura táctil visible. Mirada reflexiva y seria, biometría de calma cerebral."
        },
        {
            "id": "cv_12",
            "number": 12,
            "style": "CV",
            "title": "FIABILIDAD CORPORATIVA",
            "content": "Primer plano con lente anamórfica Cooke. Personaje con rostro subido como referencia en entorno de recepción moderna. Luz volumétrica que entra por la puerta principal. Rostro de fiabilidad absoluta, piel con poros reales y vello facial detallado. Calidad técnica 8K."
        },
        {
            "id": "cv_13",
            "number": 13,
            "style": "CV",
            "title": "GESTIÓN DE RECURSOS",
            "content": "Administrativo con rostro subido como referencia revisando documentos de papel fotográfico PBR. Iluminación de lámpara de escritorio (Warmer light 3200K) contrastando con la luz de día. Biometría en las manos: venas y huellas visibles. Expresión de responsabilidad meticulosa."
        },
        {
            "id": "cv_14",
            "number": 14,
            "style": "CV",
            "title": "VOCACIÓN DE SERVICIO",
            "content": "Plano medio con Arri Alexa. Personaje con rostro subido como referencia con manos cruzadas, proyectando apertura y seriedad. Iluminación difusa envolvente que suaviza sombras pero mantiene el detalle de la piel. Fondo de jardín de oficina (biophilic design) con desenfoque suave."
        },
        {
            "id": "cv_15",
            "number": 15,
            "style": "CV",
            "title": "CONTROL DE OPERACIONES",
            "content": "Captura con Red V-Raptor. Personaje con rostro subido como referencia con auriculares de diseño ergonómico PBR. Iluminación de sala de control con luces azules y blancas sutiles. Biometría facial de agilidad mental y responsabilidad operativa. Calidad RAW."
        },
        {
            "id": "cv_16",
            "number": 16,
            "style": "CV",
            "title": "PROFESIONALISMO MODERNO",
            "content": "Retrato corporativo con lente de 100mm. Personaje con rostro subido como referencia con blazer de lana virgen PBR. Iluminación de estudio con paraguas difusor que crea un brillo elegante en ojos y mejillas. Fondo neutro con sutil degradado de luz. Perfección técnica."
        },
        {
            "id": "cv_17",
            "number": 17,
            "style": "CV",
            "title": "DISCIPLINA ADMINISTRATIVA",
            "content": "Plano medio con Sony Venice 2. Personaje con rostro subido como referencia de pie frente a ventanal de rascacielos. Luz de contraluz (Kicker) que dibuja el contorno de la figura y el rostro. Biometría de disciplina y liderazgo. Textura de traje con micro-patrón visible PBR."
        },
        {
            "id": "cv_18",
            "number": 18,
            "style": "CV",
            "title": "PRECISIÓN Y LOGÍSTICA",
            "content": "Primer plano con Arri Alexa 35. Rostro subido como referencia iluminado por luz de ventana clara 6000K. Piel con detalle microscópico de poros y textura. Expresión de precisión absoluta. Fondo de archivadores metálicos PBR con ligero desenfoque de movimiento."
        },
        {
            "id": "cv_19",
            "number": 19,
            "style": "CV",
            "title": "TALENTO ORGANIZADO",
            "content": "Retrato con Red V-Raptor. Personaje con rostro subido como referencia con gafas de montura de titanio PBR. Iluminación lateral que resalta la estructura ósea facial y la seriedad del perfil profesional. Estética limpia, minimalista y de alta responsabilidad."
        },
        {
            "id": "cv_20",
            "number": 20,
            "style": "CV",
            "title": "COMPROMISO CON LA CALIDAD",
            "content": "Plano medio corto con lente Panavision. Personaje con rostro subido como referencia en oficina de diseño industrial. Luz solar directa filtrada por persianas creando un patrón de luz y sombra (Chiaroscuro). Biometría de madurez y responsabilidad profesional."
        },
        {
            "id": "cv_21",
            "number": 21,
            "style": "CV",
            "title": "GESTIÓN DE EQUIPOS",
            "content": "Personaje con rostro subido como referencia liderando mesa redonda. Iluminación cenital cálida. Textura de trajes de múltiples personas (PBR) con diferentes materiales. Rostro de liderazgo sereno capturado con Sony Venice. Profundidad de campo Masterpiece."
        },
        {
            "id": "cv_22",
            "number": 22,
            "style": "CV",
            "title": "ADMINISTRACIÓN PÚBLICA",
            "content": "Entorno oficial con banderas de fondo con textura de seda PBR. Personaje con rostro subido como referencia con expresión de servicio público y seriedad extrema. Iluminación difusa de gran salón. Captura técnica con Arri Alexa 35."
        },
        {
            "id": "cv_23",
            "number": 23,
            "style": "CV",
            "title": "LOGÍSTICA INTERNACIONAL",
            "content": "Primer plano con Red V-Raptor. Personaje con rostro subido como referencia frente a mapa mundi digital con emisión de luz azul. Biometría de cansancio profesional digno y responsabilidad. Nitidez 8K en las arrugas de expresión y ojos realistas."
        },
        {
            "id": "cv_24",
            "number": 24,
            "style": "CV",
            "title": "SECRETARÍA DE DIRECCIÓN",
            "content": "Plano americano con Sony Venice. Personaje con rostro subido como referencia con agenda de piel PBR y bolígrafo de oro. Iluminación puntual (Key light) que resalta la elegancia y la seriedad administrativa. Fondo de paneles de madera PBR de alta calidad."
        },
        {
            "id": "cv_25",
            "number": 25,
            "style": "CV",
            "title": "SOPORTE EJECUTIVO",
            "content": "Retrato con óptica Leica 75mm. Personaje con rostro subido como referencia con mirada atenta y responsable. Iluminación suave de día nublado a través de cristal. Piel con biometría real, vello facial fino y lágrimas nítidas en el iris. Calidad cinematográfica."
        },
        {
            "id": "cv_26",
            "number": 26,
            "style": "CV",
            "title": "COORDINACIÓN DE PROYECTOS",
            "content": "Personaje con rostro subido como referencia señalando pizarra de cristal con marcadores PBR. Luz de techo LED blanca pura. Biometría facial de entusiasmo controlado y seriedad analítica. Captura con Arri Alexa LF para un rango dinámico extremo."
        },
        {
            "id": "cv_27",
            "number": 27,
            "style": "CV",
            "title": "ÉTICA PROFESIONAL",
            "content": "Primer plano con Sony Venice 2. Personaje con rostro subido como referencia con expresión de integridad inquebrantable. Iluminación natural sin filtros. Piel con textura Porosa PBR, realismo biométrico al 100%. Estética de retrato de prestigio."
        },
        {
            "id": "cv_28",
            "number": 28,
            "style": "CV",
            "title": "DESARROLLO ORGANIZATIVO",
            "content": "Administrativo con rostro subido como referencia en plano medio. Fondo de oficina abierta con plantas y madera PBR. Iluminación lateral suave que proyecta sombras amigables pero serias. Textura de ropa de lino y algodón con detalle microscópico."
        },
        {
            "id": "cv_29",
            "number": 29,
            "style": "CV",
            "title": "RESPONSABILIDAD FINANCIERA",
            "content": "Captura con Red V-Raptor XL. Personaje con rostro subido como referencia analizando hoja de cálculo en pantalla 4K. Luz azulada del monitor reflejada en la cara. Biometría facial de rigor y responsabilidad máxima. Nitidez extrema en los rasgos."
        },
        {
            "id": "cv_30",
            "number": 30,
            "style": "CV",
            "title": "EXCELENCIA OPERATIVA",
            "content": "Retrato corporativo con lente de 85mm f/1.2. Personaje con rostro subido como referencia con traje de tres piezas PBR. Iluminación de estudio clásica (Butterfly lighting). Fondo de ciudad de noche con bokeh de luces urbanas. Calidad 8K RAW definitiva."
        },
        {
            "id": "cv_31",
            "number": 31,
            "style": "CV",
            "title": "AGILIDAD ADMINISTRATIVA",
            "content": "Personaje con rostro subido como referencia en movimiento sutil por la oficina. Captura con Arri Alexa 35 con obturación rápida para congelar la acción profesional. Luz de fluorescentes de alta calidad. Biometría de energía y seriedad enfocada."
        },
        {
            "id": "cv_32",
            "number": 32,
            "style": "CV",
            "title": "FIDELIDAD A LA MARCA",
            "content": "Primer plano de rostro subido como referencia con pin corporativo en solapa de traje de seda PBR. Iluminación Rembrandt dramática. Ojos nítidos con reflejo del logotipo de la empresa. Sentido de pertenencia y responsabilidad extrema."
        },
        {
            "id": "cv_33",
            "number": 33,
            "style": "CV",
            "title": "LIDERAZGO SILENCIOSO",
            "content": "Plano americano con Sony Venice. Personaje con rostro subido como referencia observando a su equipo desde la distancia. Luz de atardecer dorada. Biometría de sabiduría y calma estratégica. Textura de gabardina de cuero PBR al hombro."
        },
        {
            "id": "cv_34",
            "number": 34,
            "style": "CV",
            "title": "PROTOCOLOS DE CALIDAD",
            "content": "Retrato con óptica Zeiss Supreme. Personaje con rostro subido como referencia con guantes blancos de inspección PBR. Iluminación técnica de laboratorio/oficina. Piel con biometría de limpieza y rigor. Nitidez absoluta en cada pixel."
        },
        {
            "id": "cv_35",
            "number": 35,
            "style": "CV",
            "title": "COMPROMISO SOCIAL CORPORATIVO",
            "content": "Personaje con rostro subido como referencia en evento de gala. Traje de esmoquin con textura de seda y terciopelo PBR. Iluminación de candelabros cálida. Biometría facial de empatía y seriedad profesional. Captura con Red V-Raptor."
        },
        {
            "id": "cv_36",
            "number": 36,
            "style": "CV",
            "title": "GESTIÓN DOCUMENTAL",
            "content": "Primer plano extremo de rostro subido como referencia mirando a través de lupa documentos antiguos PBR. Iluminación lateral dura que resalta poros y arrugas de concentración. Estética de investigador administrativo serio."
        },
        {
            "id": "cv_37",
            "number": 37,
            "style": "CV",
            "title": "COORDINACIÓN GENERAL",
            "content": "Plano medio con Arri Alexa LF. Personaje con rostro subido como referencia con múltiples teléfonos y pantallas. Iluminación de alta tecnología con toques cian. Biometría de multitarea responsable and control total. Nitidez 8K."
        },
        {
            "id": "cv_38",
            "number": 38,
            "style": "CV",
            "title": "FIDELIDAD Y CONFIDENCIALIDAD",
            "content": "Retrato oscuro con Sony Venice 2. Personaje con rostro subido como referencia con dedo en los labios (signo de silencio). Iluminación de bajo perfil (Low key). Biometría de lealtad y responsabilidad absoluta. Calidad Masterpiece."
        },
        {
            "id": "cv_39",
            "number": 39,
            "style": "CV",
            "title": "PLANIFICACIÓN MAESTRA",
            "content": "Administrativo con rostro subido como referencia frente a diagrama de Gannt gigante de cristal PBR. Luz retroiluminada que perfila el rostro. Biometría de inteligencia lógica y orden. Captura técnica con Red V-Raptor."
        },
        {
            "id": "cv_40",
            "number": 40,
            "style": "CV",
            "title": "INTEGRACIÓN CORPORATIVA",
            "content": "Plano americano de personaje con rostro subido como referencia estrechando la mano a socio comercial. Iluminación de hall de hotel de lujo. Textura de manos con biometría real: poros, arrugas y uñas nítidas. Seriedad y éxito."
        },
        {
            "id": "cv_41",
            "number": 41,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE TIEMPOS",
            "content": "Primer plano de rostro subido como referencia mirando reloj de pulsera de lujo PBR con reflejos HDR. Iluminación de tarde invernal 4000K. Biometría de puntualidad y responsabilidad profesional extrema. Arri Alexa 35."
        },
        {
            "id": "cv_42",
            "number": 42,
            "style": "CV",
            "title": "CONTROL DE ARCHIVO",
            "content": "Personaje con rostro subido como referencia en pasillo de biblioteca de archivos infinitos PBR. Luz cenital puntual que crea atmósfera de conocimiento y responsabilidad. Biometría de búsqueda incansable y seriedad técnica."
        },
        {
            "id": "cv_43",
            "number": 43,
            "style": "CV",
            "title": "EXCELENCIA EN COMUNICACIÓN",
            "content": "Retrato con lente de 50mm Summilux. Personaje con rostro subido como referencia hablando ante micrófono de podcast/conferencia PBR. Iluminación lateral que añade carisma y responsabilidad. Nitidez absoluta en los labios y ojos."
        },
        {
            "id": "cv_44",
            "number": 44,
            "style": "CV",
            "title": "SOPORTE TÉCNICO ADMINISTRATIVO",
            "content": "Captura con Sony Venice. Personaje con rostro subido como referencia con herramientas de precisión y ordenador. Iluminación de laboratorio limpio. Biometría facial de destreza y responsabilidad técnica. Calidad 8K RAW."
        },
        {
            "id": "cv_45",
            "number": 45,
            "style": "CV",
            "title": "GESTIÓN DE CRISIS",
            "content": "Primer plano de rostro subido como referencia bajo luz roja de emergencia reflejada en el sudor frío de la frente. Expresión de calma bajo presión y responsabilidad máxima. Fondo desenfocado de oficina en caos controlado."
        },
        {
            "id": "cv_46",
            "number": 46,
            "style": "CV",
            "title": "CULTURA ORGANIZATIVA",
            "content": "Plano medio con Arri Alexa. Personaje con rostro subido como referencia frente a pared de premios y certificaciones con refracción de cristal PBR. Iluminación de orgullo profesional y seriedad. Textura de traje impecable."
        },
        {
            "id": "cv_47",
            "number": 47,
            "style": "CV",
            "title": "PROTOCOLOS DE SEGURIDAD",
            "content": "Rostro subido como referencia escaneado por luz láser de seguridad cian. Biometría facial mapeada con puntos digitales. Iluminación técnica de alta seguridad. Estética de responsabilidad y protección de datos."
        },
        {
            "id": "cv_48",
            "number": 48,
            "style": "CV",
            "title": "ADMINISTRACIÓN CREATIVA",
            "content": "Retrato corporativo con fondo de estudio de arte moderno. Personaje con rostro subido como referencia con vestimenta semi-formal de alta calidad PBR. Iluminación de diseño con sombras artísticas pero serias. Calidad Masterpiece."
        },
        {
            "id": "cv_49",
            "number": 49,
            "style": "CV",
            "title": "LIDERAZGO EN VENTAS",
            "content": "Plano americano con Red V-Raptor. Personaje con rostro subido como referencia cerrando contrato de papel PBR. Luz de éxito de mediodía 5600K. Biometría facial de ambición ética y responsabilidad comercial. Nitidez extrema."
        },
        {
            "id": "cv_50",
            "number": 50,
            "style": "CV",
            "title": "DIRECCIÓN DE PROYECTOS",
            "content": "Retrato épico con Sony Venice 2. Personaje con rostro subido como referencia con traje de gala y mirada al futuro. Iluminación de gran escala tipo bloque de cine. Fondo de skyline de ciudad global. Calidad IMAX definitiva."
        },
        {
            "id": "cv_51",
            "number": 51,
            "style": "CV",
            "title": "COORDINADOR DE LOGÍSTICA",
            "content": "Rostro subido como referencia con walkie-talkie PBR en puerto comercial. Iluminación dramática de atardecer con grúas de fondo. Biometría de mando y responsabilidad en campo. Arri Alexa 35, grano cinematográfico sutil."
        },
        {
            "id": "cv_52",
            "number": 52,
            "style": "CV",
            "title": "AUDITORÍA INTERNA",
            "content": "Primer plano de ojos de rostro subido como referencia a través de cristales de gafas con reflejos de columnas de números. Luz de oficina nocturna blanca fría. Biometría de detección de errores y seriedad absoluta."
        },
        {
            "id": "cv_53",
            "number": 53,
            "style": "CV",
            "title": "SECRETARÍA EJECUTIVA",
            "content": "Plano medio con Sony Venice. Personaje con rostro subido como referencia atendiendo llamada con smartphone de titanio PBR. Iluminación lateral que resalta la elegancia y la eficiencia administrativa rápida."
        },
        {
            "id": "cv_54",
            "number": 54,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE JUSTICIA",
            "content": "Entorno de juzgado con madera de caoba PBR. Personaje con rostro subido como referencia con toga de seda y expresión de imparcialidad y responsabilidad. Iluminación formal y solemne. Captura con Arri Alexa."
        },
        {
            "id": "cv_55",
            "number": 55,
            "style": "CV",
            "title": "CUMPLIMIENTO NORMATIVO",
            "content": "Retrato con lente de 35mm wide. Personaje con rostro subido como referencia rodeado de libros de leyes PBR. Iluminación de biblioteca antigua con polvo en suspensión dinámico. Biometría de rigor y seriedad ética."
        },
        {
            "id": "cv_56",
            "number": 56,
            "style": "CV",
            "title": "GESTIÓN DE COMPRAS",
            "content": "Personaje con rostro subido como referencia analizando muestras de materiales PBR (Metal, tela, plástico). Iluminación de estudio de producto que resalta la biometría táctil de las manos y la seriedad del análisis."
        },
        {
            "id": "cv_57",
            "number": 57,
            "style": "CV",
            "title": "SOPORTE AL CLIENTE VIP",
            "content": "Primer plano de rostro subido como referencia con auriculares discretos. Iluminación cálida de zona de espera de lujo. Biometría de paciencia infinita y responsabilidad profesional. Nitidez absoluta en el iris."
        },
        {
            "id": "cv_58",
            "number": 58,
            "style": "CV",
            "title": "CONTABILIDAD DE COSTES",
            "content": "Captura con Red V-Raptor. Personaje con rostro subido como referencia con calculadora mecánica antigua de latón PBR en un despacho moderno. Contraste entre lo clásico y lo nuevo. Biometría de precisión numérica."
        },
        {
            "id": "cv_59",
            "number": 59,
            "style": "CV",
            "title": "DIRECCIÓN ADMINISTRATIVA",
            "content": "Plano americano de personaje con rostro subido como referencia bajando de coche oficial de lujo PBR. Luz de flashes de cámaras. Biometría facial de autoridad y responsabilidad bajo el escrutinio público."
        },
        {
            "id": "cv_60",
            "number": 60,
            "style": "CV",
            "title": "CONSOLIDACIÓN DE DATOS",
            "content": "Retrato corporativo con fondo de servidor de datos PBR con luces LED parpadeantes. Personaje con rostro subido como referencia con luz azulada lateral. Biometría de solidez mental y responsabilidad de datos. 8K RAW."
        },
        {
            "id": "cv_61",
            "number": 61,
            "style": "CV",
            "title": "PROTOCOLOS DE BIENESTAR",
            "content": "Administrativo de recursos humanos con rostro subido como referencia en entorno de oficina naturalista. Iluminación suave de mañana. Biometría de empatía y seriedad en el cuidado del personal. Sony Venice 2."
        },
        {
            "id": "cv_62",
            "number": 62,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE VENTAS",
            "content": "Primer plano de rostro subido como referencia con gráfico de ventas ascendente proyectado en cristales de oficina PBR. Iluminación de éxito comercial y responsabilidad. Nitidez extrema en los poros de la piel."
        },
        {
            "id": "cv_63",
            "number": 63,
            "style": "CV",
            "title": "COORDINADOR DE EVENTOS",
            "content": "Personaje con rostro subido como referencia con radio comunicador y plano de montaje PBR. Hangar industrial de fondo. Iluminación de mañana fría. Biometría de organización extrema y responsabilidad logística."
        },
        {
            "id": "cv_64",
            "number": 64,
            "style": "CV",
            "title": "DISCRECIÓN DE DIRECCIÓN",
            "content": "Retrato de perfil con Sony Venice. Personaje con rostro subido como referencia en zona de sombra elegante. Iluminación Rembrandt que oculta parte del rostro sugiriendo confidencialidad y seriedad administrativa."
        },
        {
            "id": "cv_65",
            "number": 65,
            "style": "CV",
            "title": "INSPECTOR DE CALIDAD",
            "content": "Primer plano de rostro subido como referencia usando microscopio digital PBR. Iluminación blanca de laboratorio. Biometría facial de detalle microscópico y responsabilidad técnica absoluta. Calidad Masterpiece."
        },
        {
            "id": "cv_66",
            "number": 66,
            "style": "CV",
            "title": "GESTIÓN DE INFRAESTRUCTURAS",
            "content": "Plano americano con Arri Alexa. Personaje con rostro subido como referencia con casco blanco PBR y planos de edificio. Iluminación de obra a pleno sol 5600K. Biometría de control y seriedad profesional en campo."
        },
        {
            "id": "cv_67",
            "number": 67,
            "style": "CV",
            "title": "ADMINISTRACIÓN HOSPITALARIA",
            "content": "Entorno clínico ultra-limpio. Personaje con rostro subido como referencia con uniforme médico PBR y tablet. Iluminación fría y aséptica. Biometría de responsabilidad ética y humana. Captura con Red V-Raptor."
        },
        {
            "id": "cv_68",
            "number": 68,
            "style": "CV",
            "title": "COORDINACIÓN DE SEGURIDAD",
            "content": "Primer plano de rostro subido como referencia reflejado en múltiples monitores de CCTV. Iluminación de sala oscura con brillos electrónicos. Biometría de vigilancia y responsabilidad constante. Calidad 8K RAW."
        },
        {
            "id": "cv_69",
            "number": 69,
            "style": "CV",
            "title": "GESTIÓN PATRIMONIAL",
            "content": "Retrato corporativo con fondo de galería de arte/subasta. Rostro subido como referencia con guantes blancos de seda PBR sosteniendo pieza antigua. Iluminación de lujo que resalta la responsabilidad y el valor."
        },
        {
            "id": "cv_70",
            "number": 70,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE SISTEMAS",
            "content": "Personaje con rostro subido como referencia entre racks de servidores PBR. Iluminación de luces de estado LED. Biometría de concentración técnica y responsabilidad de infraestructura digital. Sony Venice 2."
        },
        {
            "id": "cv_71",
            "number": 71,
            "style": "CV",
            "title": "PROTOCOLOS DE EXPORTACIÓN",
            "content": "Primer plano de rostro subido como referencia con sellos de aduana PBR y documentos. Iluminación de oficina exterior con contenedores de fondo. Biometría de rigor administrativo y seriedad logística internacional."
        },
        {
            "id": "cv_72",
            "number": 72,
            "style": "CV",
            "title": "DIRECCIÓN DE RECURSOS HUMANOS",
            "content": "Plano medio con Arri Alexa 35. Personaje con rostro subido como referencia en entrevista seria. Iluminación que proyecta confianza y responsabilidad. Textura de traje de lana italiana PBR con micro-detalle."
        },
        {
            "id": "cv_73",
            "number": 73,
            "style": "CV",
            "title": "CONTROL PRESUPUESTARIO",
            "content": "Retrato técnico con Red V-Raptor. Personaje con rostro subido como referencia rodeado de pantallas con gráficos financieros. Iluminación de oficina nocturna con luz de ciudad a través del vidrio. Responsabilidad y precisión."
        },
        {
            "id": "cv_74",
            "number": 74,
            "style": "CV",
            "title": "GESTIÓN DE RIESGOS",
            "content": "Primer plano de rostro subido como referencia con expresión de análisis profundo y seriedad inquebrantable. Iluminación lateral dura. Piel con textura biométrica extrema. Estética de analista de inteligencia profesional."
        },
        {
            "id": "cv_75",
            "number": 75,
            "style": "CV",
            "title": "COORDINACIÓN ACADÉMICA",
            "content": "Entorno de universidad antigua con madera y cuero PBR. Personaje con rostro subido como referencia con toga académica y expresión de responsabilidad educativa. Iluminación solemne Arri Raw."
        },
        {
            "id": "cv_76",
            "number": 76,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE TRANSPORTES",
            "content": "Plano americano con Sony Venice. Personaje con rostro subido como referencia frente a flota de camiones PBR en hangar. Iluminación de amanecer industrial. Biometría de mando y responsabilidad logística masiva."
        },
        {
            "id": "cv_77",
            "number": 77,
            "style": "CV",
            "title": "SOSTENIBILIDAD CORPORATIVA",
            "content": "Administrativo con rostro subido como referencia en terraza de oficina verde (PBR plants). Iluminación natural suave de tarde. Biometría de compromiso ético y responsabilidad ambiental. Calidad cinematográfica."
        },
        {
            "id": "cv_78",
            "number": 78,
            "style": "CV",
            "title": "GESTIÓN DE CONVENIOS",
            "content": "Primer plano de manos firmando contrato con pluma estilográfica PBR de plata. Rostro subido como referencia desenfocado al fondo con expresión de satisfacción seria. Iluminación de despacho notarial de prestigio."
        },
        {
            "id": "cv_79",
            "number": 79,
            "style": "CV",
            "title": "PROTOCOLOS DE ARCHIVO DIGITAL",
            "content": "Retrato corporativo con lente de 50mm. Personaje con rostro subido como referencia rodeado de nubes de datos virtuales (Efectos de post-procesado). Luz cian y blanca. Biometría de responsabilidad informática 8K."
        },
        {
            "id": "cv_80",
            "number": 80,
            "style": "CV",
            "title": "DIRECCIÓN DE OPERACIONES",
            "content": "Plano general de centro logístico con personaje con rostro subido como referencia en el centro. Iluminación de gran escala industrial. Escala épica y responsabilidad profesional capturada con Red V-Raptor XL."
        },
        {
            "id": "cv_81",
            "number": 81,
            "style": "CV",
            "title": "GESTIÓN DE CALIDAD TOTAL",
            "content": "Primer plano de rostro subido como referencia inspeccionando pieza de alta tecnología con lente de aumento. Iluminación blanca pura. Biometría de rigor microscópico y responsabilidad absoluta. Sony Venice 2."
        },
        {
            "id": "cv_82",
            "number": 82,
            "style": "CV",
            "title": "CONSEJERO DE ADMINISTRACIÓN",
            "content": "Retrato de prestigio con Arri Alexa 35. Personaje con rostro subido como referencia con traje de gala clásico PBR. Iluminación Rembrandt dramática que resalta la sabiduría y la responsabilidad institucional."
        },
        {
            "id": "cv_83",
            "number": 83,
            "style": "CV",
            "title": "PROTOCOLOS DE INTEGRACIÓN",
            "content": "Escena de bienvenida corporativa. Personaje con rostro subido como referencia con tarjeta de identificación PBR translúcida. Iluminación de oficina moderna y luminosa. Biometría de acogida y profesionalismo serio."
        },
        {
            "id": "cv_84",
            "number": 84,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE OBRA",
            "content": "Primer plano de rostro subido como referencia con casco y gafas protectoras PBR. Polvo y chispas al fondo. Iluminación de obra real. Biometría facial de responsabilidad técnica y control de seguridad."
        },
        {
            "id": "cv_85",
            "number": 85,
            "style": "CV",
            "title": "GESTIÓN DE TRÁMITES",
            "content": "Administrativo con rostro subido como referencia rodeado de carpetas de colores ordenadas PBR. Iluminación de oficina clásica de mañana. Biometría de organización extrema y responsabilidad en los detalles. 8K RAW."
        },
        {
            "id": "cv_86",
            "number": 86,
            "style": "CV",
            "title": "DIRECCIÓN DE COMPRAS INTERNACIONALES",
            "content": "Plano medio con Sony Venice en terminal de aeropuerto. Personaje con rostro subido como referencia con maleta de cuero PBR. Iluminación natural de hall de cristal. Biometría de viajero profesional y responsable."
        },
        {
            "id": "cv_87",
            "number": 87,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE PROPIEDADES",
            "content": "Retrato frente a edificio de cristal moderno PBR con reflejos Ray-tracing. Personaje con rostro subido como referencia con llaves magnéticas y planos digitales. Responsabilidad e integridad inmobiliaria técnica."
        },
        {
            "id": "cv_88",
            "number": 88,
            "style": "CV",
            "title": "COORDINACIÓN DE FLOTAS",
            "content": "Primer plano de rostro subido como referencia reflejado en capó de coche de empresa pulido PBR. Iluminación de garaje técnico con luces LED. Biometría de mando automotriz y responsabilidad logística."
        },
        {
            "id": "cv_89",
            "number": 89,
            "style": "CV",
            "title": "GESTIÓN DE SUBVENCIONES",
            "content": "Administrativo con rostro subido como referencia en sala de archivos histórica. Luz de sol a través de ventana alta filtrando el polvo. Biometría de investigación y responsabilidad financiera institucional."
        },
        {
            "id": "cv_90",
            "number": 90,
            "style": "CV",
            "title": "ADMINISTRACIÓN FARMACÉUTICA",
            "content": "Entorno estéril y blanco. Personaje con rostro subido como referencia con bata de laboratorio PBR y registro de inventario. Iluminación azulada limpia. Biometría de rigor médico y responsabilidad administrativa."
        },
        {
            "id": "cv_91",
            "number": 91,
            "style": "CV",
            "title": "PROTOCOLOS DE CALIDAD AERONÁUTICA",
            "content": "Primer plano de rostro subido como referencia bajo motor de avión gigante PBR. Iluminación técnica de hangar. Biometría de responsabilidad extrema por la seguridad y mando profesional capturado con Red V-Raptor."
        },
        {
            "id": "cv_92",
            "number": 92,
            "style": "CV",
            "title": "DIRECCIÓN DE COMUNICACIÓN",
            "content": "Retrato corporativo con lente de 85mm. Personaje con rostro subido como referencia en sala de prensa. Luces de focos frontales resaltando la expresión de confianza y responsabilidad comunicativa sólida."
        },
        {
            "id": "cv_93",
            "number": 93,
            "style": "CV",
            "title": "CONTABILIDAD GENERAL",
            "content": "Plano medio con Arri Alexa. Personaje con rostro subido como referencia con calculadora de oficina PBR. Iluminación de día nublado que suaviza la escena pero mantiene la seriedad del contexto administrativo."
        },
        {
            "id": "cv_94",
            "number": 94,
            "style": "CV",
            "title": "GESTIÓN DE LICENCIAS",
            "content": "Escena de oficina con archivadores de metal PBR e iluminación fluorescente de alta gama. Rostro subido como referencia con expresión de control normativo y responsabilidad. Nitidez absoluta en cada documento."
        },
        {
            "id": "cv_95",
            "number": 95,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE RECURSOS ENERGÉTICOS",
            "content": "Fondo de parque eólico PBR bajo cielo de tormenta. Personaje con rostro subido como referencia con tablet industrial y traje técnico. Iluminación épica de responsabilidad ambiental profesional. Arri Raw."
        },
        {
            "id": "cv_96",
            "number": 96,
            "style": "CV",
            "title": "PROTOCOLOS DE ATENCIÓN EJECUTIVA",
            "content": "Primer plano de rostro subido como referencia con sonrisa sutil y mirada seria. Iluminación suave de hotel 5 estrellas. Biometría de excelencia en el trato y responsabilidad institucional. Calidad fotográfica Masterpiece."
        },
        {
            "id": "cv_97",
            "number": 97,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE PROYECTOS TI",
            "content": "Retrato con Sony Venice 2. Personaje con rostro subido como referencia con código de resolución reflejado en las gafas de montura PBR. Iluminación de servidor de datos. Responsabilidad digital y técnica."
        },
        {
            "id": "cv_98",
            "number": 98,
            "style": "CV",
            "title": "COORDINACIÓN DE TURISMO DE LUJO",
            "content": "Plano americano con Red V-Raptor en salón de mansión histórica PBR. Personaje con rostro subido como referencia con traje impecable. Iluminación de lujo que proyecta seriedad y gestión de alto nivel."
        },
        {
            "id": "cv_99",
            "number": 99,
            "style": "CV",
            "title": "ADMINISTRACIÓN DE SEGUROS",
            "content": "Primer plano de rostro subido como referencia analizando póliza de papel PBR. Luz de oficina seria 5000K. Biometría facial de protección y responsabilidad máxima por el cliente. Nitidez 8K absoluta."
        },
        {
            "id": "cv_100",
            "number": 100,
            "style": "CV",
            "title": "PRESIDENCIA DEL CONSEJO",
            "content": "Retrato corporativo definitivo capturado con Arri Alexa 35. Personaje con rostro subido como referencia con traje de gala personalizado PBR. Iluminación de máxima autoridad estilo retrato presidencial. Fondo de despacho de roble y banderas con detalle microscópico. Calidad cinematográfica de élite mundial."
        }
    ]
};