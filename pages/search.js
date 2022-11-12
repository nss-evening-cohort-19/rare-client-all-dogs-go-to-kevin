import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostsCard from '../components/POST/PostsCard';
import { getPosts } from '../managers/posts';

export default function Search() {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);

  const getFilteredPosts = () => {
    getPosts().then((postArray) => {
      const value = router.query.keyword;
      setFilteredData(postArray);
      const results = postArray.filter((post) => post.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredData(results);
      console.warn(results);
    });
  };

  useEffect(() => {
    getFilteredPosts();
    setFilteredData([]);
    console.warn(filteredData);
  }, [router.query.keyword]);

  return (
    <div>
      {filteredData.length ? filteredData.map((post) => (
        <PostsCard key={post.id} postObj={post} />

      )) : <h2>Search Posts</h2>}
    </div>
  );
}
