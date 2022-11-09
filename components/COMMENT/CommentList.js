// import React, { useEffect } from 'react';
// import { Col } from 'react-bootstrap';
// import { getCommentByPostId } from '../../managers/comments';
// import CommentsCard from './CommentsCard';

// function CommentsList({ postId }) {
//   const [comments, setcomments] = useState([]);
//   const loadComments = () => {
//     getCommentByPostId(postId).then(() => (commentArray));
//   };
//   useEffect(() => {
//     loadComments();
//   }, []);
//   return (
//     <>
//       <Col xs>
//         {comments?.map((taco) => (<CommentsCard key={taco.id} commentsObj={taco} />))}
//       </Col>
//     </>
//   );
// }
