import React, { Component } from 'react';
class TeamConversation extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [
                {   image: "https://www.flaticon.com/svg/static/icons/svg/164/164846.svg",
                    sender: "Priya",
                    message: "Hi How are you? Any update on new design?"
                },
                {
                    image:"https://www.flaticon.com/svg/static/icons/svg/1734/1734069.svg",
                    sender: "Sri",
                    message: "Yes, Any updates?"
                },
                {
                    image:"https://www.flaticon.com/premium-icon/icons/svg/145/145856.svg",
                    sender: "Sara",
                    message: "Any changes in needed in current design?"
                },
                {
                    image:"https://www.flaticon.com/svg/static/icons/svg/164/164846.svg",
                    sender: "Priya",
                    message: "Yes, few changes required."
                }
            ]
        }
    }
    render() {
        return (
            <div className="teamConversation">
                <h4><img src="https://www.flaticon.com/svg/static/icons/svg/3601/3601377.svg" className="conversation"/> 
                
                Team conversations</h4>
                <div className="teamsHolder">
                    <div className="chatsHolder">
                    
                        {this.state.data.map((item) =>
                <div className="config">
                  
                    <img className="itemImage" src={item.image} />
                            <div className='chatContent'>
                                <div className="chatMessage">{item.message}</div>
                                <h6 className="sender">{item.sender}</h6>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}




export default TeamConversation;