import { UserCircle, ShoppingCartIcon } from '@phosphor-icons/react';

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
    return (
        <Container>
            <Contant>
                <Navigation>
                    <div>
                        <HeaderLink>Home</HeaderLink>
                        <HeaderLink>Cardápio</HeaderLink>
                    </div>
                </Navigation>
                <Option>
                    <Profile>
                        <UserCircle color="#fff" size={24} />
                        <div>
                            <p>
                                Olá, <span>Carlos Desenvolvedor</span>
                            </p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartIcon color='#fff' size={24} />
                        <HeaderLink>Carrinho</HeaderLink>
                    </LinkContainer>
                </Option>
            </Contant>
        </Container>

    );
}