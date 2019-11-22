import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <SyntaxHighlighter
      language="javascript"
      style={tomorrowNightEighties}
      showLineNumbers={true}
    >
      {`import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
`}
    </SyntaxHighlighter>
  </div>,
  document.getElementById('root')
);
