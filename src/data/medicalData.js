// Expanded Medical Data with detailed content and exam questions

export const medicalSections = [
  {
    id: 'brain',
    title: 'Sistema Nervioso',
    subtitle: 'Cerebro y Nervios',
    emoji: '🧠',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: 'brain_organ_1766688413423.png',
    shortDescription: 'El centro de control de todo tu cuerpo',
    description: 'El sistema nervioso es la red de comunicación más compleja del cuerpo humano. Coordina todas las funciones corporales, desde los latidos del corazón hasta los pensamientos más abstractos.',
    youtubeVideo: 'https://www.youtube.com/embed/vHrmiy4W9C0',

    // Detailed learning sections
    sections: [
      {
        title: 'Anatomía del Cerebro',
        content: 'El cerebro humano pesa aproximadamente 1.4 kg y está compuesto por cerca de 86 mil millones de neuronas interconectadas por más de 100 billones de sinapsis. Se divide en dos hemisferios (izquierdo y derecho) conectados por el cuerpo calloso, una banda de fibras nerviosas que permite la comunicación entre ambos lados. El hemisferio izquierdo generalmente controla el lenguaje, la lógica y las matemáticas, mientras que el derecho se especializa en creatividad, reconocimiento facial y habilidades espaciales.',
        subsections: [
          {
            name: 'Lóbulo Frontal',
            details: 'El lóbulo frontal es la parte más grande del cerebro y ocupa aproximadamente un tercio de la corteza cerebral. Se encuentra en la parte anterior del cerebro, justo detrás de la frente. Es considerado el centro ejecutivo del cerebro y es responsable de funciones cognitivas superiores como el razonamiento abstracto, la planificación a largo plazo, la toma de decisiones complejas, el control de impulsos y la regulación emocional. Aquí se encuentra el área de Broca, esencial para la producción del habla. La corteza motora primaria, ubicada en la parte posterior del lóbulo frontal, controla los movimientos voluntarios del cuerpo. El lóbulo frontal no madura completamente hasta los 25 años aproximadamente, lo que explica por qué los adolescentes pueden tener dificultades con el control de impulsos. Daños en esta área pueden resultar en cambios dramáticos de personalidad, dificultades para planificar y problemas de conducta social.'
          },
          {
            name: 'Lóbulo Parietal',
            details: 'El lóbulo parietal se encuentra en la parte superior y posterior del cerebro, detrás del lóbulo frontal y encima del lóbulo temporal. Su función principal es procesar e integrar información sensorial del cuerpo, incluyendo el tacto, la presión, la temperatura, el dolor y la propiocepción (conciencia de la posición del cuerpo en el espacio). Contiene la corteza somatosensorial, que crea un mapa detallado del cuerpo donde diferentes áreas procesan sensaciones de diferentes partes corporales. El lóbulo parietal también es crucial para la orientación espacial, la navegación, la comprensión de relaciones numéricas y la coordinación mano-ojo. Lesiones en el lóbulo parietal derecho pueden causar negligencia espacial unilateral, donde la persona ignora completamente un lado de su cuerpo y entorno. Esta área también participa en la lectura, la escritura y el cálculo matemático.'
          },
          {
            name: 'Lóbulo Temporal',
            details: 'El lóbulo temporal se sitúa en los lados del cerebro, aproximadamente a la altura de las orejas. Es fundamental para el procesamiento auditivo, la comprensión del lenguaje hablado y la formación de memorias. Contiene el área de Wernicke, esencial para comprender el lenguaje; daños aquí resultan en habla fluida pero sin sentido. El hipocampo, una estructura con forma de caballito de mar ubicada en la profundidad del lóbulo temporal, es crucial para convertir memorias de corto plazo en memorias de largo plazo. La amígdala, también en esta región, procesa emociones, especialmente el miedo y la respuesta a amenazas. El lóbulo temporal está involucrado en el reconocimiento de rostros, la interpretación de expresiones faciales y la memoria autobiográfica. Personas con epilepsia del lóbulo temporal pueden experimentar alucinaciones auditivas, déjà vu intenso y experiencias emocionales profundas durante las crisis.'
          },
          {
            name: 'Lóbulo Occipital',
            details: 'El lóbulo occipital es el más pequeño de los cuatro lóbulos principales y se encuentra en la parte posterior del cerebro. Es el centro principal de procesamiento visual del cerebro. Contiene la corteza visual primaria (V1), que recibe información directa de los ojos a través del nervio óptico y el tálamo. Diferentes áreas del lóbulo occipital se especializan en procesar distintos aspectos de la visión: V1 detecta bordes y orientaciones, V2 procesa colores y patrones simples, V4 es especializada en color, y V5/MT procesa el movimiento. Aunque los ojos capturan la luz, es el lóbulo occipital el que realmente "ve" al interpretar esas señales. Daños en esta área pueden causar ceguera cortical (la persona no puede ver aunque sus ojos funcionen perfectamente), agnosia visual (incapacidad de reconocer objetos) o acromatopsia (incapacidad de ver colores). El lóbulo occipital trabaja en estrecha colaboración con otros lóbulos para integrar la información visual con otros sentidos.'
          }
        ]
      },
      {
        title: 'Las Neuronas',
        content: 'Las neuronas son las células especializadas que forman la base del sistema nervioso. A diferencia de otras células del cuerpo, las neuronas están diseñadas específicamente para transmitir información a grandes distancias mediante señales eléctricas y químicas. El cerebro humano contiene aproximadamente 86 mil millones de neuronas, y cada una puede formar conexiones con hasta 10,000 otras neuronas. Aunque las neuronas adultas generalmente no se dividen, el cerebro puede generar nuevas neuronas en ciertas regiones (neurogénesis), especialmente en el hipocampo.',
        subsections: [
          {
            name: 'Estructura Neuronal',
            details: 'Una neurona típica consta de tres partes principales. El cuerpo celular (soma) contiene el núcleo con el ADN de la célula, las mitocondrias que producen energía, y la maquinaria celular necesaria para la síntesis de proteínas. Las dendritas son extensiones ramificadas que emergen del soma y actúan como antenas receptoras, recibiendo señales químicas de otras neuronas; una sola neurona puede tener miles de dendritas. El axón es una fibra larga y delgada (puede medir desde menos de un milímetro hasta más de un metro en el nervio ciático) que transmite impulsos eléctricos desde el soma hacia otras células. Muchos axones están cubiertos por una vaina de mielina, una sustancia grasa producida por células gliales que actúa como aislante eléctrico y acelera la transmisión de señales hasta 100 veces. El extremo del axón se ramifica en terminales sinápticas que liberan neurotransmisores hacia la siguiente célula.'
          },
          {
            name: 'Sinapsis',
            details: 'La sinapsis es el punto de comunicación entre una neurona y otra célula (puede ser otra neurona, una célula muscular o una glándula). Existen dos tipos principales: sinapsis eléctricas, donde las células están tan cerca que los iones pueden pasar directamente entre ellas a través de canales llamados uniones gap (son muy rápidas pero menos flexibles), y sinapsis químicas, que son más comunes y permiten mayor modulación de la señal. En una sinapsis química, cuando un impulso eléctrico (potencial de acción) llega al terminal del axón, causa la liberación de neurotransmisores almacenados en vesículas. Estos químicos cruzan el espacio sináptico (apenas 20-40 nanómetros) y se unen a receptores específicos en la membrana de la célula postsináptica. Dependiendo del tipo de neurotransmisor y receptor, esto puede excitar (aumentar la probabilidad de que la neurona receptora dispare) o inhibir (reducir esa probabilidad) la siguiente célula. La sinapsis es el sitio donde actúan la mayoría de los medicamentos psicoactivos y donde ocurre gran parte del aprendizaje mediante un proceso llamado plasticidad sináptica.'
          },
          {
            name: 'Tipos de Neuronas',
            details: 'Las neuronas se clasifican según su función en tres categorías principales. Las neuronas sensoriales (aferentes) transmiten información desde los órganos de los sentidos y receptores internos hacia el sistema nervioso central; detectan estímulos como luz, sonido, tacto, temperatura, dolor y la posición del cuerpo. Las neuronas motoras (eferentes) llevan comandos desde el cerebro y la médula espinal hacia los músculos y glándulas, controlando movimientos voluntarios e involuntarios, secreción de hormonas y otras respuestas. Las interneuronas (también llamadas neuronas de asociación) son las más numerosas y se encuentran exclusivamente en el sistema nervioso central; conectan neuronas sensoriales con motoras, procesan información y son responsables de funciones cognitivas complejas como el pensamiento, la memoria y la toma de decisiones. Además, las neuronas varían en forma: las neuronas unipolares tienen una sola extensión, las bipolares tienen dos (una dendrita y un axón), y las multipolares (las más comunes en el cerebro) tienen múltiples dendritas y un axón.'
          }
        ]
      },
      {
        title: 'Neurotransmisores',
        content: 'Los neurotransmisores son mensajeros químicos que permiten la comunicación entre neuronas. Se producen en el cuerpo celular de la neurona, se almacenan en vesículas en las terminales axónicas, y se liberan al espacio sináptico cuando llega un impulso nervioso. Existen más de 100 neurotransmisores identificados, cada uno con funciones específicas. El equilibrio de estos químicos es crucial para la salud mental y física; desequilibrios están asociados con numerosos trastornos neurológicos y psiquiátricos.',
        subsections: [
          {
            name: 'Dopamina',
            details: 'La dopamina es un neurotransmisor crucial del sistema de recompensa del cerebro. Se produce principalmente en dos áreas del mesencéfalo: la sustancia negra y el área tegmental ventral. Tiene múltiples funciones: regula el movimiento (la pérdida de neuronas dopaminérgicas en la sustancia negra causa la enfermedad de Parkinson), controla el sistema de recompensa y motivación (todas las drogas adictivas aumentan la dopamina), influye en el aprendizaje basado en recompensas, afecta el estado de ánimo y las emociones, y participa en la memoria de trabajo y la atención. Niveles anormalmente altos de dopamina en ciertas vías cerebrales están asociados con síntomas psicóticos como alucinaciones y delirios en la esquizofrenia. Niveles bajos pueden causar apatía, falta de motivación y dificultad para experimentar placer (anhedonia). Los medicamentos para el Parkinson aumentan la dopamina, mientras que los antipsicóticos la bloquean. Las actividades placenteras como comer, el ejercicio y las interacciones sociales liberan dopamina de forma natural.'
          },
          {
            name: 'Serotonina',
            details: 'La serotonina (5-hidroxitriptamina o 5-HT) es un neurotransmisor con efectos amplios en el cuerpo y la mente. Aunque se asocia principalmente con el estado de ánimo, sorprendentemente el 90% de la serotonina del cuerpo se encuentra en el tracto gastrointestinal, donde regula los movimientos intestinales. En el cerebro, se produce en los núcleos del rafe en el tronco encefálico y sus proyecciones llegan a casi todas las áreas cerebrales. Regula el estado de ánimo, el sueño (es precursor de la melatonina), el apetito, la temperatura corporal, la percepción del dolor, la función sexual y comportamientos sociales. Niveles bajos de serotonina están fuertemente asociados con la depresión, la ansiedad, el trastorno obsesivo-compulsivo y los trastornos alimentarios. Los antidepresivos más comunes (ISRS como fluoxetina/Prozac) funcionan impidiendo que la serotonina sea recaptada, aumentando su disponibilidad en la sinapsis. El ejercicio, la exposición a la luz solar, una dieta rica en triptófano (presente en pavo, plátanos y nueces) y la meditación pueden aumentar naturalmente los niveles de serotonina.'
          },
          {
            name: 'Acetilcolina',
            details: 'La acetilcolina fue el primer neurotransmisor identificado (por Otto Loewi en 1921). Es el principal neurotransmisor del sistema nervioso periférico, donde controla la contracción de todos los músculos voluntarios en la unión neuromuscular. Cuando una neurona motora libera acetilcolina sobre una fibra muscular, causa su contracción. En el cerebro, la acetilcolina es crucial para la memoria, el aprendizaje y la atención. Se produce en varios núcleos, siendo el más importante el núcleo basal de Meynert, que proyecta a toda la corteza cerebral. La pérdida de neuronas productoras de acetilcolina en esta área es una característica distintiva de la enfermedad de Alzheimer, lo que explica los problemas de memoria característicos. Medicamentos como donepezilo, usados para tratar el Alzheimer, funcionan inhibiendo la enzima que degrada la acetilcolina. También regula el ciclo sueño-vigilia y el sueño REM. El gas nervioso y algunos pesticidas son mortales porque bloquean la degradación de acetilcolina, causando parálisis muscular y muerte por asfixia.'
          },
          {
            name: 'GABA',
            details: 'El ácido gamma-aminobutírico (GABA) es el principal neurotransmisor inhibidor del cerebro adulto, presente en aproximadamente el 40% de todas las sinapsis. Su función es reducir la excitabilidad neuronal, actuando como un freno que previene la sobreestimulación del sistema nervioso. Cuando el GABA se une a sus receptores, permite la entrada de iones de cloro a la neurona, haciéndola menos propensa a disparar. Sin suficiente GABA, las neuronas pueden dispararse descontroladamente, causando convulsiones; de hecho, muchos medicamentos antiepilépticos aumentan la actividad del GABA. Las benzodiacepinas (como diazepam/Valium), usadas para tratar la ansiedad y el insomnio, actúan potenciando el efecto del GABA. El alcohol también afecta los receptores GABA, lo que explica sus efectos sedantes. Niveles bajos de GABA están asociados con ansiedad, insomnio, epilepsia y algunos trastornos del movimiento. El glutamato, por el contrario, es el principal neurotransmisor excitador del cerebro, y el equilibrio entre GABA y glutamato es crucial para el funcionamiento normal del cerebro.'
          }
        ]
      }
    ],


    facts: [
      'El cerebro contiene aproximadamente 86 mil millones de neuronas',
      'Usa el 20% de la energía total del cuerpo',
      'Las señales nerviosas viajan a velocidades de hasta 120 m/s',
      'El cerebro genera suficiente electricidad para encender una bombilla pequeña',
      'No puede sentir dolor porque carece de receptores de dolor',
      'Está compuesto en un 75% de agua'
    ],

    keyParts: [
      { name: 'Cerebro', function: 'Centro de procesamiento, pensamiento y emociones' },
      { name: 'Cerebelo', function: 'Coordinación motora, equilibrio y postura' },
      { name: 'Tronco encefálico', function: 'Funciones vitales automáticas' },
      { name: 'Médula espinal', function: 'Transmisión de señales entre cerebro y cuerpo' },
      { name: 'Nervios periféricos', function: 'Llevan información desde y hacia el sistema central' }
    ],

    diseases: [
      { name: 'Alzheimer', description: 'Enfermedad degenerativa que afecta la memoria y funciones cognitivas' },
      { name: 'Parkinson', description: 'Trastorno del movimiento causado por pérdida de dopamina' },
      { name: 'Epilepsia', description: 'Actividad eléctrica anormal que causa convulsiones' },
      { name: 'Esclerosis múltiple', description: 'Enfermedad autoinmune que daña la mielina' }
    ],

    examQuestions: [
      {
        question: '¿Cuántas neuronas contiene aproximadamente el cerebro humano?',
        options: ['10 millones', '86 mil millones', '1 millón', '500 millones'],
        correct: 1,
        explanation: 'El cerebro contiene aproximadamente 86 mil millones de neuronas.'
      },
      {
        question: '¿Qué lóbulo del cerebro procesa la información visual?',
        options: ['Frontal', 'Parietal', 'Temporal', 'Occipital'],
        correct: 3,
        explanation: 'El lóbulo occipital es el centro de procesamiento visual.'
      },
      {
        question: '¿Qué neurotransmisor está relacionado con el placer y la motivación?',
        options: ['Serotonina', 'Dopamina', 'GABA', 'Glutamato'],
        correct: 1,
        explanation: 'La dopamina regula el placer, la motivación y el sistema de recompensa.'
      },
      {
        question: '¿Qué porcentaje de energía del cuerpo usa el cerebro?',
        options: ['5%', '10%', '20%', '40%'],
        correct: 2,
        explanation: 'El cerebro consume aproximadamente el 20% de la energía total del cuerpo.'
      },
      {
        question: '¿Cuál es la función principal del cerebelo?',
        options: ['Memoria', 'Visión', 'Coordinación y equilibrio', 'Lenguaje'],
        correct: 2,
        explanation: 'El cerebelo es responsable de la coordinación motora, equilibrio y postura.'
      }
    ]
  },
  {
    id: 'heart',
    title: 'Sistema Cardiovascular',
    subtitle: 'Corazón y Circulación',
    emoji: '❤️',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    image: 'heart_organ_1766688427299.png',
    shortDescription: 'El motor que mantiene la vida fluyendo',
    description: 'El sistema cardiovascular es responsable de transportar oxígeno, nutrientes, hormonas y células inmunitarias por todo el cuerpo, mientras elimina desechos metabólicos.',
    youtubeVideo: 'https://www.youtube.com/embed/CWFyxn0qDEU',

    sections: [
      {
        title: 'Anatomía del Corazón',
        content: 'El corazón es un órgano muscular hueco del tamaño aproximado de un puño cerrado, que pesa entre 250-350 gramos. Se ubica en el mediastino, el espacio central del tórax, ligeramente inclinado hacia la izquierda. Late aproximadamente 100,000 veces al día, 35 millones de veces al año, y más de 2.5 mil millones de veces en una vida promedio. Está compuesto principalmente por músculo cardíaco (miocardio), un tipo único de tejido que combina características del músculo esquelético y liso.',
        subsections: [
          {
            name: 'Aurículas',
            details: 'Las aurículas son las dos cámaras superiores del corazón, separadas por el tabique interauricular. La aurícula derecha recibe sangre desoxigenada de todo el cuerpo a través de tres venas principales: la vena cava superior (que drena la cabeza, brazos y parte superior del tórax), la vena cava inferior (que drena el abdomen y piernas), y el seno coronario (que drena el propio músculo cardíaco). La aurícula izquierda recibe sangre rica en oxígeno de los pulmones a través de cuatro venas pulmonares. Las paredes de las aurículas son relativamente delgadas porque solo necesitan impulsar la sangre a los ventrículos adyacentes, no a todo el cuerpo. Las aurículas tienen pequeñas estructuras en forma de oreja llamadas orejuelas auriculares que aumentan su capacidad. La contracción simultánea de ambas aurículas (sístole auricular) empuja aproximadamente el 25% restante de sangre a los ventrículos; el 75% fluye pasivamente cuando las válvulas están abiertas.'
          },
          {
            name: 'Ventrículos',
            details: 'Los ventrículos son las cámaras inferiores del corazón, responsables del bombeo principal de sangre. El ventrículo derecho tiene paredes de aproximadamente 5mm de grosor y bombea sangre hacia los pulmones a través de la arteria pulmonar; solo necesita generar suficiente presión para superar la resistencia de la circulación pulmonar (aproximadamente 25 mmHg). El ventrículo izquierdo es significativamente más grueso (10-15mm) porque debe bombear sangre a todo el cuerpo sistémico, generando presiones de hasta 120 mmHg o más. Esta diferencia de grosor es claramente visible en cortes transversales del corazón. Los ventrículos están separados por el tabique interventricular, una pared muscular gruesa que previene la mezcla de sangre oxigenada y desoxigenada. El interior de los ventrículos presenta proyecciones musculares irregulares llamadas trabéculas carnosas, y músculos papilares que se conectan a las válvulas auriculoventriculares mediante cuerdas tendinosas, previniendo que las válvulas se inviertan durante la contracción ventricular.'
          },
          {
            name: 'Válvulas Cardíacas',
            details: 'El corazón posee cuatro válvulas que funcionan como compuertas unidireccionales, asegurando que la sangre fluya siempre en la dirección correcta. Las válvulas auriculoventriculares (AV) se encuentran entre las aurículas y los ventrículos: la válvula tricúspide (tres valvas) en el lado derecho, y la válvula mitral o bicúspide (dos valvas) en el lado izquierdo. Estas válvulas se abren cuando los ventrículos se relajan, permitiendo el llenado, y se cierran firmemente cuando los ventrículos se contraen, previniendo el retroceso de sangre. Las válvulas semilunares se encuentran en las salidas de los ventrículos: la válvula pulmonar entre el ventrículo derecho y la arteria pulmonar, y la válvula aórtica entre el ventrículo izquierdo y la aorta. Cada válvula semilunar tiene tres valvas con forma de media luna. Los sonidos cardíacos característicos ("lub-dub") son producidos por el cierre de estas válvulas: el primer sonido (S1) ocurre cuando las válvulas AV se cierran, y el segundo (S2) cuando las válvulas semilunares se cierran. Enfermedades como la estenosis (estrechamiento) o la regurgitación (cierre incompleto) pueden producir soplos cardíacos detectables con el estetoscopio.'
          },
          {
            name: 'Sistema de Conducción Eléctrica',
            details: 'El corazón genera sus propios impulsos eléctricos gracias al sistema de conducción cardíaca, lo que permite latir de forma autónoma incluso fuera del cuerpo si se mantiene oxigenado. El nodo sinoauricular (SA), ubicado en la pared de la aurícula derecha cerca de la desembocadura de la vena cava superior, es el marcapasos natural del corazón. Genera impulsos eléctricos a un ritmo de 60-100 por minuto en reposo, estableciendo la frecuencia cardíaca basal. El impulso viaja por las paredes auriculares causando su contracción, y llega al nodo auriculoventricular (AV), ubicado en el tabique entre las aurículas y los ventrículos. El nodo AV retrasa brevemente (0.1 segundos) la señal, permitiendo que las aurículas se vacíen completamente antes de que los ventrículos se contraigan. Desde el nodo AV, el impulso viaja por el haz de His, que se divide en ramas derecha e izquierda que descienden por el tabique interventricular, y finalmente se dispersa por las fibras de Purkinje que penetran el miocardio ventricular, causando una contracción coordinada de abajo hacia arriba. Este sistema eléctrico puede ser registrado mediante un electrocardiograma (ECG o EKG), una herramienta diagnóstica fundamental en cardiología.'
          }
        ]
      },
      {
        title: 'Circulación Sanguínea',
        content: 'La sangre fluye por el cuerpo en un circuito cerrado continuo, impulsada por el corazón. Este sistema de doble circulación permite oxigenar la sangre en los pulmones y distribuirla eficientemente a todos los tejidos. En reposo, la sangre completa un circuito completo por el cuerpo en aproximadamente 60 segundos, pero durante el ejercicio intenso, este tiempo puede reducirse a solo 10 segundos.',
        subsections: [
          {
            name: 'Circulación Pulmonar (Menor)',
            details: 'La circulación pulmonar transporta sangre desoxigenada desde el corazón hacia los pulmones y devuelve sangre oxigenada al corazón. Comienza cuando el ventrículo derecho expulsa sangre pobre en oxígeno (aproximadamente 75% saturada) hacia la arteria pulmonar, la única arteria del cuerpo que transporta sangre desoxigenada. La arteria pulmonar se divide en ramas derecha e izquierda que entran a cada pulmón, ramificándose progresivamente hasta formar una red capilar extremadamente fina que rodea los alvéolos pulmonares (pequeños sacos de aire). La pared de estos capilares y alvéolos es tan delgada (apenas 0.5 micrómetros) que los gases pueden difundirse fácilmente: el oxígeno pasa del aire alveolar a la sangre, mientras que el dióxido de carbono hace el recorrido inverso. Esta sangre ahora oxigenada (95-100% saturada) es recolectada por las venas pulmonares, que confluyen en cuatro venas principales que desembocan en la aurícula izquierda. Es importante notar que en la circulación pulmonar las arterias llevan sangre desoxigenada y las venas llevan sangre oxigenada, al contrario de la circulación sistémica.'
          },
          {
            name: 'Circulación Sistémica (Mayor)',
            details: 'La circulación sistémica distribuye sangre oxigenada desde el corazón hacia todos los tejidos del cuerpo y retorna sangre desoxigenada al corazón. Comienza cuando el ventrículo izquierdo, la cámara más potente del corazón, expulsa sangre rica en oxígeno hacia la aorta, la arteria más grande del cuerpo (2.5 cm de diámetro). La aorta asciende, forma un arco y desciende por el tórax y abdomen, ramificándose en arterias progresivamente más pequeñas que llegan a cada órgano y tejido. Las arterias se dividen en arteriolas y finalmente en capilares, vasos microscópicos cuyas paredes tienen el grosor de una sola célula, permitiendo el intercambio de oxígeno, nutrientes, hormonas y desechos con los tejidos circundantes. La sangre, ahora desoxigenada y cargada de dióxido de carbono y desechos metabólicos, fluye desde los capilares hacia las vénulas y luego hacia venas cada vez más grandes. Finalmente, las venas de la mitad superior del cuerpo confluyen en la vena cava superior, y las de la mitad inferior en la vena cava inferior, ambas desembocando en la aurícula derecha para reiniciar el ciclo.'
          },
          {
            name: 'Circulación Coronaria',
            details: 'La circulación coronaria es el sistema de vasos sanguíneos que suministra oxígeno y nutrientes al propio músculo cardíaco. Aunque el corazón está constantemente lleno de sangre, el miocardio es demasiado grueso para nutrirse por difusión directa desde las cámaras, por lo que requiere su propio suministro sanguíneo. Las arterias coronarias nacen de la aorta justo por encima de la válvula aórtica. La arteria coronaria izquierda se divide rápidamente en la arteria descendente anterior izquierda (que irriga la pared anterior del corazón y gran parte del tabique) y la arteria circunfleja (que irriga la pared lateral y posterior del ventrículo izquierdo). La arteria coronaria derecha irriga la aurícula derecha, el ventrículo derecho, y la porción inferior del ventrículo izquierdo. El flujo coronario ocurre principalmente durante la diástole (relajación ventricular) porque durante la sístole los vasos coronarios son comprimidos por la contracción muscular. Un infarto de miocardio (ataque cardíaco) ocurre cuando una arteria coronaria se bloquea, generalmente por un coágulo sobre una placa de aterosclerosis, privando al músculo cardíaco de oxígeno. El área afectada puede morir en minutos a horas si no se restaura el flujo, haciendo del tratamiento rápido una prioridad absoluta.'
          }
        ]
      },
      {
        title: 'La Sangre',
        content: 'La sangre es un tejido conectivo líquido vital que circula por el sistema cardiovascular. Un adulto promedio tiene aproximadamente 5 litros de sangre, que representa alrededor del 7-8% del peso corporal. La sangre mantiene una temperatura ligeramente superior a la del cuerpo (38°C) y un pH estrictamente regulado entre 7.35 y 7.45. Realiza funciones esenciales de transporte, regulación y protección.',
        subsections: [
          {
            name: 'Glóbulos Rojos (Eritrocitos)',
            details: 'Los glóbulos rojos, o eritrocitos, son las células más abundantes en la sangre, con aproximadamente 4.5-5.5 millones por microlitro. Son células bicóncavas (con forma de disco hundido en el centro) sin núcleo ni orgánulos, optimizadas exclusivamente para el transporte de gases. Esta forma aumenta la superficie de intercambio y permite que se deformen para pasar por capilares más estrechos que su propio diámetro. Cada eritrocito contiene aproximadamente 270 millones de moléculas de hemoglobina, una proteína que contiene hierro y da a la sangre su color rojo característico. Cada molécula de hemoglobina puede transportar cuatro moléculas de oxígeno. Los eritrocitos se producen en la médula ósea roja a un ritmo de aproximadamente 2 millones por segundo, estimulados por la hormona eritropoyetina (producida principalmente por los riñones en respuesta a niveles bajos de oxígeno). Tienen una vida útil de unos 120 días, después de la cual son destruidos en el bazo y el hígado. El hierro de la hemoglobina se recicla para producir nuevos eritrocitos. Niveles bajos de glóbulos rojos o hemoglobina causan anemia, caracterizada por fatiga, debilidad y palidez.'
          },
          {
            name: 'Glóbulos Blancos (Leucocitos)',
            details: 'Los glóbulos blancos, o leucocitos, son las células del sistema inmune que defienden al cuerpo contra infecciones y enfermedades. Son mucho menos numerosos que los eritrocitos (4,000-11,000 por microlitro), pero pueden aumentar dramáticamente durante infecciones. A diferencia de los glóbulos rojos, tienen núcleo y pueden moverse activamente, incluso saliendo de los vasos sanguíneos para llegar a los tejidos infectados (diapédesis). Existen varios tipos con funciones específicas: los neutrófilos (50-70% del total) son los primeros en llegar a sitios de infección y destruyen bacterias mediante fagocitosis; los linfocitos (25-35%) incluyen células B (producen anticuerpos), células T (destruyen células infectadas y coordinan respuestas inmunes) y células NK (destruyen células cancerosas y virus); los monocitos (3-8%) se convierten en macrófagos en los tejidos y fagocitan patógenos y células muertas; los eosinófilos (1-4%) combaten parásitos y participan en reacciones alérgicas; y los basófilos (menos del 1%) liberan histamina en reacciones alérgicas e inflamatorias. Un recuento anormalmente alto de leucocitos puede indicar infección o leucemia, mientras que uno bajo puede señalar inmunodeficiencia.'
          },
          {
            name: 'Plaquetas (Trombocitos)',
            details: 'Las plaquetas, o trombocitos, son fragmentos celulares pequeños (2-4 micrómetros) sin núcleo, esenciales para la coagulación sanguínea y la reparación de vasos lesionados. Se forman en la médula ósea a partir de células gigantes llamadas megacariocitos, que se fragmentan para producir miles de plaquetas cada una. Un adulto sano tiene entre 150,000 y 400,000 plaquetas por microlitro de sangre, con una vida útil de 8-10 días. Cuando un vaso sanguíneo se daña, las plaquetas se adhieren rápidamente al sitio de la lesión (adhesión), se activan y cambian de forma (de disco a esfera con proyecciones), liberan sustancias químicas que atraen más plaquetas (agregación), y forman un tapón plaquetario inicial. Simultáneamente, activan la cascada de coagulación, una serie de reacciones enzimáticas que culminan en la formación de fibrina, una proteína que crea una red estable sobre el tapón plaquetario, formando el coágulo definitivo. Cantidades muy bajas de plaquetas (trombocitopenia) causan sangrado excesivo y moretones fáciles, mientras que cantidades muy altas (trombocitosis) pueden aumentar el riesgo de coágulos peligrosos. Medicamentos como la aspirina inhiben la función plaquetaria y se usan para prevenir ataques cardíacos y accidentes cerebrovasculares.'
          },
          {
            name: 'Plasma Sanguíneo',
            details: 'El plasma es el componente líquido de la sangre, constituyendo aproximadamente el 55% de su volumen total. Es un líquido amarillento claro compuesto principalmente de agua (91-92%), con diversas sustancias disueltas que realiza funciones vitales de transporte y regulación. Las proteínas plasmáticas (6-8% del plasma) incluyen: albúmina (54% de las proteínas), que mantiene la presión osmótica y transporta hormonas, medicamentos y ácidos grasos; globulinas (38%), que incluyen anticuerpos (inmunoglobulinas) y proteínas transportadoras; y fibrinógeno (7%), esencial para la coagulación. El plasma también transporta nutrientes absorbidos del tracto digestivo (glucosa, aminoácidos, lípidos, vitaminas), desechos metabólicos hacia órganos de excreción (urea, creatinina, bilirrubina), hormonas desde glándulas endocrinas hacia tejidos diana, y electrolitos (sodio, potasio, calcio, cloruro) que mantienen el equilibrio osmótico y el pH. El suero es plasma sin factores de coagulación, obtenido después de que la sangre coagula. Las transfusiones de plasma se utilizan para tratar trastornos de coagulación y reemplazar proteínas en pacientes con quemaduras graves o enfermedad hepática.'
          }
        ]
      }
    ],


    facts: [
      'El corazón late aproximadamente 100,000 veces al día',
      'Bombea unos 7,500 litros de sangre diariamente',
      'Los vasos sanguíneos miden más de 96,000 km en total',
      'La sangre completa un circuito por el cuerpo en menos de un minuto',
      'El corazón de una mujer late más rápido que el de un hombre',
      'Un corazón sano puede latir fuera del cuerpo si tiene oxígeno'
    ],

    keyParts: [
      { name: 'Corazón', function: 'Bombear sangre por todo el cuerpo' },
      { name: 'Arterias', function: 'Transportar sangre oxigenada desde el corazón' },
      { name: 'Venas', function: 'Retornar sangre desoxigenada al corazón' },
      { name: 'Capilares', function: 'Intercambio de oxígeno, nutrientes y desechos' },
      { name: 'Aorta', function: 'Arteria principal que distribuye sangre al cuerpo' }
    ],

    diseases: [
      { name: 'Infarto', description: 'Obstrucción del flujo sanguíneo al músculo cardíaco' },
      { name: 'Hipertensión', description: 'Presión arterial elevada que daña los vasos' },
      { name: 'Arritmia', description: 'Alteración del ritmo cardíaco normal' },
      { name: 'Insuficiencia cardíaca', description: 'El corazón no bombea sangre eficientemente' }
    ],

    examQuestions: [
      {
        question: '¿Cuántas veces late el corazón aproximadamente al día?',
        options: ['50,000', '100,000', '200,000', '500,000'],
        correct: 1,
        explanation: 'El corazón late aproximadamente 100,000 veces cada día.'
      },
      {
        question: '¿Cuántas cámaras tiene el corazón humano?',
        options: ['2', '3', '4', '5'],
        correct: 2,
        explanation: 'El corazón tiene 4 cámaras: 2 aurículas y 2 ventrículos.'
      },
      {
        question: '¿Qué células transportan oxígeno en la sangre?',
        options: ['Glóbulos blancos', 'Plaquetas', 'Glóbulos rojos', 'Plasma'],
        correct: 2,
        explanation: 'Los glóbulos rojos contienen hemoglobina que transporta oxígeno.'
      },
      {
        question: '¿Cuál es el marcapasos natural del corazón?',
        options: ['Válvula mitral', 'Nodo sinoauricular', 'Aorta', 'Ventrículo izquierdo'],
        correct: 1,
        explanation: 'El nodo sinoauricular genera los impulsos eléctricos del latido.'
      },
      {
        question: '¿Qué porcentaje de la sangre es plasma?',
        options: ['25%', '40%', '55%', '70%'],
        correct: 2,
        explanation: 'El plasma constituye aproximadamente el 55% de la sangre.'
      }
    ]
  }
];

// Continue in part 2...
export const beginnerContent = {
  title: '¿Nuevo en Medicina?',
  subtitle: 'Comienza tu viaje de aprendizaje aquí',
  intro: 'La medicina es la ciencia que estudia la salud humana. Aquí aprenderás conceptos fundamentales.',
  lessons: [
    {
      id: 1,
      title: '¿Qué es el Cuerpo Humano?',
      icon: '🧬',
      content: 'El cuerpo humano es una máquina biológica compuesta por billones de células organizadas en tejidos, órganos y sistemas.',
      keyPoints: [
        'Formado por aproximadamente 37 billones de células',
        'Organizado en 11 sistemas principales',
        'Cada célula contiene el ADN completo del organismo',
        'Los sistemas trabajan coordinadamente'
      ]
    },
    {
      id: 2,
      title: 'Niveles de Organización',
      icon: '🔬',
      content: 'El cuerpo se organiza desde lo más simple a lo más complejo.',
      keyPoints: [
        'Átomos → Moléculas → Células',
        'Tejidos → Órganos → Sistemas',
        'El organismo es la suma de todos los sistemas',
        'Cada nivel depende del anterior'
      ]
    },
    {
      id: 3,
      title: 'Homeostasis',
      icon: '⚖️',
      content: 'La homeostasis es el equilibrio interno que mantiene el cuerpo para funcionar correctamente.',
      keyPoints: [
        'Temperatura corporal: 36.5-37.5°C',
        'pH sanguíneo: 7.35-7.45',
        'Glucosa en sangre: 70-100 mg/dL',
        'El cuerpo se autorregula constantemente'
      ]
    },
    {
      id: 4,
      title: 'Los 11 Sistemas del Cuerpo',
      icon: '🫀',
      content: 'El cuerpo humano tiene once sistemas principales que realizan funciones específicas.',
      keyPoints: [
        'Nervioso, Cardiovascular, Respiratorio',
        'Digestivo, Endocrino, Inmunológico',
        'Tegumentario, Muscular, Óseo',
        'Urinario, Reproductor'
      ]
    }
  ]
};
