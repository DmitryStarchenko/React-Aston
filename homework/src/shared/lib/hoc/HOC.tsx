import type { ComponentType } from 'react';
import { PostList } from '../../../widgets/PostList/PostList';
import type { Post } from '../../../entities/post/types/Post';

type Props = {
  isLoading: boolean;
};

function withLoading<P extends Props>(
  WrappedComponent: ComponentType<Omit<P, 'isLoading'>>
) {
  return function WithLoading({ isLoading, ...rest }: P) {
    if (isLoading) return <div>Loading...</div>;
    return <WrappedComponent {...rest} />;
  };
}

export const PostListWithLoading = withLoading<{
  isLoading: boolean;
  posts: Post[];
}>(PostList);
