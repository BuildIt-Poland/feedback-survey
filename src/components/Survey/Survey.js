import React from 'react';
import { Redirect } from 'react-router-dom';

import { Button, Form, Box } from 'grommet';

import { colorDarkBlue, colorWhite } from '../../styles/variables';
import { fetchQuestions, saveSurvey } from '../../services/api';
import SurveyField from '../SurveyField/SurveyField';

const messages = {
  required: 'This field is required'
};

class Survey extends React.Component {
  state = { data: { questions: [], answerTypes: {} }, submitted: false, success: false, error: null };

  componentDidMount() {
    fetchQuestions().then(res => {
      this.setState({
        data: res.data
      });
    });
  }

  renderFormFields(data) {
    return data.questions.map((field, index) => (
      <SurveyField key={index} field={field} answerTypes={data.answerTypes} />
    ));
  }

  handleSuccess = () => {
    this.setState({
      submitted: true,
      success: true
    });
  };

  handleError = error => {
    this.setState({
      submitted: true,
      error: error.message
    });
  };

  handleSubmit = event => {
    const data = {
      clientName: 'John',
      answers: event.value
    };
    saveSurvey(data).then(res => this.handleSuccess(), err => this.handleError(err));
  };

  render() {
    const { submitted, success, error, data } = this.state;
    if (submitted) {
      return (
        <Redirect
          to={{
            pathname: '/final',
            state: { success, error }
          }}
        />
      );
    } else {
      return (
        <Box align="center" justify="center" pad="medium" background={colorDarkBlue}>
          <Form onSubmit={this.handleSubmit} messages={messages}>
            {this.renderFormFields(data)}
            <Button type="submit" label="Submit" color={colorWhite} margin="xlarge" />
          </Form>
        </Box>
      );
    }
  }
}

export default Survey;
