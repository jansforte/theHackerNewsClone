import React, {useEffect, useState} from "react";
import {MDBCol, MDBContainer, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import logo from '../assets/img/logo.png';
import $ from 'jquery';

const Header = ()=>{

    const openSearch = ()=>{
        $("#buscador").slideToggle("fast");
    }

    const openMenuClose = (estado)=>{
        if (estado) {
            $(".h-menu").css("height", "100%");
        }else{
            $(".h-menu").css("height", "0%");
        }
    }

    useEffect(openSearch, []);

    return (
        <>
            <header>
                <MDBContainer fluid className="header_link text-light ocultar ">
                    <div className='d-flex justify-content-end'>
                        <ul className="lista_l">
                            <li className="lista_i" >Follow us</li>
                            <li className="lista_i" >
                                <MDBIcon fab icon="facebook-f" />
                            </li>
                            <li className="lista_i" >
                                <MDBIcon fab icon="twitter" />
                            </li>
                            <li className="lista_i" >
                                <MDBIcon fab icon="linkedin-in" />
                            </li>
                            <li className="lista_i" >
                                <MDBIcon fab icon="youtube" />
                            </li>
                            <li className="lista_i" >
                                <MDBIcon fas icon="rss" />
                            </li>
                        </ul>
                    </div>
                </MDBContainer>
                <MDBContainer fluid className="logo-area ">
                    <MDBRow>
                        <MDBCol size='5' className="logo-box">
                            <img src={logo} alt="Logo hacker news"/>
                        </MDBCol>
                        <MDBCol size='1' className="botonMenuBuscar btnSear" onClick={openSearch}>
                            <MDBIcon fas icon="search" />
                        </MDBCol>
                        <MDBCol size='1' className="botonMenuBuscar btnM" onClick={()=>openMenuClose(true)}>
                            <MDBIcon fas icon="bars" />
                        </MDBCol>
                        <MDBCol size='5'>
                            <a className="sub-button" href="#newsletter-email">
                                <MDBIcon fas icon="envelope" />
                                {' '} Subscribe to Newsletter
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </header>
            <nav>
                <ul className="menu1">
                    <li className="l1"><a href='#'>Home</a></li>
                    <li className="l1 l3"><a href='#'>Data Breaches</a></li>
                    <li className="l1"><a href='#'>Cyber Attacks</a></li>
                    <li className="l1"><a href='#'>Vulnerabilities</a></li>
                    <li className="l1 l3"><a href='#'>Malware</a></li>
                    <li className="l1"><a href='#'>Offers</a></li>
                    <li className="l1"><a href='#'>Contact</a></li>
                    <li className="l1 l2">
                        <ul className="menu1">
                            <li className="l2 bar" ><a href='#' onClick={()=>openMenuClose(true)}><MDBIcon fas icon="bars" /></a></li>
                            <li className="l2 lupa"><a href='#' onClick={openSearch}><MDBIcon fas icon="search" /></a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="menu2">
                    <li className="l1"><a href='#'><MDBIcon fas icon="home" /> Home</a></li>
                    <li className="l1"><a href='#'><MDBIcon fas icon="envelope" /> Newsletter</a></li>
                    <li className="l1"><a href='#'><MDBIcon fas icon="shopping-cart" /> Offers</a></li>
                </ul>
            </nav>
            <div className="buscador" id="buscador">
                <div className="buscar">
                    <form>
                        <input type="text" placeholder="Search here..." name="search" autoComplete="off"/>
                    </form>
                </div>
            </div>
            <div className="h-menu">
                <div className="h-menu-container">
                    <div className="d-close">
                        <a href="#" onClick={()=>openMenuClose(false)}>
                            <MDBIcon fas icon="times" size="2x"/>
                        </a>
                    </div>
                    <div style={{padding:"10px", overflow: "hidden"}}>
                        <div className="h-m-op1">
                            <h5>Resources</h5>
                            <ul>
                                <li><a href="#">THN Store</a></li>
                                <li><a href="#">Free Books</a></li>
                                <li><a href="#">Freebies</a></li>
                                <li><a href="#">RSS Feeds</a></li>
                            </ul>
                        </div>
                        <div className="h-m-op2">
                            <h5>About Site</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Team</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Advertise With Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <h5>Contact/Tip Us</h5>
                </div>
            </div>
        </>
    )
}

export default Header
