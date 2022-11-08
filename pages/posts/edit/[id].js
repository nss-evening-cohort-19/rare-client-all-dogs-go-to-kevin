import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPostById } from '../../../managers/posts';
import PostForm from '../../../components/POST/PostForm';

export default function EditPost() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { postId } = router.query;
  useEffect(() => {
    getPostById(postId).then(setEditItem);
  }, [postId]);
  return (<PostForm obj={editItem} />);
}
