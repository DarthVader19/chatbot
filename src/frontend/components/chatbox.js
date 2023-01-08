import React from "react";



const ChatBox=({messages})=>{

    return (
        <div className="card text-white bg-dark mb-3 mt-3 ml-2">
            <div className="card-header ">{'Chatbox'}</div>
            <div className="card-body">
                <p className="card-text"> 
                
                    {messages.map((message, index) => (
                        <div key={index}>
                        {(message.sender==='chatbot' &&<p className="d-inline  bg-primary text-white rounded m-2">{message.sender} : {message.text}</p>)||<p className="d-inline  text-success text-white rounded m-2">{message.sender} : {message.text}</p>}
                        </div>
                    ))}
                 
                </p>
            </div>
        </div>
    );
};

export default ChatBox;