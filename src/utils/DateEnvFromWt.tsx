import { useEffect, useState } from "react";
// import {data, filterList} from "../types/types";

const developmentData = process.env.NODE_ENV.trim() === "development" 
  ? { 
    "login": process.env.REACT_APP_API_USERNAME, 
    "password": process.env.REACT_APP_API_PASSWORD 
  } : "";

export const DateEnvFromWt = () => {

  const [dataEnv, setDataEnv] = useState<{login: string | undefined, password: string | undefined} | "">();
  useEffect(() => {
    const dataElement = document.getElementById("envWT");
    if (dataElement && dataElement.textContent) {
      const data = JSON.parse(dataElement.textContent);
      setDataEnv(data);
    } else {
      setDataEnv(developmentData);
    }
    dataElement?.remove();
  }, []);

  return dataEnv;
  
};
