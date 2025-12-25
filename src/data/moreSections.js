// Medical sections part 3 - Muscular, Immune, and additional systems

export const moreSections = [
    {
        id: 'muscular',
        title: 'Sistema Muscular',
        subtitle: 'Músculos y Movimiento',
        emoji: '💪',
        color: '#ec4899',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        image: 'muscular_system_1766688478954.png',
        shortDescription: 'El poder detrás de cada movimiento',
        description: 'El sistema muscular permite todo tipo de movimiento, desde caminar hasta el latido del corazón, y genera el 85% del calor corporal.',

        sections: [
            {
                title: 'Tipos de Músculos',
                content: 'Existen tres tipos principales de tejido muscular.',
                subsections: [
                    { name: 'Músculo Esquelético', details: 'Voluntario, estriado. 640+ músculos que mueven el esqueleto. Se fatiga.' },
                    { name: 'Músculo Cardíaco', details: 'Involuntario, estriado. Solo en el corazón. Late sin fatigarse.' },
                    { name: 'Músculo Liso', details: 'Involuntario, no estriado. En órganos internos, vasos, tracto digestivo.' }
                ]
            },
            {
                title: 'Estructura Muscular',
                content: 'Los músculos esqueléticos tienen una organización jerárquica.',
                subsections: [
                    { name: 'Fibras Musculares', details: 'Células largas que contienen miofibrillas con actina y miosina.' },
                    { name: 'Fascículos', details: 'Grupos de fibras envueltas en tejido conectivo.' },
                    { name: 'Tendones', details: 'Tejido conectivo denso que une músculos a huesos.' }
                ]
            },
            {
                title: 'Contracción Muscular',
                content: 'Proceso por el cual los músculos generan fuerza.',
                subsections: [
                    { name: 'Teoría del Deslizamiento', details: 'Filamentos de actina se deslizan sobre miosina acortando el músculo.' },
                    { name: 'ATP', details: 'Fuente de energía para la contracción. Se regenera con oxígeno.' },
                    { name: 'Calcio', details: 'Ion esencial que inicia la contracción al liberarse del retículo.' }
                ]
            }
        ],

        facts: [
            'El cuerpo tiene más de 640 músculos esqueléticos',
            'Los músculos representan el 40% del peso corporal',
            'El músculo más fuerte es el masetero (mandíbula)',
            'Los músculos oculares se mueven más de 100,000 veces al día',
            'El músculo más largo es el sartorio del muslo',
            'Sonreír usa 17 músculos, fruncir el ceño usa 43'
        ],

        keyParts: [
            { name: 'Músculos esqueléticos', function: 'Movimiento voluntario' },
            { name: 'Músculo cardíaco', function: 'Bombear sangre continuamente' },
            { name: 'Músculos lisos', function: 'Funciones automáticas internas' },
            { name: 'Tendones', function: 'Conectar músculo al hueso' },
            { name: 'Fascia', function: 'Envolver y separar músculos' }
        ],

        diseases: [
            { name: 'Distrofia muscular', description: 'Debilidad progresiva por degeneración muscular' },
            { name: 'Miastenia gravis', description: 'Debilidad por fallo en comunicación nervio-músculo' },
            { name: 'Calambres', description: 'Contracciones involuntarias dolorosas' },
            { name: 'Tendinitis', description: 'Inflamación de los tendones por uso excesivo' }
        ],

        examQuestions: [
            { question: '¿Cuántos músculos esqueléticos tiene el cuerpo?', options: ['200', '400', '640+', '1000'], correct: 2, explanation: 'El cuerpo tiene más de 640 músculos esqueléticos.' },
            { question: '¿Qué porcentaje del peso corporal representan los músculos?', options: ['20%', '30%', '40%', '50%'], correct: 2, explanation: 'Los músculos representan aproximadamente el 40% del peso corporal.' },
            { question: '¿Cuál es el músculo más fuerte del cuerpo?', options: ['Bíceps', 'Cuádriceps', 'Masetero', 'Glúteo'], correct: 2, explanation: 'El masetero (mandíbula) es el músculo más fuerte por su tamaño.' },
            { question: '¿Qué tipo de músculo es el corazón?', options: ['Esquelético', 'Liso', 'Cardíaco', 'Mixto'], correct: 2, explanation: 'El corazón está compuesto de músculo cardíaco, involuntario y estriado.' },
            { question: '¿Qué molécula proporciona energía para la contracción?', options: ['Glucosa', 'ATP', 'Oxígeno', 'Calcio'], correct: 1, explanation: 'El ATP (adenosín trifosfato) es la fuente directa de energía.' }
        ]
    },
    {
        id: 'immune',
        title: 'Sistema Inmunológico',
        subtitle: 'Defensa del Cuerpo',
        emoji: '🛡️',
        color: '#22c55e',
        gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        image: null,
        shortDescription: 'Tu ejército personal de defensa',
        description: 'El sistema inmunológico es una red compleja de células, tejidos y órganos que trabajan juntos para defender al cuerpo contra invasores como bacterias, virus y parásitos.',

        sections: [
            {
                title: 'Inmunidad Innata',
                content: 'Primera línea de defensa, presente desde el nacimiento.',
                subsections: [
                    { name: 'Barreras Físicas', details: 'Piel, mucosas, cilios, ácido estomacal impiden entrada de patógenos.' },
                    { name: 'Células Fagocíticas', details: 'Neutrófilos y macrófagos engullen y destruyen invasores.' },
                    { name: 'Inflamación', details: 'Respuesta que aumenta flujo sanguíneo y atrae células inmunes.' },
                    { name: 'Fiebre', details: 'Temperatura elevada que dificulta la reproducción de patógenos.' }
                ]
            },
            {
                title: 'Inmunidad Adaptativa',
                content: 'Respuesta específica que desarrolla memoria.',
                subsections: [
                    { name: 'Linfocitos B', details: 'Producen anticuerpos específicos contra cada patógeno.' },
                    { name: 'Linfocitos T', details: 'Helper activan otras células; Citotóxicos destruyen células infectadas.' },
                    { name: 'Memoria Inmunológica', details: 'Células de memoria permiten respuestas más rápidas en el futuro.' }
                ]
            },
            {
                title: 'Órganos Linfáticos',
                content: 'Producen, maduran y almacenan células inmunes.',
                subsections: [
                    { name: 'Médula Ósea', details: 'Produce todas las células sanguíneas incluyendo leucocitos.' },
                    { name: 'Timo', details: 'Maduran los linfocitos T. Más activo en la infancia.' },
                    { name: 'Ganglios Linfáticos', details: 'Filtran la linfa y activan respuestas inmunes.' },
                    { name: 'Bazo', details: 'Filtra sangre, almacena linfocitos, elimina células viejas.' }
                ]
            }
        ],

        facts: [
            'El cuerpo produce millones de anticuerpos diferentes',
            'La fiebre es una respuesta inmune para combatir infecciones',
            'El sistema inmune recuerda patógenos por décadas',
            'El intestino contiene el 70% del sistema inmune',
            'Dormimos mejor cuando estamos enfermos porque el sistema inmune trabaja más',
            'Las vacunas entrenan al sistema inmune sin causar enfermedad'
        ],

        keyParts: [
            { name: 'Glóbulos blancos', function: 'Identificar y destruir patógenos' },
            { name: 'Anticuerpos', function: 'Neutralizar invasores específicos' },
            { name: 'Ganglios linfáticos', function: 'Filtrar linfa y activar inmunidad' },
            { name: 'Bazo', function: 'Filtrar sangre y almacenar células' },
            { name: 'Timo', function: 'Maduración de linfocitos T' }
        ],

        diseases: [
            { name: 'VIH/SIDA', description: 'Virus que destruye linfocitos T helper' },
            { name: 'Alergias', description: 'Respuesta exagerada a sustancias inofensivas' },
            { name: 'Lupus', description: 'Enfermedad autoinmune que ataca tejidos propios' },
            { name: 'Artritis reumatoide', description: 'Autoinmunidad que afecta articulaciones' }
        ],

        examQuestions: [
            { question: '¿Qué porcentaje del sistema inmune está en el intestino?', options: ['30%', '50%', '70%', '90%'], correct: 2, explanation: 'Aproximadamente el 70% del sistema inmune está en el intestino.' },
            { question: '¿Qué células producen anticuerpos?', options: ['Linfocitos T', 'Linfocitos B', 'Neutrófilos', 'Macrófagos'], correct: 1, explanation: 'Los linfocitos B producen anticuerpos específicos.' },
            { question: '¿Dónde maduran los linfocitos T?', options: ['Médula ósea', 'Bazo', 'Timo', 'Ganglios'], correct: 2, explanation: 'Los linfocitos T maduran en el timo.' },
            { question: '¿Cuál es la primera línea de defensa del cuerpo?', options: ['Anticuerpos', 'Linfocitos', 'Piel y mucosas', 'Fiebre'], correct: 2, explanation: 'La piel y mucosas son barreras físicas de la inmunidad innata.' },
            { question: '¿Las vacunas funcionan activando qué tipo de inmunidad?', options: ['Innata', 'Adaptativa', 'Pasiva', 'Natural'], correct: 1, explanation: 'Las vacunas activan la inmunidad adaptativa creando memoria inmunológica.' }
        ]
    },
    {
        id: 'renal',
        title: 'Sistema Urinario',
        subtitle: 'Riñones y Excreción',
        emoji: '🫘',
        color: '#a855f7',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        image: null,
        shortDescription: 'Filtrando y purificando tu cuerpo',
        description: 'El sistema urinario filtra la sangre para eliminar desechos, regula el equilibrio de agua y electrolitos, y ayuda a controlar la presión arterial.',

        sections: [
            {
                title: 'Los Riñones',
                content: 'Órganos en forma de frijol que filtran 180 litros de sangre diariamente.',
                subsections: [
                    { name: 'Nefrona', details: 'Unidad funcional del riñón. Cada riñón tiene 1 millón de nefronas.' },
                    { name: 'Glomérulo', details: 'Red capilar donde se filtra la sangre inicialmente.' },
                    { name: 'Túbulos', details: 'Reabsorben nutrientes útiles y excretan desechos.' }
                ]
            },
            {
                title: 'Formación de Orina',
                content: 'Proceso de tres etapas para producir orina.',
                subsections: [
                    { name: 'Filtración', details: 'La presión sanguínea fuerza líquido a través del glomérulo.' },
                    { name: 'Reabsorción', details: '99% del filtrado vuelve a la sangre (agua, glucosa, aminoácidos).' },
                    { name: 'Secreción', details: 'Sustancias adicionales se añaden directamente a los túbulos.' }
                ]
            },
            {
                title: 'Vías Urinarias',
                content: 'Conducen la orina desde los riñones al exterior.',
                subsections: [
                    { name: 'Uréteres', details: 'Tubos de 25 cm que llevan orina de riñones a vejiga.' },
                    { name: 'Vejiga', details: 'Almacena 300-500 ml de orina. Se estira como un globo.' },
                    { name: 'Uretra', details: 'Conducto que expulsa orina al exterior.' }
                ]
            }
        ],

        facts: [
            'Los riñones filtran unos 180 litros de sangre al día',
            'Solo producimos 1-2 litros de orina diaria (se reabsorbe el 99%)',
            'Cada riñón contiene aproximadamente 1 millón de nefronas',
            'Los riñones reciben el 20-25% del gasto cardíaco',
            'Podemos vivir con un solo riñón funcional',
            'La orina es 95% agua y 5% desechos'
        ],

        keyParts: [
            { name: 'Riñones', function: 'Filtrar sangre y producir orina' },
            { name: 'Uréteres', function: 'Transportar orina a la vejiga' },
            { name: 'Vejiga', function: 'Almacenar orina' },
            { name: 'Uretra', function: 'Expulsar orina del cuerpo' },
            { name: 'Nefronas', function: 'Unidades de filtración' }
        ],

        diseases: [
            { name: 'Insuficiencia renal', description: 'Los riñones pierden capacidad de filtrar' },
            { name: 'Cálculos renales', description: 'Piedras formadas por minerales cristalizados' },
            { name: 'Infección urinaria', description: 'Bacterias infectan vías urinarias' },
            { name: 'Nefritis', description: 'Inflamación de los riñones' }
        ],

        examQuestions: [
            { question: '¿Cuánta sangre filtran los riñones diariamente?', options: ['50 litros', '100 litros', '180 litros', '300 litros'], correct: 2, explanation: 'Los riñones filtran aproximadamente 180 litros de sangre al día.' },
            { question: '¿Cuántas nefronas tiene cada riñón?', options: ['100,000', '500,000', '1 millón', '5 millones'], correct: 2, explanation: 'Cada riñón contiene aproximadamente 1 millón de nefronas.' },
            { question: '¿Qué porcentaje del filtrado se reabsorbe?', options: ['50%', '75%', '90%', '99%'], correct: 3, explanation: 'El 99% del líquido filtrado se reabsorbe; solo el 1% se convierte en orina.' },
            { question: '¿Cuánta orina produce el cuerpo aproximadamente al día?', options: ['0.5 litros', '1-2 litros', '5 litros', '10 litros'], correct: 1, explanation: 'Producimos aproximadamente 1-2 litros de orina diariamente.' },
            { question: '¿Qué porcentaje del gasto cardíaco reciben los riñones?', options: ['5%', '10%', '20-25%', '40%'], correct: 2, explanation: 'Los riñones reciben el 20-25% de toda la sangre bombeada por el corazón.' }
        ]
    }
];
