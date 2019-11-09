import React, {useState} from 'react';
import './Schedule.css';
import TaskSchedule from './TaskSchedule';
import axios from 'axios';

const initialData = [
  {id:1, taskNote:'taskNote 해야함!', type:'urgency', startTime:'08:00', endTime:'12:00'},
  {id:2, taskNote:'밥먹기 해야함!', type:'todo', startTime:'12:00', endTime:'14:00'},
  {id:3, taskNote:'밤을 새볼까나?', type:'todo', startTime:'15:00', endTime:'16:00'},
  {id:4, taskNote:'내일 발표인데 우짜지...', type:'todo', startTime:'17:00', endTime:'19:00'},
  {id:5, taskNote:'taskNote 해야함!', type:'urgency', startTime:'19:00', endTime:'20:00'},
];

const Schedule = () => {
  const [tasks, setTasks] = useState(initialData);
  const [startId, setStartId] = useState(0);
  const [updatePoint, setUpdatePoint] = useState(null);
  const timePosition=[null, "06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"];

  const dateTable = () =>{
    let times = timePosition.map((time,index)=>{
      if(!time){
        const style = {
          textAlign: "center",
          position:"absolute",
          top:"-30px",
          background:'#fff',
          padding:'10px',
          width:'280px',
          borderTopLeftRadius:'8px',
          borderTopRightRadius:'8px',
          boxShadow: '0 0 10px 0 #d2d7e0',
        }
        const today = new Date();
        const year  = today.getFullYear(); 
        const month  = today.getMonth() + 1; 
        const day  = `${today.getDate()}`.padStart(2, '0'); 
        return (
          <div key={index} style={style} className="schedule-date">
              {`${year}-${month}-${day}`}
          </div>
        )
      }
      else{
        return (
          <div key={index} className={`schedule-time ${index === 1 ? "first" : "" } ${(index === timePosition.length -1) ? "last" : ""}`}>
            {time}
            <div id="droptarget" className="timeline" data-grid={index} onDrop={(e=>onDropTask(e))} onDragOver={(e => onDragOver(e))}></div>
          </div>
        )
      }
    })
    return times;
  }
  const onDropTask = e =>{
    console.log('e',e)
  }
  const onChangeTaskTime = e =>{
    // api 통신
    const taskId = parseInt(startId);
    const data = tasks.filter(task=>task.id===taskId)
    const URL = "http://dev.ryulth.com:14141";
    const API = `/api/block/update/time`;
    const payLoad ={
      "endTime": data.endTime,
      "id": data.id,
      "startTime": data.startTime
      }
    axios({
      url: URL+API,
      method: 'PUT',
      headers: { 'Authorization': '123' },
      data: payLoad
    });
  }
  const onDragOver = e =>{
    e.preventDefault();
    let targetPoint = parseInt(e.target.dataset.grid);
    // data 수정 로직
    if(updatePoint === "top"){
      setTasks(tasks.map(task =>(task.id === parseInt(startId)) ? {...task, startTime:timePosition[targetPoint]} : task))
    } else {
      setTasks(tasks.map(task =>(task.id === parseInt(startId)) ? {...task, endTime:timePosition[targetPoint]} : task))
    }
  }
  const onDragStart=e=>{
    setStartId(e.target.dataset.id);
    setUpdatePoint(e.target.dataset.role);
  }
    return (
        <section className="schedule-container">
          <div className="schedule-back">
            {dateTable()}
          </div>
          <div className="schedule-back" onDrop={(e=>onChangeTaskTime(e))} onDragOver={(e=>e.preventDefault())}>
          {tasks.map(data => (
            <TaskSchedule data={data} timePosition={timePosition} key={data.id} onDragStart={onDragStart}/>
          ))}
          </div>
        </section>
    );
};

export default Schedule;