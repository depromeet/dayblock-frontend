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

  React.useEffect(() => console.log('blockData',blockData));

  const onDragEnd = useCallback((result) => {
    console.log('onDragEnd 시작할 때 blockData',blockData);

    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    }

    if(
      source.droppableId === destination.droppableId
      &&  source.index === destination.index
    ) {
      return;
    }

    const sourceColumn = blockData.columns[source.droppableId];
    const destinationColumn = blockData.columns[destination.droppableId];


    let newState = {}; // 업데이트할 상태값

    if(sourceColumn.column_id === destinationColumn.column_id) {
      const newTaskIds = Array.from(sourceColumn.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds
      };

      newState = {
        ...blockData,
        columns: {
          ...blockData.columns,
          [newColumn.column_id] : newColumn,
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
          [newSourceColumn.column_id] : newSourceColumn,
          [newDestinationColumn.column_id] : newDestinationColumn,
        }
      };
    }


    // const [blockData, setBlockData] = useState(initialData);
    console.log(newState)
    setBlockData(newState);
  }, []);

  return (
    <DragDropContext
      onDragEnd = {onDragEnd}

    >
      <Container>
        {blockData.columnOrder.map(columnId => {
          const column = blockData.columns[columnId];
          const tasks = column.taskIds.map(taskId => blockData.tasks[taskId]);

          return <Column key={column.column_id} column={column} tasks={tasks} />
        })}
      </Container>
    </DragDropContext>
  );
};

export default Home;
