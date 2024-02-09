import { useContext, useState } from "react";
import style from "./App.module.css";
import { Movies } from "./components/Movies/Movies";
import { Filter } from "./components/Filter/Filter";
import { Context } from "./Context/Context";

function App() {
  const { isLoading, movies } = useContext(Context);
  return (
    <>
      <div className={style.container}>
        <Filter />
        {!isLoading ? <Movies /> : "Загрузка..."}
        
      </div>
    </>
  );
}

export default App;
