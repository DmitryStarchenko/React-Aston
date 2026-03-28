import { useLocation, useParams } from 'react-router';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
} from '../../entities/[entity]/api/postsApi';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { PostListWithLoading } from '../../shared/lib/hoc/HOC';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { useMemo, useState } from 'react';
import styles from './Posts.module.css';

export const Posts = () => {
  const { id } = useParams();
  const location = useLocation();

  const isUserPostsRoute = location.pathname.includes('/users/');
  const isSinglePostRoute = location.pathname === `/posts/${id}`;

  const userId = isUserPostsRoute ? Number(id) : undefined;
  const postId = isSinglePostRoute ? Number(id) : undefined;

  const { data: allPosts, isLoading: isLoadingAll } = useGetPostsQuery(
    undefined,
    { skip: isUserPostsRoute }
  );
  const { data: userPosts, isLoading: isLoadingUser } =
    useGetPostsByUserIdQuery(userId ?? 0, { skip: !isUserPostsRoute });

  const data = isUserPostsRoute ? userPosts : allPosts;
  const isLoading = isUserPostsRoute ? isLoadingUser : isLoadingAll;

  const posts = usePosts(data, postId, undefined);

  const [currentLength, setCurrentLength] = useState<number | undefined>(
    undefined
  );

  const { postsFiltered, postsLength } = useMemo(
    () => filterByLength(currentLength, posts),
    [currentLength, posts]
  );

  return (
    <MainLayout>
      <h1>Posts</h1>
      <div className={styles.postContent}>
        <PostLengthFilter
          handleClickFilter={() => setCurrentLength(currentLength)}
          postsLength={postsLength}
          setCurrentLength={setCurrentLength}
        />
        <PostListWithLoading isLoading={isLoading} posts={postsFiltered} />
      </div>
    </MainLayout>
  );
};
