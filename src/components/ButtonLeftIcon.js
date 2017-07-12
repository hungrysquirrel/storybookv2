import React from 'react'
import styledProps from 'styled-props';
import styled from 'styled-components'
import {
  font,
  background
} from '../css/styles.js';

const ButtonWithLeftIcon = styled.button`

  border: 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  margin: 16px;
  position: relative;
  line-height: 1;
  
  .svg-icon-left {
    display: inline-flex;
    align-self: center;
    position: relative;
    width: 1em;
    height: 1em;
    margin-right: .5em;
  }
  svg {
    width: 1em;
    height: 1em;
    bottom: -0.125em;
    position: absolute;
    fill: currentColor;
    line-height: 1;
  }

  /* Same CSS as in Button.js */

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
`;

const clockIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12"><path fill="currentColor" fill-rule="evenodd" d="M7.1 3.25v3.5c0 .14-.11.25-.25.25h-2.5c-.14 0-.25-.11-.25-.25v-.5c0-.14.11-.25.25-.25H6.1V3.25c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zM10.35 6c0-2.344-1.906-4.25-4.25-4.25-2.344 0-4.25 1.906-4.25 4.25 0 2.344 1.906 4.25 4.25 4.25 2.344 0 4.25-1.906 4.25-4.25zm1.75 0c0 3.312-2.687 6-6 6-3.312 0-6-2.688-6-6 0-3.313 2.688-6 6-6 3.313 0 6 2.687 6 6z"/></svg>

export default ({className, disabled, btnText}) => (
  <ButtonWithLeftIcon type="button" className={className} disabled={disabled}>
    <div className="svg-icon-left">{clockIcon}</div>
    {btnText}
  </ButtonWithLeftIcon>
)