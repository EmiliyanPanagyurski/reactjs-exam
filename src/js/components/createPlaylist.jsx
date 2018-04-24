import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlaylistCreator } from '../actions/action-creators';

class CreatePlaylist extends Component {
  constructor(props) {
    super(props);

    this.createPlaylist = this.createPlaylist.bind(this);
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

  createPlaylist(e) {
    e.preventDefault();
    this.props.addPlaylist(this.state.playlistName);

    e.target.song.value = null;
  }

  render() {
    return (
      <section className="home-view container">
        <div className="row justify-center">
          <div className="col-12">
            <form onSubmit={this.createPlaylist}>
              <div className="form-group">
                <h2>Name:</h2>
                <input
                  type="text"
                  id="song"
                  placeholder="name goes here"
                  onChange={this.handleChange}
                  required
                />
                <button className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    addPlaylist(name) {
      const action = addPlaylistCreator(name);

      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchtoProps)(CreatePlaylist);
