// star
const star = (starred) => {
  // create your elements
  let [star1, star2, star3, star4, star5, star6, star] = createElementCall([
    "DIV",
    "DIV",
    "DIV",
    "DIV",
    "DIV",
    "DIV",
    "DIV",
  ]);

  // create the star
  star.append(star1, star2, star3, star4, star5, star6);
  star.className = "starIcon";
  star1.className = "star1";
  star2.className = "star2";
  star3.className = "star3";
  star4.className = `${starred ? "star4 outline starred" : "star4 outline"}`;
  star5.className = `${starred ? "star5 outline starred" : "star5 outline"}`;
  star6.className = `${starred ? "star6 outline starred" : "star6 outline"}`;

  return star;
};


