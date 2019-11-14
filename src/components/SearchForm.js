import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const searchValue = this.state.searchText;
    this.props.onSearch(searchValue);
  }
  render() {
    return (
      <div className="header-search">
        <form
          name="city-form"
          id="city-form"
          className="city-search"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            name="city-search"
            className="city-search__input"
            id="city-search"
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
          />
          <button type="submit" className="btn btn-dark">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
