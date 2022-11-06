import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [mv, setMv] = useState([]);

  const id = useParams().id;
  // await는 async함수 안에 있어야한다.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMv(json.data.movie);
    console.log(mv);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <Movie
            id={mv.id}
            title={mv.title}
            coverImg={mv.medium_cover_image}
            genres={mv.genres}
            summary={mv.summary}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
