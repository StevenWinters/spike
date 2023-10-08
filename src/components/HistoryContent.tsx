import Content from "./Content";

const History = () => {
  const contentLinks = [
    {
      id: 1,
      path: "/history#history",
      name: "History",
    },
    {
      id: 2,
      path: "/history#references",
      name: "References",
    },
    {
      id: 3,
      path: "/history#timeline",
      name: "Timeline",
    },
  ];
  const referenceLinks = [
    {
      id: 1,
      path: "https://www.athleticscholarships.net/history-of-volleyball.htm#:~:text=The%20game%20of%20volleyball%2C%20originally,baseball%2C%20tennis%2C%20and%20handball",
      name: "Athletics Scholarships",
    },
  ];

  return (
    <Content
      contentLinks={contentLinks}
      referenceLinks={referenceLinks}
      id="history"
    >
      <div className="grid grid--1x2 grid--center gap align--center content__topic">
        <div>
          <h2>History of Volleyball</h2>
          <p>
            The game of volleyball, originally called “mintonette,” was invented
            in 1895 by William G. Morgan after the invention of basketball only
            four years before.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/William_G._Morgan.jpg"
          alt="William G. Morgan Image"
          className="img img--350"
        />
      </div>
      <div id="timeline">
        <h2>Timeline of Significant Volleyball Events</h2>

        <p>In 1900, a special ball was designed for the sport.</p>
        <p>
          In 1916, in the Philippines, an offensive style of passing the ball in
          a high trajectory to be struck by another player (the set and spike)
          was introduced.
        </p>
        <p>In 1917, the game was changed from 21 to 15 points.</p>
        <p>
          In 1920, three hits per side and back row attack rules were
          instituted.
        </p>
        <p>
          In 1922, the first YMCA national championships were held in Brooklyn,
          NY. Twenty-seven teams from 11 states were represented.
        </p>
        <p>
          In 1928, it became clear that tournaments and rules were needed, so
          the United States Volleyball Association (USVBA, now USA Volleyball)
          was formed. The first U.S. Open was staged, as the field was open to
          non-YMCA squads.
        </p>
        <p>In 1930, the first two-man beach game was played.</p>
        <p>
          In 1934, national volleyball referees were approved and recognized.
        </p>
        <p>
          In 1937, at the AAU convention in Boston, action was taken to
          recognize the U.S. Volleyball Association as the official national
          governing body in the U.S.
        </p>
        <p>
          In 1947, the Federation Internationale De Volley-Ball (FIVB) was
          founded.
        </p>
        <p>In 1948, the first two-man beach tournament was held.</p>
        <p>
          In 1949, the initial World Championships were held in Prague,
          Czechoslovakia.
        </p>
        <p>In 1964, volleyball was introduced to the Olympic Games in Tokyo.</p>
        <p>
          In 1965, the California Beach Volleyball Association (CBVA) was
          formed.
        </p>
        <p>
          In 1974, the World Championships in Mexico were telecast in Japan.
        </p>
        <p>
          In 1975, the U.S. National Women's team began a year-round training
          regime in Pasadena, Texas (moved to Colorado Springs in 1979, Coto de
          Caza and Fountain Valley, CA, in 1980, and San Diego, CA, in 1985).
        </p>
        <p>
          In 1977, the U.S. National Men's Team began a year-round training
          regime in Dayton, Ohio (moved to San Diego, CA, in 1981).
        </p>
        <p>
          In 1983, the Association of Volleyball Professionals (AVP) was formed.
        </p>
        <p>
          In 1984, the U.S. won their first medals at the Olympics in Los
          Angeles. The men won the gold, and the women the silver.
        </p>
        <p>
          In 1986, the Women's Professional Volleyball Association (WPVA) was
          formed.
        </p>
        <p>In 1988, the U.S. men repeated the gold in the Olympics in Korea.</p>
        <p>In 1990, the World League was created.</p>
        <p>In 1995, the sport of volleyball was 100 years old!</p>
        <p>In 1996, two-person beach volleyball became an Olympic sport.</p>
      </div>
    </Content>
  );
};

export default History;
