import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getTagsById } from '../../../managers/tags';
import TagForm from '../../../components/TAG/TagsForm';

export default function EditTag() {
  const [editTag, setEditTag] = useState({});
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getTagsById(id).then(setEditTag);
  }, [id]);
  return (<TagForm obj={editTag} />);
}
