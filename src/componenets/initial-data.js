const initialData = {
  tasks : {
    'task1': {
      task_id: 'task1',
      title: 'Lab08 SQL11 실습',
      note: '11월7일(목) 11:50까지 파일명 lab08-sql11-2017104029-조민지'
    },
    'task2': {
      task_id: 'task2',
      title: '공학과윤리 팀플 모임',
      note: '11월8일(금) 7시 스위티두'
    },
    'task3': {
      task_id: 'task3',
      title: '확률및랜덤변수 5강 과제',
      note: '11월10일(일) 11:50까지'
    },
    'task4': {
      task_id: 'task4',
      title: '장학금 증명서 제출',
      note: '11월11일(월) 3시까지'
    },
    'task5': {
      task_id: 'task5',
      title: '데이터베이스 과제',
      note: '11월제30일(수) 프로젝트 계획서, 발표자료 제출'
    },
    'task6': {
      task_id: 'task6',
      title: '데이터베이스 온라인 보강',
      note: '온라인강의 듣고 Lab08 ER 다이어그램으로 바꾸기'
    },
  },
  columns: {
    'column1': {
      task_id: 'column1',
      title: 'To Do',
      taskIds: ['task1','task5','task6']
    },
    'column2': {
      task_id: 'column2',
      title: 'Urgent',
      taskIds: ['task3','task4']
    },
    'column3': {
      task_id: 'column3',
      title: 'Complete',
      taskIds: ['task2']
    }
  },

  columnOrder: ['column1', 'column2', 'column3']
};

export default initialData;
