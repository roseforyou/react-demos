import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div id="demo1"></div>
      <pre>
        <code>
          {/*prettire-ignore*/}
          {`import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={number}>{number}</li>);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('demo1'));
`}
        </code>
      </pre>
      <h2>key 只是在兄弟节点之间必须唯一</h2>
      <p>
        数组元素中使用的 key
        在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。
      </p>
      <p>key 会传递信息给 React ，但不会传递给你的组件。</p>
      <hr />
      <div id="demo2"></div>
      <hr />
      <pre>
        <code>
          {/*prettier-ignore*/}
          {`function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById('demo2'));`}
        </code>
      </pre>
      <a href="/">return</a>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
////////////////////////
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <li key={number}>{number}</li>);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('demo1'));
////////////////////////
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];
ReactDOM.render(<Blog posts={posts} />, document.getElementById('demo2'));
