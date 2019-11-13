import React from 'react';
import ReactDOM from 'react-dom';
//函数组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// class组件
class Welcome extends React.Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <Avatar user={this.props.user} /> <div>Hi, {this.props.text} </div>
      </div>
    );
  }
}
//上述两个组件在 React 里是等效的。

class Avatar extends React.Component {
  //可以不写
  // constructor() {
  //   super();
  // }
  render() {
    //默认自带 props
    const user = JSON.parse(this.props.user);
    return <img className="Avatar" src={user.avatarUrl} alt={user.name} />;
  }
}

function App() {
  return (
    <div>
      <Welcome
        text="Sara"
        user='{"avatarUrl": "https://placekitten.com/g/64/64", "name":"Sara"}'
      />
      <Welcome
        text="Cahal"
        user='{"avatarUrl": "https://placekitten.com/g/64/64", "name":"Cahal"}'
      />
      <Welcome
        text="Edite"
        user='{"avatarUrl": "https://placekitten.com/g/64/64", "name":"Edite"}'
      />
    </div>
  );
}

// const element = <Welcome name="Sara" />;
ReactDOM.render(<App />, document.getElementById('root'));
//所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
