// Additional medical sections - Part 2

export const additionalSections = [
    {
        id: 'lungs',
        title: 'Sistema Respiratorio',
        subtitle: 'Pulmones y Respiración',
        emoji: '🫁',
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        image: 'lungs_organ_1766688440272.png',
        shortDescription: 'El intercambio vital de oxígeno',
        description: 'El sistema respiratorio permite la entrada de oxígeno y la eliminación de dióxido de carbono, proceso esencial para la vida celular.',

        sections: [
            {
                title: 'Anatomía Respiratoria',
                content: 'El sistema respiratorio incluye vías aéreas superiores e inferiores.',
                subsections: [
                    { name: 'Nariz y Fosas Nasales', details: 'Filtran, humedecen y calientan el aire. Contienen cilios y mucosidad protectora.' },
                    { name: 'Faringe y Laringe', details: 'La faringe conecta nariz y boca con la laringe. La laringe contiene las cuerdas vocales.' },
                    { name: 'Tráquea', details: 'Tubo de 10-12 cm reforzado con anillos cartilaginosos que conduce aire a los bronquios.' },
                    { name: 'Bronquios y Bronquiolos', details: 'Se ramifican como un árbol invertido, disminuyendo de tamaño hasta los alvéolos.' }
                ]
            },
            {
                title: 'Los Pulmones',
                content: 'Órganos esponjosos donde ocurre el intercambio gaseoso.',
                subsections: [
                    { name: 'Estructura', details: 'El pulmón derecho tiene 3 lóbulos, el izquierdo 2 (para acomodar el corazón).' },
                    { name: 'Alvéolos', details: '300 millones de sacos diminutos donde O2 pasa a la sangre y CO2 sale.' },
                    { name: 'Pleura', details: 'Membrana doble que recubre los pulmones y reduce la fricción al respirar.' }
                ]
            },
            {
                title: 'Mecánica Respiratoria',
                content: 'La respiración involucra movimientos coordinados de músculos.',
                subsections: [
                    { name: 'Inspiración', details: 'El diafragma baja, las costillas suben, los pulmones se expanden y entra aire.' },
                    { name: 'Espiración', details: 'Los músculos se relajan, los pulmones se comprimen y sale el aire.' },
                    { name: 'Control', details: 'El bulbo raquídeo regula la respiración según niveles de CO2 en sangre.' }
                ]
            }
        ],

        facts: [
            'Respiramos aproximadamente 20,000 veces al día',
            'Los pulmones contienen unos 300 millones de alvéolos',
            'La superficie de los alvéolos equivale a una cancha de tenis',
            'Podemos vivir solo unos minutos sin oxígeno',
            'El pulmón derecho es más grande que el izquierdo',
            'Un adulto respira unos 11,000 litros de aire al día'
        ],

        keyParts: [
            { name: 'Pulmones', function: 'Intercambio de oxígeno y CO2' },
            { name: 'Tráquea', function: 'Conducir aire hacia los pulmones' },
            { name: 'Bronquios', function: 'Distribuir aire en los pulmones' },
            { name: 'Alvéolos', function: 'Intercambio gaseoso con la sangre' },
            { name: 'Diafragma', function: 'Músculo principal de la respiración' }
        ],

        diseases: [
            { name: 'Asma', description: 'Inflamación y estrechamiento de vías aéreas' },
            { name: 'Neumonía', description: 'Infección que inflama los alvéolos pulmonares' },
            { name: 'EPOC', description: 'Enfermedad pulmonar obstructiva crónica' },
            { name: 'Cáncer de pulmón', description: 'Crecimiento anormal de células pulmonares' }
        ],

        examQuestions: [
            { question: '¿Cuántos alvéolos tienen los pulmones?', options: ['1 millón', '100 millones', '300 millones', '1 billón'], correct: 2, explanation: 'Los pulmones contienen aproximadamente 300 millones de alvéolos.' },
            { question: '¿Cuál es el músculo principal de la respiración?', options: ['Intercostales', 'Diafragma', 'Abdominales', 'Esternocleidomastoideo'], correct: 1, explanation: 'El diafragma es el músculo principal que controla la respiración.' },
            { question: '¿Cuántos lóbulos tiene el pulmón derecho?', options: ['1', '2', '3', '4'], correct: 2, explanation: 'El pulmón derecho tiene 3 lóbulos; el izquierdo solo 2.' },
            { question: '¿Qué gas eliminamos al exhalar?', options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Hidrógeno'], correct: 2, explanation: 'Exhalamos principalmente dióxido de carbono (CO2).' },
            { question: '¿Cuántas veces respiramos aproximadamente al día?', options: ['5,000', '10,000', '20,000', '50,000'], correct: 2, explanation: 'Respiramos aproximadamente 20,000 veces cada día.' }
        ]
    },
    {
        id: 'digestive',
        title: 'Sistema Digestivo',
        subtitle: 'Estómago e Intestinos',
        emoji: '🥗',
        color: '#f97316',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        image: 'digestive_system_1766688453682.png',
        shortDescription: 'Transformando alimentos en energía',
        description: 'El sistema digestivo descompone los alimentos mecánica y químicamente para extraer nutrientes que el cuerpo utiliza para energía, crecimiento y reparación.',

        sections: [
            {
                title: 'Tracto Digestivo Superior',
                content: 'Inicia la digestión mecánica y química de los alimentos.',
                subsections: [
                    { name: 'Boca', details: 'Los dientes mastican y la saliva (con amilasa) inicia la digestión de carbohidratos.' },
                    { name: 'Faringe y Esófago', details: 'La deglución lleva el bolo alimenticio al estómago mediante peristalsis.' },
                    { name: 'Estómago', details: 'Ácido clorhídrico y pepsina descomponen proteínas. Almacena comida 2-6 horas.' }
                ]
            },
            {
                title: 'Intestinos',
                content: 'Donde ocurre la mayor parte de digestión y absorción.',
                subsections: [
                    { name: 'Intestino Delgado', details: '6 metros de largo. Duodeno, yeyuno e íleon absorben el 90% de nutrientes.' },
                    { name: 'Vellosidades', details: 'Millones de proyecciones aumentan la superficie de absorción 600 veces.' },
                    { name: 'Intestino Grueso', details: '1.5 metros. Absorbe agua y electrolitos, forma y almacena heces.' }
                ]
            },
            {
                title: 'Órganos Accesorios',
                content: 'Producen sustancias esenciales para la digestión.',
                subsections: [
                    { name: 'Hígado', details: 'Produce bilis para digerir grasas. Desintoxica y almacena nutrientes.' },
                    { name: 'Vesícula Biliar', details: 'Almacena y concentra la bilis producida por el hígado.' },
                    { name: 'Páncreas', details: 'Produce enzimas digestivas e insulina para regular glucosa.' }
                ]
            }
        ],

        facts: [
            'El intestino delgado mide aproximadamente 6 metros',
            'El proceso digestivo completo toma de 24 a 72 horas',
            'El estómago produce ácido capaz de disolver metal',
            'Producimos alrededor de 1.5 litros de saliva al día',
            'El hígado realiza más de 500 funciones diferentes',
            'El intestino tiene más de 100 millones de neuronas'
        ],

        keyParts: [
            { name: 'Boca', function: 'Masticación y digestión inicial' },
            { name: 'Estómago', function: 'Digestión ácida de proteínas' },
            { name: 'Intestino delgado', function: 'Absorción de nutrientes' },
            { name: 'Hígado', function: 'Producir bilis y procesar nutrientes' },
            { name: 'Páncreas', function: 'Enzimas digestivas y hormonas' }
        ],

        diseases: [
            { name: 'Gastritis', description: 'Inflamación del revestimiento del estómago' },
            { name: 'Úlcera péptica', description: 'Herida en el revestimiento del estómago o duodeno' },
            { name: 'Enfermedad de Crohn', description: 'Inflamación crónica del tracto digestivo' },
            { name: 'Cirrosis', description: 'Cicatrización del hígado por daño crónico' }
        ],

        examQuestions: [
            { question: '¿Cuánto mide aproximadamente el intestino delgado?', options: ['1 metro', '3 metros', '6 metros', '10 metros'], correct: 2, explanation: 'El intestino delgado mide aproximadamente 6 metros.' },
            { question: '¿Qué órgano produce la bilis?', options: ['Estómago', 'Páncreas', 'Hígado', 'Vesícula'], correct: 2, explanation: 'El hígado produce la bilis; la vesícula solo la almacena.' },
            { question: '¿Cuánto tiempo dura el proceso digestivo completo?', options: ['6-12 horas', '24-72 horas', '1 semana', '2-6 horas'], correct: 1, explanation: 'La digestión completa toma entre 24 y 72 horas.' },
            { question: '¿Dónde se absorbe la mayoría de nutrientes?', options: ['Estómago', 'Intestino delgado', 'Intestino grueso', 'Esófago'], correct: 1, explanation: 'El intestino delgado absorbe aproximadamente el 90% de los nutrientes.' },
            { question: '¿Cuánta saliva producimos al día?', options: ['0.5 litros', '1.5 litros', '3 litros', '5 litros'], correct: 1, explanation: 'Producimos aproximadamente 1.5 litros de saliva diariamente.' }
        ]
    },
    {
        id: 'skeleton',
        title: 'Sistema Óseo',
        subtitle: 'Huesos y Esqueleto',
        emoji: '🦴',
        color: '#eab308',
        gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
        image: 'skeleton_system_1766688466936.png',
        shortDescription: 'La estructura que nos sostiene',
        description: 'El sistema óseo proporciona soporte estructural, protección a órganos vitales, permite el movimiento y participa en la producción de células sanguíneas.',

        sections: [
            {
                title: 'Estructura Ósea',
                content: 'Los huesos son órganos vivos con estructura compleja.',
                subsections: [
                    { name: 'Hueso Compacto', details: 'Capa externa densa y dura que proporciona resistencia.' },
                    { name: 'Hueso Esponjoso', details: 'Interior poroso que reduce peso y contiene médula.' },
                    { name: 'Médula Ósea', details: 'Roja produce células sanguíneas; amarilla almacena grasa.' },
                    { name: 'Periostio', details: 'Membrana externa con vasos sanguíneos y nervios.' }
                ]
            },
            {
                title: 'División del Esqueleto',
                content: 'El esqueleto humano tiene 206 huesos en el adulto.',
                subsections: [
                    { name: 'Esqueleto Axial', details: '80 huesos: cráneo (22), columna vertebral (26), costillas (24), esternón.' },
                    { name: 'Esqueleto Apendicular', details: '126 huesos de las extremidades superiores e inferiores.' },
                    { name: 'Columna Vertebral', details: '7 cervicales, 12 torácicas, 5 lumbares, sacro y cóccix.' }
                ]
            },
            {
                title: 'Articulaciones',
                content: 'Puntos donde los huesos se conectan.',
                subsections: [
                    { name: 'Sinoviales', details: 'Móviles con líquido lubricante (rodilla, codo, hombro).' },
                    { name: 'Cartilaginosas', details: 'Semimóviles unidas por cartílago (vértebras).' },
                    { name: 'Fibrosas', details: 'Inmóviles unidas por tejido fibroso (cráneo).' }
                ]
            }
        ],

        facts: [
            'El cuerpo adulto tiene 206 huesos',
            'Los bebés nacen con unos 270 huesos que se fusionan',
            'Los huesos se renuevan completamente cada 10 años',
            'El fémur es el hueso más largo y fuerte',
            'El hueso más pequeño es el estribo del oído (3mm)',
            'Los huesos son 5 veces más fuertes que el acero por peso'
        ],

        keyParts: [
            { name: 'Cráneo', function: 'Proteger el cerebro' },
            { name: 'Columna vertebral', function: 'Soporte y protección de médula espinal' },
            { name: 'Costillas', function: 'Proteger corazón y pulmones' },
            { name: 'Pelvis', function: 'Soportar peso y proteger órganos' },
            { name: 'Fémur', function: 'Soportar peso corporal' }
        ],

        diseases: [
            { name: 'Osteoporosis', description: 'Pérdida de densidad ósea que aumenta fracturas' },
            { name: 'Artritis', description: 'Inflamación de las articulaciones' },
            { name: 'Escoliosis', description: 'Curvatura anormal de la columna vertebral' },
            { name: 'Fracturas', description: 'Rotura de hueso por trauma o enfermedad' }
        ],

        examQuestions: [
            { question: '¿Cuántos huesos tiene el esqueleto adulto?', options: ['150', '206', '270', '300'], correct: 1, explanation: 'El adulto tiene 206 huesos; los bebés nacen con más.' },
            { question: '¿Cuál es el hueso más largo del cuerpo?', options: ['Tibia', 'Húmero', 'Fémur', 'Radio'], correct: 2, explanation: 'El fémur es el hueso más largo y fuerte del cuerpo.' },
            { question: '¿Dónde se producen las células sanguíneas?', options: ['Hígado', 'Médula ósea roja', 'Bazo', 'Riñones'], correct: 1, explanation: 'La médula ósea roja produce glóbulos rojos, blancos y plaquetas.' },
            { question: '¿Cada cuánto se renuevan completamente los huesos?', options: ['1 año', '5 años', '10 años', '20 años'], correct: 2, explanation: 'Los huesos se renuevan completamente aproximadamente cada 10 años.' },
            { question: '¿Cuántas vértebras tiene la columna cervical?', options: ['5', '7', '12', '26'], correct: 1, explanation: 'La columna cervical tiene 7 vértebras.' }
        ]
    }
];
