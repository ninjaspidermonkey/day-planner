
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddSingleTask from './AddSingleTask';
import Hour from './Hour';
import { BsFillBookmarkXFill } from 'react-icons/bs';
import RemoveSingleTask from './RemoveSingleTask';

const ListDisplayWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f1f1f1;
    margin: 5vh 15vw 0 15vw;
    padding: 2vh 2vw 2vh 2vw;
    border-radius: 2.5px;
    //box-shadow: 0px 0px 5px #262626;

    /* #toggleTaskBtn {
        width: 20vw;
        height: 5vh;
        min-width: fit-content;
        min-height: 30px;
    } */

    li {
        &:hover {
            ::before {
            }
        }
    }
`;

const ListDisplayContainer = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
`;

const ListDisplay = () => {
    const [Hours, SetHours] = useState({
        '0': { tasks: []},
        '1': { tasks: []},
        '2': { tasks: []},
        '3': { tasks: []},
        '4': { tasks: []},
        '5': { tasks: []},
        '6': { tasks: []},
        '7': { tasks: []},
        '8': { tasks: []},
        '9': { tasks: []},
        '10': { tasks: []},
        '11': { tasks: []},
        '12': { tasks: []},
        '13': { tasks: []},
        '14': { tasks: []},
        '15': { tasks: []},
        '16': { tasks: []},
        '17': { tasks: []},
        '18': { tasks: []},
        '19': { tasks: []},
        '20': { tasks: []},
        '21': { tasks: []},
        '22': { tasks: []},
        '23': { tasks: []}
    });
    const [AddSingleTaskActive, SetAddSingleTaskActive] = useState(false);
    const [RemoveSingleTaskActive, SetRemoveSingleTaskActive] = useState(false);
    const [RemoveMode, SetRemoveMode] = useState(false);

    const ToggleSingleTask = async () => {
        SetAddSingleTaskActive(!AddSingleTaskActive);
    };

    const AddHours = async (task, hour) => {
        if (task) {
            if (Hours[hour].tasks.includes(task)) {
                window.alert('task already exists');
            } else {
                const newArr = await Hours[hour].tasks;
                await newArr.push(task);

                SetHours({
                    ...Hours,
                    [hour.tasks]: newArr
                });

                //localStorage.setItem(hour, newArr);
                localStorage.setItem('hours', JSON.stringify(Hours));
            };
        } else {
            console.log('empty task');
        }

    };

    const RemoveTask = async (task) => {
        console.log(`task: ${task}`);
    };

    useEffect( () => {
        const hours = localStorage.getItem('hours');
        if (hours) {
            SetHours(JSON.parse(hours));
        };
    }, []);

    /* vanilla javascript method useEffect( () => {
        let list = document.getElementsByTagName("li");
        let localStorageList = localStorage.getItem('listItems');

        for (let i=0; i<list.length; i++) {
            list[i].addEventListener('click', (e) => {
                if (!list[i].classList.contains('checked')) {
                    list[i].classList.add('checked');
                    SetCheckedElements( (prev) => {
                        return [...prev, list[i]];
                    });
                    //console.log(CheckedElements);
                } else {
                    list[i].classList.remove('checked');
                }
            });
        }
    }); */

    const ToggleRemoveSingleTask = async () => {
        SetRemoveSingleTaskActive(!RemoveSingleTaskActive);
        SetRemoveMode(!RemoveMode);
    };

    const ClearTasks = async () => {
        SetHours({
            '0': { tasks: []},
            '1': { tasks: []},
            '2': { tasks: []},
            '3': { tasks: []},
            '4': { tasks: []},
            '5': { tasks: []},
            '6': { tasks: []},
            '7': { tasks: []},
            '8': { tasks: []},
            '9': { tasks: []},
            '10': { tasks: []},
            '11': { tasks: []},
            '12': { tasks: []},
            '13': { tasks: []},
            '14': { tasks: []},
            '15': { tasks: []},
            '16': { tasks: []},
            '17': { tasks: []},
            '18': { tasks: []},
            '19': { tasks: []},
            '20': { tasks: []},
            '21': { tasks: []},
            '22': { tasks: []},
            '23': { tasks: []}
        })

        localStorage.removeItem('hours');
    };

    // hourTasks is array
    return (
        <ListDisplayWrapper>

            <button
            className="greenBtn"
            id="toggleTaskBtn"
            onClick={ () => {ToggleSingleTask()} } 
            >add new task</button>
            { !AddSingleTaskActive ? null:<AddSingleTask 
                AddSingleTaskActive={AddSingleTaskActive}
                ToggleSingleTask={ToggleSingleTask} 
                Hours={Hours}
                SetHours={SetHours}
                AddHours={AddHours}
                />} 

            <button
            className="redBtn"
            id="toggleRemoveTaskBtn"
            onClick={ () => {ClearTasks()} }
            >clear tasks</button>
            { !RemoveSingleTaskActive ? null: <RemoveSingleTask
                ToggleRemoveSingleTask={ToggleRemoveSingleTask}
                Hours={Hours}
                SetHours={SetHours}
                RemoveTask={RemoveTask}
                RemoveMode={RemoveMode}
                SetRemoveMode={SetRemoveMode}
            />}

            <ListDisplayContainer className={""} >
                { !Hours[0].tasks.length > 0 ? null:<Hour hour={'12 am'} hourTasks={Hours[0].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[1].tasks.length > 0 ? null:<Hour hour={'1 am'} hourTasks={Hours[1].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[2].tasks.length > 0 ? null:<Hour hour={'2 am'} hourTasks={Hours[2].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[3].tasks.length > 0 ? null:<Hour hour={'3 am'} hourTasks={Hours[3].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[4].tasks.length > 0 ? null:<Hour hour={'4 am'} hourTasks={Hours[4].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[5].tasks.length > 0 ? null:<Hour hour={'5 am'} hourTasks={Hours[5].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[6].tasks.length > 0 ? null:<Hour hour={'6 am'} hourTasks={Hours[6].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[7].tasks.length > 0 ? null:<Hour hour={'7 am'} hourTasks={Hours[7].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[8].tasks.length > 0 ? null:<Hour hour={'8 am'} hourTasks={Hours[8].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[9].tasks.length > 0 ? null:<Hour hour={'9 am'} hourTasks={Hours[9].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[10].tasks.length > 0 ? null:<Hour hour={'10 am'} hourTasks={Hours[10].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[11].tasks.length > 0 ? null:<Hour hour={'11 am'} hourTasks={Hours[11].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[12].tasks.length > 0 ? null:<Hour hour={'12 pm'} hourTasks={Hours[12].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[13].tasks.length > 0 ? null:<Hour hour={'1 pm'} hourTasks={Hours[13].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[14].tasks.length > 0 ? null:<Hour hour={'2 pm'} hourTasks={Hours[14].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[15].tasks.length > 0 ? null:<Hour hour={'3 pm'} hourTasks={Hours[15].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[16].tasks.length > 0 ? null:<Hour hour={'4 pm'} hourTasks={Hours[16].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[17].tasks.length > 0 ? null:<Hour hour={'5 pm'} hourTasks={Hours[17].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[18].tasks.length > 0 ? null:<Hour hour={'6 pm'} hourTasks={Hours[18].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[19].tasks.length > 0 ? null:<Hour hour={'7 pm'} hourTasks={Hours[19].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[20].tasks.length > 0 ? null:<Hour hour={'8 pm'} hourTasks={Hours[20].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[21].tasks.length > 0 ? null:<Hour hour={'9 pm'} hourTasks={Hours[21].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[22].tasks.length > 0 ? null:<Hour hour={'10 pm'} hourTasks={Hours[22].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
                { !Hours[23].tasks.length > 0 ? null:<Hour hour={'11 pm'} hourTasks={Hours[23].tasks} Hours={Hours} SetHours={SetHours} RemoveMode={RemoveMode} />}
            </ListDisplayContainer>

        </ListDisplayWrapper>
    );
}

export default ListDisplay;