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

  const onDragStart = useCallback((result) => {
    console.log('onDragStart');
    document.body.style.color = 'orange';
  }, []);

  const onDragUpdate = useCallback((result) => {
  }, []);

  const onDragEnd = useCallback((result) => {
    // reorder the column
    console.log('onDragEnd');
    document.body.style.color = 'inherit';

    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if(
      destination.droppableId === source.droppableId
      && destination.index === source.index
    ) {
      // 같은 위치에 드롭한 경우 > 아무일 할 필요 없음
      return;
    }

    // 원래 state 회손하지 않기 위해 새 배열 생성
    // const column = this.state.columns[source.droppableId]; 이건 column 바뀌는경우 고려하지 않은 것
    const sourceColumn = blockData.columns[source.droppableId];
    const destinationColumn = blockData.columns[destination.droppableId];

    let newState = {}; // 업데이트할 상태값

    if(sourceColumn.id === destinationColumn.id) {
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
      newState = {
        ...blockData,
        columns: {
          ...blockData.columns,
          [newColumn.id] : newColumn,
        }
      };
    }
    else {
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

      newState = {
        ...blockData,
        columns: {
          ...blockData.columns,
          [newSourceColumn.id] : newSourceColumn,
          [newDestinationColumn.id] : newDestinationColumn,
        }
      };
    }



    console.log('newState',newState);

    // React.setState(newState);
    setBlockData(newState)
  }, []);

  return (
    <DragDropContext
      onDragStart = {onDragStart}
      onDragEnd = {onDragEnd}
    >
      <Container>
        {blockData.columnOrder.map(columnId => {
          const column = blockData.columns[columnId];
          const tasks = column.taskIds.map(taskId => blockData.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </Container>
    </DragDropContext>
  );
};

export default Home;
