import { useEffect, useState } from "react";
import { DateEnvFromWt } from "../utils/DateEnvFromWt";

export const Api = () => {
  const dataEnv = DateEnvFromWt();
  const [classInstance, setClassInstance] = useState<Api | null>(null);

  class Api {
    header: Headers;
    constructor(login: string, password: string) {
      const myHeaders = new Headers();
      myHeaders.append("x-app-id", login);
      myHeaders.append("Authorization", `Basic ${password}`);
      myHeaders.append("Content-Type", "text/plain");
      myHeaders.append("Access-Control-Allow-Origin", "origin");
      this.header = myHeaders;
    }

    getCheck(res: Response) {
      return res.ok ? res.json() : console.log(res);
    }

    getCourses() {
      const requestOptions = {
        method: "GET",
        headers: this.header,
        redirect: "manual"
      } as RequestInit;
      return fetch("/oapi/allcourses/getAllCourses", requestOptions)
        .then((res) => {
          return this.getCheck(res);
        });
    }
  }



  useEffect(() => {
    const api = dataEnv && dataEnv.login && dataEnv.password && new Api(dataEnv.login, dataEnv.password);
    api && setClassInstance(api);
  }, [dataEnv]);

  return classInstance;
};
