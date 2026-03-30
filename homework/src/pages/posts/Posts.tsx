import { useParams } from 'react-router';
import type { Post } from '../../entities/post/types/Post';
import { withLoading } from '../../shared/lib/hoc/HOC';
import { PostList } from '../../widgets/PostList/PostList';
import {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useGetPostByIdQuery,
} from '../../entities/[entity]/api/postsApi';

const PostListWithLoading = withLoading<{
  isLoading: boolean;
  posts: Post[];
}>(PostList);

export const Posts = () => {
  const { userId, postId } = useParams();

  const { data: allPosts, isLoading: isLoadingAll } = useGetPostsQuery(
    undefined,
    { skip: !!userId || !!postId }
  );
  const { data: userPosts, isLoading: isLoadingUser } =
    useGetPostsByUserIdQuery(Number(userId), { skip: !userId });
  const { data: singlePost, isLoading: isLoadingSingle } = useGetPostByIdQuery(
    Number(postId),
    { skip: !postId }
  );

  const data = userId ? userPosts : allPosts;
  const isLoading = postId
    ? isLoadingSingle
    : userId
      ? isLoadingUser
      : isLoadingAll;

  const posts: Post[] = postId && singlePost ? [singlePost] : (data ?? []);

  return <PostListWithLoading isLoading={isLoading} posts={posts} />;
};
