// src/components/Layout/MainLayout.tsx
import { Outlet, Link } from 'react-router-dom';
import { Dog, LayoutDashboard, Settings, LogIn } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Общая шапка для всех страниц */}
      <nav className="bg-white border-b border-slate-200 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Dog className="text-indigo-600" /> SmartPet
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-indigo-600 flex items-center gap-1">
              <LayoutDashboard size={18} /> Дашборд
            </Link>
            <Link to="/settings" className="hover:text-indigo-600 flex items-center gap-1">
              <Settings size={18} /> Настройки
            </Link>
            <Link to="/login" className="hover:text-indigo-600 flex items-center gap-1">
              <LogIn size={18} /> Выход
            </Link>
          </div>
        </div>
      </nav>

      {/* Сюда будут подставляться страницы */}
      <main className="p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
