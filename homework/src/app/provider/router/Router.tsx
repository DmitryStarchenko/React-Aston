import { Route, Routes } from 'react-router-dom';
import { Posts } from '../../../pages/posts/Posts';
import { NotFound } from '../../../pages/notFound/NotFound';
import { Users } from '../../../pages/users/Users';
import { Albums } from '../../../pages/albums/Albums';
import { Todos } from '../../../pages/todos/Todos';
import { Photos } from '../../../pages/photos/Photos';
import { MainLayout } from '../../../shared/layouts/MainLayout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Posts />} />
        <Route path="posts" element={<Posts />}>
          <Route path=":postId" element={<Posts />}>
            <Route path="post" element={<Posts />} />
          </Route>
        </Route>
        <Route path="users">
          <Route index element={<Users />} />
          <Route path=":userId" element={<Users />} />
          <Route path=":userId/albums" element={<Albums />} />
          <Route path=":userId/todos" element={<Todos />} />
          <Route path=":userId/posts" element={<Posts />} />
        </Route>
        <Route path="albums">
          <Route index element={<Albums />} />
          <Route path=":albumId" element={<Albums />} />
          <Route path=":albumId/photos" element={<Photos />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
