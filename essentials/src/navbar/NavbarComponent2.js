import React, { Component, Fragment, useState } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent2 = () => {
    const [show, setShow] = useState(false);
    return (
        <Navbar>
            <NavDropdown
                title="Dropdown Menu"
                show={show}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Option 2</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    );
};

export default NavbarComponent2