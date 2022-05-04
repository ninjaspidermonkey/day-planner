
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RemoveSingleTaskWrapper = styled.div`
/*
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    justify-content: center;
    padding: 25vh 0 25vh 0;
    //opacity: 75%;
    //background-color: #e9e9e9;
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    */
`;

const TaskMenu = styled.div`
/*
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 0 5vh 0;
    background-color: #f1f1f1;
    opacity: 100%;
    width: 50vw;
    height: 50vh;
    min-width: 300px;
    border-radius: 5px;
    overflow: scroll;

    input {
        width: 20vw;
    }
*/
`;

const RemoveSingleTask = ( { ToggleRemoveSingleTask, Hours, SetHours, RemoveTask, RemoveMode, SetRemoveMode } ) => {

    useEffect( () => {
        console.log(RemoveMode);
        let removeElements = document.getElementsByClassName("remove");
        for (let elem in removeElements) {
            console.log(removeElements[elem]);
        }

    });

    const RemoveTaskHandler = async () => {
        SetRemoveMode(!RemoveMode);
        console.log(`set remove mode to ${RemoveMode}`);
    };

    return (
        <RemoveSingleTaskWrapper>
        </RemoveSingleTaskWrapper>
    );
};

export default RemoveSingleTask;