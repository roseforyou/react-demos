import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div id="demo2">
        <h2>阻止组件渲染</h2>
        <ul>
          <li>
            在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让
            render 方法直接返回 null，而不进行任何渲染。
          </li>
          <li>在组件的 render 方法中返回 null 并不会影响组件的生命周期。</li>
        </ul>
      </div>
      <div id="demo1">test</div>
      <pre>
        <code>
          {/* prettier-ignore */}
          {`
import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<LoginControl />, document.getElementById('root'));
`}
        </code>
      </pre>
      <a href="/">return</a>
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
