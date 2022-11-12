import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { addCategory, getCategories, updateCategory } from '../../managers/categories';

const initialState = {
  id: '',
  label: '',
};

function CategoryForm({ obj }) {
  const [categoryFormInput, setCategoryFormInput] = useState(initialState);
  const [category, setCategory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then(setCategory);
    console.warn(category);
    if (obj.id) setCategoryFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateCategory(categoryFormInput)
        .then(() => router.push('/'));
    } else {
      const payload = { ...categoryFormInput };
      addCategory(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form className="form-floating" onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.id ? 'Update' : 'Create'} Category</h2>
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
        <Form.Control type="text" placeholder="Label" name="title" value={categoryFormInput.label} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Content" className="mb-3">
        <Form.Control type="text" placeholder="Body" name="content" value={categoryFormInput.content} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="image_url" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="image_url" value={categoryFormInput.image_url} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Post</Button>
    </Form>
  );
}

CategoryForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

CategoryForm.defaultProps = {
  obj: initialState,
};

export default CategoryForm;
