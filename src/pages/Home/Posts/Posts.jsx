import React from 'react'
import Heading from "../../../components/Heading";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { FaRegCalendarAlt, FaFacebookMessenger } from "react-icons/fa";
import './posts.scss';
import { Posts1, Posts2, Posts3, Posts4 } from "../../../Assets/images"; 
export default function Posts({ data }) {
    const postslider = {
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
                items: 2,
            },
            1000: {
                items: 2,
    
            }
        },
    };
    return (
        <>
            <section className="post_section section_padding">
                <Container fluid>
                    <Heading desc={data ? data.desc : "loading"} ttl2={data ? data.ttl2 : "loading"} ttl1={data ? data.ttl1 : "loading"} />

                    <div className="post_slider">
                        <OwlCarousel className='owl-theme' {...postslider}>

                            <div className="post_content">
                                <div className="post_img">
                                    <div className="post_button">
                                        <a href="/" className="post_btn btn">News</a>
                                    </div>
                                    <img src={Posts1} alt="" className="img-fluid" />
                                </div>

                                <div className="post_text">
                                    <h5>Budgets for Business Events</h5>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto.</p>
                                </div>
                                <div className="post_icon">
                                    <p> <span><FaRegCalendarAlt /></span> Istanbul </p>
                                    <p> <span><FaFacebookMessenger /></span> $75</p>
                                </div>
                            </div>
                            <div className="post_content">
                                <div className="post_img">
                                    <div className="post_button">
                                        <a href="/" className="post_btn btn">News</a>
                                    </div>
                                    <img src={Posts2} alt="" className="img-fluid" />
                                </div>

                                <div className="post_text">
                                    <h5>5 Ideas for Fun Family Activities</h5>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto.</p>
                                </div>
                                <div className="post_icon">
                                    <p> <span><FaRegCalendarAlt /></span> Istanbul </p>
                                    <p> <span><FaFacebookMessenger /></span> $75</p>
                                </div>
                            </div>
                            <div className="post_content">
                                <div className="post_img">
                                    <div className="post_button">
                                        <a href="/" className="post_btn btn">News</a>
                                    </div>
                                    <img src={Posts3} alt="" className="img-fluid" />
                                </div>

                                <div className="post_text">
                                    <h5>Best Event Ticket Deals</h5>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto.</p>
                                </div>
                                <div className="post_icon">
                                    <p> <span><FaRegCalendarAlt /></span> Istanbul </p>
                                    <p> <span><FaFacebookMessenger /></span> $75</p>
                                </div>
                            </div>
                            <div className="post_content">
                                <div className="post_img">
                                    <div className="post_button">
                                        <a href="/" className="post_btn btn">News</a>
                                    </div>
                                    <img src={Posts4} alt="" className="img-fluid" />
                                </div>

                                <div className="post_text">
                                    <h5>Top 20 Event and Conference Countries</h5>
                                    <p>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, his utinam principes dignissim ad. Ne nec dolore oblique nusquam, cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, mea eros illum elitr id, ei has similique constituto.</p>
                                </div>
                                <div className="post_icon">
                                    <p> <span><FaRegCalendarAlt /></span> Istanbul </p>
                                    <p> <span><FaFacebookMessenger /></span> $75</p>
                                </div>
                            </div>

                        </OwlCarousel>
                        <div className="slider-button">
                            <a href="/" className="slider-btn btn">All EVENTS</a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
