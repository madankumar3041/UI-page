import React from 'react';
const NotifiData = props => {
  return (
    <div className="eachTask">
      <h5 className="task">{props.task}</h5>
      <h6 className="time">{props.content}</h6>
    </div>
  );
};

export default NotifiData;