import './App.css';
import { useState } from 'react';
import { Login } from './components/Login';
import Home from './Home';

function App() {
  const [isAutenticated, setIsAutenticated] = useState(false);

  return (
    <div>
      {!isAutenticated ? (
        // Passamos a função onLoginSuccess para o componente Login atualizar o estado pai
        <Login onLoginSuccess={() => setIsAutenticated(true)} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;