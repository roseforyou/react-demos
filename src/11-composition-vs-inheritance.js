import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div id="demo1">
        <h2>组合 vs 继承</h2>
        <p>
          React
          有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。
        </p>
        <p>{`在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。`}</p>
        <p>{`Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。`}</p>
        <p>{`如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。`}</p>
        <hr></hr>
      </div>
      <div id="demo2"></div>
      <div id="demo3"></div>
      <div id="demo4"></div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
/////////////////////////
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

ReactDOM.render(<SignUpDialog />, document.getElementById('demo2'));
