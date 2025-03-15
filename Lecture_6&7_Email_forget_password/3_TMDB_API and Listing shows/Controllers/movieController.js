const { getMediaList, TMDB_ENDPOINT } = require("../utility");

/******************* Home Page Controllers ****************/
const getNowPlayingMovies = async (req, res) => {
  const nowPlayingList = await getMediaList(TMDB_ENDPOINT.fetchcurrentMovies);
  res.status(200).json({ status: "success", message: nowPlayingList });
};

const getTrendingMovies = async (req, res) => {
  const trendingList = await getMediaList(TMDB_ENDPOINT.fetchTrending);
  res.status(200).json({ status: "success", message: trendingList });
};

const getPopularMovies = async (req, res) => {
  const popularList = await getMediaList(TMDB_ENDPOINT.fetchPopular);
  res.status(200).json({ status: "success", message: popularList });
};

const getUpcomingMovies = async (req, res) => {
  const upcomingList = await getMediaList(TMDB_ENDPOINT.fetchUpcoming);
  res.status(200).json({ status: "success", message: upcomingList });
};

/******************* Movie Controllers ****************/
const getTopRatedMovies = async (req, res) => {
  const topRatedList = await getMediaList(TMDB_ENDPOINT.fetchTopRated);
  res.status(200).json({ status: "success", message: topRatedList });
};

const getActionMovies = async (req, res) => {
  const actionMoviesList = await getMediaList(TMDB_ENDPOINT.fetchActionMovies);
  res.status(200).json({ status: "success", message: actionMoviesList });
};

const getComedyMovies = async (req, res) => {
  const comedyMoviesList = await getMediaList(TMDB_ENDPOINT.fetchComedyMovies);
  res.status(200).json({ status: "success", message: comedyMoviesList });
};

const getHorrorMovies = async (req, res) => {
  const horrorMoviesList = await getMediaList(TMDB_ENDPOINT.fetchHorrorMovies);
  res.status(200).json({ status: "success", message: horrorMoviesList });
};

const getRomanceMovies = async (req, res) => {
  const romanceMoviesList = await getMediaList(
    TMDB_ENDPOINT.fetchRomanceMovies
  );
  res.status(200).json({ status: "success", message: romanceMoviesList });
};

const getAnimeMovies = async (req, res) => {
  const animeMoviesList = await getMediaList(TMDB_ENDPOINT.fetchAnimeMovies);
  res.status(200).json({ status: "success", message: animeMoviesList });
};

/******************* TV Show Controllers ****************/
const getActionTvShows = async (req, res) => {
  const actionTvList = await getMediaList(TMDB_ENDPOINT.fetchActionTvShows);
  res.status(200).json({ status: "success", message: actionTvList });
};

const getComedyTvShows = async (req, res) => {
  const comedyTvList = await getMediaList(TMDB_ENDPOINT.fetchComedyTvShows);
  res.status(200).json({ status: "success", message: comedyTvList });
};

const getMysteryTvShows = async (req, res) => {
  const mysteryTvList = await getMediaList(TMDB_ENDPOINT.fetchMysteryTvShows);
  res.status(200).json({ status: "success", message: mysteryTvList });
};

const getDramaTvShows = async (req, res) => {
  const dramaTvList = await getMediaList(TMDB_ENDPOINT.fetchDramaTvShows);
  res.status(200).json({ status: "success", message: dramaTvList });
};

const getCrimeTvShows = async (req, res) => {
  const crimeTvList = await getMediaList(TMDB_ENDPOINT.fetchCrimeTvShows);
  res.status(200).json({ status: "success", message: crimeTvList });
};

module.exports = {
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
};
