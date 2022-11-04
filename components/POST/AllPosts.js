import { useState, useEffect } from 'react';
import { getPosts, getPostsBySearchTerm } from '../../managers/posts';
import { Post } from './Post';
// eslint-disable-next-line import/extensions
import { PostSearch } from './PostSearch.js';

export const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.length > 1) {
      getPostsBySearchTerm(searchTerm).then((postsData) => setPosts(postsData));
    } else {
      getPosts().then((postsData) => setPosts(postsData));
    }
  }, [searchTerm]);

  const onSearchTermChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <>
      <PostSearch onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} />
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/posts/create')}>
          Make A Post!
        </button>
        <div className="posts">
          {
                    posts.map((post) => <Post key={post.id} post={post} />)
                }
        </div>
      </div>
    </>
  );
};
