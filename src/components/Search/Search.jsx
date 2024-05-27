import React, { useState, useContext } from 'react';
import Fuse from 'fuse.js';
import { ProductContext } from '../../pages/Context/ProductContext';
import style from './Search.module.css';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const {searchResults, setSearchResults} = useContext(ProductContext);
  const { products } = useContext(ProductContext);


  const fuseOptions = {
    keys: ['title', 'description'], // Keys to search in
    threshold: 0.3, // Adjust to be more or less fuzzy
  };

  const fuse = new Fuse(products, fuseOptions);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const results = fuse.search(searchText).map(result => result.item);
    setSearchResults(results);
    console.log('Search results:', results);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
console.log('Search result :', searchResults)
  return (
    <div className={style.container}>
      <div className={style.midcontainer}>
        <div className={style.searchContainer}>
          <input
            type="text"
            className={style.searchInput}
            placeholder="Search..."
            onChange={handleInputChange}
            value={searchText}
            onKeyDown={handleKeyDown}
          />
          <button className={style.searchButton} onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
              <path d="M796 936 523 664q-25 18-56.5 27t-62.5 9q-104 0-177-73t-73-177q0-104 73-177t177-73q104 0 177 73t73 177q0 32-9 62.5T664 523l272 273-140 140ZM404 648q74 0 125-51t51-125q0-74-51-125T404 296q-74 0-125 51t-51 125q0 74 51 125t125 51Z" />
            </svg>
          </button>
        </div>
        <div className={style.appcontainer}>
          <p>Download APP</p>
          <a target="_blank" rel="noopener noreferrer">Nike APP</a>
        </div>
      </div>
    </div>
  );
}
