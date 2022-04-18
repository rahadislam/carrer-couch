import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Course.css";

const Course = ({info}) => {
    const {picture}=info;
    
    const naviget=useNavigate();
    const explorehandelar=()=>{
        naviget('/cheakout');
    }
    return (
        <Col className='mb-5'>
            <Card className="shadow p-3 bg-white rounded" style={{ width: '25rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title id="cartHead">Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button onClick={explorehandelar} id="aa">Explore</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;