import React from "react";
import { FaArrowDown, FaArrowUp, FaLinkedin, FaLink, FaGithub, FaDiceD20 } from 'react-icons/fa';
// import FunFact from './FunFact';
const About = () => {
    return (
        <div>
            {/* //section one "about" landing page */}
            <section id="section-one">
                <header className="jumbotron jumbotron-fluid">
                    <div className="container-fluid text-center text-black">
                        <br />
                        <h1 className="display-3" id="about-header"></h1>
                        <br />
                        <a href="/about#section-two">
                            <FaArrowDown />
                        </a>
                    </div>
                </header>
            </section>
<br />
            { /* section two: info about Cincy */}
            <section id="section-two">
                <div className="container-fluid text-center" id="content-two">
                    <a href="/about#section-one">
                        <FaArrowUp />
                    </a>
                    <br />
                    <h2>Cincinnati</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque.</p>
                    <br />
                    {/* {/* dice for fun fact generator will go here (add sound effect?)  */}
                    <div id="factDisplay">
                   <button onClick="newFact()"><FaDiceD20 /></button>
                    </div> <br />

                    <a href="/about#section-three">
                        <FaArrowDown />
                    </a>
                </div>
            </section>
<br /> <br /> <br />
            {/* //section three: info about group */}
            <section id="section-three">
                <div className="row row-cols-sm g-0 container-fluid text-center" id="card-group">
                    <a href="/about#section-two">
                        <FaArrowUp />
                    </a>
                    <h2>Capstone Team</h2>

                    <div class="card h-40 w-25" id="card-inside">
                        <img class="card-img-top" src="/" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Eliane Bettocchi</h5>
                            <br />
                            <div className="container" id="social">
                                <FaLinkedin />
                                <FaGithub />
                                <FaLink />
                            </div>
                        </div>
                    </div>
                    <div class="card h-40 w-25" id="card-inside">
                        <img class="card-img-top" src="/" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Stephanie Cueto</h5>
                            <br />
                            <div className="container" id="social">
                            <FaLinkedin />
                            <FaGithub />
                            <FaLink />
                        </div>
                        </div>
                    </div>

                    <div class="card h-40 w-25" id="card-inside">
                        <img class="card-img-top" src="/" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Robert Head</h5>
                            <br />
                            <div className="container" id="social">
                                <FaLinkedin />
                                <FaGithub />
                                <FaLink />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <br />
        <br />

            
        </div>
    )
}

export default About;
