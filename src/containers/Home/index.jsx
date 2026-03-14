import { Banner, Container, Content } from './styles';

export function Home() {
    return (
        <main>
            <Banner>
                <h1>Home</h1>
            </Banner>
            <Container>
                <Content>
                    <div>Carrossel Categoria</div>
                     <div>Carrossel Produto</div>
                </Content>
            </Container>
            
        </main>
    )
}