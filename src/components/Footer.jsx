import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithub, FaHome } from "react-icons/fa";
import { FaXTwitter, FaGoogle, FaInstagram, FaWhatsapp  } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='text-center text-lg-start text-white' style={{ backgroundColor: '#1c2331' }}>
            {/* Section pour les réseaux sociaux */}
            <section className='d-flex justify-content-between p-4' style={{ backgroundColor: '#6351ce' }}>
                {/*  Left */}
                <div className="me-5">
                    <span>Connectez-vous avec nous sur les réseaux sociaux :</span>
                </div>
                {/* Right */}
                <div>
                    <a href="" className="text-white me-4">
                        <FaFacebook />
                    </a>
                    <a href="" className="text-white me-4">
                        <FaXTwitter />
                    </a>
                    <a href="" className="text-white me-4">
                        <FaGoogle />
                    </a>
                    <a href="" className="text-white me-4">
                        <FaInstagram />
                    </a>
                    <a href="" className="text-white me-4">
                        <FaLinkedinIn />
                    </a>
                    <a href="" className="text-white me-4">
                        <FaGithub />
                    </a>
                </div>
            </section>
            {/* Section des lien utils */}
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className='mt-3 row'>
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className='text-uppercase fw-bold'>Ai-Education</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                            />
                            <p>
                                AI-Edu révolutionne l'éducation en intégrant l'intelligence artificielle pour une expérience
                                d'apprentissage interactive et efficace, favorisant la croissance et l'exploration.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className='text-uppercase fw-bold'>Services</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                            />
                            <p>
                                <a href='#cours' className='text-white'>Cours</a>
                            </p>
                            <p>
                                <a href='#exercices' className='text-white'>Exercices</a>
                            </p>
                            <p>
                                <a href='#communauty' className='text-white'>Communauté pédagogique</a>
                            </p>
                            <p>
                                <a href='#interaction' className='text-white'>Intéraction</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className='text-uppercase fw-bold'>LIENS UTILS</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                            />
                            <p>
                                <a href="#account" className="text-white text-decoration-none">Votre compte</a>
                            </p>
                            <p>
                                <a href="#ensegnant" className="text-white text-decoration-none">Espace Enseignant</a>
                            </p>
                            <p>
                                <a href="#about" className="text-white text-decoration-none">Qui sommes nous ?</a>
                            </p>
                            <p>
                                <a href="#help" className="text-white text-decoration-none">Aide</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className='text-uppercase fw-bold'>contactez-nous</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                            />
                            <p>
                                <FaHome className='mx-2 fs-4' />
                                Campus Mghilla, BP 523 , 23000 Béni Mellal
                            </p>
                            <p>
                                <MdOutlineEmail className='mx-2 fs-4' />
                                education.ai@gmail.com
                            </p>
                            <p>
                                <FaWhatsapp  className='mx-2 fs-4' />
                                + 212 661 00 00 00
                            </p>
                            <p>
                                <BsFillTelephoneFill className='mx-2 fs-4' />
                                + 212 534 567 89
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </footer >
    )
}

export default Footer