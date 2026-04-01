import type { MouseEventHandler } from 'react';

type Props = {
  CSSClasses: string;
  content: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: Props) => {
  const { CSSClasses, content, onClick } = props;
  return (
    <button className={CSSClasses} onClick={onClick}>
      {content}
    </button>
  );
};
