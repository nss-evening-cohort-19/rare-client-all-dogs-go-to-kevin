import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deletePost } from '../../managers/posts';

function PostsCard({ postsObj, onUpdate }) {
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${postsObj.title}?`)) {
      deletePost(postsObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={postsObj.image_url} alt={postsObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title> {postsObj.title}</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Content: {postsObj.content}</li>
          <li className="list-group-item">Date Created: {postsObj.publication_date}</li>
        </ul>
        <Link href={`/comments/${postsObj.id}`} passHref>
          <Button size="sm" variant="dark" className="m-2">
            VIEW
          </Button>
        </Link>
        {/* <Link href={`/campaigns/edit/${postsObj.firebaseKey}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link> */}
        <Button size="sm" variant="danger" onClick={deleteThisPost} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

PostsCard.propTypes = {
  postsObj: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    user_id: PropTypes.string,
    publication_date: PropTypes.number,
    category_id: PropTypes.number,
    approved: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostsCard;
