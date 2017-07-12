import React from 'react'
import styled from 'styled-components'
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const DatePicker = styled.div`
  input:disabled {
    cursor: not-allowed;
    box-shadow: none;
    background: rgba(206, 217, 224, 0.5);
    cursor: not-allowed;
    color: rgba(92, 112, 128, 0.5);
    resize: none;
  }

  input {
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background: #ffffff;
    height: 30px;
    padding: 0 10px;
    vertical-align: middle;
    line-height: 30px;
    color: #182026;
    font-size: 14px;
    font-weight: 400;

    &:focus {
      box-shadow: 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    }
  }
`

      

export default ({disabled}) => (
  <DatePicker>
    <label htmlFor="textInput">Pick a date
      <span> (required)</span>
    </label>
    <div>
      <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" disabled={disabled} />
    </div>
  </DatePicker>
)