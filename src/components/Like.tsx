import { useState } from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <BsFillHeartFill color="ff6b81" size={80} onClick={toggle} />;
  return <BsHeart size={80} onClick={toggle} />;
};

export default Like;
