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
        mood: ["Mind-blowing", "Sad"]
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
    
    // NEW MOVIES (10 added)
    {
        title: "The Matrix",
        year: 1999,
        description: "A computer programmer discovers that reality is a simulation created by machines.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Good Will Hunting",
        year: 1997,
        description: "A young janitor at MIT is a mathematical genius who struggles with his potential.",
        rating: 5,
        mood: ["Motivational", "Sad"]
    },
    {
        title: "Se7en",
        year: 1995,
        description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
        rating: 5,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "The Social Network",
        year: 2010,
        description: "The story of how Mark Zuckerberg founded Facebook and the legal battles that followed.",
        rating: 4,
        mood: ["Motivational", "Mind-blowing"]
    },
    {
        title: "Memento",
        year: 2000,
        description: "A man with short-term memory loss uses notes and tattoos to hunt for his wife's killer.",
        rating: 5,
        mood: ["Mind-blowing", "Dark"]
    },
    {
        title: "Rocky",
        year: 1976,
        description: "A small-time boxer gets a once-in-a-lifetime chance to fight the heavyweight champion.",
        rating: 5,
        mood: ["Motivational"]
    },
    {
        title: "The Green Mile",
        year: 1999,
        description: "A death row guard discovers a prisoner with miraculous healing powers.",
        rating: 5,
        mood: ["Sad", "Motivational"]
    },
    {
        title: "Shutter Island",
        year: 2010,
        description: "A U.S. Marshal investigates a psychiatric facility on a remote island.",
        rating: 4,
        mood: ["Dark", "Mind-blowing"]
    },
    {
        title: "The Truman Show",
        year: 1998,
        description: "A man discovers his entire life is a reality TV show broadcast to the world.",
        rating: 5,
        mood: ["Mind-blowing", "Sad"]
    },
    {
        title: "Whiplash",
        year: 2014,
        description: "A young drummer pushes himself to the breaking point under a ruthless instructor.",
        rating: 5,
        mood: ["Motivational", "Dark"]
    }
];

var movieGrid = document.getElementById("movie-grid");
var statusText = document.getElementById("status-bar");
var moodButtons = document.querySelectorAll(".mood-btn");

function generateStarHTML(rating) {
    var starsHTML = "";
    
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML = starsHTML + "★";
        } else {
            starsHTML = starsHTML + '<span class="empty-star">☆</span>';
        }
    }
    return '<span class="rating">' + starsHTML + '</span>';
}

function displayMovies(moviesToShow) {
    movieGrid.innerHTML = "";
    
    if (moviesToShow.length === 0) {
        movieGrid.innerHTML = '<div class="empty-state">' +
            '<div class="empty-icon">🎬</div>' +
            '<h3 class="empty-title">No movies found</h3>' +
            '<p class="empty-text">No recommendations match your exact selection right now. Try another mood!</p>' +
            '</div>';
        return;
    }
    
    for (var i = 0; i < moviesToShow.length; i++) {
        var movie = moviesToShow[i];
        
        var chipsHTML = "";
        for (var m = 0; m < movie.mood.length; m++) {
            chipsHTML = chipsHTML + '<span class="mood-chip">' + movie.mood[m] + '</span>';
        }
        
        var card = document.createElement("article");
        card.className = "card fade-in";
        card.style.animationDelay = (i * 0.05) + "s";
        
        card.innerHTML = 
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
                '<span class="view-details">Details ↗</span>' +
            '</div>';
        
        movieGrid.appendChild(card);
    }
}

function filterMoviesByMood(mood) {
    var filteredMovies = [];
    
    if (mood === "All") {
        filteredMovies = movies;
        statusText.innerHTML = "Showing all " + movies.length + " curated masterpieces";
    } else {
        for (var i = 0; i < movies.length; i++) {
            var movie = movies[i];
            
            for (var m = 0; m < movie.mood.length; m++) {
                if (movie.mood[m] === mood) {
                    filteredMovies.push(movie);
                    break;
                }
            }
        }
        
        var resultCount = filteredMovies.length;
        var wordResult = (resultCount === 1) ? "result" : "results";
        statusText.innerHTML = "Showing " + resultCount + " " + wordResult + " for \"" + mood + "\"";
    }
    
    displayMovies(filteredMovies);
}

for (var i = 0; i < moodButtons.length; i++) {
    var button = moodButtons[i];
    
    button.addEventListener("click", function(event) {
        var clickedButton = event.currentTarget;
        var selectedMood = clickedButton.getAttribute("data-mood");
        
        for (var b = 0; b < moodButtons.length; b++) {
            moodButtons[b].classList.remove("active");
        }
        
        clickedButton.classList.add("active");
        filterMoviesByMood(selectedMood);
    });
}

displayMovies(movies);
