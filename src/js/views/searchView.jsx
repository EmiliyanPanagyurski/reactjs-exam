import React, { Component } from 'react';
import SongsSearchEngine from '../components/search';
import SearchResult from '../components/searchResult';

class SearchView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <SongsSearchEngine />
       <SearchResult />
     </div>
    );
  }
}

export default SearchView;