import React from 'react';
import ReactDOM from 'react-dom';
import ReactAppExample from './react_app_example';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactAppExample/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
