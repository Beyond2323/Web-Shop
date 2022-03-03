import { func } from "prop-types"
import React from "react"
import { ThemeContext } from "./Context"
import {motion, AnimatePresence} from "framer-motion"

const arrVariants = {
    initial: {
      y: "100vh"
    },
    animate: {
      y: 0,
      transition: {duration: 1}
    },
    exit: {
        x: "100vw",
        transition: {ease: "easeInOut"}
    }
}

export default function Cart() {
    const {addData, removeDatas, text, naruto} = React.useContext(ThemeContext)

    const takeImg = addData.map(data => 
    <motion.div key={data.id} className="arr"
      variants={arrVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
     <i className="fa-solid fa-trash-can trash" onClick={() => removeDatas(data.id)}></i>
      <div className="taken">
        <img className="cartImg" src={`${data.url}`} />
        <div className="price">$5.99</div>
    </div>
    <hr />
    </motion.div>
    )
    
   const calculateTotal = addData.length * 5.99

    function checkArray() {
        if(addData.length === 0) {
            return (
                <div>  
                    <h3>You have no items in your cart</h3>
                </div>
            )
        } else {
            return takeImg
        }
    }


    return (
       <motion.div className="main" exit={{ x: "100vw"}}>
           <div className="cart">
            <h1>Check Out</h1>
           </div>
           <AnimatePresence>
           {checkArray()}
           </AnimatePresence>
           <div className="pz">Total: ${calculateTotal.toLocaleString()}</div>
          {addData.length > 0 && <div className="dd">
              <motion.button 
               whileHover={{ scale: 1.1}}
              className="but" onClick={naruto}>{text}</motion.button>
              </div>}
       </motion.div>
    )
}