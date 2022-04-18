import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="600"
          src="https://landyourdreamjob.blog/wp-content/uploads/2019/12/Career-coach-pic.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="slider-head">The Education of Tomorrow, Rooted in Tradition Invite You</h3>
          <p className="slider-title"> Our purpose is to provide a safe, happy environment for your child, where they are able to be themselves and thrive; while acquiring the educational foundation needed to achieve</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.impactgrouphr.com/wp-content/uploads/4_job_search_trends_every_career_coach_needs_to_know_now_May_20_2016.jpg"
          alt="Second slide"
          height='600'
        />

        <Carousel.Caption>
          <h3 className="slider-head" cl>Great change requires support</h3>
          <p className="slider-title">Live a life with a passion</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://kathycaprino.com/wp-content/uploads/2019/02/iStock-895145516.jpg"
          alt="Third slide"
          height='600'
        />

        <Carousel.Caption>
          <h3 className="slider-head">Make an appointment to meet with a Career Readiness Coach </h3>
          <p className="slider-title">Finding Your Direction
            Our intent: to empower, prepare, and educate students for their lifelong process of career success</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;