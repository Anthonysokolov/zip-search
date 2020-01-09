import React from 'react';
import PropTypes from 'prop-types'


function SearchResults(props) {  
  return (
    <div className="search-results">
      {props.results.length > 0 ? 
          props.results.map((result, index) => {
            const {City, State, Lat, Long, EstimatedPopulation, TotalWages } = result
            return (
              <div key={index}>
                <div className="search-results-header">
                  <h3>{City}, {State}</h3>
                </div>
                <ul>
                  <li>State: {State}</li>
                  <li>Location: {Lat}, {Long}</li>
                  <li>Population (estimated): {EstimatedPopulation}</li>
                  <li>Total Wages: {TotalWages}</li>
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
