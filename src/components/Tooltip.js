import React from 'react'
import styledProps from 'styled-props';
import styled from 'styled-components'
import {
  font,
  background
} from '../css/styles.js';

const Tooltip = styled.div`
  background-color: rgba(0,0,0,0.7);
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 8px 16px;
  margin: 10px;
  font-family: "OpenSans";
`

export default ({styleName, tooltipText}) => (
  <Tooltip style={styleName}>
    {tooltipText}
  </Tooltip>
)