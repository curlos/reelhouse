import React, { useState } from 'react';
import SmallMovie from '../components/SmallMovie';

/**
 * @description - 
 * @returns {React.FC}
 */
const RecommendedMoviesList = ({ recommendedMovies }) => {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    recommendedMovies.results.length >= 1 ?
      (
        <div className="py-3">
          <h2 className="fs-4 fw-normal">More Like This</h2>

          <div className="smallMoviesGrid">
            {recommendedMovies.results.map((movie) => {
              return (
                <div className="" key={movie.id}>
                  <SmallMovie movie={movie} hoveredValue={hoveredValue} setHoveredValue={setHoveredValue} />
                </div>
              );
            })}
          </div>
        </div>
      ) : null
  );
};

export default RecommendedMoviesList;
