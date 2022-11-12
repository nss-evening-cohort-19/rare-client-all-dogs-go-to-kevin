import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchCategories({ category, setFilteredCategory }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = category.filter((item) => item.label.toLowerCase().includes(value.toLowerCase()));
    setFilteredCategory(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

SearchCategories.propTypes = {
  category: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
  setFilteredCategory: PropTypes.func.isRequired,
};
