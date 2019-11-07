import React from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd';

import {todo_icon, urgent_icon, complete_icon, add_button, trash_icon} from '../../resources/icons'
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


const ColumnIcon = styled.img`
  width: 18px;
  height: 18px;
  padding-left: 14px;
  padding-top: 5px;
  padding-right: 8px;
`;

const TitleText = styled.div`
  font-weight: bold;
  color: #000000;
  font-size: 20px;
  padding-top: 5px;
`;

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
`;

const AddClickArea = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`

const AddTaskText = styled.div`
  color: #32325d;
  font-size: 16px;
  opacity: 0.4;
  margin-right: 8px;
  padding-top: 10px;
`

const AddButton = styled.img.attrs({
  src: add_button
  })`
  width: 21px;
  height: 21px;
  padding-top: 10px;
  opacity: 0.85;
`

// {(props) => {
//   console.log(props.column.title);
//
//   if(props.column.title === 'To Do') {
//     return <ToDoIcon/>
//   } else if (props.column.title === 'Urgent') {
//     return <UrgentIcon/>
//   } else {
//     return <CompleteIcon/>
//   }
// }}

const Column = (props) => {
  const getColumnIconSource = (columnTitle) => {
    if(columnTitle === 'To Do') {
      return todo_icon;
    } else if (columnTitle === 'Urgent') {
      return urgent_icon;
    } else {
      return complete_icon;
    }
  };

  return (
    <Container>
      <TitleArea>
        <ColumnIcon
          src={getColumnIconSource(props.column.title)}
        />
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
        <AddClickArea>
          <AddTaskText>Add Task</AddTaskText>
          <AddButton/>
        </AddClickArea>
      </AddTaskButtonArea>
    </Container>
  )
};

export default Column;
