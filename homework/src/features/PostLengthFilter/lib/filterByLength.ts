import type { Post } from '../../../entities/post/types/Post';

export const filterByLength = (
  currentLength: number | undefined,
  posts: Post[]
) => {
  const postsLength = posts
    .map((post) => post.title.length)
    .sort((a, b) => a - b);

  if (!currentLength) {
    return { postsFiltered: posts, postsLength };
  }

  const postsFiltered = posts.filter(
    (post) => post.title.length <= currentLength
  );

  return { postsFiltered, postsLength };
};
