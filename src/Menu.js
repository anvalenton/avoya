import React from "react";
import logo from "./img/logo.png";


const Menu = () => {


    return (
        <>
        <div className='menu-div'>
            <img className="logo" src={logo} alt='logo'></img>
            <div className='menu-button-container'>
                <button className='menubutton'>HOME</button>
                <button className='menubutton'>UNO</button>
                <button className='menubutton'>DOS</button>
                <button className='menubutton'>TRES</button>
            </div>
        </div>
        </>
    )
}


export default Menu;