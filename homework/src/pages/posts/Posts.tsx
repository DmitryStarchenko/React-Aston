import { useParams } from 'react-router';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import type { Post } from '../../entities/post/types/Post';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { PostList } from '../../widgets/PostList/PostList';
import { useGetPostsQuery } from '../../entities/[entity]/api/postsApi';
import {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
} from '../../entities/[entity]/api/postsApi';

export const PostListWithLoading = withLoading<{
  isLoading: boolean;
  posts: Post[];
}>(PostList);

export const Posts = () => {
  const { userId, postId } = useParams();
  const { data, isLoading } = useGetPostsQuery(undefined);

  const { data: allPosts, isLoading: isLoadingAll } = useGetPostsQuery(
    undefined,
    { skip: isUserPostsRoute }
  );
  const { data: userPosts, isLoading: isLoadingUser } =
    useGetPostsByUserIdQuery(userId ?? 0, { skip: !isUserPostsRoute });

  const data = isUserPostsRoute ? userPosts : allPosts;
  const isLoading = isUserPostsRoute ? isLoadingUser : isLoadingAll;

  const posts = usePosts(data, postId, undefined);

  const posts: Post[] = usePosts(data, Number(postId), Number(userId));
  return <PostListWithLoading isLoading={isLoading} posts={posts} />;
};
