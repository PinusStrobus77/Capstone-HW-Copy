import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub } from 'react-icons/fa';
import FunFact from './FunFact';
import Button from "react-bootstrap/esm/Button";
const About = () =>{
return (
    <div>
        {/* //section one "about" landing page */}
        <section id="section-one">
            <header className="container-fluid" id="about">
                <div className="container-fluid text-center">
                    <div className="display-7" id="first-icons">
                    <a href="https://www.artworkscincinnati.org/mural/the-hands-that-built-our-city/" target="_blank" rel="noopener noreferrer"><Button variant="info"><i className="bi bi-info-lg"></i></Button></a>
                    <br />
                    <a href="/about#section-two">
                        <FaArrowDown className="icons" />
                    </a>
                   </div> 
                   </div>
                    </header>
                    </section>
                    <br /> <br />

            {/* section two about Cincinnati */}
        <section id="section-two">
        <div className="container-fluid text-center">
                <a href="/about#section-one">
                    <FaArrowUp className="icons" />
                    </a>
                    <p id="content-two">Known for it's spaghetti chili, flying pigs, and world-famous hippos, Cincinnati is the place to be to experience a variety of cultures, art, food, and history. Click the dice below to learn some fun facts about our city. </p>
                    {/* dice for fun fact generator*/}
                    <div id= "dice" className="container-fluid justify-content"><FunFact /></div>
                    <a href="/about#section-three">
                        <FaArrowDown className="icons" />
                    </a>
                </div>
            </section>
            <br /> <br /> <br />

            {/* //section three: info about group */}
            <section id="section-three">
                <div className="container-fluid text-center" id="card-group">
                <div className="row"><div className="col-12 text-center">
                    <a href="/about#section-two">
                        <FaArrowUp className="icons" />
                    </a>
                    <h2 className="team-header">Capstone Team</h2>
                    <br /></div></div><div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2">
                    <div className="card h-100" id="card-inside">
                        <img className="card-img-top h-150" src="https://drive.google.com/uc?export=view&id=1yiMe4SE_qay6ZMM0NINVa2OAFqp8HjpQ" alt="Eliane Bettocchi" />
                        <div className="card-body">
                            <h5 className="card-title">Eliane Bettocchi</h5>
                            <br />
                            <div className="container" id="social">
                                <a href="https://www.linkedin.com/in/lilith/" target="_blank">
                                    <FaLinkedin className="icons" />
                                </a>
                                <a href="https://github.com/elianebettocchi" target="_blank">
                                    <FaGithub className="icons" />
                                </a>
                                <a href="https://elianebettocchi.github.io/portfolio/" target="_blank">
                                    <FaLink className="icons" />
                                </a>
                            </div>
                        </div>
                    </div></div>
                    <div className="col-lg-2">
                    <div className="card h-100" id="card-inside">
                        <img className="card-img-top h-200" src="https://drive.google.com/uc?export=view&id=1WObYakmif0wZOnsc240I1dZ1ojJHXtJ5" alt="Stephanie Cueto" />
                        <div className="card-body">
                            <h5 className="card-title">Stephanie Cueto</h5>
                            <br />
                            <div className="container" id="social">
                                <a href="https://www.linkedin.com/in/stephanie-cueto/" target="_blank">
                                    <FaLinkedin className="icons" />
                                </a>
                                <a href="https://github.com/sxcueto" target="_blank">
                                    <FaGithub className="icons" />
                                </a>
                                <a href="https://sxcueto.github.io/portfolio2/" target="blank">
                                    <FaLink className="icons" />
                                </a>
                            </div>
                        </div>
                    </div></div>
                    <div className="col-lg-2">
                    <div className="card h-100" id="card-inside">
                        <img className="card-img-top img-fluid" src="/" alt="Robert Head" />
                        <div className="card-body">
                            <h5 className="card-title">Robert Head</h5>
                            <br />
                            <div className="container" id="social">
                                <a href="/">
                                    <FaLinkedin className="icons" />
                                </a>
                                <a href="https://github.com/PinusStrobus77" target="_blank">
                                    <FaGithub className="icons" />
                                </a>
                                <a href="/">
                                    <FaLink className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div></div></div>
            </section>

            <br />
            <br />


        </div>
    )
}

export default About;