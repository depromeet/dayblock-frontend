import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import {dropdown_icon, comment_icon, file_icon} from '../../resources/icons'

// background-color: ${props => (props.isDragging ? 'rgba(124,123,181,0.2)' : 'white')};
const Container = styled.div`
  width: 240px;
  min-height: 120px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
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
  color: #2E2E2E;
  min-height: 60px;
  margin-bottom: 5px;
`;

const TaskFooter = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
`;

const CommentIcon = styled.img.attrs({
  src: comment_icon
})`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const FileIcon = styled.img.attrs({
  src: file_icon
})`
  width: 15px;
  height: 15px;
`;

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.task_id} index={props.index}>
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
            {props.task.note}
          </TaskContent>
          <TaskFooter>
            <CommentIcon/>
            <FileIcon/>
          </TaskFooter>
        </Container>
      )}
    </Draggable>
  );
}

export default Task;
