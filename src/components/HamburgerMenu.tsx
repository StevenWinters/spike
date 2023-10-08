interface Props {
  onToggleMenu: () => void;
}

const HamburgerMenu = ({ onToggleMenu }: Props) => {
  return (
    <div onClick={() => onToggleMenu()} className="hamburger__menu">
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
      <span className="hamburger__bar"></span>
    </div>
  );
};

export default HamburgerMenu;
