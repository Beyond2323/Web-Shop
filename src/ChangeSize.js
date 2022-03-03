import React from "react"

export default function changeSize(no) {
    if(no % 5 === 0) {
        return "wide"
    } else if(no % 6 === 0) {
        return "large"
    }
}