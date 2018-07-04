import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import styled from 'styled-components';

import data from '../data/city-state';

class Search extends Component {

    render() {
        return (
            <Div>
                <SearchBar 
                    style={{
                        display: 'flex',
                        alignItems: 'stretch',
                        width: '100%',
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                />
            </Div>
        );
    }
}

const Div = styled.div`
    display: flex;
    justifyContent: center;
    alignItems: center;
    margin: 60px;
    width: 800;

`;


export default Search;