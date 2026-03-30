import { useParams } from 'react-router';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import type { Post } from '../../entities/post/types/Post';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { PostList } from '../../widgets/PostList/PostList';
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

  const { data: allPosts, isLoading: isLoadingAll } = useGetPostsQuery(
    undefined,
    { skip: !!userId }
  );
  const { data: userPosts, isLoading: isLoadingUser } =
    useGetPostsByUserIdQuery(Number(userId), { skip: !!postId });

  const data = userId ? userPosts : allPosts;
  const isLoading = postId ? isLoadingUser : isLoadingAll;

  const posts: Post[] = usePosts(data, Number(postId), undefined);

  return <PostListWithLoading isLoading={isLoading} posts={posts} />;
};
