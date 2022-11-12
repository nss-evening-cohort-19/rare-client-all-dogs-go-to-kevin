import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteCategory } from '../../managers/categories';

export default function CategoryCard({ categoryObj, onUpdate }) {
  const deleteThisCategory = () => {
    if (window.confirm(`Delete ${categoryObj.label}?`)) {
      deleteCategory(categoryObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title> {categoryObj.label}</Card.Title>
        <Link href={`/categories/edit/${categoryObj.id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deleteThisCategory} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
