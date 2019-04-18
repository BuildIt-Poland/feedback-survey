import React from 'react';
import { Redirect } from 'react-router-dom';

import { Form, Box } from 'grommet';

import { fetchQuestions, saveSurvey } from '../../services/api';
import SurveyField from '../SurveyField/SurveyField';
import SurveyButton from '../Button/SurveyButton';

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
      surveyId: this.props.match.params.surveyId || '',
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
        <Box align="center" justify="center" pad="medium">
          <Form onSubmit={this.handleSubmit} messages={messages}>
            {this.renderFormFields(data)}
            <Box align="center">
              <SurveyButton type="submit" label="submit" margin="xlarge" />
            </Box>
          </Form>
        </Box>
      );
    }
  }
}

export default Survey;
