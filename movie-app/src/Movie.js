import PropTypes from 'prop-types';
function Movie({ title, coverImg, genres, summary }) {
  return (
    <div style={{ border: 'solid', margin: '10px' }}>
      <h2>{title}</h2>
      <img src={coverImg}></img>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.protoTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
