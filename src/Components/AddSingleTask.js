
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AddSingleTaskWrapper = styled.div`
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

`;

const TaskMenu = styled.div`
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

`;

const AddSingleTask = ( {AddSingleTaskActive, ToggleSingleTask, Hours, SetHours, AddHours } ) => {
    const [Task, SetTask] = useState(null);
    const [TaskHour, SetTaskHour] = useState(12);

    const AddTaskHandler = async () => {
        await AddHours(Task, TaskHour);
        await ToggleSingleTask();
    };

    const TaskOnChangeHandler = async (e) => {
        SetTask(e.target.value);
    };

    const TaskHourOnChangeHandler = async (e) => {
        SetTaskHour(e.target.value);
    };

    return (
        <AddSingleTaskWrapper>
            <TaskMenu>
                <h1>add new task</h1>
                <p>enter task here:</p>
                <form>
                    <input id="newTaskInput" type="text" onChange={TaskOnChangeHandler} onSubmit={() => {console.log('this')}} /><br/><br/>
                    <select name="hourSelect" id="hourSelect" defaultValue="12" onChange={TaskHourOnChangeHandler} >
                        <option value="0" >12 am</option>
                        <option value="1" >1 am</option>
                        <option value="2" >2 am</option>
                        <option value="3" >3 am</option>
                        <option value="4" >4 am</option>
                        <option value="5" >5 am</option>
                        <option value="6" >6 am</option>
                        <option value="7" >7 am</option>
                        <option value="8" >8 am</option>
                        <option value="9" >9 am</option>
                        <option value="10" >10 am</option>
                        <option value="11" >11 am</option>
                        <option value="12" >12 pm</option>
                        <option value="13" >1 pm</option>
                        <option value="14" >2 pm</option>
                        <option value="15" >3 pm</option>
                        <option value="16" >4 pm</option>
                        <option value="17" >5 pm</option>
                        <option value="18" >6 pm</option>
                        <option value="19" >7 pm</option>
                        <option value="20" >8 pm</option>
                        <option value="21" >9 pm</option>
                        <option value="22" >10 pm</option>
                        <option value="23" >11 pm</option>
                    </select>
                </form><br/>
                <button className="greenBtn" onClick={ () => {AddTaskHandler()} } >add task</button><br/>
                <button className="greenBtn" onClick={ () => {ToggleSingleTask()} } >close</button><br/>
            </TaskMenu>
        </AddSingleTaskWrapper>
    );
};

export default AddSingleTask;