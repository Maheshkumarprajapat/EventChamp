import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FaSortDown, FaGooglePlay } from "react-icons/fa";

export default function ScheduleDay1() {
    return (
        <>
            <div className="faq_section">
                <Accordion>
                    <Card className="tab">
                        <Card.Header className="tab">
                            <Accordion.Toggle eventKey="1">
                                <div className="ScheduleDay1_date">November 17, 2019</div>
                                <div className="ScheduleDay1_time">12:00</div>
                                <h6>Nunc non ligula eu massa venenatis</h6>
                                <span className="down_arrow"><FaSortDown /></span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <div className="accordion_text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea inventore porro, officia autem eligendi aliquid adipisci tempore dicta tempora.</p>
                                <div className="ScheduleDay1_box">
                                    <h6>Speakers:</h6>
                                    <div className="ScheduleDay1_item">
                                        <div className="ScheduleDay1_img">
                                            <img src={require('../Assets/images/Categoriespages/accordion/1.webp').default} className="img-fluid" alt="" />
                                        </div>
                                        <div className="ScheduleDay1_name">Roberto Berry</div>
                                        <div className="ScheduleDay1_profession">Ceo & Founder</div>
                                    </div>
                                </div>
                            </div>

                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>

    )
}
