import React from 'react'
import SearchResults from './SearchResults'
import './ZipSearch.css'

class ZipSearch extends React.Component {
  constructor(props) {  
    super(props) 
    this.state = {
      zipcode: "",    
      results: []   
    }
  }

  handleInput = e => {
    this.setState({zipcode: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    
    fetch(`http://ctp-zip-api.herokuapp.com/zip/${this.state.zipcode}`)
      .then(response => response.json())
      .then(locations => {
        this.setState({results: locations})
      })
      .catch(error => {
        this.setState({results: []})
        console.log(error)
      })
  }
  
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Zip Code Search</h1>
        </header>
        <div className="search-body">  
          <form className="search-form" onSubmit={this.handleSubmit}>
            <p>Zip Code:</p>
            <input placeholder="Try 10016" onChange={this.handleInput}></input>
          </form>
          <SearchResults results={this.state.results} />
        </div>
      </div>
    )
  }
}

export default ZipSearch
