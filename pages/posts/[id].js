import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { getPostById } from '../../managers/posts';

export default function ViewPosts() {
  const [postDetails, setPostDetails] = useState({});
  const router = useRouter();
  const { postId } = router.query;

  useEffect(() => {
    getPostById(postId).then(setPostDetails);
  }, [postId]);

  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs> Title: {postDetails.title}</Col>
            <Col xs><Card.Img variant="top" src={postDetails.image_url} alt={postDetails.title} style={{ height: '200px' }} /></Col>
          </Row>
          <hr />
          <Row xs={1}>
            <Col xs>Content: {postDetails.content}</Col>
          </Row>
          <hr />
        </Container>

      </Card>
    </>
  );
}
