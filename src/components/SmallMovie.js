import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import HoveredMovie from './HoveredMovie';

/**
 * @description - 
 * @returns {React.FC}
 */
const SmallMovie = ({ movie, hoveredValue, setHoveredValue, roleInfo }) => {
  const timeoutIdRef = useRef(null);

  // Cleanup timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };
  }, []);

  const showHoveredMovie = (newHoveredMovie) => {
    setHoveredValue(newHoveredMovie);
  };

  const handleHover = () => {
    if (!timeoutIdRef.current) {
      timeoutIdRef.current = window.setTimeout(() => {
        timeoutIdRef.current = null;
        showHoveredMovie(movie);
      }, 700);
    }
  };

  const handleHoverLeave = () => {
    if (timeoutIdRef.current) {
      window.clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }
  };


  const getPath = () => {
    if (movie?.media_type === 'person') {
      return `/person/${movie.id}`;
    }

    if (movie.first_air_date || movie.media_type === 'tv') {
      return `/title/tv/${movie.id}`;
    }
    return `/title/movie/${movie.id}`;
  };

  const imagePath = movie?.media_type === 'person' ? movie?.profile_path : movie?.poster_path;

  return (
    <Link to={getPath()} className="flex-1 d-block text-decoration-none">
      {hoveredValue && hoveredValue === movie && movie?.media_type !== 'person' ? (

        <div className="text-white">
          <HoveredMovie setHoveredValue={setHoveredValue} movie={movie} />
        </div>

      ) : (
        <div className="smallMovie text-white fs-6" onMouseEnter={handleHover} onMouseLeave={handleHoverLeave}>
          <div className="d-flex flex-column justify-content-between h-100">
            <div >
              {imagePath ? (
                <img src={`https://image.tmdb.org/t/p/original${imagePath}`} alt={movie?.title || movie?.name || ''} className={`movieImage rounded`} />
              ) : (
                <div className="movieImage rounded d-flex align-items-center justify-content-center text-center p-3" style={{backgroundColor: '#333', aspectRatio: '2/3'}}>
                  <div>
                    <div className="fw-bold mb-2">{movie?.title || movie?.name}</div>
                    <div className="text-lightgray small">No Image Available</div>
                  </div>
                </div>
              )}
            </div>
            {roleInfo && (
              <div className="px-2 py-1">
                <div className="text-lightgray small text-center" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>
                  {roleInfo}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Link>
  );
};

export default SmallMovie;