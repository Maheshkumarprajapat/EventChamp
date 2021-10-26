import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaFolder, FaPhoneAlt, FaUser, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegCalendarAlt, FaApple, FaGooglePlay, FaWindows, FaAmazon } from "react-icons/fa";
import './contact.scss';
export default function Contact() {
    return (
        <>
            <section className="contact_section contact_section_padding">
                <Container>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="contact_content">
                                <div className="contact_number">
                                    <h4>Contact</h4>
                                    <div className="contact_content_box">
                                        <div className="contact_content_box_add">
                                            <p><span><FaMapMarkerAlt /></span> Walking Street, Los Angeles, California, USA</p>
                                        </div>
                                        <div className="contact_content_box_email">
                                            <p><span><FaFolder /></span> info@eventchamp.com</p>
                                        </div>
                                        <div className="contact_content_box_phone">
                                            <p><span><FaPhoneAlt /></span> +90 312 69 12</p>
                                        </div>
                                        <div className="contact_content_box_id">
                                            <p><span><FaUser /></span> +55 215 70 20</p>
                                        </div>
                                        <div className="contact_content_box_icons">
                                            <ul>
                                                <li>
                                                    <a href="/"><i><FaFacebookF /></i></a>
                                                </li>
                                                <li>
                                                    <a href="/"> <i> <FaTwitter /></i></a>
                                                </li>
                                                <li>
                                                    <a href="/"><i><FaInstagram /></i></a>
                                                </li>
                                                <li>
                                                    <a href="/"> <i><FaYoutube /></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="contact_content">
                                <h4>LATEST POSTS</h4>
                                <div className="contact_post">
                                    <div className="contact_post_box">
                                        <div className="contact_post_box_img">
                                            {/* <img src={require('../../Assets/images/Footer/1.webp').default} alt="" className="img-fluid" /> */}
                                        </div>
                                        <div className="contact_post_box_text">
                                            <h6>Top 20 Event and Conference Countries</h6>
                                            <p><span> <FaRegCalendarAlt /></span> November 23, 2018</p>
                                        </div>
                                    </div>

                                    <div className="contact_post_box">
                                        <div className="contact_post_box_img">
                                            {/* <img src={require('../../Assets/images/Footer/2.webp').default} alt="" className="img-fluid" /> */}
                                        </div>
                                        <div className="contact_post_box_text">
                                            <h6>Budgets for Business Events</h6>
                                            <p><span> <FaRegCalendarAlt /></span> November 23, 2018</p>
                                        </div>
                                    </div>

                                    <div className="contact_post_box">
                                        <div className="contact_post_box_img">
                                            {/* <img src={require('../../Assets/images/Footer/3.webp').default} alt="" className="img-fluid" /> */}
                                        </div>
                                        <div className="contact_post_box_text">
                                            <h6>5 Ideas for Fun Family Activities</h6>
                                            <p><span> <FaRegCalendarAlt /></span> November 23, 2018</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={12}>
                            <div className="contact_content">
                                <div className="contact_app">
                                    <h4>OUR APPS</h4>
                                    <div className="contact_app_box">
                                        <div className="contact_app_box_text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Maecenas et ultrices massa, sed porta dui </b> lobortis tincidunt. Sed diam nonummy nibh euismod.</p>
                                        </div>
                                        <Row>
                                            <Col lg={6} md={6} className="tab">
                                                <div className="contact_app_box_icons">
                                                    <div className="contact_app_box_icons_icon">
                                                        <span><FaApple /></span>
                                                    </div>
                                                    <div className="contact_app_box_icons_text">
                                                        <span className="name">Download via</span>
                                                        <span className="app-name">Apple Store</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} className="tab">
                                                <div className="contact_app_box_icons">
                                                    <div className="contact_app_box_icons_icon">
                                                        <span>< FaGooglePlay /></span>
                                                    </div>
                                                    <div className="contact_app_box_icons_text">
                                                        <span className="name">Download via</span>
                                                        <span className="app-name">Google Play</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col lg={6} md={6} className="tab">
                                                <div className="contact_app_box_icons">
                                                    <div className="contact_app_box_icons_icon">
                                                        <span><FaWindows /></span>
                                                    </div>
                                                    <div className="contact_app_box_icons_text">
                                                        <span className="name">Download via</span>
                                                        <span className="app-name">Windows</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={6} md={6} className="tab">
                                                <div className="contact_app_box_icons">
                                                    <div className="contact_app_box_icons_icon">
                                                        <span>< FaAmazon /></span>
                                                    </div>
                                                    <div className="contact_app_box_icons_text">
                                                        <span className="name">Download via</span>
                                                        <span className="app-name">Amazon</span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="copyright_section">
                    <Container>
                        <div className="copyright_content">
                            <h4>Eventchamp</h4>
                            <p>Copyright © 2021 Eventchamp - All rights reserved.</p>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}