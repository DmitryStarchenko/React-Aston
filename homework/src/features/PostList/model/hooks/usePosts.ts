import { posts } from '../../../../entities/post/mocks/posts';

export const usePosts = (
  postId: number | undefined,
  userId: number | undefined
) => {
  if (postId) {
    return posts.filter((post) => post.id === postId);
  } else if (userId) {
    return posts.filter((post) => post.userId === userId);
  }
  return posts;
};
