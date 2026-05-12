import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Cpu, Save } from 'lucide-react';

const Settings = () => {
  const [co2Limit, setCo2Limit] = useState(800);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="text-indigo-600" />
          <h1 className="text-2xl font-bold">Настройки системы</h1>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3">
              <Cpu className="text-slate-400" />
              <div>
                <p className="font-medium">Частота опроса Wemos</p>
                <p className="text-xs text-slate-500">Как часто обновлять данные с датчиков</p>
              </div>
            </div>
            <select className="bg-white border rounded-lg px-3 py-1 text-sm">
              <option>5 сек</option>
              <option>30 сек</option>
              <option>1 мин</option>
            </select>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="text-slate-400" />
              <p className="font-medium">Порог уведомления CO2: <span className="text-indigo-600">{co2Limit} ppm</span></p>
            </div>
            <input 
              type="range" min="400" max="2000" step="50"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              value={co2Limit}
              onChange={(e) => setCo2Limit(Number(e.target.value))}
            />
          </div>
        </div>

        <button className="mt-8 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition">
          <Save size={20} /> Сохранить настройки
        </button>
      </div>
    </div>
  );
};

export default Settings;