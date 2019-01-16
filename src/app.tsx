import * as React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <p>hey there friend how are you</p>
      </div>
    )
  }
}

export default hot(module)(App);