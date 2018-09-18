import React from 'react';
import Text from '../components/Text';

class App extends React.Component {
  state = { appName: 'Base' };

  render() {
    const { appName } = this.state;

    return (
      <div>
        <h1>
          <Text>{appName} app!</Text>
        </h1>
      </div>
    );
  }
}

export default App;
