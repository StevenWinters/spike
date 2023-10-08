import Button from "./Button";

const Hero = () => {
  return (
    <section className="block block--image block--skewed-right">
      <div className="grid grid--1x2 gap container grid--center hero__container">
        <div className="hero__description">
          <h1>Spike!</h1>
          <p>
            The Ultimate Magazine for Volleyball Lovers. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Alias quo sunt corrupti saepe,
            cupiditate omnis ad sapiente perferendis sint aliquam.
          </p>
          <Button link="/rules" type="accent">
            Learn More
          </Button>
        </div>
        <img
          src="https://i.pinimg.com/originals/c3/00/b0/c300b030fbe70005ae8b14768521a26d.png"
          alt="Volleybal Hero Image"
          className="img img--500"
        />
      </div>
    </section>
  );
};

export default Hero;
