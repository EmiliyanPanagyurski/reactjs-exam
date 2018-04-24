import React from 'react';
import { connect } from 'react-redux';
import ListSongs from './listSongs';
import PropTypes from 'prop-types';

function SearchResult(props) {
  if (!props.searchResults.result) {
    return <h3>Search for a song</h3>;
  }

  return (
    <div>
      <h3>Search results:</h3>
      <ListSongs songs={props.searchResults.result} />
    </div>
  );
}

function mapStateToProps(state) {
  const { searchResults } = state;
  return { searchResults };
}

SearchResult.propTypes = {
  songs: PropTypes.array
};

export default connect(mapStateToProps, null)(SearchResult);
