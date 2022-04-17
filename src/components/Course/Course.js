import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Course = ({info}) => {
    const {picture}=info
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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;