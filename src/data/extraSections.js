// Extra medical sections - Reproductive, Endocrine, Growth

export const extraSections = [
    {
        id: 'reproductive',
        title: 'Sistema Reproductor',
        subtitle: 'Masculino y Femenino',
        emoji: '🧒',
        color: '#f472b6',
        gradient: 'linear-gradient(135deg, #f472b6 0%, #c084fc 100%)',
        image: null,
        shortDescription: 'Los sistemas que permiten la reproducción y vida',
        description: 'El sistema reproductor permite la creación de nueva vida. Incluye órganos, hormonas y procesos complejos que difieren entre hombres y mujeres.',
        youtubeVideo: 'https://www.youtube.com/embed/JLz_aLNq-BY', // Aparato reproductor

        sections: [
            {
                title: 'Sistema Reproductor Masculino',
                content: 'Produce espermatozoides y hormonas masculinas.',
                subsections: [
                    { name: 'Testículos', details: 'Producen espermatozoides y testosterona. Contienen túbulos seminíferos donde se forman los espermatozoides.' },
                    { name: 'Pene', details: 'Órgano externo que permite la cópula y la excreción de orina. Contiene cuerpos cavernosos que se llenan de sangre para la erección.' },
                    { name: 'Próstata', details: 'Glándula que produce líquido seminal. Rodea la uretra y puede agrandarse con la edad.' },
                    { name: 'Epidídimo', details: 'Tubo enrollado donde maduran y se almacenan los espermatozoides.' }
                ]
            },
            {
                title: 'Sistema Reproductor Femenino',
                content: 'Produce óvulos, permite el embarazo y el parto.',
                subsections: [
                    { name: 'Ovarios', details: 'Producen óvulos y hormonas (estrógeno, progesterona). Una mujer nace con todos sus óvulos.' },
                    { name: 'Útero', details: 'Órgano muscular donde se desarrolla el feto durante el embarazo. Su revestimiento se desprende en la menstruación.' },
                    { name: 'Trompas de Falopio', details: 'Conducen el óvulo del ovario al útero. La fecundación suele ocurrir aquí.' },
                    { name: 'Vagina', details: 'Canal muscular elástico que conecta el útero con el exterior. Permite el parto y la menstruación.' }
                ]
            },
            {
                title: 'Fecundación y Desarrollo',
                content: 'El proceso de creación de nueva vida.',
                subsections: [
                    { name: 'Fecundación', details: 'Unión del espermatozoide con el óvulo para formar el cigoto. Ocurre en las trompas de Falopio.' },
                    { name: 'Implantación', details: 'El embrión se adhiere al útero aproximadamente 6-7 días después de la fecundación.' },
                    { name: 'Desarrollo Fetal', details: 'El embarazo dura 40 semanas. El feto desarrolla todos sus órganos en las primeras 12 semanas.' }
                ]
            }
        ],

        facts: [
            'Un hombre produce 1,500 espermatozoides por segundo',
            'Una mujer nace con aproximadamente 2 millones de óvulos',
            'El pene promedio mide 13-15 cm en erección',
            'El espermatozoide tarda 64-72 días en formarse completamente',
            'El útero puede expandirse 500 veces su tamaño durante el embarazo',
            'Solo 1 de cada 300 millones de espermatozoides fertiliza el óvulo'
        ],

        keyParts: [
            { name: 'Testículos/Ovarios', function: 'Producir células sexuales y hormonas' },
            { name: 'Útero', function: 'Alojar y nutrir al feto' },
            { name: 'Pene', function: 'Copulación y micción' },
            { name: 'Vagina', function: 'Canal de parto y menstruación' },
            { name: 'Próstata', function: 'Producir líquido seminal' }
        ],

        diseases: [
            { name: 'Infertilidad', description: 'Incapacidad de concebir después de un año de intentos' },
            { name: 'Endometriosis', description: 'Tejido uterino crece fuera del útero' },
            { name: 'Disfunción eréctil', description: 'Dificultad para lograr o mantener erección' },
            { name: 'Cáncer de próstata', description: 'Crecimiento maligno en la próstata' }
        ],

        examQuestions: [
            { question: '¿Cuántos espermatozoides produce un hombre por segundo?', options: ['100', '500', '1,500', '5,000'], correct: 2, explanation: 'Un hombre produce aproximadamente 1,500 espermatozoides cada segundo.' },
            { question: '¿Dónde ocurre la fecundación normalmente?', options: ['Útero', 'Ovarios', 'Trompas de Falopio', 'Vagina'], correct: 2, explanation: 'La fecundación normalmente ocurre en las trompas de Falopio.' },
            { question: '¿Cuántas semanas dura un embarazo normal?', options: ['32', '36', '40', '44'], correct: 2, explanation: 'Un embarazo normal dura aproximadamente 40 semanas.' },
            { question: '¿Qué órgano produce testosterona?', options: ['Próstata', 'Pene', 'Testículos', 'Epidídimo'], correct: 2, explanation: 'Los testículos producen testosterona y espermatozoides.' },
            { question: '¿Con cuántos óvulos nace una mujer aproximadamente?', options: ['200,000', '2 millones', '20 millones', '200 millones'], correct: 1, explanation: 'Una mujer nace con aproximadamente 2 millones de óvulos.' }
        ]
    },
    {
        id: 'endocrine',
        title: 'Sistema Endocrino',
        subtitle: 'Hormonas y Glándulas',
        emoji: '🧪',
        color: '#14b8a6',
        gradient: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
        image: null,
        shortDescription: 'El sistema de mensajería química del cuerpo',
        description: 'El sistema endocrino usa hormonas como mensajeros químicos para regular el crecimiento, metabolismo, reproducción, estado de ánimo y muchas otras funciones.',
        youtubeVideo: 'https://www.youtube.com/embed/W7dF_5YH0rE', // Sistema endocrino

        sections: [
            {
                title: 'Glándulas Principales',
                content: 'Órganos que producen y liberan hormonas al torrente sanguíneo.',
                subsections: [
                    { name: 'Hipotálamo', details: 'Conecta el sistema nervioso con el endocrino. Controla hambre, sed, temperatura y emociones.' },
                    { name: 'Hipófisis (Pituitaria)', details: 'Glándula maestra que controla otras glándulas. Produce hormona del crecimiento.' },
                    { name: 'Tiroides', details: 'Regula el metabolismo, energía y temperatura corporal. Produce T3 y T4.' },
                    { name: 'Glándulas Suprarrenales', details: 'Producen cortisol (estrés) y adrenalina. También aldosterona para electrolitos.' }
                ]
            },
            {
                title: 'Hormonas Importantes',
                content: 'Mensajeros químicos que viajan por la sangre.',
                subsections: [
                    { name: 'Insulina', details: 'Producida por el páncreas. Regula el azúcar en sangre permitiendo que entre en las células.' },
                    { name: 'Hormona del Crecimiento', details: 'Estimula el crecimiento de huesos y músculos. Es más activa durante el sueño.' },
                    { name: 'Cortisol', details: 'Hormona del estrés. Aumenta glucosa en sangre y reduce inflamación.' },
                    { name: 'Melatonina', details: 'Regula el ciclo de sueño-vigilia. Se produce más en la oscuridad.' }
                ]
            },
            {
                title: 'Regulación Hormonal',
                content: 'Cómo el cuerpo mantiene el equilibrio hormonal.',
                subsections: [
                    { name: 'Retroalimentación Negativa', details: 'El producto final inhibe su propia producción para mantener niveles estables.' },
                    { name: 'Ritmos Circadianos', details: 'Variaciones hormonales durante el día; cortisol alto en la mañana, melatonina en la noche.' },
                    { name: 'Respuesta al Estrés', details: 'Liberación de adrenalina y cortisol ante amenazas para preparar el cuerpo.' }
                ]
            }
        ],

        facts: [
            'Las hormonas pueden afectar células en todo el cuerpo en segundos',
            'La glándula pituitaria tiene el tamaño de un chícharo',
            'El páncreas produce aproximadamente 2 litros de jugo pancreático al día',
            'El estrés crónico puede desequilibrar todo el sistema endocrino',
            'La melatonina se produce más en invierno que en verano',
            'Los niveles de hormona del crecimiento son más altos durante el sueño profundo'
        ],

        keyParts: [
            { name: 'Hipófisis', function: 'Control maestro de otras glándulas' },
            { name: 'Tiroides', function: 'Regular metabolismo y energía' },
            { name: 'Páncreas', function: 'Producir insulina y glucagón' },
            { name: 'Suprarrenales', function: 'Producir cortisol y adrenalina' },
            { name: 'Gónadas', function: 'Producir hormonas sexuales' }
        ],

        diseases: [
            { name: 'Diabetes', description: 'Producción o uso inadecuado de insulina' },
            { name: 'Hipotiroidismo', description: 'Tiroides produce muy poca hormona' },
            { name: 'Enfermedad de Cushing', description: 'Exceso de cortisol en el cuerpo' },
            { name: 'Enanismo', description: 'Deficiencia de hormona del crecimiento' }
        ],

        examQuestions: [
            { question: '¿Qué hormona regula el azúcar en sangre?', options: ['Cortisol', 'Insulina', 'Adrenalina', 'Melatonina'], correct: 1, explanation: 'La insulina, producida por el páncreas, regula los niveles de glucosa en sangre.' },
            { question: '¿Cuál es la glándula maestra del sistema endocrino?', options: ['Tiroides', 'Hipófisis', 'Suprarrenales', 'Páncreas'], correct: 1, explanation: 'La hipófisis (pituitaria) controla a la mayoría de las otras glándulas.' },
            { question: '¿Qué hormona se produce más durante el sueño?', options: ['Cortisol', 'Adrenalina', 'Hormona del crecimiento', 'Insulina'], correct: 2, explanation: 'La hormona del crecimiento se libera principalmente durante el sueño profundo.' },
            { question: '¿Qué glándula regula el metabolismo?', options: ['Tiroides', 'Hipófisis', 'Suprarrenales', 'Páncreas'], correct: 0, explanation: 'La tiroides regula el metabolismo mediante las hormonas T3 y T4.' },
            { question: '¿Qué hormona nos ayuda a dormir?', options: ['Cortisol', 'Adrenalina', 'Insulina', 'Melatonina'], correct: 3, explanation: 'La melatonina regula el ciclo de sueño-vigilia.' }
        ]
    },
    {
        id: 'growth',
        title: 'Crecimiento Humano',
        subtitle: 'Del Nacimiento a la Vejez',
        emoji: '📈',
        color: '#f59e0b',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        image: null,
        shortDescription: 'Las etapas del desarrollo humano',
        description: 'El crecimiento humano es un proceso continuo que abarca desde la concepción hasta la muerte, con cambios físicos, mentales y emocionales en cada etapa.',
        youtubeVideo: 'https://www.youtube.com/embed/pIBnpBiPjNg', // Etapas desarrollo humano

        sections: [
            {
                title: 'Infancia y Niñez',
                content: 'Los primeros años de vida con crecimiento rápido.',
                subsections: [
                    { name: 'Recién Nacido (0-1 mes)', details: 'Adapta a la vida fuera del útero. Desarrolla reflejos básicos y reconoce voces familiares.' },
                    { name: 'Lactante (1-12 meses)', details: 'Triplica su peso. Desarrolla habilidades motoras, sonríe, balbucea y comienza a gatear.' },
                    { name: 'Infante (1-3 años)', details: 'Aprende a caminar, hablar y controlar esfínteres. Desarrolla independencia.' },
                    { name: 'Preescolar (3-6 años)', details: 'Desarrollo del lenguaje, imaginación y habilidades sociales. Crecimiento de 5-7 cm por año.' }
                ]
            },
            {
                title: 'Pubertad y Adolescencia',
                content: 'Transición de niño a adulto con grandes cambios hormonales.',
                subsections: [
                    { name: 'Pubertad Femenina', details: 'Inicia entre 8-13 años. Desarrollo mamario, crecimiento de vello, menstruación y aumento de caderas.' },
                    { name: 'Pubertad Masculina', details: 'Inicia entre 9-14 años. Crecimiento testicular, vello facial, cambio de voz y aumento muscular.' },
                    { name: 'Estirón Puberal', details: 'Crecimiento acelerado de 8-13 cm por año. Las niñas lo experimentan antes que los niños.' },
                    { name: 'Desarrollo Cerebral', details: 'La corteza prefrontal (juicio, control) no madura completamente hasta los 25 años.' }
                ]
            },
            {
                title: 'Adultez y Envejecimiento',
                content: 'Madurez y cambios del envejecimiento.',
                subsections: [
                    { name: 'Adultez Joven (20-40)', details: 'Pico de capacidad física. Desarrollo de carrera, relaciones y posible paternidad.' },
                    { name: 'Adultez Media (40-65)', details: 'Menopausia en mujeres, andropausia gradual en hombres. Posible pérdida de masa muscular.' },
                    { name: 'Vejez (65+)', details: 'Disminución gradual de funciones. Pérdida ósea, cambios cognitivos y mayor sabiduría.' }
                ]
            }
        ],

        facts: [
            'Los bebés nacen con 270 huesos que se fusionan a 206 en adultos',
            'El cerebro alcanza el 90% de su tamaño adulto a los 5 años',
            'Los adolescentes necesitan 8-10 horas de sueño para crecer bien',
            'La altura máxima se alcanza entre los 18-21 años',
            'Perdemos aproximadamente 1 cm de altura cada 10 años después de los 40',
            'Las células cerebrales pueden seguir creando conexiones toda la vida'
        ],

        keyParts: [
            { name: 'Hormona del crecimiento', function: 'Estimular crecimiento óseo y muscular' },
            { name: 'Placas de crecimiento', function: 'Zonas donde los huesos se alargan' },
            { name: 'Pubertad', function: 'Transición a madurez sexual' },
            { name: 'Telómeros', function: 'Protegen cromosomas, se acortan con edad' },
            { name: 'Metabolismo', function: 'Cambia con cada etapa de vida' }
        ],

        diseases: [
            { name: 'Gigantismo', description: 'Exceso de hormona del crecimiento en la infancia' },
            { name: 'Pubertad precoz', description: 'Inicio de pubertad antes de los 8 años' },
            { name: 'Osteoporosis', description: 'Pérdida de densidad ósea en la vejez' },
            { name: 'Demencia', description: 'Deterioro cognitivo progresivo' }
        ],

        examQuestions: [
            { question: '¿A qué edad madura completamente la corteza prefrontal?', options: ['18 años', '21 años', '25 años', '30 años'], correct: 2, explanation: 'La corteza prefrontal, responsable del juicio y control, madura completamente alrededor de los 25 años.' },
            { question: '¿Cuántos huesos tiene un bebé al nacer?', options: ['206', '230', '270', '300'], correct: 2, explanation: 'Los bebés nacen con aproximadamente 270 huesos que se fusionan a 206 en la adultez.' },
            { question: '¿Cuánto crece un adolescente durante el estirón puberal por año?', options: ['2-4 cm', '5-7 cm', '8-13 cm', '15-20 cm'], correct: 2, explanation: 'Durante el estirón puberal se puede crecer de 8 a 13 cm por año.' },
            { question: '¿A qué edad inicia típicamente la pubertad masculina?', options: ['6-8 años', '9-14 años', '15-17 años', '18-20 años'], correct: 1, explanation: 'La pubertad masculina típicamente inicia entre los 9 y 14 años.' },
            { question: '¿Qué porcentaje de su tamaño adulto alcanza el cerebro a los 5 años?', options: ['50%', '70%', '90%', '100%'], correct: 2, explanation: 'El cerebro alcanza aproximadamente el 90% de su tamaño adulto a los 5 años.' }
        ]
    }
];
