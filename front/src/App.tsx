// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Страница логина отдельно (без шапки) */}
        <Route path="/login" element={<Login />} />

        {/* Все остальные страницы внутри MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
