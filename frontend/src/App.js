import { Container } from 'react-bootstrap';
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>TeeJay's goody-bag</h1>
        </Container>
      </main>
    </div>
  );
}

export default App;
