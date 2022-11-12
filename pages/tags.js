import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import TagsCard from '../components/TAG/TagsCard';
import { getTags } from '../managers/tags';

export default function Posts() {
  const [tag, setTags] = useState([]);
  const [filteredTag, setFilteredTag] = useState([]);
  console.warn(tag);
  const getAllTheTags = () => {
    getTags().then((tagArray) => {
      setTags(tagArray);
      setFilteredTag(tagArray);
    });
  };

  useEffect(() => {
    getAllTheTags();
  }, []);

  return (
    <div className="text-center my-4">
      <Container>
        <Row>
          <Col>
            <Link href="/tags/new" passHref>
              <Button size="sm" variant="dark">
                Create a Tag
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="d-flex flex-wrap">
        {filteredTag.map((tags) => (
          <TagsCard key={tags.id} tagsObj={tags} onUpdate={getAllTheTags} />
        ))}
      </div>
    </div>
  );
}
