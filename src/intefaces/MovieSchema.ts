interface IMovieSchema {
  title: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  id: number;
  vote_count: number;
  release_date: string;
}

export default IMovieSchema;
