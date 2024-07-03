import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Dropdown,FormControl,Navbar,Nav,Badge} from 'react-bootstrap'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link href='/'>Shopping Cart</Link>
            </Navbar.Brand> 
            <Navbar.Text className='search'>
                <FormControl className='m-auto' style={{width:500}} placeholder='Search the product here'></FormControl>
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight> 
                    <Dropdown.Toggle varient='success'>
                        <FaShoppingCart />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        <span style={{padding:10}}>Cart is empty</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
