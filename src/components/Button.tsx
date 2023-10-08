import { Link } from "react-router-dom";

interface Props {
  children: string;
  link: string;
  type: string;
}

const Button = ({ children, link, type }: Props) => {
  return (
    <Link to={link}>
      <button className={`btn btn--${type}`}>{children}</button>
    </Link>
  );
};

export default Button;
