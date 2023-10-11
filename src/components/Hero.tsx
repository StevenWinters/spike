import Button from "./Button";

const Hero = () => {
  return (
    <section className="block block--image block--skewed-right hero">
      <div className="grid grid--1x2 gap container grid--center hero__container">
        <div className="hero__description">
          <h1>Spike!</h1>
          <p>
            Whether you're a pro, casual player, or just a fan of this dynamic
            sport, we've got you covered. DIve into a treasure of information on
            rules, moves, history, and much more. So get ready to spike, set,
            and serve your way through a volley of exciting content right here!
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
