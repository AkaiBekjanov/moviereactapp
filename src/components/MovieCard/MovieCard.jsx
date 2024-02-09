import { useState } from "react";
import style from "./MovieCard.module.css";

const MovieCard = (item) => {
  const { Title, Year, Poster, Type } = item;
  return (
    <div className={style.item}>
      <div className={style.poster}>
        <img src={Poster} alt="Poster" className={style.img} />
      </div>
      <div className={style.title}>{Title}</div>
      <div className={style.title}>{Year}</div>
    </div>
  );
};

export default MovieCard;
