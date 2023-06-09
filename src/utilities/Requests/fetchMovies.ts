import { BASE_URL, USER_ID, USER_TOKEN } from '@/Config/config';
import type IMovieSchema from '@/intefaces/MovieSchema';
import axios from 'axios';

const fetchMovies = async (): Promise<IMovieSchema[]> => {
  try {
    const res = await axios.get<IMovieSchema[]>(`${BASE_URL}/users/${USER_ID}/watched`, {
      headers: {
        authorization: `Bearer ${USER_TOKEN}`
      }
    });

    return res.data;
  } catch (err) {
    console.log('Error: ', err);
    throw new Error();
  }
};

export default fetchMovies;
