import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import {dropdown_icon} from '../../resources/icons'

const Container = styled.div`
  width: 240px;
  min-height: 120px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 10px;

  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}

  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TaskHeader = styled.div`
  height: 25px;
  display: flex;
  
  position: relative;
  margin-bottom: 5px;
`;

const TaskTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap:break-word;
`;

const TaskDropDownButton = styled.img.attrs({
  src: dropdown_icon
  })`
  width: 16px;
  height: 16px;

  position: absolute;
  top: 0;
  right: 0;
  margin-top: 4px;
`;

const TaskContent = styled.div`
  font-size: 13px;
  word-break:break-all;
`;


const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <TaskHeader>
            <TaskTitle>{props.task.title}</TaskTitle>
            <TaskDropDownButton/>
          </TaskHeader>
          <TaskContent>
            {props.task.content}
          </TaskContent>

        </Container>
      )}
    </Draggable>
  );
}

export default Task;
