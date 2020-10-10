import React from 'react';
import EachTask from './EachTask';
const Tasks = props => {
  const tasksList = [{
    task: "Call Adam to review the theme document",
    content: "Scheduled for October 24, 2020"
  }, {
    task: "Meeting with  Daron to review the intake form",
    content: "Scheduled for Monday 24, 2020"
  }, {
    task: "Check uiKings theme and give customer support",
    content: "Scheduled for Monday 24, 2020"
  },
  {
    task: "Send the Billing agreement",
    content: "Scheduled for Monday 24, 2020"
  }];
  return (
    <div className="taskHolder">
      <div className="views"> 
      <h4>Tasks</h4><a>View All</a>
      </div>
      <div className="tasksList">
        {tasksList.map(item => 
       <EachTask task={ item.task} content={item.content}/>)}
      </div>
    </div>
  );
};
export default Tasks;