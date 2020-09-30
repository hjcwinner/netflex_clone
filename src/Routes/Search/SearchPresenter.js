// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components'

// const Container = styled.div`
//     padding : 0px 20px;
// `;

// const Form = styled.form`
//     margin-bottom : 60px;
//     width : 100%;
// `;

// const Input = styled.input`
//     all: unset;
//     font-size: 30px;
//     width: 100%;
// `;


// const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit, loading, error}) => {
//     return (
//         <Container>
//             <Form onSubmit={onSubmit}>
//                 <Input 
//                     placeholder="Search Movies or TV shows..."
//                     value={keyword}
//                     onChange={onChange}
//                 />   
//             </Form>
//         </Container>
//     );
// };

// SearchPresenter.propTypes = {
//     movies : PropTypes.array,
//     shows : PropTypes.array,
//     keyword : PropTypes.string,
//     onChange : PropTypes.func.isRequired,
//     onSubmit : PropTypes.func.isRequired,
//     loading : PropTypes.bool.isRequired,
//     error : PropTypes.string
// };

// export default SearchPresenter;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import Loader from '../../Components/Loader'
import Section from '../../Components/Section'
import Poster from '../../Components/Poster'

const Container = styled.div`
    padding : 0px 20px;
`;

const Form = styled.form`
    margin-bottom : 50px;
    width : 100%;
`;

const Input = styled.input`
    all : unset;
    font-size: 32px;
    width: 100%;
`;

const SearchPresenter = ({movieResults, tvResults, keyword, onChange, onSubmit, loading, error}) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Input 
                    placeholder="Search Movies or TV show"
                    value={keyword}
                    onChange={onChange}
                />    
            </Form>
            {loading 
                ? (<Loader />)
                : <>
                    {movieResults && movieResults.length > 0 && (
                        <Section title="Movie Results">
                            {movieResults.map((movie) => (
                                <Poster 
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date}
                                    imageUrl={movie.poster_path}
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}
                    {tvResults && tvResults.length > 0 && (
                        <Section title="TV Results">
                            {tvResults.map((tv) => (
                                <Poster 
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    year={tv.first_air_date}
                                    imageUrl={tv.poster_path}
                                />
                            ))}
                        </Section>
                    )}
                </>
            }  
        </Container>
    );
};

SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults : PropTypes.array,
    keyword: PropTypes.string,
    onChange : PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string

};

export default SearchPresenter;