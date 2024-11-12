const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

//Get all movies in 2018 with rating > 4
//sort them by rating
//Descending order
//Pick their title

function getMovies(movies) {
  const titles = movies
    .filter((movie) => movie.year === 2018 && movie.rating >= 4)
    .sort((a, b) => b.rating - a.rating)
    .map((m) => m.title);
    console.log(titles);
}

getMovies(movies);