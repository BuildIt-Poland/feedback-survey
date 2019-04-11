import React, { useState, useEffect } from 'react';
import { Button, Form, Box } from 'grommet';

import { colorDarkBlue, colorWhite } from '../../styles/variables';
import { fetchQuestions } from '../../services/api';
import SurveyField from '../../SurveyField/SurveyField';

const messages = {
  required: 'To pole jest wymagane',
  invalid: 'Upsss, błąd!'
};

const renderFormFields = function(data) {
  return data.list.map((field, index) => <SurveyField key={index} field={field} answerOptions={data.answerOptions} />);
};

const Survey = function() {
  const [data, setData] = useState({ list: [], answerOptions: {} });

  useEffect(() => {
    const fetchData = async () =>
      await fetchQuestions().then(res => {
        setData(res.data);
      });

    fetchData();
  }, []);

  return (
    <Box align="center" justify="center" pad="medium" background={colorDarkBlue}>
      <Form onSubmit={({ value }) => console.log('Submit: ', value)} messages={messages}>
        {renderFormFields(data)}
        <Button type="submit" label="Submit" color={colorWhite} margin="xlarge" />
      </Form>
    </Box>
  );
};

export default Survey;
