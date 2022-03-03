import React from "react"
import { ThemeContext } from "./Context"
import {motion} from "framer-motion"

const hoverVariants = {
    hover: {scale: 1.1}
}

export default function Image({datas, imageSize}) {

    const [showIcon, setIcon] = React.useState(false)
    const [heart, fuckHeart] = React.useState(false)
    const [shop, setShop] = React.useState(false)

    const {allData, moveTocart, addData, removeData, checkHeart} = React.useContext(ThemeContext)

    function full() {
        fuckHeart(pres => !pres)
    }
   
    
    function Incart() {
        if(datas.isFavorite) {
            return <div className="icon2"><i className={"fa-solid fa-heart useless2"} onClick={() => checkHeart(datas.id)}></i></div>
        } else if(showIcon) {
            return (
            <div className="icon2">
            <i className={"fa-regular fa-heart useless0"} onClick={() => checkHeart(datas.id)}></i>
            </div> 
            )
            }
    }

    function shoppingCart() {
        const oof = addData.some(ser => ser.id === datas.id)
        if(oof) {
            return <div className="icon3"><i className="fa-solid fa-cart-shopping icon1 useless" onClick={() => removeData(datas.id, setShop)} ></i></div>
        } else if(showIcon) {
            return (
            <div className="icon3">
            <i className="fa-solid fa-cart-shopping icon1 " onClick={() =>moveTocart(datas, setShop)}></i>
            </div> 
            )
        } else {
           return shop && <i className="fa-solid fa-cart-shopping icon1 " onClick={() =>moveTocart(datas, setShop)}></i>
        }
    }

    return (
        <motion.div className={`image ${imageSize}`} 
        onMouseEnter={() => setIcon(true)}
        onMouseLeave={() => setIcon(false)}
        exit={{ x: "-100vw"}}
        transition={{ease: "easeInOut"}}
        >
            <img className={`img`} src={`${datas.url}` } />       
           {Incart()}
           {shoppingCart()}
        </motion.div>
    )
}