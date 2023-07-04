class Movie 
{
    constructor(title, studio, rating = "PG") 
    {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function getPG(movies) 
  {
    let pgMovies = [];
    for (let i = 0; i < movies.length; i++) 
    {
      if (movies[i].rating === "PG") 
      {
        pgMovies.push(movies[i]);
      }
    }
    return pgMovies;
  }
  
  let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  let movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
  ];
  
  let pgMovies = getPG(movies);
  console.log(pgMovies);