import axios from "axios";

//TODO: add apiKey to .env file
const mainUrl:string = 'https://api.themoviedb.org/3'
const apiKey:string = 'c19e6fff2c0692083ad7640cecadab90'

//Grabs the popular movies from TMDB using their API.
export const GetPopularMovies = async () =>
{
  const popularMovies:string = '/movie/popular';
  const resp = await axios.get(`${mainUrl}${popularMovies}?api_key=${apiKey}`);
  return resp.data.results;
}
//Grabs the upcoming movies from TMDB using their API.
export const GetUpcomingMovies = async () => 
{
    const upcomingMovies: string = '/movie/upcoming'
    const resp = await axios.get(`${mainUrl}${upcomingMovies}?api_key=${apiKey}`);
    return resp.data.results;
}

//Grabs the popular TV shows from TMDB using their API.
export const GetPopularTVShows = async () => 
{
    const popularTVShows: string = '/tv/popular'
    const resp = await axios.get(`${mainUrl}${popularTVShows}?api_key=${apiKey}`);
    return resp.data.results;
}

