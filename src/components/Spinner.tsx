import Marquee from "react-fast-marquee";
import { spinnerOne, spinnerTwo } from "../data/Spinner";

interface Props {
  onSetFigure: (e: any) => void;
  onSetToggleFigure: () => void;
}

const Spinner = ({ onSetFigure, onSetToggleFigure }: Props) => {
  const displayImageOverlay = (e: any) => {
    onSetFigure(e.target.parentElement.firstChild.src);
    onSetToggleFigure();
  };
  return (
    <section className="block block--dark">
      <h2>More Samples</h2>
      <Marquee className="marquee" pauseOnHover direction="right">
        {spinnerOne.map((spinner) => (
          <figure
            key={spinner.id}
            className="spinner__container"
            onClick={(e: any) => displayImageOverlay(e)}
          >
            <img src={spinner.image} alt={spinner.alt} className="img" />
            <div className="flex justify--center align--center collage__overlay">
              <h3>{spinner.heading}</h3>
            </div>
          </figure>
        ))}
      </Marquee>
      <Marquee className="marquee" pauseOnHover direction="left">
        {spinnerTwo.map((spinner) => (
          <figure
            key={spinner.id}
            className="spinner__container"
            onClick={(e: any) => displayImageOverlay(e)}
          >
            <img src={spinner.image} alt={spinner.alt} className="img" />
            <div className="flex justify--center align--center collage__overlay">
              <h3>{spinner.heading}</h3>
            </div>
          </figure>
        ))}
      </Marquee>
    </section>
  );
};

export default Spinner;
