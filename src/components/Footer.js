import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="d-flex justify-content-between px-4">
                    <Col className="p-0 d-flex justify-content-start" md={3} sm={6}>
                        {/*  */}
                    </Col>
                    <Col className="py-0 d-flex justify-content-end font-weight-light" md={3} sm={6}>
                        /farrelmt/website-project
                    </Col>
                </Row>
                <Row className="justify-content-center font-weight-light">
                    {/*  */}
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;