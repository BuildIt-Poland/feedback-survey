import axios from 'axios';
import { fetchQuestions, saveSurvey } from '../api';

const TEST_RESPONSE = {
  data: 'test response data'
};
const data = {
  surveyId: '123',
  employeeName: 'John',
  answers: {
    questionId: 'Answer'
  }
};

jest.mock('axios');
axios.get.mockImplementation(() => TEST_RESPONSE);
axios.post.mockImplementation(() => TEST_RESPONSE);

describe('SERVICES - api', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls axios.get for fetchQuestions API call', () => {
    fetchQuestions();

    expect(axios.get).toHaveBeenCalled();
  });

  it('fetches data from API', async () => {
    expect(await fetchQuestions()).toBe(TEST_RESPONSE);
  });

  it('calls axios.post for saveSurvey API call', () => {
    saveSurvey(data);

    expect(axios.post).toHaveBeenCalled();
  });

  it('returns proper data after save survey', async () => {
    expect(await saveSurvey(data)).toBe(TEST_RESPONSE);
  });
});
