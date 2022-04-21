import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import Notiflix from 'notiflix';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

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
    const { gallery, searchQuery, currentPage } = this.state;
    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Please enter a request name!');

      return;
    }
    this.props.onSubmit(searchQuery, currentPage, gallery);
    this.setState({ searchQuery: '', currentPage: 1, gallery: [] });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BsSearch size="25" />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
