const bigData = [
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
  [
    {
      id: 0,
      question: "In which continent is located Saint Lucia?",
      answers: [
        ["America", true],
        ["Asia", false],
        ["Africa", false],
        ["Europe", false],
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
      question: `Which is the fastest land's animal in the world`,
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
      question: `What is the alter-ego of the DC comics character "Superman"`,
      answers: [
        ["John Jones", false],
        ["Bruce Wayne", false],
        ["Arthur Curry", false],
        ["Clark Kent", true],
      ],
    },
  ],
];

export default bigData;
