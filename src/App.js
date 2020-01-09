import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Zip Code Search</h1>
        </header>
        <div className="search-body">
          <div className="search">
            <p>Zip Code:</p>
            <input placeholder="Try 10016"></input>
          </div>
          No Results
        </div>
      </div>
  )
}
}

export default App
