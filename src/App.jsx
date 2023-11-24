// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Nav />
      <main className="container-fluid">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
