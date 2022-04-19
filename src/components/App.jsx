import { Component } from 'react';
import './styles.css';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    totalHits: null,
    currentPage: 1,
    loading: false,
    error: null,
  };

  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  componentDidUpdate(_, prevState) {
    const BASE_URL = 'https://pixabay.com/api';
    const KEY = '25368021-46c08c6e665d77f3b0c6d9195';
    const { currentPage, searchQuery } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ loading: true });

      fetch(
        `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(gallery => {
          if (gallery.hits.length === 0) {
            return Promise.reject(new Error('поиск не дал результата'));
          }
          this.state.gallery.length === 0
            ? this.setState({
                gallery: gallery.hits,
                totalHits: gallery.totalHits,
                error: null,
              })
            : this.setState(prevState => ({
                gallery: [...prevState.gallery, ...gallery.hits],
                error: null,
              }));
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  handleFormSubmit = (searchQuery, currentPage) => {
    this.setState({ searchQuery, currentPage });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.error && (
          <p className="Error">Ошибка, {this.state.error.message}</p>
        )}
        {this.state.gallery.length !== 0 && (
          <ImageGallery
            gallery={this.state.gallery}
            totalHits={this.state.totalHits}
            currentPage={this.state.currentPage}
            loadMore={this.loadMore}
            isLoading={this.state.loading}
          />
        )}
        <Loader loading={this.state.loading} />

        {/* {!this.state.gallery && <ButtonLoadMore loadMore={this.loadMore} />} */}

        {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      </div>
    );
  }
}
