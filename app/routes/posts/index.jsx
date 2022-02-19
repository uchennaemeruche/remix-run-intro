import { getPostsFromFS } from "~/repository/fs.posts";
import { useLoaderData, Link } from "remix";
import { getPosts } from "~/post";

 


export const loader = async () => {
    return await getPosts(getPostsFromFS)
}
export default function Posts() {
    const posts = useLoaderData()
    console.log("Posts:", posts)
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}><Link to={post.slug}>{ post.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}