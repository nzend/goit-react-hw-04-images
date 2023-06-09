import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import css from './App.module.css';
import fetchImages from '../../fetchCards';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';
import fetchCards from '../../fetchCards';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('idle');
  // const [total, setTotalHits] = useState(0);

  // console.log(searchQuery);
  // console.log(items);
  // const response = fetchImages(searchQuery, page);
  // console.log(response);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetchImages(searchQuery, page);
        
        setItems(prevImages => [...prevImages, ...response]);
      } catch (error) {
        console.log(error);
      }
    };
    getImages()
    console.log(getImages());
  }, [searchQuery, page]);
  

  const handleSubmit = newQuery => {
    setSearchQuery(newQuery);

    setItems([]);
    setPage(1);
    // setStatus('pending');
  };

  const onNextPage = () => {
    setStatus('pending');
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />

      {items.length > 0 && <ImageGallery items={items} />}

      <Button onNextPage={onNextPage} />

      {/* {showModal && (
        <Modal onToggleModal={toggleModal} largeImageURL={largeImageURL} />
      )} */}
    </div>
  );
};
export default App;
