import React from 'react';
import PropTypes from 'prop-types';

const MoviePresenter = ({nowPlaying, popular, topRate, loading, error}) => {
    return (
        <div>
            <h1>{nowPlaying.length}</h1>
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