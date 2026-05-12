import React from 'react';

interface MetricCardProps {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    color: string;
    bg: string;
    isActive: boolean;
    onClick: () => void;
}

export const MetricCard = ({ label, value, icon, color, bg, isActive, onClick }: MetricCardProps) => (
  <button
    onClick={onClick}
    className={`p-6 rounded-3xl transition-all duration-300 text-left border-2 flex flex-col justify-between h-40 shadow-sm
      ${isActive ? 'border-indigo-500 bg-white scale-[1.02] shadow-xl' : 'border-transparent bg-white hover:border-slate-200'}`}
  >
    <div className={`${bg} ${color} p-3 rounded-2xl w-fit`}>{icon}</div>
    <div>
      <p className="text-slate-500 text-sm font-medium">{label}</p>
      <p className="text-3xl font-black mt-1 tracking-tight">{value}</p>
    </div>
  </button>
);