import { Link } from "react-router-dom";
import LogoImage from "../assets/logo/logo.png";

interface Props {
  toggleMenu?: boolean;
}

const Logo = ({ toggleMenu }: Props) => {
  return (
    <Link to="/">
      <img
        src={LogoImage}
        alt="Spike Logo"
        className={`img img--logo ${toggleMenu && "active"}`}
      />
    </Link>
  );
};

export default Logo;
