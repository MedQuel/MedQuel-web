import { useEffect, useState } from 'react';
import { fetchPlans, type Plan } from '../lib/api';


export function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchPlans()
      .then((result) => {
        if (!cancelled) setPlans(result);
      })
      .catch((err: Error) => {
        console.error('[plans] failed to load plans:', err);
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return { plans, loading, error, retry: () => setAttempt((n) => n+1) };
}
