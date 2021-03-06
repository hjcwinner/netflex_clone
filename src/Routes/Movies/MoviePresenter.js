import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Components/Section'
import styled from 'styled-components'
import Loader from '../../Components/Loader'
import Poster from '../../Components/Poster'
import Helmet from 'react-helmet'

const Container = styled.div`
    padding : 0px 10px;
`;

// const Section = styled.Section`
//     padding : 0px 10px;
// `;

const MoviePresenter = ({nowPlaying, popular, topRate, upcoming, loading, error}) => {
    return (
        loading 
        ? 
            <>
                <Loader />
                <Helmet>
                    <title>Loading | Netflix Clone</title>
                </Helmet>
            </>
        : (  
        <Container>
            <Helmet>
                <title>
                    Movies | Netflex Clone
                </title>
            </Helmet>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now Playing">
                   {nowPlaying.map(movie => (
                       <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                       />
                   ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((movie) => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}
            {topRate && topRate.length > 0 && (
                <Section title="Top Rated">
                    {topRate.map((movie) => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                        />
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="Upcoming">
                    {upcoming.map((movie) => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            year={movie.release_date}
                            rating={movie.vote_average}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                    />
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