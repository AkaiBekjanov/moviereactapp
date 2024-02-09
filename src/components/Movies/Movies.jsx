import { useContext, useState } from "react";
import style from "./Movies.module.css";
import { Context } from "../../Context/Context";
import MovieCard from "../MovieCard/MovieCard";
import { AnimatePresence, motion } from "framer-motion"

export const Movies = () => {
  const { movies, movieName } = useContext(Context);
  const loweredMovieName = movieName.toString().toLowerCase();
  return (
    <AnimatePresence>
  
    <motion.div
      initial={{ opacity: 0 ,x:-100}}
      animate={{ opacity: 1,x:0 }}
      exit={{ opacity: 0 }}
      className={style.items}
    >
 {movies
        ?.filter((item) =>
          item.Title.toString().toLowerCase().includes(loweredMovieName)
        )
        .map((item) => {
          return <MovieCard key={item.imdbID} {...item} />;
        })}
    </motion.div>
  
</AnimatePresence>
    
  );
};
