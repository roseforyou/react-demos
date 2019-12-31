import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <pre>
      <code>
        {/* prettier-ignore */}
        {`
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(\<h1\>Hello, world!\</h1\>, document.getElementById('root'));
`}
      </code>
    </pre>
  </div>,
  document.getElementById('root')
);
