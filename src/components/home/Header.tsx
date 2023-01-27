import React from 'react';
import { Container, Nav, NavDropdown, Navbar , Col, Row, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    const menu = [ 'Particulares', 'Empresas', 'Microcrédito', 'O Banco Sol'];
    const menuDropped1 = [ 
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Sol Seguros'],
            link: [],
            icon: 'fa-users',
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: [],
            icon: 'fa-buid',
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: [],
            icon: 'fa-money-bill',
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: [],
            icon: 'fa-question-mark',
        }
    ];

    const menuRender = () => {
        return menu.map((title, key1) => {
            return (
                <>
                    <NavDropdown key={key1 + 1} title={ title } id="basic-nav-dropdown">
                        <>
                            {
                                menuDropped1.map(( textLink, key) => {
                                    return (
                                        <Link className='dropdown-item' key={ key + 1 } to="#action/3.1">{ 
                                             menuDropped1[key1]?.text[key] 
                                        }</Link>
                                    )
                                })
                            }
                        </>
                    </NavDropdown>
                </>
            )
        })
    }
    
    return (
            <Navbar bg="" expand="lg" variant='light' className='d-block fixed-top navbar-menu'>
                <Container>
                    <Navbar.Brand href="#home"> <i className='fa fa-circle x' /> Banco Sol</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />        
                    <Navbar.Collapse id="basic-navbar-nav" className='flex-row-reverse'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="me-4">
                            { menuRender()}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}


export default Header; 