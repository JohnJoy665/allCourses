import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import {
  BrowserRouter as Router
} from "react-router-dom";

// const location = useLocation();
// const path = location.pathname;


const envProc = process.env.NODE_ENV.trim() === "production" ? location.pathname : "";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router basename={envProc}>
      {/* <Router> */}
      <App />
    </Router>
  </React.StrictMode>
);




// basename={envProc}
