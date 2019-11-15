import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div id="demo1">test</div>
      <div id="demo2"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
//////////////////////////////////////////

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

function LoginButton(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <button onClick={props.onClick}>{isLoggedIn ? 'Logout' : 'login'}</button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleClick() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  render() {
    const button = (
      <LoginButton
        isLoggedIn={this.state.isLoggedIn}
        onClick={this.handleClick.bind(this)}
      />
    );

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(<LoginControl />, document.getElementById('demo1'));
