import '../assets/css/App.css';
import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: 'Tab 1', pane: 'Tab 1 Content' },
  { menuItem: 'Tab 2', pane: 'Tab 2 Content' },
  { menuItem: 'Tab 3', pane: 'Tab 3 Content' },
]

class App extends React.Component {
  render() {
    return (
      <Tab panes={panes} renderActiveOnly={false} />
    );
  }
}

export default App;
