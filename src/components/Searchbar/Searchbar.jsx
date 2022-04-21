import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    gallery: [],
    searchQuery: '',
    currentPage: 1,
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      alert('Веедите имя запроса');

      return;
    }
    this.props.onSubmit(
      this.state.searchQuery,
      this.state.currentPage,
      this.state.gallery
    );
    this.setState({ searchQuery: '', currentPage: 1, gallery: [] });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
