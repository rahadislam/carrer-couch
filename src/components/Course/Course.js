import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Course.css";

const Course = ({info}) => {
    const {picture,title,description}=info;
    
    const naviget=useNavigate();
    const explorehandelar=()=>{
        naviget('/cheakout');
    }
    return (
        <Col className='mb-5'>
            <Card className="shadow p-3 bg-white rounded" style={{ width: '21rem' }}>
                <Card.Img style={{ height: '15rem' }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title id="cartHead">{title}</Card.Title>
                    <Card.Text>{description}
                    </Card.Text>
                    <Button onClick={explorehandelar} id="aa">Explore</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;