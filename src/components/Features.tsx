import { features } from "../data/Features";

const Features = () => {
  return (
    <section className="block container">
      <h2>Features</h2>
      {features.map((feature) => (
        <article
          key={feature.id}
          className="grid grid--1x2 grid--center align--center feature"
        >
          <div className="feature__description">
            <h3>{feature.heading}</h3>
            <p>{feature.description}</p>
          </div>
          <img src={feature.image} alt={feature.alt} className="img img--350" />
        </article>
      ))}
    </section>
  );
};

export default Features;
