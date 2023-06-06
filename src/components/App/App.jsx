import React, { Component } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import css from './App.module.css';
import fetchImages from '../../fetchCards';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';

let page = 1;

class App extends Component {
  state = {
    searchQuery: '',
    items: [],

    status: 'idle',
    totalHits: 0,
  };

  handleSubmit = async searchQuery => {
    page = 1;
    if (searchQuery.trim() === '') {
      alert('You cannot search by empty field, try again.');
      return;
    } else {
      try {
        this.setState({ status: 'pending' });
        const { totalHits, hits } = await fetchImages(searchQuery, page);
        if (hits.length < 1) {
          this.setState({ status: 'idle' });
          alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          this.setState({ status: 'rejected' });
        } else {
          this.setState({
            items: hits,
            searchQuery,
            totalHits: totalHits,
            status: 'resolved',
          });
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  };
  onNextPage = async () => {
    this.setState({ status: 'pending' });

    try {
      const { hits } = await fetchImages(this.state.searchQuery, (page += 1));
      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };
  render() {
    const { totalHits, status, items } = this.state;
    if (status === 'idle') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
      );
    }
    if (status === 'pending') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={page} items={this.state.items} />
          <Loader />
          {totalHits > 12 && <Button onClick={this.onNextPage} />}
        </div>
      );
    }
    if (status === 'rejected') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />

          <div className={css.error__notification}>Something wrong, try later</div>
        </div>
      );
    }
    if (status === 'resolved') {
      return (
        <div className={css.app}>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery page={page} items={this.state.items} />
          {totalHits > 12 && totalHits > items.length && (
            <Button onClick={this.onNextPage} />
          )}
        </div>
      );
    }
  }
}
export default App;
