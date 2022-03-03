import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style.css"
import {BrowserRouter as Router} from "react-router-dom"
import {Context} from "./Context"

ReactDOM.render(
       <Context>
           <Router>
            <App />
           </Router>
       </Context>
    , document.getElementById("root"))