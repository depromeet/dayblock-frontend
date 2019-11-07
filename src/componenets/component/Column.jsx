import React from 'react';
import styled from 'styled-components'
import {Droppable} from "react-beautiful-dnd";

import Task from './Task.jsx'

const Container = styled.div`
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 #d2d7e0;
  background-color: #f8f9fb;

  margin: 8px;
  
  display: flex;
  flex-direction: column;
`;

const TitleArea = styled.div`
  width: 280px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const TitleText = styled.div`
  font-weight: bold;
  color: #000000;
  padding-left: 14px;
  font-size: 20px;
  padding-top: 5px;
`

// background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')}
const TaskList = styled.div`
  padding: 10px;
  background-color: #f8f9fb;

  flex-grow: 1;
  min-height: 100px;
`;

const AddTaskButtonArea = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  
`

const AddTaskText = styled.div`
  color: #32325d;
  font-size: 16px;
  opacity: 0.4;
  margin-right: 12px;
  padding-top: 10px;
`

const AddButton = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0.4;
  padding-top: 10px;
`

const Column = (props) => {
  return (
    <Container>
      <TitleArea>
        <TitleText>
          {props.column.title}
        </TitleText>
      </TitleArea>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref = {provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver = {snapshot.isDraggingOver}
          >
            {props.tasks.map((task,index) => (
              <Task key={task.id} task={task} index={index}/>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>

      <AddTaskButtonArea>
        <AddTaskText>Add Task</AddTaskText>
        <AddButton/>
      </AddTaskButtonArea>
    </Container>
  )
};

export default Column;
