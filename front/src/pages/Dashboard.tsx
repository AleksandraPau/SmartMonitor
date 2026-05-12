import React, { useState, useEffect } from 'react';
import { Thermometer, Wind, Activity, Video } from 'lucide-react';
import { MetricCard } from '../components/MetricCard';
import { fetchMetrics } from '../services/api';

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('CO2');
  const [data, setData] = useState<any[]>([]);
  const DEVICE_ID = 'WEMOS_D1_UNIT_01'; // Позже будем брать из контекста

  // Загрузка данных при монтировании (и раз в 10 секунд)
  useEffect(() => {
    const loadData = async () => {
      const history = await fetchMetrics(DEVICE_ID);
      setData(history);
    };

    loadData();
    const interval = setInterval(loadData, 10000); // Автообновление
    return () => clearInterval(interval);
  }, []);

  // Берем последнее значение из истории для карточек
  const lastEntry = data[data.length - 1] || {};

  const metrics = [
    { id: 'Temp', label: 'Температура', value: `${lastEntry.temp || '--'}°C`, icon: <Thermometer />, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 'CO2', label: 'Углекислый газ', value: `${lastEntry.co2 || '--'} ppm`, icon: <Wind />, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'Hum', label: 'Влажность', value: `${lastEntry.humidity || '--'}%`, icon: <Activity />, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  return (
    <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="relative bg-slate-900 rounded-3xl aspect-video flex items-center justify-center text-slate-500 shadow-2xl">
          <Video size={64} className="opacity-20" />
          <p className="absolute bottom-4 right-4 text-[10px]">ID: {DEVICE_ID}</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-64 flex items-center justify-center italic text-slate-400">
           [Место для графиков из данных: {data.length} записей в памяти]
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {metrics.map((m) => (
          <MetricCard 
            key={m.id} 
            {...m} 
            isActive={selectedMetric === m.id} 
            onClick={() => setSelectedMetric(m.id)} 
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
