import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Head = styled.header``;


const List = styled.ul`
    display: flex;
`;


const Item = styled.li``;


const SLink = styled(Link)``;

const Header = () => {
    return (
        <Head>
            <List>
                <Item>
                    <SLink to="/">Movies</SLink> 
                </Item>
                <Item>
                    <SLink to="/tv">TV</SLink> 
                </Item>
                <Item>
                    <SLink to="/search">Search</SLink> 
                </Item>
            </List>
        </Head>
    );
};

export default Header;