import React from 'react';
import useProduct from '../../hooks/useProduct';
import {Container, Row} from 'react-bootstrap';
import Course from '../Course/Course';

const Cart = () => {
    const [product, setProduct] = useProduct();
    return (
        <div>
            <h1 className='text-center'>Create your vision. <br />
                Stay on track with your goals</h1>
            <Container>
                <Row>
                    {
                        product.map(courses=><Course info={courses}></Course>)
                    }
                    
                </Row>
            </Container>

        </div>
    );
};

export default Cart;