// Get the average of all rates with 2 decimals


//my own

// function ratesAverage(movies){
// let total = 0;

// let ratesAverage = movies.reduce((accumulator, currentValue) => accumulator+currentValue.rate,0);


// total = ratesAverage/movies.length;

// return parseFloat(total.toFixed(2));
// };



//montasar







// Get the average of Drama Movies


///my own

// function dramaMoviesRate(movies){

//   let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

//   if (!dramaMovies.length) return 0;
    
//   let result = ratesAverage(dramaMovies);

//   return parseFloat(result.toFixed(2));
// };


///montasar










// Order by time duration, ascending

//my own

// function orderByDuration(movies){

// let sortedMovies = movies.sort((a, b) => (a.duration > b.duration ? 1 : -1 ));

// return sortedMovies;
// };


//montasars










// How many movies did Steven Spielberg direct


//my own

// function howManyMovies(movies){

// let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))

// let spielBergDramas = dramaMovies.filter(movie => movie.director.includes("Spielberg"));

// return spielBergDramas.length;
// };



//montasars











// Order by title and print the first 20 titles


//my own

// function orderAlphabetically(movies){
//   let sortedMovies = movies.sort((a,b) => (a.title > b.title ? 1 : -1 ));

//   let sortedMoviesTitle = sortedMovies.map(name => name.title);

//   if(sortedMoviesTitle.length>19){
  
//     return sortedMoviesTitle.slice(0-20);
//     }
//   else return sortedMoviesTitle;
// };


//montasars










// Turn duration of the movies from hours to minutes



//my own
// function turnHoursToMinutes(movies){
// let newTime = movies
// .map(name => parseFloat(name.duration));
// console.log(newTime)
// }





// Best yearly rate average

