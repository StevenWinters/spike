import Video from "./Video";
import DocumentationVideo1 from "../assets/documentation/videos/documentation-video-1.mp4";
import DocumentationVideo2 from "../assets/documentation/videos/documentation-video-2.mp4";
import DocumentationVideo3 from "../assets/documentation/videos/documentation-video-3.mp4";
import DocumentationVideo4 from "../assets/documentation/videos/documentation-video-4.mp4";
import DocumentationVideo5 from "../assets/documentation/videos/documentation-video-5.mp4";

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
          <Video src={DocumentationVideo1} className="video--500" />
        </div>
      </section>
      <section className="block">
        <h2>Samples</h2>
        <div className="flex gap--lg video__container">
          <Video src={DocumentationVideo2} className="video--500" />
          <Video src={DocumentationVideo3} className="video--500" />
          <Video src={DocumentationVideo4} className="video--500" />
          <Video src={DocumentationVideo5} className="video--500" />
        </div>
      </section>
    </>
  );
};

export default Documentation;
