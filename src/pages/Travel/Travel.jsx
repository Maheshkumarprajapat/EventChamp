import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './travel.scss';
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


export default function Travel() {
    return (
        <div>
            <div className="travel_section">
                <div className="travel_content">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <form>
                                    <Row>
                                        <Col className="travel_input">
                                            <Form.Control placeholder="First name" className="travel_input_name" />
                                        </Col>
                                        <Col className="travel_input">
                                            <select id="mySelect" placeholder="First name">
                                                <option id="Travel">Travel</option>
                                                <option id="Jaipur">Jaipur</option>
                                                <option id="Jaipur">Jaipur</option>
                                                <option id="Jaipur">Jaipur</option>
                                            </select>
                                        </Col>
                                        <Col className="travel_input">
                                            <select id="mySelect">
                                                <option id="Travel">Travel</option>
                                                <option id="Jaipur">Jaipur</option>
                                                <option id="Jaipur">Jaipur</option>
                                                <option id="Jaipur">Jaipur</option>
                                            </select>
                                        </Col>
                                        <Col className="travel_input">
                                            <div className="travel_button">
                                                <a href="/" className="travel_btn btn">SUBMIT</a>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container fluid className="section_padding">
                    <Row>
                        <Col lg={4} md={6}>
                            <div className="travel_card">
                                <div className="travel_card_img">
                                    <div className="travel_card_button">
                                        <span className="travel_card_btn1 btn">Upcoming</span>
                                        <span className="travel_card_btn2 btn">$150</span>
                                    </div>

                                    <img src={require('../../Assets/images/Categoriespages/travel/2.webp').default} alt="" className="img-fluid" />
                                </div>

                                <div className="travel_card_text">
                                    <h5>Megeve Winter Party</h5>
                                    <div className="travel_card_icon">
                                        <span className="travel_card_icon_btn btn">Travel</span>
                                        <p><span><FaMapMarkerAlt /></span> January 17, 2022 </p>
                                        <p className="icon2"><span><FaRegCalendarAlt /></span> Megeve </p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="travel_card">
                                <div className="travel_card_img">
                                    <div className="travel_card_button">
                                        <span className="travel_card_btn1 btn">Upcoming</span>
                                        <span className="travel_card_btn2 btn">$99</span>
                                    </div>

                                    <img src={require('../../Assets/images/Categoriespages/travel/3.webp').default} alt="" className="img-fluid" />
                                </div>

                                <div className="travel_card_text">
                                    <h5>Walking on the Village Mountain</h5>
                                    <div className="travel_card_icon">
                                        <span className="travel_card_icon_btn btn">Travel</span>
                                        <p><span><FaMapMarkerAlt /></span> March 14, 2022 </p>
                                        <p className="icon2"><span><FaRegCalendarAlt /></span> Munich </p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="travel_card">
                                <div className="travel_card_img">
                                    <div className="travel_card_button">
                                        <span className="travel_card_btn1 btn">Upcoming</span>
                                        <span className="travel_card_btn2 btn">$99</span>
                                    </div>

                                    <img src={require('../../Assets/images/Categoriespages/travel/4.webp').default} alt="" className="img-fluid" />
                                </div>

                                <div className="travel_card_text">
                                    <h5>Table Mountain Cableway</h5>
                                    <div className="travel_card_icon">
                                        <span className="travel_card_icon_btn btn">Travel</span>
                                        <p><span><FaMapMarkerAlt /></span> April 14, 2022 </p>
                                        <p className="icon2"><span><FaRegCalendarAlt /></span> Cape Town </p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6}>
                            <div className="travel_card">
                                <div className="travel_card_img">
                                    <div className="travel_card_button">
                                        <span className="travel_card_btn1 btn">Upcoming</span>
                                        <span className="travel_card_btn2 btn">$150</span>
                                    </div>

                                    <img src={require('../../Assets/images/Categoriespages/travel/5.webp').default} alt="" className="img-fluid" />
                                </div>

                                <div className="travel_card_text">
                                    <h5>Hiking Up to the Griffith Park</h5>
                                    <div className="travel_card_icon">
                                        <span className="travel_card_icon_btn btn">Travel</span>
                                        <p><span><FaMapMarkerAlt /></span> November 17, 2022 </p>
                                        <p className="icon2"><span><FaRegCalendarAlt /></span> California </p>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</p>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </div>
        </div>
    )
}
