import React from 'react';
import { Container, Nav, NavDropdown, Navbar , Col, Row, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    const menu = [ 'Particulares', 'Empresas', 'Microcrédito', 'O Banco Sol'];
    const menuDropped1 = [ 
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Sol Seguros'],
            link: [],
            icon: 'fa-user-circle',
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: [],
            icon: 'fa-building',
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: [],
            icon: 'fa-money-bill',
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: [],
            icon: 'fa-question-circle',
        }
    ];

    const menuRender = () => {
        return menu.map((title, key1) => {
            return (
                <>
                    <li key={key1 + 1} className={"nav-item dropdown " + (title === 'Particulares' ?
                        'active' : '')}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <i className={ 'fa ' +  menuDropped1[key1].icon } /> { title }  
                        </a>
                        <ul className="dropdown-menu">
                            {
                                menuDropped1.map(( textLink, key) => {
                                    return (
                                        <li>
                                            <Link className='dropdown-item' key={ key + 1 } to="#action/3.1">{ 
                                             menuDropped1[key1]?.text[key] 
                                            }</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
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