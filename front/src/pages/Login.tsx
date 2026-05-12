import React, { useState } from 'react';
import { Lock, Mail, Dog } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Логика валидации (Задание 3)
  const isFormValid = email.includes('@') && password.length >= 6;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
        <div className="text-center mb-8">
          <div className="inline-flex p-4 bg-indigo-50 rounded-2xl mb-4">
            <Dog className="text-indigo-600" size={40} />
          </div>
          <h1 className="text-2xl font-bold">SmartPet Monitor</h1>
          <p className="text-slate-500">Войдите в панель управления</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="email"
              placeholder="Email адрес"
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="password"
              placeholder="Пароль (от 6 символов)"
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            disabled={!isFormValid}
            className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all
              ${isFormValid 
                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200' 
                : 'bg-slate-300 cursor-not-allowed shadow-none'}`}
          >
            Войти в систему
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
