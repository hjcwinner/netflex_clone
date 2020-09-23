import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Components/Section'
import styled from 'styled-components'
import Loader from '../../Components/Loader'
import Poster from '../../Components/Poster'

const Container = styled.div`
    padding: 0px 10px;
`;

const TvPresenter = ({today, popular, topRate, thisWeek, loading, error}) => {
    return (
        loading 
        ? (<Loader />)
        : (
        <Container>
            {today && today.length > 0 && (
                <Section title="Today">
                    {today.map((tv) => (
                       <Poster
                            key={tv.id}
                            id={tv.id}
                            title={tv.name}
                            rating={tv.vote_average}
                            year={tv.first_air_date}
                            imageUrl={tv.backdrop_path}
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((tv) => (
                        <Poster
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        rating={tv.vote_average}
                        year={tv.first_air_date}
                        imageUrl={tv.backdrop_path}
                    />
                    ))}
                </Section>
            )}
            {topRate && topRate.length > 0 && (
                <Section title="Top Rate">
                    {topRate.map((tv) => (
                        <Poster
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        rating={tv.vote_average}
                        year={tv.first_air_date}
                        imageUrl={tv.backdrop_path}
                    />
                    ))}
                </Section>
            )}
            {thisWeek && thisWeek.length > 0 && (
                <Section title="ThisWeek">
                    {thisWeek.map((tv) => (
                        <Poster
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        rating={tv.vote_average}
                        year={tv.first_air_date}
                        imageUrl={tv.backdrop_path}
                    />
                    ))}
                </Section>
            ) }   
        </Container>
        )   
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