import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { CriarSala } from "./pages/CriarSala";
import { Sala } from './pages/Sala';
import { AdminSala } from './pages/AdminSala';

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sala/nova" element={<CriarSala />} />
          <Route path="/sala/:id" element={<Sala />} />
          <Route path="/admin/sala/:id" element={<AdminSala />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
