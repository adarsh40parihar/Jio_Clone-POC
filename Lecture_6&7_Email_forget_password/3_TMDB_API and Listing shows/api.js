const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config(); 

const {
  /******************* Home Page Controllers ****************/
  getNowPlayingMovies,
  getTrendingMovies,
  getPopularMovies,
  getUpcomingMovies,
  /******************* Movie Controllers ****************/
  getTopRatedMovies,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getAnimeMovies,
  /******************* TV Show Controllers ****************/
  getActionTvShows,
  getComedyTvShows,
  getMysteryTvShows,
  getDramaTvShows,
  getCrimeTvShows,
} = require("./Controllers/movieController");

app.use(express.json());
/******************* Movie routes and handlers****************/
/******************* Home Page Routes ****************/
app.get("/api/home/nowPlaying", getNowPlayingMovies);
app.get("/api/home/trending", getTrendingMovies);
app.get("/api/home/popular", getPopularMovies);
app.get("/api/home/upcoming", getUpcomingMovies);

/******************* Movie Routes ****************/
app.get("/api/movies/topRated", getTopRatedMovies);
app.get("/api/movies/action", getActionMovies);
app.get("/api/movies/comedy", getComedyMovies);
app.get("/api/movies/horror", getHorrorMovies);
app.get("/api/movies/romance", getRomanceMovies);
app.get("/api/movies/anime", getAnimeMovies);

/******************* TV Show Routes ****************/
app.get("/api/tv/action", getActionTvShows);
app.get("/api/tv/comedy", getComedyTvShows);
app.get("/api/tv/mystery", getMysteryTvShows);
app.get("/api/tv/drama", getDramaTvShows);
app.get("/api/tv/crime", getCrimeTvShows);



app.listen(3000, () => {
    console.log(`server is running at Port 3000.`);
});