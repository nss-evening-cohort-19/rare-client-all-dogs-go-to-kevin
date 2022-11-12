import React, {
  useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { addPost, getPosts, updatePost } from '../../managers/posts';

const initialState = {
  user_id: null,
  category_id: null,
  title: '',
  publication_date: new Date().toLocaleDateString(),
  image_url: '',
  content: '',
  approved: true,
};

function PostForm({ obj }) {
  const [postFormInput, setPostFormInput] = useState(initialState);
  const [post, setPost] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getPosts().then(setPost);
    console.warn(post);
    if (obj.id) setPostFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updatePost(postFormInput)
        .then(() => router.push('/'));
    } else {
      const payload = { ...postFormInput };
      addPost(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form className="form-floating" onSubmit={handleSubmit}>
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
    id: PropTypes.number,
    user_id: PropTypes.number,
    category_id: PropTypes.number,
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
