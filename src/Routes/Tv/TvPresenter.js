import React from 'react';
import PropTypes from 'prop-types';

const TvPresenter = ({today, popular, topRate, thisWeek, loading, error}) => {
    return (
        <div>
            {today && today.length > 0 && (
                <div>
                    {today.map((tv) => (
                        <span>{tv.name}</span>
                    ))}
                </div>
            )}
            {popular && popular.length > 0 && (
                <div>
                    {popular.map((tv) => (
                        <span>{tv.name}</span>
                    ))}
                </div>
            )}
            {topRate && topRate.length > 0 && (
                <div>
                    {topRate.map((tv) => (
                        <span>{tv.name}</span>
                    ))}
                </div>
            )}
            {thisWeek && thisWeek.length > 0 && (
                <div>
                    {thisWeek.map((tv) => (
                        <span>{tv.name}</span>
                    ))}
                </div>
            ) }
            
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