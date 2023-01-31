import React  from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Short = () => {




    return (
        <section id="short">
            <Container>
                 <Row>
                    <Col lg={12} className='text-center'>
                        <h4 className="section-title">Actualizações</h4>
                    </Col>
                </Row>
                <Row className="d-flex align-items-stretch justify-content-center col-11 m-auto">
                    <Row className='col-4'>
                        <div className="col-12 icon-text">
                            <i className="fa fa-newspaper"/>
                        </div>
                        <Col lg={12}>
                            <h5>Notícias</h5>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius, quam amet commodi aspernatur vel necessitatibus id.
                            </p>
                        </Col>
                        <Col lg={12}>
                            <Link to="#" className="btn btn-link text-end">Abrir</Link>
                        </Col>
                    </Row>
                    <Row className='col-4'>
                        <div className="col-12 icon-text">
                            <i className="fa fa-users"/>
                        </div>
                        <Col lg={12}>
                            <h5>Parceiros</h5>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius, quam amet commodi aspernatur vel necessitatibus id.
                            </p>
                        </Col>
                        <Col lg={12}>
                            <Link to="#" className="btn btn-link text-end">Abrir</Link>
                        </Col>
                    </Row>
                    <Row className='col-4'>
                        <div className="col-12 icon-text">
                            <i className="fa fa-newspaper"/>
                        </div>
                        <Col lg={12}>
                            <h5>Lorem ipsum  sit.</h5>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores quis doloribus quasi adipisci nesciunt consequuntur sint.                                    
                            </p>    
                        </Col>
                        <Col lg={12}>
                            <Link to="#" className="btn btn-link text-end">Abrir</Link>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}
export default Short;