import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

export default function Searchbar({ submit }) {
  const [searchImageName, setSearchImageName] = useState('');

  const handleImageChange = ({ currentTarget: { value } }) => {
    setSearchImageName(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchImageName.trim() === '') {
      return toast.error('Введіть запит');
    }

    submit(searchImageName);
    setSearchImageName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <ImSearch style={{ fontSize: 18 }} />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImageName}
          onChange={handleImageChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  submit: PropTypes.func.isRequired,
};
//    "gh-pages": "^3.2.3",
// "modern-normalize": "^1.1.0",
// "prop-types": "^15.7.2",
// "react": "^17.0.2",
// "react-dom": "^17.0.2",
// "react-loader-spinner": "^4.0.0",
// "react-scripts": "4.0.3",
// "react-toastify": "^8.0.3",
// "web-vitals": "^1.1.2"
