
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ChevronLeft, Info, Loader2, User, RotateCw, Pause, RefreshCw, X } from 'lucide-react';
import GlobeScene from './GlobeScene';

interface GlobePageProps {
  onBack: () => void;
}

const GlobePage: React.FC<GlobePageProps> = ({ onBack }) => {
  const [selectedPoint, setSelectedPoint] = useState<any | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setSelectedPoint(null);
    setIsRotating(true);
    setResetKey(prev => prev + 1);
  };

  const handleClosePanel = () => {
    setSelectedPoint(null);
  };

  // Enforce cleanup and stop rendering when unmounted
  useEffect(() => {
    return () => {
      console.log('Globe View Unmounted - Cleaning up Three.js resources');
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col animate-in fade-in duration-500">
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-30 pointer-events-none">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white backdrop-blur-md transition-all active:scale-95 group shadow-2xl"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Exit Globe</span>
        </button>

        <div className="text-right pointer-events-auto flex flex-col items-end pt-4">
          <h1 className="text-2xl font-black text-white tracking-widest uppercase mb-1">Globe View</h1>
          <div className="flex items-center gap-2 justify-end text-white/40 text-[10px] mb-6 tracking-widest uppercase">
            <Info size={10} />
            <span>Interactive Node Simulation</span>
          </div>

          {selectedPoint && (
            <div className="bg-white/10 border border-white/20 p-3 rounded-2xl animate-in zoom-in-95 duration-500 backdrop-blur-3xl shadow-2xl min-w-[180px] relative overflow-hidden group/panel">
              {/* Close Button */}
              <button 
                onClick={handleClosePanel}
                className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors backdrop-blur-sm"
              >
                <X size={10} />
              </button>

              {/* Decorative Background Glow */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/10 blur-[20px]" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-500/5 blur-[20px]" />

              <div className="flex flex-col items-center gap-2 relative">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 ring-2 ring-blue-500/5 mb-0.5 shadow-inner">
                  <User size={14} />
                </div>
                <div className="text-center">
                  <div className="text-[5px] uppercase tracking-[0.3em] text-blue-400 font-black mb-0.5 flex items-center justify-center gap-1">
                    <div className="w-1 h-[1px] bg-blue-500/30" />
                    Node Beacon
                    <div className="w-1 h-[1px] bg-blue-500/30" />
                  </div>
                  <div className="text-xs text-white font-mono font-black tracking-tighter leading-none uppercase mb-1">{selectedPoint.location}</div>
                  
                  <div className="flex flex-col gap-0.5 items-center font-mono text-[4px] text-white/50 uppercase tracking-[0.1em] bg-white/5 py-0.5 px-2 rounded-full border border-white/5">
                    <div className="flex gap-2">
                      <span>LAT: <span className="text-white font-bold">{selectedPoint.lat.toFixed(2)}</span></span>
                      <span>LON: <span className="text-white font-bold">{selectedPoint.lon.toFixed(2)}</span></span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0.5" />
                
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 w-full px-1">
                  <div className="flex flex-col">
                    <span className="text-[4px] uppercase tracking-widest text-white/40 mb-0.5">Novas</span>
                    <span className="text-[8px] text-white font-mono font-black tracking-tighter">{selectedPoint.metrics.uploadedNovas.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[4px] uppercase tracking-widest text-white/40 mb-0.5">Users</span>
                    <span className="text-[8px] text-white font-mono font-black tracking-tighter">{selectedPoint.metrics.activeUsers}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 w-full bg-white/5 p-1 rounded-lg border border-white/5 mt-0.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[4px] uppercase tracking-[0.1em] text-white/30 font-bold">Sync</span>
                    <span className="text-[5px] text-white/80 font-black tracking-wide uppercase italic">{selectedPoint.metrics.lastActivity}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-1 mt-0.5">
                  <div className="flex items-center gap-0.5 group cursor-help">
                    <div className="w-0.5 h-0.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_4px_rgba(34,197,94,0.3)]" />
                    <span className="text-[4px] text-green-400 font-black uppercase tracking-[0.2em]">Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="flex-grow w-full relative z-10">
        <Suspense fallback={
          <div className="absolute inset-0 flex items-center justify-center text-white gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
            <span className="text-sm font-mono tracking-widest uppercase opacity-60">Initializing Core...</span>
          </div>
        }>
          <Canvas
            key={resetKey}
            camera={{ position: [0, 0, 4], fov: 45 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
            gl={{ 
              antialias: true,
              powerPreference: 'high-performance'
            }}
            onClick={() => setSelectedPoint(null)}
          >
            <GlobeScene 
              onPointClick={setSelectedPoint} 
              isRotating={isRotating} 
              selectedPointId={selectedPoint ? selectedPoint.id : null}
            />
          </Canvas>
        </Suspense>
      </div>

      <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end pointer-events-none z-30">
        <div className="flex gap-4">
          {/* Rotation Toggle */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsRotating(!isRotating);
            }}
            className="pointer-events-auto flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-red-500/10 border border-white/10 rounded-2xl text-white backdrop-blur-xl transition-all active:scale-95 group"
          >
            {isRotating ? (
              <>
                <Pause className="w-4 h-4 text-red-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-red-100">Stop Rotating</span>
              </>
            ) : (
              <>
                <RotateCw className="w-4 h-4 text-blue-400 animate-spin" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-100">Start Rotating</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleReset();
            }}
            className="pointer-events-auto flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-blue-500/10 border border-white/10 rounded-2xl text-white backdrop-blur-xl transition-all active:scale-95 group"
          >
            <RefreshCw className="w-4 h-4 text-blue-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-100">Reset View</span>
          </button>
        </div>

        {/* Minimal Footer Overlay */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
            Drag to Rotate • Scroll to Zoom
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobePage;
