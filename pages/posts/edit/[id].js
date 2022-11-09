import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById } from '../../../managers/posts';
import PostForm from '../../../components/POST/PostForm';

export default function EditPost() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getPostById(id).then(setEditItem);
  }, [id]);
  return (<PostForm obj={editItem} />);
}
