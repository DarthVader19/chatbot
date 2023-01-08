import {chatbot} from './botresponse.js';

import  express from 'express';
import bodyParser from 'body-parser';
const app = express();



// Use body parser to parse JSON bodies
app.use(bodyParser.json());

//cors middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  //

app.get('/',(req,res)=>{
    res.send('server is  running');
})

app.post('/api/chatbot', (req, res) => {
  const { message} = req.body;
  const botres=chatbot.getResponse(message)

  res.json({'message':message,
response:botres});
// console.log(message);
});


//chatbot

app.post('/api/sign-in', (req, res) => {
    const { email, password } = req.body;
  
    // Check if the email and password are valid
    if (email === 'test@example.com' && password === 'password') {
      // Sign in successful, send a response indicating success
      res.json({ success: true });
      
      
    } else {
      // Sign in failed, send a response indicating failure
      res.json({ success: false });
      
      
    }
  });





app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
