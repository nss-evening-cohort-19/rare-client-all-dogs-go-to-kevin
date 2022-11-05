// import { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { addPost, getPostById, updatePost } from '../../managers/posts'

// export const PostForm = () => {
//   const { postId } = useParams()
//   const [post, setPost] = useState({})
//   const navigate = useNavigate()
//   const handleControlledInputChange = (event) => {
//     const newPost = { ...post }
//     newPost[event.target.name] = event.target.value
//     setPost(newPost)
//   }
//   useEffect(() => {
//     if (postId) {
//       getPostById(postId).then((res) => {
//         setPost(res)
//       })
//     }
//   }, [postId])
//     if (postId) {
//       // PUT
//       updatePost({
//         id: post.id,
//         user_id: post.user_id,
//         category_id: post.category_id,
//         title: post.title,
//         publication_date: post.publication_date,
//         image_url: post.image_url,
//         content: post.content,
//         approved: post.approved,
//       }).then(() => navigate('/posts'))
//     } else {
//       // POST
//       addPost({
//         id: post.id,
//         user_id: post.user_id,
//         category_id: post.category_id,
//         title: post.title,
//         publication_date: post.publication_date,
//         image_url: post.image_url,
//         content: post.content,
//         approved: post.approved,
//       })
//         .then(() => navigate('/posts'))
//     }
//   }
//   return (
//     <form className="postForm">
//       <h2 className="postForm__title">{postId ? 'Update Post' : 'Add Post'}</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="name">Title: </label>
//           <input type="text" name="title" required autoFocus className="form-control" placeholder="Title" defaultValue={post.title} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="content">Content </label>
//           <input type="text" name="content" required className="form-control" placeholder="Content" defaultValue={post.content} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="image_url">Image Url: </label>
//           <textarea type="text" name="image_url" className="form-control" value={post.image_url} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <button
//         type="submit"
//         onClick={(evt) => {
//           evt.preventDefault()
//           addPost()
//         }}
//         className="btn btn-primary"
//       >
//         {postId ? 'Save Updates' : 'Add Post'}
//       </button>
//     </form>
//   )
// }
