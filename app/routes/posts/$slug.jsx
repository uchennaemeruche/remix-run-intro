import { useLoaderData } from "remix";
import { getPost } from "~/post";
import { getSinglePostFromFS } from "~/repository/fs.posts";

export const loader = async ({ params }) => {
    return await getPost(getSinglePostFromFS, params.slug)
}
export default function PostSlug() {
    const post = useLoaderData()
    return (
        <div dangerouslySetInnerHTML={{ __html: post.html}} />
    )
}