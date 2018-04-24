import React from 'react';
import Song from './song';
import PropTypes from 'prop-types';

export default function ListSongs(props) {
  return (
    <div>
      {props.songs.map(song => {
          return <Song key={song.id} song={song}/>
      })}
    </div>
  );
}

ListSongs.propTypes = {
  key: PropTypes.string,
  image: PropTypes.string,
  artist: PropTypes.string,
  title: PropTypes.string
};
