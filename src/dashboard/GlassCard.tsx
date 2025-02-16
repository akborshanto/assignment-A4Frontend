import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}