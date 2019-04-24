import React from 'react';
import { Redirect } from 'react-router-dom';

import { Form, Box, Heading } from 'grommet';

import { fetchQuestions, saveSurvey } from '../../services/api';
import SurveyField from '../SurveyField/SurveyField';
import SurveyButton from '../Button';

const messages = {
  required: 'This field is required'
};

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading || true,
      data: { questions: [], answerTypes: {} },
      submitted: false,
      success: false,
      error: null
    };
  }

  componentDidMount() {
    if (this.state.isLoading) {
      fetchQuestions().then(res => {
        this.setState({
          data: res.data,
          isLoading: false
        });
      });
    }
  }

  renderSurvey() {
    const { submitted, success, error, data, isLoading } = this.state;
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
      if (isLoading) {
        return (
          <Box animation="pulse" align="center" justify="center" pad="medium" height="90vh">
            <Heading level="4">Loading...</Heading>
          </Box>
        );
      } else {
        return (
          <Box align="center" justify="center" pad="medium">
            <Form onSubmit={this.handleSubmit} messages={messages}>
              {this.renderFormFields(data)}
              <Box align="center">
                <SurveyButton type="submit" label="submit" margin="xlarge" data-testid="survey-submit-button" />
              </Box>
            </Form>
          </Box>
        );
      }
    }
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
    return this.renderSurvey();
  }
}

export default Survey;
