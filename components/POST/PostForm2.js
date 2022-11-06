import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../utils/context/authContext';
import { addPost, updatePost } from '../../managers/posts';

const initialState = {
  id: '',
  user_id: '',
  category_id: '',
  title: '',
  publication_date: '',
  image_url: '',
  content: '',
  approved: '',
};

function PostForm({ obj }) {
  const [postFormInput, setPostFormInput] = useState(initialState);
  // const [posts, setPosts] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) setPostFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { title, value } = e.target;
    setPostFormInput((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updatePost(postFormInput)
        .then(() => router.push('/'));
    } else {
      const payload = { ...postFormInput, uid: user.uid };
      addPost(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.id ? 'Update' : 'Create'} Post</h2>
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
        <Form.Control type="text" placeholder="Title" name="title" value={postFormInput.title} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Content" className="mb-3">
        <Form.Control type="text" placeholder="Body" name="content" value={postFormInput.content} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="image_url" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image_url" value={postFormInput.image_url} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

PostForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    category_id: PropTypes.string,
    title: PropTypes.string,
    publication_date: PropTypes.string,
    content: PropTypes.string,
    image_url: PropTypes.string,
  }),
};

// DEFAULT PROPS
PostForm.defaultProps = {
  obj: initialState,
};

export default PostForm;
