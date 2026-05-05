import { OffersCarousel, CategoriesCarousel, Button  } from '../../components';
import { Banner, Container } from './styles';

export default function Home() {
    return (
        <main>
            <Banner>
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



