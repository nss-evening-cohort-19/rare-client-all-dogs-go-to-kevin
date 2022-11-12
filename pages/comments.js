import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import CommentsCard from '../components/COMMENT/CommentsCard';
import { getCommentByPostId } from '../managers/comments';

export default function Comments() {
  const [comment, setComment] = useState([]);
  const [filteredComment, setFilteredComment] = useState([]);
  console.warn(comment);
  const getAllTheComments = () => {
    getCommentByPostId().then((commentArray) => {
      setComment(commentArray);
      setFilteredComment(commentArray);
    });
  };

  useEffect(() => {
    getAllTheComments();
  }, []);

  return (
    <div className="text-center my-4">
      <Container>
        <Row>
          <Col>
            <Link href="/comments/new" passHref>
              <Button size="sm" variant="dark">
                Create a Comment
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {filteredComment.map((comments) => (
          <CommentsCard key={comments.id} commentsObj={comments} onUpdate={getAllTheComments} />
        ))}
      </div>
    </div>
  );
}
