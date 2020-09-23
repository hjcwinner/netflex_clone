import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Components/Section'
import styled from 'styled-components'
import Loader from '../../Components/Loader'

const Container = styled.div`
    padding : 0px 10px;
`;

const MoviePresenter = ({nowPlaying, popular, topRate, upcoming, loading, error}) => {
    return (
        loading 
        ? (<Loader />)
        : (  
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                   {nowPlaying.map(movie => (
                       <span>{movie.title}</span>
                   ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((movie) => (
                        <span>{movie.title}</span>
                    ))}
                </Section>
            )}
            {topRate && topRate.length > 0 && (
                <Section title="Top Rated">
                    {topRate.map((movie) => (
                        <span>{movie.title}</span>
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map((movie) => (
                        <span>{movie.title}</span>
                    ))}
                </Section>
            )}
            
        </Container>
        )
    
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