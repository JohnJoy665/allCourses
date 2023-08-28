import { memo } from "react";
import style from "../App/App.module.scss";


const Title = () => {
  return (
    <div className={style.titlePage}>
      <h1 className={style.titlePage__text}>{"Курсы"}</h1>
    </div>
  );
};

export default memo(Title);
