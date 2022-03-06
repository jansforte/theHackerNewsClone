import React from "react";
import Header from "../../templates/Header.js";
import Footer from "../../templates/Footer";
import {MDBIcon} from "mdb-react-ui-kit";

const Home = ()=>{
    const temas = [1,2,3,4,5,6,7]
    return (
        <>
            <Header/>
            <div className="content-main" style={{paddingTop:"25px"}}>
                <div className="newNews">
                    {temas.map(tema=>
                        <div className="article-news">
                            <a href="#">
                                <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                                <div className="article-text">
                                    <h2>Title{tema}</h2>
                                    <div className="date-author">
                                        <MDBIcon far icon="calendar-alt" /> date <MDBIcon fas icon="user" /> author
                                    </div>
                                    <div className="summary">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi
                                        delectus deserunt dignissimos ducimus et, exercitationem fugit id ipsa
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}

                    <div>
                        <a href="#" className="beforeP buttonP">
                            <MDBIcon fas icon="angle-left" style={{fontSize:"20px"}} /> {"  "}Prev Page
                        </a>
                        <a href="#" className="nextP buttonP">
                            Next Page {"  "}<MDBIcon fas icon="angle-right" style={{fontSize:"20px"}}/>
                        </a>
                    </div>
                </div>
                <div className="popularNews">
                    <h2>Popular This Week</h2>
                    <div className="popular-news">
                        <a href="#">
                            <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                            <div className="popular-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores.
                            </div>
                        </a>
                    </div>
                    <div className="popular-news">
                        <a href="#">
                            <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                            <div className="popular-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores.
                            </div>
                        </a>
                    </div>
                    <div className="popular-news">
                        <a href="#">
                            <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                            <div className="popular-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores.
                            </div>
                        </a>
                    </div>
                    <div className="popular-news">
                        <a href="#">
                            <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                            <div className="popular-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores.
                            </div>
                        </a>
                    </div>
                    <div className="popular-news">
                        <a href="#">
                            <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                            <div className="popular-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores.
                            </div>
                        </a>
                    </div>
                    <div className="popular-news">
                        <a href="#">
                            <img src="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" alt="..."/>
                            <div className="popular-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores.
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
