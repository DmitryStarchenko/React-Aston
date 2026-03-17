import { useState } from 'react';
import styles from './CommentList.module.css';
import { Button } from '../../../shared/ui/Button/Button';

export const CommentList = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (!value.trim()) return;
    setComments([...comments, value]);
    setValue('');
  };

  return (
    <div>
      {comments.length === 0 ? (
        <div className={styles.comment}>No comments</div>
      ) : (
        comments.map((comment, i) => (
          <div key={i} className={styles.comment}>
            {comment}
          </div>
        ))
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
