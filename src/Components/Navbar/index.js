import React from 'react';
import { NavbarSection , Logo , LogoText , List , ListItem , Anchor , LinkItem } from './style.js'

const Navbar = () => {
    return(
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <List>
                    <ListItem><LinkItem to='/'>Home</LinkItem></ListItem>
                    <ListItem><LinkItem to='/InternetOfThings'>Work</LinkItem></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><LinkItem to='/resume'>Resume</LinkItem></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><LinkItem to='/contact'>Contact</LinkItem></ListItem>
                </List>
            </div>
        </NavbarSection>
    )
}

export default Navbar;