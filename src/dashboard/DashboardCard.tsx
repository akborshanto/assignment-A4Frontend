import React from 'react';
import { GlassCard } from './GlassCard';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  icon: typeof LucideIcon;
  title: string;
  value: string;
  trend: {
    value: string;
    up: boolean;
  };
  color: 'purple' | 'green' | 'indigo' | 'emerald';
}

export function DashboardCard({ icon: Icon, title, value, trend, color }: DashboardCardProps) {
  const colors = {
    purple: 'bg-purple-200/20 text-purple-00',
    blue: 'bg-blue-500/20 text-blue-300',
    indigo: 'bg-indigo-500/20 text-indigo-300',
    emerald: 'bg-emerald-500/20 text-emerald-300',
  };

  return (
    <GlassCard className="transform hover:scale-105 transition-transform">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div className={`p-3 rounded-lg w-fit ${colors[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white/70 text-sm">{title}</h3>
            <p className="text-white text-2xl font-bold">{value}</p>
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm
          ${trend.up ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
          {trend.value}
        </div>
      </div>
    </GlassCard>
  );
}