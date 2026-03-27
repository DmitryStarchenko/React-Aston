import type { ComponentType } from 'react';
import { PostList } from '../../../widgets/PostList/PostList';
import { TodoList } from '../../../widgets/TodoList/TodoList';
import { AlbumList } from '../../../widgets/AlbumList/AlbumList';
import type { Post } from '../../../entities/post/types/Post';
import type { Todo } from '../../../entities/todo/types/Todos';
import type { Album } from '../../../entities/album/types/Album';
import type { User } from '../../../entities/user/types/User';
import { UserList } from '../../../widgets/UserList/UserList';

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

export const TodoListWithLoading = withLoading<{
  isLoading: boolean;
  todos: Todo[];
}>(TodoList);

export const AlbumListWithLoading = withLoading<{
  isLoading: boolean;
  albums: Album[];
}>(AlbumList);

export const UserListWithLoading = withLoading<{
  isLoading: boolean;
  users: User[];
}>(UserList);
