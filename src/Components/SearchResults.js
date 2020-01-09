import React from 'react';
import PropTypes from 'prop-types'


function SearchResults(props) {  
  return (
    <div className="search-results">
      {props.SearchResults ? 
          props.SearchResults.map(result => result)
        :
          <p>No Results</p>
      }
    </div>
  )
}

/* 

proptypes
results: array of search results

*/


export default SearchResults
