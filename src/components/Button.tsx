interface Props {
  onClick: () => void;
  color?: string;
}

const Button = ({ onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onClick}
    ></button>
  );
};

export default Button;
