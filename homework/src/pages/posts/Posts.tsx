import { useLocation, useParams } from 'react-router';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import type { Post } from '../../entities/post/types/Post';

export const Posts = () => {
  const { id } = useParams();
  const location = useLocation();

  const isUserPostsRoute = location.pathname.includes('/users/');
  const isSinglePostRoute = location.pathname === `/posts/${id}`;

  const postId = isSinglePostRoute ? Number(id) : undefined;
  const userId = isUserPostsRoute ? Number(id) : undefined;

  const posts: Post[] = usePosts(postId, userId);
  return <MainLayout posts={posts} />;
};
