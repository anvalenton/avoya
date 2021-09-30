import React from "react";
import logo from "./img/logo.png";


const Menu = () => {


    return (
        <>
        <div>
            <img src={logo}></img>
            <div>
                <button>Home</button>
                <button>Uno</button>
                <button>Dos</button>
                <button>Tres</button>
            </div>
        </div>
        </>
    )
}


export default Menu;