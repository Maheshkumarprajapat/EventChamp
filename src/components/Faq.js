import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import AccordionTabs from './AccordionTabs';


export default function Faq() {
    return (
        <>
            <div className="faq_section">
                <Accordion>
                    <AccordionTabs title="Proin lacinia placerat est et euismod?" eventKey="1" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non posuere dolor, ut fermentum enim. Nullam quis molestie purus. Nam leo turpis, scelerisque in convallis ac, accumsan a lacus. Sed laoreet arcu in odio auctor commodo qisque et mi lacinia." />
                    <AccordionTabs title="Lorem ipsum dolor sit amet? " eventKey="2" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non posuere dolor, ut fermentum enim. Nullam quis molestie purus. Nam leo turpis, scelerisque in convallis ac, accumsan a lacus. Sed laoreet arcu in odio auctor commodo qisque et mi lacinia." />
                    <AccordionTabs title="Consectetur adipiscing elit?" eventKey="3" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non posuere dolor, ut fermentum enim. Nullam quis molestie purus. Nam leo turpis, scelerisque in convallis ac, accumsan a lacus. Sed laoreet arcu in odio auctor commodo qisque et mi lacinia." />
                    <AccordionTabs title="Sed ut perspiciatis unde omnis iste natus?" eventKey="4" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non posuere dolor, ut fermentum enim. Nullam quis molestie purus. Nam leo turpis, scelerisque in convallis ac, accumsan a lacus. Sed laoreet arcu in odio auctor commodo qisque et mi lacinia." />
                    <AccordionTabs title="Sed laoreet arcu in odio auctor commodo?" eventKey="5" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non posuere dolor, ut fermentum enim. Nullam quis molestie purus. Nam leo turpis, scelerisque in convallis ac, accumsan a lacus. Sed laoreet arcu in odio auctor commodo qisque et mi lacinia." />

                </Accordion>
            </div>
        </>
    )
}
