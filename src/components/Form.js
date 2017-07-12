import React from 'react'
import styledProps from 'styled-props';
import styled from 'styled-components';

import {
  font,
  color
} from '../css/styles.js';

import Typography from '../components/Typography'
import Button from '../components/Button'
import TextInputWithLabel from '../components/TextInputWithLabel'

const Form = styled.form`
  h1 {
    color: #3399ff;
  }  
`

export default () => (
  <Form>
    <TextInputWithLabel />

    <Button className="primary medium">Submit</Button>
  </Form>
)