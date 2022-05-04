
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavbarHeader from './Navbar';
import ListDisplay from './ListDisplay';

const AppWrapper = styled.div`

    background-color: white !important;
`;

const AppContainer = styled.div`
    //margin: 0 25vw 0 25vw;
    //padding: 0 25vw 0 25vw;
    background-color: white !important;
`;

const App = () => {

    return (
        <AppWrapper>
            <NavbarHeader/>
            <AppContainer>
                <ListDisplay/>
            </AppContainer>
        </AppWrapper>
    );
};

export default App;