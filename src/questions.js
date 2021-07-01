import einstein from "./images/einstein.jpg";
import messi from "./images/messi.jpg";
import brad from "./images/brad.jpg";
import liberty from "./images/liberty.jpg";
import stones from "./images/stones.jpg";
import spears from "./images/spears.jpg";
import buddha from "./images/buddha.jpg";
import platypus from "./images/platypus.jpg";
import tulips from "./images/tulips.jpg";
import kazakhstan from "./images/kazakhstan.png";
import meryl from "./images/meryl.jpg";
import quixote from "./images/quixote.png";
import cristiano from "./images/cristiano.jpg";
import hercules from "./images/hercules.jpg";
import link from "./images/link.png";
import ibai from "./images/ibai.jpg";
import johnny from "./images/johnny.jpg";
import giza from "./images/giza.jpg";
import korean from "./images/korean.png";
import estonia from "./images/estonia.png";
import girl from "./images/girl.jpg";
import vegeta from "./images/vegeta.jpg";
import sailor from "./images/sailor.jpg";

const bigData = [
  //ARRAY 0--------------------------------------
  [
    {
      id: 0,
      question: "What is π?",
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
      question: "Who was this man?",
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
      question: "The first news paper in the world was started by?",
      answers: [
        ["Japan", false],
        ["China", true],
        ["England", false],
        ["India", false],
      ],
    },

    {
      id: 2,
      question: "When did the World War 1 started?",
      answers: [
        ["27/06/1913", false],
        ["11/11/1915", false],
        ["09/08/1915", false],
        ["28/07/1914", true],
      ],
    },
    {
      id: 3,
      question: "Which is the longest river in Africa?",
      answers: [
        ["Congo river", false],
        ["Nile river", true],
        ["Zambesi river", false],
        ["Kasai river", false],
      ],
    },
    {
      id: 4,
      question: `Which movie won "Best Film" in 2018 Oscars?`,
      answers: [
        ["The shape of water", true],
        ["Moonlight", false],
        ["Green book", false],
        ["A Star is born", false],
      ],
    },
    {
      id: 5,
      question: `Who painted "The Starry Night" in 1889?`,
      answers: [
        ["Piet Mondrian", false],
        ["Willem de Kooning", false],
        ["Vincent van Gogh", true],
        ["Hendrick ter Brugghen", false],
      ],
    },
    {
      id: 6,
      question: `In what year did the Wall Street Crash take place?`,
      answers: [
        ["1925", false],
        ["1929", true],
        ["1932", false],
        ["1927", false],
      ],
    },
    {
      id: 7,
      question: `What is the hottest planet in the Solar System?`,
      answers: [
        ["Venus", true],
        ["Mars", false],
        ["Jupiter", false],
        ["Mercury", false],
      ],
    },
    {
      id: 8,
      question: `What geometric shape is generally used for stop signs?`,
      answers: [
        ["Triangle", false],
        ["Hexagon", false],
        ["Circle", false],
        ["Octagon", true],
      ],
    },
    {
      id: 9,
      question: `Which of these movies did Jeff Bridges not star in?`,
      answers: [
        ["Iron Man", false],
        ["The Big Lebowsky", false],
        ["Reservoir Dogs", true],
        ["Tron: Legacy", false],
      ],
    },
    {
      id: 10,
      question: `For which national football team does he plays?`,
      image: messi,
      answers: [
        ["Spain", false],
        ["Argentina", true],
        ["Chile", false],
        ["Uruguay", false],
      ],
    },
    {
      id: 11,
      question: `What is the name of the famous plumber's brother, star of videogames?`,
      answers: [
        ["Luigi", true],
        ["Wario", false],
        ["Mario", false],
        ["Yoshi", false],
      ],
    },
    {
      id: 12,
      question: `The greek god Poseidon was the god of what?`,
      answers: [
        ["Fire", false],
        ["War", false],
        ["Sun", false],
        ["The Sea", true],
      ],
    },
    {
      id: 13,
      question: `Kanye West at 2009 VMA Awards interrupted which celebrity?`,
      answers: [
        ["Madonna", false],
        ["Beyonce", false],
        ["Taylor Swift", true],
        ["Kelly Clarkson", false],
      ],
    },
    {
      id: 14,
      question: `What was the first sport to have been played on the moon?`,
      answers: [
        ["Soccer", false],
        ["Golf", true],
        ["Tennis", false],
        ["Football", false],
      ],
    },
    {
      id: 15,
      question: `Which Nirvana album had a naked baby on the cover?`,
      answers: [
        ["Nevermind", true],
        ["Bleach", false],
        ["In Utero", false],
        ["Incesticide", false],
      ],
    },
    {
      id: 16,
      question: `In the movie Gremlins, after what time of day should you not feed Mogwai?`,
      answers: [
        ["Evening", false],
        ["Midnight", true],
        ["Afternoon", false],
        ["Morning", false],
      ],
    },
    {
      id: 17,
      question: `In 1939, Britain and France declared war on Germany after it invaded which country?`,
      answers: [
        ["Czechoslovakia", false],
        ["Austria", false],
        ["Poland", true],
        ["Hungary", false],
      ],
    },
    {
      id: 18,
      question: `What is the name of this actor?`,
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
      question: `How many sides does a trapezium have?`,
      answers: [
        ["4", true],
        ["3", false],
        ["5", false],
        ["6", false],
      ],
    },
    {
      id: 20,
      question: `Which country will host the 2022 FIFA World Cup?`,
      answers: [
        ["Japan", false],
        ["Qatar", true],
        ["Russia", false],
        ["South Africa", false],
      ],
    },
    {
      id: 21,
      question: `What breed of dog was Marley in the film "Marley & Me"(2008)?`,
      answers: [
        ["Dalmatian", false],
        ["Golden Retriever", false],
        ["Labrador Retriever", true],
        ["Shiba Inu", false],
      ],
    },
    {
      id: 22,
      question: `Who wrote "Harry Potter"?`,
      answers: [
        ["J.R.R. Tolkien", false],
        ["Terry Pratchett", false],
        ["Daniel Radcliffe", false],
        ["J.K. Rowling", true],
      ],
    },
    {
      id: 23,
      question: `Who starred as Bruce Wayne/Batman in Tim Burton's 1989 movie "Batman"?`,
      answers: [
        ["Michael Keaton", true],
        ["George Clooney", false],
        ["Christian Bale", false],
        ["Val Kilmer", false],
      ],
    },
    {
      id: 24,
      question: `In golf, what name is given to a hole score of two under par?`,
      answers: [
        ["Albatross", false],
        ["Eagle", true],
        ["Birdie", false],
        ["Bogey", false],
      ],
    },
    {
      id: 25,
      question: `Who starred in the film 1973 movie "Enter The Dragon"?`,
      answers: [
        ["Jet Li", false],
        ["Jackie Chan", false],
        ["Bruce Lee", true],
        ["Donnie Yen", false],
      ],
    },
    {
      id: 26,
      question: `Who in Greek mythology, who led the Argonauts in search of the Golden Fleece?`,
      answers: [
        ["Hercules", false],
        ["Odysseus", false],
        ["Daedalus", false],
        ["Jason", true],
      ],
    },
    {
      id: 27,
      question: `Which American president appears on a one dollar bill?`,
      answers: [
        ["George Washington", true],
        ["Benjamin Franklin", false],
        ["Thomas Jefferson", false],
        ["Abraham Lincoln", false],
      ],
    },
    {
      id: 28,
      question: `In which American city is located this famous landmark?`,
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
      question: `Which country has hosted the 2006 FIFA World Cup?`,
      answers: [
        ["South Africa", false],
        ["Italy", false],
        ["Germany", true],
        ["Brazil", false],
      ],
    },
    {
      id: 30,
      question: `What is the French word for "hat"?`,
      answers: [
        ["Casquette", false],
        ["Bonnet", false],
        ["Casque", false],
        ["Chapeau", true],
      ],
    },
    {
      id: 31,
      question: `The human heart has how many chambers?`,
      answers: [
        ["4", true],
        ["2", false],
        ["3", false],
        ["6", false],
      ],
    },
    {
      id: 32,
      question: `Who created the "Metal Gear" Series?`,
      answers: [
        ["Shigeru Miyamoto", false],
        ["Hideo Kojima", true],
        ["Hiroshi Yamauchi", false],
        ["Gunpei Yokoi", false],
      ],
    },
    {
      id: 33,
      question: `What is the Zodiac symbol for Gemini?`,
      answers: [
        ["Fish", false],
        ["Maiden", false],
        ["Twins", true],
        ["Scales", false],
      ],
    },
    {
      id: 34,
      question: `The Nike apparel and footwear brand takes it's name from the Greek goddess of what?`,
      answers: [
        ["Strength", false],
        ["Courage", false],
        ["Honor", false],
        ["Victory", true],
      ],
    },
    {
      id: 35,
      question: `Foie gras is a French delicacy typically made from what part of a duck or goose?`,
      answers: [
        ["Liver", true],
        ["Stomach", false],
        ["Heart", false],
        ["Intestines", false],
      ],
    },
    {
      id: 36,
      question: `What is the german word for taking pleasure in others pain?`,
      answers: [
        ["Verkehrsmittel", false],
        ["Schadenfreude", true],
        ["Feldschlösschen", false],
        ["Einkaufsmöglichkeiten", false],
      ],
    },
    {
      id: 37,
      question: `What is the name of this british band?`,
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
      question: `Which is the mobile OS held the largest market share in 2012?`,
      answers: [
        ["Symbian", false],
        ["Android", false],
        ["BlackBerry", false],
        ["iOS", true],
      ],
    },
    {
      id: 39,
      question: `In computing, what does LAN stand for?`,
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
      question: `What country is the second largest in the world by area?`,
      answers: [
        ["Canada", true],
        ["Russia", false],
        ["China", false],
        ["United States of America", false],
      ],
    },
    {
      id: 1,
      question: `The 2016 Disney animated film "Moana" is based on which culture?`,
      answers: [
        ["Nordic", false],
        ["Polynesian", true],
        ["Native American", false],
        ["Japanese", false],
      ],
    },
    {
      id: 2,
      question: `What is the unit of electrical capacitance?`,
      answers: [
        ["Gauss", false],
        ["Watt", false],
        ["Farad", true],
        ["Henry", false],
      ],
    },
    {
      id: 3,
      question: `In South Park, what is Stan's surname?`,
      answers: [
        ["Broflovski", false],
        ["Tweak", false],
        ["Cartman", false],
        ["Marsh", true],
      ],
    },
    {
      id: 4,
      question: `Which of these bones is hardest to break?`,
      answers: [
        ["Femur", true],
        ["Cranium", false],
        ["Humerus", false],
        ["Tibia", false],
      ],
    },
    {
      id: 5,
      question: `Hippocampus is the Latin name for which marine creature?`,
      answers: [
        ["Dolphin", false],
        ["Seahorse", true],
        ["Whale", false],
        ["Octopus", false],
      ],
    },
    {
      id: 6,
      question: `How many planets make up our Solar System?`,
      answers: [
        ["7", false],
        ["6", false],
        ["8", true],
        ["9", false],
      ],
    },
    {
      id: 7,
      question: `What is the name of this famous american singer?`,
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
      question: `Which of these colours is NOT featured in the logo for Google?`,
      answers: [
        ["Pink", true],
        ["Blue", false],
        ["Yellow", false],
        ["Green", false],
      ],
    },
    {
      id: 9,
      question: `Which of these characters is the mascot of the video game company SEGA?`,
      answers: [
        ["Mario Bros", false],
        ["Sonic the Hedgehog", true],
        ["Alex Kidd", false],
        ["Dinamite Headdy", false],
      ],
    },
    {
      id: 10,
      question: `Who was the author of the 1951 novel, "The Catcher in the Rye?`,
      answers: [
        ["Hunter Fox", false],
        ["F. Scott Fitzgerald", false],
        ["J. D. Salinger", true],
        ["William Golding", false],
      ],
    },
    {
      id: 11,
      question: `The greek god Hades was the god of what?`,
      answers: [
        ["War", false],
        ["Love", false],
        ["Fire", false],
        ["The Underworld", true],
      ],
    },
    {
      id: 12,
      question: `Which of the following sports is not part of the triathlon?`,
      answers: [
        ["Horse-riding", true],
        ["Cycling", false],
        ["Swimming", false],
        ["Running", false],
      ],
    },
    {
      id: 13,
      question: `The ancient Roman god of war was commonly known as which of the following?`,
      answers: [
        ["Jupiter", false],
        ["Mars", true],
        ["Ares", false],
        ["Juno", false],
      ],
    },
    {
      id: 14,
      question: `The body of the Egyptian Sphinx was based on which animal?`,
      answers: [
        ["Bull", false],
        ["Horse", false],
        ["Lion", true],
        ["Dog", false],
      ],
    },
    {
      id: 15,
      question: `Which is the longest bone in the human body?`,
      answers: [
        ["Fibula", false],
        ["Scapula", false],
        ["Ulna", false],
        ["Femur", true],
      ],
    },
    {
      id: 16,
      question: `This element, when overcome with extreme heat and pressure, creates diamonds.`,
      answers: [
        ["Carbon", true],
        ["Oxygen", false],
        ["Nitrogen", false],
        ["Hydrogen", false],
      ],
    },
    {
      id: 17,
      question: `Where is located the "Big Buddha"?`,
      image: buddha,
      answers: [
        ["Cambodia", false],
        ["Thailand", true],
        ["Indonesia", false],
        ["Vietnam", false],
      ],
    },
    {
      id: 18,
      question: `How many dots are on a single die?`,
      answers: [
        ["24", false],
        ["15", false],
        ["21", true],
        ["18", false],
      ],
    },
    {
      id: 19,
      question: `If you were to code software in this language you'd only be able to type "0" and "1".`,
      answers: [
        ["C++", false],
        ["JavaScript", false],
        ["Python", false],
        ["Binary", true],
      ],
    },
    {
      id: 20,
      question: `What country has a horizontal bicolor red and white flag?`,
      answers: [
        ["Monaco", true],
        ["Bahrain", false],
        ["Malta", false],
        ["Liechenstein", false],
      ],
    },
    {
      id: 21,
      question: `What is the collective noun for a group of crows?`,
      answers: [
        ["Pack", false],
        ["Murder", true],
        ["Gaggle", false],
        ["Herd", false],
      ],
    },
    {
      id: 22,
      question: `Which of these films is NOT set in Los Angeles?`,
      answers: [
        ["Blade Runner", false],
        ["The Terminator", false],
        ["RoboCop", true],
        ["Predator 2", false],
      ],
    },
    {
      id: 23,
      question: `Rhinoplasty is a surgical procedure on what part of the human body?`,
      answers: [
        ["Ears", false],
        ["Chin", false],
        ["Neck", false],
        ["Nose", true],
      ],
    },
    {
      id: 24,
      question: `What animal is in this picture?`,
      image: platypus,
      answers: [
        ["Platypus", true],
        ["Armadillo", false],
        ["Okapi", false],
        ["Tapir", false],
      ],
    },
    {
      id: 25,
      question: `What is the capital of Denmark?`,
      answers: [
        ["Oslo", false],
        ["Copenhagen", true],
        ["Stockholm", false],
        ["Aalborg", false],
      ],
    },
    {
      id: 26,
      question: `What is the name of New Zealand's indigenous people?`,
      answers: [
        ["Samoans", false],
        ["Polynesians", false],
        ["Maori", true],
        ["Vikings", false],
      ],
    },
    {
      id: 27,
      question: `What mythology did the god "Apollo" come from?`,
      answers: [
        ["Greek, Roman and Norse", false],
        ["Roman and Spanish", false],
        ["Greek and Chinese", false],
        ["Greek and Roman", true],
      ],
    },
    {
      id: 28,
      question: `In 1453, which important city fell?`,
      answers: [
        ["Constantinople", true],
        ["Rome", false],
        ["Athens", false],
        ["Hamburg", false],
      ],
    },
    {
      id: 29,
      question: `What mytological creatures have women's faces and vultures bodies?`,
      answers: [
        ["Mermaids", false],
        ["Harpies", true],
        ["Nymph", false],
        ["Lilith", false],
      ],
    },
    {
      id: 30,
      question: `What is the name of Manchester United's home stadium?`,
      answers: [
        ["Anfield", false],
        ["City of Manchester Stadium", false],
        ["Old Trafford", true],
        ["St James Park", false],
      ],
    },
    {
      id: 31,
      question: `What is the largest animal currently on Earth?`,
      answers: [
        ["Orca", false],
        ["Colossal Squid", false],
        ["Giraffe", false],
        ["Blue Whale", true],
      ],
    },
    {
      id: 32,
      question: `What is the first book of the Old Testament?`,
      answers: [
        ["Genesis", true],
        ["Exodus", false],
        ["Leviticus", false],
        ["Deuteronomy", false],
      ],
    },
    {
      id: 33,
      question: `Which of the following Pacific Islander countries is ruled by a constitutional monarchy?`,
      answers: [
        ["Palau", false],
        ["Tonga", true],
        ["Fiji", false],
        ["Kiribati", false],
      ],
    },
    {
      id: 34,
      question: `The Space Needle is located in which city?`,
      answers: [
        ["Toronto", false],
        ["Vancouver", false],
        ["Seattle", true],
        ["St Louis", false],
      ],
    },
    {
      id: 35,
      question: `Aubrey Graham is better known as`,
      answers: [
        ["Lil Wayne", false],
        ["Travis Scott", false],
        ["2 Chainz", false],
        ["Drake", true],
      ],
    },
    {
      id: 36,
      question: `What is the common name of this flowers?`,
      image: tulips,
      answers: [
        ["Tulips", true],
        ["Roses", false],
        ["Orchids", false],
        ["Daisies", false],
      ],
    },
    {
      id: 37,
      question: `What zodiac sign is represented by a pair of scales?`,
      answers: [
        ["Aries", false],
        ["Libra", true],
        ["Capricorn", false],
        ["Sagittarius", false],
      ],
    },
    {
      id: 38,
      question: `Who is often called "the Maestro" in the men's tennis circuit?`,
      answers: [
        ["Rafael Nadal", false],
        ["Novak Djokovic", false],
        ["Roger Federer", true],
        ["Pete Sampras", false],
      ],
    },
    {
      id: 39,
      question: `Greenland is a part of which kingdom?`,
      answers: [
        ["Norway", false],
        ["Sweden", false],
        ["United Kingdom", false],
        ["Denmark", true],
      ],
    },
  ],
  //ARRAY 3--------------------------------------
  [
    {
      id: 0,
      question: `Who played Agent Fox Mulder in the TV sci-fi drama "The X-Files"?`,
      answers: [
        ["David Duchovny", true],
        ["Mitch Pileggi", false],
        ["Robert Patrick", false],
        ["Luke Perry", false],
      ],
    },
    {
      id: 1,
      question: `Which Country's flag is this?`,
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
      question: `Who painted the Mona Lisa?`,
      answers: [
        ["Vincent Van Gogh", false],
        ["Pablo Picasso", false],
        ["Leonardo da Vinci", true],
        ["Claude Monet", false],
      ],
    },
    {
      id: 3,
      question: `The idea of Socialism was articulated and advanced by whom?`,
      answers: [
        ["Vladimir Lenin", false],
        ["Joseph Stalin", false],
        ["Vladimir Putin", false],
        ["Karl Marx", true],
      ],
    },
    {
      id: 4,
      question: `What does GHz stand for?`,
      answers: [
        ["Gigahertz", true],
        ["Gigahotz", false],
        ["Gigahetz", false],
        ["Gigahatz", false],
      ],
    },
    {
      id: 5,
      question: `Who is this actress?`,
      image: meryl,
      answers: [
        ["Meryl Streep", true],
        ["Susan Sarandon", false],
        ["Diane Keaton", false],
        ["Emma Thompson", false],
      ],
    },
    {
      id: 6,
      question: `What is the capital of Jamaica?`,
      answers: [
        ["San Juan", false],
        ["Port-au-Prince", false],
        ["Kingston", true],
        ["Bridgetown", false],
      ],
    },
    {
      id: 7,
      question: `Which modern day country is the region that was known as Phrygia in ancient times?`,
      answers: [
        ["Syria", false],
        ["Greece", false],
        ["Egypt", false],
        ["Turkey", true],
      ],
    },
    {
      id: 8,
      question: `What is the oldest Disney film?`,
      answers: [
        ["Snow White and the Seven Dwarfs", true],
        ["Pinocchio", false],
        ["Fantasia", false],
        ["Dumbo", false],
      ],
    },
    {
      id: 9,
      question: `The numbering system with a radix of 16 is more commonly referred to as `,
      answers: [
        ["Duodecimal", false],
        ["Hexidecimal", true],
        ["Octal", false],
        ["Binary", false],
      ],
    },
    {
      id: 10,
      question: `Where would you find the "Spanish Steps"?`,
      answers: [
        ["Barcelona, Spain", false],
        ["London, England", false],
        ["Rome, Italy", true],
        ["Berlin, Germany", false],
      ],
    },
    {
      id: 11,
      question: `Who directed "E.T. the Extra-Terrestrial" (1982)?`,
      answers: [
        ["Stanley Kubrick", false],
        ["Tim Burton", false],
        ["James Cameron", false],
        ["Steven Spielberg", true],
      ],
    },
    {
      id: 12,
      question: `The Italian automaker Lamborghini uses what animal as its logo?`,
      answers: [
        ["Bull", true],
        ["Tiger", false],
        ["Horse", false],
        ["Snake", false],
      ],
    },
    {
      id: 13,
      question: `The term "battery" to describe an electrical storage device was coined by?`,
      answers: [
        ["Nikola Tesla", false],
        ["Benjamin Franklin", true],
        ["Luigi Galvani", false],
        ["Alessandro Volta", false],
      ],
    },
    {
      id: 14,
      question: `What is the capital of Switzerland?`,
      answers: [
        ["Zürich", false],
        ["Basel", false],
        ["Bern", true],
        ["Geneva", false],
      ],
    },
    {
      id: 15,
      question: `Who are this iconic spanish couple?`,
      image: quixote,
      answers: [
        ["Gerard piqué and Carles Puyol ", false],
        ["El Cid Campeador and Diego Laínez", false],
        ["Santiago Segura and Javier Cámara", false],
        ["Don Quixote and Sancho Panza", true],
      ],
    },
    {
      id: 16,
      question: `What is the real name of "Bono", singer of u2?`,
      answers: [
        ["Mark Ronson", false],
        ["Paul David Hewson", true],
        ["Lonnie Donegan", false],
        ["Calum Scott", false],
      ],
    },
    {
      id: 17,
      question: `What is the smallest country in the world?`,
      answers: [
        ["Monaco", false],
        ["Malta", false],
        ["Maldives", false],
        ["Vatican City", true],
      ],
    },
    {
      id: 18,
      question: `What is the shape of the toy invented by Hungarian professor Ernő Rubik?`,
      answers: [
        ["Sphere", false],
        ["Cube", true],
        ["Cylinder", false],
        ["Pyramid", false],
      ],
    },
    {
      id: 19,
      question: `What does CPU stand for?`,
      answers: [
        ["Central Process Unit", false],
        ["Computer Personal Unit", false],
        ["Central Processing Unit", true],
        ["Central Processor Unit", false],
      ],
    },
    {
      id: 20,
      question: `How many stars are featured on New Zealand's flag?`,
      answers: [
        ["5", false],
        ["0", false],
        ["4", true],
        ["3", false],
      ],
    },
    {
      id: 21,
      question: `What do you call a baby bat?`,
      answers: [
        ["Cub", false],
        ["Chick", false],
        ["Kid", false],
        ["Pup", true],
      ],
    },
    {
      id: 22,
      question: `What is the capital of Indonesia?`,
      answers: [
        ["Bandung", false],
        ["Jakarta", true],
        ["Medan", false],
        ["Palembang", false],
      ],
    },
    {
      id: 23,
      question: `What does a funambulist walk on?`,
      answers: [
        ["A Tight Rope", true],
        ["Broken Glass", false],
        ["Balls", false],
        ["The Moon", false],
      ],
    },
    {
      id: 24,
      question: `How many sides does a heptagon have?`,
      answers: [
        ["7", true],
        ["8", false],
        ["5", false],
        ["6", false],
      ],
    },
    {
      id: 25,
      question: `What does "hippopotamus" mean and in what langauge?`,
      answers: [
        ["Fat Pig (Greek)", false],
        ["River Horse (Greek)", true],
        ["Fat Pig (Latin)", false],
        ["River Horse (Latin)", false],
      ],
    },
    {
      id: 26,
      question: `Earth is located in which galaxy?`,
      answers: [
        ["The Black Hole", false],
        ["The Galaxy Note", false],
        ["The Mars Galaxy", false],
        ["The Milky Way Galaxy", true],
      ],
    },
    {
      id: 27,
      question: `For which national football team does he plays?`,
      image: cristiano,
      answers: [
        ["Portugal", true],
        ["Spain", false],
        ["Italy", false],
        ["France", false],
      ],
    },
    {
      id: 28,
      question: `In what year did Neil Armstrong and Buzz Aldrin land on the moon?`,
      answers: [
        ["1967", false],
        ["1969", true],
        ["1973", false],
        ["1965", false],
      ],
    },
    {
      id: 29,
      question: `Who was the Roman god of fire?`,
      answers: [
        ["Apollo", false],
        ["Mercury", false],
        ["Vulcan", true],
        ["Jupiter", false],
      ],
    },
    {
      id: 30,
      question: `When was Joan of Arc killed?`,
      answers: [
        ["April 29, 1432", false],
        ["December 25, 1429", false],
        ["June 13, 1435", false],
        ["May 30, 1431", true],
      ],
    },
    {
      id: 31,
      question: `Which country has three capital cities?`,
      answers: [
        ["South Africa", true],
        ["China", false],
        ["Somalia", false],
        ["United Kingdom", false],
      ],
    },
    {
      id: 32,
      question: `From which Disney movie are these characters from?`,
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
      question: `How many rivers are in Saudi Arabia?`,
      answers: [
        ["1", false],
        ["3", false],
        ["0", true],
        ["2", false],
      ],
    },
    {
      id: 34,
      question: `What mountain range lines the border between Spain and France?`,
      answers: [
        ["Carpathians", false],
        ["Urals", false],
        ["Alps", false],
        ["Pyrenees", true],
      ],
    },
    {
      id: 35,
      question: `Which Russian author wrote the epic novel War and Peace?`,
      answers: [
        ["Leo Tolstoy", true],
        ["Alexander Pushkin", false],
        ["Vladimir Nabokov", false],
        ["Fyodor Dostoyevsky", false],
      ],
    },
    {
      id: 36,
      question: `What was the African nation of Zimbabwe formerly known as?`,
      answers: [
        ["Mozambique", false],
        ["Rhodesia", true],
        ["Zambia", false],
        ["Bulawayo", false],
      ],
    },
    {
      id: 37,
      question: `What event marked the start of World War II?`,
      answers: [
        ["Invasion of Russia (1942)", false],
        ["Invasion of Normandy (1944)", false],
        ["Invasion of Poland (1939)", true],
        ["Battle of Britain (1940)", false],
      ],
    },
    {
      id: 38,
      question: `What is the colour of unoxidized blood?`,
      answers: [
        ["Purple", false],
        ["Blue", false],
        ["Green", false],
        ["Red", true],
      ],
    },
    {
      id: 39,
      question: `What was the first living creature in space?`,
      answers: [
        ["Fruit flies", true],
        ["Dog", false],
        ["Monkey", false],
        ["Mouse", false],
      ],
    },
  ],
  //ARRAY 4--------------------------------------
  [
    {
      id: 0,
      question: `What's the name of Batman's parents?`,
      answers: [
        ["Todd & Mira", false],
        ["Jason & Sarah", false],
        ["Thomas & Martha", true],
        ["Joey & Jackie", false],
      ],
    },
    {
      id: 1,
      question: `In the 1984 movie "The Terminator", what model number is the Terminator portrayed by Arnold Schwarzenegger?`,
      answers: [
        ["T-800", true],
        ["I-950", false],
        ["T-888", false],
        ["T-1000", false],
      ],
    },
    {
      id: 2,
      question: `Neptune's greek name was...`,
      answers: [
        ["Ares", false],
        ["Poseidon", true],
        ["Apollo", false],
        ["Zeus", false],
      ],
    },
    {
      id: 3,
      question: `The book "The Little Prince" was written by...`,
      answers: [
        ["Miguel de Cervantes Saavedra", false],
        ["Jane Austen", false],
        ["Antoine de Saint-Exupéry", true],
        ["F. Scott Fitzgerald", false],
      ],
    },
    {
      id: 4,
      question: `In what year was McDonald's founded?`,
      answers: [
        ["1923", false],
        ["1932", false],
        ["1967", false],
        ["1955", true],
      ],
    },
    {
      id: 5,
      question: `What is the name of this videogame's character?`,
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
      question: `What is the highest mountain in the world?`,
      answers: [
        ["Kangchenjunga", false],
        ["Mt. Everest", true],
        ["Kilimanjaro", false],
        ["Aconcagua", false],
      ],
    },
    {
      id: 7,
      question: `What is the capital city of New Zealand?`,
      answers: [
        ["Auckland", false],
        ["Melbourne", false],
        ["Wellington", true],
        ["Christchurch", false],
      ],
    },
    {
      id: 8,
      question: `Who plays "Bruce Wayne" in the 2008 movie "The Dark Knight"`,
      answers: [
        ["Michael Keaton", false],
        ["Michael Caine", false],
        ["Ben Affleck", false],
        ["Christian Bale", true],
      ],
    },
    {
      id: 9,
      question: `What is the scientific term for "taste"?`,
      answers: [
        ["Gustatory Perception", true],
        ["Olfaction", false],
        ["Auditory Perception", false],
        ["Somatosensation", false],
      ],
    },
    {
      id: 10,
      question: `What was Britney Spears' debut single?`,
      answers: [
        ["Oops!... I Did It Again", false],
        ["...Baby One More Time", true],
        ["Toxic", false],
        ["(You Drive Me) Crazy", false],
      ],
    },
    {
      id: 11,
      question: `What is the capital of Peru?`,
      answers: [
        ["Santiago", false],
        ["Montevideo", false],
        ["Lima", true],
        ["Medellín", false],
      ],
    },
    {
      id: 12,
      question: `The towns of Brugelette, Arlon and Ath are located in which country?`,
      answers: [
        ["Luxembourg", false],
        ["Andorra", false],
        ["France", false],
        ["Belgium", true],
      ],
    },
    {
      id: 13,
      question: `What continent is the country Lesotho in?`,
      answers: [
        ["Africa", true],
        ["Asia", false],
        ["South America", false],
        ["Europe", false],
      ],
    },
    {
      id: 14,
      question: `What is the name of this streamer?`,
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
      question: `Which of these is not an album released by The Beatles?`,
      answers: [
        ["Abbey Road", false],
        ["Magical Mystery Tour", false],
        ["The Wall", true],
        ["Revolver", false],
      ],
    },
    {
      id: 16,
      question: `What is the capital of Senegal?`,
      answers: [
        ["Nouakchott", false],
        ["Conakry", false],
        ["Monrovia", false],
        ["Dakar", true],
      ],
    },
    {
      id: 17,
      question: `where were the 2016 olympic games held?`,
      answers: [
        ["Río de Janeiro", true],
        ["Athens", false],
        ["London", false],
        ["Pekin", false],
      ],
    },
    {
      id: 18,
      question: `Which puzzle game was designed by a Russian programmer, featuring Russian buildings and music?`,
      answers: [
        ["Puzzled", false],
        ["Tetris", true],
        ["Jenga", false],
        ["Boulder Dash", false],
      ],
    },
    {
      id: 19,
      question: `What alcoholic drink is mainly made from juniper berries?`,
      answers: [
        ["Rum", false],
        ["Vodka", false],
        ["Gin", true],
        ["Tequila", false],
      ],
    },
    {
      id: 20,
      question: `What number does the Roman numeral "D" stand for?`,
      answers: [
        ["1000", false],
        ["100", false],
        ["50", false],
        ["500", true],
      ],
    },
    {
      id: 21,
      question: `What is the name of this animated character?`,
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
      question: `In which city is located this landmark?`,
      image: giza,
      answers: [
        ["Cairo", false],
        ["Giza city", true],
        ["Tanta", false],
        ["El Obour city", false],
      ],
    },
    {
      id: 23,
      question: `A carnivorous animal eats flesh, what does a nucivorous animal eat?`,
      answers: [
        ["Nothing", false],
        ["Fruit", false],
        ["Nuts", true],
        ["Seaweed", false],
      ],
    },
    {
      id: 24,
      question: `Joseph Smith was the founder of what religion?`,
      answers: [
        ["Buddhism", false],
        ["Christianity", false],
        ["Hinduism", false],
        ["Mormonism", true],
      ],
    },
    {
      id: 25,
      question: `Paul McCartney has always used his middle name. What is his real first name?`,
      answers: [
        ["James", true],
        ["John", false],
        ["Jack", false],
        ["Phil", false],
      ],
    },
    {
      id: 26,
      question: `Which of these artists do not originate from France?`,
      answers: [
        ["Daft Punk", false],
        ["The Chemical Brothers", true],
        ["Zaz", false],
        ["Justice", false],
      ],
    },
    {
      id: 27,
      question: `The dish Fugu, is made from what family of fish?`,
      answers: [
        ["Bass", false],
        ["Salmon", false],
        ["Pufferfish", true],
        ["Mackerel", false],
      ],
    },
    {
      id: 28,
      question: `What is the name of the first "Star Wars" film by release order?`,
      answers: [
        ["The Phantom Menace", false],
        ["The Force Awakes", false],
        ["Revenge of the Sith", false],
        ["A New Hope", true],
      ],
    },
    {
      id: 29,
      question: `A minotaur is half human half what?`,
      answers: [
        ["Bull", true],
        ["Cow", false],
        ["Horse", false],
        ["Eagle", false],
      ],
    },
    {
      id: 30,
      question: `Hel was the daughter of which Norse Mythological figure?`,
      answers: [
        ["Thor", false],
        ["Loki", true],
        ["Balder", false],
        ["Odin", false],
      ],
    },
    {
      id: 31,
      question: `What is the name of the very first video uploaded to YouTube?`,
      answers: [
        ["Tribute 2005", false],
        ["Carrie rides a truck", false],
        ["Me at the zoo", true],
        ["Her new puppy from great grandpa vern", false],
      ],
    },
    {
      id: 32,
      question: `What are rhino's horn made of`,
      answers: [
        ["Bone", false],
        ["Ivory", false],
        ["Skin", false],
        ["Keratin", true],
      ],
    },
    {
      id: 33,
      question: `What's this Saiyan name?`,
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
      question: `What was another suggested name for, the 1985 film, Back to the Future?`,
      answers: [
        ["Hill Valley Time Travelers", false],
        ["Spaceman From Pluto", true],
        ["The Lucky Man", false],
        ["The Time Travelers", false],
      ],
    },
    {
      id: 35,
      question: `What year did the Boxing Day earthquake & tsunami occur in the Indian Ocean?`,
      answers: [
        ["2014", false],
        ["2009", false],
        ["2004", true],
        ["1999", false],
      ],
    },
    {
      id: 36,
      question: `Which American civilization is the source of the belief that the world would end on December 21st, 2012?`,
      answers: [
        ["The Aztecs", false],
        ["The Incas", false],
        ["The Navajos", false],
        ["The Mayans", true],
      ],
    },
    {
      id: 37,
      question: `Who patented a steam engine that produced continuous rotary motion?`,
      answers: [
        ["James Watt", true],
        ["Alessandro Volta", false],
        ["Nikola Tesla", false],
        ["Albert Einstein", false],
      ],
    },
    {
      id: 38,
      question: `Which of the following countries was the first to send an object into space?`,
      answers: [
        ["USA", false],
        ["Germany", true],
        ["Russia", false],
        ["China", false],
      ],
    },
    {
      id: 39,
      question: `What is the name of the actress who portrayed Rachel Green in the sitcom "Friends"`,
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
      question: `What is the German word for "spoon"?`,
      answers: [
        ["Gabel", false],
        ["Löffel", true],
        ["Brötchen", false],
        ["Messer", false],
      ],
    },
    {
      id: 1,
      question: `This kind of writing matches this language...`,
      image: korean,
      answers: [
        ["Chinese", false],
        ["Japanese", false],
        ["Korean", true],
        ["Thai", false],
      ],
    },
    {
      id: 2,
      question: `Who tutored Alexander the Great?`,
      answers: [
        ["King Philip", false],
        ["Socrates", false],
        ["Plato", false],
        ["Aristotle", true],
      ],
    },
    {
      id: 3,
      question: `Who is the villain in the film "Nightmare on Elm Street"?`,
      answers: [
        ["Freddy Krueger", true],
        ["Jason", false],
        ["Michael Myers", false],
        ["Chucky", false],
      ],
    },
    {
      id: 4,
      question: `What is the full title of the Prime Minister of the UK?`,
      answers: [
        ["Duke of Cambridge", false],
        ["First Lord of the Treasury", true],
        ["Her Majesty's Loyal Opposition", false],
        ["Manager of the Crown Estate", false],
      ],
    },
    {
      id: 5,
      question: `Which of these companies does not manufacture automobiles?`,
      answers: [
        ["Nissan", false],
        ["GMC", false],
        ["Ducati", true],
        ["Fiat", false],
      ],
    },
    {
      id: 6,
      question: `Who composed the music for the Swan Lake Ballet?`,
      answers: [
        ["Mikhail Azanchevsky", false],
        ["Nikolai Artsybushev ", false],
        ["Vyacheslav Artyomov ", false],
        ["Pyotr Ilyich Tchaikovsky", true],
      ],
    },
    {
      id: 7,
      question: `What is the star sign of someone born on Valentines day?`,
      answers: [
        ["Aquarius", true],
        ["Capricorn", false],
        ["Pisces", false],
        ["Scorpio", false],
      ],
    },
    {
      id: 8,
      question: `What is the collective noun for rats?`,
      answers: [
        ["Race", false],
        ["Mischief", true],
        ["Pack", false],
        ["Drift", false],
      ],
    },
    {
      id: 9,
      question: `Lake Titicaca is located between which two nations?`,
      answers: [
        ["Kenya and Uganda", false],
        ["Mexico and the United States", false],
        ["Peru and Bolivia", true],
        ["India and Bangladesh", false],
      ],
    },
    {
      id: 10,
      question: `Which Country's flag is this?`,
      image: estonia,
      answers: [
        ["Estonia", true],
        ["Latvia", false],
        ["Lithuania", false],
        ["Belarus", false],
      ],
    },
    {
      id: 11,
      question: `Who discovered Penicillin?`,
      answers: [
        ["Marie Curie", false],
        ["Alexander Flemming", true],
        ["Alfred Nobel", false],
        ["Louis Pasteur", false],
      ],
    },
    {
      id: 12,
      question: `What is the scientific name for modern day humans?`,
      answers: [
        ["Homo Neanderthalensis", false],
        ["Homo Erectus", false],
        ["Homo Sapiens", true],
        ["Homo Ergaster", false],
      ],
    },
    {
      id: 13,
      question: `Which country does Austria not border?`,
      answers: [
        ["Slovenia", false],
        ["Switzerland", false],
        ["Slovakia", false],
        ["France", true],
      ],
    },
    {
      id: 14,
      question: `How many bones are in the human body?`,
      answers: [
        ["206", true],
        ["209", false],
        ["203", false],
        ["201", false],
      ],
    },
    {
      id: 15,
      question: `How many Harry Potter books are there?`,
      answers: [
        ["8", false],
        ["7", true],
        ["6", false],
        ["9", false],
      ],
    },
    {
      id: 16,
      question: `What do the letters in the GMT time zone stand for?`,
      answers: [
        ["General Median Time", false],
        ["Global Meridian Time", false],
        ["Greenwich Mean Time", true],
        ["Glasgow Man Time", false],
      ],
    },
    {
      id: 17,
      question: `Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-III?`,
      answers: [
        ["Mark Hamill", false],
        ["Hayden Christensen", false],
        ["Liam Neeson", false],
        ["Ewan McGregor", true],
      ],
    },
    {
      id: 18,
      question: `Which of these African countries list "Spanish" as an official language?`,
      answers: [
        ["Equatorial Guinea", true],
        ["Cameroon", false],
        ["Guinea", false],
        ["Angola", false],
      ],
    },
    {
      id: 19,
      question: `Which Apollo mission was the first one to land on the Moon?`,
      answers: [
        ["Apolo 13", false],
        ["Apolo 11", true],
        ["Apolo 9", false],
        ["Apolo 10", false],
      ],
    },
    {
      id: 20,
      question: `Which is the fastest land's animal in the world?`,
      answers: [
        ["Pronghorn Antelope", false],
        ["Thomson's Gazelle", false],
        ["Cheetah", true],
        ["Lion", false],
      ],
    },
    {
      id: 21,
      question: `How many legs do butterflies have?`,
      answers: [
        ["0", false],
        ["2", false],
        ["4", false],
        ["6", true],
      ],
    },
    {
      id: 22,
      question: `Who painted the Sistine Chapel`,
      answers: [
        ["Michelangelo", true],
        ["Leonardo da Vinci", false],
        ["Raphael", false],
        ["Pablo Picasso", false],
      ],
    },
    {
      id: 23,
      question: `Who designed the Chupa Chups logo?`,
      answers: [
        ["Andy Warhol", false],
        ["Salvador Dali", true],
        ["Pablo Picasso", false],
        ["Jean-Michel Basquiat", false],
      ],
    },
    {
      id: 24,
      question: `What is not a wind instrument?`,
      answers: [
        ["Oboe", false],
        ["Didgeridoo ", false],
        ["Viola", true],
        ["Trombone", false],
      ],
    },
    {
      id: 25,
      question: `What is the primary addictive substance found in tobacco?`,
      answers: [
        ["Ephedrine", false],
        ["Cathinone", false],
        ["Glaucine", false],
        ["Nicotine", true],
      ],
    },
    {
      id: 26,
      question: `Which driver has been the Formula 1 world champion for a record 7 times as Michael Schumacher?`,
      answers: [
        ["Lewis Hamilton", true],
        ["Ayrton Senna", false],
        ["Juan Manuel Fangio", false],
        ["Fernando Alonso", false],
      ],
    },
    {
      id: 27,
      question: `How many differently shaped Tetris pieces are there?`,
      answers: [
        ["5", false],
        ["7", true],
        ["6", false],
        ["9", false],
      ],
    },
    {
      id: 28,
      question: `What is the name of this painting?`,
      image: girl,
      answers: [
        ["The Birth of Venus", false],
        ["The Kiss", false],
        ["Girl with a Pearl Earring", true],
        ["Las Meninas", false],
      ],
    },
    {
      id: 29,
      question: `What is the alter-ego of the DC comics character "Superman"?`,
      answers: [
        ["John Jones", false],
        ["Bruce Wayne", false],
        ["Arthur Curry", false],
        ["Clark Kent", true],
      ],
    },
    {
      id: 30,
      question: `How many years did the Hundred Years's War last?`,
      answers: [
        ["116 years", true],
        ["95 years", false],
        ["100 years", false],
        ["101 years", false],
      ],
    },
    {
      id: 31,
      question: `The fictional material Kryptonite is which superhero's weakness?`,
      answers: [
        ["Batman", false],
        ["Superman", true],
        ["Aquaman", false],
        ["Spiderman", false],
      ],
    },
    {
      id: 32,
      question: `Which of the following actors does not play a role in the movie "The Usual Suspects"`,
      answers: [
        ["Kevin Spacey", false],
        ["Benicio Del Toro", false],
        ["Richard Gere", true],
        ["Gabriel Byrne", false],
      ],
    },
    {
      id: 33,
      question: `What is the name of this popular manga/anime?`,
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
      question: `What is the capital of Spain?`,
      answers: [
        ["Madrid", true],
        ["A Coruña", false],
        ["Sevilla", false],
        ["Barcelona", false],
      ],
    },
    {
      id: 35,
      question: `The Hippogriff, is a magical creature with the front half of an eagle, and the back half of what?`,
      answers: [
        ["A Dragon", false],
        ["A Horse", true],
        ["A Tiger", false],
        ["A Lion", false],
      ],
    },
    {
      id: 36,
      question: `This movie contains the quote, "I love the smell of napalm in the morning"`,
      answers: [
        ["Full Metal Jacket", false],
        ["The Deer Hunter", false],
        ["Apocalypse Now", true],
        ["Platoon", false],
      ],
    },
    {
      id: 37,
      question: `.at is the top-level domain for what country?`,
      answers: [
        ["Argentina", false],
        ["Angola", false],
        ["Australia", false],
        ["Austria", true],
      ],
    },
    {
      id: 38,
      question: `What is the highest number of Michelin stars a restaurant can receive?`,
      answers: [
        ["Three", true],
        ["Four", false],
        ["Five", false],
        ["Six", false],
      ],
    },
    {
      id: 39,
      question: `By definition, where does an abyssopelagic animal live?`,
      answers: [
        ["In the desert", false],
        ["At the bottom of the ocean", true],
        ["On top of a mountain", false],
        ["Inside a tree", false],
      ],
    },
  ],
];

export default bigData;
