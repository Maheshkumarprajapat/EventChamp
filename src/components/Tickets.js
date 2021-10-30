import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa";

export default function Tickets() {
    return (
        <>
            <div className="tickets_section">
                <Container>
                    <Row>
                        <Col lg={6} md={6} className="tab">
                            <div className="tickets_box">
                                <div className="tickets_title">
                                    <h4>Personal</h4>
                                    <span>$29</span>
                                </div>
                                <div className="tickets_text">
                                    <p><span> <FaCheck /> </span> Lorem ipsum dolor sit amet.</p>
                                    <p><span> <FaCheck /> </span> Vestibulum vitae orci tortor.</p>
                                    <p><span> <FaCheck /> </span> Ea movet saperet rationibus.</p>
                                    <p><span> <FaCheck /> </span> Usu dictas imperdiet eu.</p>
                                </div>
                                <Col className="travel_input">
                                    <select id="mySelect">
                                        <option id="Travel">Travel</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                    </select>
                                </Col>
                                <div className="newsletter_button">
                                    <button className="btn-border">BUY NOW</button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="tab">
                            <div className="tickets_box">
                                <div className="tickets_title">
                                    <h4>Personal</h4>
                                    <span>$29</span>
                                </div>
                                <div className="tickets_text">
                                    <p><span> <FaCheck /> </span> Lorem ipsum dolor sit amet.</p>
                                    <p><span> <FaCheck /> </span> Vestibulum vitae orci tortor.</p>
                                    <p><span> <FaCheck /> </span> Ea movet saperet rationibus.</p>
                                    <p><span> <FaCheck /> </span> Usu dictas imperdiet eu.</p>
                                </div>
                                <Col className="travel_input">
                                    <select id="mySelect">
                                        <option id="Travel">Travel</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                    </select>
                                </Col>
                                <div className="newsletter_button">
                                    <button className="btn-border">BUY NOW</button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="tab">
                            <div className="tickets_box">
                                <div className="tickets_title">
                                    <h4>Personal</h4>
                                    <span>$29</span>
                                </div>
                                <div className="tickets_text">
                                    <p><span> <FaCheck /> </span> Lorem ipsum dolor sit amet.</p>
                                    <p><span> <FaCheck /> </span> Vestibulum vitae orci tortor.</p>
                                    <p><span> <FaCheck /> </span> Ea movet saperet rationibus.</p>
                                    <p><span> <FaCheck /> </span> Usu dictas imperdiet eu.</p>
                                </div>
                                <Col className="travel_input">
                                    <select id="mySelect">
                                        <option id="Travel">Travel</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                    </select>
                                </Col>
                                <div className="newsletter_button">
                                    <button className="btn-border">BUY NOW</button>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={6} className="tab">
                            <div className="tickets_box">
                                <div className="tickets_title">
                                    <h4>Personal</h4>
                                    <span>$29</span>
                                </div>
                                <div className="tickets_text">
                                    <p><span> <FaCheck /> </span> Lorem ipsum dolor sit amet.</p>
                                    <p><span> <FaCheck /> </span> Vestibulum vitae orci tortor.</p>
                                    <p><span> <FaCheck /> </span> Ea movet saperet rationibus.</p>
                                    <p><span> <FaCheck /> </span> Usu dictas imperdiet eu.</p>
                                </div>
                                <Col className="travel_input">
                                    <select id="mySelect">
                                        <option id="Travel">Travel</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                        <option id="Jaipur">Jaipur</option>
                                    </select>
                                </Col>
                                <div className="newsletter_button">
                                    <button className="btn-border">BUY NOW</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
