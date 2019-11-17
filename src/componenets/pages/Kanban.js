import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import KanbanSchedule from '../kanbanSchedule/KanbanSchedule';

const Kanban = () => {
    return (
        <MainTemplate body={
            <KanbanSchedule/>
        }/>
    );
};

export default Kanban;