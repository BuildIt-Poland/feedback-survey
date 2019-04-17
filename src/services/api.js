import axios from 'axios';

import { API_URL } from '../config/config';

const preparedSurveyData = data => {
  return Object.entries(data).map(item => ({
    questionId: item[0],
    answer: item[1]
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
  const questions = await axios.post(`${API_URL}/saveSurvey`, parsedData);

  return questions;
};
