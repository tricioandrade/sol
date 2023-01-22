import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {

    const menu = [ 'Particulares', 'Empresas', 'Microcrédito', 'O Banco Sol'];
    const menuDropped1 = [ 
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Sol Seguros'],
            link: []
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: []
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: []
        },
        {
            text: [ 'Modelo de Abertura de Conta', 'Depósitos', 'Créditos', 'Cartões', 'Serviços', 'Oper. No Estrangeiro', 'Solnet', 'Sol Seguros'],
            link: []
        }
    ];

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <i className='fa fa-circle' /> Banco Sol</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            menu.map((title, key1) => {
                                return (
                                    <>
                                        <NavDropdown key={key1} title={ title } id="basic-nav-dropdown">
                                            <>
                                                {
                                                    menuDropped1.map(( textLink, key) => {
                                                        return (
                                                            <Link className='dropdown-item' key={ key } to="#action/3.1">{ 
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}


export default Header; 