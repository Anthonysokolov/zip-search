import React from 'react'
import SearchResults from './Components/SearchResults'
import './App.css'

class App extends React.Component {
  constructor(props) {  
    super(props) 
    this.state = {
      zipcode: "",    
      results: ""   
    }
  }

  handleInput = e => {
    this.setState({zipcode: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    

    // fetch results
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })


    console.log(this.state.zipcode)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Zip Code Search</h1>
        </header>
        <div className="search-body"> 
          <form className="search" onSubmit={this.handleSubmit}>
            <p>Zip Code:</p>
            <input placeholder="Try 10016" onChange={this.handleInput}></input>
          </form>
          <SearchResults results={this.state.results} />
        </div>
      </div>
    )
  }
}

export default App
