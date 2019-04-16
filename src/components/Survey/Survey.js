import React, { useState, useEffect } from 'react';
import { Button, Form, Box } from 'grommet';

import { colorDarkBlue, colorWhite } from '../../styles/variables';
import { fetchQuestions, saveSurvey } from '../../services/api';
import SurveyField from '../SurveyField/SurveyField';

const messages = {
  required: 'This field is required'
};

const renderFormFields = data => {
  return data.questions.map((field, index) => (
    <SurveyField key={index} field={field} answerOptions={data.answerOptions} />
  ));
};

const handleSubmit = event => {
  const data = {
    clientName: 'John',
    answers: event.value
  };
  saveSurvey(data).then(res => console.log('Submit:', event.value));
};

const Survey = function() {
  const [data, setData] = useState({ questions: [], answerOptions: {} });

  useEffect(() => {
    const fetchData = async () =>
      await fetchQuestions().then(res => {
        setData(res.data);
      });

    fetchData();
  }, []);

  return (
    <Box align="center" justify="center" pad="medium" background={colorDarkBlue}>
      <Form onSubmit={handleSubmit} messages={messages}>
        {renderFormFields(data)}
        <Button type="submit" label="Submit" color={colorWhite} margin="xlarge" />
      </Form>
    </Box>
  );
};

export default Survey;
