import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../Components/Section'
import styled from 'styled-components'
import Loader from '../../Components/Loader'

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
                        <span>{tv.name}</span>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map((tv) => (
                        <span>{tv.name}</span>
                    ))}
                </Section>
            )}
            {topRate && topRate.length > 0 && (
                <Section title="Top Rate">
                    {topRate.map((tv) => (
                        <span>{tv.name}</span>
                    ))}
                </Section>
            )}
            {thisWeek && thisWeek.length > 0 && (
                <Section title="ThisWeek">
                    {thisWeek.map((tv) => (
                        <span>{tv.name}</span>
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