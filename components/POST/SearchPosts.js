import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchPosts({ post, setFilteredPost }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = post.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredPost(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

SearchPosts.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredPost: PropTypes.func.isRequired,
};
