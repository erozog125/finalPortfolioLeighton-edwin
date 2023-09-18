import './Navbar.css' ;
import BurguerButton from '../BurguerButton/BurguerButton';
import React, { useState } from 'react';
import styled from 'styled-components'


function Navbar() {

    const[clicked, setClicked] = useState(false)
    const handleClick =() =>{
        //Cuando esta true pasa a false y vice versa
        setClicked(!clicked)
    }
    return(
        <>
            <div className='navbarContainer'>
                <h2>My <span id='spanPortfolio'>Portfolio</span></h2>
                <div id='navContainer' className={`links ${clicked ? 'active': ''}`}>
                    <a onClick={handleClick} href="#h">Home</a>
                    <a onClick={handleClick} href="#h">Projects</a>
                    <a onClick={handleClick} href="#h">Work Experience</a>
                    <a onClick={handleClick} href="#h">Contact Me</a>
                </div>
                <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick = {handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </div>
        </>
    );
}
 export default Navbar;
 
// Se le da estilo a la etiqueta BgDiv con styled-component
const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
`
