import React from 'react';
import NotifiData from '../TANs/NotifiData';

const Notification = props => {
  const notificationList = [{
    task: "Eric Holfman accepted your invitation",
    content: "Just Now"
  }, {
    task: "Call Adam to review the theme document",
    content: "1 hr ago"
  }, {
    
    task: "Eric Holfman accepted your Schedule",
    content: "2 hr ago"
  },
  {
    task: "Justas Galaburda accepted your invitation",
    content: "5 hr ago"
  }];
  return (
    <div className="taskHolder">
<div className="notes"> 
      <h4>Notifications</h4><a>View All</a>
      </div>
      <div className="tasksList">
        {notificationList.map(item =>
       <NotifiData task={ item.task} content={item.content}/>)}
      </div>
    </div>
  );
};


export default Notification;