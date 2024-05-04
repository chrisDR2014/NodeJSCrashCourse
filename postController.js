const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is post one'
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is post two'
  }
]

const getPosts = () => posts;

export const getPostsLength = () => posts.length;

// export { getPosts };

export default getPosts;