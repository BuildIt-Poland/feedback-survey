import axios from 'axios';

import { API_URL } from '../config/config';

export const fetchQuestions = async function() {
  const questions = await axios.get(`${API_URL}/getQuestions`);

  return questions;
};

export const saveSurvey = async function(data) {
  const questions = await axios.post(`${API_URL}/saveSurvey`, data);

  return questions;
};
