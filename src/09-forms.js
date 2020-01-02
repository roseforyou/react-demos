import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div id="demo1">
        <h2>表单</h2>
        <p>{`
在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）之类的表单元素通常自己维护 state，
并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，
并且只能通过使用 setState()来更新。`}</p>
        <p>{`
我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。
渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。
被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。`}</p>
        <hr></hr>
        <pre>{`<select multiple={true} value={['B', 'C']}>`}</pre>
        <p>{`你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项`}</p>
        <pre>{`<input type="file" />`}</pre>
        <p>因为它的 value 只读，所以它是 React 中的一个非受控组件。</p>
      </div>
      <div id="demo2"></div>
      <div id="demo3"></div>
      <div id="demo4"></div>
      <a href="/">return</a>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
