export const getPostTagsByPost = (id) => fetch(`http://localhost:8088/tags?post_id/${id}`)
  .then((res) => res.json());

export const removePostTag = (tagId) => fetch(`http://localhost:8088/posts/${tagId}`, {
  method: 'DELETE',
});
export const addPostTag = (tag) => fetch('http://localhost:8088/postsTags', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(tag),
});
