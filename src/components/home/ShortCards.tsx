import React  from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../assets/cards/1.png';
import img2 from '../../assets/cards/2.jfif';
import img3 from '../../assets/cards/3.jpg';


const ShortCards = () => {




    return (
        <>
            <Container id="shortCards" >
                <Row>
                    <Col lg={12}><h3 className="section-title">Destaques</h3></Col>
                </Row>
                <Row className="d-flex flex-columm align-items-stretch col-12">
                        <Card className='col-3 p-1'>
                               <img src={ img1 } className='card-image' alt="" />
                            <Card.Body>
                                <Card.Title>
                                    Cartão Kumbu
                                </Card.Title>
                                <p className="">
                                    O cartão Pré-Pago da Rede Visa que lhe permite 
                                    efectuar as suas compras de forma adequada, fácil e segura.
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <Link to="#" className="btn btn-link text-center">Abrir</Link>
                            </Card.Footer>
                        </Card>
                        <Card className='col-3 p-1'>
                               <img src={ img2 }  className='card-image' />
                            <Card.Body>
                                <Card.Title>
                                    Microcrédito - Informações Gerais
                                </Card.Title>
                                <p className="">
                                    Destinado a pequenos empreendedores com baixos ganhos, 
                                    ou com dificuldades de acesso ao crédito bancário.
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <Link to="#" className="btn btn-link text-center">Abrir</Link>
                            </Card.Footer>
                        </Card>
                        <Card className='col-3 p-1'>
                               <img src={ img3 }  className='card-image'/>
                            <Card.Body>
                                <Card.Title>
                                    Levantamento Sem Cartão
                                </Card.Title>
                                <p className="">
                                Agora já pode fazer levantamento sem cartão
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <Link to="#" className="btn btn-link text-center">Abrir</Link>
                            </Card.Footer>
                        </Card>
                        <Card className='col-3 p-1'>
                               <img src={ img3 }  className='card-image'/>
                            <Card.Body>
                                <Card.Title>
                                    Sol Net
                                </Card.Title>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam sed. Sunt,
                                     voluptatem necessitatibus eum reprehenderit neque odit doloremque 
                                    tempora voluptas sequi unde ullam totam quos. Quasi deserunt ut tempora?
                                </p>
                            </Card.Body>
                            <Card.Footer className='text-center'>
                                <Link to="#" className="btn btn-link text-center">Abrir</Link>
                            </Card.Footer>
                        </Card>
                </Row>
            </Container>
        </>
    )
}
export default ShortCards;