import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { useNavigate } from 'react-router-dom';
import { Banner, Container } from './styles';

export function Home() {
     const navigate = useNavigate();
    return (
        <main>
            <Banner>
                <button onClick={() => navigate(-1)}>
                    ⬅ Voltar
                </button>


                <h1>Bem-Vindos</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel />
                    <OffersCarousel /> 
                </div>
            </Container>
        </main>
    );
}



