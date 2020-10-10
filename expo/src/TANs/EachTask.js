import React from 'react';
const EachTask = props => {
  return (
    <div className="eachTask">
      <input className="box" type="checkbox" />
      <h5 className="task">{props.task}</h5>
      <h6 className="time">{props.content}</h6>
    </div>
  );
};

export default EachTask;