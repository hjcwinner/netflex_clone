import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Poster from '../../Components/Poster'
import Section from '../../Components/Section'


const Container = styled.div`
    height : calc(100vh - 50px);
    width : 100%;
    position : relative;
    padding : 50px;
`;

const Backdrop = styled.div`
    position : absolute;
    top : 0;
    left : 0;
    width : 100%;
    height : 100%;
    background-image : url(${(props) => props.bgImgage});
    background-position : center center;
    background-size: cover;
    filter: blur(3px);
    opacity : 0.5;
    z-index : 0;
`;

const Content = styled.div`
    display : flex;
    width : 100%;
    position : relative;
    z-index : 1;
    height : 100%;
`;

const Cover = styled.div`
    width : 30%;
    background-position : center center;
    background-size : cover;
    height : 100%;
    background-image : url(${(props) => props.bgImage});
    border-radius : 5px;
    margin-right : 40px;
`;

const Data = styled.div`
    width : 70%;
    margin-left : 10px;
`;

const Title = styled.h3`
    font-size : 35px;
    font-weight: 600;
`;

const ItemContainer = styled.div`
    margin : 20px 0;
`;

const Item = styled.span`
    font-size : 16px;
`;

const Divider = styled.span`
    margin : 0px 10px;
`;

const Overview = styled.p`
    font-size : 15px;
    opacity : 0.7;
    line-height: 1.5;
    width : 50%;
    margin-top : 20px;
`;



const DetailPresenter = ({result, similar,keyword, loading, error}) => {
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
                        {result.original_title 
                            ? result.original_title
                            : result.original_name

                        }
                        | Netflex Clone
                    </title>
                </Helmet>
                <Backdrop 
                    bgImgage={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                />
                <Content>
                    <Cover
                        bgImage={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                    />
                    <Data>
                        <Title>
                        {result.title 
                            ? result.title
                            : result.name
                        }
                        </Title>
                        <ItemContainer>
                        <Item>
                            {result.release_date
                                ? result.release_date
                                : result.first_air_date
                            } 
                        </Item>
                        <Divider>•</Divider>
                        <Item>
                            {result.runtime
                                ? result.runtime
                                : result.episode_run_time[0]
                            }
                        </Item>
                    </ItemContainer>
                    <Item>
                        {result.genres.map((genre, index) => (
                            index === result.genres.length - 1
                                ? genre.name
                                : `${genre.name} / ` 
                        ))}
                    </Item>
                    <Overview>
                        {result.overview} 
                    </Overview>
                    {similar && similar.length>0 && (
                         <Section title="Similar">
                         {similar.title 
                         ? <>
                             {similar.map((sim) => (
                             <Poster 
                                 key={sim.id}
                                 id={sim.id}
                                 title={sim.title}
                                 rating={sim.vote_average}
                                 year={sim.release_date}
                                 imageUrl={sim.poster_path}
                             />
                             ))}
                           </> 
                         : <>
                             {similar.map((sim) => (
                             <Poster 
                                 key={sim.id}
                                 id={sim.id}
                                 title={sim.name}
                                 rating={sim.vote_average}
                                 year={sim.first_air_date}
                                 imageUrl={sim.poster_path}
                             />
                             ))}
                           </>
                         } 
                     </Section>   
                    )}
                    {/* <div>
                        <div>{keyword.map((key) => (
                            <div>
                                {key.name}
                            </div>
                        ))}
                        </div>
                    </div>   */}
                    </Data>
                    
                </Content>
            </Container>
        )
    );
};

DetailPresenter.propTypes = {
    result : PropTypes.object,
    loading : PropTypes.bool.isRequired,
    error : PropTypes.string,
    similar : PropTypes.array,
    keyword : PropTypes.array
};

export default DetailPresenter;