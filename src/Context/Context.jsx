import { createContext, useEffect, useState } from "react";
export const Context = createContext();
const API_KEY = "51a2e21";

const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [movieName, setMovieName] = useState("STARWARS");
  useEffect(() => {
    async function fetchMovies(title) {
      if (!movieName) {
        setMovieName("STARWARS");
      }
      try {
        const data = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&S=${title}`
        ).then((data) => data.json());
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(true);
      }
    }

    fetchMovies(movieName);
  }, [movieName]);
  const value = { movies, movieName, setMovieName, isLoading };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
