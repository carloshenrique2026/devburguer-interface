import Cart from '../../assets/cart.svg'
import { ContainerButton } from './styles';

export default function CartButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt='carrinho-de-comprasd' />
        </ContainerButton>
    );
}