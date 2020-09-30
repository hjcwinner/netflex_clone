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

const SearchPresenter = props => {
    return (
        <div>
            <h1>hahaha</h1>  
        </div>
    );
};

SearchPresenter.propTypes = {
    
};

export default SearchPresenter;