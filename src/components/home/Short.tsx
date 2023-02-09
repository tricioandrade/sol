import React  from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Short = () => {




    return (
        <section id="short">
            <Container>
                 <Row>
                    <Col lg={12} className='text-center d-grid grap-2 d-md-block'>
                        {/* <h4 className="section-title">Actualizações</h4> */}
                    </Col>
                </Row>
                <Row className="d-flex align-items-stretch justify-content-center col-sm-12 col-lg-11 m-auto">
                    <Card>
                        <Card.Header className="col-12 icon-text">
                            <i className="fa fa-phone-square"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Fale conosco</Card.Title>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius, quam amet commodi aspernatur vel necessitatibus id.
                            </p>
                        </Card.Body>
                        <Card.Footer className="text-center d-grid grap-2 d-md-block">
                            <Link to="#" className="btn btn-link ">Abrir</Link>
                        </Card.Footer>
                    </Card>
                    <Card className='col-sm-12 col-lg-4'>
                        <Card.Header className="col-12 icon-text">
                            <i className="fa fa-map-marker"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Agências</Card.Title>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius, quam amet commodi aspernatur vel necessitatibus id.
                            </p>
                        </Card.Body>
                        <Card.Footer className="text-center d-grid grap-2 d-md-block">
                            <Link to="#" className="btn btn-link ">Abrir</Link>
                        </Card.Footer>
                    </Card>
                    <Card className='col-sm-12 col-lg-4'>
                        <Card.Header className="col-12 icon-text">
                            <i className="fa fa-people-group"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Fundação SOL.</Card.Title>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores quis doloribus quasi adipisci nesciunt consequuntur sint. 
                                Lorem, ipsum dolor.                                   
                            </p>    
                        </Card.Body>
                        <Card.Footer className="text-center d-grid grap-2 d-md-block">
                            <Link to="#" className="btn btn-link ">Abrir</Link>
                        </Card.Footer>
                    </Card>
                </Row>
            </Container>
        </section>
    )
}
export default Short;