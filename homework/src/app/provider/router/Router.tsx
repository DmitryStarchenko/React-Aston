import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from '../../../pages/posts/Posts';
import { NotFound } from '../../../pages/notFound/NotFound';
import { Users } from '../../../pages/users/Users';
import { Albums } from '../../../pages/albums/Albums';
import { Todos } from '../../../pages/todos/Todos';
import { Photos } from '../../../pages/photos/Photos';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="posts" />} />
      <Route path="posts">
        <Route index element={<Posts />} />
        <Route path=":id" element={<Posts />}>
          <Route path="post" element={<Posts />} />
        </Route>
      </Route>
      <Route path="users">
        <Route index element={<Users />} />
        <Route path=":id" element={<Users />} />
        <Route path=":id/albums" element={<Albums />} />
        <Route path=":id/todos" element={<Todos />} />
        <Route path=":id/posts" element={<Posts />} />
      </Route>
      <Route path="albums">
        <Route index element={<Albums />} />
        <Route path=":id" element={<Albums />} />
        <Route path=":id/photos" element={<Photos />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
