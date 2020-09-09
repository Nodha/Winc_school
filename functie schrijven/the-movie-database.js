

const movieInformation = {
    title: "Puff the magic dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes",]
};

const printMovie = function(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes.");
    console.log("It stars: " + movie.stars + ".");
};

  printMovie(movieInformation);
