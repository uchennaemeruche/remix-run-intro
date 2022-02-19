// export type Post = {
//     slug: string;
//     title: string
// }

import { marked } from "marked";

export async function getPosts(repository) {
  const posts = await repository();

  return posts;
}

export async function getPost(repository, slug) {
  const post = await repository(slug);
  console.log("Post Now:", post);
  const html = marked(post.body);
  return { slug, html, title: post.title };
}
