import { Navigate, Route, Routes } from 'react-router-dom';
import { Posts } from '../../../pages/posts/Posts';
import { NotFound } from '../../../pages/notFound/NotFound';

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
