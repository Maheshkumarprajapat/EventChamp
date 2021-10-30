import React from 'react';
import { Col, Form } from 'react-bootstrap';
export default function CommentFrom() {
    return (
        <div className="party_comment">
            <div className="newsletter_content">
                <Form>
                    <Col className="newsletter_input tab">
                        <Form.Control placeholder="Name" className="newsletter_input_name" />
                    </Col>
                    <Col className="newsletter_input tab">
                        <Form.Control placeholder="Email" className="newsletter_input_name" />
                    </Col>
                    <Col className="newsletter_input tab">
                        <Form.Control placeholder="Subject" className="newsletter_input_name" />
                    </Col>
                    <Col className="newsletter_input tab">
                    <Form.Control as="textarea" placeholder="Your Comment" className="tab"style={{ height: '100px' }}  />
                    </Col>
                    
                </Form>

                <div className="newsletter_checkbox">
                <label>
                    <input type='checkbox' />
                    <span></span>
                    I have agree to the the terms & conditions.
                </label>

                <div className="newsletter_button">
                    <a href="/" className="btn-border">Post Comment</a>
                </div>
            </div>
            </div>
            
        </div>
    )
}
