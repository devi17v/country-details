import React from "react";
const Country = ({ country }) => {
  const { name, flags, population, languages = {} } = country;
  const langVal = Object.values(languages);
  const spokenLang = langVal.join(" ,");
  return (
    <div className="country-detail">
      <div className="country-name">
        <h3>{name.common.toUpperCase()}</h3>
      </div>
      <div className="image-pic">
        <img src={flags.png} alt="flag" />
      </div>
      <div className="details">
        <div className="population">
          <span className="title-wrapper">POPULATION: </span>
          <span>{population}</span>
        </div>
        <div className="languages">
          <span className="title-wrapper">LANGUAGES: </span>
          <span>{spokenLang}</span>
        </div>
      </div>
    </div>
  );
};
export default Country;
