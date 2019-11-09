import React, {useState, useEffect} from 'react';
import './TaskSchedule.css';

const TaskSchedule = ({data, timePosition, onDragStart}) => {
	const [taskTop, setTaskTop] = useState(1);
	const [taskBottom, setTaskBottom] = useState(2);
	
	useEffect(() => {
		// console.log('컴포넌트가 화면에 나타남');
		setTaskTop(timePosition.indexOf(data.startTime));
		setTaskBottom(timePosition.indexOf(data.endTime));
    return () => {
      // console.log('컴포넌트가 화면에서 사라짐');
    };
	}, [data.endTime, data.startTime, timePosition]);
	const grid = {gridArea:`${taskTop}/1/${taskBottom}/2`}
	
	return (
		<div
			id="task"
			className={`task ${data.type}`}
			style={grid}
		>
			<div className="top" onDragStart={onDragStart} draggable="true" data-id={data.id} data-role="top"></div>
				<header className="task-header">{data.startTime}</header>
				<div className="task-body">{data.taskNote}</div>
			<div className="bottom" onDragStart={onDragStart} draggable="true" data-id={data.id} data-role="bottom"></div>
		</div>
	);
};

export default TaskSchedule;