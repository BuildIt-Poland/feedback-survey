import axios from 'axios';

import { API_URL } from '../config/config';

export const fetchQuestions = async function() {
  const questions = await axios.get(`${API_URL}/questions`);

  return questions;
};
