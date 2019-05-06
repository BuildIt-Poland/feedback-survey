import axios from 'axios';

import { API_URL } from '../config/config';

const preparedSurveyData = data => {
  return Object.entries(data).map(([questionId, answer]) => ({
    questionId,
    answer
  }));
};

export const fetchQuestions = async function() {
  const questions = await axios.get(`${API_URL}/getQuestions`);

  return questions;
};

export const saveSurvey = async function(data) {
  const parsedData = {
    ...data,
    answers: preparedSurveyData(data.answers)
  };
  const result = await axios.post(`${API_URL}/saveSurvey`, parsedData);

  return result;
};
