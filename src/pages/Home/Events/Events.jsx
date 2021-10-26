import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import Heading from "../../../components/Heading";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import './events.scss';
import { Event1, Event10, Event2, Event3, Event4, Event5, Event6, Event7, Event8, Event9 } from "../../../Assets/images";
export default function Events({ data }) {
  const eventslider = {
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
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,

      }
    },
  };

  return (

    <>
      <section className="events_section section_padding">
        <Container fluid>
          <Heading desc={data ? data.desc : "loading"} ttl2={data ? data.ttl2 : "loading"} ttl1={data ? data.ttl1 : "loading"} />
          <div className="events_slider">
            <OwlCarousel className='owl-theme' {...eventslider}>
              <Card>
                <Card.Img variant="top" src={Event1} alt="" />
                <Card.Body>
                  <Card.Title>Wedding of James & Helen</Card.Title>
                  <Button className="events_btn btn">Wedding</Button>

                  <p><span><FaRegCalendarAlt /></span>August 20, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event2} alt="" />
                <Card.Body>
                  <Card.Title>Fashion Carnival 2021</Card.Title>
                  <Button className="events_btn btn">ART</Button>

                  <p><span><FaRegCalendarAlt /></span>September 1, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event3} alt="" />
                <Card.Body>
                  <Card.Title>Drama and Games 2021</Card.Title>
                  <Button className="events_btn btn">ART</Button>

                  <p><span><FaRegCalendarAlt /></span>October 10, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event4} alt="" />
                <Card.Body>
                  <Card.Title>Techcon and Technology</Card.Title>
                  <Button className="events_btn btn">Technology</Button>

                  <p><span><FaRegCalendarAlt /></span>December 1, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={Event5} alt="" />
                <Card.Body>
                  <Card.Title>Megeve Winter Party</Card.Title>
                  <Button className="events_btn btn">Travel</Button>

                  <p><span><FaRegCalendarAlt /></span>January 17, 2022</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event6} alt="" />
                <Card.Body>
                  <Card.Title>CA After and Party 2021</Card.Title>
                  <Button className="events_btn btn">Nightlife</Button>

                  <p><span><FaRegCalendarAlt /></span>February 14, 2022</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event7} alt="" />
                <Card.Body>
                  <Card.Title>Milano and 21T Meeting</Card.Title>
                  <Button className="events_btn btn">Business</Button>

                  <p><span><FaRegCalendarAlt /></span>November 17, 2020</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event8} alt="" />
                <Card.Body>
                  <Card.Title>Gaming and X2021 Fair</Card.Title>
                  <Button className="events_btn btn">Technology</Button>

                  <p><span><FaRegCalendarAlt /></span>March 1, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event9} alt="" />
                <Card.Body>
                  <Card.Title>Eventchamp Conference</Card.Title>
                  <Button className="events_btn btn">Business</Button>

                  <p><span><FaRegCalendarAlt /></span>March 12, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={Event10} alt="" />
                <Card.Body>
                  <Card.Title>The Future of Currencies</Card.Title>
                  <Button className="events_btn btn">Technology</Button>

                  <p><span><FaRegCalendarAlt /></span>July 17, 2021</p>

                  <Card.Text>Lorem ipsum dolor sit amet, voluptua iracundia an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has.</Card.Text>
                  <p> <span><FaRegCalendarAlt /></span> Showing</p>

                  <p> <span><FaMapMarkerAlt /></span> Istanbul <span><FaDollarSign /></span> $75</p>
                </Card.Body>
              </Card>

            </OwlCarousel>
            <div className="slider-button">
              <a href="/" className="slider-btn btn">All EVENTS</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
