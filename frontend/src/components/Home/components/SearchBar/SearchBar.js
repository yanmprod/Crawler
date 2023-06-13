import React, { useState } from 'react';
import { Box, Input } from '@material-ui/core';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const urlRegex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

const SearchBar = ({ onSearch }) => {
  const [url, setUrl] = useState('');

  const validateUrl = url => {
    // eslint-disable-next-line no-console
    url.match(urlRegex) ? onSearch(url) : console.log('not a url');
  };

  return (
    <Box className='search-bar'>
      <Input
        placeholder='Enter page URL...'
        className='search-input'
        disableUnderline={true}
        type='email'
        onChange={e => setUrl(e.target.value)}
      />
      <div className='search-cta' onClick={() => validateUrl(url)}>
        Add Page
      </div>
    </Box>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func
};

export { SearchBar };
