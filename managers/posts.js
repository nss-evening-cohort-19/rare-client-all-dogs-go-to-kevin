export const getPosts = () => fetch('http://localhost:8088/posts')
  .then((res) => res.json());

export const getPostsBySearchTerm = (searchTerm) => fetch(`http://localhost:8088/posts?search=${searchTerm}`)
  .then((res) => res.json());

export const getPostById = (id) => fetch(`http://localhost:8088/posts/${id}`)
  .then((res) => res.json());

export const addPost = (animal) => fetch('http://localhost:8088/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(animal),
});

export const updatePost = (post) => fetch(`http://localhost:8088/posts/${post.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
});

export const deletePost = (postId) => fetch(`http://localhost:8088/posts/${postId}`, {
  method: 'DELETE',
});
