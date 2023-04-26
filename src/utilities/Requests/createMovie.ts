import { BASE_URL, USER_ID, USER_TOKEN } from '@/Config/config';
import type IMovieSchema from '@/intefaces/MovieSchema';
import axios from 'axios';

const config = {
  headers: { authorization: `Bearer ${USER_TOKEN}` }
};
async function creatMovie(body: IMovieSchema): Promise<any> {
  try {
    const res = await axios.post(`${BASE_URL}/users/${USER_ID}/watched`, body, config);
    return res;
  } catch (err) {
    console.log('Error: ', err);
  }
}

export default creatMovie;
