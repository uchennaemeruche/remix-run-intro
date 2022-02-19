
import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import { getPostsFromDB } from "~/repository/db.posts";
import adminStyles from "~/styles/admin.css";

export const links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export const loader = async () => {
    return getPosts(getPostsFromDB)
}

export default function Admin() {
    const posts = useLoaderData()
    return (
        <div className="admin">
        <nav>
            <h1>Admin</h1>
            <ul>
            {posts.map(post => (
                <li key={post.slug}>
                <Link to={`/posts/${post.slug}`}>
                    {post.title}
                </Link>
                </li>
            ))}
            </ul>
        </nav>
        <main>...</main>
        </div>
  );
}