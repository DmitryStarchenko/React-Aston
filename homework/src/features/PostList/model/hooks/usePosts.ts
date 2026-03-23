import { posts } from '../../../../entities/post/mocks/posts';

export const usePosts = (
  postId: number | undefined,
  userId: number | undefined
) => {
  if (postId) {
    console.log(1);
    return posts.filter((post) => post.id === postId);
  } else if (userId) {
    console.log(2);
    return posts.filter((post) => post.userId === userId);
  }
  console.log(3);
  return posts;
};
