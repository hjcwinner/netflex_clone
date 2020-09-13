import React from 'react';
import PropTypes from 'prop-types';

const MoviePresenter = ({nowPlaying, popular, topRate, loading, error}) => {
    return (
      <div>
          {nowPlaying && nowPlaying.length > 0 && (
              <div>
                 {nowPlaying.map((movie) => (
                     <span>{movie.title}</span>
                 ))}
              </div>
          )}
          {popular && popular.length > 0 && (
              <div>
                  {popular.map((movie) => (
                      <span>{movie.title}</span>
                  ))}
              </div>
          )}
          {topRate && topRate.length > 0 && (
              <div>
                  {topRate.map((movie) => (
                      <span>{movie.title}</span>
                  ))}
              </div>
          )}
      </div>
    );
};

MoviePresenter.propTypes = {
    nowPlaying : PropTypes.array,
    popular : PropTypes.array,
    topRate : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default MoviePresenter;