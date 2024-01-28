import { Container } from 'react-bootstrap';
import { Outlet } from  'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>TeeJay's Goody Bag</h1>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
