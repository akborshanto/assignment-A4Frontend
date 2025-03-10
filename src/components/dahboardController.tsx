import React from 'react';
import { cn } from './utils/utils'; 

type GlassContainerProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'purple' | 'green' | 'indigo' | 'emerald';
};

const colorVariants = {
  purple: 'from-purple-500/10 to-purple-500/5 border-purple-500/20 shadow-purple-500/5',
  green: 'from-green-500/10 to-green-500/5 border-green-500/20 shadow-green-500/5',
  indigo: 'from-indigo-500/10 to-indigo-500/5 border-indigo-500/20 shadow-indigo-500/5',
  emerald: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 shadow-emerald-500/5',
};

export const GlassContainer = ({ children, className, color = 'purple' }: GlassContainerProps) => {
  return (
    <div className={cn(
      'relative backdrop-blur-xl bg-gradient-to-b border rounded-2xl shadow-lg',
      colorVariants[color],
      className
    )}>
      {children}
    </div>
  );
};