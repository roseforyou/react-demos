import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div id="demo1">
        <h2>状态提升</h2>
        <p>{`在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。`}</p>
        <hr></hr>
      </div>
      <div id="demo2"></div>
      <div id="demo3">
        <pre>
          {/* prettier-ignore */}
          <code>
          {`
import React from 'react';
import ReactDOM from 'react-dom';

//基础函数不需要讲
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

//定义一个容器组件, 用来装载温度组件, 并且传递温度组件之间的状态值.
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      temperature: '',//输入的温度 or 转换后的温度
      scale: '',      //摄氏温度 or 华氏温度'
    };
  }
  
  //用来接收子组件传来的数据
  handleChange(temperature, scale) {
    this.setState({ temperature, scale });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const ct = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const ft =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Temperature scale="c" temperature={ct} onChange={this.handleChange} />
        <Temperature scale="f" temperature={ft} onChange={this.handleChange} />
      </div>
    );
  }
}

//定义一个温度组件
class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }
  //当用户录入温度时会触发change事件, 调用父组件的handleChange事件
  change(e) {
    this.props.onChange(e.target.value, this.props.scale);
  }
  //同样当前录入的组件也会刷新, 只不过值是一样的, 不会触发change事件!
  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    const txt = scale === 'c' ? '摄氏温度' : '华氏温度';
    return (
      <div>
        {txt}: <input value={temperature} onChange={this.change} />
      </div>
    );
  }
}
`}
        </code>
        </pre>
      </div>
      <div id="demo4"></div>
      <a href="/">return</a>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
///////////////
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: '',
      scale: '',
    };
  }

  handleChange(temperature, scale) {
    this.setState({ temperature, scale });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const ct = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const ft =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Temperature scale="c" temperature={ct} onChange={this.handleChange} />
        <Temperature scale="f" temperature={ft} onChange={this.handleChange} />
      </div>
    );
  }
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.onChange(e.target.value, this.props.scale);
  }

  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    const txt = scale === 'c' ? '摄氏温度' : '华氏温度';
    return (
      <div>
        {txt}: <input value={temperature} onChange={this.change} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('demo2'));
