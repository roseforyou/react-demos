import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <ul>
        <li>React 事件的命名采用小驼峰式（camelCase），而不是纯小写。</li>
        <li>
          在 React 中另一个不同点是你不能通过返回 false
          的方式阻止默认行为。你必须显式的使用 preventDefault 。
        </li>
        <li>
          你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class
          的方法默认不会绑定 this。
        </li>
        <li>向事件处理程序传递参数:</li>
        <li>
          在循环中，通常我们会为事件处理函数传递额外的参数。 <br />
          例如，若
          id是你要删除那一行的ID，以下两种方式都可以向事件处理函数传递参数：
          <pre>
            {`<button onClick={e => this.deleteRow(id, e)}>Delete Row</button>\r\n<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`}
          </pre>
          上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind
          来实现。
        </li>
      </ul>
      <Toggle />
      <pre>
        <code>
          {/* prettier-ignore */}
          {`
import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // 为了在回调中使用 \`this\`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
  `}
        </code>
      </pre>
      <a href="/">return</a>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
