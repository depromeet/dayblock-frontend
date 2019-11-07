const initialData = {
  tasks : {
    'task1': {
      id: 'task1',
      content: 'Task1 Content'
    },
    'task2': {
      id: 'task2',
      content: 'Task2 Content'
    },
    'task3': {
      id: 'task3',
      content: 'Task3 Content'
    },
    'task4': {
      id: 'task4',
      content: 'Task4 Content'
    }
  },


  columns: {
    'column1': {
      id: 'column1',
      title: 'To Do',
      taskIds: ['task1','task2','task3','task4']
    },
    'column2': {
      id: 'column2',
      title: 'Emergency',
      taskIds: []
    },
    'column3': {
      id: 'column3',
      title: 'Complete',
      taskIds: []
    }
  },

  columnOrder: ['column1', 'column2', 'column3']
};

export default initialData;
