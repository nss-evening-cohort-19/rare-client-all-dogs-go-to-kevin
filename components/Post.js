import { Link } from "react-router-dom"

export const Post = ({ post }) => (
    <section className="post">
        <h2 className="post-title">
            <Link to {`/posts/${post.id}`}>
                { post.title }
            </Link>
        </h2>
        <div className="post-content">
            { post.content }
        </div>
    </section>
)
