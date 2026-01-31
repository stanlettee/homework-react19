import './App.css';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Button } from './components/Button'
import { Modal } from './components/Modal'
import { useState, useEffect, useCallback } from 'react';

function App () {
  const [search, setSearch] = useState('')
  const [load, setLoad] = useState(8)
  const [modal, setModal] = useState(false)
  const [object, setObject] = useState({})


  const handleInput = useCallback((input) => {
    setSearch(input);
  }, []);

  const loadButton = useCallback(() => {
    if (search !== '') {
      setLoad(prev => prev + 8);
    }
  }, [search]);

  const showModal = useCallback((galleryItem) => {
    setModal(true);
    setObject(galleryItem);
  }, []);

  const closeModal = useCallback(() => {
    setModal(false);
    setObject({});
  }, []);

  const loadSet = useCallback(() => {
    setLoad(8);
  }, []);


  return (
      <div className="container">
        <Searchbar className="Searchbar" loadSet={loadSet} search={search} handleInput={handleInput}/>
        <ImageGallery  className="ImageGallery" loadSet={loadSet}  showModal={showModal} search={search} load={load}/>
        <Button loadButton={loadButton}/>
        {/* <Loader /> */}
        <Modal object={object} modal={modal} closeModal={closeModal}/>
      </div>
    )
  
}

export default App;
