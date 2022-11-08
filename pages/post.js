import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import PostsCard from '../components/POST/PostsCard';
import SearchPosts from '../components/POST/SearchPosts';
import { getPosts } from '../managers/posts';

export default function Posts() {
  const [post, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const getAllThePosts = () => {
    getPosts().then((postArray) => {
      setPosts(postArray);
      setSearchTerm(postArray);
    });
  };

  useEffect(() => {
    getAllThePosts();
  }, []);

  return (
    <div className="text-center my-4">
      <Container>
        <Row>
          <Col>
            <Link href="/posts/new" passHref>
              <Button size="sm" variant="dark">
                Create a Post
              </Button>
            </Link>
          </Col>
          <Col>
            {' '}
            <SearchPosts post={post} setSearchTerm={setSearchTerm} />
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {searchTerm.map((posts) => (
          <PostsCard key={posts.id} postsObj={posts} onUpdate={getAllThePosts} />
        ))}
      </div>
    </div>
  );
}

//   return (
//     <>
//       <PostSearch onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} />
//       <div style={{ marginTop: '2rem' }}>
//         <button type="submit" onClick={() => ('/posts/create')}>
//           Make A Post!
//         </button>
//         <div className="posts">
//           {
//                     posts.map((post) => <Post key={post.id} post={post} />)
//                 }
//         </div>
//       </div>
//     </>
//   );
// };
