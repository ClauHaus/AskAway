import einstein from "./../images/einstein.jpg";
import messi from "./../images/messi.jpg";
import brad from "./../images/brad.jpg";
import liberty from "./../images/liberty.jpg";
import stones from "./../images/stones.jpg";
import spears from "./../images/spears.jpg";
import buddha from "./../images/buddha.jpg";
import platypus from "./../images/platypus.jpg";
import tulips from "./../images/tulips.jpg";
import kazakhstan from "./../images/kazakhstan.png";
import meryl from "./../images/meryl.jpg";
import quixote from "./../images/quixote.png";
import cristiano from "./../images/cristiano.jpg";
import hercules from "./../images/hercules.jpg";
import link from "./../images/link.png";
import ibai from "./../images/ibai.jpg";
import johnny from "./../images/johnny.jpg";
import giza from "./../images/giza.jpg";
import korean from "./../images/korean.jpeg";
import estonia from "./../images/estonia.png";
import girl from "./../images/girl.jpg";
import vegeta from "./../images/vegeta.jpg";
import sailor from "./../images/sailor.jpg";

const bigDataSp = [
  //ARRAY 0--------------------------------------
  [
    {
      id: 0,
      question: "Qué es π?",
      answers: [
        ["3.14159", true],
        ["3.14195", false],
        ["3.15149", false],
        ["3.15194", false],
      ],
    },
  ],
  //ARRAY 1--------------------------------------
  [
    {
      id: 0,
      question: "Quién era este hombre?",
      image: einstein,
      answers: [
        ["Albert Einstein", true],
        ["Charles Darwin", false],
        ["Stephen Hawking", false],
        ["Isaac Newton", false],
      ],
    },

    {
      id: 1,
      question: "El primer periódico fue comenzando por?",
      answers: [
        ["Japón", false],
        ["China", true],
        ["Inglaterra", false],
        ["India", false],
      ],
    },

    {
      id: 2,
      question: "Cuando comenzo la primer guerra mundial?",
      answers: [
        ["27/06/1913", false],
        ["11/11/1915", false],
        ["09/08/1915", false],
        ["28/07/1914", true],
      ],
    },
    {
      id: 3,
      question: "Cuál es el río mas largo en África?",
      answers: [
        ["Río Congo ", false],
        ["Río Nilo ", true],
        ["Río Zambesi ", false],
        ["Río Kasai ", false],
      ],
    },
    {
      id: 4,
      question: `Cuál película ganó "Mejor Film" en los Oscars del 2018?`,
      answers: [
        ["The shape of water", true],
        ["Moonlight", false],
        ["Green book", false],
        ["A Star is born", false],
      ],
    },
    {
      id: 5,
      question: `Quién pintó "La noche estrellada" en 1889?`,
      answers: [
        ["Piet Mondrian", false],
        ["Willem de Kooning", false],
        ["Vincent van Gogh", true],
        ["Hendrick ter Brugghen", false],
      ],
    },
    {
      id: 6,
      question: `En que año sucedió "la caída de Wall Street"?`,
      answers: [
        ["1925", false],
        ["1929", true],
        ["1932", false],
        ["1927", false],
      ],
    },
    {
      id: 7,
      question: `Cuál es el planeta con mayor temperatura en el sistema solar?`,
      answers: [
        ["Venus", true],
        ["Marte", false],
        ["Júpiter", false],
        ["Mercurio", false],
      ],
    },
    {
      id: 8,
      question: `Cuál figura geométrica es utilizada generalmente para señales de "Pare"?`,
      answers: [
        ["Triángulo", false],
        ["Hexágono", false],
        ["Círculo", false],
        ["Octágono", true],
      ],
    },
    {
      id: 9,
      question: `Cuál de estas películas no contiene a Jeff Bridges?`,
      answers: [
        ["Iron Man", false],
        ["The Big Lebowsky", false],
        ["Reservoir Dogs", true],
        ["Tron: Legacy", false],
      ],
    },
    {
      id: 10,
      question: `Para que selección de fútbol nacional juega éls?`,
      image: messi,
      answers: [
        ["España", false],
        ["Argentina", true],
        ["Chile", false],
        ["Uruguay", false],
      ],
    },
    {
      id: 11,
      question: `Cuál es el nombre del hermano del famoso plomero, estrella de los videojuegos?`,
      answers: [
        ["Luigi", true],
        ["Wario", false],
        ["Mario", false],
        ["Yoshi", false],
      ],
    },
    {
      id: 12,
      question: `El dios griego Poseidon era el dios de qué?`,
      answers: [
        ["Fuego", false],
        ["Guerra", false],
        ["Sol", false],
        ["Los mares", true],
      ],
    },
    {
      id: 13,
      question: `Kanye West en los premios VMA 2009 interrumpió a qué celebridad?`,
      answers: [
        ["Madonna", false],
        ["Beyonce", false],
        ["Taylor Swift", true],
        ["Kelly Clarkson", false],
      ],
    },
    {
      id: 14,
      question: `Cuál fue el primer deporte en ser jugado en la Luna?`,
      answers: [
        ["Fútbol", false],
        ["Golf", true],
        ["Tenis", false],
        ["Fútbol Americano", false],
      ],
    },
    {
      id: 15,
      question: `Cuál albúm de Nirvana tiene a un bebé desnudo en su portada?`,
      answers: [
        ["Nevermind", true],
        ["Bleach", false],
        ["In Utero", false],
        ["Incesticide", false],
      ],
    },
    {
      id: 16,
      question: `En la película Gremlins, luego de que momento del día no debes alimentar a Mogwai?`,
      answers: [
        ["Noche", false],
        ["Medianoche", true],
        ["Tarde", false],
        ["Mañana", false],
      ],
    },
    {
      id: 17,
      question: `En 1939, Inglaterra y Francia declaran la guerra a Alemania luego de que este último invadiera a que otro país?`,
      answers: [
        ["Czechoslovakia", false],
        ["Austria", false],
        ["Polonia", true],
        ["Hungría", false],
      ],
    },
    {
      id: 18,
      question: `Cuál es el nombre de este actor?`,
      image: brad,
      answers: [
        ["Johnny Depp", false],
        ["Jonah Hill", false],
        ["Leonardo Di Caprio", false],
        ["Brad Pitt", true],
      ],
    },
    {
      id: 19,
      question: `Cuántos lados tiene un trapecio?`,
      answers: [
        ["4", true],
        ["3", false],
        ["5", false],
        ["6", false],
      ],
    },
    {
      id: 20,
      question: `Qué país será anfitrión de la copa mundial FIFA 2022?`,
      answers: [
        ["Japón", false],
        ["Qatar", true],
        ["Rusia", false],
        ["Sudáfrica", false],
      ],
    },
    {
      id: 21,
      question: `Qué raza erá el perro Marley en la película "Marley y yo"(2008)?`,
      answers: [
        ["Dálmata", false],
        ["Golden Retriever", false],
        ["Labrador Retriever", true],
        ["Shiba Inu", false],
      ],
    },
    {
      id: 22,
      question: `Quien escribió "Harry Potter"?`,
      answers: [
        ["J.R.R. Tolkien", false],
        ["Terry Pratchett", false],
        ["Daniel Radcliffe", false],
        ["J.K. Rowling", true],
      ],
    },
    {
      id: 23,
      question: `Quien fue Bruce Wayne/Batman en la película "Batman" de Tim Burton en 1989?`,
      answers: [
        ["Michael Keaton", true],
        ["George Clooney", false],
        ["Christian Bale", false],
        ["Val Kilmer", false],
      ],
    },
    {
      id: 24,
      question: `En golf cuál es el nombre a un hoyo debajo del par por dos golpes?`,
      answers: [
        ["Albatross", false],
        ["Eagle", true],
        ["Birdie", false],
        ["Bogey", false],
      ],
    },
    {
      id: 25,
      question: `Quien participó en la película 1973 "Enter the Dragon"?`,
      answers: [
        ["Jet Li", false],
        ["Jackie Chan", false],
        ["Bruce Lee", true],
        ["Donnie Yen", false],
      ],
    },
    {
      id: 26,
      question: `Quien en la mitología griega, lidero a los Argonautas en busca del Vellocino de oro?`,
      answers: [
        ["Hercules", false],
        ["Odiseo", false],
        ["Dédalo", false],
        ["Jason", true],
      ],
    },
    {
      id: 27,
      question: `Qué presidente norteamericano aparece en el billete de un dolár?`,
      answers: [
        ["George Washington", true],
        ["Benjamin Franklin", false],
        ["Thomas Jefferson", false],
        ["Abraham Lincoln", false],
      ],
    },
    {
      id: 28,
      question: `En qué ciudad norteamericana esta localizada esta atracción turística?`,
      image: liberty,
      answers: [
        ["Los Angeles", false],
        ["New York", true],
        ["Washington D.C.", false],
        ["Chicago", false],
      ],
    },
    {
      id: 29,
      question: `En qué país se realizo la copa mundial FIFA del 2006?`,
      answers: [
        ["Sudáfrica", false],
        ["Italia", false],
        ["Alemania", true],
        ["Brasil", false],
      ],
    },
    {
      id: 30,
      question: `Cuál es la palabra francesa para "sombrero"?`,
      answers: [
        ["Casquette", false],
        ["Bonnet", false],
        ["Casque", false],
        ["Chapeau", true],
      ],
    },
    {
      id: 31,
      question: `Cuántas cámaras tiene el corazón humano?`,
      answers: [
        ["4", true],
        ["2", false],
        ["3", false],
        ["6", false],
      ],
    },
    {
      id: 32,
      question: `Quien creó la serie "Metal Gear"?`,
      answers: [
        ["Shigeru Miyamoto", false],
        ["Hideo Kojima", true],
        ["Hiroshi Yamauchi", false],
        ["Gunpei Yokoi", false],
      ],
    },
    {
      id: 33,
      question: `Cuál es el símbolo del zodíaco para Géminis?`,
      answers: [
        ["Pez", false],
        ["Doncella", false],
        ["Mellizos", true],
        ["Escamas", false],
      ],
    },
    {
      id: 34,
      question: `La marca de ropa/calzado Nike toma su nombre de que diosa griega?`,
      answers: [
        ["Fuerza", false],
        ["Coraje", false],
        ["Honor", false],
        ["Victoria", true],
      ],
    },
    {
      id: 35,
      question: `Foie gras es un delicadeza típicamente realizada de qué parte del pato o ganso?`,
      answers: [
        ["Hígado", true],
        ["Estómago", false],
        ["Corazón", false],
        ["Intestinos", false],
      ],
    },
    {
      id: 36,
      question: `Cuál es la palabra alemana para "tener placer en el dolor ajeno"?`,
      answers: [
        ["Verkehrsmittel", false],
        ["Schadenfreude", true],
        ["Feldschlösschen", false],
        ["Einkaufsmöglichkeiten", false],
      ],
    },
    {
      id: 37,
      question: `Cuál es el nombre de esta banda británica?`,
      image: stones,
      answers: [
        ["The Beatles", false],
        ["Arctic Monkeys", false],
        ["The Rolling Stones", true],
        ["Coldplay", false],
      ],
    },
    {
      id: 38,
      question: `Cuál sistema operativo celular tuvo mayor presencia en el mercado en 2012?`,
      answers: [
        ["Symbian", false],
        ["Android", false],
        ["BlackBerry", false],
        ["iOS", true],
      ],
    },
    {
      id: 39,
      question: `En computación, que significa LAN?`,
      answers: [
        ["Long Antenna Node", false],
        ["Local Area Network", true],
        ["Light Access Node", false],
        ["Land Address Navigation", false],
      ],
    },
  ],
  //ARRAY 2--------------------------------------
  [
    {
      id: 0,
      question: `Cúal es el segundo país más grande del mundo por su área?`,
      answers: [
        ["Canadá", true],
        ["Rusia", false],
        ["China", false],
        ["Estados unidos de América", false],
      ],
    },
    {
      id: 1,
      question: `La película de Disney del 2016 "Moana" esta basado en que cultura?`,
      answers: [
        ["Nórdica", false],
        ["Polinesia", true],
        ["Nativo Americana", false],
        ["Japonesa", false],
      ],
    },
    {
      id: 2,
      question: `Cuál es la unidad de capacitancia eléctrica?`,
      answers: [
        ["Gauss", false],
        ["Watt", false],
        ["Farad", true],
        ["Henry", false],
      ],
    },
    {
      id: 3,
      question: `En South Park, cuál es el apellido de Stan?`,
      answers: [
        ["Broflovski", false],
        ["Tweak", false],
        ["Cartman", false],
        ["Marsh", true],
      ],
    },
    {
      id: 4,
      question: `Cuál de estos huesos es mas difícil de romper?`,
      answers: [
        ["Femúr", true],
        ["Cráneo", false],
        ["Húmero", false],
        ["Tibia", false],
      ],
    },
    {
      id: 5,
      question: `Hippocampus es el nombre latín para qué criatura maritíma?`,
      answers: [
        ["Delfín", false],
        ["Caballito de mar", true],
        ["Ballena", false],
        ["Pulpo", false],
      ],
    },
    {
      id: 6,
      question: `Cuantos planetas hay en nuestro sistema solar?`,
      answers: [
        ["7", false],
        ["6", false],
        ["8", true],
        ["9", false],
      ],
    },
    {
      id: 7,
      question: `Cuál es el nombre de esta famosa cantante?`,
      image: spears,
      answers: [
        ["Christina Aguilera", false],
        ["Billie Eilish", false],
        ["Dua Lipa", false],
        ["Britney Spears", true],
      ],
    },
    {
      id: 8,
      question: `Cuál de estos colores no esta en el logo de Google?`,
      answers: [
        ["Rosa", true],
        ["Azul", false],
        ["Amarillo", false],
        ["Verde", false],
      ],
    },
    {
      id: 9,
      question: `Cuál de estos personajes es la mascota de la compañia de videojuegos SEGA?`,
      answers: [
        ["Mario Bros", false],
        ["Sonic the Hedgehog", true],
        ["Alex Kidd", false],
        ["Dinamite Headdy", false],
      ],
    },
    {
      id: 10,
      question: `Quién fue el autor de la novela del 1951, "El Guardián entre el centeno"?`,
      answers: [
        ["Hunter Fox", false],
        ["F. Scott Fitzgerald", false],
        ["J. D. Salinger", true],
        ["William Golding", false],
      ],
    },
    {
      id: 11,
      question: `El dios griego Hades era el dios de qué?`,
      answers: [
        ["Guerra", false],
        ["Amor", false],
        ["Fuego", false],
        ["El Inframundo", true],
      ],
    },
    {
      id: 12,
      question: `Cuál de los siguientes deportes no es parte del Triatlón?`,
      answers: [
        ["Equitación", true],
        ["Ciclismo", false],
        ["Natación", false],
        ["Atletismo", false],
      ],
    },
    {
      id: 13,
      question: `El antiguo diso roman de la guerra era comúnmente conodico como...?`,
      answers: [
        ["Júpiter", false],
        ["Marte", true],
        ["Ares", false],
        ["Juno", false],
      ],
    },
    {
      id: 14,
      question: `El cuerpo de la Esfinge egipcia está basado en qué animal?`,
      answers: [
        ["Toro", false],
        ["Caballo", false],
        ["León", true],
        ["Perro", false],
      ],
    },
    {
      id: 15,
      question: `Cuál es el hueso más largo del cuerpo humano?`,
      answers: [
        ["Peroné", false],
        ["Omoplato", false],
        ["Cubito", false],
        ["Fémur", true],
      ],
    },
    {
      id: 16,
      question: `Este elemento, cuando se encuentra sometido con extremo calor y presión, crea diamantes.`,
      answers: [
        ["Carbón", true],
        ["Oxígeno", false],
        ["Nitrógeno", false],
        ["Hidrógeno", false],
      ],
    },
    {
      id: 17,
      question: `Donde se encuentra el "Gran Buda"?`,
      image: buddha,
      answers: [
        ["Cambodia", false],
        ["Tailandia", true],
        ["Indonesia", false],
        ["Vietnam", false],
      ],
    },
    {
      id: 18,
      question: `Cuántos puntos hay en un solo dado?`,
      answers: [
        ["24", false],
        ["15", false],
        ["21", true],
        ["18", false],
      ],
    },
    {
      id: 19,
      question: `Sí vas a escribir código en este lenguaje solo podrías tipear "0" y "1".`,
      answers: [
        ["C++", false],
        ["JavaScript", false],
        ["Python", false],
        ["Binary", true],
      ],
    },
    {
      id: 20,
      question: `Que país tiene una bandera bicolor horizontal roja y blanca?`,
      answers: [
        ["Monaco", true],
        ["Bahrain", false],
        ["Malta", false],
        ["Liechenstein", false],
      ],
    },
    {
      id: 21,
      question: `Cuál es el sustantivo colectivo para un grupo de cuervos?`,
      answers: [
        ["Paquete", false],
        ["Asesinato", true],
        ["Pandilla", false],
        ["Jauría", false],
      ],
    },
    {
      id: 22,
      question: `Cuál de estas películas no está ambientada en Los Angeles?`,
      answers: [
        ["Blade Runner", false],
        ["The Terminator", false],
        ["RoboCop", true],
        ["Predator 2", false],
      ],
    },
    {
      id: 23,
      question: `Rinoplastía es un procedimiento quirúrgico en que parte del cuerpo humano?`,
      answers: [
        ["Orejas", false],
        ["Mentón", false],
        ["Cuello", false],
        ["Nariz", true],
      ],
    },
    {
      id: 24,
      question: `Qué animal se puede ver en esta imagen?`,
      image: platypus,
      answers: [
        ["Ornitorrinco", true],
        ["Armadillo", false],
        ["Okapi", false],
        ["Tapir", false],
      ],
    },
    {
      id: 25,
      question: `Cuál es la capital de Dinamarca?`,
      answers: [
        ["Oslo", false],
        ["Copenhagen", true],
        ["Estocolmo", false],
        ["Aalborg", false],
      ],
    },
    {
      id: 26,
      question: `Cuál es el nombre de la comunidad indígena de Nueva Zelanda?`,
      answers: [
        ["Samoanos", false],
        ["Polinesios", false],
        ["Maoríes", true],
        ["Vikingos", false],
      ],
    },
    {
      id: 27,
      question: `De cuál mitología proviene el dios "Apolo"?`,
      answers: [
        ["Griega, Romana y Nórdica", false],
        ["Romana and Española", false],
        ["Griega and China", false],
        ["Griega and Romana", true],
      ],
    },
    {
      id: 28,
      question: `En 1453, cuál importante ciudad "cayó"?`,
      answers: [
        ["Constantinopla", true],
        ["Roma", false],
        ["Atenas", false],
        ["Hamburgo", false],
      ],
    },
    {
      id: 29,
      question: `Que criaturas mitologicas tienen cara de mujeres y cuerpo de buitres?`,
      answers: [
        ["Sirenas", false],
        ["Arpías", true],
        ["Ninfas", false],
        ["Súcubos", false],
      ],
    },
    {
      id: 30,
      question: `Cuál es el nombre del estadio del Manchester United?`,
      answers: [
        ["Anfield", false],
        ["City of Manchester Stadium", false],
        ["Old Trafford", true],
        ["St James Park", false],
      ],
    },
    {
      id: 31,
      question: `Cuál es el animal más grande de la Tierra?`,
      answers: [
        ["Orca", false],
        ["Calamar Colosal", false],
        ["Jirafa", false],
        ["Ballena Azul", true],
      ],
    },
    {
      id: 32,
      question: `Cuál es el primer libro del viejo testamento?`,
      answers: [
        ["Génesis", true],
        ["Éxodo", false],
        ["Levítico", false],
        ["Deuteronomio", false],
      ],
    },
    {
      id: 33,
      question: `Cuál de los siguientes países de las islas del Pacífico está gobernado por una monarquía constitucional?`,
      answers: [
        ["Palau", false],
        ["Tonga", true],
        ["Fiji", false],
        ["Kiribati", false],
      ],
    },
    {
      id: 34,
      question: `La "Aguja Espacial" esta localizada en que ciudad?`,
      answers: [
        ["Toronto", false],
        ["Vancouver", false],
        ["Seattle", true],
        ["St Louis", false],
      ],
    },
    {
      id: 35,
      question: `Aubrey Graham es mejor conocido como...`,
      answers: [
        ["Lil Wayne", false],
        ["Travis Scott", false],
        ["2 Chainz", false],
        ["Drake", true],
      ],
    },
    {
      id: 36,
      question: `Cuál es el nombre común de estas flores?`,
      image: tulips,
      answers: [
        ["Tulipanes", true],
        ["Rosas", false],
        ["Orquídeas", false],
        ["Margaritas", false],
      ],
    },
    {
      id: 37,
      question: `Cuál signo del zodíaco esta representado por unas básculas?`,
      answers: [
        ["Aries", false],
        ["Libra", true],
        ["Capricornio", false],
        ["Sagitario", false],
      ],
    },
    {
      id: 38,
      question: `Quién es llamado "El Maestro" en el circuito masculino de tenis?`,
      answers: [
        ["Rafael Nadal", false],
        ["Novak Djokovic", false],
        ["Roger Federer", true],
        ["Pete Sampras", false],
      ],
    },
    {
      id: 39,
      question: `Groenlandia es parte de que reino?`,
      answers: [
        ["Noruega", false],
        ["Suecia", false],
        ["Reino Unido", false],
        ["Dinamarca", true],
      ],
    },
  ],
  //ARRAY 3--------------------------------------
  [
    {
      id: 0,
      question: `Quién representaba al agente Fox Mulder en la serie de ciencia ficción "The X-Files"?`,
      answers: [
        ["David Duchovny", true],
        ["Mitch Pileggi", false],
        ["Robert Patrick", false],
        ["Luke Perry", false],
      ],
    },
    {
      id: 1,
      question: `La bandera de cual país es esta?`,
      image: kazakhstan,
      answers: [
        ["Turkmenistan", false],
        ["Kazakhstan", true],
        ["Kyrgyzstan", false],
        ["Uzbekistan", false],
      ],
    },
    {
      id: 2,
      question: `Quién pintó la Mona Lisa?`,
      answers: [
        ["Vincent Van Gogh", false],
        ["Pablo Picasso", false],
        ["Leonardo da Vinci", true],
        ["Claude Monet", false],
      ],
    },
    {
      id: 3,
      question: `La idea del socialismo fue articulada y avanzada por quién?`,
      answers: [
        ["Vladimir Lenin", false],
        ["Joseph Stalin", false],
        ["Vladimir Putin", false],
        ["Karl Marx", true],
      ],
    },
    {
      id: 4,
      question: `Que significa GHz?`,
      answers: [
        ["Gigahertz", true],
        ["Gigahotz", false],
        ["Gigahetz", false],
        ["Gigahatz", false],
      ],
    },
    {
      id: 5,
      question: `Quién es esta actriz?`,
      image: meryl,
      answers: [
        ["Meryl Streep", false],
        ["Susan Sarandon", true],
        ["Diane Keaton", false],
        ["Emma Thompson", false],
      ],
    },
    {
      id: 6,
      question: `Cuál es la capital de Jamaica?`,
      answers: [
        ["San Juan", false],
        ["Port-au-Prince", false],
        ["Kingston", true],
        ["Bridgetown", false],
      ],
    },
    {
      id: 7,
      question: `Cuál país de la modernidad es la región que se conocia como Frigia en tiempos antiguos?`,
      answers: [
        ["Siria", false],
        ["Grecía", false],
        ["Egipto", false],
        ["Turquía", true],
      ],
    },
    {
      id: 8,
      question: `Cuál es la película mas antigua de Disney?`,
      answers: [
        ["Blancanieves y los 7 enanitos", true],
        ["Pinocchio", false],
        ["Fantasia", false],
        ["Dumbo", false],
      ],
    },
    {
      id: 9,
      question: `El sistema de numeración con una base de 16 se conoce más comúnmente como `,
      answers: [
        ["Duodecimal", false],
        ["Hexadecimal", true],
        ["Octal", false],
        ["Binario", false],
      ],
    },
    {
      id: 10,
      question: `Donde encontrarías las "Escaleras Españolas"?`,
      answers: [
        ["Barcelona, Spain", false],
        ["London, England", false],
        ["Rome, Italy", true],
        ["Berlin, Germany", false],
      ],
    },
    {
      id: 11,
      question: `Quién dirigio "E.T. el extraterrestre" (1982)?`,
      answers: [
        ["Stanley Kubrick", false],
        ["Tim Burton", false],
        ["James Cameron", false],
        ["Steven Spielberg", true],
      ],
    },
    {
      id: 12,
      question: `El fabricante de autos italiano Lamborghini utiliza qué animal como su logo?`,
      answers: [
        ["Toro", true],
        ["Tigre", false],
        ["Caballo", false],
        ["Serpiente", false],
      ],
    },
    {
      id: 13,
      question: `El término "Batería" para describir un dispositivo de almacenamiento eléctrico fue acuñado por?`,
      answers: [
        ["Nikola Tesla", false],
        ["Benjamin Franklin", true],
        ["Luigi Galvani", false],
        ["Alessandro Volta", false],
      ],
    },
    {
      id: 14,
      question: `Cuál es la capital de Suiza?`,
      answers: [
        ["Zúrich", false],
        ["Basilea", false],
        ["Berna", true],
        ["Ginebra", false],
      ],
    },
    {
      id: 15,
      question: `Quién es esta iconica pareja española?`,
      image: quixote,
      answers: [
        ["Gerard piqué y Carles Puyol ", false],
        ["El Cid Campeador y Diego Laínez", false],
        ["Santiago Segura y Javier Cámara", false],
        ["Don Quixote y Sancho Panza", true],
      ],
    },
    {
      id: 16,
      question: `Cuál es el verdadero nombre de "Bono", cantante de U2?`,
      answers: [
        ["Mark Ronson", false],
        ["Paul David Hewson", true],
        ["Lonnie Donegan", false],
        ["Calum Scott", false],
      ],
    },
    {
      id: 17,
      question: `Cuál es el país mas pequeño del mundo?`,
      answers: [
        ["Mónaco", false],
        ["Malta", false],
        ["Maldivas", false],
        ["El Vaticano", true],
      ],
    },
    {
      id: 18,
      question: `Cuál es la forma del juguete inventado por el profesor húngaro Ernő Rubik?`,
      answers: [
        ["Esfera", false],
        ["Cubo", true],
        ["Cilindro", false],
        ["Pirámide", false],
      ],
    },
    {
      id: 19,
      question: `Que significa CPU?`,
      answers: [
        ["Central Process Unit", false],
        ["Computer Personal Unit", false],
        ["Central Processing Unit", true],
        ["Central Processor Unit", false],
      ],
    },
    {
      id: 20,
      question: `Cuantas estrellas hay en la bandera de Nueva Zelanda?`,
      answers: [
        ["5", false],
        ["0", false],
        ["4", true],
        ["3", false],
      ],
    },
    {
      id: 21,
      question: `Como se llama un murciélago bebé?`,
      answers: [
        ["Cría", false],
        ["Pollito", false],
        ["Pequeño", false],
        ["Cachorro", true],
      ],
    },
    {
      id: 22,
      question: `Cuál es la capital de Indonesia?`,
      answers: [
        ["Bandung", false],
        ["Jakarta", true],
        ["Medan", false],
        ["Palembang", false],
      ],
    },
    {
      id: 23,
      question: `En qué camina un funambulista?`,
      answers: [
        ["Cuerda floja", true],
        ["Vidrio roto", false],
        ["Bolas", false],
        ["La Luna", false],
      ],
    },
    {
      id: 24,
      question: `Cuantos lados tiene un heptágono?`,
      answers: [
        ["7", true],
        ["8", false],
        ["5", false],
        ["6", false],
      ],
    },
    {
      id: 25,
      question: `Qué significa "hippopotamus" y en qué idioma?`,
      answers: [
        ["Cerdo gordo (griego)", false],
        ["Caballo de río(griego)", true],
        ["Cerdo gordo(latín)", false],
        ["Caballo de río(latín)", false],
      ],
    },
    {
      id: 26,
      question: `La Tierra esta ubicada en cuál galaxia?`,
      answers: [
        ["El Hoyo Negro", false],
        ["La Galaxy Note", false],
        ["La Galaxia Marciana", false],
        ["La Vía Láctea", true],
      ],
    },
    {
      id: 27,
      question: `Para cuál selección nacional de fútbol juega él?`,
      image: cristiano,
      answers: [
        ["Portugal", true],
        ["España", false],
        ["Italia", false],
        ["Francia", false],
      ],
    },
    {
      id: 28,
      question: `En qué año Neil Armstrong y Buzz Aldrin llegaron a la luna?`,
      answers: [
        ["1967", false],
        ["1969", true],
        ["1973", false],
        ["1965", false],
      ],
    },
    {
      id: 29,
      question: `Quién fue el dios romano del fuego?`,
      answers: [
        ["Apollo", false],
        ["Mercurio", false],
        ["Vulcano", true],
        ["Júpiter", false],
      ],
    },
    {
      id: 30,
      question: `Cuando fue asesinada Juana de Arco?`,
      answers: [
        ["29 de Abril de 1432", false],
        ["25 de Diciembre de 1429", false],
        ["13 de Junio de 1435", false],
        ["30 de Mayo de 1431", true],
      ],
    },
    {
      id: 31,
      question: `Cuál país tiene tres ciudades capitales?`,
      answers: [
        ["Sudáfrica", true],
        ["China", false],
        ["Somalia", false],
        ["Reino Unido", false],
      ],
    },
    {
      id: 32,
      question: `De cuál película de Disney son estos personajes?`,
      image: hercules,
      answers: [
        ["Aladdin", false],
        ["Hercules", true],
        ["Robin Hood", false],
        ["Mulan", false],
      ],
    },
    {
      id: 33,
      question: `Cuántos ríos hay en Arabia Saudita?`,
      answers: [
        ["1", false],
        ["3", false],
        ["0", true],
        ["2", false],
      ],
    },
    {
      id: 34,
      question: `Que línea montañosa está en el limíte entre España y Francia?`,
      answers: [
        ["Cárpatos", false],
        ["Urales", false],
        ["Alpes", false],
        ["Pirineos", true],
      ],
    },
    {
      id: 35,
      question: `Cuál autor ruso escribio la épica novela "Guerra y Paz"?`,
      answers: [
        ["Leo Tolstoy", true],
        ["Alexander Pushkin", false],
        ["Vladimir Nabokov", false],
        ["Fyodor Dostoyevsky", false],
      ],
    },
    {
      id: 36,
      question: `Como se conocía anteriormente a la nación africana de Zimbabwe?`,
      answers: [
        ["Mozambique", false],
        ["Rhodesia", true],
        ["Zambia", false],
        ["Bulawayo", false],
      ],
    },
    {
      id: 37,
      question: `Qué evento desató el comienzo de la segunda guerra mundial?`,
      answers: [
        ["Invasión de Rusia (1942)", false],
        ["Invasión de Normandía (1944)", false],
        ["Invasión de Polonia (1939)", true],
        ["Batalla de Inglaterra (1940)", false],
      ],
    },
    {
      id: 38,
      question: `De qué color es la sangre no oxidada?`,
      answers: [
        ["Púrpura", false],
        ["Azul", false],
        ["Verde", false],
        ["Roja", true],
      ],
    },
    {
      id: 39,
      question: `Cuál fue la primera criatura viva en el espacio?`,
      answers: [
        ["Moscas de la fruta", true],
        ["Perro", false],
        ["Mono", false],
        ["Ratón", false],
      ],
    },
  ],
  //ARRAY 4--------------------------------------
  [
    {
      id: 0,
      question: `Cuales eran los nombres de los padres de Batman?`,
      answers: [
        ["Todd y Mira", false],
        ["Jason y Sarah", false],
        ["Thomas y Martha", true],
        ["Joey y Jackie", false],
      ],
    },
    {
      id: 1,
      question: `En la película Terminator (1984), cuál era el modelo del Terminator interpretado por Arnold Schwarzenegger?`,
      answers: [
        ["T-800", true],
        ["I-950", false],
        ["T-888", false],
        ["T-1000", false],
      ],
    },
    {
      id: 2,
      question: `El nombre griego de Neptuno era ...`,
      answers: [
        ["Ares", false],
        ["Poseidon", true],
        ["Apollo", false],
        ["Zeus", false],
      ],
    },
    {
      id: 3,
      question: `El libro "El Principito" fue escrito por...`,
      answers: [
        ["Miguel de Cervantes Saavedra", false],
        ["Jane Austen", false],
        ["Antoine de Saint-Exupéry", true],
        ["F. Scott Fitzgerald", false],
      ],
    },
    {
      id: 4,
      question: `En que año fue fundada la empresa McDonald's ?`,
      answers: [
        ["1923", false],
        ["1932", false],
        ["1967", false],
        ["1955", true],
      ],
    },
    {
      id: 5,
      question: `Cuál es el nombre de este personaje de videojuegos?`,
      image: link,
      answers: [
        ["Link", true],
        ["Zelda", false],
        ["Rito", false],
        ["Ganon", false],
      ],
    },
    {
      id: 6,
      question: `Cuál es la montaña más alta del mundo?`,
      answers: [
        ["Kangchenjunga", false],
        ["Mt. Everest", true],
        ["Kilimanjaro", false],
        ["Aconcagua", false],
      ],
    },
    {
      id: 7,
      question: `Cuál es la capital de Nueva Zelanda?`,
      answers: [
        ["Auckland", false],
        ["Melbourne", false],
        ["Wellington", true],
        ["Christchurch", false],
      ],
    },
    {
      id: 8,
      question: `Quien actua como Bruce Wayne/batman en la película "The Dark Knight" (2008)`,
      answers: [
        ["Michael Keaton", false],
        ["Michael Caine", false],
        ["Ben Affleck", false],
        ["Christian Bale", true],
      ],
    },
    {
      id: 9,
      question: `Cuál es el término científico para el "gusto"?`,
      answers: [
        ["Percepción gustativa", true],
        ["Olfacción", false],
        ["Percepción auditiva", false],
        ["Somatosensacion", false],
      ],
    },
    {
      id: 10,
      question: `Cual fue el single debut de Britney Spears?`,
      answers: [
        ["Oops!... I Did It Again", false],
        ["...Baby One More Time", true],
        ["Toxic", false],
        ["(You Drive Me) Crazy", false],
      ],
    },
    {
      id: 11,
      question: `Cuál es la capital de Perú?`,
      answers: [
        ["Santiago", false],
        ["Montevideo", false],
        ["Lima", true],
        ["Medellín", false],
      ],
    },
    {
      id: 12,
      question: `Las ciudades de Brugelette, Arlon y Ath sen encuentran en que país?`,
      answers: [
        ["Luxemburgo", false],
        ["Andorra", false],
        ["Francia", false],
        ["Bélgica", true],
      ],
    },
    {
      id: 13,
      question: `En cuál continente se encuentra el país de Lesoto?`,
      answers: [
        ["Africa", true],
        ["Asia", false],
        ["Sudámerica", false],
        ["Europa", false],
      ],
    },
    {
      id: 14,
      question: `Cuál es el nombre de este streamer?`,
      image: ibai,
      answers: [
        ["Rubius", false],
        ["Ibai Llanos", true],
        ["Germán Garmendia", false],
        ["PewDiePie", false],
      ],
    },
    {
      id: 15,
      question: `Cuál de los siguientes no es un albúm de The Beatles?`,
      answers: [
        ["Abbey Road", false],
        ["Magical Mystery Tour", false],
        ["The Wall", true],
        ["Revolver", false],
      ],
    },
    {
      id: 16,
      question: `Cuál es la capital de Senegal?`,
      answers: [
        ["Nouakchott", false],
        ["Conakry", false],
        ["Monrovia", false],
        ["Dakar", true],
      ],
    },
    {
      id: 17,
      question: `Donde se realizaron los Juegos olímpicos del 2016?`,
      answers: [
        ["Río de Janeiro", true],
        ["Atenas", false],
        ["Londres", false],
        ["Beijing", false],
      ],
    },
    {
      id: 18,
      question: `Cuál juego-rompecabezas fue diseñado por un programador ruso, mostrando edificios y música rusa?`,
      answers: [
        ["Puzzled", false],
        ["Tetris", true],
        ["Jenga", false],
        ["Boulder Dash", false],
      ],
    },
    {
      id: 19,
      question: `Qué bebida alcohólica se elabora principalmente a partir de bayas de enebro?`,
      answers: [
        ["Ron", false],
        ["Vodka", false],
        ["Gin", true],
        ["Tequila", false],
      ],
    },
    {
      id: 20,
      question: `Qué número es el represanto por el númeral romano "D"?`,
      answers: [
        ["1000", false],
        ["100", false],
        ["50", false],
        ["500", true],
      ],
    },
    {
      id: 21,
      question: `Cuál es el nombre de este personaje animado?`,
      image: johnny,
      answers: [
        ["Johnny Bravo", true],
        ["Dexter", false],
        ["Gumball Watterson", false],
        ["Carlos Brutowski", false],
      ],
    },
    {
      id: 22,
      question: `En que ciudad se encuentra esta atracción turística?`,
      image: giza,
      answers: [
        ["El Cairo", false],
        ["Ciudad de Giza", true],
        ["Tanta", false],
        ["El Obour", false],
      ],
    },
    {
      id: 23,
      question: `Un animal carnívoro come carne, qué come un animal nucívoro?`,
      answers: [
        ["Nada", false],
        ["Frutas", false],
        ["Nueces", true],
        ["Algas marinas", false],
      ],
    },
    {
      id: 24,
      question: `Joseph Smith fue el fundador de cuál religion?`,
      answers: [
        ["Budismo", false],
        ["Cristianismo", false],
        ["Hinduismo", false],
        ["Mormonismo", true],
      ],
    },
    {
      id: 25,
      question: `Paul McCartney siempre ha utilizado su segundo nombre, cuál es su verdadero primer nombre?`,
      answers: [
        ["James", true],
        ["John", false],
        ["Jack", false],
        ["Phil", false],
      ],
    },
    {
      id: 26,
      question: `Cuál de los siguientes artistas no es original de Francia?`,
      answers: [
        ["Daft Punk", false],
        ["The Chemical Brothers", true],
        ["Zaz", false],
        ["Justice", false],
      ],
    },
    {
      id: 27,
      question: `El platillo Fugu, esta preparado con que familia de peces?`,
      answers: [
        ["Róbalo", false],
        ["Salmón", false],
        ["Pez globo", true],
        ["Caballa", false],
      ],
    },
    {
      id: 28,
      question: `Cuál es el nombre de la primer película de "Star Wars" por orden de lanzamiento?`,
      answers: [
        ["The Phantom Menace", false],
        ["The Force Awakes", false],
        ["Revenge of the Sith", false],
        ["A New Hope", true],
      ],
    },
    {
      id: 29,
      question: `Un minotauro es mitad humano y mitad qué?`,
      answers: [
        ["Toro", true],
        ["Vaca", false],
        ["Caballo", false],
        ["Águila", false],
      ],
    },
    {
      id: 30,
      question: `Hel era la hija de que figura nórdica mitológica?`,
      answers: [
        ["Thor", false],
        ["Loki", true],
        ["Balder", false],
        ["Odin", false],
      ],
    },
    {
      id: 31,
      question: `Cuál es el nombre del primer video subido a  YouTube?`,
      answers: [
        ["Tribute 2005", false],
        ["Carrie rides a truck", false],
        ["Me at the zoo", true],
        ["Her new puppy from great grandpa vern", false],
      ],
    },
    {
      id: 32,
      question: `De qué esta hecho el cuerno de un rinoceronte?`,
      answers: [
        ["Hueso", false],
        ["Marfil", false],
        ["Piel", false],
        ["Queratina", true],
      ],
    },
    {
      id: 33,
      question: `Cuál es el nombre de este Saiyajin?`,
      image: vegeta,
      answers: [
        ["Vegeta", true],
        ["Broly", false],
        ["Goku", false],
        ["Gohan", false],
      ],
    },
    {
      id: 34,
      question: `Cuál era el otro nombre sugerido para la película de 1985, "Back to the Future"?`,
      answers: [
        ["Hill Valley Time Travelers", false],
        ["Spaceman From Pluto", true],
        ["The Lucky Man", false],
        ["The Time Travelers", false],
      ],
    },
    {
      id: 35,
      question: `En qué año sucedió el terremoto y tsunami en el océano Índico?`,
      answers: [
        ["2014", false],
        ["2009", false],
        ["2004", true],
        ["1999", false],
      ],
    },
    {
      id: 36,
      question: `Que civilización americana es el origen de la creencia que el mundo acabaría el 21 de diciembre de 2012?`,
      answers: [
        ["Los Aztecas", false],
        ["Los Incas", false],
        ["Los Navajos", false],
        ["Los Mayas", true],
      ],
    },
    {
      id: 37,
      question: `Quién patentó una máquina de vapor que producía un movimiento rotatorio continuo?`,
      answers: [
        ["James Watt", true],
        ["Alessandro Volta", false],
        ["Nikola Tesla", false],
        ["Albert Einstein", false],
      ],
    },
    {
      id: 38,
      question: `Cuál de los siguientes países fue el primero en enviar un objeto al espacio?`,
      answers: [
        ["USA", false],
        ["Alemania", true],
        ["Rusia", false],
        ["China", false],
      ],
    },
    {
      id: 39,
      question: `Cuál es el nombre de la actriz que interpretaba a Rachel Green en la comedia "Friends"`,
      answers: [
        ["Courteney Cox", false],
        ["Angelina Jolie", false],
        ["Jeniffer Aniston", true],
        ["Lisa Kudrow", false],
      ],
    },
  ],
  //ARRAY 5--------------------------------------
  [
    {
      id: 0,
      question: `Cuál es la palabra alemana para "cuchara"?`,
      answers: [
        ["Gabel", false],
        ["Löffel", true],
        ["Brötchen", false],
        ["Messer", false],
      ],
    },
    {
      id: 1,
      question: `Este tipo de escritura pertenece a este lenguaje...`,
      image: korean,
      answers: [
        ["Chino", false],
        ["Japones", false],
        ["Koreano", true],
        ["Tailandés", false],
      ],
    },
    {
      id: 2,
      question: `Quién enseño a Alejandro Magno?`,
      answers: [
        ["Rey Philip", false],
        ["Sócrates", false],
        ["Platón", false],
        ["Aristóteles", true],
      ],
    },
    {
      id: 3,
      question: `Quién es el villano en la película "Nightmare on Elm Street"?`,
      answers: [
        ["Freddy Krueger", true],
        ["Jason", false],
        ["Michael Myers", false],
        ["Chucky", false],
      ],
    },
    {
      id: 4,
      question: `Cuál es el título completo del Primer Ministro del Reino Unido ?`,
      answers: [
        ["Duque de Cambridge", false],
        ["Primer Lord del Tesoro", true],
        ["La Oposición Leal de Su Majestad", false],
        ["Gerente de la Finca de la Corona", false],
      ],
    },
    {
      id: 5,
      question: `Cuál de estas compañias no fabrica automóviles?`,
      answers: [
        ["Nissan", false],
        ["GMC", false],
        ["Ducati", true],
        ["Fiat", false],
      ],
    },
    {
      id: 6,
      question: `Quién compuso la música del ballet "El Lago de los Cisnes"?`,
      answers: [
        ["Mikhail Azanchevsky", false],
        ["Nikolai Artsybushev ", false],
        ["Vyacheslav Artyomov ", false],
        ["Pyotr Ilyich Tchaikovsky", true],
      ],
    },
    {
      id: 7,
      question: `Cuál es la estrella signo de una persona nacida el día de San Valentín?`,
      answers: [
        ["Acuario", true],
        ["Capricornio", false],
        ["Piscis", false],
        ["Escorpio", false],
      ],
    },
    {
      id: 8,
      question: `Cuál es el sustantivo colectivo para ratas rats?`,
      answers: [
        ["Paquete", false],
        ["Travesura", true],
        ["Pandilla", false],
        ["Deriva", false],
      ],
    },
    {
      id: 9,
      question: `El Lago Titicaca está ubicado entre cuales dos países?`,
      answers: [
        ["Kenya y Uganda", false],
        ["Mexico y los Estados Unidos", false],
        ["Perú y Bolivia", true],
        ["India y Bangladesh", false],
      ],
    },
    {
      id: 10,
      question: `Esta bandera pertenece a cuál país?`,
      image: estonia,
      answers: [
        ["Estonia", true],
        ["Letonia", false],
        ["Lituania", false],
        ["Bielorrusia", false],
      ],
    },
    {
      id: 11,
      question: `Quién descubrió la Penicilina?`,
      answers: [
        ["Marie Curie", false],
        ["Alexander Flemming", true],
        ["Alfred Nobel", false],
        ["Louis Pasteur", false],
      ],
    },
    {
      id: 12,
      question: `Cuál es el nombre científico para humanos de la modernidad?`,
      answers: [
        ["Homo Neanderthalensis", false],
        ["Homo Erectus", false],
        ["Homo Sapiens", true],
        ["Homo Ergaster", false],
      ],
    },
    {
      id: 13,
      question: `Con cuál país Austria no tiene fronteras?`,
      answers: [
        ["Eslovenia", false],
        ["Suiza", false],
        ["Eslovakia", false],
        ["Francia", true],
      ],
    },
    {
      id: 14,
      question: `Cuantos huesos tiene el cuerpo humano?`,
      answers: [
        ["206", true],
        ["209", false],
        ["203", false],
        ["201", false],
      ],
    },
    {
      id: 15,
      question: `Cuantos libros de Harry Potter hay?`,
      answers: [
        ["8", false],
        ["7", true],
        ["6", false],
        ["9", false],
      ],
    },
    {
      id: 16,
      question: `Que significa la sigla de zona horaria GMT?`,
      answers: [
        ["General Median Time", false],
        ["Global Meridian Time", false],
        ["Greenwich Mean Time", true],
        ["Glasgow Man Time", false],
      ],
    },
    {
      id: 17,
      question: `Qué actor interpretó a Obi-Wan Kenobi en Star Wars Episodios I-III?`,
      answers: [
        ["Mark Hamill", false],
        ["Hayden Christensen", false],
        ["Liam Neeson", false],
        ["Ewan McGregor", true],
      ],
    },
    {
      id: 18,
      question: `Cuál de estos países africanos tiene al "español" como idioma oficial?`,
      answers: [
        ["Guinea Equatorial", true],
        ["Camerún", false],
        ["Guinea", false],
        ["Angola", false],
      ],
    },
    {
      id: 19,
      question: `Que misión Apollo fue la primera en alunizar en la Luna?`,
      answers: [
        ["Apolo 13", false],
        ["Apolo 11", true],
        ["Apolo 9", false],
        ["Apolo 10", false],
      ],
    },
    {
      id: 20,
      question: `Cuál es el animal terrestre más rapido del mundo?`,
      answers: [
        ["Antílope Berrendoe", false],
        ["Gacela de Thomson", false],
        ["Guepardo", true],
        ["León", false],
      ],
    },
    {
      id: 21,
      question: `Cuantas piernas tienen las mariposas?`,
      answers: [
        ["0", false],
        ["2", false],
        ["4", false],
        ["6", true],
      ],
    },
    {
      id: 22,
      question: `Quién pintó la Capilla Sixtina?`,
      answers: [
        ["Michelangelo", true],
        ["Leonardo da Vinci", false],
        ["Raphael", false],
        ["Pablo Picasso", false],
      ],
    },
    {
      id: 23,
      question: `Quién diseño el logo de Chupa Chups?`,
      answers: [
        ["Andy Warhol", false],
        ["Salvador Dali", true],
        ["Pablo Picasso", false],
        ["Jean-Michel Basquiat", false],
      ],
    },
    {
      id: 24,
      question: `Cuál no es un instrumento musical de viento?`,
      answers: [
        ["Oboe", false],
        ["Didgeridoo ", false],
        ["Viola", true],
        ["Trombón", false],
      ],
    },
    {
      id: 25,
      question: `Cuál es la sustancia principal adictiva del tabaco?`,
      answers: [
        ["Efedrina", false],
        ["Catinona", false],
        ["Glaucina", false],
        ["Nicotina", true],
      ],
    },
    {
      id: 26,
      question: `Cuál corredor de Formula 1 tiene el mismo record de 7 veces campeón como Michael Schumacher, ?`,
      answers: [
        ["Lewis Hamilton", true],
        ["Ayrton Senna", false],
        ["Juan Manuel Fangio", false],
        ["Fernando Alonso", false],
      ],
    },
    {
      id: 27,
      question: `Cuantas piezas de diferentes formas aparecen en el juego Tetris?`,
      answers: [
        ["5", false],
        ["7", true],
        ["6", false],
        ["9", false],
      ],
    },
    {
      id: 28,
      question: `Cuál es el nombre de esta pintura?`,
      image: girl,
      answers: [
        ["El Nacimiento de Venus", false],
        ["El Beso", false],
        ["La Joven de la Perla", true],
        ["Las Meninas", false],
      ],
    },
    {
      id: 29,
      question: `Cuál es el alter-ego del personaje de comics de DC, Superman?`,
      answers: [
        ["John Jones", false],
        ["Bruce Wayne", false],
        ["Arthur Curry", false],
        ["Clark Kent", true],
      ],
    },
    {
      id: 30,
      question: `Cuantos años duró realmente la guerra de los 100 años?`,
      answers: [
        ["116", true],
        ["95", false],
        ["100", false],
        ["101", false],
      ],
    },
    {
      id: 31,
      question: `El material de ficción, Kryptonita, es la debilidad de cuál superhéroe?`,
      answers: [
        ["Batman", false],
        ["Superman", true],
        ["Aquaman", false],
        ["Spiderman", false],
      ],
    },
    {
      id: 32,
      question: `Cuál de los siguientes actores no trabaja en la película "Los Sospechosos de Siempre"?`,
      answers: [
        ["Kevin Spacey", false],
        ["Benicio Del Toro", false],
        ["Richard Gere", true],
        ["Gabriel Byrne", false],
      ],
    },
    {
      id: 33,
      question: `Cuál es el nombre de este popular manga/anime?`,
      image: sailor,
      answers: [
        ["Cardcaptor Sakura", false],
        ["Ranma 1/2", false],
        ["Inuyasha", false],
        ["Sailor Moon", true],
      ],
    },
    {
      id: 34,
      question: `Cuál es la capital de España?`,
      answers: [
        ["Madrid", true],
        ["A Coruña", false],
        ["Sevilla", false],
        ["Barcelona", false],
      ],
    },
    {
      id: 35,
      question: `El Hipogrifo, es una criatura magica con la media parte frontal de un águila y la parte dorsal de qué?`,
      answers: [
        ["Dragón", false],
        ["Caballo", true],
        ["Tigre", false],
        ["León", false],
      ],
    },
    {
      id: 36,
      question: `Esta película contiente la frase, "I love the smell of napalm in the morning"`,
      answers: [
        ["Full Metal Jacket", false],
        ["The Deer Hunter", false],
        ["Apocalypse Now", true],
        ["Platoon", false],
      ],
    },
    {
      id: 37,
      question: `".at" es el dominio de internet de qué país?`,
      answers: [
        ["Argentina", false],
        ["Angola", false],
        ["Australia", false],
        ["Austria", true],
      ],
    },
    {
      id: 38,
      question: `Cuál es el número máximo de estrellas Michelin que un restaurante puede recibir?`,
      answers: [
        ["Tres", true],
        ["Cuatro", false],
        ["Cinco", false],
        ["Seis", false],
      ],
    },
    {
      id: 39,
      question: `Por definición, dónde vive un animal abisopelágico?`,
      answers: [
        ["En el desierto", false],
        ["En el fondo del océano", true],
        ["En la cima de una montaña", false],
        ["Dentro de un árbol", false],
      ],
    },
  ],
];

export default bigDataSp;
