import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaRegEnvelope } from "react-icons/fa";
import './newsletter.scss'

export default function Newsletter() {
    return (
        <>
            <section className="newsletter_section section_padding">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="newsletter_title">
                                <div className="newsletter_heading">Newsletter</div>
                                <div className="newsletter_border">
                                    <div className="newsletter_icon">
                                        <FaRegEnvelope />
                                    </div>
                                </div>
                                <div className="newsletter_text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa,voluptates.</div>
                            </div>
                            <div className="newsletter_content">
                                    <Form>
                                        <Row>
                                            <Col className="newsletter_input">
                                                <Form.Control placeholder="Enter email address" className="newsletter_input_name" />
                                            </Col>
                                            <Col className="newsletter_input">
                                                <Form.Control placeholder="Enter your name" className="newsletter_input_name" />
                                            </Col>
                                            <Col className="newsletter_input">
                                                <div className="newsletter_button">
                                                    <a href="/" className="newsletter_btn btn">SUBMIT</a>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Form>
                            </div>

                            <div className="newsletter_checkbox">
                                <label>
                                    <input type='checkbox' />
                                    <span></span>
                                    I have agree to the the terms & conditions.
                                </label>
                            </div>

                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}
