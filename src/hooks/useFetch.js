import { useEffect, useState } from 'react';

import { fetchQuestions } from '../services/api';

export const useFetch = (prevData = []) => {
  const [data, setData] = useState({ questions: [], answerTypes: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await fetchQuestions();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, prevData);

  return { data, isLoading, error };
};
