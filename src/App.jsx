import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Result';
import './App.css'

const API_KEY = '38734310-a3b09e3cfac999395fd4e4b70';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=8`
        );

        console.log(response);

        if (page === 1) {
          setImages(response.data.hits);
        } else {
          setImages(prevImages => [...prevImages, ...response.data.hits]);
        }
      } catch (error) {
        console.error("Error in fetching Images:", error);
      }

      setIsLoading(false);
    };

    loadImages();
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !isLoading
    ) {
      handleLoadMore();
    }
  };

  return (
    <div className="App">
      <Search setPage={setPage} setImages={setImages} setSearchQuery={setSearchQuery} />
      <Result images={images} />
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;