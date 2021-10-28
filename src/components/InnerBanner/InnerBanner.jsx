import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

export default function InnerBanner({title}) {
    return (
        <div className="inner_banner">
            <div className="inner_banner_tab">
                <div className="inner_background">
                    <img src="https://demo.gloriathemes.com/eventchamp/demo/wp-content/themes/eventchamp/include/assets/img/breadcrumbs-bg.jpg" alt="" />
                </div>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="inner_banner_content">
                                <h1>{title}</h1>
                                <div class="inner_banner_breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol>
                                            <li class="inner_banner_item"><a href="/">Home</a></li>
                                            <li class="inner_banner_item"><a href="/">Events</a></li>
                                            <li class="inner_banner_item current">Megeve Winter Party</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}
