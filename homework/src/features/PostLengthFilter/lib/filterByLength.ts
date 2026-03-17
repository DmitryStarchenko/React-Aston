import { posts } from '../../../entities/post/mocks/posts';

export const filterByLength = (currentLength: number | undefined) => {
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
