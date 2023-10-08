import Content from "./Content";

const CourtContent = () => {
  const contentLinks = [
    {
      id: 1,
      path: "/court#court",
      name: "Court",
    },
    {
      id: 2,
      path: "/court#lines",
      name: "Lines",
    },
    {
      id: 3,
      path: "/court#references",
      name: "References",
    },
  ];
  const referenceLinks = [
    {
      id: 1,
      path: "https://www.freepik.com/premium-vector/volleyball-court-dimensions-size-guide-illustration-layout-scheme_7291064.htm?fbclid=IwAR2ZfB102nVYkVAK9CAsXFrCr4PbG-DSVY-4OG48RivFUMTQiI9QewRWFU0",
      name: "Freepik Volleyball Court",
    },
  ];
  return (
    <Content
      contentLinks={contentLinks}
      referenceLinks={referenceLinks}
      id="court"
    >
      <h2>The Court of Volleyball:</h2>
      <div className="flex justify--center">
        <img
          src="https://img.freepik.com/premium-vector/volleyball-court-dimensions-size-guide-illustration-layout-scheme_1995-571.jpg?w=900"
          alt="Volleyball Court"
          className="img img--500"
        />
      </div>
      <h2 id="lines">The Lines of Volleyball in the Court:</h2>
      <ul>
        <li>
          Center line:
          <p>
            The centerline is located directly in the middle of the court, right
            underneath the net. This line divides the court into two equal
            halves. Players near the net must be conscientious of this line, as
            crossing it during a point will result in a penalty.
          </p>
        </li>
        <li>
          Attack Line
          <p>
            A line 3 meters (10 feet) away from, and parallel to, the net or the
            center line. Separates the front-row players from the back row
            players. A back row player cannot legally attack the ball above the
            net unless he takes off from behind the attack line.
          </p>
        </li>
        <li>
          End line:
          <p>
            The end line indicates the back boundary at each end of the court.
          </p>
        </li>
        <li>
          Sideline:
          <p>
            The sideline indicates the side boundary at each side of the court.
            Positions.
          </p>
        </li>
      </ul>
    </Content>
  );
};

export default CourtContent;
