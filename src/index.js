import { createRoot } from "react-dom/client";
import App from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './allstyle.css'

const myRoot = createRoot(document.querySelector("#root"));
myRoot.render(<App />)