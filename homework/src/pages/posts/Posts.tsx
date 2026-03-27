import { useLocation, useParams } from 'react-router';
import { MainLayout } from '../../shared/layouts/MainLayout';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import { useGetPostsQuery } from '../../entities/[entity]/api/postsApi';
import { PostLengthFilter } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { PostListWithLoading } from '../../shared/lib/hoc/HOC';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { useMemo, useState } from 'react';

export const Posts = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading } = useGetPostsQuery(undefined);

  const isUserPostsRoute = location.pathname.includes('/users/');
  const isSinglePostRoute = location.pathname === `/posts/${id}`;

  const postId = isSinglePostRoute ? Number(id) : undefined;
  const userId = isUserPostsRoute ? Number(id) : undefined;

  const posts = usePosts(data, postId, userId);

  const [currentLength, setCurrentLength] = useState<number | undefined>(
    undefined
  );

  const { postsFiltered, postsLength } = useMemo(
    () => filterByLength(currentLength, posts),
    [currentLength, posts]
  );

  return (
    <MainLayout>
      <PostLengthFilter
        handleClickFilter={() => setCurrentLength(currentLength)}
        postsLength={postsLength}
        setCurrentLength={setCurrentLength}
      />
      <PostListWithLoading isLoading={isLoading} posts={postsFiltered} />
    </MainLayout>
  );
};
