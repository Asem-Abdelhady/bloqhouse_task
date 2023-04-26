import { BASE_URL, USER_ID, USER_TOKEN } from '@/Config/config';
import axios from 'axios';

async function deleteMovie(id: number): Promise<void> {
  const config = {
    headers: { authorization: `Bearer ${USER_TOKEN}` }
  };
  try {
    await axios.delete(`${BASE_URL}/users/${USER_ID}/watched/${id}`, config);
  } catch (err) {
    console.log('Error: ', err);
  }
}

export default deleteMovie;
