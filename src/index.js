import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContext from "./component/Context/AuthContext";
import 'react-photo-view/dist/react-photo-view.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
 <AuthContext>
  <App />
 </AuthContext>
</React.StrictMode>);

reportWebVitals();
