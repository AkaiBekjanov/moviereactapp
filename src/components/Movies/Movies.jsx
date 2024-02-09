import { useContext, useState } from "react";
import style from "./Movies.module.css";
import { Context } from "../../Context/Context";
import MovieCard from "../MovieCard/MovieCard";

export const Movies = () => {
  const { movies, movieName } = useContext(Context);
  const loweredMovieName = movieName.toString().toLowerCase();
  return (
    <div className={style.items}>
      {movies
        ?.filter((item) =>
          item.Title.toString().toLowerCase().includes(loweredMovieName)
        )
        .map((item) => {
          return <MovieCard key={item.imdbID} {...item} />;
        })}
    </div>
  );
};
