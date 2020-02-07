import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';
import { handleSearchInputChange } from '../containers/SearchContainer.js';
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          // this is what it was
          onChange={handleSearchInputChange}
          // we're thinking to change to a call to handleSearchInputChange, and somehow passin the search query entered in the field
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

export default Search;
