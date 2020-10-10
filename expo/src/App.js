import React from 'react';
import './App.css';
import Topheader from './Components/Top header';
import ChatData from './Components/ChatData';
import TeamConversation from './Components/TeamConver/TeamConversation';
import CalenderEvents from './Components/CalenderEvents';
import Tasks from './TANs/Tasks';
import Activity from './TANs/Activity';
import Notification from './TANs/Notification';

function App() {
  return (
    <div className="App">
      <Topheader />
      <ChatData />
      <div className="sameLine">
        <CalenderEvents />
        <TeamConversation />
      </div>
      <div className="tasksComponents">
        <Tasks/>
        <Activity/>
        <Notification/>
      </div>
    </div>
  );
}

export default App;
