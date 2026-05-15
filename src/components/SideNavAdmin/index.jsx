import { SignOut } from "@phosphor-icons/react";

import { navLinks } from "./navLinks";
import Logo1 from '../../assets/logo1.svg';
import { Container, NavLink, NavLinkContainer, Footer } from './styles.js';
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    return (
        <Container>
            <img src={Logo1} alt="Hamburger Logo DevBurger" />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        $isActive={pathname === link.path}
                    >
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