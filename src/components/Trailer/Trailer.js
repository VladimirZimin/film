import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";

const Trailer = () => {
  const [trailerLink, setTrailerLink] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const film = await api.getMoviesDetails(movieId);
        const treiler = await api.fetchTrailersOfMovie(film.imdb_id);
        setTrailerLink(treiler.data.linkEmbed);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <div>
      <iframe
        title="title"
        src={trailerLink}
        width="854"
        height="480"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameBorder="no"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Trailer;
