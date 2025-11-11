import { useState, useEffect } from 'react';
import axios from 'axios';

interface Snapshot {
  node_id: number;
  date: number;
  uptime: number;
  time_total: number;
}

interface Monitor {
  monitor_id: number;
  snapshots: Snapshot[];
  since: number;
  till: number;
}

export function usePulseticUptime() {
  const [uptime, setUptime] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUptime = async () => {
      try {
        const response = await axios.get<Monitor[]>(
          'https://api.pulsetic.com/public/status/jSBtVl4Y/snapshots'
        );

        const monitor = response.data.find((m) => m.monitor_id === 19138);

        if (!monitor) {
          setError('Monitor not found.');
          setLoading(false);
          return;
        }

        const snapshots = monitor.snapshots;

        let totalWeighted = 0;
        let totalTime = 0;

        for (const snap of snapshots) {
          totalWeighted += snap.uptime * snap.time_total;
          totalTime += snap.time_total;
        }

        const uptimePercentage = totalTime > 0 ? (totalWeighted / totalTime) * 100 : 0;
        setUptime(parseFloat(uptimePercentage.toFixed(3)));
      } catch (err) {
        setError('Error fetching uptime data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUptime();
  }, []);

  return { uptime, loading, error };
}
