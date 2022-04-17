import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Course = ({info}) => {
    const {picture}=info;
    
    const naviget=useNavigate();
    const explorehandelar=()=>{
        naviget('/about');
    }
    return (
        <Col className='mb-5'>
            <Card style={{ width: '25rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button onClick={explorehandelar} variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;