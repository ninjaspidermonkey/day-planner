
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HourWrapper = styled.div`

    //display: flex;
    border: 1px solid black;
    overflow-wrap: break-word;
    border-style: none none solid none;
    //box-shadow: 0px 0px 5px blue;
    padding: 1vh 0 0 0;

    h3 {
        opacity: 75%;
    }

    h3, ul {
        //display: inline-block;
    }

    ul {
        //padding: 0 .5vw 0 .5vw;
        list-style-type: none;
    }

    li {
        opacity: 100%;
        list-style-type: square;
        transition: .2s;
        //padding: 1vh 1vw 1vh 1vw;

        &:hover {
            color: green;
        }
    }

`;

const Hour = ( { hour, hourTasks, Hours, SetHours, RemoveMode } ) => {
    // hourTasks is array

    const TaskCheckedHandler = async (e) => {
        let id = e.target.id;
        let elem = document.getElementById(id);

        if (RemoveMode) {
            console.log(`remove ${elem}`);
            console.log(e.target.id);
        } else {
            if (!elem.classList.contains("checked")) {
                elem.classList.add("checked");
            } else {
                elem.classList.remove("checked");
            }
        }
        };

    return (
        <HourWrapper>
            <h3>{hour} </h3>
            <ul id={`hour ${hour}`}>
                {hourTasks.map( (item, key) => {
                    return <div key={key}>
                                            <li
                                            onClick={TaskCheckedHandler}
                                            id={`${hour} ${item}`}
                                            className={"hourItem"}
                                            key={item} >{item}
                                            </li></div>
                })}
            </ul>
        </HourWrapper>
    );
};

export default Hour;