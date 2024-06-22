import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { CriarSala } from "./pages/CriarSala";

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sala/nova" element={<CriarSala />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
