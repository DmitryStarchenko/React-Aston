import type { Post } from '../../../../entities/post/types/Post';

export const usePosts = (
  data: Post[] | undefined,
  postId: number | undefined,
  userId: number | undefined
): Post[] => {
  if (!data) return [];

  if (postId) {
    return data.filter((post) => post.id === postId);
  } else if (userId) {
    return data.filter((post) => post.userId === userId);
  }
  return data;
};
