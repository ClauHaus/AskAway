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
      question: "Who is this man?",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg",
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
      question: `What is the real name of "Bono", singer of u2?`,
      answers: [
        ["Mark Ronson", false],
        ["Paul David Hewson", true],
        ["Lonnie Donegan", false],
        ["Calum Scott", false],
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
      question: `What is the smallest country in the world?`,
      answers: [
        ["Monaco", false],
        ["Malta", false],
        ["Maldives", false],
        ["Vatican City", true],
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
        ["Sout Africa", false],
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
      question: `What is the shape of the toy invented by Hungarian professor Ernő Rubik?`,
      answers: [
        ["Sphere", false],
        ["Cube", true],
        ["Cylinder", false],
        ["Pyramid", false],
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
      question: `What does CPU stand for?`,
      answers: [
        ["Central Process Unit", false],
        ["Computer Personal Unit", false],
        ["Central Processing Unit", true],
        ["Central Processor Unit", false],
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
    {
      id: 40,
      question: `Which is the fastest land's animal in the world?`,
      answers: [
        ["Pronghorn Antelope", false],
        ["Thomson's Gazelle", false],
        ["Cheetah", true],
        ["Lion", false],
      ],
    },
    {
      id: 41,
      question: `How many legs do butterflies have?`,
      answers: [
        ["0", false],
        ["2", false],
        ["4", false],
        ["6", true],
      ],
    },
    {
      id: 42,
      question: `Who painted the Sistine Chapel`,
      answers: [
        ["Michelangelo", true],
        ["Leonardo da Vinci", false],
        ["Raphael", false],
        ["Pablo Picasso", false],
      ],
    },
    {
      id: 43,
      question: `Who designed the Chupa Chups logo?`,
      answers: [
        ["Andy Warhol", false],
        ["Salvador Dali", true],
        ["Pablo Picasso", false],
        ["Jean-Michel Basquiat", false],
      ],
    },
    {
      id: 44,
      question: `What is not a wind instrument?`,
      answers: [
        ["Oboe", false],
        ["Didgeridoo ", false],
        ["Viola", true],
        ["Trombone", false],
      ],
    },
    {
      id: 45,
      question: `What is the primary addictive substance found in tobacco?`,
      answers: [
        ["Ephedrine", false],
        ["Cathinone", false],
        ["Glaucine", false],
        ["Nicotine", true],
      ],
    },
    {
      id: 46,
      question: `Which driver has been the Formula 1 world champion for a record 7 times as Michael Schumacher?`,
      answers: [
        ["Lewis Hamilton", true],
        ["Ayrton Senna", false],
        ["Juan Manuel Fangio", false],
        ["Fernando Alonso", false],
      ],
    },
    {
      id: 47,
      question: `How many differently shaped Tetris pieces are there?`,
      answers: [
        ["5", false],
        ["7", true],
        ["6", false],
        ["9", false],
      ],
    },
    {
      id: 48,
      question: `How many stars are featured on New Zealand's flag?`,
      answers: [
        ["5", false],
        ["0", false],
        ["4", true],
        ["3", false],
      ],
    },
    {
      id: 49,
      question: `What is the alter-ego of the DC comics character "Superman"?`,
      answers: [
        ["John Jones", false],
        ["Bruce Wayne", false],
        ["Arthur Curry", false],
        ["Clark Kent", true],
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
      question: `What do you call a baby bat?`,
      answers: [
        ["Cub", false],
        ["Chick", false],
        ["Kid", false],
        ["Pup", true],
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
      question: `What is the capital of Indonesia?`,
      answers: [
        ["Bandung", false],
        ["Jakarta", true],
        ["Medan", false],
        ["Palembang", false],
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
      question: `What does a funambulist walk on?`,
      answers: [
        ["A Tight Rope", true],
        ["Broken Glass", false],
        ["Balls", false],
        ["The Moon", false],
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
      question: `How many sides does a heptagon have?`,
      answers: [
        ["7", true],
        ["8", false],
        ["5", false],
        ["6", false],
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
    {
      id: 40,
      question: `Who played Agent Fox Mulder in the TV sci-fi drama "The X-Files"?`,
      answers: [
        ["David Duchovny", true],
        ["Mitch Pileggi", false],
        ["Robert Patrick", false],
        ["Luke Perry", false],
      ],
    },
    {
      id: 41,
      question: `Who discovered Penicillin?`,
      answers: [
        ["Marie Curie", false],
        ["Alexander Flemming", true],
        ["Alfred Nobel", false],
        ["Louis Pasteur", false],
      ],
    },
    {
      id: 42,
      question: `What is the scientific name for modern day humans?`,
      answers: [
        ["Homo Neanderthalensis", false],
        ["Homo Erectus", false],
        ["Homo Sapiens", true],
        ["Homo Ergaster", false],
      ],
    },
    {
      id: 43,
      question: `Which country does Austria not border?`,
      answers: [
        ["Slovenia", false],
        ["Switzerland", false],
        ["Slovakia", false],
        ["France", true],
      ],
    },
    {
      id: 44,
      question: ``,
      answers: [
        ["206", true],
        ["209", false],
        ["203", false],
        ["201", false],
      ],
    },
    {
      id: 45,
      question: `How many Harry Potter books are there?`,
      answers: [
        ["8", false],
        ["7", true],
        ["6", false],
        ["9", false],
      ],
    },
    {
      id: 46,
      question: `What do the letters in the GMT time zone stand for?`,
      answers: [
        ["General Median Time", false],
        ["Global Meridian Time", false],
        ["Greenwich Mean Time", true],
        ["Glasgow Man Time", false],
      ],
    },
    {
      id: 47,
      question: `Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-III?`,
      answers: [
        ["Mark Hamill", false],
        ["Hayden Christensen", false],
        ["Liam Neeson", false],
        ["Ewan McGregor", true],
      ],
    },
    {
      id: 48,
      question: `Which of these African countries list "Spanish" as an official language?`,
      answers: [
        ["Equatorial Guinea", true],
        ["Cameroon", false],
        ["Guinea", false],
        ["Angola", false],
      ],
    },
    {
      id: 49,
      question: `Which Apollo mission was the first one to land on the Moon?`,
      answers: [
        ["Apolo 13", false],
        ["Apolo 11", true],
        ["Apolo 9", false],
        ["Apolo 10", false],
      ],
    },
  ],
];

export default bigData;
