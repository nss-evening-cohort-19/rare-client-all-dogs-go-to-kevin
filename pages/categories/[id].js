import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { getCategories } from '../../managers/categories';

export default function ViewCategories() {
  const [categoryDetails, setCategoryDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getCategories(id).then(setCategoryDetails);
  }, [id]);

  return (
    <>
      <Card style={{ margin: '10px' }}>
        <Container>
          <Row xs={2}>
            <Col xs> Label: {categoryDetails.label}</Col>
          </Row>
        </Container>

      </Card>
    </>
  );
}
