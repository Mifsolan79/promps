
const fs = require('fs');
const filePath = 'd:\\- - - GENERAR PROMPS\\PELICULAS\\data_prompts_v2.js';

const professionsRaw = [
"[MÉDICO DE URGENCIAS] **Retrato 8K, bata blanca impoluta, fonendoscopio Littmann al cuello, iluminación clínica fría de hospital.**",
"[ALBAÑIL EN OBRA] **Primer plano, casco de seguridad amarillo con roces, chaleco reflectante naranja, rostro con motas de cemento y sudor, fondo de andamiaje.**",
"[PILOTO DE CAZA F-35] **Interior de cabina, casco de vuelo con visor HUD avanzado, G-suit táctico, controles iluminados en verde esmeralda.**",
"[BOMBERO EN ACCIÓN] **Traje ignífugo Nomex oscuro, casco con linterna frontal, hacha en mano, fondo de partículas de ceniza y humo denso iluminado por fuego.**",
"[PILOTO COMERCIAL] **Uniforme azul marino con galones dorados, gorra de plato, cabina de cristal de un Airbus A350, amanecer a través del parabrisas.**",
"[MILITAR DE OPERACIONES ESPECIALES] **Uniforme de camuflaje Multicam, chaleco táctico con cargadores, visión nocturna GPNVG-18 levantada, entorno de jungla húmeda.**",
"[CIRUJANO JEFE] **Gorro y mascarilla quirúrgica, guantes de látex con sangre, luces LED de quirófano potentes, enfoque en los ojos de concentración extrema.**",
"[INGENIERO CIVIL] **Casco blanco, planos enrollados bajo el brazo, estación total topográfica al fondo, gran puente en construcción bajo cielo despejado.**",
"[CHEF DE COCINA] **Chaqueta blanca cruzada, gorro alto (toque), cuchillo de damasco en mano, cocina industrial con fogones encendidos y vapor.**",
"[POLICÍA CIENTÍFICO] **Mono blanco de protección, cámara réflex, recolectando evidencias con pinzas, iluminación de luz forense ultravioleta.**",
"[ASTRONAUTA EN LA ISS] **Traje espacial EMU, visor reflejando la curvatura de la Tierra, ingravidez, paneles solares al fondo.**",
"[CAMIONERO DE LARGA DISTANCIA] **Gorra de camionero, manos curtidas al volante de un Peterbilt, interior de cabina con luces de neón, carretera nocturna infinita.**",
"[AGRICULTOR MODERNO] **Camisa de cuadros, manos con tierra fértil, tractor John Deere moderno al fondo, campo de trigo dorado al atardecer.**",
"[BUZO SOLDADOR] **Casco de buceo antiguo Kirk Kirby, antorcha de soldadura submarina emitiendo burbujas y luz azul brillante, profundidad abisal.**",
"[PERIODISTA DE GUERRA] **Chaleco antibalas con rótulo 'PRESS', cámara Canon con teleobjetivo, fondo de ciudad en ruinas con humo en el horizonte.**",
"[VETERINARIO DE EXÓTICOS] **Pijama sanitario verde, examinando un pequeño reptil, clínica iluminada con luz natural, instrumental médico de precisión.**",
"[REPOSTERO ARTESANO] **Delantal con harina, amasando pan rústico, horno de piedra de leña al fondo con llamas cálidas.**",
"[MECÁNICO DE FÓRMULA 1] **Mono ignífugo de equipo, casquillos de comunicación, pistola de impacto en mano, boxes iluminados con luz blanca técnica.**",
"[CAPITÁN DE CARGUERO] **Barba cana, jersey de lana azul, prismáticos, puente de mando con radares iluminados, océano embravecido.**",
"[ABOGADO DE ELITE] **Traje de sastre a medida, corbata de seda, despacho de lujo con estanterías de libros jurídicos, luz de lámpara de banquero.**",
"[SOLDADOR INDUSTRIAL] **Máscara de soldar bajada, chispas saltando en arco voltaico, guantes de cuero protectores, atmósfera de taller metalúrgico.**",
"[DETECTIVE PRIVADO] **Gabardina clásica, sombrero fedora, oficina en penumbra con persianas venecianas, humo de cigarrillo y luz de neón exterior.**",
"[ARQUEÓLOGO EN EXCAVACIÓN] **Sombrero tipo Indiana Jones, brocha fina retirando arena de una reliquia antigua, sol del desierto abrasador.**",
"[ASTROFÍSICO EN OBSERVATORIO] **Frente a pantallas con mapas estelares, telescopio gigante al fondo, cúpula abierta revelando la Vía Láctea.**",
"[PELUQUERO ESTILISTA] **Tijeras profesionales en mano, capa de peluquería negra, espejos de salón con luces circulares, atmósfera de moda urbana.**",
"[GUARDIA REAL] **Uniforme de gala con plumas, fusil al hombro, expresión imperturbable, fachada de palacio histórico detrás.**",
"[GUÍA DE MONTAÑA] **Ropa técnica Gore-Tex, piolet y crampones, cima de montaña nevada con nubes bajas, sol de alta montaña.**",
"[MÚSICO DE ORQUESTA] **Frac negro, violín Stradivarius, escenario de auditorio iluminado, partituras con anotaciones a lápiz.**",
"[BIÓLOGO MARINO] **Neopreno, máscara de buceo, nadando junto a una ballena jorobada, agua cristalina con rayos de sol filtrados.**",
"[ESCRITOR SOLITARIO] **Máquina de escribir antigua, montaña de papeles, cabaña de madera con chimenea encendida, luz de vela.**",
"[BIBLIOTECARIO DE ANTIGÜEDADES] **Guantes blancos de algodón, pasando páginas de un manuscrito medieval, estanterías infinitas de madera oscura.**",
"[CONTROLADOR AÉREO] **Auriculares con micro, múltiples pantallas de radar verdes, torre de control de noche con luces de pista al fondo.**",
"[HERRERO ARTESANO] **Yunque y martillo golpeando hierro candente, chispas naranjas, fragua con carbón al rojo vivo.**",
"[DENTISTA PEDIÁTRICO] **Mascarilla con dibujos, clínica colorida y amigable, instrumental dental de última generación, luz cálida.**",
"[REPARTIDOR DE PAQUETERÍA] **Uniforme de empresa, terminal PDA en mano, furgoneta al fondo en calle urbana lluviosa nocturna.**",
"[JUEZ DE TRIBUNAL] **Toga negra, mazo de madera en el estrado, sala de juicios con paneles de madera, expresión de autoridad.**",
"[PINTOR DE BELLAS ARTES] **Manos manchadas de óleo, paleta de colores, lienzo a medio terminar, estudio con luz zenital natural.**",
"[LIMPIADOR DE CRISTALES EN RASCACIELOS] **Arnés de seguridad, plataforma suspendida, limpiando ventanal gigante, ciudad a 200 metros bajo los pies.**",
"[ENÓLOGO EN BODEGA] **Copa de vino tinto a contraluz, barricas de roble alineadas, sótano de piedra con humedad y sombras.**",
"[ELECTRICISTA DE ALTA TENSIÓN] **Subido a torre eléctrica, guantes aislantes, herramientas de cableado, cielo tormentoso al fondo.**",
"[ENTRENADOR PERSONAL] **Ropa deportiva técnica, cronómetro, gimnasio de alto rendimiento con pesas y espejos, iluminación motivacional.**",
"[GEÓLOGO DE CAMPO] **Martillo de geólogo, examinando veta de mineral, entorno de cañón rocoso, sol de mediodía.**",
"[CONSERJE DE HOTEL DE LUJO] **Uniforme impecable con llaves cruzadas (Les Clefs d'Or), mostrador de mármol, lobby opulento con lámparas de araña.**",
"[PESCADOR DE ALTURA] **Chubasquero amarillo, redes llenas de peces plateados, barco pesquero en mitad de una tormenta, olas gigantes.**",
"[TAXISTA NOCTURNO] **Rostro iluminado por el salpicadero, luces de la ciudad reflejadas en el cristal, interior de coche con ambientador de pino.**",
"[ESCULTOR DE MÁRMOL] **Cincel y maza, nube de polvo blanco, bloque de mármol de Carrara tomando forma humana.**",
"[FOTÓGRAFO DE BODAS] **Dos cámaras colgadas al hombro, entorno de jardín romántico, pareja desenfocada al fondo, luz de atardecer.**",
"[GUÍA TURÍSTICO URBANO] **Paraguas de colores levantado, grupo de turistas detrás, frente a un monumento famoso, día nublado.**",
"[RELOJERO DE PRECISIÓN] **Monóculo de aumento, pinzas microscópicas, engranajes dorados de un reloj de pulsera suizo, banco de trabajo limpio.**",
"[GANADERO DE TOROS] **Sombrero cordobés, a caballo, vara larga, campo de dehesa con encinas y toros bravos al fondo.**",
"[SOCORRISTA DE PLAYA] **Camiseta roja con cruz blanca, prismáticos, silla de vigilancia alta, mar azul turquesa y arena blanca.**",
"[CARPINTERO DE MUEBLES] **Metro de madera, serrín en el aire, garlopa cepillando madera de nogal, taller con olor a resina.**",
"[VENDEDOR DE MERCADO] **Mandil, cesta de frutas frescas y coloridas, puesto con toldo de rayas, bullicio de gente desenfocada.**",
"[MODELO DE PASARELA] **Maquillaje vanguardista, vestido de alta costura, flashes de cámaras cegadores, pasarela negra brillante.**",
"[QUÍMICO DE LABORATORIO] **Bata blanca, tubos de ensayo con líquidos fluorescentes, microscopio electrónico, ambiente estéril azulado.**",
"[CERRAJERO DE URGENCIAS] **Caja de herramientas, ganzúa abriendo cerradura de seguridad, portal de noche con luz de farola tenue.**",
"[PASTOR DE OVEJAS] **Cayado de madera, rebaño de ovejas blancas, perro border collie a su lado, pradera verde infinita.**",
"[CONSTRUCTOR DE GUITARRAS] **Luthiere, encolando el cuerpo de una guitarra española, veteado de madera preciosa, luz cálida de taller.**",
"[TAXIDERMISTA PROFESIONAL] **Pincel fino, ojos de cristal, animal salvaje en pose majestuosa, estudio con especímenes conservados.**",
"[MAQUINISTA DE TREN] **Uniforme ferroviario, panel de control de tren de alta velocidad, túnel iluminado por los faros delanteros.**",
"[PALEONTÓLOGO] **Pincel y espátula, desenterrando un fémur de dinosaurio, entorno de desierto de Utah, sol abrasador.**",
"[BARMAN DE COCTELERÍA] **Coctelera en movimiento, chorro de líquido dorado, cristalería elegante, bar de noche con luz tenue y botellas retroiluminadas.**",
"[SOPRANO DE OPERA] **Vestido de época, expresión de canto potente, escenario de teatro clásico con telón rojo, iluminación de foco.**",
"[ADIESTRADOR CANINO] **Militar o civil, silbato, perro pastor alemán en posición de guardia, campo de entrenamiento con obstáculos.**",
"[PILOTO DE HELICÓPTERO DE RESCATE] **Casco de vuelo blanco, mandos del helicóptero, cables de rescate, montaña nevada o mar embravecido.**",
"[MODISTA DE ALTA COSTURA] **Alfileres en la boca, cinta métrica, ajustando traje sobre maniquí, taller luminoso con telas de seda.**",
"[GEÓGRAFO CARTÓARO] **Inclinado sobre mapa topográfico gigante, brújula y escalímetro, oficina con globos terráqueos antiguos.**",
"[HACKER ÉTICO] **Múltiples monitores con código de terminal verde, habitación a oscuras iluminada por el brillo de las pantallas.**",
"[CUIDADOR DE ZOO] **Uniforme de safari, alimentando a una jirafa, entorno de sabana recreada, luz de mañana.**",
"[JOYERO DIAMANTISTA] **Pinzas sosteniendo un diamante tallado, lupa de ojo, luz blanca intensísima enfocada en la gema.**",
"[FLORISTA ARTESANA] **Tijeras de poda, ramos de flores frescas de mil colores, tienda con aroma a campo y humedad.**",
"[COOPERANTE INTERNACIONAL] **Chaleco de ONG, repartiendo suministros, campo de refugiados con tiendas de lona, polvo y sol fuerte.**",
"[ARMONIZADOR DE INSTRUMENTOS] **Afinando un piano de cola negro, diapasón, sala de conciertos vacía con acústica perfecta.**",
"[TÉCNICO DE SONIDO] **Mesa de mezclas con cientos de botones y faders iluminados, auriculares, escenario de concierto de rock al fondo.**",
"[VIDRIERO ARTESANO] **Caña de soplar con masa de vidrio incandescente, forma de jarrón naranja brillante, horno a altísima temperatura.**",
"[ANTROPÓLOGO FORENSE] **Examinando restos óseos con lupa, laboratorio con cráneos, ambiente de investigación científica.**",
"[EDITOR DE CINE] **Sala de montaje a oscuras, tres monitores con líneas de tiempo complejas, auriculares profesionales de cuero.**",
"[JARDINERO DE PALACIO] **Tijeras de poda largas, setos perfectamente rectos, laberinto de jardín francés, luz de día despejado.**",
"[RESTAURADOR DE ARTE] **Pincel microscópico, eliminando barniz viejo de un cuadro renacentista, luz de examen ultravioleta.**",
"[OPERARIO DE PLATAFORMA PETROLERA] **Ropa de trabajo sucia de crudo, casco, mar del norte picado al fondo, estructura metálica gigante.**",
"[METEORÓLOGO] **Frente a pantalla de satélite con huracán, oficina con barómetros y anemómetros, luz artificial fuerte.**",
"[CRUPIER DE CASINO] **Repartiendo cartas de póker, fichas de casino apiladas, mesa de fieltro verde, iluminación de salón de juego.**",
"[TAPICERO ARTESANO] **Martillo de tapicero, tachuelas doradas, sillón de época a medio terminar, taller con rollos de tela y cuero.**",
"[GURÚ DE YOGA] **Postura de loto, ropa orgánica blanca, estudio minimalista con luz suave de amanecer, incienso quemándose.**",
"[CRONOMETRADOR DE CARRERAS] **Panel de tiempos digital, cronómetro de mano, línea de meta con corredores desenfocados, luz de día.**",
"[CALÍGRAFO MAESTRO] **Pluma de ave, tintero, pergamino con letras góticas perfectas, luz de vela y sombras alargadas.**",
"[ENCUADERNADOR DE LIBROS] **Prensa de madera, hilo de seda cosiendo lomos, cubiertas de cuero grabadas en oro.**",
"[EXAMINADOR DE DIAMANTES] **Espectrómetro, diamante bajo luz polarizada, laboratorio gemológico sofisticado.**",
"[APICULTOR] **Traje de protección blanco completo, ahumador en mano, panales de abejas dorados, entorno de campo de lavanda.**",
"[SOMMELIER] **Catando vino, decantador de cristal, bodega con estantes de hierro y botellas antiguas nubladas de polvo.**",
"[ZAPATERO DE CALZADO A MEDIDA] **Horma de madera, cuero de becerro, martillo de zapatero, taller con olor a pegamento y piel.**",
"[INGENIERO DE SONIDO EN ESTUDIO] **Micrófono Neumann frente a cantante (desenfocado), cabina insonorizada, luces de señalización rojas.**",
"[MUESTRISTA DE TELAS] **Manos acariciando seda salvaje, catálogos de textiles, estudio de diseño luminoso.**",
"[LIMPIADOR DE ESCENAS DEL CRIMEN] **Traje NBQ azul, nebulizador desinfectante, habitación desordenada con cintas de la policía.**",
"[MAESTRO DE ARTES MARCIALES] **Keikogi blanco, cinturón negro desgastado, dojo con suelo de madera, luz zenital.**",
"[DISEÑADOR DE VIDEOJUEGOS] **Tableta gráfica Wacom, modelado 3D de un monstruo en pantalla, habitación con figuritas de colección.**",
"[EXPERTO EN CIBERSEGURIDAD] **Analizando líneas de código malicioso en rojo, cortafuegos digital, atmósfera de sala de servidores fría.**",
"[OPTIMIZADOR DE MOTORES] **Manos con grasa, ajustando carburador de coche clásico, motor V8 al descubierto, taller retro.**",
"[CONSERJE DE MUSEO] **Uniforme oscuro, linterna en mano, patrullando sala de dinosaurios de noche, sombras largas.**",
"[ASTRONAUTA EN MARTE] **Traje espacial con polvo rojo, huella en el suelo arenoso, paisaje marciano con cielo anaranjado.**"
];

const formattedProfessions = professionsRaw.map((p, index) => {
    const match = p.match(/\[(.*?)\]\s*\*\*(.*?)\*\*/);
    const title = match ? match[1] : `PROFESIONAL ${index + 1}`;
    const body = match ? match[2] : p;
    return {
        "id": `PROFESIONES_${index + 1}`,
        "number": (index + 1).toString().padStart(3, '0'),
        "style": "PROFESIONES",
        "title": title,
        "content": body
    };
});

let content = fs.readFileSync(filePath, 'utf8');

// Eliminar el bloque de PROFESIONES actual (sea cual sea su formato) y re-inyectarlo al final del objeto
// Buscamos "PROFESIONES": [ ... ]
const regex = /"PROFESIONES":\s*\[[\s\S]*?\]/;
const newProfString = `"PROFESIONES": ` + JSON.stringify(formattedProfessions, null, 4);

if (regex.test(content)) {
    content = content.replace(regex, newProfString);
} else {
    // Si por alguna razón no lo encuentra, lo añade antes del cierre final
    content = content.replace(/};\s*$/, ',\n    ' + newProfString + '\n};');
}

fs.writeFileSync(filePath, content);
console.log('Base de datos reparada con PROFESIONES en formato objeto.');
