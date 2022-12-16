import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(
    <StrictMode>
      (<App />, div)
    </StrictMode>,
    document.getElementById('root')
  )
});
