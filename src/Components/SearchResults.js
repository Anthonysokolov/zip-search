import React from 'react';
import PropTypes from 'prop-types'
import './SearchResults.css'

function SearchResults(props) {  
  return (
    <div className="search-results">
      {props.results.length > 0 ? 
          props.results.map((result, index) => {
            const {City, State, Lat, Long, EstimatedPopulation, TotalWages } = result
            return (
              <div className="search-result" key={index}>
                <div className="search-result-header">
                  <h3>{City}, {State}</h3>
                </div>
                <ul className="list">
                  <li><b>State:</b> {State}</li>
                  <li><b>Location:</b> {Lat}, {Long}</li>
                  <li><b>Population (estimated):</b> {EstimatedPopulation}</li>
                  <li><b>Total Wages:</b> {TotalWages}</li>
                </ul>
              </div>
          )})
        :
          <p>No Results</p>
      }
    </div>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
}

export default SearchResults
