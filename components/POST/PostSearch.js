import PropTypes from 'prop-types';
/* eslint-disable import/prefer-default-export */
export const PostSearch = ({ searchTerms, onSearchTermChange }) => (
  <>
    <div>Look for a post!</div>
    <input
      type="text"
      className="posts-search"
      value={searchTerms}
      onChange={
            (changeEvent) => {
              onSearchTermChange(changeEvent.target.value);
            }
          }
      placeholder="Enter search string here..."
    />
  </>
);

PostSearch.propTypes = {
  searchTerms: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.string.isRequired,
};
