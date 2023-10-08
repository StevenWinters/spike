import { Link } from "react-router-dom";
import { footerLinks } from "../data/FooterLinks";
import Icons from "./Icons";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="block--skewed-right-top">
      <div className="block block--shade top__footer">
        <div className="flex gap justify--center align--center">
          <Icons />
        </div>
        <div className="grid grid--1x5 container footer__container">
          <Logo />
          {footerLinks.map((link) => (
            <div key={link.id} className="footer__container">
              <h4>{link.heading}</h4>
              <ul>
                {link.sections.map((section) => (
                  <li key={section.id}>
                    <Link to={section.path}>{section.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="sub__footer">
        <p>Copyright &copy; 2023. Powered by the PWU ICT/HE/ABM Students.</p>
      </div>
    </footer>
  );
};

export default Footer;
