import React from "react";
import {MDBIcon} from "mdb-react-ui-kit";

const Footer = ()=>{
    return(
        <>
            <div className="cursosSoftware">
                <div className="cursos-content">
                    <h4>Online Courses and Software</h4>
                    <div>
                        <article className="curso">
                            <a href="#">
                                <img src="https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664__340.jpg" alt="..."/>
                                <div><b>Title</b></div>
                                <div className="contenidoCurso">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi
                                    delectus deserunt dignissimos ducimus et, exercitationem fugit id ipsa
                                </div>
                            </a>
                        </article>
                        <article className="curso">
                            <a href="#">
                                <img src="https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664__340.jpg" alt="..."/>
                                <div><b>Title</b></div>
                                <div className="contenidoCurso">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi
                                    delectus deserunt dignissimos ducimus et, exercitationem fugit id ipsa
                                </div>
                            </a>
                        </article>
                        <article className="curso">
                            <a href="#">
                                <img src="https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664__340.jpg" alt="..."/>
                                <div><b>Title</b></div>
                                <div className="contenidoCurso">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi
                                    delectus deserunt dignissimos ducimus et, exercitationem fugit id ipsa
                                </div>
                            </a>
                        </article>
                        <article className="curso">
                            <a href="#">
                                <img src="https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664__340.jpg" alt="..."/>
                                <div><b>Title</b></div>
                                <div className="contenidoCurso">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi
                                    delectus deserunt dignissimos ducimus et, exercitationem fugit id ipsa
                                </div>
                            </a>
                        </article>
                    </div>
                </div>
            </div>
            <div className="newsletter-email" id="newsletter-email">
                <div>
                    <form>
                        <h3>Cybersecurity Newsletter — Stay Informed</h3>
                        <p>Sign up for cybersecurity newsletter and get latest news updates delivered straight
                            to your inbox daily.</p>
                        <div className="input-mail">
                            <input  type="email" placeholder="Enter your email address"/>
                            <button></button>
                        </div>
                    </form>
                </div>
            </div>
            <footer>
                <div className="footer-box">
                    <h4>Follow Us</h4>
                    <div className="fw-box">
                        <div className="social">
                            <a href="#">
                                <div className="i-twitter">
                                    <MDBIcon fab icon="twitter" />
                                </div>
                                <article className="n-follow">780,100 Followers</article>
                            </a>
                        </div>
                        <div className="social">
                            <a href="#">
                                <div className="i-facebook">
                                    <MDBIcon fab icon="facebook-f" />
                                </div>
                                <article className="n-follow">1,985,000 Followers</article>
                            </a>
                        </div>
                        <div className="social">
                            <a href="#">
                                <div className="i-linkedin">
                                    <MDBIcon fab icon="linkedin-in" />
                                </div>
                                <article className="n-follow">780,100 Followers</article>
                            </a>
                        </div>
                        <div className="social">
                            <a href="#">
                                <div className="i-youtube">
                                    <MDBIcon fab icon="youtube" />
                                </div>
                                <article className="n-follow">780,100 Followers</article>
                            </a>
                        </div>
                        <div className="social">
                            <a href="#">
                                <div className="i-instagram">
                                    <MDBIcon fab icon="instagram" />
                                </div>
                                <article className="n-follow">780,100 Followers</article>
                            </a>
                        </div>
                    </div>
                    <div className="f-menu">
                        <div className="f-menu-op1">
                            <h5>About</h5>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Editorial Team</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="f-menu-op2">
                            <h5>Pages</h5>
                            <ul>
                                <li><a href="#">RSS Feeds</a></li>
                                <li><a href="#">Deals Store</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Jobs</a></li>
                            </ul>
                        </div>
                        <div className="f-menu-op3">
                            <h5>Deals</h5>
                            <ul>
                                <li><a href="#">Exclusives</a></li>
                                <li><a href="#">Hacking</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Android</a></li>
                            </ul>
                        </div>
                        <div className="f-menu-op4">
                            <a href="#"><MDBIcon fas icon="rss" /> RSS Feeds</a>
                            <a href="#"><MDBIcon fas icon="envelope" /> Contact Us</a>
                            <a href="#"><MDBIcon fab icon="telegram" /> Telegram</a>
                        </div>
                    </div>
                    <hr/>
                    <div className="copyR">The Hacker News, 2022</div>
                </div>
            </footer>
        </>
    )
}

export default Footer
