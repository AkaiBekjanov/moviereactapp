import { useContext, useState } from "react";
import style from "./Filter.module.css";
import { Context } from "../../Context/Context";

export const Filter = () => {
  const { setMovieName } = useContext(Context);
  function handleChange(e) {
    const value = e.target.value;
    if (!value) {
      setMovieName("STARWARS");
    }
    setMovieName(value);
  }
  return (
    <div className={style.body}>
      <input placeholder="STARWARS" onChange={handleChange} />
    </div>
  );
};
