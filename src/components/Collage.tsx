import { collage } from "../data/Collage";

interface Props {
  onSetFigure: (e: any) => void;
  onSetToggleFigure: () => void;
}

const Collage = ({ onSetFigure, onSetToggleFigure }: Props) => {
  const displayImageOverlay = (e: any) => {
    onSetFigure(e.target.parentElement.firstChild.src);
    onSetToggleFigure();
  };

  return (
    <section className="block block--shade">
      <h2>Discover</h2>
      <div className="grid grid--center gap--lg collage">
        {collage.map((figure) => (
          <figure
            key={figure.id}
            className="flex justify--center align--center collage__container"
            onClick={(e: any) => displayImageOverlay(e)}
          >
            <img
              src={figure.image}
              alt="Documentation of Volleyball Picture"
              className="img"
            />
            <div className="flex flex--column justify--center align--center gap collage__overlay">
              <h3>View Picture</h3>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Collage;
