import React from "react";
//Component
import Filters from "./Filters/Filters";
import ScorsHotel from "./Scors/ScorsHotel";
//Styles
import Styles from "./Options.module.css";
const Options = () => {
  return (
    <div className={Styles.container}>
      <ScorsHotel />
      <Filters />
    </div>
  );
};

export default Options;
