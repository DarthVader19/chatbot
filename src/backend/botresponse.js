 export const chatbot = {
    greetings: [
      'Hello!',
      'Hi there!',
      'Welcome!',
      'Greetings!',
    ],
    getGreeting() {
      // Pick a random greeting from the greetings array
      const greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
      return greeting;
    },
    responses: {
      'how are you?': [
        'I\'m doing well, thank you!',
        'I\'m doing great!',
        'I\'m doing okay.',
        'I\'m doing fine, how are you?',
      ],
      'what is your name?': [
        'My name is Chatbot.',
        'I am Chatbot.',
        'I go by the name Chatbot.',
      ],
      'what do you do?': [
        'I am a chatbot designed to have conversations with people.',
        'I am here to answer your questions and have a conversation with you.',
        'I am a program designed to simulate conversation with humans.',
      ],
    },
    getResponse(message) {
      // Check if the message matches any of the keys in the responses object
      for (const key of Object.keys(this.responses)) {
        if (message.toLowerCase().includes(key)) {
          // If a match is found, pick a random response from the array
          const response = this.responses[key][Math.floor(Math.random() * this.responses[key].length)];
          return response;
        }
      }
  
      // If no match is found, return a default response
      return 'I\'m not sure how to respond to that.';
    },
  };

