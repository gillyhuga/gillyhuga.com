import React from 'react';
import { ArrowUp, ArrowDown, Loader2 } from 'lucide-react';
import { usePulseticUptime } from '@/hooks/usePulseticUptime';

export default function PulseticBadge() {
  const { uptime, loading, error } = usePulseticUptime();

  if (loading) {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
        <span>Checking...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
        <ArrowDown className="w-3.5 h-3.5" />
        <span>Error</span>
      </div>
    );
  }

  if (!uptime) return null;

  const isGood = uptime >= 99.0;
  const isOkay = uptime >= 99 && uptime < 99.9;

  const colorClass = isGood
    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    : isOkay
    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';

  const Icon = isGood ? ArrowUp : isOkay ? ArrowUp : ArrowDown;

  return (
    <a
      href="https://status.gillyhuga.com/"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-transform hover:scale-105 ${colorClass}`}
      title={`Uptime ${uptime.toFixed(3)}% — Click to view full status`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{uptime.toFixed(2)}%</span>
    </a>
  );
}
