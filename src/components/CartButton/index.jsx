import Cart from '../../assets/cart.svg'
import { ContainerButton } from './styles';

export function CartButton({ ...props }) {
    return (
        <ContainerButton>
            <img src={Cart} alt='carrinho-de-comprasd' />
        </ContainerButton>
    );
}