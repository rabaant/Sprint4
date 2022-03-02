// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map(x=>x.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
 let result=movies.filter(x=>x.director==director);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const directorMovies =getMoviesFromDirector(movies,director);
  return moviesAverage(directorMovies);
 
}

//Movies average to use in different functions
function moviesAverage(array){
  const arraynotempty=array.filter(x=>x.score !='');
  return parseFloat(((arraynotempty.map(x=>x.score).reduce((total, next)=>total+(next)))/arraynotempty.length).toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result=movies.map(x=>x.title).sort().slice(0,20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result=movies.slice().sort((previous,next)=>
      (previous.title>next.title) ? -1 : 1).sort((previous,next)=>
      (previous.year>next.year) ? 1 : -1);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,genre) {
  let moviefromcategory=movies.filter(x=>(x.genre).find(y=>y==genre));
  return moviesAverage(moviefromcategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let total=movies.map((x)=>((parseInt((x.duration).slice(0,1))*60)+parseInt((x.duration).slice(2,(x.duration).indexOf('min')))));

  return total;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  let result=movies.sort((previous,next)=>
  (previous.score<next.score) ? 1 : -1).filter(x=>x.year==year);
 
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
