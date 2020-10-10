import React from 'react';
import Activities from './Activities';

const Activity = props => {
  const activityList = [{
    task: "Eric Holfman has checked into 125 Sullivan",
    content: "Just Now"
  }, {
    task: "Netguru Team has checked into 125 Sullivan",
    content: "6.30 PM, Yesterday"
  }, {
    
    task: "Invision Inc has checked into 125 Sullivan",
    content: "5.30PM, Yesterday"
  },
  {
    task: "Eric Holfman has checked into 125 Sullivan",
    content: "6.30 PM, Tuesday"
  }];
  return (
    <div className="taskHolder">
    <div className="acts"> 
      <h4>Activities</h4><a>View All</a>
      </div>
      <div className="tasksList">
        {activityList.map(item =>
       <Activities task={ item.task} content={item.content}/>)}
      </div>
    </div>
  );
};

export default Activity;