import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSearchReasultActionCreator } from '../actions/action-creators';

class SongsSearchEngine extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      querry: ''
    };
  }

  handleChange({ target }) {
    this.setState({
      querry: target.value
    });
  }

  search(e) {
    e.preventDefault();
    const result = this.props.songs.filter((song) => {
      return song.title.toLowerCase().includes(this.state.querry.toLowerCase());
    });

    this.props.addSearchResult(this.state.querry, result);
  }

  render() {
    return (
      <section className="home-view container">
        <div className="row justify-center">
          <div className="col-12">
            <form onSubmit={this.search}>
              <div className="form-group">
                <input
                  type="text"
                  id="song"
                  placeholder="song name goes here"
                  onChange={this.handleChange}
                  required
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchtoProps(dispatch) {
  return {
    addSearchResult(query, result) {
      const action = addSearchReasultActionCreator(query, result);

      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(SongsSearchEngine);
