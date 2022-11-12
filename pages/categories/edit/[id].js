import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CategoryForm from '../../../components/CATEGORY/CategoryForm';
import { getCategoriedById } from '../../../managers/categories';

export default function EditCategory() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getCategoriedById(id).then(setEditItem);
  }, [id]);
  return (<CategoryForm obj={editItem} />);
}
