import React from 'react';
import { connect } from 'react-redux';
import ListSongs from './listSongs';
import PropTypes from 'prop-types';

function TopSongs(props) {
  return (
    <div>
      <ListSongs songs={props.songs} />
    </div>
  );
}

function mapStateToProps(state) {
  const { songs } = state;

  return { songs };
}

TopSongs.propTypes = {
  songs: PropTypes.array
};

export default connect(mapStateToProps, null)(TopSongs);
