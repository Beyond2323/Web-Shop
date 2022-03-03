import React from "react"
import {Link} from "react-router-dom"
import { ThemeContext } from "./Context"
import {motion} from "framer-motion"

const headVariants = {
  initial: {
    x: "-100vw"
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.5, duration: 1, type: "tweet", when: "beforeChildren"
    }
  }
}

const textVaritants = {
  initial: {opacity: 0},
  animate: {opacity: 1,
   transition: {duration: 1.5}
   }
}

const Header = () => {
  const {addData} = React.useContext(ThemeContext)

  const haveData = addData.length === 0 ? "fa-solid fa-cart-shopping icon1" : "fa-solid fa-cart-shopping icon1 useless"
    return(
      <motion.div className="head"
       variants={headVariants}
       initial="initial"
       animate="animate"
       >
          <motion.div className="first"
           variants={textVaritants}
          ><Link to="/">Pic Some</Link></motion.div>
          <Link to="/cart"><i className={haveData}></i></Link>
      </motion.div>
    )
}

export default Header