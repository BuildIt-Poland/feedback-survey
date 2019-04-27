import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Box, Heading } from 'grommet';

import { saveSurvey } from '../../services/api';
import { surveyData } from '../../types';
import SurveyField from '../SurveyField';
import SurveyButton from '../Button';

const messages = {
  required: 'This field is required'
};

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      submitted: false,
      success: false,
      error: null
    };
  }

  renderSurvey() {
    const { submitted, success, error, data } = this.state;

    if (data && !data.questions.length) {
      return (
        <Box align="center" justify="center" pad="medium" height="90vh">
          <Heading level="4" textAlign="center">
            Oops, something went wrong, there is no questions
          </Heading>
        </Box>
      );
    }
    if (submitted) {
      return (
        <Redirect
          to={{
            pathname: '/final',
            state: { success, error }
          }}
        />
      );
    }
    return (
      <Box align="center" justify="center" pad="medium">
        <Form onSubmit={this.handleSubmit} messages={messages}>
          {this.renderFormFields(data)}
          <Box align="center">
            <SurveyButton buttonType="submit" label="submit" margin="xlarge" />
          </Box>
        </Form>
      </Box>
    );
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

  handleError = ({ message }) => {
    this.setState({
      submitted: true,
      error: message
    });
  };

  handleSubmit = ({ value }) => {
    const data = {
      surveyId: this.props.match ? this.props.match.params.surveyId : '',
      answers: value
    };
    saveSurvey(data).then(res => this.handleSuccess(), err => this.handleError(err));
  };

  render() {
    return this.renderSurvey();
  }
}

Survey.propTypes = {
  data: surveyData
};

export default Survey;
