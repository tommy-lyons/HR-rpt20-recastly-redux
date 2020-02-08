import React from 'react';
// import SearchContainer from '../containers/SearchContainer.js';
// import { handleSearchInputChange } from '../containers/SearchContainer.js';
// import store from '../store/store.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    console.log('test');
    // this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
    this.props.handleSearchInputChange(e.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          // this is what it was
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

export default Search;
