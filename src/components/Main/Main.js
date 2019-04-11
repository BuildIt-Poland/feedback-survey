import React from 'react';
import { Button, Form, FormField, RadioButtonGroup, Select, CheckBox, Box } from 'grommet';

import { colorDarkBlue } from '../../styles/variables';

const messages = {
  required: 'To pole jest wymagane',
  invalid: 'Upsss, błąd!'
};
const Main = function() {
  return (
    <Box align="center" justify="center" pad="medium" background={colorDarkBlue} height="100vh">
      <Form onSubmit={({ value }) => console.log('Submit: ', value)} messages={messages}>
        <FormField name="name" label="Name" required={true} />
        <FormField
          label="Continent"
          name="select"
          component={Select}
          options={['North America', 'South America', 'Asia']}
        />
        <FormField name="address" label="Address" />
        <FormField name="acknowledge" component={CheckBox} label="acknowledge" />
        <FormField name="day" component={RadioButtonGroup} options={['Tuesday', 'Friday']} />
        <Button type="submit" label="Submit" primary={true} />
      </Form>
    </Box>
  );
};

export default Main;
