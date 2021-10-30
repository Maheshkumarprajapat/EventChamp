import React from 'react';
import {Container, Row, Col, Card, Tabs, Tab} from 'react-bootstrap';
import './party.scss';
import PartyBox from '../../../components/PartyBox';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegEnvelope, FaRegStar, FaRegCalendarAlt, FaCheckCircle, FaMapMarkerAlt, FaMapMarkedAlt, FaRegUser, FaRegFolderOpen, FaPhoneAlt, FaFax, FaTicketAlt, FaShareAlt } from "react-icons/fa";
import InnerBanner from '../../../components/InnerBanner/InnerBanner';
import CommentFrom from '../../../components/CommentFrom';
import Schedule from '../../../components/Schedule';
import Tickets from '../../../components/Tickets';
import Map from '../../../components/Map';
import Tour from '../../../components/Tour';
import Faq from '../../../components/Faq';
import Contact from '../../../components/Contact';



export default function Party() {
    return (
        <>
            <InnerBanner title='Megeve Winter Party' />  <div className="party_section section_padding">

                <Container fluid>
                    <Row>
                        <Col lg={8} md={12}>
                            {/* Party Content Section Start */}
                            <div className="party_content">
                                <div className="party_content_img">
                                    <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/uploads/2018/11/event-18-1130x650.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="party_content_box">
                                    <div className="party_content_text">
                                        <p>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto. Ea movet saperet rationibus sit, pri autem aliquip invidunt an. Consetetur omittantur consequuntur eos et. <b> Eleifend praesent iudicabit no mea, tollit persequeris ex pri, tota splendide voluptaria in pri </b>. Ad per tale aliquip, ei sit viris commune albucius. Eos aliquip scaevola ut, eum alii mentitum prodesset no, his ne suas atomorum. Et numquam deleniti ponderum vis, quod error at mei. Novum blandit adolescens sea te. Ea eum cetero scaevola.</p>
                                        <p>In his meis porro viris, illud imperdiet reprimique et vim. Feugiat atomorum reprehendunt vix ei, ei facete regione pri. Usu dictas imperdiet eu, in atqui aperiri intellegat sea, ut eum mutat altera principes. Te sit quaeque oportere, has modus inani ceteros ad. Impedit blandit deseruisse duo ea, ne graecis deleniti incorrupte usu. Ut mei splendide accommodare. An pri iisque meliore, eam ei splendide eloquentiam philosophia. <u>Ne per meis eleifend electram</u>. Ne eam porro aliquam invidunt. Minim docendi eloquentiam cum ad. Quo ea mazim ubique, ex est fuisset blandit scaevola. Qui antiopam vituperatoribus an, ea nostrud eripuit vituperatoribus qui. In eam diam nominati, per ea alia luptatum. <span>Nam habemus electram democritum ut.</span> Mei ea omnium admodum intellegat. Habeo atqui molestiae at mei, an nec ridens consequuntur. Quem nulla cum ei, his ipsum apeirian no, per at eius iriure aperiri. Sed dicam interesset ei. Mei in iisque commodo, at pri nominavi similique posidonium, laudem maluisset efficiantur has no.</p>
                                        <p>His verterem consectetuer consequuntur ne, no virtute atomorum usu. <b>Eu quo nemore causae tacimates, eos viderer persequeris an</b>. Cu molestie consulatu qui. Natum labores perfecto no ius, pri dico mundi inciderint id. Ei usu dico libris postea. Cu graeco doctus splendide qui, ei eum probo regione.</p>
                                    </div>
                                    <div className="party_button">
                                        <a href="/" className="party_btn btn">Business</a>
                                        <a href="/" className="party_btn btn">Conference</a>
                                        <a href="/" className="party_btn btn">Events</a>
                                        <a href="/" className="party_btn btn">Hotel</a>
                                        <a href="/" className="party_btn btn">Meetup</a>
                                    </div>
                                    <div className="party_icons">
                                        <h5>Share This Event</h5>
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
                                            <li>
                                                <a href="/"> <i><FaRegEnvelope /></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Party Content Section End */}

                            {/* Party Tabs Section Start */}
                            <div className="party_tabs tab">
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="schedule" title="Schedule">
                                        <Schedule/>
                                    </Tab>
                                    
                                    <Tab eventKey="tickets" title="Tickets">
                                        <Tickets/>
                                    </Tab>
                                    <Tab eventKey="map" title="Map">
                                        <Map />
                                    </Tab>
                                    <Tab eventKey="tour" title="Tour">
                                        <Tour/>
                                    </Tab>
                                    <Tab eventKey="faq" title="Faq">
                                        <Faq/>
                                    </Tab>
                                    <Tab eventKey="contact" title="Contact">
                                       <Contact />
                                    </Tab>
                                </Tabs>
                            </div>
                            {/* Party Tabs Section End */}

                            <CommentFrom />

                        </Col>

                        <Col lg={4} md={12}>
                            {/* Party Details Section Start */}
                            <div className="party_details">
                                <div className="party_details_title">
                                    <h4>Event Details</h4>
                                    <div className="party_title_icon">
                                        <span> <FaRegStar /> 1 </span>
                                        <span> <FaRegStar />  </span>
                                    </div>
                                </div>
                                <div className="party_details_box">
                                    <PartyBox title='Start Date' time='January 17, 2022 12:00 pm' icon={<FaRegCalendarAlt />} />
                                    <PartyBox title='End Date' time='June 25, 2022 10:45 pm' icon={<FaRegCalendarAlt />} />
                                    <PartyBox title='Status' time='Upcoming' icon={<FaCheckCircle />} />
                                    <PartyBox title='Location' time='Megeve' icon={<FaMapMarkerAlt />} />
                                    <PartyBox title='Venue' time='Megeve' icon={<FaMapMarkedAlt />} />
                                    <PartyBox title='Organizer' time='Jeffrey Pyle' icon={<FaRegUser />} />
                                    <PartyBox title='Category' time='Travel' icon={<FaRegFolderOpen />} />
                                    <PartyBox title='Address' time='Megeve, France' icon={<FaMapMarkerAlt />} />
                                    <PartyBox title='Phone' time='0674 987 665' icon={<FaPhoneAlt />} />
                                    <PartyBox title='Email' time='event@gloriathemes.com' icon={<FaRegEnvelope />} />
                                    <PartyBox title='Fax' time='9123 598 453' icon={<FaFax />} />
                                    <PartyBox title='Remaining Tickets' time='370 Tickets' icon={<FaTicketAlt />} />
                                    <PartyBox title='Network' icon={<FaShareAlt />} iconf={<FaFacebookF />} icont={<FaTwitter />} iconi={<FaInstagram />} icony={<FaYoutube />} />

                                    <PartyBox title='Fax' time='9123 598 453' icon={<FaFax />} />
                                </div>
                            </div>
                            {/* Party Details Section End */}


                            {/* Party Sponsors Section Start */}
                            <div className="party_sponsors">
                                <div className="party_sponsors_title">
                                    <h4>Sponsors</h4>
                                </div>
                                <div className="party_sponsors_box">
                                    <Row>
                                        <Col lg={6} md={12}>
                                            <div className="party_sponsors_box_img tab">
                                                <img src={require('../../../Assets/images/Categoriespages/party/1.webp').default} className="img-fluid" alt="" />
                                            </div>
                                        </Col>

                                        <Col lg={6} md={12}>
                                            <div className="party_sponsors_box_img tab">
                                                <img src={require('../../../Assets/images/Categoriespages/party/2.webp').default} className="img-fluid" alt="" />
                                            </div>
                                        </Col>

                                        <Col lg={6} md={12}>
                                            <div className="party_sponsors_box_img tab">
                                                <img src={require('../../../Assets/images/Categoriespages/party/3.webp').default} className="img-fluid" alt="" />
                                            </div>
                                        </Col>

                                        <Col lg={6} md={12}>
                                            <div className="party_sponsors_box_img tab">
                                                <img src={require('../../../Assets/images/Categoriespages/party/4.webp').default} className="img-fluid" alt="" />
                                            </div>
                                        </Col>

                                        <Col lg={6} md={12}>
                                            <div className="party_sponsors_box_img tab">
                                                <img src={require('../../../Assets/images/Categoriespages/party/5.webp').default} className="img-fluid" alt="" />
                                            </div>
                                        </Col>

                                        <Col lg={6} md={12}>
                                            <div className="party_sponsors_box_img tab">
                                                <img src={require('../../../Assets/images/Categoriespages/party/6.webp').default} className="img-fluid" alt="" />
                                            </div>
                                        </Col>


                                    </Row>
                                </div>
                            </div>
                            {/* Party Sponsors Section End */}

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            {/* Party Event Card Section Satrt */}
                            <div className="party_event_section">
                                <div className="section-title">
                                    <div className="title-heading">
                                        Related  <span>Events</span>
                                    </div>
                                    <div className="title-border">
                                        <div className="title-icon">
                                            <FaRegCalendarAlt />
                                        </div>
                                    </div>
                                    <div className="title-text">You might also love these events.</div>
                                </div>

                                <div className="party_event_card">
                                    <Row>
                                        <Col lg={4} md={6} className="tab">
                                            <Card>
                                                <Card.Img variant="top" src={require('../../../Assets/images/Categoriespages/party/7.webp').default} alt="" />
                                                <Card.Body>
                                                    <Card.Title>LA Beach Picnic</Card.Title>
                                                    <div className="party_event_card_btn">
                                                        <a href="/" className="events_btn btn">Food</a>
                                                        <p><span><FaRegCalendarAlt /></span>August 1, 2022</p>
                                                    </div>
                                                    <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                                                    <div className="party_event_card_icon">
                                                        <p> <span><FaRegCalendarAlt /></span> Showing</p>
                                                        <p><span><FaMapMarkerAlt /></span> California</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg={4} md={6} className="tab">
                                            <Card>
                                                <Card.Img variant="top" src={require('../../../Assets/images/Categoriespages/party/8.webp').default} alt="" />
                                                <Card.Body>
                                                    <Card.Title>Walking on the Village Mountain</Card.Title>
                                                    <div className="party_event_card_btn">
                                                        <a href="/" className="events_btn btn">Travel</a>
                                                        <p><span><FaRegCalendarAlt /></span>March 14, 2022</p>
                                                    </div>
                                                    <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                                                    <div className="party_event_card_icon">
                                                        <p> <span><FaRegCalendarAlt /></span> Showing</p>
                                                        <p><span><FaMapMarkerAlt /></span> Munich</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg={4} md={6} className="tab">
                                            <Card>
                                                <Card.Img variant="top" src={require('../../../Assets/images/Categoriespages/party/9.webp').default} alt="" />
                                                <Card.Body>
                                                    <Card.Title>Friendship Dinner</Card.Title>
                                                    <div className="party_event_card_btn">
                                                        <a href="/" className="events_btn btn">Food</a>
                                                        <p><span><FaRegCalendarAlt /></span>March 17, 2022</p>
                                                    </div>
                                                    <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                                                    <div className="party_event_card_icon">
                                                        <p> <span><FaRegCalendarAlt /></span> Showing</p>
                                                        <p><span><FaMapMarkerAlt /></span> Istanbul</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            {/* Party Event Card Section End */}

                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}
