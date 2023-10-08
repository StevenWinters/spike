interface Props {
  className: string;
  src: string;
}

const Video = ({ className, src }: Props) => {
  return <video controls src={src} className={`video ${className}`} />;
};

export default Video;
