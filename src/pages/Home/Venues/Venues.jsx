import React from 'react';
import Heading from "../../../components/Heading";
import { Container, Row, Col } from 'react-bootstrap';
import './venues.scss'
export default function Venues({ data }) {
    return (
        <>
            <section className="venues_section section_padding">
                <Container fluid>
                    <Heading desc={data ? data.desc : "loading"} ttl2={data ? data.ttl2 : "loading"} ttl1={data ? data.ttl1 : "loading"} />
                    <Row>

                        {
                            data ? data.Venuesbox.map((item, index) => {
                                return (
                                    <Col lg={4} md={6} key={index} className="tab">
                                        <div className="venues_content">
                                            <div className="venues_img">
                                            <div className="venues_button">
                                                <a href="/" className="venues_btn btn">{item.btn}</a>
                                            </div>
                                                <img src={item.img} alt="" className="img-fluid" />
                                            </div>
                                            
                                            <div className="venues_text">
                                                <h5>{item.title}</h5>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                                : "loading"}
                    </Row>
                </Container>
            </section>
        </>
    )
}
