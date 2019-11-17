import React from 'react';
import './KanbanSchedule.css';
import Schedule from './Schedule';
import Kanban from '../kanban/Kanban';

const KanbanSchedule = () => {
    return (
      <main className="main">
        <div className="main-info">
          <div className="schedule-info">S</div>
          <select className="schedule-select">
            <option value="Suzy's diary">Suzy's diary</option>
            <option value="Suzy's diary2">Suzy's diary1</option>
            <option value="Suzy's diary3">Suzy's diary2</option>
            <option value="Suzy's diary4">Suzy's diary3</option>
          </select>
        </div>
        <Schedule></Schedule>
        <Kanban></Kanban>
      </main>
    );
};

export default KanbanSchedule;