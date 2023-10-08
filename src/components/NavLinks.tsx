import { Link } from "react-router-dom";
import { navLinks } from "../data/NavLinks";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { RiArrowDropDownLine } from "react-icons/ri";

interface Props {
  onToggleMenu: () => void;
  onToggleLinks: () => void;
  toggleMenu: boolean;
  toggleLinks: boolean;
}

const NavLinks = ({
  onToggleMenu,
  onToggleLinks,
  toggleMenu,
  toggleLinks,
}: Props) => {
  const onToggle = () => {
    onToggleMenu();
    onToggleLinks();
  };
  return (
    <>
      <ul className={`flex nav__lists ${toggleMenu && "active"}`}>
        {navLinks.map((link) => (
          <li key={link.id} className="nav__list">
            <Link
              to={link.path}
              className="nav__link"
              onClick={() =>
                link.name !== "How To Play" ? onToggleMenu() : onToggleLinks()
              }
            >
              {link.name}
              {link.name === "How To Play" && (
                <span className="icon--dropdown">
                  <RiArrowDropDownLine size={25} />
                </span>
              )}
            </Link>
            {link.children && (
              <ul className={toggleLinks ? "active" : ""}>
                {link.children?.map((dropLink) => (
                  <li key={dropLink.id}>
                    <Link
                      to={dropLink.path}
                      className="nav__link"
                      onClick={() => onToggle()}
                    >
                      {dropLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <span onClick={() => onToggleMenu()}>
        <IconContext.Provider
          value={{ className: `icon icon--close ${toggleMenu && "active"}` }}
        >
          <AiOutlineClose size={25} color={"var(--color-secondary)"} />
        </IconContext.Provider>
      </span>
    </>
  );
};

export default NavLinks;
