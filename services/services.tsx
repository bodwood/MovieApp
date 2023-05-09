import axios from "axios";

export const Services = async () =>
{
  const mainUrl:string = 'https://api.themoviedb.org/3'
  const popularUrl:string = '/movie/popular';
  const apiKey:string = 'c19e6fff2c0692083ad7640cecadab90'
  const resp = await axios.get(`${mainUrl}${popularUrl}?api_key=${apiKey}`);
  return resp.data.results;
}
