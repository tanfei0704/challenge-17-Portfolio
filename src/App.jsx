// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Header from './components/header';
import Footer from './components/footer';

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
