import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  return (
    <aside className="site-sidebar">
      <nav className="side-nav">
        <ul>
          <li><Link to="/create-playlist">Create Playlist</Link></li>
        </ul>
      </nav>

      <hr />

      <h4>Your Playlists:</h4>
      <ul>
        {props.playlistNames.map(name => {
          return <li key={name}><Link to={'/playlist/' + name}>{name}</Link></li>
        })}
      </ul>
    </aside>
  );
}

function mapStateToProps(state) {
  const { playlists } = state;
  const playlistNames = playlists.map(p => p.name);
  return { playlistNames };
}

export default connect(mapStateToProps, null)(Sidebar);