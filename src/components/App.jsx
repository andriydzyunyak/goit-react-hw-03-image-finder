import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
//import * as API from 'services/api';
//import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    totalHits: null,
    currentPage: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api';
    const KEY = '25368021-46c08c6e665d77f3b0c6d9195';
    const { currentPage, searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(gallery =>
          this.setState({ gallery: gallery.hits, totalHits: gallery.totalHits })
        )
        .finally(this.setState({ loading: false }));
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          gallery={this.state.gallery}
          totalHits={this.state.totalHits}
          currentPage={this.state.currentPage}
        />
        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      </div>
    );
  }
}
