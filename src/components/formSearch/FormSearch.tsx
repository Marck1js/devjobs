import React from "react";
import stlyes from "./FormSearch.module.scss";
import IconSearch from "@/svg/IconSearch";
import IconLocation from "@/svg/IconLocation";
const FormSearch = () => {
  return (
    <div className={stlyes.contenedor}>
      <div className={stlyes.filterTitle}>
        <div className={stlyes.icon}>
          <IconSearch />
        </div>
        <div className={stlyes.input}>
          <input placeholder="Filter by title, companies, expertise" />
        </div>
      </div>
      <div className={stlyes.filterLocation}>
        <div className={stlyes.icon}>
          <IconLocation />
        </div>
        <div className={stlyes.input}>
          <input placeholder="Filter by location" />
        </div>
      </div>

      <div className={stlyes.boxSearch}>
        <div className={stlyes.input}>
          <input type="checkbox" />
        </div>
        <p className={stlyes.text}>full time only</p>
        <button className={stlyes.btnSearch}>search</button>
      </div>
    </div>
  );
};

export default FormSearch;
