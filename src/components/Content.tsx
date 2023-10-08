import { ReactNode } from "react";

interface Links {
  id: number;
  path: string;
  name: string;
}

interface Props {
  children: ReactNode;
  contentLinks: Links[];
  referenceLinks: Links[];
  id: string;
}

const Content = ({ children, contentLinks, referenceLinks, id }: Props) => {
  return (
    <div className="block container grid gap--lg content">
      <aside className="flex flex--column content__side">
        <h4>Table Of Content</h4>
        {contentLinks.map((link) => (
          <a key={link.id} href={link.path}>
            {link.name}
          </a>
        ))}
      </aside>
      <main id={id} className="content__container">
        <div>{children}</div>
        <div id="references" className="flex flex--column references">
          <h4>References</h4>
          {referenceLinks.map((link) => (
            <a key={link.id} href={link.path} target="_blank">
              {link.name}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Content;
