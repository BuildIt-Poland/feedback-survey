import { useEffect, useState } from 'react';

import { fetchQuestions } from '../services/api';

export const useFetch = prevData => {
  const [data, setData] = useState({ questions: [], answerTypes: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchQuestions().then(
      res => {
        setData(res.data);
        setIsLoading(false);
      },
      err => {
        setIsLoading(false);
        setError(err.message);
      }
    );
  }, [prevData]);

  return { data, isLoading, error };
};
