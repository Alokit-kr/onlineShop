import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
const footer = () => {
    const date=new Date();
    const year=date.getFullYear();
    return (
        <footer>
            <Container> 
                <Row> 
                    <Col className='text-center py-3'>Copyright &copy; AlokitShop {year} </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default footer
