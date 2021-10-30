import React from 'react';
import {  Row, Col, Form } from 'react-bootstrap';
export default function CommentFrom() {
    return (
         <div className="party_comment section_padding">
         <div className="party_comment_title">
             <h4>Leave a Comment</h4>
         </div>
         <div className="newsletter_content">
             <Form>
                 <Form.Control as="textarea" placeholder="Your Comment" className="tab" style={{ height: '150px' }} />
                 <Row>

                     <Col className="newsletter_input">
                         <Form.Control placeholder="Name" className="newsletter_input_name" />
                     </Col>
                     <Col className="newsletter_input">
                         <Form.Control placeholder="Email" className="newsletter_input_name" />
                     </Col>
                     <Col className="newsletter_input">
                         <Form.Control placeholder="Website URl" className="newsletter_input_name" />
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

             <div className="newsletter_button">
                 <button className="btn-border">Post Comment</button>
             </div>
         </div>
     </div>
    )
}
