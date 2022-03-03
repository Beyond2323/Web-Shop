import { checkPropTypes } from "prop-types"
import React from "react"

const ThemeContext = React.createContext()

function Context(props) {

   const url="https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

   const [allData, setAlldata] = React.useState([])
   const [addData, setAdd] = React.useState(JSON.parse(localStorage.getItem("info")) || [])
   const [text, setText] = React.useState("Place Order")
   
   React.useEffect(async () => {
     const res = await fetch(url)
     const data = await res.json()
     setAlldata(data)
   }, [])

   function moveTocart(data, shop) {
    setAdd(pres => ([...pres, data]))  
    shop(pres => !pres)  
}

 function removeData(receive, gg) {
     setAdd(pres => pres.filter(datas => datas.id !== receive ))
     gg(pres => !pres)
 }

 function removeDatas(receive) {
    setAdd(pres => pres.filter(datas => datas.id !== receive ))
}

 function checkHeart(fav) {
     setAlldata(prev => prev.map(roll => {
         return  roll.id === fav ? {...roll, isFavorite: !roll.isFavorite} : {...roll}
     }
     ))
 }

 function naruto() {
    setText("Ordering")
    setTimeout(() => {
        setText("Place Order")
        setAdd([])
        alert("Order Finish")
    }, 3000)
}

React.useEffect(() => {
   localStorage.setItem("info" , JSON.stringify(addData))
}, [addData])

    return(
        <ThemeContext.Provider value={{allData, moveTocart, addData, removeData, checkHeart, removeDatas, text, naruto}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, Context}