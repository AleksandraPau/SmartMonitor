import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Settings from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'dashboard' | 'settings'>('login');

 return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 bg-black/10 p-2 rounded-xl backdrop-blur-md">
        <button onClick={() => setCurrentPage('login')} className="bg-white px-3 py-1 text-xs border rounded shadow">1: Login</button>
        <button onClick={() => setCurrentPage('dashboard')} className="bg-white px-3 py-1 text-xs border rounded shadow">2: Dashboard</button>
        <button onClick={() => setCurrentPage('settings')} className="bg-white px-3 py-1 text-xs border rounded shadow">3: Settings</button>
      </div>

      {currentPage === 'login' && <Login />}
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'settings' && <Settings />}
    </div>
  );
}

export default App;