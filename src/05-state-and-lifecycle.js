import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      //this.props 和 this.state 可能会异步更新, 所以你不要依赖他们的值来更新下一个状态。
      //可以让 setState() 接收一个函数而不是一个对象。
      //非官方的异步
      this.setState({ date: new Date() }, () => {
        // console.log(this.state.date);
      });
    }, 1000);
  }

  render() {
    return <div>Now time is: {this.state.date.toLocaleString()}</div>;
  }
}

ReactDOM.render(
  <div>
    <Clock />
    <pre>
      {/* prettier-ignore */}
      <code>
      {`import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      //this.props 和 this.state 可能会异步更新, 所以你不要依赖他们的值来更新下一个状态。
      //可以让 setState() 接收一个函数而不是一个对象。
      //非官方的异步
      this.setState({ date: new Date() }, () => {
        // console.log(this.state.date);
      });
    }, 1000);
  }

  render() {
    return <div>Now time is: {this.state.date.toLocaleString()}</div>;
  }
};

ReactDOM.render(<Clock />, document.getElementById('root'));

// 数据是向下流动的
// 不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。
// 这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。

// 组件会在其 props 中接收参数，但是组件本身无法知道它是来自于 组件的state，或是 组件的 props，还是手动输入的
`}
    </code>
    </pre>
    <a href="/">return</a>
  </div>,
  document.getElementById('root')
);
