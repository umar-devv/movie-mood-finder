var movies = [
    {
        title: "The Pursuit of Happyness",
        year: 2006,
        description: "A struggling salesman takes sole custody of his young son while attempting to build a life-changing career.",
        rating: 5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "The Dark Knight",
        year: 2008,
        description: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept physical and psychological tests to fight injustice.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Interstellar",
        year: 2014,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival on a dying Earth.",
        rating: 5,
        mood: ["Mind-blowing", "Sad", "Adventure"]
    },
    {
        title: "Inception",
        year: 2010,
        description: "A thief who steals corporate secrets through dream-sharing technology is tasked with initiating the reverse action of planting an idea.",
        rating: 4,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Requiem for a Dream",
        year: 2000,
        description: "The drug-induced utopias of four Coney Island residents are shattered when their chemical addictions begin controlling their lives.",
        rating: 4,
        mood: ["Dark", "Sad"]
    },
    {
        title: "The Prestige",
        year: 2006,
        description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        rating: 5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Fight Club",
        year: 1999,
        description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "The Godfather",
        year: 1972,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Titanic",
        year: 1997,
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        rating: 5,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Pride & Prejudice",
        year: 2005,
        description: "Sparks fly when spirited Elizabeth Bennet meets the single, rich, and proud Mr. Darcy.",
        rating: 5,
        mood: ["Romance"]
    },
    {
        title: "La La Land",
        year: 2016,
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations.",
        rating: 5,
        mood: ["Romance", "Sad", "Motivational"]
    },
    {
        title: "Before Sunrise",
        year: 1995,
        description: "A young man and woman meet on a train in Europe, and wind up spending one romantic evening together in Vienna.",
        rating: 5,
        mood: ["Romance"]
    },
    {
        title: "The Notebook",
        year: 2004,
        description: "A poor yet passionate personal laborer falls in love with a rich young woman, giving her a unique sense of freedom.",
        rating: 4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        rating: 5,
        mood: ["Romance", "Mind-blowing", "Sad"]
    },
    {
        title: "Amélie",
        year: 2001,
        description: "An innocent and naive girl in Paris decides to help those around her and, along the way, discovers love.",
        rating: 5,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "A Star Is Born",
        year: 2018,
        description: "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
        rating: 4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Notting Hill",
        year: 1999,
        description: "The life of a simple bookshop owner changes completely when he meets the most famous film star in the world.",
        rating: 4,
        mood: ["Romance"]
    },
    {
        title: "Call Me by Your Name",
        year: 2017,
        description: "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.",
        rating: 4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "About Time",
        year: 2013,
        description: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life.",
        rating: 5,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "Her",
        year: 2013,
        description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        rating: 5,
        mood: ["Romance", "Mind-blowing", "Sad"]
    },
    {
        title: "Roman Holiday",
        year: 1953,
        description: "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.",
        rating: 5,
        mood: ["Romance"]
    },
    {
        title: "The Princess Bride",
        year: 1987,
        description: "While home-sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate on an adventure to find his lost love.",
        rating: 5,
        mood: ["Romance", "Adventure"]
    },
    {
        title: "Raiders of the Lost Ark",
        year: 1981,
        description: "In 1936, archaeologist Indiana Jones ventures around the globe to find the Biblical Ark of the Covenant before Nazis can harness its power.",
        rating: 5,
        mood: ["Adventure"]
    },
    {
        title: "Jurassic Park",
        year: 1993,
        description: "A pragmatic paleontologist touring an almost complete theme park on an island is tasked with protecting two kids after a power failure.",
        rating: 5,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.",
        rating: 5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Mad Max: Fury Road",
        year: 2015,
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.",
        rating: 5,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Gladiator",
        year: 2000,
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        rating: 5,
        mood: ["Adventure", "Motivational", "Sad"]
    },
    {
        title: "Into the Wild",
        year: 2007,
        description: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions and hitches to Alaska.",
        rating: 5,
        mood: ["Adventure", "Sad"]
    },
    {
        title: "Up",
        year: 2009,
        description: "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, taking a young stowaway.",
        rating: 5,
        mood: ["Adventure", "Sad", "Motivational"]
    },
    {
        title: "Spirited Away",
        year: 2001,
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
        rating: 5,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "The Lion King",
        year: 1994,
        description: "A young lion prince flees his kingdom after his father's murder, only to learn the true meaning of responsibility and bravery.",
        rating: 5,
        mood: ["Adventure", "Motivational", "Sad"]
    },
    {
        title: "Avatar",
        year: 2009,
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting his new home.",
        rating: 4,
        mood: ["Adventure"]
    },
    {
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        year: 2003,
        description: "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love from Jack's former mutinous allies.",
        rating: 5,
        mood: ["Adventure"]
    },
    {
        title: "Back to the Future",
        year: 1985,
        description: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean.",
        rating: 5,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Lawrence of Arabia",
        year: 1962,
        description: "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, warring Arab tribes during WWI.",
        rating: 5,
        mood: ["Adventure"]
    },
    {
        title: "Seven Samurai",
        year: 1954,
        description: "A samurai answers a request for protection from a village of farmers under threat from bandits, recruiting six other samurai to join him.",
        rating: 5,
        mood: ["Adventure", "Sad"]
    },
    {
        title: "Princess Mononoke",
        year: 1997,
        description: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between forest gods and humanity.",
        rating: 5,
        mood: ["Adventure", "Dark"]
    },
    {
        title: "The Revenant",
        year: 2015,
        description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead.",
        rating: 4,
        mood: ["Adventure", "Dark", "Sad"]
    },
    {
        title: "Life of Pi",
        year: 2012,
        description: "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery, sharing a boat with a Bengal tiger.",
        rating: 4,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Cast Away",
        year: 2000,
        description: "A FedEx systems analyst, obsessed with time, is stranded on an uninhabited island after his plane crashes in the South Pacific.",
        rating: 5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Dunkirk",
        year: 2017,
        description: "Allied soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in WWII.",
        rating: 4,
        mood: ["Adventure", "Dark"]
    },
    {
        title: "Se7en",
        year: 1995,
        description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his terrifying motives.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "The Silence of the Lambs",
        year: 1991,
        description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Psycho",
        year: 1960,
        description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Black Swan",
        year: 2010,
        description: "A committed dancer wins the lead role in a production of Tchaikovsky's Swan Lake only to struggle with maintaining her sanity.",
        rating: 4,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Parasite",
        year: 2019,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Joker",
        year: 2019,
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society, causing a spiral into madness.",
        rating: 5,
        mood: ["Dark", "Sad"]
    },
    {
        title: "No Country for Old Men",
        year: 2007,
        description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Zodiac",
        year: 2007,
        description: "Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the infamous Zodiac Killer.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Prisoners",
        year: 2013,
        description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands while the police pursue multiple leads.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Nightcrawler",
        year: 2014,
        description: "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. freelance crime journalism, he blurs the line between observer and participant.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Whiplash",
        year: 2014,
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an obsessive instructor.",
        rating: 5,
        mood: ["Motivational", "Dark"]
    },
    {
        title: "The Truman Show",
        year: 1998,
        description: "An insurance salesman discovers his entire life is actually a highly orchestrated reality television show, prompting him to escape.",
        rating: 5,
        mood: ["Mind-blowing", "Motivational"]
    },
    {
        title: "Shutter Island",
        year: 2010,
        description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Casablanca",
        year: 1942,
        description: "A cynical American expatriate cafe owner struggles to decide whether or not to help his former lover and her runaway rebel husband.",
        rating: 5,
        mood: ["Romance", "Sad"]
    },
    {
        title: "The Fault in Our Stars",
        year: 2014,
        description: "Two teenage cancer patients meet in a support group and embark on an emotional journey to Amsterdam.",
        rating: 4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "10 Things I Hate About You",
        year: 1999,
        description: "A pretty, popular teenager can't go out on a date until her ill-tempered, older sister does.",
        rating: 4,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "Crazy Rich Asians",
        year: 2018,
        description: "This contemporary romantic comedy follows native New Yorker Rachel Chu as she accompanies her longtime boyfriend to his best friend's wedding.",
        rating: 4,
        mood: ["Romance"]
    },
    {
        title: "The Terminator",
        year: 1984,
        description: "A human soldier is sent from 2029 to 1984 to battle an indestructible cyborg assassin sent to kill a young woman.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Terminator 2: Judgment Day",
        year: 1991,
        description: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son, John, from a more advanced cyborg.",
        rating: 5,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Apollo 13",
        year: 1995,
        description: "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage.",
        rating: 4,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "The Martian",
        year: 2015,
        description: "An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth.",
        rating: 5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Grave of the Fireflies",
        year: 1988,
        description: "A devastatingly beautiful tale of a young boy and his little sister struggling to survive in Japan during World War II.",
        rating: 5,
        mood: ["Sad", "Dark"]
    },
    {
        title: "The Green Mile",
        year: 1999,
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder, who has a miraculous gift.",
        rating: 5,
        mood: ["Sad", "Mind-blowing"]
    },
    {
        title: "Hachi: A Dog's Tale",
        year: 2009,
        description: "A college professor bonds with an abandoned Akita puppy whom he takes into his home, showcasing endless loyalty.",
        rating: 5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Schindler's List",
        year: 1993,
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce.",
        rating: 5,
        mood: ["Sad", "Dark", "Motivational"]
    },
    {
        title: "12 Years a Slave",
        year: 2013,
        description: "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
        rating: 5,
        mood: ["Sad", "Dark", "Motivational"]
    },
    {
        title: "Dead Poets Society",
        year: 1989,
        description: "Maverick English teacher John Keating inspires his students to look at poetry with a different perspective of authentic self-expression.",
        rating: 5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Good Will Hunting",
        year: 1997,
        description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
        rating: 5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Manchester by the Sea",
        year: 2016,
        description: "A depressed New England janitor becomes the legal guardian of his teenage nephew after his older brother passes away.",
        rating: 4,
        mood: ["Sad"]
    },
    {
        title: "Braveheart",
        year: 1995,
        description: "William Wallace, a late 13th-century Scottish warrior, leads his countrymen in a rebellion against King Edward I of England.",
        rating: 5,
        mood: ["Adventure", "Motivational", "Sad"]
    },
    {
        title: "The Great Gatsby",
        year: 2013,
        description: "A writer and Wall Street trader, Nick Carraway, finds himself drawn to the past and lifestyle of his mysterious millionaire neighbor, Jay Gatsby.",
        rating: 4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Moulin Rouge!",
        year: 2001,
        description: "A poor Bohemian poet in 1890s Paris falls in love with a beautiful courtesan and star of the Moulin Rouge cabaret.",
        rating: 4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Sense and Sensibility",
        year: 1995,
        description: "Rich Mr. Dashwood dies, leaving his second wife and her three daughters with a very small income, forcing them to find suitors.",
        rating: 4,
        mood: ["Romance"]
    },
    {
        title: "Brokeback Mountain",
        year: 2005,
        description: "Ennis and Jack are two shepherds who develop a lifetime romantic relationship, facing extreme challenges of their era.",
        rating: 5,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Begin Again",
        year: 2013,
        description: "A chance encounter between a disgraced music-business executive and a young singer-songwriter new to Manhattan turns into a beautiful collaboration.",
        rating: 4,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "Midnight in Paris",
        year: 2011,
        description: "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s.",
        rating: 5,
        mood: ["Romance", "Mind-blowing"]
    },
    {
        title: "WALL-E",
        year: 2008,
        description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        rating: 5,
        mood: ["Adventure", "Romance", "Motivational"]
    },
    {
        title: "Silver Linings Playbook",
        year: 2012,
        description: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife.",
        rating: 4,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "The Matrix",
        year: 1999,
        description: "When a beautiful stranger leads a computer hacker to a forbidding underworld, he discovers the shocking truth of his reality.",
        rating: 5,
        mood: ["Mind-blowing", "Motivational"]
    },
    {
        title: "Memento",
        year: 2000,
        description: "A man with short-term memory loss attempts to track down his wife's murderer through a system of notes and tattoos.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Primer",
        year: 2004,
        description: "Four friends/entrepreneurial tech developers accidentally invent a device that enables restricted time travel.",
        rating: 4,
        mood: ["Mind-blowing"]
    },
    {
        title: "Coherence",
        year: 2013,
        description: "Strange things begin to happen when a group of friends gather for a dinner party on the evening of a passing comet.",
        rating: 4,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "2001: A Space Odyssey",
        year: 1968,
        description: "After uncovering a mysterious artifact buried beneath the Lunar surface, mankind sends a spacecraft to Jupiter with a supercomputer.",
        rating: 5,
        mood: ["Mind-blowing", "Adventure"]
    },
    {
        title: "Arrival",
        year: 2016,
        description: "A linguist works with the military to communicate with alien organisms who have initiated contact with Twelve mysterious vessels.",
        rating: 5,
        mood: ["Mind-blowing", "Sad"]
    },
    {
        title: "The Sixth Sense",
        year: 1999,
        description: "A frightened, withdrawn city boy who communicates with spirits seeks the aid of a dispirited child psychologist.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Oldboy",
        year: 2003,
        description: "After being kidnapped and imprisoned for fifteen years, a man is released, only to find that he must find his captor in five days.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "The Usual Suspects",
        year: 1995,
        description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, beginning when five criminals meet.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Donnie Darko",
        year: 2001,
        description: "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large rabbit who manipulates him.",
        rating: 4,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Vanilla Sky",
        year: 2001,
        description: "A self-indulgent publisher finds his life taking a turn for the surreal after a major car accident with a disgruntled lover.",
        rating: 4,
        mood: ["Mind-blowing", "Romance", "Sad"]
    },
    {
        title: "Mulholland Drive",
        year: 2001,
        description: "After a car wreck on Mulholland Drive, an aspiring actress helps an amnesiac woman search for clues to her true identity.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "A Beautiful Mind",
        year: 2001,
        description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        rating: 5,
        mood: ["Mind-blowing", "Motivational"]
    },
    {
        title: "Goodfellas",
        year: 1990,
        description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners in crime.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "American History X",
        year: 1998,
        description: "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong and hateful path.",
        rating: 5,
        mood: ["Dark", "Sad", "Motivational"]
    },
    {
        title: "Heat",
        year: 1995,
        description: "A group of high-end professional bank thieves start to feel the heat from the LAPD when they make a final giant heist.",
        rating: 5,
        mood: ["Dark", "Adventure"]
    },
    {
        title: "The Departed",
        year: 2006,
        description: "An undercover cop and a mole in the police department attempt to identify each other while infiltrating an Irish gang.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Blade Runner",
        year: 1982,
        description: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "A Clockwork Orange",
        year: 1971,
        description: "In a futuristic Britain, a sadistic gang leader is imprisoned and volunteers for an experimental aversion therapy trial.",
        rating: 5,
        mood: ["Dark"]
    },
    {
        title: "Sicario",
        year: 2015,
        description: "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area.",
        rating: 4,
        mood: ["Dark"]
    },
    {
        title: "The Invisible Guest",
        year: 2016,
        description: "A successful businessman is accused of murder and works with a veteran preparation expert to build his defense statement.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Perfect Blue",
        year: 1997,
        description: "A pop-singer gives up her career to become an actress, but she slowly starts to lose her mind when she is stalked by an obsessed fan.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Coco",
        year: 2017,
        description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his legend.",
        rating: 5,
        mood: ["Adventure", "Sad", "Motivational"]
    },
    {
        title: "Ratatouille",
        year: 2007,
        description: "A rat who can cook makes an alliance with a young kitchen worker at a famous restaurant in Paris to fulfill his dreams.",
        rating: 5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Moana",
        year: 2016,
        description: "In Ancient Polynesia, when a terrible curse reaches Moana's island, she answers the Ocean's call to seek out the Demigod Maui.",
        rating: 5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "The Secret Life of Walter Mitty",
        year: 2013,
        description: "When both his job and his coworker's job are threatened, Walter takes action and embarks on a global journey beyond imagination.",
        rating: 5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "National Treasure",
        year: 2004,
        description: "A historian rushed to find a templar treasure must steal the Declaration of Independence before a team of mercenaries get to it.",
        rating: 4,
        mood: ["Adventure"]
    },
    {
        title: "The Goonies",
        year: 1885, // 1985
        description: "A group of young misfits discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
        rating: 5,
        mood: ["Adventure"]
    },
    {
        title: "Before Sunset",
        year: 2004,
        description: "Nine years after Jesse and Celine first met in Vienna, they encounter each other again in Paris on Jesse's final book tour day.",
        rating: 4.8,
        mood: ["Romance"]
    },
    {
        title: "The Godfather: Part II",
        year: 1974,
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family syndicate.",
        rating: 4.9,
        mood: ["Dark", "Sad"]
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        description: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat.",
        rating: 4.7,
        mood: ["Adventure", "Motivational", "Mind-blowing"]
    },
    {
        title: "Forrest Gump",
        year: 1994,
        description: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be with his childhood sweetheart.",
        rating: 4.4,
        mood: ["Sad", "Motivational", "Romance"]
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        rating: 4.2,
        mood: ["Dark", "Adventure", "Motivational"]
    },
    {
        title: "Django Unchained",
        year: 2012,
        description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        rating: 4.2,
        mood: ["Dark", "Adventure", "Motivational"]
    },
    {
        title: "The Wolf of Wall Street",
        year: 2013,
        description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government.",
        rating: 4.1,
        mood: ["Motivational", "Dark", "Mind-blowing"]
    },
    {
        title: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
        description: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
        rating: 4.4,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Alien",
        year: 1979,
        description: "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission on a distant moon.",
        rating: 4.3,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "The Matrix Reloaded",
        year: 2003,
        description: "Neo, Trinity and Morpheus lead the revolt against the Machine Army as it decimates Zion, using their extraordinary skills and weaponry against systematic forces.",
        rating: 3.6,
        mood: ["Mind-blowing", "Adventure"]
    },
    {
        title: "Inside Out",
        year: 2015,
        description: "After a young girl is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate.",
        rating: 4.1,
        mood: ["Sad", "Motivational", "Mind-blowing"]
    },
    {
        title: "Toy Story",
        year: 1995,
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
        rating: 4.2,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Monsters, Inc.",
        year: 2001,
        description: "In order to power the city, monsters have to scare children so that they scream. However, the monsters themselves are terribly afraid of being contaminated by children.",
        rating: 4.1,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Finding Nemo",
        year: 2003,
        description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish embarks on a journey to bring him home.",
        rating: 4.1,
        mood: ["Adventure", "Sad"]
    },
    {
        title: "Your Name.",
        year: 2016,
        description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        rating: 4.4,
        mood: ["Romance", "Mind-blowing", "Sad"]
    },
    {
        title: "Weathering With You",
        year: 2019,
        description: "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
        rating: 3.8,
        mood: ["Romance", "Adventure", "Sad"]
    },
    {
        title: "A Silent Voice",
        year: 2016,
        description: "A young man is mutually shunned by his classmates after he bullies a deaf girl to the point where she moves. Years later, he sets out on a path for redemption.",
        rating: 4.1,
        mood: ["Sad", "Motivational", "Romance"]
    },
    {
        title: "500 Days of Summer",
        year: 2009,
        description: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.",
        rating: 3.8,
        mood: ["Romance", "Sad"]
    },
    {
        title: "The Social Network",
        year: 2010,
        description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the co-founders.",
        rating: 4.0,
        mood: ["Mind-blowing", "Motivational", "Dark"]
    },
    {
        title: "Catch Me If You Can",
        year: 2002,
        description: "A seasoned FBI agent pursues Frank Abagnale Jr. who, before his 19th birthday, successfully forged millions of dollars' worth of checks.",
        rating: 4.1,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        rating: 4.5,
        mood: ["Adventure", "Motivational", "Sad"]
    },
    {
        title: "Fifty Shades of Grey",
        year: 2015,
        description: "A literature student's life changes forever when she meets a handsome, yet tormented billionaire businessman with singular tastes.",
        rating: 4.1,
        mood: ["Romance", "Dark"]
    },
    {
        title: "Fifty Shades Darker",
        year: 2017,
        description: "While Christian wrestles with his inner demons, Anastasia must confront the anger and envy of the women who came before her.",
        rating: 4.2,
        mood: ["Romance", "Dark"]
    },
    {
        title: "Fifty Shades Freed",
        year: 2018,
        description: "Christian and Ana decide to marry and embrace their connection, but new threats jeopardize their happy ending.",
        rating: 4.3,
        mood: ["Romance", "Dark"]
    },
    {
        title: "365 Days",
        year: 2020,
        description: "A fiery executive in a spiritless relationship falls victim to a dominant mafia boss who imprisons her and gives her one year to fall in love.",
        rating: 3.3,
        mood: ["Romance", "Dark", "Crime"]
    },
    {
        title: "365 Days: This Day",
        year: 2022,
        description: "Laura and Massimo are back and stronger than ever. But Massimo's family ties and a mysterious man bidding for Laura's heart complicate their lives.",
        rating: 3.0,
        mood: ["Romance", "Dark"]
    },
    {
        title: "The Next 365 Days",
        year: 2022,
        description: "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a persistent rival tries to pull them apart.",
        rating: 3.1,
        mood: ["Romance", "Dark"]
    },
    {
        title: "My Fault",
        year: 2023,
        description: "Noah must leave her town, boyfriend, and friends to move into her mother's new wealthy husband's mansion, where she meets her new stepbrother Nick.",
        rating: 4.5,
        mood: ["Romance", "Adventure"]
    },
    {
        title: "Your Fault",
        year: 2024,
        description: "The love between Noah and Nick seems unwavering, but parent issues and career challenges threaten to tear their secret relationship apart.",
        rating: 4.4,
        mood: ["Romance"]
    },
    {
        title: "After",
        year: 2019,
        description: "A dedicated young college student falls for a rebellious guy with a dark secret, embarking on a rocky romance.",
        rating: 3.8,
        mood: ["Romance"]
    },
    {
        title: "After We Collided",
        year: 2020,
        description: "Tessa finds herself struggling with her complicated relationship with Hardin as new obstacles and handsome suitors throw their lives into chaos.",
        rating: 3.7,
        mood: ["Romance", "Sad"]
    },
    {
        title: "After We Fell",
        year: 2021,
        description: "Just as Tessa makes the biggest decision of her life, revelations about her family and Hardin's past threaten to derail their future.",
        rating: 3.5,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Through My Window",
        year: 2022,
        description: "Raquel's long-standing obsession with her next-door neighbor turns into something more when he starts developing feelings for her.",
        rating: 3.9,
        mood: ["Romance"]
    },
    {
        title: "Through My Window: Across the Sea",
        year: 2023,
        description: "Ares has gone to study in Stockholm, and he and Raquel are facing the challenges of a long-distance relationship, finding that separation is a test.",
        rating: 3.6,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Wild Things",
        year: 1998,
        description: "A police detective uncovers a labyrinth of dark conspiracies and betrayal behind allegation claims in a wealthy Florida community.",
        rating: 4.3,
        mood: ["Mystery", "Crime", "Romance"]
    },
    {
        title: "Basic Instinct",
        year: 1992,
        description: "A police detective investigates a brutal murder in which a seductive, manipulative female novelist becomes the prime suspect.",
        rating: 4.5,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "Eyes Wide Shut",
        year: 1999,
        description: "A New York City doctor embarks on a harrowing night-long odyssey of sexual and moral discovery after his wife admits to painful fantasies.",
        rating: 4.6,
        mood: ["Mystery", "Dark", "Romance"]
    },
    {
        title: "Cruel Intentions",
        year: 1999,
        description: "Two wealthy step-siblings make a high-stakes, malicious bet regarding the seduction of their headmaster's principled daughter.",
        rating: 4.2,
        mood: ["Romance", "Dark"]
    },
    {
        title: "The Voyeurs",
        year: 2021,
        description: "A young couple becomes obsessed with watching their active neighbors across the street, leading to a dangerous web of secrets.",
        rating: 4.0,
        mood: ["Mystery", "Romance", "Dark"]
    },
    {
        title: "Chloe",
        year: 2009,
        description: "A successful doctor hires an escort to test her husband's fidelity, but the arrangement quickly spirals out of control in unexpected ways.",
        rating: 4.0,
        mood: ["Mystery", "Romance", "Dark"]
    },
    {
        title: "Secretary",
        year: 2002,
        description: "A young woman, recently released from a mental institution, finds a unique and liberating dynamic working for a demanding attorney.",
        rating: 4.3,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "Body Heat",
        year: 1981,
        description: "A sleek, scheming woman convinces her impressionable lawyer lover to murder her wealthy husband, leading to extreme heat and betrayal.",
        rating: 4.4,
        mood: ["Crime", "Mystery", "Romance"]
    },
    {
        title: "Bound",
        year: 1996,
        description: "A passionate romance develops between a gangster's girlfriend and an ex-con handyman, leading to a plot to steal millions from the mob.",
        rating: 4.4,
        mood: ["Crime", "Romance", "Dark"]
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        description: "The lives of mob hitmen, a boxer, a gangster and his wife, and diner bandits intertwine in tales of violence and redemption.",
        rating: 4.9,
        mood: ["Crime", "Dark", "Mind-blowing"]
    },
    {
        title: "The Godfather: Part II",
        year: 1974,
        description: "The early life and career of Vito Corleone in 1920s New York is portrayed, while Michael Corleone tightens his grip on the family syndicate.",
        rating: 5.0,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Goodfellas",
        year: 1990,
        description: "The story of Henry Hill and his life in the mob, relationship with his wife Karen and mob partners Jimmy Conway and Tommy DeVito.",
        rating: 4.8,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Heat",
        year: 1995,
        description: "A group of high-end professional thieves start to feel the heat from the LAPD when they leave a crucial clue at their latest heist.",
        rating: 4.7,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Scarface",
        year: 1983,
        description: "In Miami in 1980, a determined Cuban immigrant takes over a rising drug cartel and succumbs to extreme greed and power-hungry obsession.",
        rating: 4.6,
        mood: ["Crime", "Dark"]
    },
    {
        title: "The Departed",
        year: 2006,
        description: "An undercover cop and a mole in the police force attempt to identify each other while infiltrating an Irish mob syndicate in Boston.",
        rating: 4.8,
        mood: ["Crime", "Mind-blowing", "Dark"]
    },
    {
        title: "Casino",
        year: 1995,
        description: "A tale of greed, deception, money, power, and murder occurs between two mob best friends and a trophy wife over a gambling empire.",
        rating: 4.6,
        mood: ["Crime", "Dark"]
    },
    {
        title: "The Usual Suspects",
        year: 1995,
        description: "The sole survivor of a horrific gun battle on a boat tells a convoluted story about a legendary, mysterious mastermind criminal.",
        rating: 4.7,
        mood: ["Crime", "Mystery", "Mind-blowing"]
    },
    {
        title: "Reservoir Dogs",
        year: 1992,
        description: "When a simple jewelry heist goes horribly wrong, the surviving criminal masterminds begin to suspect that one of them is an informant.",
        rating: 4.6,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Snatch",
        year: 2000,
        description: "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster and Jewish jewelers fight to track down a priceless stolen diamond.",
        rating: 4.5,
        mood: ["Crime", "Adventure"]
    },
    {
        title: "Sicario",
        year: 2015,
        description: "An idealistic FBI agent is enlisted by an enigmatic government task force to aid in the escalating war against drugs at the border.",
        rating: 4.5,
        mood: ["Crime", "Dark"]
    },
    {
        title: "No Sudden Move",
        year: 2021,
        description: "A group of small-time criminals are hired to steal what they think is a simple document, but when the plan goes wrong, search for answers begins.",
        rating: 4.0,
        mood: ["Crime", "Mystery"]
    },
    {
        title: "American Gangster",
        year: 2007,
        description: "An honest detective leads a task force to bring down the massive drug smuggling empire of Harlem kingpin Frank Lucas.",
        rating: 4.6,
        mood: ["Crime", "Dark", "Motivational"]
    },
    {
        title: "City of God",
        year: 2002,
        description: "In the slums of Rio de Janeiro, two kids' paths diverge: one struggles to become a photographer, the other becomes a ruthless drug lord.",
        rating: 4.8,
        mood: ["Crime", "Dark", "Sad"]
    },
    {
        title: "Knives Out",
        year: 2019,
        description: "A modern whodunit where a detective investigates the death of the patriarch of an eccentric, combative, and highly suspect family.",
        rating: 4.6,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "Glass Onion: A Knives Out Mystery",
        year: 2022,
        description: "Tech billionaire Miles Bron invites his friends for a getaway on his private Greek island, but Benoit Blanc is on the case when someone dies.",
        rating: 4.4,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "Gone Girl",
        year: 2014,
        description: "With his wife's sudden disappearance having become the focus of a media circus, a husband sees the spotlight turned on him in suspicion.",
        rating: 4.7,
        mood: ["Mystery", "Dark", "Crime"]
    },
    {
        title: "Mulholland Drive",
        year: 2001,
        description: "After a car wreck renders a woman amnesiac, she and a hopeful Hollywood actress search for clues in a dreamlike Los Angeles.",
        rating: 4.5,
        mood: ["Mystery", "Mind-blowing", "Dark"]
    },
    {
        title: "The Girl with the Dragon Tattoo",
        year: 2011,
        description: "Journalist Mikael Blomkvist is aided in his search for a long-missing woman by Lisbeth Salander, a genius hacker.",
        rating: 4.5,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "Murder on the Orient Express",
        year: 2017,
        description: "When a passenger is murdered aboard a luxury train, celebrated detective Hercule Poirot is recruited to solve the mystery.",
        rating: 4.1,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "Death on the Nile",
        year: 2022,
        description: "While on vacation on the Nile, Hercule Poirot must investigate the murder of a young heiress aboard a glamorous river steamer.",
        rating: 4.0,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "A Haunting in Venice",
        year: 2023,
        description: "In post-WWII Venice, Hercule Poirot, now retired, reluctantly attends a seance where one of the guests is brutally murdered.",
        rating: 4.1,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "Mystic River",
        year: 2003,
        description: "The lives of three childhood friends are shattered when one of them suffers a family tragedy, triggering a dark investigation.",
        rating: 4.5,
        mood: ["Mystery", "Crime", "Sad"]
    },
    {
        title: "L.A. Confidential",
        year: 1997,
        description: "As corruption grows in 1950s Los Angeles, three policemen of different temperaments investigate a series of murders.",
        rating: 4.7,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "The Da Vinci Code",
        year: 2006,
        description: "A murder in Paris's Louvre Museum and cryptic clues in Leonardo da Vinci's paintings lead to the discovery of a religious mystery.",
        rating: 4.2,
        mood: ["Mystery", "Adventure", "Mind-blowing"]
    },
    {
        title: "Angels & Demons",
        year: 2009,
        description: "Harvard symbologist Robert Langdon works with a nuclear physicist to solve a murder and prevent a terrorist act against the Vatican.",
        rating: 4.2,
        mood: ["Mystery", "Adventure", "Mind-blowing"]
    },
    {
        title: "Inferno",
        year: 2016,
        description: "When Robert Langdon wakes up in an Italian hospital with amnesia, he teams up with a doctor to foil a deadly global plot.",
        rating: 3.9,
        mood: ["Mystery", "Adventure"]
    },
    {
        title: "Identity",
        year: 2003,
        description: "Stranded at a desolate Nevada motel during a nasty rainstorm, ten strangers become stranded and are killed off one by one.",
        rating: 4.3,
        mood: ["Mystery", "Mind-blowing", "Dark"]
    },
    {
        title: "The Illusionist",
        year: 2006,
        description: "In turn-of-the-century Vienna, a skilled magician uses his abilities to secure the love of a woman far above his social standing.",
        rating: 4.3,
        mood: ["Mystery", "Romance"]
    },
    {
        title: "Source Code",
        year: 2011,
        description: "A soldier wakes up in someone else's body and discovers he's part of an experimental program to query a commuter train bomber.",
        rating: 4.3,
        mood: ["Mystery", "Mind-blowing", "Adventure"]
    },
    {
        title: "Searching",
        year: 2018,
        description: "After his sixteen-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.",
        rating: 4.4,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "Enola Holmes",
        year: 2020,
        description: "When Enola Holmes, Sherlock's teen sister, discovers her mother is missing, she sets off to find her, becoming a super-sleuth.",
        rating: 4.1,
        mood: ["Mystery", "Adventure", "Motivational"]
    },
    {
        title: "The Game",
        year: 1997,
        description: "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down.",
        rating: 4.5,
        mood: ["Mystery", "Mind-blowing", "Dark"]
    },
    {
        title: "Now You See Me",
        year: 2013,
        description: "An F.B.I. Agent and an Interpol Detective track a team of illusionists who pull off bank robberies during their performances.",
        rating: 4.3,
        mood: ["Mystery", "Crime", "Adventure"]
    },
    {
        title: "The English Patient",
        year: 1996,
        description: "At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an intense love affair with a married woman.",
        rating: 4.5,
        mood: ["Romance", "Sad"]
    },
    {
        title: "As Good as It Gets",
        year: 1997,
        description: "A single mother and waitress, a misanthropic author, and a gay artist form an unlikely friendship after the artist is assaulted in a robbery.",
        rating: 4.4,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "Jerry Maguire",
        year: 1996,
        description: "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him and his former secretary.",
        rating: 4.3,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "The Lake House",
        year: 2006,
        description: "A lonely doctor who once occupied an unusual lakeside house begins exchanging love letters with its former resident, a frustrated architect. They discover that they are living two years apart.",
        rating: 4.1,
        mood: ["Romance", "Mind-blowing"]
    },
    {
        title: "50 First Dates",
        year: 2004,
        description: "Henry Roth is a man afraid of commitment until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams, until he discovers she has short-term memory loss and forgets him the next day.",
        rating: 4.2,
        mood: ["Romance"]
    },
    {
        title: "Serendipity",
        year: 2001,
        description: "A couple search for each other years after the night they first met, fell in love, and separated, trusting that destiny will bring them back together.",
        rating: 4.1,
        mood: ["Romance"]
    },
    {
        title: "Shakespeare in Love",
        year: 1998,
        description: "The fictional love affair between playwright William Shakespeare and Viola de Lesseps while he was writing Romeo and Juliet.",
        rating: 4.3,
        mood: ["Romance"]
    },
    {
        title: "Atonement",
        year: 2007,
        description: "Fledgling writer Briony Tallis, as a thirteen-year-old, irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit.",
        rating: 4.4,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Cold Mountain",
        year: 2003,
        description: "In the waning days of the American Civil War, a wounded soldier embarks on a perilous journey back home to North Carolina to reunite with his sweetheart.",
        rating: 4.2,
        mood: ["Romance", "Sad", "Adventure"]
    },
    {
        title: "Walk the Line",
        year: 2005,
        description: "A chronicle of country music legend Johnny Cash's life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis.",
        rating: 4.6,
        mood: ["Romance", "Sad", "Motivational"]
    },
    {
        title: "Sweet November",
        year: 2001,
        description: "A workaholic executive falls in love with a free-spirited woman who asks him to live with her for one month on the condition that he expects no commitment.",
        rating: 4.0,
        mood: ["Romance", "Sad"]
    },
    {
        title: "City of Angels",
        year: 1998,
        description: "An angel who watches over Los Angeles falls in love with a mortal woman and chooses to become human to be with her.",
        rating: 4.1,
        mood: ["Romance", "Sad"]
    },
    {
        title: "Chocolat",
        year: 2000,
        description: "A woman and her daughter open a chocolate shop in a small French village, shaking up the rigid morality of the community and finding love.",
        rating: 4.2,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "The Bodyguard",
        year: 1992,
        description: "A former Secret Service Agent takes on the job of protecting a famous pop singer, whose lifestyle is most unlike a president's.",
        rating: 4.1,
        mood: ["Romance", "Crime"]
    },
    {
        title: "Save the Last Dance",
        year: 2001,
        description: "A white midwestern girl moves to Chicago's South Side and falls in love with a black classmate who shares her passion for dance.",
        rating: 4.1,
        mood: ["Romance", "Motivational"]
    },
    {
        title: "Music and Lyrics",
        year: 2007,
        description: "A washed-up 1980s pop star is given days to write a chart-busting hit for a reigning teen diva, and teams up with a quirky lady who has a talent for lyrics.",
        rating: 4.0,
        mood: ["Romance"]
    },
    {
        title: "Kate & Leopold",
        year: 2001,
        description: "An English Duke from 1876 is accidentally dragged through a portal in time to modern-day New York, where he falls in love with a cynical advertising executive.",
        rating: 4.1,
        mood: ["Romance", "Mind-blowing"]
    },
    {
        title: "Love Actually",
        year: 2003,
        description: "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
        rating: 4.4,
        mood: ["Romance"]
    },
    {
        title: "The Time Traveler's Wife",
        year: 2009,
        description: "A Chicago librarian has a gene that causes him to involuntarily time travel, creating complications in his relationship with his wife.",
        rating: 4.2,
        mood: ["Romance", "Sad", "Mind-blowing"]
    },
    {
        title: "Safe Haven",
        year: 2013,
        description: "A young woman with a mysterious past arrives in a small North Carolina town, where her bond with a widower forces her to confront the dark secret that haunts her.",
        rating: 4.1,
        mood: ["Romance", "Mystery"]
    },
    {
        title: "Jumanji",
        year: 1995,
        description: "When two kids find and play a magical board game, they release a man trapped for decades in it and a host of dangers that can only be stopped by finishing the game.",
        rating: 4.4,
        mood: ["Adventure", "Mystery"]
    },
    {
        title: "Waterworld",
        year: 1995,
        description: "In a future where the polar ice-caps have melted and Earth is almost entirely submerged, a mutated mariner fights starvation and outlaw 'smokers'.",
        rating: 3.8,
        mood: ["Adventure"]
    },
    {
        title: "The Mummy Returns",
        year: 2001,
        description: "The mummified body of Imhotep is shipped to a museum in London, where he once again wakes up and begins his campaign of terror.",
        rating: 4.1,
        mood: ["Adventure", "Dark"]
    },
    {
        title: "National Treasure: Book of Secrets",
        year: 2007,
        description: "Treasure hunter Benjamin Franklin Gates looks to find the truth behind the assassination of Abraham Lincoln.",
        rating: 4.2,
        mood: ["Adventure", "Mystery"]
    },
    {
        title: "Journey to the Center of the Earth",
        year: 2008,
        description: "On a quest to find out what happened to his missing brother, a scientist, his nephew and their mountain guide discover a fantastic and dangerous lost world in the center of the earth.",
        rating: 3.9,
        mood: ["Adventure", "Mystery"]
    },
    {
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        year: 2005,
        description: "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
        rating: 4.5,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "The Chronicles of Narnia: Prince Caspian",
        year: 2008,
        description: "The Pevensie siblings return to Narnia, where they are enlisted to help defeat an evil king and restore the rightful heir to the land's throne, Prince Caspian.",
        rating: 4.2,
        mood: ["Adventure"]
    },
    {
        title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
        year: 2010,
        description: "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader.",
        rating: 4.1,
        mood: ["Adventure"]
    },
    {
        title: "Night at the Museum",
        year: 2006,
        description: "A newly recruited night security guard at the Museum of Natural History discovers that an ancient curse brings the animals and exhibits on display to life.",
        rating: 4.3,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Night at the Museum: Battle of the Smithsonian",
        year: 2009,
        description: "Security guard Larry Daley infiltrates the Smithsonian Institution in order to rescue Jedediah and Octavius, who have been shipped to the archives by mistake.",
        rating: 4.1,
        mood: ["Adventure"]
    },
    {
        title: "King Kong",
        year: 2005,
        description: "In 1933, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape.",
        rating: 4.3,
        mood: ["Adventure", "Sad"]
    },
    {
        title: "The Jungle Book",
        year: 2016,
        description: "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther Bagheera and free-spirited bear Baloo.",
        rating: 4.4,
        mood: ["Adventure", "Motivational"]
    },
    {
        title: "Percy Jackson & the Olympians: The Lightning Thief",
        year: 2010,
        description: "A teenager discovers he's the descendant of a Greek god and sets out on an adventure to settle an on-going battle between the gods.",
        rating: 3.9,
        mood: ["Adventure", "Mystery"]
    },
    {
        title: "Enchanted",
        year: 2007,
        description: "A young maiden in a land called Andalasia, ready for her wedding, is sent away to New York City by an evil queen, where she falls in love with a cynical divorce attorney.",
        rating: 4.2,
        mood: ["Adventure", "Romance"]
    },
    {
        title: "Holes",
        year: 2003,
        description: "A wrongfully convicted boy is sent to a brutal desert detention camp where he joins the cabin-mates in digging holes for mysterious reasons.",
        rating: 4.1,
        mood: ["Adventure", "Mystery"]
    },
    {
        title: "Zathura: A Space Adventure",
        year: 2005,
        description: "Two young brothers are drawn into an intergalactic adventure when their house is hurled through the depths of space by the magical board game they are playing.",
        rating: 4.0,
        mood: ["Adventure", "Mind-blowing"]
    },
    {
        title: "Peter Pan",
        year: 2003,
        description: "The darling children are visited by Peter Pan, who takes them to Neverland where an ongoing war with the evil Pirate Captain Hook is taking place.",
        rating: 4.1,
        mood: ["Adventure", "Romance"]
    },
    {
        title: "Lara Croft: Tomb Raider",
        year: 2001,
        description: "Video game adventurer Lara Croft comes to life in a movie where she rushes against time and villains to recover powerful ancient artifacts.",
        rating: 3.9,
        mood: ["Adventure", "Mystery"]
    },
    {
        title: "Prince of Persia: The Sands of Time",
        year: 2010,
        description: "A young fugitive prince and a princess must stop a villainous ruler who threatens to destroy the world with a special dagger that can reverse time.",
        rating: 4.1,
        mood: ["Adventure", "Romance"]
    },
    {
        title: "Clash of the Titans",
        year: 2010,
        description: "Perseus, demigod son of Zeus, battles the minions of the underworld to stop them from conquering heaven and earth.",
        rating: 3.8,
        mood: ["Adventure"]
    },
    {
        title: "A Bronx Tale",
        year: 1993,
        description: "A father becomes worried when a local gangster befriends his young son in the Bronx in the 1960s.",
        rating: 4.6,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Donnie Brasco",
        year: 1997,
        description: "An FBI undercover agent infiltrates the mob and finds himself identifying more with the mafia life than his real-life family.",
        rating: 4.5,
        mood: ["Crime", "Dark", "Sad"]
    },
    {
        title: "Carlito's Way",
        year: 1993,
        description: "A Puerto Rican ex-con, just released from prison, pledges to stay away from drug dealing and violence, but is pulled back in by his corrupt lawyer.",
        rating: 4.5,
        mood: ["Crime", "Dark", "Sad"]
    },
    {
        title: "Léon: The Professional",
        year: 1994,
        description: "A professional assassin takes in a young girl after her family is murdered by corrupt DEA agents, teaching her the trade.",
        rating: 4.8,
        mood: ["Crime", "Dark", "Sad"]
    },
    {
        title: "Traffic",
        year: 2000,
        description: "A conservative judge is appointed by the President to spearhead America's escalating war against drugs, only to discover that his own teenage daughter is an addict.",
        rating: 4.3,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Blow",
        year: 2001,
        description: "The story of George Jung, the man who established the American cocaine market in the 1970s.",
        rating: 4.2,
        mood: ["Crime", "Sad"]
    },
    {
        title: "Public Enemies",
        year: 2009,
        description: "The Feds try to take down notorious American gangsters John Dillinger, Baby Face Nelson and Pretty Boy Floyd during a booming crime wave in the 1930s.",
        rating: 4.0,
        mood: ["Crime", "Dark"]
    },
    {
        title: "The Irishman",
        year: 2019,
        description: "An illustration of Frank Sheeran's life as a truck driver who becomes a hitman involved with mobster Russell Bufalino and his crime family.",
        rating: 4.4,
        mood: ["Crime", "Dark", "Sad"]
    },
    {
        title: "Inside Man",
        year: 2006,
        description: "A police detective, a bank robber, and a high-power broker enter high-stakes negotiations after a brilliant heist spirals into a hostage situation.",
        rating: 4.4,
        mood: ["Crime", "Mystery"]
    },
    {
        title: "Primal Fear",
        year: 1996,
        description: "An altar boy is accused of murdering a priest, and the truth is buried several layers deep as his defense attorney makes a shocking discovery.",
        rating: 4.6,
        mood: ["Crime", "Mystery", "Mind-blowing"]
    },
    {
        title: "Scream",
        year: 1996,
        description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets her and her friends using horror films as part of a deadly game.",
        rating: 4.3,
        mood: ["Crime", "Mystery", "Dark"]
    },
    {
        title: "The Town",
        year: 2010,
        description: "A long-time thief plans his next job while trying to balance his feelings for a bank manager connected to one of his earlier bank robberies.",
        rating: 4.3,
        mood: ["Crime", "Romance", "Dark"]
    },
    {
        title: "Collateral",
        year: 2004,
        description: "A cab driver finds himself the hostage of an engaging contract killer as he makes his rounds from hit to hit during one night in Los Angeles.",
        rating: 4.4,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Baby Driver",
        year: 2017,
        description: "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
        rating: 4.4,
        mood: ["Crime", "Romance"]
    },
    {
        title: "Road to Perdition",
        year: 2002,
        description: "A mob enforcer's son witnesses a murder, forcing them to take to the road in a journey of survival and revenge.",
        rating: 4.4,
        mood: ["Crime", "Sad", "Dark"]
    },
    {
        title: "A History of Violence",
        year: 2005,
        description: "A mild-mannered man becomes a local hero after taking down two criminals in self-defense, but his actions draw the attention of mobsters.",
        rating: 4.2,
        mood: ["Crime", "Dark"]
    },
    {
        title: "Brooklyn's Finest",
        year: 2009,
        description: "Three unconnected Brooklyn cops wind up at the same deadly location after embarking on vastly different career paths.",
        rating: 4.0,
        mood: ["Crime", "Dark", "Sad"]
    },
    {
        title: "We Own the Night",
        year: 2007,
        description: "A New York nightclub manager tries to save his brother and father from Russian mafia hitmen.",
        rating: 4.0,
        mood: ["Crime", "Dark"]
    },
    {
        title: "The Place Beyond the Pines",
        year: 2012,
        description: "A motorcycle stunt rider turns to robbing banks to provide for his lover and their newborn child, a decision that puts him on a collision course with a cop.",
        rating: 4.3,
        mood: ["Crime", "Sad", "Dark"]
    },
    {
        title: "Focus",
        year: 2015,
        description: "In the midst of veteran con artist Nicky's latest scheme, a woman from his past - now an accomplished femme fatale - shows up and throws his plans for a loop.",
        rating: 4.1,
        mood: ["Crime", "Romance"]
    },
    {
        title: "Dark City",
        year: 1998,
        description: "A man struggles with memories of his past, including a wife he cannot remember, in a nightmarish city with no sun, run by beings who freeze time.",
        rating: 4.4,
        mood: ["Mystery", "Mind-blowing", "Dark"]
    },
    {
        title: "Jacob's Ladder",
        year: 1990,
        description: "A mourning Vietnam War veteran attempts to discover his past while suffering from a severe case of dissociation.",
        rating: 4.3,
        mood: ["Mystery", "Dark", "Sad"]
    },
    {
        title: "Frequency",
        year: 2000,
        description: "An accidental cross-time radio link connects a son in 2000 with his father in 1969, allowing them to cooperate to solve a serial murder mystery.",
        rating: 4.4,
        mood: ["Mystery", "Mind-blowing", "Sad"]
    },
    {
        title: "Missing",
        year: 2023,
        description: "After her mother disappears while on vacation in Colombia, a young woman uses the latest technology on her laptop to find her before it is too late.",
        rating: 4.2,
        mood: ["Mystery", "Mind-blowing"]
    },
    {
        title: "Scream 2",
        year: 1997,
        description: "Two years after the first series of murders, a copycat killer begins terrorizing Sidney Prescott at her college campus.",
        rating: 3.9,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "The Ring",
        year: 2002,
        description: "A journalist must investigate a mysterious videotape which seems to cause the death of anyone in a week of viewing it.",
        rating: 4.1,
        mood: ["Mystery", "Dark"]
    },
    {
        title: "What Lies Beneath",
        year: 2000,
        description: "The wife of a university research scientist believes her lakeside home is haunted by a ghost, but her husband dismisses her fears as delusions.",
        rating: 4.0,
        mood: ["Mystery", "Dark"]
    },
    {
        title: "Flightplan",
        year: 2005,
        description: "A bereaved woman and her daughter board a flight from Berlin to America. At 30,000 feet, the child vanishes, and nobody admits she was ever on board.",
        rating: 4.0,
        mood: ["Mystery", "Mind-blowing"]
    },
    {
        title: "Panic Room",
        year: 2002,
        description: "A divorced woman and her diabetic daughter take refuge in their newly purchased house's safe room during a home invasion.",
        rating: 4.1,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "The Butterfly Effect",
        year: 2004,
        description: "Evan Treborn suffers blackouts during key events of his life. As he grows up, he finds a way to travel back in time to alter his past.",
        rating: 4.4,
        mood: ["Mystery", "Mind-blowing", "Sad"]
    },
    {
        title: "Unknown",
        year: 2011,
        description: "A man awakens from a coma, only to discover that someone has assumed his identity and that no one, not even his wife, believes him.",
        rating: 4.1,
        mood: ["Mystery", "Mind-blowing"]
    },
    {
        title: "The Jacket",
        year: 2005,
        description: "A military veteran is sent to an institution for the criminally insane, where a doctor's experiments allow him to travel to the future and investigate his own death.",
        rating: 4.1,
        mood: ["Mystery", "Mind-blowing", "Sad"]
    },
    {
        title: "Fracture",
        year: 2007,
        description: "An attorney, intending on climbing the career ladder, finds himself in a battle of wits with an aeronautics engineer who shot his wife.",
        rating: 4.3,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "The Number 23",
        year: 2007,
        description: "A man becomes obsessed with a book that appears to mirror his own life, leading him to investigate a murder linked to the number 23.",
        rating: 3.8,
        mood: ["Mystery", "Dark"]
    },
    {
        title: "Gothika",
        year: 2003,
        description: "A brilliant criminal psychologist awakens as a patient in her own insane asylum, with no memory of the murder of her husband.",
        rating: 3.9,
        mood: ["Mystery", "Dark"]
    },
    {
        title: "A Simple Favor",
        year: 2018,
        description: "A single mother who vlogs looks to uncover the truth behind her best friend's sudden disappearance from their suburban town.",
        rating: 4.1,
        mood: ["Mystery", "Crime"]
    },
    {
        title: "Last Night in Soho",
        year: 2021,
        description: "An aspiring fashion designer is mysteriously able to enter the 1960s, where she encounters a dazzling wannabe singer, but the glamour resides with horror.",
        rating: 4.2,
        mood: ["Mystery", "Dark", "Sad"]
    },
    {
        title: "Mirage",
        year: 2018,
        description: "Two space-time dimensions connect, allowing a mother to save the life of a boy who lived in her house 25 years ago, but resulting in her losing her daughter.",
        rating: 4.4,
        mood: ["Mystery", "Mind-blowing", "Romance"]
    },
    {
        title: "Dolores Claiborne",
        year: 1995,
        description: "A daughter returns to her hometown when her mother is accused of murdering the wealthy woman she cared for, leading them to confront their dark past.",
        rating: 4.4,
        mood: ["Mystery", "Crime", "Sad"]
    },
    {
        title: "The Bone Collector",
        year: 1999,
        description: "A quadriplegic ex-homicide detective and a younger officer partner to track down a serial killer terrorizing Manhattan.",
        rating: 4.1,
        mood: ["Mystery", "Crime", "Dark"]
    },
    {
        title: "The Pianist",
        year: 2002,
        description: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
        rating: 4.8,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "The Iron Giant",
        year: 1999,
        description: "A young boy befriends a giant alien robot that a paranoid government agent wants to destroy.",
        rating: 4.7,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Room",
        year: 2015,
        description: "Held captive for years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world.",
        rating: 4.4,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Marley & Me",
        year: 2008,
        description: "A family learns important life lessons from their adorable, but naughty and neurotic dog.",
        rating: 4.1,
        mood: ["Sad"]
    },
    {
        title: "Inside I'm Dancing",
        year: 2004,
        description: "Two disabled young men find inspiration and a voice of their own when they move in together to live independently.",
        rating: 4.5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Limitless",
        year: 2011,
        description: "A mysterious pill enables a writer to access 100 percent of his brain, transforming his life and attracting dangerous attention.",
        rating: 4.3,
        mood: ["Mind-blowing", "Motivational"]
    },
    {
        title: "Ex Machina",
        year: 2014,
        description: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating a highly advanced humanoid A.I.",
        rating: 4.5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "The Machinist",
        year: 2004,
        description: "An industrial worker who hasn't slept in a year begins to doubt his own sanity as strange occurrences start taking place at work and home.",
        rating: 4.3,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "Annihilation",
        year: 2018,
        description: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature do not apply.",
        rating: 4.0,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "The Babadook",
        year: 2014,
        description: "A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house.",
        rating: 4.1,
        mood: ["Dark", "Sad"]
    },
    {
        title: "The Road",
        year: 2009,
        description: "In a bleak, post-apocalyptic world, a dying father defends his son as they travel south toward the coast in search of warmth.",
        rating: 4.2,
        mood: ["Sad", "Dark"]
    },
    {
        title: "Dead Man Walking",
        year: 1995,
        description: "A nun, comforting a condemned killer on Death Row, attempts to help him find spiritual redemption.",
        rating: 4.4,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Million Dollar Baby",
        year: 2004,
        description: "A determined woman works with a hardened boxing trainer to become a professional, leading to an incredibly deep relationship.",
        rating: 4.7,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "The Theory of Everything",
        year: 2014,
        description: "A look at the relationship between the famous physicist Stephen Hawking and his wife on their life-altering journey.",
        rating: 4.5,
        mood: ["Motivational", "Sad"]
    },
    {
        title: "Unbroken",
        year: 2014,
        description: "After a near-fatal plane crash in WWII, Olympian Louis Zamperini spends 47 days in a raft with two crewmen before being captured.",
        rating: 4.3,
        mood: ["Motivational"]
    },
    {
        title: "Coach Carter",
        year: 2005,
        description: "Controversial basketball coach Ken Carter puts school benches ahead of basketball matches, inspiring his players to academic success.",
        rating: 4.5,
        mood: ["Motivational"]
    },
    {
        title: "Freedom Writers",
        year: 2007,
        description: "A dedicated teacher in a racially divided Los Angeles school inspires her class to learn tolerance and pursue academics.",
        rating: 4.4,
        mood: ["Motivational"]
    },
    {
        title: "October Sky",
        year: 1999,
        description: "The true story of Homer Hickam, a coal miner's son who was inspired by the launch of Sputnik 1 to take up rocketry against his father's wishes.",
        rating: 4.5,
        mood: ["Motivational"]
    },
    {
        title: "The Blind Side",
        year: 2009,
        description: "The story of Michael Oher, a homeless and traumatized boy who became an All-American football player with the help of a caring woman and her family.",
        rating: 4.5,
        mood: ["Motivational"]
    },
    {
        title: "Gattaca",
        year: 1997,
        description: "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
        rating: 4.5,
        mood: ["Mind-blowing", "Motivational"]
    },
    {
        title: "The Ring",
        year: 2002,
        description: "A journalist must investigate a mysterious videotape which seems to cause the death of anyone in a week of viewing it.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "28 Days Later",
        year: 2002,
        description: "Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Dark"]
    },
    {
        title: "Shaun of the Dead",
        year: 2004,
        description: "A man's uneventful life is disrupted by the zombie apocalypse, forcing him to rise to the occasion and save his loved ones.",
        rating: 4.5,
        mood: ["Horror", "Adventure"]
    },
    {
        title: "Saw",
        year: 2004,
        description: "Two strangers awaken in a room with no recollection of how they got there, finding themselves parts of a sadistic game.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mystery"]
    },
    {
        title: "The Descent",
        year: 2005,
        description: "A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Dark"]
    },
    {
        title: "The Host",
        year: 2006,
        description: "A monster emerges from Seoul's Han River and focuses its wrath on local citizens, prompting a family to rescue their daughter.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Mind-blowing"]
    },
    {
        title: "Paranormal Activity",
        year: 2007,
        description: "After moving into a suburban home, a couple becomes increasingly disturbed by a demonic presence active at night.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "The Mist",
        year: 2007,
        description: "A freak storm unleashes bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mind-blowing"]
    },
    {
        title: "Orphan",
        year: 2009,
        description: "A husband and wife who recently lost their baby adopt a nine-year-old girl, who is not nearly as innocent as she claims.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Drag Me to Hell",
        year: 2009,
        description: "A loan officer ordered to evict an old woman finds herself the recipient of a supernatural curse, turning her life into a nightmare.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "Zombieland",
        year: 2009,
        description: "A shy student trying to reach his family, a gun-toting tough guy, and a pair of sisters join forces in a zombie-infested America.",
        rating: 4.5,
        mood: ["Horror", "Adventure"]
    },
    {
        title: "Let the Right One In",
        year: 2008,
        description: "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a peculiar girl who turns out to be a vampire.",
        rating: 5.0,
        mood: ["Horror", "Romance", "Dark"]
    },
    {
        title: "Insidious",
        year: 2010,
        description: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
        rating: 4.0,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Sinister",
        year: 2012,
        description: "A washed-up true-crime writer finds a box of super 8 home movies suggesting a murder is the work of a supernatural force.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mystery"]
    },
    {
        title: "The Cabin in the Woods",
        year: 2011,
        description: "Five friends go for a break at a remote cabin, where they discover the horrifying and mind-bending truth behind it.",
        rating: 4.5,
        mood: ["Horror", "Mind-blowing", "Mystery"]
    },
    {
        title: "The Conjuring",
        year: 2013,
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family confronted by a dark demonic presence in their farmhouse.",
        rating: 5.0,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Evil Dead",
        year: 2013,
        description: "Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up dormant demons.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "The Babadook",
        year: 2014,
        description: "A widowed mother battles with her son's fear of a monster lurking in the house, only to discover a sinister presence.",
        rating: 4.5,
        mood: ["Horror", "Sad", "Dark"]
    },
    {
        title: "It Follows",
        year: 2014,
        description: "A young woman is followed by an unknown supernatural force after a sexual encounter, passing the curse to others to survive.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "What We Do in the Shadows",
        year: 2014,
        description: "Housemates Vladislav, Viago, and Deacon are centuries-old vampires trying to cope with the complexities of modern life.",
        rating: 4.5,
        mood: ["Horror", "Adventure"]
    },
    {
        title: "A Girl Walks Home Alone at Night",
        year: 2014,
        description: "In the Iranian ghost-town Bad City, a place that reeks of lonely death, a lonely vampire stalks the town's unsavory inhabitants.",
        rating: 4.5,
        mood: ["Horror", "Romance", "Dark"]
    },
    {
        title: "The Witch",
        year: 2015,
        description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and a legendary demonic goat.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mystery"]
    },
    {
        title: "Train to Busan",
        year: 2016,
        description: "While a zombie virus breaks out in South Korea, passengers struggle to survive on a bullet train from Seoul to Busan.",
        rating: 5.0,
        mood: ["Horror", "Sad", "Adventure"]
    },
    {
        title: "Don't Breathe",
        year: 2016,
        description: "Hoping to walk away with a massive fortune, three thieves break into the house of a blind veteran who isn't as helpless as he seems.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Crime"]
    },
    {
        title: "Get Out",
        year: 2017,
        description: "A young African-American visits his girlfriend's family, where his simmering uneasiness reaches a terrifying boiling point.",
        rating: 5.0,
        mood: ["Horror", "Mind-blowing", "Mystery"]
    },
    {
        title: "It",
        year: 2017,
        description: "A group of bullied kids band together to destroy a shape-shifting monster which disguises itself as a clown and preys on children.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Dark"]
    },
    {
        title: "Hereditary",
        year: 2018,
        description: "A grieving family is haunted by disturbing occurrences after the death of their secretive grandmother, unravelling dark secrets.",
        rating: 5.0,
        mood: ["Horror", "Dark", "Sad"]
    },
    {
        title: "A Quiet Place",
        year: 2018,
        description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from blind monsters with ultra-sensitive hearing.",
        rating: 5.0,
        mood: ["Horror", "Adventure", "Sad"]
    },
    {
        title: "Bird Box",
        year: 2018,
        description: "Five years after an ominous unseen presence drives society to suicide, a mother and her children desperately try to reach safety blindfolded.",
        rating: 4.0,
        mood: ["Horror", "Adventure", "Dark"]
    },
    {
        title: "Midsommar",
        year: 2019,
        description: "A couple travels to Scandinavia to visit a rural village's fabled festival, but what begins as an idyllic retreat quickly devolves into a pagan nightmare.",
        rating: 4.5,
        mood: ["Horror", "Sad", "Dark"]
    },
    {
        title: "The Lighthouse",
        year: 2019,
        description: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mind-blowing"]
    },
    {
        title: "The Invisible Man",
        year: 2020,
        description: "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax as she is haunted by an unseen presence.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Host",
        year: 2020,
        description: "Six friends hire a medium to hold a seance via Zoom during lockdown, but they accidentally invite a malicious demonic entity.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "A Quiet Place Part II",
        year: 2020,
        description: "Following the deadly events at home, the Abbott family must now face the terrors of the outside world, continuing their fight in silence.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Sad"]
    },
    {
        title: "Malignant",
        year: 2021,
        description: "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers they are reality.",
        rating: 4.0,
        mood: ["Horror", "Mind-blowing", "Dark"]
    },
    {
        title: "The Black Phone",
        year: 2021,
        description: "Abducted by a child killer and locked in a soundproof basement, a boy starts receiving calls on a disconnected phone from the killer's previous victims.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Pearl",
        year: 2022,
        description: "Trapped on her family's isolated farm, Pearl must tend to her ailing father under the bitter watch of her mother, leading to violent ambition.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Sad"]
    },
    {
        title: "X",
        year: 2022,
        description: "A group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive hosts catch them, they fight for survival.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "Smile",
        year: 2022,
        description: "After witnessing a bizarre, traumatic incident involving a patient, a doctor starts experiencing frightening occurrences she can't explain.",
        rating: 4.0,
        mood: ["Horror", "Dark", "Mystery"]
    },
    {
        title: "Barbarian",
        year: 2022,
        description: "A woman booking a rental home finds the house is double-booked, but she soon discovers there is much more to fear than just an unexpected guest.",
        rating: 4.5,
        mood: ["Horror", "Mind-blowing", "Dark"]
    },
    {
        title: "Nope",
        year: 2022,
        description: "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery in the skies above.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Mind-blowing"]
    },
    {
        title: "Talk to Me",
        year: 2022,
        description: "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked until one of them goes too far.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Sad"]
    },
    {
        title: "M3GAN",
        year: 2022,
        description: "A robotics engineer builds a life-like doll designed to be a child's companion, but the doll takes on a terrifying life of its own.",
        rating: 4.0,
        mood: ["Horror", "Mind-blowing"]
    },
    {
        title: "Late Night with the Devil",
        year: 2023,
        description: "A live television broadcast in 1977 goes horribly wrong, unleashing evil into the nation's living rooms during a late-night talk show.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mind-blowing"]
    },
    {
        title: "Scream",
        year: 2022,
        description: "Twenty-five years after a streak of brutal murders in Woodsboro, a new killer has donned the Ghostface mask and targets teenagers.",
        rating: 4.5,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Evil Dead Rise",
        year: 2023,
        description: "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, demanding survival.",
        rating: 4.5,
        mood: ["Horror", "Dark"]
    },
    {
        title: "When Evil Lurks",
        year: 2023,
        description: "In a remote village, two brothers find a demon-infected man just about to bring forth evil itself, trying to escape but speeding up the terror.",
        rating: 4.5,
        mood: ["Horror", "Dark"]
    },
    {
        title: "Longlegs",
        year: 2024,
        description: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Mystery"]
    },
    {
        title: "A Quiet Place: Day One",
        year: 2024,
        description: "Experience the day the world went silent in this tense thriller about a young woman finding herself trapped in NYC during an alien invasion.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Sad"]
    },
    {
        title: "Alien: Romulus",
        year: 2024,
        description: "While scavenging a derelict space station, a group of young space colonizers come face-to-face with the most terrifying creature in the universe.",
        rating: 4.5,
        mood: ["Horror", "Adventure", "Mind-blowing"]
    },
    {
        title: "The Substance",
        year: 2024,
        description: "A fading celebrity takes a black-market drug that temporarily creates a younger version of herself, leading to terrifying consequences.",
        rating: 5.0,
        mood: ["Horror", "Dark", "Mind-blowing"]
    },
    {
        title: "Cuckoo",
        year: 2024,
        description: "A 17-year-old girl is forced to move to a resort in the German Alps, where she gets pulled into a supernatural conspiracy.",
        rating: 4.0,
        mood: ["Horror", "Adventure", "Mystery"]
    },
    {
        title: "Ma",
        year: 2019,
        description: "A lonely woman befriends some teenagers and lets them party in her basement, but her hospitality begins to curdle into obsession.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "Us",
        year: 2019,
        description: "A family's serene beach vacation turns to chaos when their exact doppelgängers appear and begin to terrorize them.",
        rating: 4.5,
        mood: ["Horror", "Mind-blowing", "Dark"]
    },
    {
        title: "The Purge",
        year: 2013,
        description: "A wealthy family is held hostage for harboring the target of a murderous syndicate during a 12-hour period where all crime is legal.",
        rating: 4.0,
        mood: ["Horror", "Dark"]
    },
    {
        title: "As Above, So Below",
        year: 2014,
        description: "When a team of explorers ventures into the uncharted catacombs beneath Paris, they uncover a dark secret that forces them to face their demons.",
        rating: 4.0,
        mood: ["Horror", "Mystery", "Adventure"]
    },
    {
        title: "Lights Out",
        year: 2016,
        description: "Rebecca must face the terror behind her family's past when a supernatural entity appearing only in the dark returns.",
        rating: 4.0,
        mood: ["Horror", "Dark", "Mystery"]
    },
    {
        title: "The Ring Two",
        year: 2005,
        description: "Six months after the terrifying events, Rachel and her son move to Oregon, only to find themselves pursued by Samara's spirit once more.",
        rating: 4.0,
        mood: ["Horror", "Mystery", "Dark"]
    },
    {
        title: "Ready or Not",
        year: 2019,
        description: "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to participate in a terrifying game of hide-and-seek.",
        rating: 4.5,
        mood: ["Horror", "Dark", "Adventure"]
    },
    {
        title: "Doctor Sleep",
        year: 2019,
        description: "Years following the events of 'The Shining', a now-adult Dan Torrance must protect a young girl from a cult known as The True Knot.",
        rating: 4.5,
        mood: ["Horror", "Mind-blowing", "Dark"]
    }
];

for (var g = 0; g < movies.length; g++) {
    if (movies[g].title === "The Goonies") {
        movies[g].year = 1985;
    }
    if (movies[g].mood && movies[g].mood.length > 3) {
        movies[g].mood = movies[g].mood.slice(0, 3);
    }
}

var movieGrid = document.getElementById("movie-grid");
var statusText = document.getElementById("status-bar");
var moodButtons = document.querySelectorAll(".mood-btn");
var anotherBtnWrapper = document.getElementById("another-btn-wrapper");
var anotherBtn = document.getElementById("another-btn");
var searchInput = document.getElementById("movie-search");
var clearSearchBtn = document.getElementById("clear-search-btn");
var searchContainer = document.querySelector(".search-container");

var currentSelectedMood = "All";
var moodQueue = [];
var queueIndex = 0;

function shuffleArray(array) {
    var shuffled = array.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

function generateStarHTML(rating) {
    var starsHTML = "";
    var roundedRating = Math.round(rating * 2) / 2; 
    var fullStars = Math.floor(roundedRating);
    var hasHalf = (roundedRating % 1 !== 0);
    
    for (var i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML = starsHTML + "★";
        } else if (i === fullStars + 1 && hasHalf) {
            starsHTML = starsHTML + '<span class="half-star">★</span>';
        } else {
            starsHTML = starsHTML + '<span class="empty-star">☆</span>';
        }
    }
    return '<span class="rating">' + starsHTML + '</span>';
}

function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function displayMovies(moviesToShow) {
    movieGrid.innerHTML = "";
    
    if (moviesToShow.length === 0) {
        var query = searchInput ? searchInput.value.trim() : "";
        if (currentSelectedMood === "All" && !query) {
            return;
        }
        movieGrid.innerHTML = '<div class="empty-state">' +
            '<div class="empty-icon">🎬</div>' +
            '<h3 class="empty-title">No movies found</h3>' +
            '<p class="empty-text">No recommendations match your exact selection right now. Try another mood!</p>' +
            '</div>';
        return;
    }
    
    var watchlist = getWatchlist();
    
    for (var i = 0; i < moviesToShow.length; i++) {
        var movie = moviesToShow[i];
        
        var chipsHTML = "";
        for (var m = 0; m < movie.mood.length; m++) {
            chipsHTML = chipsHTML + '<span class="mood-chip">' + movie.mood[m] + '</span>';
        }
        
        var isFav = watchlist.indexOf(movie.title) !== -1;
        var favClass = isFav ? "favorite-card-icon active" : "favorite-card-icon";
        var heartSymbol = isFav ? "❤️" : "🤍";

        var card = document.createElement("article");
        card.className = "card fade-in";
        card.style.animationDelay = (Math.min(i, 20) * 0.04) + "s"; 
        card.innerHTML = 
            '<button type="button" class="' + favClass + '" data-title="' + escapeHTML(movie.title) + '" aria-label="Add to watchlist">' + heartSymbol + '</button>' +
            '<div class="card-header">' +
                '<div class="card-meta">' +
                    '<span class="year-badge">' + movie.year + '</span>' +
                    '<div class="mood-chips">' + chipsHTML + '</div>' +
                '</div>' +
                '<h2 class="card-title">' + movie.title + '</h2>' +
            '</div>' +
            '<p class="card-description">' + movie.description + '</p>' +
            '<div class="card-footer">' +
                generateStarHTML(movie.rating) +
                '<button type="button" class="view-details" style="background:none;border:none;color:cyan;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;padding:0;">Details 🔍</button>' +
            '</div>';
        
        (function(mObj, cardEl) {
            var heartBtn = cardEl.querySelector(".favorite-card-icon");
            if (heartBtn) {
                heartBtn.addEventListener("click", function(e) {
                    e.stopPropagation();
                    toggleFavorite(mObj.title);
                });
            }
            
            cardEl.addEventListener("click", function() {
                openMovieDetailsModal(mObj);
            });
            
            var detailsBtn = cardEl.querySelector(".view-details");
            if (detailsBtn) {
                detailsBtn.addEventListener("click", function(e) {
                    e.stopPropagation();
                    openMovieDetailsModal(mObj);
                });
            }
        })(movie, card);
        
        movieGrid.appendChild(card);
    }
}

function applyFilters(resetIndex) {
    if (resetIndex === undefined) {
        resetIndex = true;
    }
    
    if (searchContainer) {
        searchContainer.style.display = currentSelectedMood === "All" ? "flex" : "none";
    }
    
    var searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";
    
    if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? "block" : "none";
    }
    
    var basePool = [];
    if (currentSelectedMood === "All" || currentSelectedMood === "Random") {
        basePool = movies;
    } else {
        for (var i = 0; i < movies.length; i++) {
            var mMovie = movies[i];
            for (var m = 0; m < mMovie.mood.length; m++) {
                if (mMovie.mood[m] === currentSelectedMood) {
                    basePool.push(mMovie);
                    break;
                }
            }
        }
    }
    
    var filteredPool = [];
    if (searchQuery) {
        for (var i = 0; i < basePool.length; i++) {
            if (basePool[i].title.toLowerCase().indexOf(searchQuery) !== -1) {
                filteredPool.push(basePool[i]);
            }
        }
    } else {
        if (currentSelectedMood === "All") {
            filteredPool = [];
        } else {
            filteredPool = basePool;
        }
    }
    
    if (currentSelectedMood === "All") {
        moodQueue = [];
        queueIndex = 0;
        
        displayMovies(filteredPool);
        anotherBtnWrapper.style.display = "none";
        
        if (searchQuery) {
            statusText.style.display = "block";
            statusText.innerHTML = "Found " + filteredPool.length + " matching " + (filteredPool.length === 1 ? "masterpiece" : "masterpieces") + " for \"" + searchInput.value.trim() + "\"";
        } else {
            statusText.style.display = "none";
            statusText.innerHTML = "";
        }
    } else {
        statusText.style.display = "block";
        if (filteredPool.length === 0) {
            displayMovies([]);
            anotherBtnWrapper.style.display = "none";
            
            if (searchQuery) {
                if (currentSelectedMood === "Random") {
                    statusText.innerHTML = "No movies match \"" + searchInput.value.trim() + "\"";
                } else {
                    statusText.innerHTML = "No matching \"" + currentSelectedMood + "\" movies for \"" + searchInput.value.trim() + "\"";
                }
            } else {
                statusText.innerHTML = "No curated highlights found for \"" + currentSelectedMood + "\"";
            }
            return;
        }
        
        if (resetIndex) {
            moodQueue = shuffleArray(filteredPool);
            queueIndex = 0;
        }
        
        if (queueIndex >= moodQueue.length) {
            queueIndex = 0;
        }
        
        var currentMovie = moodQueue[queueIndex];
        displayMovies([currentMovie]);
        
        statusText.style.display = "none";
        statusText.innerHTML = "";
        
        if (moodQueue.length > 1) {
            anotherBtnWrapper.style.display = "flex";
            if (currentSelectedMood === "Random") {
                anotherBtn.innerHTML = "<span>🎲</span> Another Random Movie";
            } else {
                anotherBtn.innerHTML = "<span>🎬</span> Show Another " + currentSelectedMood + " Movie";
            }
        } else {
            anotherBtnWrapper.style.display = "none";
        }
    }
}

anotherBtn.addEventListener("click", function() {
    if (moodQueue.length > 1) {
        queueIndex++;
        if (queueIndex >= moodQueue.length) {
            queueIndex = 0;
            moodQueue = shuffleArray(moodQueue);
        }
        applyFilters(false);
    }
});

for (var i = 0; i < moodButtons.length; i++) {
    var button = moodButtons[i];
    
    button.addEventListener("click", function(event) {
        var clickedButton = event.currentTarget;
        var selectedMood = clickedButton.getAttribute("data-mood");
        
        for (var b = 0; b < moodButtons.length; b++) {
            moodButtons[b].classList.remove("active");
        }
        
        clickedButton.classList.add("active");
        currentSelectedMood = selectedMood;
        
        if (searchInput) {
            searchInput.value = "";
        }
        
        applyFilters(true);
    });
}

if (searchInput) {
    searchInput.addEventListener("input", function() {
        applyFilters(true);
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", function() {
        if (searchInput) {
            searchInput.value = "";
        }
        applyFilters(true);
        if (searchInput) {
            searchInput.focus();
        }
    });
}

var quizQuestions = [
    {
        category: "Sad",
        question: "Are you in the mood for a poignant, deeply emotional story that might make you shed a tear?",
        emoji: "😢"
    },
    {
        category: "Motivational",
        question: "Do you need an extra boost of inspiration, high energy, or hope to conquer your challenges?",
        emoji: "⚡"
    },
    {
        category: "Dark",
        question: "Are you drawn to gritty, intense, or morally complex stories with dark criminal or edgy themes?",
        emoji: "🌌"
    },
    {
        category: "Mind-blowing",
        question: "Would you love a mind-bending plot twist, a high-concept riddle, or a film that questions reality?",
        emoji: "🧠"
    },
    {
        category: "Adventure",
        question: "Are you craving a grand journey, a thrilling expedition, or a wild escape to distant worlds?",
        emoji: "🧭"
    },
    {
        category: "Romance",
        question: "Are you looking for passionate connections, love stories, or deep emotional relationships?",
        emoji: "💖"
    },
    {
        category: "Crime",
        question: "Would you like to step into the criminal underworld, heists, or cat-and-mouse detective chases?",
        emoji: "🕵️‍♂️"
    },
    {
        category: "Mystery",
        question: "Are you in the mood to solve puzzles, uncover ancient secrets, or chase mysterious keys?",
        emoji: "🧩"
    },
    {
        category: "Horror",
        question: "Are you in the mood for chilling suspense, supernatural scares, or legendary modern thrills that keep you up at night?",
        emoji: "👻"
    }
];

var quizScores = {};
var quizCurrentIndex = 0;
var topMatchedMoods = [];

var quizOverlay = document.getElementById("quiz-modal-overlay");
var openQuizBtn = document.getElementById("open-quiz-btn");
var closeQuizBtn = document.getElementById("close-quiz-btn");
var startQuizBtn = document.getElementById("start-quiz-btn");

var quizWelcomeScreen = document.getElementById("quiz-welcome-screen");
var quizQuestionScreen = document.getElementById("quiz-question-screen");
var quizResultScreen = document.getElementById("quiz-result-screen");

var quizCurrentNum = document.getElementById("quiz-current-num");
var quizProgressFill = document.getElementById("quiz-progress-fill");
var quizQuestionCategory = document.getElementById("quiz-question-category");
var quizQuestionText = document.getElementById("quiz-question-text");
var quizOptButtons = document.querySelectorAll(".quiz-options-grid .quiz-opt-btn");

var quizMatchedBadges = document.getElementById("quiz-matched-badges");
var quizRecsGrid = document.getElementById("quiz-recs-grid");
var quizApplyBtn = document.getElementById("quiz-apply-btn");
var quizRestartBtn = document.getElementById("quiz-restart-btn");

function showQuizScreen(screenToShow) {
    var screens = [quizWelcomeScreen, quizQuestionScreen, quizResultScreen];
    for (var s = 0; s < screens.length; s++) {
        if (screens[s]) {
            screens[s].classList.remove("active");
        }
    }
    if (screenToShow) {
        screenToShow.classList.add("active");
    }
}

function resetQuiz() {
    quizCurrentIndex = 0;
    quizScores = {
        "Sad": 0,
        "Motivational": 0,
        "Dark": 0,
        "Mind-blowing": 0,
        "Adventure": 0,
        "Romance": 0,
        "Crime": 0,
        "Mystery": 0,
        "Horror": 0
    };
    showQuizScreen(quizWelcomeScreen);
}

function loadQuizQuestion() {
    if (quizCurrentIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }
    var currentQ = quizQuestions[quizCurrentIndex];
    if (quizCurrentNum) {
        quizCurrentNum.textContent = (quizCurrentIndex + 1).toString();
    }
    if (quizProgressFill) {
        var percentage = (quizCurrentIndex / quizQuestions.length) * 100;
        quizProgressFill.style.width = percentage + "%";
    }
    if (quizQuestionCategory) {
        quizQuestionCategory.textContent = currentQ.category + " " + currentQ.emoji;
    }
    if (quizQuestionText) {
        quizQuestionText.textContent = currentQ.question;
    }
    showQuizScreen(quizQuestionScreen);
}

function handleQuizAnswer(val) {
    var currentQ = quizQuestions[quizCurrentIndex];
    quizScores[currentQ.category] = val;
    quizCurrentIndex++;
    if (quizCurrentIndex >= quizQuestions.length) {
        if (quizProgressFill) {
            quizProgressFill.style.width = "100%";
        }
        setTimeout(finishQuiz, 300);
    } else {
        loadQuizQuestion();
    }
}

function finishQuiz() {
    var scorePairs = [];
    for (var category in quizScores) {
        if (quizScores.hasOwnProperty(category)) {
            scorePairs.push({ category: category, score: quizScores[category] });
        }
    }
    
    scorePairs.sort(function(a, b) {
        return b.score - a.score;
    });
    
    var topMood1 = scorePairs[0].category;
    var topMood2 = scorePairs[1].category;
    topMatchedMoods = [topMood1, topMood2];
    
    if (quizMatchedBadges) {
        var emojiMap = {
            "Sad": "😢",
            "Motivational": "⚡",
            "Dark": "🌌",
            "Mind-blowing": "🧠",
            "Adventure": "🧭",
            "Romance": "💖",
            "Crime": "🕵️‍♂️",
            "Mystery": "🧩",
            "Horror": "👻"
        };
        quizMatchedBadges.innerHTML = 
            '<div class="quiz-match-badge">' + (emojiMap[topMood1] || "🎬") + ' ' + topMood1 + '</div>' +
            '<div class="quiz-match-badge">' + (emojiMap[topMood2] || "🎬") + ' ' + topMood2 + '</div>';
    }
    
    var dualMatches = [];
    var singleMatches = [];
    for (var m = 0; m < movies.length; m++) {
        var movie = movies[m];
        var hasMood1 = movie.mood.indexOf(topMood1) !== -1;
        var hasMood2 = movie.mood.indexOf(topMood2) !== -1;
        if (hasMood1 && hasMood2) {
            dualMatches.push(movie);
        } else if (hasMood1 || hasMood2) {
            singleMatches.push(movie);
        }
    }
    
    var pool = [];
    if (dualMatches.length > 0) {
        pool = shuffleArray(dualMatches).concat(shuffleArray(singleMatches));
    } else {
        pool = shuffleArray(singleMatches);
    }
    
    var recMovies = pool.slice(0, 2);
    
    if (quizRecsGrid) {
        quizRecsGrid.innerHTML = "";
        for (var r = 0; r < recMovies.length; r++) {
            var recMovie = recMovies[r];
            var chipsHTML = "";
            for (var c = 0; c < recMovie.mood.length; c++) {
                chipsHTML = chipsHTML + '<span class="mood-chip">' + recMovie.mood[c] + '</span>';
            }
            var cardScore = recMovie.rating;
            var detailsUrl = "https://www.imdb.com/find?q=" + encodeURIComponent(recMovie.title + " " + recMovie.year);
            
            var cardHTML = 
                '<div class="quiz-rec-card">' +
                    '<div class="quiz-rec-header">' +
                        '<h5 class="quiz-rec-title">' + recMovie.title + '</h5>' +
                        '<div class="quiz-rec-meta">' +
                            '<span class="quiz-rec-year">' + recMovie.year + '</span>' +
                            '<div class="mood-chips">' + chipsHTML + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<p class="quiz-rec-description">' + recMovie.description + '</p>' +
                    '<div class="quiz-rec-footer">' +
                        generateStarHTML(cardScore) +
                        '<a href="' + detailsUrl + '" target="_blank" rel="noopener noreferrer" class="quiz-rec-details-btn">Details ↗</a>' +
                    '</div>' +
                '</div>';
            quizRecsGrid.innerHTML = quizRecsGrid.innerHTML + cardHTML;
        }
    }
    
    showQuizScreen(quizResultScreen);
}

function openQuiz() {
    if (quizOverlay) {
        quizOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
    resetQuiz();
}

function closeQuiz() {
    if (quizOverlay) {
        quizOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

if (openQuizBtn) {
    openQuizBtn.addEventListener("click", openQuiz);
}
if (closeQuizBtn) {
    closeQuizBtn.addEventListener("click", closeQuiz);
}
if (quizOverlay) {
    quizOverlay.addEventListener("click", function(e) {
        if (e.target === quizOverlay) {
            closeQuiz();
        }
    });
}
if (startQuizBtn) {
    startQuizBtn.addEventListener("click", loadQuizQuestion);
}

for (var q = 0; q < quizOptButtons.length; q++) {
    (function(btn) {
        btn.addEventListener("click", function() {
            var scoreVal = parseInt(btn.getAttribute("data-value"), 10);
            handleQuizAnswer(scoreVal);
        });
    })(quizOptButtons[q]);
}

if (quizRestartBtn) {
    quizRestartBtn.addEventListener("click", resetQuiz);
}

if (quizApplyBtn) {
    quizApplyBtn.addEventListener("click", function() {
        if (topMatchedMoods.length > 0) {
            var chosenMood = topMatchedMoods[0];
            for (var b = 0; b < moodButtons.length; b++) {
                if (moodButtons[b].getAttribute("data-mood") === chosenMood) {
                    moodButtons[b].classList.add("active");
                } else {
                    moodButtons[b].classList.remove("active");
                }
            }
            currentSelectedMood = chosenMood;
            if (searchInput) {
                searchInput.value = "";
            }
            applyFilters(true);
            closeQuiz();
            var gridElement = document.getElementById("movie-grid");
            if (gridElement) {
                gridElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
}

applyFilters(true);

var theaterOverlay = document.getElementById("theater-modal-overlay");
var theaterModal = document.getElementById("theater-modal");
var closeTheaterBtn = document.getElementById("close-theater-btn");

var drawerOverlay = document.getElementById("drawer-overlay");
var watchlistDrawer = document.getElementById("watchlist-drawer");
var closeDrawerBtn = document.getElementById("close-drawer-btn");
var watchlistFloatingTrigger = document.getElementById("watchlist-floating-trigger");
var watchlistCountBadge = document.getElementById("watchlist-count-badge");
var drawerEmptyState = document.getElementById("drawer-empty-state");
var watchlistItemsContainer = document.getElementById("watchlist-items-container");
var watchlistSpinBtn = document.getElementById("watchlist-spin-btn");
var watchlistClearAllBtn = document.getElementById("watchlist-clear-all");

function getWatchlist() {
    try {
        var saved = localStorage.getItem("umar_cine_watchlist");
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.error("Localstorage watchlist read error", e);
    }
    return [];
}

function saveWatchlist(list) {
    try {
        localStorage.setItem("umar_cine_watchlist", JSON.stringify(list));
    } catch (e) {
        console.error("Localstorage watchlist save error", e);
    }
    updateWatchlistBadge();
}

function updateWatchlistBadge() {
    var list = getWatchlist();
    if (watchlistCountBadge) {
        watchlistCountBadge.textContent = list.length.toString();
        
        watchlistFloatingTrigger.classList.remove("pulse");
        void watchlistFloatingTrigger.offsetWidth; 
        watchlistFloatingTrigger.classList.add("pulse");
    }
}

function toggleFavorite(movieTitle) {
    var list = getWatchlist();
    var idx = list.indexOf(movieTitle);
    var added = false;
    
    if (idx !== -1) {
        list.splice(idx, 1);
    } else {
        list.push(movieTitle);
        added = true;
    }
    
    saveWatchlist(list);
    
    var hearts = document.querySelectorAll(".favorite-card-icon");
    for (var h = 0; h < hearts.length; h++) {
        if (hearts[h].getAttribute("data-title") === movieTitle) {
            if (added) {
                hearts[h].classList.add("active");
                hearts[h].innerHTML = "❤️";
            } else {
                hearts[h].classList.remove("active");
                hearts[h].innerHTML = "🤍";
            }
        }
    }
    
    var modalTitle = document.getElementById("theater-title");
    if (modalTitle && modalTitle.textContent === movieTitle) {
        var modalFavBtn = document.getElementById("theater-fav-toggle-btn");
        if (modalFavBtn) {
            if (added) {
                modalFavBtn.classList.add("favorited");
                modalFavBtn.innerHTML = "<span>❤️</span> Saved in Cine-Vault";
            } else {
                modalFavBtn.classList.remove("favorited");
                modalFavBtn.innerHTML = "<span>❤️</span> Save to Cine-Vault Watchlist";
            }
        }
    }
    
    updateWatchlistUI();
}

function stopSynthPreview() {
}

var theaterActiveMovie = null;

function openMovieDetailsModal(movie) {
    theaterActiveMovie = movie;
    stopSynthPreview(); 
    
    var mTitle = document.getElementById("theater-title");
    var mYear = document.getElementById("theater-year");
    var mMoods = document.getElementById("theater-moods");
    var mDesc = document.getElementById("theater-description");
    var mRating = document.getElementById("theater-rating");
    var mImdbLink = document.getElementById("theater-imdb-link");
    var mFavBtn = document.getElementById("theater-fav-toggle-btn");
    var mVibeList = document.getElementById("vibe-analytics");
    
    if (mTitle) mTitle.textContent = movie.title;
    if (mYear) mYear.textContent = movie.year;
    if (mDesc) mDesc.textContent = movie.description;

    var cinemaBrand = document.getElementById("cinema-screen-brand");
    if (cinemaBrand) {
        cinemaBrand.textContent = "CINE-VAULT: " + movie.title.toUpperCase();
    }
    
    if (mRating) {
        var starSymbols = "";
        for (var st = 1; st <= 5; st++) {
            starSymbols += st <= movie.rating ? "★" : "☆";
        }
        mRating.innerHTML = '<span style="color: yellow; letter-spacing: 2px;">' + starSymbols + '</span>';
    }
    
    if (mMoods) {
        mMoods.innerHTML = "";
        for (var c = 0; c < movie.mood.length; c++) {
            mMoods.innerHTML += '<span class="mood-chip" style="background: rgba(0, 242, 254, 0.15); border: 1px solid rgba(0, 242, 254, 0.4); color: cyan;">' + movie.mood[c] + '</span>';
        }
    }
    
    var watchlist = getWatchlist();
    var isFav = watchlist.indexOf(movie.title) !== -1;
    if (mFavBtn) {
        if (isFav) {
            mFavBtn.classList.add("favorited");
            mFavBtn.innerHTML = "<span>❤️</span> Saved in Cine-Vault";
        } else {
            mFavBtn.classList.remove("favorited");
            mFavBtn.innerHTML = "<span>❤️</span> Save to Cine-Vault Watchlist";
        }
    }
    
    if (mImdbLink) {
        mImdbLink.href = "https://www.imdb.com/find?q=" + encodeURIComponent(movie.title + " " + movie.year);
    }
    
    if (mVibeList) {
        mVibeList.innerHTML = "";
        var availableMoods = ["Sad", "Motivational", "Dark", "Mind-blowing", "Adventure", "Romance", "Crime", "Mystery", "Horror"];
        
        for (var v = 0; v < availableMoods.length; v++) {
            var mName = availableMoods[v];
            var isPrimary = movie.mood.indexOf(mName) !== -1;
            
            var targetPercent = isPrimary ? (Math.floor(Math.random() * 14) + 85) : (Math.floor(Math.random() * 24) + 15);
            
            var vibeHTML = 
                '<div class="vibe-bar-wrapper">' +
                    '<div class="vibe-bar-labels">' +
                        '<span class="vibe-bar-label">' + mName + '</span>' +
                        '<span class="vibe-bar-percent">' + targetPercent + '%</span>' +
                    '</div>' +
                    '<div class="vibe-bar-track">' +
                        '<div class="vibe-bar-fill" data-width="' + targetPercent + '%"></div>' +
                    '</div>' +
                '</div>';
            
            mVibeList.innerHTML += vibeHTML;
        }
        
        setTimeout(function() {
            var fills = mVibeList.querySelectorAll(".vibe-bar-fill");
            for (var f = 0; f < fills.length; f++) {
                fills[f].style.width = fills[f].getAttribute("data-width");
            }
        }, 150);
    }
    
    if (theaterOverlay) {
        theaterOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeMovieDetailsModal() {
    stopSynthPreview();
    if (theaterOverlay) {
        theaterOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }
    theaterActiveMovie = null;
}

if (closeTheaterBtn) {
    closeTheaterBtn.addEventListener("click", closeMovieDetailsModal);
}
if (theaterOverlay) {
    theaterOverlay.addEventListener("click", function(e) {
        if (e.target === theaterOverlay) {
            closeMovieDetailsModal();
        }
    });
}
var modalSaveBtn = document.getElementById("theater-fav-toggle-btn");
if (modalSaveBtn) {
    modalSaveBtn.addEventListener("click", function() {
        if (theaterActiveMovie) {
            toggleFavorite(theaterActiveMovie.title);
        }
    });
}

function updateWatchlistUI() {
    var watchlist = getWatchlist();
    
    if (watchlist.length === 0) {
        if (drawerEmptyState) drawerEmptyState.style.display = "flex";
        if (watchlistItemsContainer) watchlistItemsContainer.innerHTML = "";
        return;
    }
    
    if (drawerEmptyState) drawerEmptyState.style.display = "none";
    if (watchlistItemsContainer) {
        watchlistItemsContainer.innerHTML = "";
        
        for (var w = 0; w < watchlist.length; w++) {
            var title = watchlist[w];
            
            var foundMovie = null;
            for (var m = 0; m < movies.length; m++) {
                if (movies[m].title === title) {
                    foundMovie = movies[m];
                    break;
                }
            }
            
            var yearText = foundMovie ? foundMovie.year : "Cinematic";
            var itemHTML = document.createElement("div");
            itemHTML.className = "watchlist-item-card";
            itemHTML.setAttribute("data-title", title);
            
            itemHTML.innerHTML = 
                '<div class="witem-details">' +
                    '<div class="witem-title">' + title + '</div>' +
                    '<span class="witem-year">📅 ' + yearText + '</span>' +
                '</div>' +
                '<button type="button" class="witem-remove-btn" title="Remove masterpiece">&times;</button>';
            
            (function(itemEl, tStr, mObj) {
                itemEl.querySelector(".witem-title").addEventListener("click", function() {
                    closeWatchlistDrawer();
                    if (mObj) {
                        openMovieDetailsModal(mObj);
                    }
                });
                
                itemEl.querySelector(".witem-remove-btn").addEventListener("click", function(e) {
                    e.stopPropagation();
                    toggleFavorite(tStr);
                });
            })(itemHTML, title, foundMovie);
            
            watchlistItemsContainer.appendChild(itemHTML);
        }
    }
}

function openWatchlistDrawer() {
    updateWatchlistUI();
    if (drawerOverlay) {
        drawerOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closeWatchlistDrawer() {
    if (drawerOverlay) {
        drawerOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }
}

if (watchlistFloatingTrigger) {
    watchlistFloatingTrigger.addEventListener("click", openWatchlistDrawer);
}
if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", closeWatchlistDrawer);
}
if (drawerOverlay) {
    drawerOverlay.addEventListener("click", function(e) {
        if (e.target === drawerOverlay) {
            closeWatchlistDrawer();
        }
    });
}
var clearConfirmTimeout = null;

if (watchlistClearAllBtn) {
    watchlistClearAllBtn.addEventListener("click", function() {
        var list = getWatchlist();
        if (list.length === 0) {
            return; 
        }

        if (watchlistClearAllBtn.classList.contains("confirming")) {
            saveWatchlist([]);
            
            var hearts = document.querySelectorAll(".favorite-card-icon");
            for (var h = 0; h < hearts.length; h++) {
                hearts[h].classList.remove("active");
                hearts[h].innerHTML = "🤍";
            }
            
            updateWatchlistUI();
            
            watchlistClearAllBtn.classList.remove("confirming");
            watchlistClearAllBtn.textContent = "Clear All";
            if (clearConfirmTimeout) {
                clearTimeout(clearConfirmTimeout);
                clearConfirmTimeout = null;
            }
        } else {
            watchlistClearAllBtn.classList.add("confirming");
            watchlistClearAllBtn.textContent = "Confirm? ⚠️";
            
            if (clearConfirmTimeout) {
                clearTimeout(clearConfirmTimeout);
            }
            
            clearConfirmTimeout = setTimeout(function() {
                watchlistClearAllBtn.classList.remove("confirming");
                watchlistClearAllBtn.textContent = "Clear All";
                clearConfirmTimeout = null;
            }, 3000); 
        }
    });
}

var spinRaffleTimer = null;

if (watchlistSpinBtn) {
    watchlistSpinBtn.addEventListener("click", function() {
        var list = getWatchlist();
        if (list.length === 0) {
            alert("Raffle Wheel requires at least 1 movie inside your Cine-Vault! Add masterpieces first.");
            return;
        }
        if (spinRaffleTimer) return; 
        
        var cards = watchlistItemsContainer.querySelectorAll(".watchlist-item-card");
        if (cards.length === 0) return;
        
        watchlistSpinBtn.disabled = true;
        watchlistSpinBtn.innerHTML = "<span>🎲</span> Raffling Cine-Vault...";
        
        var steps = 18; 
        var speedIndex = 70; 
        var activeStep = 0;
        var currentHighlightIdx = -1;
        
        function selectRaffleStep() {
            if (currentHighlightIdx !== -1 && cards[currentHighlightIdx]) {
                cards[currentHighlightIdx].style.borderColor = "";
                cards[currentHighlightIdx].style.boxShadow = "";
                cards[currentHighlightIdx].style.background = "";
            }
            
            currentHighlightIdx = (currentHighlightIdx + 1) % cards.length;
            var targetEl = cards[currentHighlightIdx];
            
            if (targetEl) {
                targetEl.style.borderColor = "cyan";
                targetEl.style.boxShadow = "0 0 15px rgba(0,242,254,0.5)";
                targetEl.style.background = "rgba(0, 242, 254, 0.1)";
            }
            
            activeStep++;
            if (activeStep < steps) {
                speedIndex = speedIndex + (activeStep * 5); 
                spinRaffleTimer = setTimeout(selectRaffleStep, speedIndex);
            } else {
                var chosenTitle = list[currentHighlightIdx];
                var foundMovieObj = null;
                for (var m = 0; m < movies.length; m++) {
                    if (movies[m].title === chosenTitle) {
                        foundMovieObj = movies[m];
                        break;
                    }
                }
                
                if (targetEl) {
                    targetEl.style.borderColor = "magenta";
                    targetEl.style.boxShadow = "0 0 25px rgba(255, 0, 128, 0.8)";
                    targetEl.style.background = "rgba(255, 0, 128, 0.15)";
                    targetEl.style.transform = "scale(1.05)";
                    
                    setTimeout(function() {
                        targetEl.style.transform = "";
                    }, 500);
                }
                
                setTimeout(function() {
                    closeWatchlistDrawer();
                    if (foundMovieObj) {
                        openMovieDetailsModal(foundMovieObj);
                    }
                    
                    watchlistSpinBtn.disabled = false;
                    watchlistSpinBtn.innerHTML = "<span>🔮</span> Spin Cine-Wheel";
                    spinRaffleTimer = null;
                    
                    if (targetEl) {
                        targetEl.style.borderColor = "";
                        targetEl.style.boxShadow = "";
                        targetEl.style.background = "";
                    }
                }, 900);
            }
        }
        
        selectRaffleStep();
    });
}

updateWatchlistBadge();

(function() {
    var themeToggleBtn = document.getElementById("theme-toggle-btn");
    var themeDropdownMenu = document.getElementById("theme-dropdown-menu");
    var themeOptBtns = document.querySelectorAll(".theme-opt-btn");

    var themeLabels = {
        cosmic: { text: "Cosmic Neon", emoji: "🔮" },
        emerald: { text: "Emerald Mint", emoji: "🌿" },
        sunset: { text: "Sunset Crimson", emoji: "🌅" },
        nord: { text: "Nordic Frost", emoji: "❄️" },
        cyberpunk: { text: "Cyberpunk Dream", emoji: "🌆" }
    };

    function applyAppTheme(themeName) {
        if (!themeLabels[themeName]) return;
        
        Object.keys(themeLabels).forEach(function(themeKey) {
            document.body.classList.remove("theme-" + themeKey);
        });
        
        document.body.classList.add("theme-" + themeName);
        
        if (themeToggleBtn) {
            var emojiEl = themeToggleBtn.querySelector(".theme-btn-emoji");
            var textEl = themeToggleBtn.querySelector(".theme-btn-text");
            if (emojiEl) emojiEl.textContent = themeLabels[themeName].emoji;
            if (textEl) textEl.textContent = themeLabels[themeName].text;
        }
        
        themeOptBtns.forEach(function(btn) {
            var btnTheme = btn.getAttribute("data-theme");
            if (btnTheme === themeName) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        localStorage.setItem("selected-theme", themeName);
    }

    if (themeToggleBtn && themeDropdownMenu) {
        themeToggleBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            themeDropdownMenu.classList.toggle("open");
        });

        document.addEventListener("click", function() {
            themeDropdownMenu.classList.remove("open");
        });
    }

    themeOptBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
            var selectedTheme = btn.getAttribute("data-theme");
            applyAppTheme(selectedTheme);
            if (themeDropdownMenu) {
                themeDropdownMenu.classList.remove("open");
            }
        });
    });

    var savedTheme = localStorage.getItem("selected-theme") || "cosmic";
    applyAppTheme(savedTheme);
})();

