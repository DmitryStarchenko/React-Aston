import { PostCard } from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/post/types/Post';
import styles from './PostList.module.css';
import { withLoading } from '../../shared/lib/hoc/HOC';

type Props = {
  posts: Post[];
};

const PostList = (props: Props) => {
  const { posts } = props;
  return (
    <div className={styles.postList}>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export const PostListWithLoading = withLoading<{
  isLoading: boolean;
  posts: Post[];
}>(PostList);
