import { Link } from "react-router-dom";

interface Props {
  toggleMenu?: boolean;
}

const Logo = ({ toggleMenu }: Props) => {
  return (
    <Link to="/">
      <img
        src="https://www.nicepng.com/png/full/189-1898242_volleyball-volleyball-logo.png"
        alt="Spike Logo"
        className={`img img--logo ${toggleMenu && "active"}`}
      />
    </Link>
  );
};

export default Logo;
