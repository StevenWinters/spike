import Video from "./Video";
import Tetris from "../assets/tetris.mp4";

const Documentation = () => {
  return (
    <>
      <section className="block container">
        <div className="grid grid--1x2 gap grid--center align--center">
          <div>
            <h1>Documentation</h1>
            <p>
              Experience how volleyball is being played through our videos and
              images.
            </p>
          </div>
          <Video src={Tetris} className="video--500" />
        </div>
      </section>
      <section className="block">
        <h2>Samples</h2>
        <div className="flex gap--lg video__container">
          <Video src={Tetris} className="video--500" />
          <Video src={Tetris} className="video--500" />
          <Video src={Tetris} className="video--500" />
          <Video src={Tetris} className="video--500" />
        </div>
      </section>
    </>
  );
};

export default Documentation;
