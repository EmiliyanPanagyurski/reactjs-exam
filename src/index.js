import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import SearchView from './js/views/searchView';
import TopSongs from './js/components/topSongs';
import CreatePlaylist from './js/components/createPlaylist';
import Playlist from './js/components/playlist';
import songsReducer from './js/reducers/songs-reducer';
import searchReducer from './js/reducers/searchResult-reducer';
import playlistReducers from './js/reducers/playlist-reducer';

const AppState = {
  /* Reducers and state go here */
  songs: songsReducer,
  searchResults: searchReducer,
  playlists: playlistReducers
};

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers(AppState), applyMiddleware(middleware));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <div className="row no-gutters main-content-wrapper">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9">
                <Route path="/search" component={SearchView} />
                <Route path="/top-songs" component={TopSongs} />
                <Route path="/create-playlist" component={CreatePlaylist} />
                <Route path="/playlist/:name" component={Playlist} />
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
