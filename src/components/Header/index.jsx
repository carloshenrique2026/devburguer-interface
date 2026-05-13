import { UserCircleIcon , ShoppingCartIcon } from '@phosphor-icons/react';
import { useNavigate, useLocation } from 'react-router-dom'; 

import { useUser } from '../../hooks/UserContext';
import {
    Container,
    HeaderLink,
    LinkContainer,
    Logout,
    Navigation,
    Option,
    Profile,
    Contant
} from './styles';


export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo} = useUser();

    const { pathname } = useLocation();

    function logoutUser() {
        logout();
        navigate('/login');
    }
   
    return (
        <Container>
            <Contant>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Option>
                    <Profile>
                        <UserCircleIcon  color="#fff" size={24} />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartIcon color='#fff' size={24} />
                        <HeaderLink to="/carrinho">Carrinho</HeaderLink>
                    </LinkContainer>
                </Option>
            </Contant>
        </Container>

    );
}