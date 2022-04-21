import { Component } from 'react';
import { Container } from 'components/Container.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { animateScroll as scroll } from 'react-scroll';
import * as API from 'services/api';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    searchQuery: '',
    gallery: [],
    totalHits: 0,
    currentPage: 1,
    loading: false,
    error: null,
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    this.scrollToBottom();
  };

  async componentDidUpdate(_, prevState) {
    const { currentPage, searchQuery } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      try {
        this.setState({ loading: true });

        const galleryItems = await API.searchItem(searchQuery, currentPage);

        this.setState({ galleryItems, loading: false });

        if (galleryItems.totalHits === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.state.gallery.length === 0
          ? this.setState({
              gallery: galleryItems.hits,
              totalHits: galleryItems.totalHits,
              error: null,
            })
          : this.setState(prevState => ({
              gallery: [...prevState.gallery, ...galleryItems.hits],
              error: null,
            }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = (searchQuery, currentPage, gallery) => {
    this.setState({ searchQuery, currentPage, gallery });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {this.state.totalHits !== 0 && (
          <ImageGallery
            gallery={this.state.gallery}
            totalHits={this.state.totalHits}
            currentPage={this.state.currentPage}
            loadMore={this.loadMore}
            isLoading={this.state.loading}
          />
        )}
        <Loader loading={this.state.loading} />
      </Container>
    );
  }
}
