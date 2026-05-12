import React, { useState } from 'react';
import { Thermometer, Wind, Dog, Activity, ShieldCheck, Video } from 'lucide-react';

const Dashboard = () => {
  // Логика: состояние для выбора активного датчика (требование Задания 3)
  const [selectedMetric, setSelectedMetric] = useState('CO2');

  const metrics = [
    { id: 'Temp', label: 'Температура', value: '24.5°C', icon: <Thermometer />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 'CO2', label: 'Углекислый газ', value: '480 ppm', icon: <Wind />, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'Hum', label: 'Влажность', value: '42%', icon: <Activity />, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      {/* Шапка */}
      <header className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Dog className="text-indigo-600" size={32} /> 
            SmartPet <span className="text-indigo-600">Monitor</span>
          </h1>
          <p className="text-slate-500 text-sm">Система мониторинга домашней среды</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
          <ShieldCheck className="text-green-500" size={20} />
          <span className="text-sm font-medium">Система защищена</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Левая колонка: Видеопоток (ESP32-CAM Placeholder) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl aspect-video group">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              LIVE: ГОСТИНАЯ
            </div>
            {/* Заглушка видео */}
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
              <Video size={64} className="mb-4 opacity-20" />
              <p className="text-sm">Ожидание потока с ESP32-CAM...</p>
            </div>
            <div className="absolute bottom-4 right-4 text-white/50 text-[10px]">
              ID: WEMOS_D1_UNIT_01
            </div>
          </div>

          {/* Интерактивный блок графиков */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-bold mb-4">Аналитика: {selectedMetric}</h3>
            <div className="h-48 w-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center">
               <p className="text-slate-400 text-sm italic">[Место для графика Recharts]</p>
            </div>
          </div>
        </div>

        {/* Правая колонка: Датчики */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold px-2 text-slate-600 uppercase text-xs tracking-wider">Текущие показатели</h3>
          {metrics.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMetric(m.id)}
              className={`p-6 rounded-3xl transition-all duration-300 text-left border-2 flex flex-col justify-between h-40 shadow-sm
                ${selectedMetric === m.id 
                  ? 'border-indigo-500 bg-white scale-[1.02] shadow-indigo-100 shadow-xl' 
                  : 'border-transparent bg-white hover:border-slate-200'}`}
            >
              <div className={`${m.bg} ${m.color} p-3 rounded-2xl w-fit`}>
                {m.icon}
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">{m.label}</p>
                <p className="text-3xl font-black mt-1 tracking-tight">{m.value}</p>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
