import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FaSortDown } from "react-icons/fa";

export default function ScheduleDay2() {
    return (
        <>
            <div className="faq_section">
                <Accordion>
                    <Card className="tab">
                        <Card.Header className="tab">
                            <Accordion.Toggle eventKey="1" >
                                <h6>Lorem ipsum dolor sit amet.</h6>
                                <span className="down_arrow"><FaSortDown /></span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <div className="accordion_text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea inventore porro, officia autem eligendi aliquid adipisci tempore dicta tempora.</p>
                            </div>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </>

    )
}
