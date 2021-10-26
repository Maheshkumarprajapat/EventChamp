import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Travel() {
    return (
        <div>
            <div className="travel_section">
                <div className="travel_content">
                    <Container>
                        <Row>
                            <Col lg={12}>

                                <div className="travel_input">

                                    <div className="travel_input_box tab">
                                        <input type="email" name="EMAIL" placeholder="Enter email address" required="" />
                                    </div>

                                    <div className="travel_input_box tab">
                                        <input type="email" name="EMAIL" placeholder="Enter your name" required="" />
                                    </div>
                                    <div className="travel_input_box tab">
                                        <input type="email" name="EMAIL" placeholder="Enter your name" required="" />
                                    </div>

                                    <div className="travel_input_box tab">
                                        <div className="travel_button">
                                            <a href="/" className="travel_btn btn">SUBMIT</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col lg={4} md={6} className="tab">
                            <div className="travel_card">
                                <div className="travel_card_img">
                                    <div className="travel_card_button">
                                        <a href="/" className="travel_card_btn btn">Upcoming</a>
                                        <a href="/" className="travel_card_btn btn">Upcoming</a>
                                    </div>
                                    <div className="travel_button">
                                        
                                    </div>
                                    {/* <img src={require('')} alt="" className="img-fluid" /> */}
                                </div>

                                <div className="travel_card_text">
                                    <h5>Megeve Winter Party</h5>
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
