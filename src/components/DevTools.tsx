import React from 'react';

interface DevToolsProps {
  onToggleDashboard: () => void;
  onToggleAuth: () => void;
  onGoHome: () => void;
}

export const DevTools: React.FC<DevToolsProps> = ({ onToggleDashboard, onToggleAuth, onGoHome }) => {
  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex gap-2 p-2 bg-slate-900/90 border border-sky-500/50 rounded-lg shadow-xl backdrop-blur-sm">
      <button onClick={onGoHome} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded">Home</button>
      <button onClick={onToggleDashboard} className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs rounded">Dashboard</button>
      <button onClick={onToggleAuth} className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded">Auth Modal</button>
    </div>
  );
};
