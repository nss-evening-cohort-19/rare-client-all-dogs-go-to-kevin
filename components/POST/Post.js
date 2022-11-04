import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const Post = ({ post }) => (
  <section className="post">
    <h2 className="post-title">\</h2>
    <div className="post-content">{post.content}</div>
  </section>
);

Post.propTypes = {
  post: PropTypes.string.isRequired,
};
