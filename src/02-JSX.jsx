import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => {
  return `${user.firstName} ${user.lastName}`;
};

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1> Hi, {formatName(user)}!</h1>;

// 以下两种示例代码完全等效：
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
// // 注意：这是简化过的结构
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// 这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。
ReactDOM.render(
  <div>
    {element}
    <pre>
      {/* prettier-ignore */}
      <code>
      {`import React from 'react';
import ReactDOM from 'react-dom';

const formatName = user => {
  return \`${user.firstName} ${user.lastName}\`;
};

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

const element = <h1> Hi, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));

// 以下两种示例代码完全等效：
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
// // 注意：这是简化过的结构
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// 这些对象被称为 “React 元素”。它们描述了你希望在屏幕上看到的内容。React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。
`}
    </code>
    </pre>
    <a href="/">return</a>
  </div>,
  document.getElementById('root')
);
