import { useMemo, useState } from 'react';
import styles from './CommentList.module.css';
import { Button } from '../../../shared/ui/Button/Button';
import { useGetCommentsQuery } from '../../../entities/[entity]/api/commentsApi';
import { CommentCard } from '../../../entities/comment/ui/CommentCard';
import { Loader } from '../../../features/Loader/Loader';

type Props = {
  postId: number;
};

export const CommentList = ({ postId }: Props) => {
  const { data, isLoading } = useGetCommentsQuery(undefined);
  const [localComments, setLocalComments] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const apiComments = useMemo(
    () => data?.filter((comment) => comment.postId === postId) ?? [],
    [data, postId]
  );

  const handleAdd = () => {
    if (!value.trim()) return;
    setLocalComments([...localComments, value]);
    setValue('');
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      {apiComments.length === 0 && localComments.length === 0 ? (
        <div className={styles.comment}>No comments</div>
      ) : (
        <>
          {apiComments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <CommentCard comment={comment} />
            </div>
          ))}
          {localComments.map((comment, i) => (
            <div key={`local-${i}`} className={styles.comment}>
              {comment}
            </div>
          ))}
        </>
      )}
      <div className={styles.addComment}>
        <textarea
          className={styles.input}
          name="comment"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          CSSClasses={styles.button}
          onClick={handleAdd}
          content={'Add comment'}
        />
      </div>
    </div>
  );
};
