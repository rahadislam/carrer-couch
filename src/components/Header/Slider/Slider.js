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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
      <h3 cl>Great change requires support</h3>
      <p>Live a life with a passion</p>
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
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Slider;