import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSontToPlaylist } from '../actions/action-creators';

class Song extends Component {
  constructor(props) {
    super(props);

    this.addSong = this.addSong.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      playlistName: ''
    };
  }

  handleChange({ target }) {
    this.setState({
      playlistName: target.value
    });
  }

  addSong(e) {
    e.preventDefault();

    this.props.addSong(this.state.playlistName, this.props.song);
  }

  render() {
    return (
      <div className="song">
        <img src={this.props.song.image} alt={this.props.song.artist} />
        <p>{this.props.song.title} by: {this.props.song.artist}</p>
        <button className="btn btn-primary">Play</button>
        <form onSubmit={this.addSong}>
          <select onChange={this.handleChange}>
            <option value=""></option>
            {this.props.playlistNames.map(name => {
              return <option key={name} value={name}>{name}</option>
            })}
          </select>
          <button className="btn btn-primary">Add song to playlist</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { playlists } = state;
  const playlistNames = playlists.map(p => {
    return p.name;
  });
  return { playlistNames };
}

function mapDispatchtoProps(dispatch) {
  return {
    addSong(name, song) {
      const action = addSontToPlaylist(name, song);

      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Song);
