import { navLinks } from "./navLinks";
import Logo1 from '../../assets/logo1.svg';
import { SignOut } from "@phosphor-icons/react";
import {  Container, NavLink, NavLinkContainer, Footer } from './styles.js';
import { useUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
    const { logout } = useUser();

    return (
        <Container>
            <img src={Logo1} alt="Hamburger Logo DevBurger" />
            <NavLinkContainer>
                {navLinks.map((link) =>  (
                    <NavLink  key={link.id} to={link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to='/login' onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    );
}