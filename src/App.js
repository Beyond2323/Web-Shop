import React from "react"
import Header from "./Header"
import Cart from "./Cart"
import Image from "./Image"
import {Routes, Route, useLocation} from "react-router-dom"
import { ThemeContext } from "./Context"
import ChangeSize from "./ChangeSize"
import {AnimatePresence} from "framer-motion"

const App = () => {
     const {allData} = React.useContext(ThemeContext)
     
     const ownValue = allData.map((data, i) => (
       <Image key={data.id} datas={data} imageSize={ChangeSize(i)}/>
     ))
   const location = useLocation()

    return(
      <div>
          <Header />
         <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route exact path="/" element={<div className="container">{ownValue}</div>}/>
              <Route path="/cart" element={<Cart />} />
              </Routes>
          </AnimatePresence>
      </div>
    )
}

export default App