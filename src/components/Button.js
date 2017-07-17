import React from 'react'
import styledProps from 'styled-props';
import styled from 'styled-components'
import {
  font,
  background
} from '../css/styles.js';


const Button = styled.button`
  /* Base style */
  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  margin: 16px;
  position: relative;
  
  /* Size */
  &.small {
    font-size: 12px;
    line-height: 24px;
    min-height: 24px;
    padding: 0 8px;
  }
  &.medium {
    font-size: 14px;
    line-height: 32px;
    min-height: 32px;
    padding: 0 10px;
  }
  &.large {
    font-size: 16px;
    line-height: 40px;
    min-height: 40px;
    padding: 0 15px;
  }

  /* Primary button */
  &.primary {
    background-color: #137CBD;
  }
  &.primary:hover {
    background-color: #0D5A8A;
  }
  &.primary:active,
  &.primary.true {
    color: rgba(255, 255, 255, 0.6);
    background-color: #0e5a8a;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
  }
  &.primary:disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(19, 124, 189, 0.5);
  }

  /* Danger button */
  &.danger {
    background-color: #B83130;
  }
  &.danger:hover {
    background-color: #8E2221;
  }
  &.danger:active,
  &.danger.true {
    background-color: #8E2221;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
  }
  &.danger:disabled {
    cursor: not-allowed;
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(219, 55, 55, 0.5);
  }

  /* Default button */
  &.default {
    color: #182026;
    background-color: #fff;
    border: 1px solid rgba(16, 22, 26, 0.1);
  }
  &.default:hover {
    background-color: #ebf1f5;
    border: 1px solod rgba(16, 22, 26, 0.2);
  }
  &.default:active,
  &.default.true {
    background-color: #d8e1e8;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
  }
  &.default:disabled {
    cursor: not-allowed;
    color: rgba(92, 112, 128, 0.5);
    background-color: rgba(206, 217, 224, 0.5);
  }
`

export default ({className, disabled, btnText}) => (
  <Button type="button" className={className} disabled={disabled}>
    {btnText}
  </Button>
)