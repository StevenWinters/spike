interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return (
    <header className="block block--image block--header">
      <h1>{children}</h1>
    </header>
  );
};

export default Header;
