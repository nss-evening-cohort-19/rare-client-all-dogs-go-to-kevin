export const PostSearch = ({ searchTerms, onSearchTermChange }) => {
    return (
      <>
        <div>Look for a post!</div>
        <input type="text" className="posts-search"
          value={searchTerms}
          onChange={
            (changeEvent) => {
              onSearchTermChange(changeEvent.target.value)
            }
          }
          placeholder="Enter search string here..." />
      </>
    )
  }
