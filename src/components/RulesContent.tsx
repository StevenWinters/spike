import Content from "./Content";

const RulesContent = () => {
  const contentLinks = [
    {
      id: 1,
      path: "/rules#rules",
      name: "Rules",
    },
    {
      id: 2,
      path: "/rules#references",
      name: "References",
    },
  ];
  const referenceLinks = [
    {
      id: 1,
      path: "https://www.rulesofsport.com/sports/volleyball.html",
      name: "Rules Of Sport",
    },
  ];

  return (
    <Content
      contentLinks={contentLinks}
      referenceLinks={referenceLinks}
      id="rules"
    >
      <h2>Rules To Follow When Playing Volleyball:</h2>
      <ul>
        <li>
          Each team consists of 6 players and 6 substitutes. Players can be
          substituted at any time but if they are to return can only be swapped
          for the player that replaced them.
        </li>
        <li>
          Each team can hit the ball up to three times before the ball must be
          returned. The defensive team can then try and block or return the ball
          again, hitting it a maximum of three times.
        </li>
        <li>
          Games are played up to 25 points and must be won by 2 clear points.
        </li>
        <li>
          Violations will be called for the following:
          <ul>
            <li>Stepping over the base line when serving the ball.</li>
            <li>
              Ball hits the net and fails to get over the net (If the ball hits
              the net and still goes over the net then this is perfectly legal).
            </li>
            <li>
              Players are not allowed to carry, palm or run with the ball.
            </li>
            <li>
              Players must not touch the net with any part of the body. If the
              net is said to have hit them rather than vice-versa, then this is
              ok.
            </li>
            <li>The ball cannot travel under the net.</li>
            <li>Players cannot reach over the net and hit the ball.</li>
          </ul>
        </li>
      </ul>
    </Content>
  );
};

export default RulesContent;
