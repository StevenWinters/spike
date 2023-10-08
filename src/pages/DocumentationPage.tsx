import { useState } from "react";
import Collage from "../components/Collage";
import Documentation from "../components/Documentation";
import Spinner from "../components/Spinner";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";

const DocumentationPage = () => {
  const [figure, setFigure] = useState("");
  const [toggleFigure, setToggleFigure] = useState(false);

  return (
    <>
      {toggleFigure && (
        <div className="flex justify--center align--center overlay">
          <span onClick={() => setToggleFigure(!toggleFigure)}>
            <IconContext.Provider value={{ className: `icon icon--close` }}>
              <AiOutlineClose size={25} color={"var(--color-secondary)"} />
            </IconContext.Provider>
          </span>
          <img src={figure} alt="" className="img" />
        </div>
      )}
      <Documentation />
      <Collage
        onSetFigure={(e) => setFigure(e)}
        onSetToggleFigure={() => setToggleFigure(!toggleFigure)}
      />
      <Spinner
        onSetFigure={(e: any) => setFigure(e)}
        onSetToggleFigure={() => setToggleFigure(!toggleFigure)}
      />
    </>
  );
};

export default DocumentationPage;
