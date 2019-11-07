import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: 260px;
  min-height: 120px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 10px;

  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}

  display: flex;
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
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
