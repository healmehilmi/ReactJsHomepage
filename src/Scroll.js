import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG } from "./images/up-arrow-angle.svg";


export default function Scroll() {
    return (
        <div>
            <ScrollToTop  smooth component={<MySVG />}  />
        </div>
    )
}


