import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Header/Menu';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <main>
        <h2>Página Principal</h2>
      </main>
      <Footer />
    </div>
  );
}
export default App;
