import { useState, useEffect } from 'react';
import axios from 'axios';

interface BestDay {
  date: string;
  text: string;
  total_seconds: number;
}

interface GrandTotal {
  daily_average: number;
  daily_average_including_other_language: number;
  human_readable_daily_average: string;
  human_readable_daily_average_including_other_language: string;
  human_readable_total: string;
  human_readable_total_including_other_language: string;
  total_seconds: number;
  total_seconds_including_other_language: number;
}

interface Range {
  start: string;
  end: string;
  range: string;
  days_including_holidays: number;
  days_minus_holidays: number;
  holidays: number;
}

interface ApiResponse {
  data: {
    best_day: BestDay;
    grand_total: GrandTotal;
    range: Range;
  };
}

export function useWakaTimeData() {
  const [data, setData] = useState<ApiResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('https://wakatime.com/share/@gillyhuga/2e1cb673-f851-4340-b021-4aca9d259980.json');
        setData(response.data.data);
      } catch (err) {
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
