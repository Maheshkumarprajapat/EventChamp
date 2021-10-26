import React from "react";
import Heading from "../../../components/Heading";
import { Row, Col, Container } from 'react-bootstrap';
import './categories.scss';
import { Categories1, Categories2, Categories3, Categories4, Categories5, Categories6 } from "../../../Assets/images";
import OwlCarousel from "react-owl-carousel";
export default function Categories({ data }) {
  const Categoriesslider = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,

      }
    },
  };
  return (
    <>
      <section className="categories-section section_padding">
        <Container fluid>
          <Heading desc={data ? data.desc : "loading"} ttl2={data ? data.ttl2 : "loading"} ttl1={data ? data.ttl1 : "loading"} />
          <Row>
            <Col lg={4} md={6} className="tab">
              <div className="categories-slider">
                <OwlCarousel className='owl-theme' {...Categoriesslider}>
                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories1} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Travel</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories2} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Technology</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories3} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Sports</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories4} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Art</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories5} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Business</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories6} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Education</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </Col>

            <Col lg={4} md={6} className="tab">
              <div className="categories-slider">
                <OwlCarousel className='owl-theme' {...Categoriesslider}>
                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories2} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Technology</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories1} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Travel</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories3} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Sports</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories4} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Art</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories5} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Business</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories6} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Education</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </Col>

            <Col lg={4} md={6} className="tab">
              <div className="categories-slider">
                <OwlCarousel className='owl-theme' {...Categoriesslider}>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories3} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Sports</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories1} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Travel</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories2} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Technology</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories4} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Art</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories5} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Business</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories6} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Education</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </Col>

            <Col lg={4} md={6} className="tab">
              <div className="categories-slider">
                <OwlCarousel className='owl-theme' {...Categoriesslider}>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories4} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Art</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories1} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Travel</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories2} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Technology</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories3} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Sports</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories5} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Business</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories6} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Education</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </Col>

            <Col lg={4} md={6} className="tab">
              <div className="categories-slider">
                <OwlCarousel className='owl-theme' {...Categoriesslider}>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories5} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Business</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories1} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Travel</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories2} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Technology</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories3} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Sports</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories4} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Art</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories6} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Education</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </Col>

            <Col lg={4} md={6} className="tab">
              <div className="categories-slider">
                <OwlCarousel className='owl-theme' {...Categoriesslider}>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories6} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Education</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories1} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Travel</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories2} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Technology</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories3} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Sports</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories4} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Art</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                  <div className="categories_box">
                    <div className="categories_img">
                      <img
                        src={Categories5} alt="" className="img-fluid" />
                    </div>
                    <div className="categories-content">
                      <div className="categories_text">
                        <span className="primary">Business</span>
                        <span className="secondary">Events</span>
                      </div>
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
}
