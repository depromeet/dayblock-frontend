import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd';
import styled from 'styled-components'

import initialData from "../initial-data.js";
import Column from '../component/Column.jsx'

const Container = styled.div`
  display: flex;
`

const Home = () => {
  const [blockData, setBlockData] = useState(initialData);

  // const onDragStart = useCallback((result) => {
  //   console.log('onDragStart');
  // }, []);
  //
  // const onDragUpdate = useCallback((result) => {
  // }, []);

  const onDragEnd = useCallback((result) => {
    console.log('onDragEnd');

    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    // 같은 위치에 드롭한 경우 > 아무일 할 필요 없음
    if(destination.droppableId === source.droppableId
      && destination.index === source.index
    ) return;

    const sourceColumn = blockData.columns[source.droppableId];
    const destinationColumn = blockData.columns[destination.droppableId];

    let newState = {};
    if(sourceColumn.task_id === destinationColumn.task_id) {
      newState = updateSameColumn(source, destination, draggableId);
    }
    else {
      newState = updateDifferentColumn(source, destination, draggableId);
    }

    setBlockData(newState)
  }, []);

  const updateSameColumn = (source, destination, draggableId) => {
    const sourceColumn = blockData.columns[source.droppableId];

    const newTaskIds = Array.from(sourceColumn.taskIds);
    // const newTaskIds = column.taskIds; 이건 왜안될까....

    newTaskIds.splice(source.index, 1); // 움직인 task 제거
    // 제거없이 destination.index 위치에 draggableId 추가
    newTaskIds.splice(destination.index, 0, draggableId);

    console.log('sourceColumn',sourceColumn);
    console.log('newTaskIds',newTaskIds);

    const newColumn = {
      ...sourceColumn,
      taskIds: newTaskIds
    };

    console.log('newColumn',newColumn);

    // 변경사항만 오버라이딩
    const newState = {
      ...blockData,
      columns: {
        ...blockData.columns,
        [newColumn.task_id] : newColumn,
      }
    };

    console.log('newState',newState);

    return newState;
  };

  const updateDifferentColumn = (source, destination, draggableId) => {
    const sourceColumn = blockData.columns[source.droppableId];
    const destinationColumn = blockData.columns[destination.droppableId];

    const sourceTaskIds = Array.from(sourceColumn.taskIds);
    sourceTaskIds.splice(source.index, 1);
    const newSourceColumn = {
      ...sourceColumn,
      taskIds: sourceTaskIds
    };

    const destinationTaskIds = Array.from(destinationColumn.taskIds);
    destinationTaskIds.splice(destination.index, 0, draggableId);
    const newDestinationColumn = {
      ...destinationColumn,
      taskIds: destinationTaskIds
    };

    const newState = {
      ...blockData,
      columns: {
        ...blockData.columns,
        [newSourceColumn.task_id] : newSourceColumn,
        [newDestinationColumn.task_id] : newDestinationColumn,
      }
    };

    console.log('newState',newState);


    return newState;
  };

  return (
    <DragDropContext
      onDragEnd = {onDragEnd}
    >
      <Container>
        {blockData.columnOrder.map(columnId => {
          const column = blockData.columns[columnId];
          const tasks = column.taskIds.map(taskId => blockData.tasks[taskId]);

          return <Column key={column.task_id} column={column} tasks={tasks} />
        })}
      </Container>
    </DragDropContext>
  );
};

export default Home;
