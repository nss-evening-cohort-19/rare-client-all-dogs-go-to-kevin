import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteTag } from '../../managers/tags';

function TagsCard({ tagsObj, onUpdate }) {
  const deletThisTag = () => {
    if (window.confirm('Delete tag?')) {
      deleteTag(tagsObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title> Tag:</Card.Title>
        <ul className="list-group">
          <li className="list-group-item">Label: {tagsObj.label}</li>
        </ul>
        <Link href={`/tags/edit/${tagsObj.id}`} passHref>
          <Button size="sm" variant="dark">
            EDIT
          </Button>
        </Link>
        <Button size="sm" variant="danger" onClick={deletThisTag} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TagsCard.propTypes = {
  tagsObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TagsCard;
