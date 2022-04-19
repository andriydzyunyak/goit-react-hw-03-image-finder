import { Component } from 'react';
//import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
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
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
