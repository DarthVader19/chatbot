import React from 'react';


class SignInForm extends React.Component {
  state = {
    email: '',
    password: '',
    error:'',
    
  };
    
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();

    // Send a request to the server to sign in the user
    fetch('http://localhost:3001/api/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Sign in successful, redirect the user to the home page
        //   this.props.history.push('/');
          console.log('success');
          this.setState({ error: '' });
          const {router}=this.props
          router('chatbot')
          
          
        } else {
          // Sign in failed, display an error message
          this.setState({ error: 'Sign in failed. Please check your email and password and try again.' });
        }
      });
  };

  render() {
    const { email, password, error } = this.state;
   
    return (
      <form className='form-group ' style={{"width":"48vh","margin":"3rem"}} onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input className='form-control shadow-3 border border-secondary ' style={{"width":"48vh"}} type="email" name="email" value={email} onChange={this.handleChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
        type="password" className='form-control border border-secondary shadow-3 ' name="password" value={password} onChange={this.handleChange}
        style={{"width":"48vh"}} />
        <br />
        <button  className='btn btn-primary' type="submit">Sign In</button>
        {error && <p>{error}</p>}
      </form>
    );
  }
}



export default SignInForm;
