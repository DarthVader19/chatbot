import React from 'react';
import ChatBox from './chatbox.js';

class Chatbot extends React.Component {
  state = {
    messages: [],
  };

  handleMessageSubmit = (event) => {
    event.preventDefault();

    // Get the message from the form field
    const message = event.target.message.value;

    // Send a request to the server to get a response from the chatbot
    fetch('http://localhost:3001/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the message and chatbot response to the messages array
        this.setState((state) => ({
          messages: [...state.messages, { sender: 'user', text: message }, { sender: 'chatbot', text: data.response }],
        }));
      });

    // Clear the form field
    event.target.message.value = '';
  };

  render() {
    const { messages } = this.state;
   
   
    return (
      <div>
        <form className=" text-white  mb-3 mt-3 ml-2" onSubmit={this.handleMessageSubmit}>
          <input className='' type="text" name="message" />
          <button className='d-inline p-2 bg-primary text-white rounded m-2' type="submit">Send</button>
        </form>
         <ChatBox messages={messages} />
      </div>
    );
  }
}

export default Chatbot;
