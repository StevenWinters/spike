import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";

const NavBar = () => {
  const [toggleMenu, handleToggleMenu] = useState(false);
  const [toggleLinks, handleToggleLinks] = useState(false);

  return (
    <nav className="flex justify--around align--center nav__bar">
      <Logo toggleMenu={toggleMenu} />
      <div className="flex justify--around align--center gap">
        <NavLinks
          onToggleMenu={() => handleToggleMenu(!toggleMenu)}
          onToggleLinks={() => handleToggleLinks(!toggleLinks)}
          toggleMenu={toggleMenu}
          toggleLinks={toggleLinks}
        />
        <HamburgerMenu onToggleMenu={() => handleToggleMenu(!toggleMenu)} />
        <Button link="/sign-in" type="accent">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
