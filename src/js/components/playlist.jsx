import React from 'react';
import { connect } from 'react-redux';
import ListSongs from './listSongs';
import PropTypes from 'prop-types';

function Playlist(props) {
  const playlist = props.playlists.find(p => p.name === props.match.params.name);

  if (playlist.songs.length === 0) {
    return (
      <div>
        <h1>{playlist.name}</h1>
        <h2>Playlist is emplty</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>{playlist.name}</h1>
      <ListSongs songs={playlist.songs} />
    </div>
  );
}

function mapStateToProps(state) {
  const { playlists } = state;
  return { playlists };
}

Playlist.propTypes = {
  songs: PropTypes.array
};


export default connect(mapStateToProps, null)(Playlist);
