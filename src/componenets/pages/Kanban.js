import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import KanbanSchedule from '../KanbanSchedule';

const Kanban = () => {
    return (
        <MainTemplate body={
            <KanbanSchedule/>
        }/>
    );
};

export default Kanban;