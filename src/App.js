import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import { Menu } from './components/Header/Menu';

import { Tarefas } from './pages/Tarefas';
import { Perfil } from './pages/Perfil';
import { Responsaveis } from './pages/Responsaveis';
import { Home } from './pages/Home';

function App() {
  return (
   <BrowserRouter>
    <div>
      <Header />
      <Menu />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tarefas' element={<Tarefas />} />
          <Route path='/responsaveis' element={<Responsaveis />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;
