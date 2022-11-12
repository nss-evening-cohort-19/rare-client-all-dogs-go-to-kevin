import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CategoryForm from '../../../components/CATEGORY/CategoryForm';
import { getSearchTermById } from '../../../managers/categories';

export default function EditCategory() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getSearchTermById(id).then(setEditItem);
  }, [id]);
  return (<CategoryForm obj={editItem} />);
}
