import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App component', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders without crashing and having', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML.includes('Welco1')).toBeTruthy();
  });

  it('renders without crashing and not having idiots', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    expect(div.innerHTML.includes('idiots')).toBeFalsy();
  });
});
