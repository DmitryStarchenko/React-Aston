type Props = {
  CSSClasses: string;
  content: string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const { CSSClasses, content, onClick } = props;
  return (
    <button className={CSSClasses} onClick={onClick}>
      {content}
    </button>
  );
};
