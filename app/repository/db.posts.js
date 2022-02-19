const posts = [
  {
    slug: "my-first-js-post",
    title: "My first JS post",
  },
  {
    slug: "js-into-video",
    title: "My Introduction video",
  },
];
export async function getPostsFromDB() {
  return posts;
}

export async function getSinglePostFromDB(slug) {
  return posts.filter((post) => {
    return post.slug == slug;
  });
}
