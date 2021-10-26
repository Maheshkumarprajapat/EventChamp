import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Heading from "../../../components/Heading";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, } from "react-icons/fa";
import './speakers.scss'
export default function Speakers({ data }) {
    return (
        <>
            <section className="speakers_section section_padding">
                <Container fluid>
                    <Heading desc={data ? data.desc : "loading"} ttl2={data ? data.ttl2 : "loading"} ttl1={data ? data.ttl1 : "loading"} />
                    <Row>


                        {
                            data ? data.Speakersbox.map((item, index) => {
                                return (
                                    <Col lg={4} md={6} key={index} className="tab">
                                        <div className="speakers_section_box">
                                            <div className="speakers_img">
                                                <img src={item.img} alt="" className="img-fluid" />
                                            </div>
                                            <div className="speakers_content">
                                                <h5>{item.title1}</h5>
                                                <h6>{item.title2}</h6>
                                            </div>
                                            <div className="speakers_content_item">
                                                <p>{item.desc}</p>

                                                <div className="speakers_content_item_icons">
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
                                )
                            })
                                : "loading"}
                    </Row>
                </Container>
            </section>
        </>
    )
}
