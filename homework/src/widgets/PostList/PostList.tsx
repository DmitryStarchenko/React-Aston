import { PostCard } from "../../entities/post/ui/PostCard";
import type { Post } from "../../Types/Post";
import styles from "./PostList.module.css";

type Props = {
  posts: Post[];
};

export const PostList = (props: Props) => {
  const { posts } = props;
  return (
    <div className={styles.postList}>
      {posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
