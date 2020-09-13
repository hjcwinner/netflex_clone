import React from 'react';
import PropTypes from 'prop-types';

const TvPresenter = ({today, popular, topRate, thisWeek, loading, error}) => {
    return (
        <div>
            <h1>{today.length}</h1>
        </div>
    );
};

TvPresenter.propTypes = {
    today : PropTypes.array,
    popular : PropTypes.array,
    topRate : PropTypes.array,
    thisWeek : PropTypes.array,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string
};

export default TvPresenter;