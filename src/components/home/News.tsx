import React  from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../assets/cards/1.png';
import img2 from '../../assets/cards/2.png';
import img3 from '../../assets/cards/3.png';


const News = () => {




    return (
        <section id='news'>
            <Container>
                <Row>
                    <Col lg={12}><h3 className="section-title">Notícias</h3></Col>
                    <hr/>  
                </Row>
                <Row className="d-flex flex-columm align-items-stretch col-12">
                        <Card className='col-sm-12 col-lg-3 p-1'>
                            <Card.Body>
                                <Card.Title>
                                    Reclamações
                                </Card.Title>
                                <p className="">
                                    Banco Sol distinguido como o banco que resolveu 
                                    o maior número de reclamações em 2019.
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-left d-grid grap-2 d-md-block'>
                                <Link to="#" className="btn btn-link text-center">Ler mais</Link>
                            </Card.Footer>
                        </Card>
                        <Card className='col-sm-12 col-lg-3 p-1'>
                            <Card.Body>
                                <Card.Title>
                                    Microcrédito - Informações Gerais
                                </Card.Title>
                                <p className="">
                                    Destinado a pequenos empreendedores com baixos ganhos, 
                                    ou com dificuldades de acesso ao crédito bancário.
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-left d-grid grap-2 d-md-block'>
                                <Link to="#" className="btn btn-link text-center">Ler mais</Link>
                            </Card.Footer>
                        </Card>
                        <Card className='col-sm-12 col-lg-3 p-1'>
                            <Card.Body>
                                <Card.Title>
                                    Levantamento Sem Cartão
                                </Card.Title>
                                <p className="">
                                Agora já pode fazer levantamento sem cartão
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-left d-grid grap-2 d-md-block'>
                                <Link to="#" className="btn btn-link text-center">Ler mais</Link>
                            </Card.Footer>
                        </Card>
                        <Card className='col-sm-12 col-lg-3 p-1'>
                            <Card.Body>
                                <Card.Title>
                                    Sol Net
                                </Card.Title>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    tempora voluptas sequi unde ullam totam quos. 
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-left d-grid grap-2 d-md-block'>
                                <Link to="#" className="btn btn-link text-center">Ler mais</Link>
                            </Card.Footer>
                        </Card>
                </Row>
            </Container>
        </section>
    )
}
export default News;