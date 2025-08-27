import { Hero } from '@core/models';

const getHeroImagePath = (id: number) => `assets/images/heroes/${id}.webp`;

export const MockHeroes: Hero[] = [
  {
    id: 1,
    name: 'batman',
    powerstats: {
      intelligence: 81,
      strength: 40,
      speed: 29,
      durability: 55,
      power: 63,
      combat: 90,
    },
    biography:
      'Inicialmente, Batman apareció como un solitario combatiente del crimen. Su origen empezó a ser explorado a partir de Detective Comics número 33. Bruce Wayne es hijo del Dr. Thomas Wayne y su esposa Martha, dos empresarios exitosos y reconocidos en la sociedad de Gotham City. Su infancia transcurre en medio de privilegios y riquezas, predominantes durante su estancia en la mansión familiar. A los ocho años, cuando salían de una función de cine, sus padres son víctimas de un asalto en el que pierden la vida, asesinados por el delincuente Joe Chill; Bruce abrumado por un fuerte sentimiento de culpa, promete que hará todo lo posible por hacer de su ciudad un lugar más seguro, combatiendo el delito en cualquiera de sus formas. Con el afán de cumplir su sentencia, se somete a un riguroso entrenamiento físico y mental —aunque luego se percata de la necesidad de una identidad secreta, ya que según Wayne: «Los criminales son supersticiosos y cobardes, por lo que mis habilidades tienen que aprovechar sus temores para intimidarlos. Debo ser una criatura nocturna, oscura e impactante. En ese mismo relato, la intromisión repentina de un murciélago que entra a través de la ventana de su cubículo influye en su idea de convertirse en el nuevo héroe: Batman',
    image: getHeroImagePath(1),
    firstAppearance: 'Batman Beyond #1',
    publisher: 'DC Comics',
  },
  {
    id: 2,
    name: 'ant-man',
    powerstats: {
      intelligence: 100,
      strength: 18,
      speed: 23,
      durability: 28,
      power: 32,
      combat: 32,
    },
    biography:
      'Scott Edward Harris Lang nació en Coral Gables, Florida. Como fanático de las películas, recurrió al robo cuando su ocupación como ingeniero eléctrico no le proporcionó suficiente entusiasmo en la vida.(Esto se confirmó más tarde con la declaración de que lo hizo porque no podía mantener a su familia.) Detenido, Lang cumplió su condena de prisión y fue condenado a libertad condicional después de cuatro años por buena conducta. En prisión, amplió su estudio de electrónica y pronto fue contratado por Stark Internacional para trabajar en su departamento de diseño. Bajo la dirección de Tony Stark, él ayudó a instalar un nuevo sistema de seguridad en la Mansión de los Vengadores.',
    image: getHeroImagePath(2),
    firstAppearance:
      'Tales to Astonish #27 (January, 1962) (as Hank Pym) Tales to Astonish #35 (September, 1962) (as Ant-Man)',
    publisher: 'Giant-Man',
  },
  {
    id: 3,
    name: 'aquaman',
    powerstats: {
      intelligence: 81,
      strength: 85,
      speed: 79,
      durability: 80,
      power: 100,
      combat: 80,
    },
    biography:
      'Aquaman es el gobernante telepático de la Atlántida y de los océanos de la Tierra, un Atlante con increíble fuerza y velocidad, así como la capacidad de ordenar toda la vida marina. Su fisiología única le permite sobrevivir en tierra y en las grandes profundidades del océano de presión y temperatura. Se le dieron los nombres de Orin a través de su patrimonio real y Arthur Curry por su educación humana, él lucha para proteger los dos mundos usando sus poderosas habilidades y la influencia política. Él es un miembro fundador de la Liga de la Justicia de América.',
    image: getHeroImagePath(3),
    firstAppearance: 'More Fun Comics #73 (November, 1941)',
    publisher: 'DC Comics',
  },
  {
    id: 4,
    name: 'batgirl',
    powerstats: {
      intelligence: 88,
      strength: 11,
      speed: 33,
      durability: 40,
      power: 34,
      combat: 90,
    },
    biography:
      'Batgirl opera en Gotham City, aliándose con Batman y el Robin original, Dick Grayson, junto con otros vigilantes enmascarados. El personaje apareció regularmente en Detective Comics, Bat-Family, y varios otros libros producidos por DC hasta 1988. En ese año, Barbara Gordon apareció en Batgirl Especial # 1 de Barbara Kesel, en la que se retira de la lucha contra el crimen. Posteriormente apareció en la novela gráfica de Alan Moore Batman: The Killing Joke donde, en su identidad civil, es baleada por el Joker y la deja parapléjica. Aunque el editor Kim Yale y el escritor John Ostrander la reinventaron como la experta en computación y corredora de información Oráculo al año siguiente, su parálisis provocó un debate sobre la representación de las mujeres en los cómics, en particular la violencia representada hacia personajes femeninos.',
    image: getHeroImagePath(4),
    firstAppearance: 'Detective Comics #359',
    publisher: 'Oracle',
  },
  {
    id: 5,
    name: 'black widow',
    powerstats: {
      intelligence: 75,
      strength: 13,
      speed: 33,
      durability: 30,
      power: 36,
      combat: 100,
    },
    biography:
      'Natasha nació en Stalingrado (ahora Volgogrado), Rusia. La primera y más conocida Viuda Negra, es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca y apodada "Piquete de la Viuda". No usa traje durante sus primeras apariciones, sino simplemente ropa de noche y un velo. Romanova finalmente deserta a Estados Unidos por razones que incluyen su amor por el arquero criminal convertido en superhéroe, Hawkeye.',
    image: getHeroImagePath(5),
    firstAppearance: 'Tales of Suspense #52',
    publisher: 'Marvel Comics',
  },
  {
    id: 6,
    name: 'captain america',
    powerstats: {
      intelligence: 69,
      strength: 19,
      speed: 38,
      durability: 55,
      power: 60,
      combat: 100,
    },
    biography:
      'Steven Rogers nació en el Lower East Side de Manhattan, en la ciudad de Nueva York, en 1918, hijo de inmigrantes irlandeses pobres, Sarah y Joseph Rogers.Joseph murió cuando Steve era un niño, y Sarah murió de neumonía mientras Steve era un adolescente. A principios de 1940, antes de la entrada de Estados Unidos en la Segunda Guerra Mundial, Rogers es un alto y escuálido estudiante de bellas artes que se especializa en la ilustración y un escritor y artista de cómics. Perturbado por el ascenso de Adolf Hitler al poder, Rogers intenta alistarse, pero es rechazado debido a su frágil cuerpo. Su resolución atrae la atención del general del ejército de Estados Unidos, Chester Phillips y "Proyecto: Renacimiento". Rogers se usa como sujeto de prueba para el proyecto del Supersoldado, recibiendo un suero especial fabricado por el "Dr. Josef Reinstein", que luego cambió retroactivamente a un nombre en clave para el científico Abraham Erskine.',
    image: getHeroImagePath(6),
    firstAppearance: 'Captain America Comics #1 (March 1941)',
    publisher: 'Marvel Comics',
  },
  {
    id: 7,
    name: 'carnage',
    powerstats: {
      intelligence: 63,
      strength: 63,
      speed: 70,
      durability: 84,
      power: 88,
      combat: 90,
    },
    biography:
      'Carnage es la fusión del simbionte asesino y el sádico asesino serial Cletus Kasady, quien nació con una naturaleza violenta y psicópata. El simbionte, descendiente de Venom, se une a Kasady mientras está en prisión, adoptando su personalidad de odio e ira y volviéndolo un villano extremadamente peligroso para Spider-Man y otros héroes de Marvel.',
    image: getHeroImagePath(7),
    firstAppearance: 'Amazing Spider-Man #344 (February, 1991)',
    publisher: 'Marvel Comics',
  },
  {
    id: 8,
    name: 'spider-man',
    powerstats: {
      intelligence: 90,
      strength: 55,
      speed: 67,
      durability: 75,
      power: 74,
      combat: 85,
    },
    biography:
      'De acuerdo con Amazing Fantasy n.º 15 (agosto de 1962), en donde hizo su primera aparición el personaje, Peter Benjamin Parker es un joven huérfano nativo de Forest Hills, Queens, en Nueva York, que vive con sus tíos May y Ben. Durante su etapa como estudiante de la ficticia Midtown High School, es mordido por una araña radiactiva en una exhibición científica y «adquiere la agilidad y la fuerza proporcional de un arácnido». Además de incrementar sus habilidades atléticas, a partir de ese momento Parker es capaz de adherirse a superficies. Gracias a sus conocimientos científicos, desarrolla un dispositivo que le permite disparar telarañas a través de pequeños cilindros montados en sus muñecas. Inicialmente usa sus poderes para volverse popular entre el público televisivo, lo cual le lleva a diseñar su propio disfraz y participar en una competición de lucha libre, sin embargo un día «ignora alegremente la posibilidad de detener a un ladrón que huye, y su indiferencia irónicamente lo alcanza cuando el mismo delincuente más tarde asalta y mata a su tío Ben». Tras detener al asesino, Parker aprende la lección de que «un gran poder conlleva una gran responsabilidad».',
    image: getHeroImagePath(8),
    firstAppearance: 'Amazing Fantasy #15',
    publisher: 'Marvel Comics',
  },
  {
    id: 9,
    name: 'Iron man',
    powerstats: {
      intelligence: 100,
      strength: 85,
      speed: 58,
      durability: 85,
      power: 100,
      combat: 64,
    },
    biography:
      'Anthony Edward Stark es el hijo del jefe de Industrias Stark, Howard Stark y su esposa Maria Stark. Un niño genio que ingresa al MIT a la edad de 15 años para estudiar Ingeniería Electrónica. Después de que sus padres mueren en un accidente automovilístico, hereda la compañía de su familia. Mientras observaba los efectos de su tecnología experimental en el esfuerzo bélico estadounidense, Tony Stark es herido por una bomba y capturado por Wong-Chu, quien le ordena diseñar armas. Sin embargo, las lesiones de Stark son graves y la metralla se dirige a su corazón. Su compañero prisionero, Ho Yinsen, un físico ganador del Premio Nobel, cuyo trabajo se había ganado la admiración de Stark en el colegio, construye una placa pectoral magnética para evitar que la metralla alcance el corazón de Stark, manteniéndolo vivo. En secreto, Stark y Yinsen utilizan el taller para diseñar y construir una armadura mecanizada, la cual utiliza Stark para escapar. Sin embargo, durante el escape, Yinsen sacrifica su vida para salvar a Stark, distrayendo al enemigo para que Tony recargara. Stark se venga de sus secuestradores y escapa para reunirse con las fuerzas estadounidenses, conociendo en su camino a un piloto herido de la marina estadounidense, James "Rhodey" Rhodes.',
    image: getHeroImagePath(9),
    firstAppearance: 'Tales of Suspence #39 (March, 1963)',
    publisher: 'Marvel Comics',
  },
  {
    id: 10,
    name: 'Scarlet Witch',
    powerstats: {
      intelligence: 100,
      strength: 10,
      speed: 29,
      durability: 70,
      power: 100,
      combat: 80,
    },
    biography:
      'La Bruja Escarlata, cuyo nombre real es Wanda Maximoff, es un personaje ficticio de Marvel Comics con la capacidad de manipular la realidad a través de la magia del caos y la energía psiónica. Originalmente presentada como una mutante junto a su hermano gemelo Pietro (Quicksilver), Wanda y él se unieron inicialmente a la Hermandad de Mutantes Diabólicos antes de unirse a los Vengadores. Tras la muerte de sus padres y una vida de sufrimiento en Sokovia, se convirtió en una figura poderosa y compleja, con una relación romántica destacada con Visión y una conexión con la Fuerza Fénix en los cómics.',
    image: getHeroImagePath(10),
    firstAppearance: 'Uncanny X-Men #4 (March, 1964)',
    publisher: 'Marvel Comics',
  },
];
