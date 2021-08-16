const dataLocal = {
  batman: [   
  {
      Poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman Begins",
      Type: "movie",
      Year: "2005",
      imdbID: "tt0372784",
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Batman v Superman: Dawn of Justice",
      Type: "movie",
      Year: "2016",
      imdbID: "tt2975590"
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
       Title: "Batman",
      Type: "movie",
      Year: "1989",
      imdbID: "tt0096895" 
    },
    {
      Poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      Title: "Batman Returns",
      Type: "movie",
      Year: "1992",
      imdbID: "tt0103776"
    }
  ],
  terminator: [
   {"Title":"Terminator 2: Judgment Day","Year":"1991","imdbID":"tt0103064","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
   {"Title":"The Terminator","Year":"1984","imdbID":"tt0088247","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
   {"Title":"Terminator 3: Rise of the Machines","Year":"2003","imdbID":"tt0181852","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"},
   {"Title":"Terminator Salvation","Year":"2009","imdbID":"tt0438488","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},
   {"Title":"Terminator Genisys","Year":"2015","imdbID":"tt1340138","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg"},{"Title":"Terminator: Dark Fate","Year":"2019","imdbID":"tt6450804","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOWExYzVlZDgtY2E1ZS00NTFjLWFmZWItZjI2NWY5ZWJiNTE4XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg"},
   {"Title":"Terminator: The Sarah Connor Chronicles","Year":"2008–2009","imdbID":"tt0851851","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg"}
  ],
  matrix: [
    {"Title":"The Matrix","Year":"1999","imdbID":"tt0133093","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
    {"Title":"The Matrix Reloaded","Year":"2003","imdbID":"tt0234215","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
    {"Title":"The Matrix Revolutions","Year":"2003","imdbID":"tt0242653","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
    {"Title":"The Matrix Revisited","Year":"2001","imdbID":"tt0295432","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_SX300.jpg"},
    {"Title":"Enter the Matrix","Year":"2003","imdbID":"tt0277828","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjdlNTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"},
    {"Title":"The Matrix: Path of Neo","Year":"2005","imdbID":"tt0451118","Type":"game","Poster":"https://m.media-amazon.com/images/M/MV5BZGFiNGU4MjEtODM2ZC00OTg0LThkNmEtZTBlN2FkMmFjOWYzXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"},
    {"Title":"A Glitch in the Matrix","Year":"2021","imdbID":"tt9847360","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWRhNGY3NGQtMDAxMS00YjY2LTgzOTUtZjljZmUyYWQwMGI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"}  
  ],
  rocky: [
    {"Title":"Rocky","Year":"1976","imdbID":"tt0075148","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg"},
    {"Title":"Rocky Balboa","Year":"2006","imdbID":"tt0479143","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNWIyNmQyNjctYmVmMS00MGI4LWIxMmUtNjA0ODYzOTA0Yjk0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
    {"Title":"Rocky II","Year":"1979","imdbID":"tt0079817","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQzZjQyMDgtMmQ3YS00ZDE4LWIyYTAtMWRkMWQ4ZTI5ZjA5XkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg"},
    {"Title":"Rocky IV","Year":"1985","imdbID":"tt0089927","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTg3ODk5ODE0NV5BMl5BanBnXkFtZTcwNDkzODM1NA@@._V1_SX300.jpg"},
    {"Title":"Rocky III","Year":"1982","imdbID":"tt0084602","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMyOTYzMDMzMF5BMl5BanBnXkFtZTcwMTkzODM1NA@@._V1_SX300.jpg"},
    {"Title":"Rocky V","Year":"1990","imdbID":"tt0100507","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTM2Mzc4MTYxM15BMl5BanBnXkFtZTcwODY5NTk1NA@@._V1_SX300.jpg"},
  ]
};

  export default dataLocal;









