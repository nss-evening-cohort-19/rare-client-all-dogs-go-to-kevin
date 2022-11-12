import { useState, useEffect } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import Link from 'next/link';
import { getCategories } from '../managers/categories';
import CategoryCard from '../components/CATEGORY/CategoryCard';

export default function Categories() {
  const [category, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  console.warn(category);

  const getAllTheCategories = () => {
    getCategories().then((categoryArray) => {
      setCategories(categoryArray);
      setFilteredCategory(categoryArray);
    });
  };

  useEffect(() => {
    getAllTheCategories();
  }, []);

  return (
    <div className="text-center my-4">
      <Container>
        <Row>
          <Col>
            <Link href="/categories/new" passHref>
              <Button size="sm" variant="dark">
                Create a Category
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {filteredCategory.map((categories) => (
          <CategoryCard key={categories.id} categoryObj={categories} onUpdate={getAllTheCategories} />
        ))}
      </div>
    </div>

  );
}
