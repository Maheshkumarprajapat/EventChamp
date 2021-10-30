import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FaSortDown } from "react-icons/fa";

export default function AccordionTabs({title, eventKey, desc}) {
    return (
        <Card className="tab">
        <Card.Header className="tab">
            <Accordion.Toggle eventKey={eventKey} >
                <h6>{title}</h6>
                <span className="down_arrow"><FaSortDown /></span>
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKey}>
            <div className="accordion_text">
                <p>{desc}</p>
            </div>
        </Accordion.Collapse>
    </Card>
    )
}
